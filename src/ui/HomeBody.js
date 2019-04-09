import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class HomeBody extends Component {
  render() {
    return (
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

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
