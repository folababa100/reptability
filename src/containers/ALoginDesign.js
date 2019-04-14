import React, { Component } from 'react';
import { Grid, Card, Form, Image, Input, Button, Checkbox, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

export default class ALoginDesign extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
  }
  onTogglePassword() {
    this.state.show === false ? this.setState({ show: true }) : this.setState({ show: false })
  }
  render() {
    return (
      <div className="color-grey">
        <Grid centered container>
          <Grid.Row>
            <div>
              <Grid.Column>
                <Card style={{ width: '29rem', boxShadow: '1px 1px 11px 1px #d4d4d4', marginTop: '5rem', padding: '1rem 2rem' }}>
                  <div>
                    <Card.Content style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                      <Image style={{ width: '5rem', height: '5rem' }} src="/images/Reptability123.png"/>
                      <h2>
                        Welcome back Admin
                      </h2>
                      <Form>
                        <Input className="mt-2 max-width" placeholder="Email Address" size="huge"/>
                        <Input className="mt-2 max-width" placeholder="Password" size="huge" iconPosition="right">
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
                        <Form.Field className="fielder">
                          <Checkbox label='Remember Me' />
                          <Link>Forgot Password?</Link>
                        </Form.Field>
                        <Button type="submit" className="signup-page-btn mt-2 max-width" size="huge" style={{ marginTop: '0.3rem' }}>Login</Button>
                      </Form>
                    </Card.Content>
                  </div>
                </Card>
              </Grid.Column>
            </div>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
