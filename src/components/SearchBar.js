import React, {useState} from 'react';

const SearchBar = ({onTermSubmit}) => {
  const [term, setTerm] = useState('')
  const onInputChange = (event) => {
    event.preventDefault()
    console.log(`input: `, event.target.value)
    setTerm(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    // request to the video API
    console.log(`calling videoApi.get(term): `, term)
    onTermSubmit(term)
  }

  return (
    <div className={"searchbar ui segment"}>
      <form action="#"
            className="ui form"
            onSubmit={onSubmit}
      >
        <div className="field">
          <label htmlFor="search">Vid Search</label>
          <input type="text"
                 onChange={onInputChange}
                 value={term}
          />
        </div>
      </form>
    </div>
  );

}

export default SearchBar;