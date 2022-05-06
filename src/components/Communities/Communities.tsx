import React from 'react';
import Wrapper from "../common/Wrappers/WrapperComponents";

class Main {
  public one: string = 'public'
  protected two: string = 'protected'
  private three: string = 'private'
  public static value = 'PublicStaticMain'

  constructor(one: string, two: string, three: string) {
    this.one = this.one + ' | ' + one
    this.two = this.two + ' | ' + two
    this.three = this.three + ' | ' + three
  }

  setThree(value: string) {
    this.three = this.three + ' | ' + value
  }

  getThree() {
    return this.three
  }
}

class PreMain extends Main {
  constructor(value: string, two: string) {
    super(value, value, value);
    this.two = this.two + ' | ' + two;
  }

  getTwo() {
    return this.two
  }
}

const mainInstance = new Main('Main', 'Main', 'Main');
mainInstance.setThree("Setter");
const preMainInstance = new PreMain("PreMain", "PreMainTwo");
Main.value = Main.value + ' | has changed'

class Communities extends React.Component<JSX.Element> {
  render() {
    return (
      <Wrapper title="COMMUNITIES">
        <div>{Main.value}</div>
        <div>{mainInstance.one}</div>
        <div>{preMainInstance.one}</div>
        <div>{preMainInstance.getTwo()}</div>
        <div>{mainInstance.getThree()}</div>
      </Wrapper>
    )
  }
}

export default Communities;
