import React, { Component } from 'react';
import { Grid, List, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavModal from './NavModal'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      active: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  toggleModal() {
    this.setState({ toggleModal: true })
  }
  handleOpen() {
    this.setState({ active: true })
  }
  handleClose() {
    this.setState({ toggleModal: false, active: false })
  }
  render() {
    return (
      <header className="rep-header">
        {this.state.toggleModal?<NavModal handleClose={this.handleClose}/>:null}
        <Grid container columns="equal" className="ui-header adjust">
          <Grid.Column className="adjust-down" mobile="8">
            <div className="nav-brand">
              <Link to="/">
                <span style={{ marginTop: '0.2rem', color: "#737373", fontFamily: "'Bree Serif', serif" }}>Reptability</span>
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column only="mobile" mobile="8" style={{ textAlign: 'center', display: 'flex', justifyContent: 'flex-end'}}>
            <Button  onClick={this.toggleModal} compact color="red" style={{textAlign:"center"}} ><Icon name="bars" style={{margin:"0"}} /></Button>
          </Grid.Column>
          <Grid.Column only="tablet computer">
            <List floated="right" horizontal>
              <List.Item>
                <Link to="/contact" className="a-login">
                  About
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/contact" className="a-login">
                  Contact
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/login" className="a-login">
                  Login
                </Link>
              </List.Item>
              <List.Item>
                <Link to="/signup">
                  <Button className="sign-up-button">
                    Signup
                  </Button>
                </Link>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </header>
    )
  }
}
