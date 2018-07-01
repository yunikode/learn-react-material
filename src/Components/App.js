import React, { Fragment } from 'react'

import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

class App extends React.Component {
  render() {
    return (
      <Fragment className="App">
        <Header />
        <h1>Hello CodeSandbox</h1>
        <h2>Let's learn Material UI! and React, again!</h2>
        <Footer />
      </Fragment>
    )
  }
}

export default App
