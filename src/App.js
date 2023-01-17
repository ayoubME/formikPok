import React from 'react'
import './styles.css'

import { CssBaseline } from '@mui/material'
// import SignUp from './UseForm'
import SignUp from './withFormik'

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <SignUp />
    </React.Fragment>
  )
}
