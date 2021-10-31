import React from 'react';
import {setMessageAC} from '../../redux/reducer/MessagesReducer';
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

class MessagesContainer extends React.Component {
  state = {
    name: '',
    message: '',
  }

  updateState = (field, value) => {
    this.setState({
      [field]: value
    })
  }

  resetState = () => {
    this.setState({
      name: '',
      message: '',
    })
  }

  render() {
    return <Messages
      {...this.props}
      name={this.state.name}
      message={this.state.message}
      updateState={this.updateState}
      resetState={this.resetState}
    />
  }
}

let mapStateToProps = (state) => (
  {
    dialogData: state.messagesPage.dialogData,
    messagesData: state.messagesPage.messagesData,
    isAuthUser: state.authUser.isAuth
  }
)

export default compose(
  connect(mapStateToProps, {setMessageAC}), withAuthRedirect)(MessagesContainer)


