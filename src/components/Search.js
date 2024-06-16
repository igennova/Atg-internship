import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/Search.css';
const Search = () => {
    return (
        <div className="search">
            <i className="bi bi-search search-icon"></i>
            <input placeholder="Search for your favorite groups in ATG" className='search-input'/>
        </div> 
        
     );
}
 
export default Search;