import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div style={{ backgroundColor: '#607d8b' }}>
          <Grid centered>
            <Grid.Row columns="4" className="footer-down">
              <Grid.Column style={{ marginBottom: '0.5rem' }} width="12">
                <p className="p-foot">2019 Reptability icorporation</p>
              </Grid.Column>
              <Grid.Column style={{ marginBottom: '0.5rem' }} width="12">
                <p className="p-footer">Terms of service</p>
              </Grid.Column>
              <Grid.Column style={{ marginBottom: '0.5rem' }} width="12">
                <p className="p-footer">Privacy policies</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </footer>
    )
  }
}
