import React, { useContext, useEffect, useState, memo } from 'react'
import { Resizable } from 're-resizable'
import styled, { ThemeContext } from 'styled-components'
import { theme } from 'styled-tools'
import useDynamicRefs from 'use-dynamic-refs'

import { Icon, Text } from '@viewporty/components'
import {
  isNil,
  prop,
  equals,
  not,
  pipe,
  map,
  filter,
  split,
  isEmpty,
  when,
  propEq,
  flatten
} from 'ramda'

const { remote, ipcRenderer } = window.require('electron')

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme('colors.one')};
  border-left: 1px solid ${theme('colors.seven')};
`

const Style = styled.div`
  font-family: ${theme('font.family.one')};
  color: ${theme('colors.twelve')};
  font-size: ${theme('font.size.fourteen')};
  padding: 0 10px;
  margin-bottom: 15px;
`

const StyleValue = styled.input`
  background-color: transparent;
  border: none;
  display: initial;
  font-family: ${theme('font.family.one')};
  color: ${theme('colors.twelve')};
  cursor: pointer;
  margin-left: 5px;

  &:focus {
    outline: none;
  }

  ::selection {
    background-color: ${theme('colors.twelve')};
  }
`

const Bracket = styled.div`
  color: ${theme('colors.five')};
  display: inline-block;
  font-size: ${theme('font.size.fourteen')};
`

const StyleProperty = styled(Text)`
  margin-left: 15px;
  display: initial;
  color: ${theme('devtools.colors.five')};
`

const Box = ({ size, padding, border, margin }) => {
  return (
    <div className="margin">
      <div className="border">
        <div className="padding">
          <div className="size">{}</div>
        </div>
      </div>
    </div>
  )
}

const style = {
  position: 'absolute',
  top: 0,
  right: 0
}

const Styles = ({ styles, setStyles }) => {
  const [getRef, setRef] = useDynamicRefs()

  useEffect(() => {
    const allInputProperties = pipe(
      map(({ selector, properties }) =>
        map(({ property }) => `${selector}-${property}`, properties)
      ),
      flatten
    )(styles)

    const events = ['keyup', 'keypress', 'focus', 'blur', 'change', 'input']

    allInputProperties.forEach((ref) => {
      const { current } = getRef(ref)

      const resizeWidth = () =>
        (current.style.width = (current.value.length + 1) * 7 + 'px')

      resizeWidth()

      events.forEach((event) => current.addEventListener(event, resizeWidth))
    })
  }, [])

  const onKeyDown = ({ selector, property }) => ({ key, target }) => {
    if (not(equals(key, 'Enter'))) {
      return
    }

    const allWebContents = remote.webContents.getAllWebContents()

    allWebContents.forEach((webContent) => {
      webContent.send('whenStyleModified', {
        selector,
        property,
        value: target.value
      })
    })
  }

  const onChangeStyle = ({ selector, property }) => ({ target }) => {
    const withStyleModified = map(
      when(propEq('selector', selector), ({ selector, properties }) => ({
        selector,
        properties: map(
          when(propEq('property', property), ({ property }) => ({
            property,
            value: target.value
          })),
          properties
        )
      })),
      styles
    )

    setStyles(withStyleModified)
  }

  return (
    <>
      {styles.map(({ selector, properties }) => (
        <Style key={selector}>
          {selector}
          <Bracket>{`{`}</Bracket>
          {properties.map(({ property, value }) => (
            <div key={property}>
              <StyleProperty fontWeight={0} fontSize={1}>
                {property}
              </StyleProperty>
              :{' '}
              <StyleValue
                ref={setRef(`${selector}-${property}`)}
                value={value}
                onFocus={({ target }) => target.select()}
                onChange={onChangeStyle({ selector, property })}
                onKeyDown={onKeyDown({ selector, property })}
              />
            </div>
          ))}
          <Bracket>}</Bracket>
        </Style>
      ))}
    </>
  )
}

export const Devtools = memo(() => {
  const { colors } = useContext(ThemeContext)
  const [styles, setStyles] = useState([])

  const standardizedStyles = (styles) =>
    styles.map((style) => {
      const [selector] = style.match(/^[^{]+/)
      const [propertiesWithKeys, properties] = style.match(/\{(.*?)\}/)

      const propertiesAggregated = pipe(
        split(';'),
        map((style) => {
          const [property, value] = style.split(':')

          return {
            property: property?.trim(),
            value: value?.trim()
          }
        }),
        filter(({ property }) => property)
      )(properties)

      return {
        selector,
        properties: propertiesAggregated
      }
    })

  useEffect(() => {
    ipcRenderer.on('whenInspected', (_, data) => {
      const { styles } = data

      setStyles(standardizedStyles(styles))
    })
  }, [])

  return (
    <Resizable
      style={style}
      enable={{
        top: false,
        bottom: false,
        right: false,
        left: true
      }}
      defaultSize={{
        width: 320,
        height: '100%'
      }}
    >
      <Container>
        <Icon
          name="inspector"
          color={colors.five}
          width={15}
          height={15}
          onClick={() => {
            const allWebContents = remote.webContents.getAllWebContents()

            allWebContents.forEach((webContent) => {
              webContent.send('toInspect', true)
            })
          }}
        />

        {not(isEmpty(styles)) && (
          <Styles styles={styles} setStyles={setStyles} />
        )}
      </Container>
    </Resizable>
  )
})
