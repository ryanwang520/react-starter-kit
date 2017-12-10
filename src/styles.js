import styled from 'styled-components'

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
