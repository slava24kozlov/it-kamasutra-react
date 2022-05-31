import React from "react";
import style from "./Friends.module.scss";
import {connect} from "react-redux";
import {getFriends} from "../../redux/selectors/SidebarSelectors";
import Wrapper from "../common/Wrappers/WrapperComponents";

console.log(matchMedia("screen and (min-width: 768px)"));

const Friends = ({friendsBar}) => (
    <Wrapper title="FRIENDS" className={style.main}>
        <div className={style.main}>
            {matchMedia("screen and (min-width: 768px)").matches && friendsBar.map(({name, image}) =>
                <div key={name}>
                    <img src={image} alt={name} width="50" height="50"/>
                    <b>{name}</b>
                </div>)}
        </div>
    </Wrapper>
);

const mapStateToProps = (state) => ({
    friendsBar: getFriends(state),
});

export default connect(mapStateToProps)(Friends);
