import React from 'react';
import {actionCreators} from '../../redux/reducer/MessagesReducer';
import {connect} from "react-redux";
import Messages from "./Messages";
import {getDataMessages} from "../../redux/selectors/MessagesSelectors";

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
      dataMessages={this.props.dataMessages}
      setMessage={this.props.setMessage}
    />
  }
}

let mapStateToProps = (state) => (
  {
    dataMessages: getDataMessages(state),
  }
)

export default connect(mapStateToProps, {setMessage: actionCreators.setMessage})(MessagesContainer);


