import '../css/Navbar.css';
import Search from './Search';
import Profile from './Profile'
import 'bootstrap-icons/font/bootstrap-icons.css';
const Navbar = ({isLoggedIn,showSignUp}) => {
    return ( 
        <nav className="navbar-container">
            <img src={require('../assets/whole.png')} className='navbar-text-label' alt="search-bar"/>
            <Search/>
            {!isLoggedIn && <label className='navbar-account-label' onClick={()=>showSignUp(true)}>Create account.<label style={{cursor:'pointer'}}>It’s free!</label><i className="bi bi-caret-down-fill"></i></label>}
            {isLoggedIn && <Profile data={isLoggedIn.profile}/>}
        </nav>
     );
}
 
export default Navbar;