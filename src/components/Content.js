import React, {Component} from 'react'
import {Container, Link, Breadcrumbs} from "@material-ui/core";
import {Route, Link as RouteLink, BrowserRouter as Router} from 'react-router-dom'
import Home from '../pages/Home'
import WWA from '../pages/WWA'
import Contact from '../pages/Contact'

export default class Content extends Component{
  constructor(props){
    super(props)
    this.state = ({
      activeBreadCrumb: 0
    })
    this.handleBreadCrumb = this.handleBreadCrumb.bind(this)
  }
  handleBreadCrumb(path){
    this.setState({
      activeBreadCrumb: path
    })
  }
  render() {
    const {activeBreadCrumb} = this.state
    return(
      <Router>
        <Container maxWidth="md" className="breadCrumbs">
          <Breadcrumbs>
            <Link
              component={RouteLink}
              to="/"
              className={activeBreadCrumb === 0 ? "activeBreadCrumb": ""}
              onClick={() => this.handleBreadCrumb(0)}
            >
              Home
            </Link>
            <Link
              component={RouteLink}
              to="/who-we-are"
              className={activeBreadCrumb === 1 ? "activeBreadCrumb": ""}
              onClick={() => this.handleBreadCrumb(1)}
            >
              Who We Are
            </Link>
            <Link
              component={RouteLink}
              to="/contact"
              className={activeBreadCrumb === 2 ? "activeBreadCrumb": ""}
              onClick={() => this.handleBreadCrumb(2)}
            >
              Contact
            </Link>
          </Breadcrumbs>
        </Container>
        <Route exact path="/" component={Home}/>
        <Route path="/who-we-are" component={WWA}/>
        <Route path="/contact" component={Contact}/>
      </Router>
    )
  }
}
