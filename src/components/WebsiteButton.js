import '../css/WebsiteButton.css';
import IconText from './IconText';

const WebsiteButton = ({type,website}) => {
    return ( 
        <div>
          <IconText website={website}/>
        <button className="custom-button-website" 
        style={{color:type.includes('Meetup')?'#E56135':'#02B875'}}
        >{type.includes('Meetup')?'Visit Website':'Apply on Timesjobs'}</button>
        </div>
     );
}
 
export default WebsiteButton;