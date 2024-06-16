import '../css/MobileMenu.css';
import DropdownMenu from './Dropdown';
const MobileMenu = () => {
    return ( 
        <div className="container mobile-menu-container container-updated">
            <label>Posts (368)</label>
            <DropdownMenu title={<label>Filter:All<i class="bi bi-caret-down-fill mx-3"></i></label>}/>
            
        </div>
     );
}
 
export default MobileMenu;