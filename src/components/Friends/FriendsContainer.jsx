import React, {useEffect, useState} from "react";
import style from "./Friends.module.scss";
import {connect} from "react-redux";
import {getFriends} from "../../redux/selectors/SidebarSelectors";
import Wrapper from "../common/Wrappers/WrapperComponents";

const media = matchMedia("screen and (min-width: 768px)");

const Friends = ({friendsBar}) => {
    const [state, setState] = useState(() => media.matches);
    useEffect(() => {
        media.addEventListener("change", ({matches}) => {
            console.log("start media");
            setState(matches);
        });
        return () => media.removeEventListener("change", ({matches}) => {
            setState(matches);
        });
        }, []);
    return (
        <Wrapper title="FRIENDS" className={style.main}>
            <div className={style.main}>
                <h2>sass:Math.div</h2>
                <h3>My changes in browser</h3>
                {state && friendsBar.map(({name, image}) =>
                    <div key={name}>
                        <img src={image} alt={name} width="50" height="50"/>
                        <b>{name}</b>
                    </div>)}
            </div>
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    friendsBar: getFriends(state),
});

export default connect(mapStateToProps)(Friends);
