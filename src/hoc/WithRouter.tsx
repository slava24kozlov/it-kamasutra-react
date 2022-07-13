import React from "react";
import {Params, useParams} from "react-router-dom";

type PropsType<T> = {
    params: Readonly<Params>
    props: T
}

const WithRouter = <T extends Record<string, unknown>>(Component: React.ComponentClass<PropsType<T>>) => (props: PropsType<T>) => {
    const params = useParams();
    return (
        <Component {...props} params={params}/>
    );
};

export default WithRouter;
