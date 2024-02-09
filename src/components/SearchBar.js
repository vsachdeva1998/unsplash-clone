import React from 'react';

import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: '' };
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  onInputChange = (e) => {
    const term = e.target.value;
    this.setState(() => ({ term }));
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
    this.setState(() => ({ term: '' }));
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.onFormSubmit}>
          <input
            ref={this.inputRef}
            type="text"
            value={this.state.term}
            placeholder="Search Unsplash..."
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}
