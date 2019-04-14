import React, { Component } from 'react';
import { Grid, Button, Image, Responsive, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class HomeBody extends Component {
  render() {
    return (
      <div>
        <div className="home-design">
          <Grid container>
            <Grid.Row columns="2" style={{ marginTop: '4rem' }}>
              <Grid.Column computer="8" tablet="8" mobile="16">
                <div className="landing-text">
                  <h1 className="landing-color-white">
                    Hire experts workers on Reptability for your project.
                  </h1>
                  <h5 style={{ color: '#f9f9f9', fontSize: '1.3rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
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
              <Grid.Column computer="8" tablet="8">
                <Responsive minWidth={786}>
                  <Image src="/images/rep.jpg"/>
                </Responsive>
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
              <Grid.Column only="tablet computer" style={{ marginTop: '5rem' }} width="10">
                <Image src="/images/rep.jpg"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className="work-mode-three">
          <Grid container>
            <h3 style={{ marginTop: '6rem', textAlign: 'center', width: '100%' }} className="mode-h3">
              Check the top workers for each categories
            </h3>
            <Grid.Row columns="4">
              <Grid.Column>
                <div>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                  <Link className="a-man" to="/">
                    <Icon style={{ textDecoration: 'none' }} name="caret right"/>
                    Lorem Ipsum
                  </Link>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
