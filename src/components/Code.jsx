import {React, useContext} from 'react'
import Editor from './Editor'
import {Box, styled} from "@mui/material"
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
display:flex;
background-color: #060606;
height: 50vh;
`

function Code() {
    const {html, sethtml, css, setcss, js, setjs} = useContext(DataContext)
  return (
    <Container>
      <Editor 
      heading="HTML"
      icon="/"
      iconColor="red"
      value={html}
      onChange={sethtml}
      />
      <Editor 
      heading="CSS"
      icon="*"
      iconColor="blue"
      value={css}
      onChange={setcss}
      />
      <Editor 
      heading="JS"
      icon="( )"
      iconColor="yellow"
      value={js}
      onChange={setjs}
      />
    </Container>
  )
}

export default Code
