import React from 'react'; 


/*const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search music"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar;*/

const SearchBox = ({searchBoxChange}) => {

  return (
    <input type = 'search'
    className = 'search'
    placeholder = 'Search Music'
    onChange = {searchBoxChange}
    />
  )
}

export default SearchBox;