const SignUpForm = ({changeToSignIn,stopSignUp}) => {
    return ( 
        <>
        <div className='sign-in-link-container'>
                    <h3>Create Account</h3>
                    <label onClick={()=>{
                        changeToSignIn(true)
                        stopSignUp(false);
                    }}>Already have an account? <label style={{cursor:'pointer'}}>Sign In</label></label>
                </div>
                <div className="input-containers">
                    <div>
                        <div className='form-row-maker'>
                            <input className='input-box' placeholder='First Name'></input>
                            <input className='input-box' placeholder='Last Name'></input>
                        </div>
                        <div className='form-column-container'>
                            <input className='input-box column-input' placeholder='Email'></input>
                            <input className='input-box column-input' placeholder='Password'></input>
                            <input className='input-box column-input' placeholder='Confirm Password'></input>
                            <button className='btn btn-primary mt-3 custom-button-form'>Create Account</button><label className='signup-hidden'onClick={()=>{
                        changeToSignIn(true)
                        stopSignUp(false);
                    }}>or, Sign In</label>
                            <button className='btn btn-light mt-3 custom-button-sign'><img src={require('../assets/fb.png')} className="me-2" alt="facebook"/>Sign up with Facebook</button>
                            <button className='btn btn-light mt-3 custom-button-sign'><i class="bi bi-google me-2"/>Sign up with Google</button>
                        </div>
                    </div>
                
                <img src={require('../assets/form-background.png')} alt="form-background"/>
                </div>
                </>
     );
}
 
export default SignUpForm;