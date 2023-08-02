import { Component } from "react";

class MyLink extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { href, className } = this.props;
    return (
      <>
        `<a href={href} name={className}>`</a>
      </>
    );
  }
}

export default MyLink;
