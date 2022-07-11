import React from "react";
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {getProfileTC, updateStatusTC} from "../../redux/reducer/ProfileReducer";
import {compose} from "redux";
import {getProfile, getProfileIsFetching, getStatus} from "../../redux/selectors/ProfileSelectors";
import WithRouter from "../../hoc/WithRouter";
import {Params} from "react-router-dom";
import {AppStateType} from "../../redux/store";
import {getAuthId} from "../../redux/selectors/AuthSelectors";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export type PropsTypeContainer = ConnectedProps<typeof connector> & {
    params: Readonly<Params>
}

class ProfileComponent extends React.Component<PropsTypeContainer> {
    componentDidMount() {
        const currentId = this.props.params.userId;
        currentId && this.props.getProfileTC(currentId);
    }

    componentDidUpdate(prevProps: Readonly<PropsTypeContainer>) {
        const currentId = this.props.params.userId;
        if (currentId && currentId !== prevProps.params.userId) {
            this.props.getProfileTC(currentId);
        }
    }

    onChangeStatus = (status: string) => {
        this.props.updateStatusTC(status);
    };

    render() {
        return <Profile
            profile={this.props.profile}
            status={this.props.status}
            isAuthProfile={this.props.authId === this.props.profile?.userId}
            isFetchingProfile={this.props.isFetchingProfile}
            onChangeStatus={this.onChangeStatus}
        />;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: getProfile(state),
    status: getStatus(state),
    isFetchingProfile: getProfileIsFetching(state),
    authId: getAuthId(state),
});

const connector = connect(mapStateToProps, {getProfileTC, updateStatusTC});
export default compose(connector, WithAuthRedirect, WithRouter<ConnectedProps<typeof connector>>)(ProfileComponent) as React.ComponentType;




