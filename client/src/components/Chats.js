import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardText, CardMedia, CardHeader, CardActions } from 'material-ui/Card';
import { Row, Col } from 'react-flexbox-grid';
import ChatsList from './ChatsList';
import ChatsInput from './ChatsInput';
import ResultsProfile from './ResultsProfile';
import Paper from 'material-ui/Paper';
import ResultsListEntry from './ResultsListEntry';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  pageContainer: {
    // left and right margins
    // top and bottom padding if necesarry around multiple cards
    paddingTop: '6px',
    paddingLeft: '12px',
    paddingRight: '12px',
  },
  cardContainer: {
    // spacing between cards on a page
    marginTop: '6px',
    marginBottom: '6px',
  },
  chatsProfileHeader: {
    position: 'absolute',
    top: 65,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  chatsProfileHeaderTitle: {
    padding: 0,
  },
  chatsOuterContainer: {
    width: '100%',
    paddingBottom: '50px',
    paddingTop: '283px',
    marginLeft: '-12px',
    marginRight: '-12px',
  },
  profileOuterContainer: {
    marginTop: '-6px',
    marginLeft: '-12px',
    marginRight: '-12px',
  },
  chatsListOuterContainer: {
    width: '100%',
    zIndex: '-1',
    position: 'absolute',
  },
  generalInfoContainer: {
    paddingBottom: 8,
  },
  generalInfo: {
    height: '30px',
    display: 'inline-flex',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  generalInfoIcon: {
    marginTop: '-2px',
    marginRight: '5px',
  },
};

class Chats extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showProfile: false,
      showChat: true,
    };
    this.toggleChatAndProfile = this.toggleChatAndProfile.bind(this);
  }

  toggleChatAndProfile = (show) => {
    if(show === 'chat'){
      this.setState({showChat: true, showProfile: false});
    }else{
      this.setState({showProfile: true, showChat: false});
    }
  };

  render() {
    const currentMatch = this.props.matches.filter((match) => match.id === this.props.currentMatchUserId)[0];
    const {
      first,
      last,
      bio,
      photo_src_small,
      gender,
      age,
      location
    } = currentMatch;

    const profile = `${gender}, ${age}`;

    const chatOrProfile = () => {
      if(this.state.showChat){
        return (
          <div style={styles.chatsOuterContainer}>
            <ChatsInput currentMatch={currentMatch} />
            <ChatsList style={styles.chatsListOuterContainer} currentMatch={currentMatch} />
          </div>
        );
      }else{
        return (<div style={styles.profileOuterContainer}><ResultsProfile currentMatch={currentMatch} /></div>)
      }
    }

    return (
      <div style={styles.pageContainer}>
        <Paper style={styles.cardContainer}>
          <Card style={styles.chatsProfileHeader}>
            <div className="chat-title">
              <img className="chat-picture" width="100" height="100" alt="profile-pic" src={photo_src_small || '/assets/avatar.jpg'} />
              <CardTitle
                style={styles.chatsProfileHeaderTitle}
                title={`${first} ${last}`} subtitle={bio}
              />
              <CardText style={styles.generalInfoContainer}>
                <span style={styles.generalInfo}><i className="material-icons" style={styles.generalInfoIcon}>account_circle</i>{profile}</span>
                <span style={styles.generalInfo}><i className="material-icons" style={styles.generalInfoIcon}>place</i>{location}</span>
              </CardText>
              <Divider />
            <CardActions>
              <Row>
                <Col xs={6}>
                  <FlatButton secondary={this.state.showChat} fullWidth={true} label="Chat" onClick={() => this.toggleChatAndProfile('chat')} />
                </Col>
                <Col xs={6}>
                  <FlatButton secondary={this.state.showProfile}  fullWidth={true} label="Profile" onClick={() => this.toggleChatAndProfile('profile')} />
                </Col>
              </Row>
            </CardActions>
            </div>
          </Card>
        </Paper>
        {chatOrProfile()}
      </div>
    );
  }

}

const mapStateToProps = state => ({
  userId: state.auth.userId,
  currentMatchUserId: state.chat.currentMatchUserId,
  matches: state.matches.matches,
});

export default connect(mapStateToProps)(Chats);
