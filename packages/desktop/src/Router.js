import React, { Suspense, memo, useCallback, useRef, useContext } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy'
import styled, { ThemeContext } from 'styled-components'
import { isNil, not, equals } from 'ramda'
import { DndProvider, useDrop, useDrag } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper'

import { Devices } from '@/screens'

import { Header, Sidebar } from '@/containers'
import { Modal, Text, Icon } from '@/components'
import { theme } from 'styled-tools'

const Organizable = ({ name, move, index, width, height, isHidden }) => {
  const { colors } = useContext(ThemeContext)
  const { toggleVisibility } = useStoreActions(({ devices }) => devices)

  const ref = useRef(null)
  const [, drop] = useDrop({
    accept: 'item',
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      move(dragIndex, hoverIndex)

      item.index = hoverIndex
    }
  })

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'item', name, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  })

  const opacity = isDragging ? 0 : 1

  drag(drop(ref))

  return (
    <Organizable.Container ref={ref}>
      <Icon
        onClick={() => toggleVisibility({ name, isHidden: not(isHidden) })}
        name={isHidden ? 'eyeClosed' : 'eye'}
        color={colors.three}
        width={20}
        height={20}
        right={15}
      />

      <div>
        <Text color={colors.three}>{name}</Text>
        <Text color={colors.five} size="thirteen">
          ({width} x {height})
        </Text>
      </div>
    </Organizable.Container>
  )
}

Organizable.Container = styled.div`
  width: 100%;
  padding: 10px 10px;
  cursor: move;
  display: flex;
  margin: 5px 0;
  border-radius: ${theme('border.radius.four')};

  &:hover {
    background-color: ${theme('colors.six')};
  }
`

const Organizables = () => {
  const { setDevices } = useStoreActions(({ devices }) => devices)

  const { devices } = useStoreState(
    ({ devices }) => ({
      devices: devices.data
    }),
    equals
  )

  const move = useCallback(
    (dragIndex, hoverIndex) => {
      const dragged = devices[dragIndex]

      setDevices(
        update(devices, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragged]
          ]
        })
      )
    },
    [devices]
  )

  return (
    <Organizables.Container>
      {devices.map(({ name, width, height, isHidden }, index) => (
        <Organizable
          key={name}
          index={index}
          name={name}
          width={width}
          height={height}
          isHidden={isHidden}
          move={move}
        />
      ))}
    </Organizables.Container>
  )
}

Organizables.Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Router = memo(() => {
  const { modal } = useStoreState(({ config }) => config)
  const { setModal } = useStoreActions(({ config }) => config)

  const mapping = {
    ORGANIZE_DEVICES: <Organizables />
  }

  return (
    <>
      <DndProvider backend={Backend}>
        <Modal isOpen={not(isNil(modal))} close={() => setModal(null)}>
          {mapping[modal]}
        </Modal>
      </DndProvider>

      <Suspense fallback={<div>loading</div>}>
        <HashRouter>
          <Switch>
            <Sidebar>
              <Header>
                <Route path="/" exact component={Devices} />
              </Header>
            </Sidebar>
          </Switch>
        </HashRouter>
      </Suspense>
    </>
  )
})

export default Router
