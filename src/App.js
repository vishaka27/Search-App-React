import React, { Component } from "react";
import Loader from 'react-loader';
import ProfileCard from './ProfileCard';
import SearchBar from './SearchBar';
import { getJSON } from './utils/fetch';

class App extends Component {
  constructor(){
    super();
    this.state = {
        data: '',
        filteredData: '',
        loaded: false
    }
}

componentDidMount() {
    getJSON('https://jsonplaceholder.typicode.com/todos').then(result => {
        this.setState({ data: result, filteredData: result, loaded: true });
    }).catch(() => {
        console.error('Service call not successful');
    });
}

  showInputValues = (value) => {
    const { data } = this.state;
    const arr = [];
    data.map(item => {
      if ((value.length >= 3) && (item.title).match(value)) {
        arr.push(item);
      }
    });
    if (value.length >= 3) {
      this.setState({ filteredData: arr });
    } else {
      this.setState({ filteredData: data });
    }
  }

  render() {
    const { data, filteredData } = this.state;
  
    return [
      <Loader loaded={this.state.loaded} key={3} />,
      <SearchBar key={1} onInput={this.showInputValues} />,
      <ProfileCard key={2} data={data} filteredData={filteredData} />
    ];
  }
}

export default App;
