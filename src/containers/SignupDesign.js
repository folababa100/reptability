import React, { Component } from 'react';
import { Grid, Card, Image, Button, Icon, Divider, Input, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class SignupDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  onTogglePassword() {
    this.state.show === false ? this.setState({ show: true }) : this.setState({ show: false })
  }
  render() {
    return (
      <div className="color-grey">
        <Grid container columns={2} centered>
          <div className="signup-card">
            <Grid.Column>
              <Card style={{ width: '29rem', height: '93vh' }}>
                <div style={{ marginTop: '3rem' }} className="card-container">
                  <Card.Content style={{ paddingLeft: '3rem', paddingRight: '3rem' }}>
                    <Image style={{ width: '5rem', height: '5rem' }} src="/images/Reptability123.png"/>
                    <h2>
                      Sign Up
                    </h2>
                    <Button className="max-width" color='facebook' size="huge">
                      <Icon style={{ color: '#fff' }} name='facebook' /> Continue with Facebook
                    </Button>
                    <Divider horizontal>OR</Divider>
                    <Form>
                      <Input className="mt-2 max-width" size="huge" placeholder='Email Address'/>
                      <Input className="mt-2 max-width" size="huge" placeholder='Password' iconPosition="right">
                        {
                          this.state.show === false ? (
                            <input type="password" />
                          ) : (
                            <input type="text" />
                          )
                        }
                        
                        {
                          this.state.show === false ? (
                            <Icon onClick={() => this.onTogglePassword()} style={{ cursor: 'pointer' }} name='eye' />
                          ) : (
                            <Icon onClick={() => this.onTogglePassword()} style={{ cursor: 'pointer' }} name='eye slash' />
                          )
                        }
                      </Input>
                      <Button type="submit" className="signup-page-btn mt-2 max-width" size="huge" style={{ marginTop: '1.3rem' }}>Sign Up</Button>
                    </Form>
                    <div className="link-to-other">
                      <Link to="/login">Already a member?</Link>
                    </div>
                  </Card.Content>
                </div>
              </Card>
            </Grid.Column>
          </div>
        </Grid>
      </div>
    )
  }
}
