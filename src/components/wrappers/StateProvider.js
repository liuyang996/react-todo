import React, { Component } from "react";

import { wrapChildrenWith, objectWithOnly } from "../util/common";
import { MODE_NONE, MODE_CREATE } from "../services/mode";
import { addToList, updateStatus, getAll } from '../services/todo'
import { FILTER_ALL } from '../services/filter'
class StateProvider extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      mode: MODE_CREATE,
      filter: FILTER_ALL,
      list: getAll()
    };
  }
  render() {
    let children = wrapChildrenWith(this.props.children, {
      data: this.state,
      actions: objectWithOnly(this, ["changeMode", "addNew", "setSearchQuery", "changeStatus", "changeFilter"])
    });
    return <div>{children}</div>;
  }

  changeMode(mode = MODE_NONE) {
    this.setState({
      mode
    });
  }
  addNew(text) {
    let updatedList = addToList(this.state.list, { completed: false, text });
    this.setState({ list: updatedList })
  }
  setSearchQuery(text) {
    this.setState({ query: text || '' })
  }
  changeStatus(itemId, completed) {
    let updatedList = updateStatus(this.state.list, itemId, completed);
    this.setState({ list: updatedList })
  }
  changeFilter(filter) {
    this.setState({ filter });
  }

}

export default StateProvider;
