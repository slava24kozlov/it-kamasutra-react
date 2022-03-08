import React from 'react';
import style from './Friends.module.scss';
import {withAuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {getFriends} from "../../redux/selectors/SidebarSelectors";
import {getIsAuth} from "../../redux/selectors/AuthSelectors";
import Wrapper from "../common/Wrappers/WrapperComponents";

const Friends = ({friendsBar}) => (
  <Wrapper title="FRIENDS" className={style.main}>
    <div className={style.main}>
      {friendsBar.map(({name, image}) =>
        <div key={name}>
          <img src={image} alt={name} width="50" height="50"/>
          <b>{name}</b>
        </div>)}
    </div>
  </Wrapper>
)

const mapStateToProps = (state) => ({
  friendsBar: getFriends(state),
  isAuthUser: getIsAuth(state),
})

export default compose(connect(mapStateToProps), withAuthRedirect)(Friends);
