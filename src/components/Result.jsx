import {React, useState, useEffect} from 'react'
import {Box, styled} from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../context/DataProvider'

const Container = styled(Box)`
height: 41vh;
`

const Result = ()=> {
    const [src,setSrc] = useState('')
    const { html, css, js} = useContext(DataContext);

    const srcCode = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html>
    `
    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setSrc(srcCode)
        },250)

        return ()=> clearTimeout(timeOut);
    },[html,css,js])
  return (
    <Container>
      <iframe
      srcDoc={src}
      height="100%"
      width="100%"
      title='Output'
      sandbox='allow-scripts'
      frameBorder={0}
      />
    </Container>
  )
}
 export default Result;
