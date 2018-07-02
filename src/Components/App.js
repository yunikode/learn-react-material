import React, { Fragment } from 'react'

import { Grid, Paper } from '@material-ui/core'

import Header from './Layouts/Header'
import Footer from './Layouts/Footer'

import { muscles, exercises } from '../store'

const style = {
  Paper: { padding: 16, marginTop: 8, marginBottom: 8 },
  Grid: { maxWidth: 'none' }
}

class App extends React.Component {
  states = {
    exercises
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Grid container spacing={8} style={style.Grid}>
          <Grid item sm>
            <Paper style={style.Paper}>left pane</Paper>
          </Grid>
          <Grid item sm>
            <Paper style={style.Paper}>right pain</Paper>
          </Grid>
        </Grid>
        <Footer muscles={muscles} />
      </Fragment>
    )
  }
}

export default App
