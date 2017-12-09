import styled from 'styled-components'

const Div = styled.div`
  ${p =>
    Object.keys(p)
      .map(k => `${k}: ${p[k]};`)
      .join('\n')};
`

export { Div }
