import React from 'react';
import {setMessageAC} from '../../redux/reducer/MessagesReducer';
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

class MessagesContainer extends React.Component {
  state = {
    dialog: '',
    message: '',
  }

  updateState = (field, value) => {
    this.setState({
      [field]:value
    })
  }

  resetState = () => {
    this.setState({
      dialog: '',
      message: '',
    })
  }

  render() {
    return <Messages
      fieldDialog={this.state.dialog}
      fieldMessage={this.state.message}
      updateField={this.updateState}
      resetFields={this.resetState}
      {...this.props}
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


