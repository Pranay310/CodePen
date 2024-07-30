import {React, useState} from 'react'
import {Box, styled} from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'

import '../App.css'

const Container = styled(Box)`
flex-grow:1;
flex-basic:0;
display:flex;
flex-direction: column;
padding: 0px 8px 8px;
`


const Heading = styled(Box)`
background: #1d1e22;
display: flex;
padding: 9px 12px; 
border-top-left-radius: 15px;
border-top-right-radius: 2px;
`;

const Header = styled(Box)`
display:flex;
background: black;
color: white;
justify-content:space-between;
display:flex;
font-weight:700
`

function Editor({heading, icon, iconColor, value, onChange}) {
    const [open, setOpen] = useState(true)
    const handelChange = (editor, data, value)=>{
        
        onChange(value)
    }

  return (
    <Container
    style={open ? null : { flexGrow:0,}}
    >
      <Header>
        <Heading>
            <Box 
            component="span"
            style={{
                background: iconColor,
                color: 'black',
                display:'flex',
                height: 20,
                width: 20,
                placeContent: 'center',
                borderRadius: 5,
                marginRight: 5,
                paddingBottom: 2,

            }}
            >{icon}</Box>{heading}
        </Heading>
        <CloseFullscreenIcon
         fontSize="small"
        style={{cursor:'pointer', alignSelf:"center"}}
        onClick={()=>{setOpen(prevState => !prevState)}}
        />
      </Header>

      <ControlledEditor
      className='controlled-editor'
      value = {value}
      onBeforeChange={handelChange}
      options={{
        theme: 'material',
        lineNumbers: true
      }}
      />

    </Container>
  )
}

export default Editor
