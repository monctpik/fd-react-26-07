import React, { Component } from "react";
// import CiaoList from "./index";
// import Ciao from "../Ciao/index";
import CiaoHeading from "../../CiaoDashbord/CiaoHeading/index";
import CiaoList from "../../CiaoDashbord/CiaoList/index";
import CiaoSortedList from "../CiaoSortedList/index";

class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 3, fName: "Elon", lName: "Ausk" },
        { id: 1, fName: "Anna", lName: "Bolushko" },
        { id: 4, fName: "Vladislav", lName: "Coruga" },
        { id: 2, fName: "Kostya", lName: "Deks" },
        { id: 5, fName: "Valentin", lName: "Grigorenko" },
      ],
      isAscendingSortById: true,
      // upDown : true,
    };
  }
  sortByLName = () => {
    const { users, upDown } = this.state;
    const copyU = JSON.parse(JSON.stringify(users));
    copyU.sort((a, b) => {
      return upDown
        ? a.lName.localeCompare(b.lName)
        : b.lName.localeCompare(a.lName);
    });
    this.setState({
      users: copyU,
      upDown: !upDown,
    });
  };
  sortById = () => {
    const { users, isAscendingSortById } = this.state;
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((a, b) => {
      return isAscendingSortById ? a.id - b.id : b.id - a.id;
    });
    this.setState({
      users: copyUsers,
      isAscendingSortById: !isAscendingSortById,
    });
  };

  render() {
    const { users, isAscendingSortById, upDown } = this.state;
    return (
      <>
        <CiaoHeading content="Hello" title="react" className="heading" />

        <CiaoSortedList
          sortBy={this.sortById}
          isUpSort={isAscendingSortById}
          context="ID"
        />
        <CiaoSortedList
          sortBy={this.sortByLName}
          isUpSort={upDown}
          context="Name"
        />

        <CiaoList users={users} />

        {/* <MyLink className="myLink" href="#" /> */}
      </>
    );
  }
}

export default CiaoSection;
