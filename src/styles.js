// @flow
import styled from 'styled-components'

// use this if you prefer to not naming some style.
// refer to https://spectrum.chat/?t=014f7053-e24a-4891-a633-4065e91f3bf8
const Div = styled.div`
  ${p =>
    Object.keys(p)
      .map(k => `${k}: ${p[k]};`)
      .join('\n')};
`

const theme = {
  // background: '#78CA95',
  background: '#F6F8FC',
}

export { Div, theme }
