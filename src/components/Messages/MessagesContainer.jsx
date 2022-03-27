import React from 'react';
import {setMessageAC} from '../../redux/reducer/MessagesReducer';
import {connect} from "react-redux";
import Messages from "./Messages";
import {getDialogs, getMessages} from "../../redux/selectors/MessagesSelectors";
import {getIsAuth} from "../../redux/selectors/AuthSelectors";

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
    dialogData: getDialogs(state),
    messagesData: getMessages(state),
    isAuthUser: getIsAuth(state)
  }
)

export default connect(mapStateToProps, {setMessageAC})(MessagesContainer);


