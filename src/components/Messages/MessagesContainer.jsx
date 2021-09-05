import {setMessageAC, updateMessageAC} from '../../redux/reducer/MessagesReducer';
import {connect} from "react-redux";
import Messages from "./Messages";
import {withAuthRedirect} from "../../hoc/AuthRedirect";

let mapStateToProps = (state) => (
  {
    dialogData: state.messagesPage.dialogData,
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
    isAuthUser: state.authUser.isAuth
  }
)

const MessagesWithRedirect = withAuthRedirect(Messages)

export default connect(mapStateToProps,
  {setMessageAC, updateMessageAC})
(MessagesWithRedirect);


