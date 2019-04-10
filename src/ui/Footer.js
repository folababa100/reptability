import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={{ backgroundColor: '#607d8b' }}>
          <Grid>
            <Grid.Row columns="4" className="footer-down">
              <Grid.Column width="7">

              </Grid.Column>
              <Grid.Column width="3">
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
              </Grid.Column>
              <Grid.Column width="3">
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
              </Grid.Column>
              <Grid.Column width="3">
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
                <p className="mt-4">Lorem ipsum</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </footer>
    )
  }
}
