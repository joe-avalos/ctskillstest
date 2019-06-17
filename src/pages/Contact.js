import React, {useState} from 'react'
import {
  Container,
  Grid,
  Divider,
  TextField,
  Box,
  SvgIcon
} from "@material-ui/core"

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  
  const handleChange = name => (e) => {
    setValues({...values, [name]: e.target.value})
  }
  
  const FBSVG = (props) => (
    <SvgIcon {...props}>
      <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z"/>
    </SvgIcon>
  )
  const TWSVG = (props) => (
    <SvgIcon {...props}>
      <path
        d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
    </SvgIcon>
  )
  const INSVG = (props) => (
    <SvgIcon {...props}>
      <path
        d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"/>
    </SvgIcon>
  )
  const PNSVG = (props) => (
    <SvgIcon {...props}>
      <path
        d="M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.06,16.08C14.84,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z"/>
    </SvgIcon>
  )
  
  return (
    <Container maxWidth="md">
      <h1 className="contentTitle">Contact</h1>
      <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae massa volutpat, suscipit
        nisi ut, volutpat
        neque. Aenean blandit, mi non faucibus faucibus, eros diam condimentum diam, in tempor felis ex at sem.</p>
      <Grid container spacing={9} justify="space-between">
        <Grid item xs={12} md={6}>
          <h3 className="subTitle">Contact Us</h3>
          <Divider/>
          <form noValidate autoComplete="off">
            <Grid container justify="space-between" spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label="Name *"
                  value={values.name}
                  onChange={handleChange('name')}
                  variant="filled"
                  margin="dense"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Phone *"
                  value={values.phone}
                  onChange={handleChange('phone')}
                  variant="filled"
                  margin="dense"
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Email *"
                  value={values.email}
                  onChange={handleChange('email')}
                  variant="filled"
                  margin="dense"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message *"
                  value={values.message}
                  onChange={handleChange('message')}
                  variant="filled"
                  margin="dense"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs={12} md={6} style={{position: 'relative'}}>
          <h3 className="subTitle">Reach Us</h3>
          <Divider/>
          <p className="addressText">Coalition Skills Test</p>
          <p className="addressText">
            535 La Plata Street <br/>
            4200 Argentina
          </p>
          <p className="addressText">
            Phone: 385.154.11.28.38 <br/>
            Fax: 385.154.35.66.78
          </p>
          <Box style={{position: 'absolute', bottom: '40px', width: '150px', display: 'flex', justifyContent: 'space-between'}}>
            <FBSVG className="iconSVG" />
            <TWSVG className="iconSVG" />
            <INSVG className="iconSVG" />
            <PNSVG className="iconSVG" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
