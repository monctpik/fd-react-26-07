import React, { Component } from "react";

class UserCard extends Component {
  // handlerSelectUser = () => {
  //   const { setIsSelected } = this.props;
  //   setIsSelected();
  // };
  render() {
    const {
      user: { id, fName, lName, isSelected },
      setIsSelected,
    } = this.props;
    const styles = { backgroundColor: isSelected ? "green" : "grey" };
    const handlerBtn = () => setIsSelected(id)
    return (
      <article style={styles}>
        <h3>
          [id:{id}] {fName} {lName}
        </h3>
        <button onClick={handlerBtn}>
          Select this user
        </button>
      </article>
    );
  }
}

export default UserCard;
