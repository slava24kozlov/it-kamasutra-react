import React, {useEffect, useLayoutEffect, useState} from "react";
import style from "./Music.module.css";
import Wrapper from "../common/Wrappers/WrapperComponents";
import ChartComponent from "./ChartJS/ChartComponent";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

const eventLoop = (): void => {
    setTimeout(() => {
        console.log("setTimeout");
    }, 0);

    function one(): void {
        console.log("One");
    }

    const promise = new Promise<string>(function two(resolve) {
        console.log("Promise");
        resolve("Promise.then");
    });

    one();
    promise.then(res => console.log(res));
    console.log("Simple");
    queueMicrotask(() => console.log("queueMicrotask"));
};

const Music: React.FC = () => {
    const [state, setState] = useState(true);

    useEffect(() => {
        console.log("useEffect");
    }, [state]);

    useLayoutEffect(() => {
        console.log("useLayoutEffect");
    }, [state]);

    const handleChange = () => {
        eventLoop();
        setState(value => !value);
    };
    return (
        <Wrapper title="MUSIC">
            <button style={{padding: "30px"}} onClick={handleChange}>Event loop</button>
            <strong style={{backgroundColor: "red", margin: "10px"}}>{state.toString()}</strong>
            <div className={style.image}/>
            <ChartComponent/>
        </Wrapper>
    );
};

export default WithAuthRedirect(Music) as React.ComponentType;
