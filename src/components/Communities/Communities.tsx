import React from "react";
import Wrapper from "../common/Wrappers/WrapperComponents";
import style from "./Communities.module.scss";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class Main {
    public one = "public";
    protected two = "protected";
    private three = "private";
    public static value = "PublicStaticMain";

    constructor(one: string, two: string, three: string) {
        this.one = this.one + " | " + one;
        this.two = this.two + " | " + two;
        this.three = this.three + " | " + three;
    }

    setThree(value: string) {
        this.three = this.three + " | " + value;
    }

    getThree() {
        return this.three;
    }
}

class PreMain extends Main {
    constructor(value: string, two: string) {
        super(value, value, value);
        this.two = this.two + " | " + two;
    }

    getTwo() {
        return this.two;
    }
}

const mainInstance = new Main("Main", "Main", "Main");
mainInstance.setThree("Setter");
const preMainInstance = new PreMain("PreMain", "PreMainTwo");
Main.value = Main.value + " | has changed";

class Communities extends React.Component {
    render() {
        return (
            <Wrapper title="COMMUNITIES">
                <div className={style.main}>
                    <div>{Main.value}</div>
                    <p>{mainInstance.one}</p>
                    <span>{preMainInstance.one}</span>
                    <p>{preMainInstance.getTwo()}</p>
                    <div>{mainInstance.getThree()}</div>
                </div>
            </Wrapper>
        );
    }
}

export default WithAuthRedirect(Communities);
