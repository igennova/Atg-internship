import '../css/Recommendation.css';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
const Recommendation = ({data}) => {
    
    return ( 
        <div className='recommendation-container'>
           <Profile data={data}/>
            <button className='follow-btn  my-3'>Follow</button>
        </div>
     );
}
 
export default Recommendation;