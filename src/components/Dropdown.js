import { DropdownButton,Dropdown, ButtonGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const DropdownMenu = ({title}) => {
    return ( 
        <Dropdown>
            <DropdownButton as={ButtonGroup} variant="light" drop="start" title={title}
            className="custom-dropdown-color">
                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </DropdownButton>
        </Dropdown>
     );
}
 
export default DropdownMenu;