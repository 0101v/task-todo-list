import styled, { keyframes } from 'styled-components'

const typing = keyframes`
  from { width: 0 }
  to { width: 75% }
`

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: black }
`

export const Header = styled.div`
  align-items: flex-end;
  display: flex;
`
export const Text = styled.h1`
  overflow: hidden;
  border-right: 1px solid black;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .15em;
  animation:
    ${typing} 3.5s steps(30, end),
    ${blinkCaret} .5s step-end infinite;
`