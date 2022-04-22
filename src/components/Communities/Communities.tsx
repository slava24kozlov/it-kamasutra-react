import React from 'react';
import Wrapper from "../common/Wrappers/WrapperComponents";

class Main {
  public one: string = 'public'
  protected two: string = 'protected'
  private three: string = 'private'

  constructor(one: string, two: string, three: string) {
    this.one = this.one + one
    this.two = this.two + two
    this.three = three
  }
}

const mainInstance = new Main('Main', 'Main', 'Main')

class PreMain extends Main {
  constructor(value: string) {
    super(value, value, value);
  }

  set(value: string) {
    this.two = value
  }

  get() {
    return this.two
  }
}

const preMainInstance = new PreMain("PreMain");
preMainInstance.set("Changed value")

class Communities extends React.Component<JSX.Element> {
  render() {
    return (
      <Wrapper title="COMMUNITIES">
        <div>{preMainInstance.get()}</div>
        <div>{mainInstance.one}</div>
      </Wrapper>
    )
  }
}

export default Communities;
