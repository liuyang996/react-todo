import React, { Component } from "react";
import Header from "./Header";
import FilteredList from "./FilteredList";
import Footer from "./Footer";
import { search, applyFilter } from '../services/filter'
class TodoList extends Component {
  render() {
    const { list, filter, mode, query } = this.props.data;
    const { addNew, setSearchQuery, changeStatus, changeFilter, changeMode } = this.props.actions;
    const count = list.length;
    const items = search(applyFilter(list, filter), query)
    return (
      <div className="container">
        <div className="row">
          <div className="todolist">
            <Header {...{ query, mode, addNew, setSearchQuery }} />
            <FilteredList {...{ items, changeStatus }} />
            <Footer {...{ count, filter, changeFilter, changeMode, mode }} />
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
