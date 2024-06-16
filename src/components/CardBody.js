import '../css/Cardbody.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
import WebsiteButton from './WebsiteButton';
import DropdownMenu from './Dropdown';


const CardBody = ({type,title,description,views,profile,website}) => {
    return ( 
        <div className="Card-body">
            <div className="card-type-container">
                <label>{type}</label>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
                <h5 style={{flexGrow:1,maxWidth:600}}>{title}</h5>
                <DropdownMenu title={<i className="bi bi-three-dots dot-menu" />}/>
                
            </div>
            {description && <p>{description}</p>}
            {website && <WebsiteButton type={type} website={website}/>}
            <div className='Profile-Container'>
                <Profile data={profile}/>
                <div className='share-button-container'>
                    <span>
                        <i className="bi bi-eye me-2 views-colors"/>
                        <label className='me-4 views-colors'>{views}</label>
                    </span>
                    
                    <button className='custom-btn-share'><i className="bi bi-share-fill share-icon"/></button>
                </div>
                
            </div>
            
        </div>
     );
}
 
export default CardBody;