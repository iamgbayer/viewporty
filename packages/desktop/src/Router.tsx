import React, { Suspense, memo, useCallback, useRef, useContext } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import { useStoreState, useStoreActions } from 'easy-peasy'
import styled, { ThemeContext } from 'styled-components'
import { isNil, not, equals, prop, path } from 'ramda'
import { DndProvider, useDrop, useDrag } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper'

import { Devices } from 'screens'

import { Header, Sidebar } from 'containers'
import { Modal, Text, Icon } from '@viewporty/components'
import { theme } from 'styled-tools'

const Description = styled.div`
  display: flex;
`

type Props = {
  name: string
  move: (dragIndex: number, hoverIndex: number) => void
  index: number
  width: number
  height: number
  isHidden: boolean
}

const Organizable = ({ name, move, index, width, height, isHidden }: Props) => {
  const { colors } = useContext(ThemeContext)
  const { toggleVisibility } = useStoreActions(prop('devices'))

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

      if (isNil(ref.current)) {
        return
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      if (isNil(clientOffset)) {
        return
      }

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
        color="accent.300"
        width={20}
        height={20}
        marginRight={15}
      />

      <Description>
        <Text color="accent.300" marginRight={10}>
          {name}
        </Text>
        <Text color="accent.400" fontSize={1}>
          ({width} x {height})
        </Text>
      </Description>
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
    background-color: ${theme('colors.accent.600')};
  }
`

const Organizables = () => {
  const { setDevices } = useStoreActions(prop('devices'))
  const devices = useStoreState(path(['devices', 'data']), equals)

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
  const { setModal } = useStoreActions(prop('config'))

  const mapping: Record<string, React.ReactNode> = {
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
