import styled from 'styled-components'
import media from 'styled-media-query'

export const Hidden = styled.div`
  ${media.lessThan('large')`
    display: none;
  `};
`
