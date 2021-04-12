import React from 'react';

const Search = props => {

    return(
        <div className='Search'>
            <input 
                value={props.formInput}
                onChange={props.onChange}
                name='searchInput'
                placeholder='Git URL here'></input>
            <button onClick={props.onClick}>search</button>
        </div>
    )
}

export default Search;