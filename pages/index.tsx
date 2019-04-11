import React from 'react'
import Head from 'next/head'
import Component from '../components/index'
// ______________________________________________________
//
type Props = {
  title: string
}
// ______________________________________________________
//
class App extends React.Component<Props> {
  static async getInitialProps(): Promise<Props> {
    return { title: 'Hello world' }
  }
  render() {
    return (
      <>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Component />
      </>
    )
  }
}
// ______________________________________________________
//
export default App
