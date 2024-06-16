const SignIn = ({changeToSignUp,stopSignIn,updateLoggedIn}) => {
    return ( 
        <>
                <div className='sign-in-link-container'>
                    <h3>Sign In</h3>
                    <label onClick={()=>{
                        changeToSignUp(true)
                        stopSignIn(false);
                    }}>Don’t have an account yet? <label style={{cursor:'pointer'}}>Create new for free!</label></label>
                </div>
                <div className="input-containers">
                    <div>
                        <div className='form-column-container' style={{marginTop:30}}>
                            <input className='input-box column-input' placeholder='Email'/>
                            <div>
                                <input className='input-box column-input' placeholder='Password'/><i class="bi bi-eye show-password"></i>
                            </div>
                            
                            <button className='btn btn-primary mt-3 custom-button-form' onClick={
                                ()=>{updateLoggedIn({
                                profile:{
                                    author:'Siddharth Goyal',
                                    image:'profile4.png'
                                }
                                })
                                changeToSignUp(false)
                                stopSignIn(false);
                            }
                        }
                                
                                >Sign In</button><label className='signup-hidden'onClick={()=>{
                                    changeToSignUp(true)
                                    stopSignIn(false);
                                }}>or, Sign Up</label>
                            <button className='btn btn-light mt-3 custom-button-sign'><img src={require('../assets/fb.png')} className="me-2" alt="facebook"/>Sign in with Facebook</button>
                            <button className='btn btn-light mt-3 custom-button-sign'><i class="bi bi-google me-2"/>Sign in with Google</button>
                            <label style={{marginTop:20,fontWeight:600,fontSize:12}}>Forgot Password?</label>
                        </div>
                    </div>
                
                <img src={require('../assets/form-background.png')} alt="form-background"/>
                </div>
                </>
     );
}
 
export default SignIn;