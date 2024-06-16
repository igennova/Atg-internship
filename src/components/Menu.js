import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Menu.css';
const Menu = ({isLoggedIn,showSignUp}) => {
    return ( 
        <div className='container container-updated'>
            <ul className='menu'>
                <li className='active'>All Posts (32)</li>
                <li>Article</li>
                <li>Event</li>
                <li>Education</li>
                <li className='last-menu-item'>Jobs</li>
                <button className='btn btn-light dropdown-toggle me-3 custom-color custom-button'>Write a Post </button>
                {!isLoggedIn && <button className='btn btn-primary custom-button' onClick={()=>showSignUp(true)}><i className="bi bi-people-fill me-2" />Join Group </button>}
                {isLoggedIn && <button className='btn btn-outline-secondary custom-button'><i className="bi bi-box-arrow-right me-2"/>Leave Group</button>}
            </ul>
            
        </div>
     );
}
 
export default Menu;