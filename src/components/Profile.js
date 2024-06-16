import '../css/Profile.css';
const Profile = ({data}) => {
    return ( 
        <span>
            <img src={require(`../assets/${data.image}`)} style={{width:40,height:'auto'}} alt="profile-pic"/>
            <label className='mx-2' style={{fontWeight:500}}>{data.author}</label>
        </span>
     );
}
 
export default Profile;