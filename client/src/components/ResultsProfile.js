import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import { Card,
  CardHeader,
  CardTitle,
  CardMedia,
  CardActions,
} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import { Row, Col } from 'react-flexbox-grid';

const style = {
  marginTop: 8,
  marginBottom: 8,
};
const chipStyle = {
  marginTop: 5,
  marginLeft: 5,
  display: 'inline-block',
};

class ResultsProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      first,
      last,
      bio,
      age,
      gender,
      email,
      zipcode,
      instruments,
      genres,
      influences,
      preferredInstruments,
      preferredGenres,
      video_url,
      song_url,
      photo_src,
    } = this.props.currentResult || this.props.currentMatch;
    const { city, state } = { city: 'city', state: 'state' };
    const fullname = `${first} ${last}`;
    const profile = `${gender}, ${age}`;
    const location = `${city}, ${state} ${zipcode}`;

    if (this.props.currentResult || this.props.currentMatch) {
      let videoId = '';
      if (video_url) {
        const videoUrl = video_url.split('/');
        const videoQuery = videoUrl[videoUrl.length - 1].split('=');
        videoId = videoQuery[videoQuery.length - 1];
      }

      const profileHeader = () => {
        if(this.props.currentResult){
          return (<Row>
              <Col xs={12}>
                <Paper style={style}>
                  <Card className="chat-title">
                    <img
                      className="chat-picture"
                      width="100"
                      height="100"
                      alt="profile-pic"
                      src={photo_src || '/assets/avatar.jpg'}
                    />
                    <CardTitle title={fullname} subtitle={bio} />
                  </Card>
                </Paper>
              </Col>
            </Row>)
        }
      };


      return (
        <div>
          {profileHeader()}
          <Row>
            <Col xs={12} sm={6}>
              <Paper style={style}>
                <Card>
                  <CardTitle title="Personal Info" />
                  <List>
                    <ListItem
                      leftIcon={<i className="material-icons">account_circle</i>}
                      primaryText={profile}
                    />
                    <ListItem
                      leftIcon={<i className="material-icons">email</i>}
                      primaryText={email}
                    />
                    <ListItem
                      leftIcon={<i className="material-icons">place</i>}
                      primaryText={location}
                    />
                  </List>
                </Card>
              </Paper>
            </Col>
            <Col xs={12} sm={6}>
              <Paper style={style}>
                <Card>
                  <CardTitle title="Checkout my skills..." />
                  <List>
                    <ListItem
                      leftIcon={<i className="material-icons">music_video</i>}
                      primaryText="YouTube"
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <CardMedia key={videoId}>
                          <iframe
                            frameBorder="0"
                            allowFullScreen
                            title="video"
                            src={`https://www.youtube.com/embed/${videoId}`}
                          />
                        </CardMedia>,
                      ]}
                    />
                    <ListItem
                      leftIcon={<i className="material-icons">audiotrack</i>}
                      primaryText="SoundCloud"
                      primaryTogglesNestedList={true}
                      nestedItems={[
                        <CardMedia key={song_url}>
                          <iframe
                            scrolling="no"
                            frameBorder="no"
                            title="audio"
                            src={song_url}
                          />
                        </CardMedia>,
                      ]}
                    />
                  </List>
                </Card>
              </Paper>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6}>
              <Paper style={style}>
                <Card>
                  <CardTitle title="Me as a Musician" />
                  <List>
                    <ListItem
                      leftIcon={<i className="material-icons">speaker</i>}
                      primaryText="My Instruments"
                      primaryTogglesNestedList={true}
                      nestedItems={instruments.map(instrument =>
                        <Chip key={instrument} style={chipStyle}>{instrument}</Chip> // eslint-disable-line
                      )}
                    />
                    <ListItem
                      leftIcon={<i className="material-icons">album</i>}
                      primaryText="My Genres"
                      primaryTogglesNestedList={true}
                      nestedItems={genres.map(genre =>
                        <Chip key={genre} style={chipStyle}>{genre}</Chip> // eslint-disable-line
                      )}
                    />
                    <ListItem
                      leftIcon={<i className="material-icons">headset</i>}
                      primaryText="My Influences"
                      primaryTogglesNestedList={true}
                      nestedItems={influences.map(influence => (
                        <Card key={influence.name}>
                          <CardHeader title={influence.name} avatar={influence.img} />
                        </Card> // eslint-disable-line
                      ))}
                    />
                  </List>
                </Card>
              </Paper>
            </Col>
            <Col xs={12} sm={6}>
              <Paper style={style}>
                <Card>
                  <CardTitle title="I am looking for Musicians..." />
                  <List>
                    <ListItem
                      leftIcon={<i className="material-icons">grade</i>}
                      primaryText="Preferred Instruments"
                      primaryTogglesNestedList={true}
                      nestedItems={preferredInstruments.map(instrument =>
                        <Chip key={instrument} style={chipStyle}>{instrument}</Chip> // eslint-disable-line
                      )}
                    />
                    <ListItem
                      leftIcon={<i className="material-icons">favorite</i>}
                      primaryText="Preferred Genres"
                      primaryTogglesNestedList={true}
                      nestedItems={preferredGenres.map(genre =>
                        <Chip key={genre} style={chipStyle}>{genre}</Chip> // eslint-disable-line
                      )}
                    />
                  </List>
                </Card>
              </Paper>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (<div />);
    }
  }
}

export default ResultsProfile;
