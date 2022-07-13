import React, {useEffect, useState} from "react";
import style from "./Friends.module.scss";
import {useSelector} from "react-redux";
import {getFriends} from "../../redux/selectors/SidebarSelectors";
import Wrapper from "../common/Wrappers/WrapperComponents";
import {AppStateType} from "../../redux/store";
import {SidebarStateType} from "../../redux/reducer/SidebarReducer";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

const media = matchMedia("screen and (min-width: 768px)");

const Friends: React.FC = () => {
    const friendsList = useSelector<AppStateType, SidebarStateType["FriendsBar"]>(state => getFriends(state));
    const [state, setState] = useState<boolean>(() => media.matches);
    useEffect(() => {
        media.addEventListener("change", ({matches}) => {
            setState(matches);
        });
        return () => media.removeEventListener("change", ({matches}) => {
            setState(matches);
        });
        }, []);
    return (
        <Wrapper title="FRIENDS">
            <div className={style.main}>
                <h2>sass:Math.div</h2>
                <h3>My changes in browser</h3>
                {state && friendsList.map(({name, image}) =>
                    <div key={name}>
                        <img src={image} alt={name} width="50" height="50"/>
                        <b>{name}</b>
                    </div>)}
            </div>
        </Wrapper>
    );
};

export default WithAuthRedirect(Friends) as React.ComponentType;
