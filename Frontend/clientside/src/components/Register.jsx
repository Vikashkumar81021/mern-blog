import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';



function Register() {
  const navigate = useNavigate();
  const [user,setuser]=useState({
      name:"",email:"",password:"",cpassword:"" 
  })

  let name,value
  const handleinputs=(e)=>{
   name=e.target.name
   value=e.target.value
   setuser({...user,[name]:value})
  }
  const postdata = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;
  
    try {
      const response = await fetch('http://localhost:2000/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.status === 422 || !data) {
        window.alert('Invalid registration');
      } else {
        window.alert('Registration successful');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle the error appropriately (e.g., display an error message to the user)
    }
  };
  
  return (
    <div>
      <section className="vh-100 background-color: #eee;">
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black border-radius: 25px;">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form method='POST' className="mx-1 mx-md-4">

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="name" name='name' className="form-control" />
                      <label className="form-label" for="form3Example1c" value={user.name} onChange={handleinputs}>Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="email" name='email' className="form-control" />
                      <label className="form-label" for="form3Example3c" value={user.email} onChange={handleinputs}>Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="password" name='password' className="form-control" value={user.password} onChange={handleinputs} />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="password" name='cpassword' className="form-control" value={user.cpassword} onChange={handleinputs} />
                      <label className="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div classNameNameNameName="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" className="btn btn-primary btn-lg" onClick={postdata}>Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Register
