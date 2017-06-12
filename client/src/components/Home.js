import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { Row, Col } from 'react-flexbox-grid';
import { connect } from 'react-redux';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

        // <div id="container">
        //   <Card>
        //     <CardMedia id="base">
        //       <img alt="splash-img" src="/assets/matheus-ferrero-183749.jpg" />
        //     </CardMedia>
        //   </Card>
        //   <div id="overlay">
        //     <Row /*className="vertical-center"*/>
        //       <Col xs={0} sm={5} smOffset={1}>
        //         <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)', boxShadow: 'none', borderRadius: '25px' }}>
        //           <CardText className="home-header" style={{ color: 'white', fontSize: '30px' }}>Find, Connect, and Jam with local musicians</CardText>
        //         </Card>
        //       </Col>
        //     </Row>
        //   </div>
        // </div>
  render() {
    const { redirectURL } = this.props;
    return (
      <div>
        <div className="parallax-top">
          <div className="vertical-center">
            <div className="center-text">
              <span className="homepage-text opaque-background">Find, Connect, and Jam with local musicians</span>
            </div>
          </div>
        </div>
        <Row>
          <Card style={{ boxShadow: 'none' }}>
            <Row>
              <Col xs={12} sm={6} className="fixed-column">
                <div className="vertical-center">
                  <div className="center-text">
                    <span className="parallel-text">Build your profile</span>
                    <span className="parallel-text">&amp;</span>
                    <span className="parallel-text">Meet like-minded</span>
                    <span className="parallel-text">musicians in your area</span>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={6} className="fixed-column">
                <CardMedia className="vertical-center">
                  <img alt="splash-img" src="/assets/roman-kraft-57267.jpg" />
                </CardMedia>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="parallax-bottom">
              <div className="vertical-center">
                <div className="center-text">
                  <span className="homepage-text opaque-background">Don't jam alone</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card style={{ textAlign: 'center' }}>
              <List>
                <ListItem
                  disabled={true}
                  className="homepage-text"
                  style={{ fontSize: '26px' }}
                  primaryText="Join the community"
                />
                <ListItem disabled={true}>
                  <FlatButton
                    label="Sign up wth Facebook"
                    icon={<img
                      style={{ width: '24px' }}
                      src="/assets/fb-art.png"
                      alt="facebook-logo"
                    />}
                    href={`/auth/facebook/?returnTo=${redirectURL}`}
                  />
                </ListItem>
                <ListItem disabled={true}>
                  <FlatButton
                    label="Sign up wth Google"
                    icon={<img
                      style={{ width: '24px' }}
                      src="/assets/google_logo_transparent.png"
                      alt="google-logo"
                    />}
                    href={`/auth/google/?returnTo=${redirectURL}`}
                  />
                </ListItem>
                <ListItem disabled={true}>
                  <FlatButton
                    label="Sign up wth Twitter"
                    icon={<img
                      style={{ width: '24px' }}
                      src="/assets/twitter-128.png"
                      alt="twitter-logo"
                    />}
                    href={`/auth/twitter/?returnTo=${redirectURL}`}
                  />
                </ListItem>
              </List>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card style={{ backgroundColor: 'black', boxShadow: 'none' }}>
              <CardText style={{ color: 'white', textAlign: 'center' }}>© 2017 Bandwith</CardText>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
                // <CardTitle style={{ verticalAlign: 'middle' }} title="hello" />
        // <Row>
        //   <Card style={{ boxShadow: 'none' }}>
        //     <Col xs={12} sm={6}>
        //       <CardTitle title="" />
        //       <CardMedia>
        //         <img alt="splash-img" src="/assets/clem-onojeghuo-122041.jpg" />
        //       </CardMedia>
        //     </Col>
        //     <Col xs={12} sm={6} smOffset={6}>
        //       <CardTitle title="" />
        //     </Col>
        //   </Card>
        // </Row>

const mapStateToProps = state => ({
  redirectURL: state.redirectURL,
});

export default connect(mapStateToProps)(Home);
