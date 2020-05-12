import { generateMedia } from 'styled-media-query'

export const breakpoints = generateMedia({
  sm: '576px',
  md: '768px',
  lg: '992px',
  x1: '1200px'
})

export const enterWithY = y => ({
  initial: { opacity: 0 },
  enter: { opacity: 1, y },
  exit: { opacity: 0 }
})

export const enterWithX = (initial, x) => ({
  initial: { opacity: 0, x: initial },
  enter: {
    opacity: 1,
    x,
    transition: {
      duration: 0.4
    }
  },
  exit: { opacity: 0 }
})

export const hasTenantOfString = string => {
  const [subdomain, domain] = string.split('.')

  return !!domain
}
