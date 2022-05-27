import React from "react";
import {Params, useParams} from "react-router-dom";

type PropsType<T> = {
    params: Readonly<Params<string>>
    props: T
}

const WithRouter = <T extends Record<string, unknown>>(Component: React.ComponentType<PropsType<T>>) => (props: PropsType<T>) => {
    const params = useParams();
    return (
        <Component {...props} params={params}/>
    );
};

export default WithRouter;
