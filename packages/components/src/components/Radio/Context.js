import React, { createContext, useState } from 'react'

export const Context = createContext()

function Provider({ labelAlign, onChange, children, initial, size }) {
  const [checkable, setCheckable] = useState(initial)

  const setCheckableWithChange = value => {
    const keys = Object.keys(value)
    const [filtered] = keys.filter(key => value[key])

    onChange(filtered)
    setCheckable(value)
  }

  const value = {
    setCheckable: setCheckableWithChange,
    checkable,
    size,
    labelAlign
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

const Consumer = Context.Consumer

export { Consumer, Provider }
