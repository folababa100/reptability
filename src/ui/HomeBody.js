import React, { Component } from 'react';
import { Grid, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class HomeBody extends Component {
  render() {
    return (
      <div>
        <div className="home-design">
          <Grid container>
            <Grid.Row columns="2" style={{ marginTop: '4rem' }}>
              <Grid.Column>
                <div className="landing-text">
                  <h1 className="landing-color-white">
                    Hire experts workers on Reptability for your project.
                    The best is guaranteed.
                  </h1>
                </div>
                <Grid.Row style={{ marginTop: '3rem' }} columns="2">
                  <Link to="/signup">
                    <Button size="huge" className="btn-worker">
                      Be a Worker
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button size="huge" className="btn-employer">
                      Be an Employer
                    </Button>
                  </Link>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <Image src="/images/rep.jpg"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="reps">
          <span className="first-reps"></span>
          <span className="second-reps"></span>
          <span className="third-reps"></span>
        </div>
        <div className="home-mode-two">
          <Grid container>
            <Grid.Row columns="2">
              <Grid.Column width="6">
                <div className="home-mode-one">
                  <h2 style={{ fontSize: '2.5rem' }}>Lorem Ipsum</h2>
                  <p className="home-mode-one-text" style={{ fontSize: '1.5rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                  <Button className="home-mode-one-button" size="huge">
                    Start working
                  </Button>
                </div>
              </Grid.Column>
              <Grid.Column style={{ marginTop: '5rem' }} width="10">
                <Image src="/images/rep.jpg"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
