import React from 'react'
import styled from 'styled-components'
import { useStoreState } from 'easy-peasy'
import { not } from 'ramda'

import { Device } from '@/components'
import { isValidUrl } from '@/utils'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 40px;
  overflow: auto;
`

const Empty = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
`

export const Devices = () => {
  const { url } = useStoreState(({ config }) => config)

  const devices = [
    {
      name: 'Moto G4',
      category: 'phone',
      width: 360,
      height: 640,
      zoom: 100,
      userAgent:
        'Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Mobile Safari/537.36'
    },
    // {
    //   name: 'iPad',
    //   category: 'tablet',
    //   width: 768,
    // zoom: 100,
    //   height: 1024,
    //   userAgent: ''
    // },
    {
      name: 'iPhone 5/SE',
      category: 'phone',
      width: 320,
      height: 568,
      zoom: 100,
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 13_0 like Mac OS X) AppleWebKit/602.1.38 (KHTML, like Gecko) Version/66.6 Mobile/14A5297c Safari/602.1'
    }
    // {
    //   name: 'iPhone 6/7/8',
    //   category: 'phone',
    //   width: 375,
    //   height: 667,
    // zoom: 100,
    //   userAgent: ''
    // },
    // {
    //   name: 'Pixel 2',
    //   category: 'phone',
    //   width: 411,
    // zoom: 100,
    //   height: 731,
    //   userAgent: ''
    // }
  ]

  return (
    <Container>
      {isValidUrl(url) &&
        devices.map(({ name, width, height, userAgent, zoom }) => (
          <Device
            url={url}
            name={name}
            key={name}
            width={width}
            zoom={zoom}
            height={height}
            userAgent={userAgent}
          />
        ))}

      {not(isValidUrl(url)) && <Empty />}
    </Container>
  )
}
