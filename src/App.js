import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Card from './components/Card';
import CardBody from './components/CardBody';
import IconText from './components/IconText';
import IconDescription from './components/IconDescription';
import Recommendation from './components/Recommendation';
import {data,recommendation_data} from './dumm_data/dummy_data';
import Form from './components/Form';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu';
function App() {
  const [showSignup,setShowSignUp] = useState(false);
  const [showSignin,setShowSignIn] = useState(false);
  const [isLoggedIn,setLoggedIn] = useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} showSignUp={setShowSignUp}/>
      <button className='floating-edit-button'><i class="bi bi-pencil-fill"></i></button>
      <div className='image-container'>
        <div className='mobile-view-join-group'>
          <img src={require('./assets/arrow.png')} alt="back-button"/>
          {!isLoggedIn && <button className='btn btn-outline-light' 
          onClick={()=>setShowSignUp(true)}>Join Group</button>}
          {isLoggedIn && <button className='btn btn-outline-light' onClick={()=>setLoggedIn(false)}>Leave Group</button>}
          
        </div>
        
        <div className='image-sub-container'>
          <div>
            <h2>Computer Engineering</h2>
            <label>142,765 Computer Engineers follow this</label>
          </div>
        </div>
      </div>
      <Menu isLoggedIn={isLoggedIn} showSignUp={setShowSignUp}/>
      <MobileMenu/>
      <div className='container Card-Container container-updated'>
        <section>
          {
            data.map(item=>
              
              <Card key={item.id}>
              {item.background && <img src={require(`./assets/${item.background}`)} className="card-image" alt="background"/>}
              <CardBody 
              type={item.type} 
              title={item.title} 
              description={item.description} 
              views={item.views}
              profile={item.profile}
              website={item.website}
              />
              </Card>
            )
          }
        </section>
        <section className='sidebar'>
          
            <div className='sidebar-sub'>
             <IconText website={{location:'Noida, India'}}/>
             <i className="bi bi-pencil-fill"></i>
            </div>
            <div className='sidebar-sub' style={{border:'none',marginTop:35}}>
               <IconDescription/>
            </div>
            {
              isLoggedIn && 
                  <div>
                     <div className='mt-5'>
                        <i className="bi bi-hand-thumbs-up me-2"></i>
                        <label className='group-text'>RECOMMENDED GROUPS</label>
                      </div>
                    {recommendation_data.map(group=><Recommendation data={group} key={group.author}/>)}
                    <button className='btn btn-link mt-4' style={{float:'right'}}>see more...</button>
                  </div>
            }
           
          
          
        </section>
      </div>
          {(showSignin||showSignup) && 
          <Form updateSignIn={setShowSignIn} 
          signIn={showSignin} 
          updateSignUp={setShowSignUp} 
          signUp={showSignup}
          updateLoggedIn = {setLoggedIn}
          />}  
    </div>
  );
}

export default App;
