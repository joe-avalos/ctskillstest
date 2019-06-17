import React, {Component} from 'react';
import {
  Box,
  Container,
  Grid
} from "@material-ui/core";
import TabMenu from './TabMenu'

export default class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeKey: null,
      anchorEl: null,
      anchorSub: false,
      openPop: false,
      popCont: {}
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(e, v){
    e.preventDefault()
    this.setState({activeKey: v})
  }
  render() {
    return(
      <Box className="header">
        <Container maxWidth="md" style={{height: "100%"}}>
          <Grid container spacing={2} alignItems="center" style={{height: "100%"}}>
            <Grid item xs={12} md={6} className="logo">
              YOUR<span>LOGO</span>
            </Grid>
            <Grid item xs={12} md={6}>
              <TabMenu />
            </Grid>
          </Grid>
      </Container>
      </Box>
    )
  }
}
