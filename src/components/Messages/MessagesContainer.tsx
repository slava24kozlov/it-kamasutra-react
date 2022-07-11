import React from "react";
import {actionCreators} from "../../redux/reducer/MessagesReducer";
import {connect, ConnectedProps} from "react-redux";
import Messages from "./Messages";
import {getDataMessages} from "../../redux/selectors/MessagesSelectors";
import {compose} from "redux";
import {AppStateType} from "../../redux/store";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class MessagesContainer extends React.Component<ConnectedProps<typeof connector>> {
    state = {
        dialog: "" as string,
        message: "" as string,
    };

    updateState = (field: string, value: string) => {
        this.setState({
            [field]: value
        });
    };

    resetState = () => {
        this.setState({
            dialog: "",
            message: "",
        });
    };

    render() {
        return <Messages
            fieldDialog={this.state.dialog}
            fieldMessage={this.state.message}
            updateField={this.updateState}
            resetFields={this.resetState}
            dataMessages={this.props.dataMessages}
            setMessage={this.props.setMessage}
        />;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    dataMessages: getDataMessages(state),
});

const connector = connect(mapStateToProps, {setMessage: actionCreators.setMessage});
export default compose(connector, WithAuthRedirect<typeof connector>)(MessagesContainer) as React.ComponentType;


