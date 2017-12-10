import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background: ${props => props.theme.background};
`

export default ({ children }) => <Header>{children}</Header>
