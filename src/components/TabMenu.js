import React, {Component} from 'react'
import {
  ClickAwayListener,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Tab,
  Tabs
} from "@material-ui/core";

export default class TabMenu extends Component{
  constructor(props){
    super(props)
    this.state = {
      activeKey: false,
      anchorEl: null,
      openSub: false,
      openPop: false
    }
    this.handleTabClick = this.handleTabClick.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleSubMenuClick = this.handleSubMenuClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.populateMenu = this.populateMenu.bind(this)
    this.subMenu = this.subMenu.bind(this)
  }
  
  handleTabClick(e,v){
    this.setState({activeKey: v})
  }
  handleMenuClick(e) {
    this.setState({
      anchorEl: e.currentTarget,
      openPop: true,
    })
  }
  handleSubMenuClick() {
    this.setState({
      openSub: true
    })
  }
  handleClose() {
    this.setState({
      anchorEl: null,
      openPop: false,
      openSub: false
    })
  }
  subMenu(menuRef, show){
    return(
      <Menu
        anchorEl={menuRef}
        keepMounted
        open={show}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={this.handleClose}>Submenu 2.2.1</MenuItem>
        <MenuItem onClick={this.handleClose}>Submenu 2.2.2</MenuItem>
        <MenuItem onClick={this.handleClose}>Submenu 2.2.3</MenuItem>
      </Menu>
    )
  }
  
  populateMenu() {
    return(
      <ClickAwayListener onClickAway={this.handleClose}>
        <MenuList>
          <MenuItem onClick={this.handleClose}>Submenu 2.1</MenuItem>
          <MenuItem onClick={this.handleSubMenuClick} ref={ref => this.menuRef = ref}>Submenu 2.2</MenuItem>
          {this.subMenu(this.menuRef, this.state.openSub)}
          <MenuItem onClick={this.handleClose}>Submenu 2.3</MenuItem>
        </MenuList>
      </ClickAwayListener>
    )
  }
  
  render() {
    const {openPop, anchorEl, openSub, activeKey} = this.state
    return(
      <div>
      <Popper open={openPop} anchorEl={anchorEl} placement="bottom">
        <Paper>
          {this.populateMenu(openSub)}
        </Paper>
      </Popper>
      <Tabs value={activeKey} onChange={this.handleTabClick}>
        <Tab label="Title 1" disableRipple={true} />
        <Tab label="Title 2" onClick={this.handleMenuClick} />
        <Tab label="Title 3" disableRipple={true} />
        <Tab label="Title 4" disableRipple={true} />
        <Tab label="Title 5" disableRipple={true} />
        <Tab label="Title 6" disableRipple={true} />
        <Tab label="Title 7" disableRipple={true} />
      </Tabs>
      </div>
    )
  }
}
