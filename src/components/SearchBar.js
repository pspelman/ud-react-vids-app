import React, {Component} from 'react';

class SearchBar extends Component {

  state = {term: ''}

  onInputChange = (event) => {
    event.preventDefault()
    console.log(`input: `, event.target.value)
    this.setState({term: event.target.value})
  }

  onFormSubmit = event => {
    event.preventDefault()
    // request to the video API
    if (this.state.term) {
      console.log(`calling videoApi.get(this.state.term): `, this.state.term);
      this.props.onTermSubmit(this.state.term);
    } else {
      console.log(`invalid search term : `, this.state.term)
    }
  }

  render() {
    return (
      <div className={"searchbar ui segment"}>
        <form action="#"
              className="ui form"
              onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label htmlFor="search">Vid Search</label>
            <input type="text"
                   onChange={this.onInputChange}
                   value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;