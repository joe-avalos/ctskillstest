import React, {PureComponent} from 'react';
import {
  AppBar,
  Toolbar,
  Link,
  Container,
  Box
} from "@material-ui/core"


export default function () {
  
  return (
    <AppBar position="static" color={"secondary"}>
      <Container style={{height: '40px'}} maxWidth="md">
        <Toolbar disableGutters={true}>
          <Box className="menu">
            Call us now! <span className="menu-white">385.154.11.28.35</span>
          </Box>
          <Box className="menu-right">
            <Link to="#login" className="menu">
              Login
            </Link>
            <Link to="#signup" className="menu-white">
              Signup
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
