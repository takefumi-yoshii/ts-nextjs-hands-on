import React from 'react'
import Next from 'next'
import styled from 'styled-components'
// ______________________________________________________
//
type Props = {
  className?: string
}
// ______________________________________________________
//
const Page: Next.NextFC<Props> = props => (
  <div className={props.className}>Welcome to next.js!</div>
)
// ______________________________________________________
//
const StyledPage = styled(Page)`
  color: #f00;
`
// ______________________________________________________
//
export default StyledPage
