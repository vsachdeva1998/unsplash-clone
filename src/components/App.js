import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../apis/unsplash';

export default class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState(() => ({ images: response.data.results }));
  };

  render() {
    return (
      <>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </>
    );
  }
}
