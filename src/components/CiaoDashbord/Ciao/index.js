import { Component } from "react";

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  handlerClick = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };

  render() {
    const { fname, sname, id } = this.props;
    const { isHi } = this.state;
    if(isHi === false){
      return <h3>Bye, {fname} {sname} (id:{id})</h3>
    }
    return (
      <>
        <h2>Hello, dear {fname} {sname}! (id:{id})</h2>
        <button onClick={this.handlerClick}>SWITCH</button>
      </>
    );

    // return React.createElement('h2', null, "Hello", ` ${name}!`)
  }
}

export default Ciao;
