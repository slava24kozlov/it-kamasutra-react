import React from "react";

class ProfileStatus extends React.Component {
  state = {
    status: this.props.status,
    isEditMode: false,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.props.status !== prevProps.status && this.setState({status: this.props.status});
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    });
  };

  handleChangeEditMode = () => {
    this.setState((state) => {
      return {isEditMode: !state.isEditMode};
    });
  };

  setStatus = () => {
    this.props.onChangeStatus(this.state.status);
    this.setIsEditMode();
  };

  handleFocus = (event) => {
    event.target.select();
  };

  render() {
    return (
      <div style={{margin: "15px", userSelect: "none"}}>
        <b style={{cursor: "pointer"}} onDoubleClick={this.props.isAuthProfile ? this.setIsEditMode : null}>
          Status:&nbsp;
        </b>
        {!this.state.isEditMode
          ? <span style={{cursor: "pointer"}} onDoubleClick={this.props.isAuthProfile ? this.setIsEditMode : null}>
            {this.state.status}
            </span>
          : <input
            autoFocus
            type='text'
            onChange={this.onStatusChange}
            onBlur={this.setStatus}
            onFocus={this.handleFocus}
            value={this.state.status}
          />
        }
      </div>
    );
  }
}

export default ProfileStatus;
