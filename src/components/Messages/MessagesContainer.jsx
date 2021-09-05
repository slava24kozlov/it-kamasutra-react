import {setMessageAC, updateMessageAC} from '../../redux/reducer/MessagesReducer';
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => (
  {
    dialogData: state.messagesPage.dialogData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
    isAuthUser: state.authUser.isAuth
  }
)

export default compose(
  connect(mapStateToProps, {setMessageAC, updateMessageAC}), withAuthRedirect)
(Messages)


