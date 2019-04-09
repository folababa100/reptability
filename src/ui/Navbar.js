import React, { Component } from 'react';
import { Grid, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <Grid container columns="equal" className="ui-header">
          <Grid.Column  tablet="4" computer="4" only="tablet computer">
            <div className="nav-brand">
              <Link to="/">
                <span style={{ marginTop: '0.2rem', color: "#737373" }}>Reptability</span>
              </Link>
            </div>
          </Grid.Column>
          <Grid.Column only="tablet computer">
            <List floated="right" horizontal>
              <List.Item>
                <Link to="login" className="a-login">
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
