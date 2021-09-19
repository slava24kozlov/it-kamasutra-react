import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    isEditMode: false,
  }

  setIsEditMode = () => {
    this.setState((state) => {
      return {isEditMode: !state.isEditMode}
    })
  }

  setStatus = (message) => {
    this.props.onChangeStatus(message)
  }

  handleFocus = (event) => {
    event.target.select()
  }

  render() {
    const statusRef = React.createRef()
    return (
      <div style={{marginTop: '15px'}}>
        <span
          onDoubleClick={() => this.setIsEditMode()}
          style={{fontWeight: 'bold'}}
        >
          Status:&nbsp;
        </span>
        {!this.state.isEditMode
          ? <span onDoubleClick={() => this.setIsEditMode()}>
            {this.props.status}
            </span>
          : <input
            autoFocus
            ref={statusRef}
            type='text'
            onChange={() => this.setStatus(statusRef.current.value)}
            onBlur={() => this.setIsEditMode()}
            onFocus={this.handleFocus}
            value={this.props.status}
          />
        }
      </div>
    )
  }
}

export default ProfileStatus