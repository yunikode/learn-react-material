import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

export default ({ muscles }) => (
  <Paper>
    <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
      <Tab key={'all'} label={'all'} />
      {muscles.map(group => <Tab key={group} label={group} />)}
    </Tabs>
  </Paper>
)
