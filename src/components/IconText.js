import '../css/IconText.css';

const IconText = ({website}) => {
    return ( 
        <div className="icon-website">
            <span className='icon-text'>
                {website.site && <i className='bi bi-bag me-1'/>}
                {website.site && <label className='me-5'>{website.site}</label>}
            </span >
            <span className='icon-text'>
                {website.location && <i className='bi bi-geo-alt me-1'/>}
                {website.location && <label className='me-5'>{website.location}</label>}
            </span>            
            <span className='icon-text'>
                {website.date && <i className='bi bi-calendar-event me-1'/>}
                {website.date && <label className='me-5'>{website.date}</label>}
            </span>
            

            
            
        </div>
     );
}
 
export default IconText;