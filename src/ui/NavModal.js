import React, { Component } from 'react';
import { Grid, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default class NavModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
  }
  render() {
    return (
      <div className="navmodal" data-aos="fade-in">
        <div >
          <Grid columns="equal" container textAlign="center">
            <Grid.Column>
              <div style={{}} >
                <h2>  <Icon name="cancel" style={{float:"right"}} className="xcursor" onClick={()=>this.props.handleClose()}/></h2>
              </div>
            </Grid.Column>
            <Grid.Row className="modal-links">
              <Grid.Column>
                <Grid textAlign="center">
                  <Grid.Row data-aos="zoom-in">
                    <Grid.Column>
                      <Link to="/">Home</Link>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row  data-aos="zoom-in" data-aos-delay="100">
                    <Grid.Column>
                      <Link to="/about">About</Link>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row  data-aos="zoom-in" data-aos-delay="300">
                    <Grid.Column>
                      <Link to="/dashboard">Dashboard</Link>
                    </Grid.Column>
                  </Grid.Row>
                                
                  <Grid.Row  data-aos="zoom-in" data-aos-delay="300">
                    <Grid.Column>
                      <Link to="/signin">Sign In</Link>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row  data-aos="zoom-in" data-aos-delay="300">
                    <Grid.Column>
                      <Link to="#">Logout</Link>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row  data-aos="zoom-in" data-aos-delay="300">
                    <Grid.Column>
                      <Link to="/dashboard">Sign Up</Link>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
