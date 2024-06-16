import '../css/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpForm from './SignupFom';
import SignIn from './SignIn';
const Form = ({updateSignIn,signIn,updateSignUp,signUp,updateLoggedIn}) => {
    return (
        <div className='form-page'>
            <button className='close-form-btn' onClick={()=>{
                updateSignIn(false);
                updateSignUp(false);
            }}>X</button>
            <form className="form-container" onSubmit={(event)=>event.preventDefault()}>
            <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
            <div className='form-inputs-area'>
                {signIn && <SignIn changeToSignUp={updateSignUp} stopSignIn={updateSignIn} updateLoggedIn={updateLoggedIn}/>}
                {signUp && <SignUpForm changeToSignIn={updateSignIn} stopSignUp={updateSignUp}/>}
            </div>
            
            </form>
        </div> 
        
     );
}
 
export default Form;