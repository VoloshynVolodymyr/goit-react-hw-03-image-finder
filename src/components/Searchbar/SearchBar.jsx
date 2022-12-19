import { Component } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from '../../images/search_icon.svg';
import { SearchBar, SearchForm, SearchFormButton, Input } from './SearchBar.styled';

class Searchbar extends Component {
  state = {
    filter: '',
  };

  
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;
    const { filter } = this.state;
    e.preventDefault();
    onSubmit(filter);
  };

  render() {
    const { filter } = this.state;
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <span>
              <SearchIcon width="28" height="28" />
            </span>
          </SearchFormButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={filter}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </SearchBar>
    );
  }
}

export default Searchbar;