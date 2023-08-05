import "./Search.css";

const Search = ({ searchText, onChange, myVal, ...rest }) => {
return <input type="text" value={searchText} onChange={onChange} className={myVal} {...rest} />
}

export default Search
