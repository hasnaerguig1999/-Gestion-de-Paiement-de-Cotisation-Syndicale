import React from 'react'

export default function SignIn() {
  return (
    <>
    <div className="main-content mt-0">
     <div className='page-header align-items-start min-vh-100'>
     <span className="mask bg-gradient-dark opacity-6"></span>
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom  mt-2">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0  mt-2">Sign In</h4>
                  <div className="row mt-3">
                    <div className="col-2 text-center ms-auto">
                    </div>
                    <div className="col-2 text-center px-1">
                    </div>
                    <div className="col-2 text-center me-auto">
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="card-body">
                <form role="form" class="text-start">
                  <div class="input-group input-group-outline my-3">
                    <input type="email" class="form-control" placeholder='Email' />
                  </div>
                  <div class="input-group input-group-outline mb-3">
                    <input type="password" class="form-control" placeholder='Password' />
                  </div>
                  <div class="form-check form-switch d-flex align-items-center mb-3">
                    <input class="form-check-input" type="checkbox" id="rememberMe" checked />
                    <label class="form-check-label mb-0 ms-3" for="rememberMe">Remember me</label>
                  </div>
                  <div class="text-center">
                    <button type="button" class="btn bg-gradient-primary w-100 my-4 mb-2">Sign in</button>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Don't have an account?
                    <a href="./SignUp" class="text-primary text-gradient font-weight-bold">Sign up</a>
                  </p>
                </form>
                </div>
                <div className="card-footer text-center pt-0 px-lg-2 px-1">
                    <a href="./Dashboard" className="text-primary text-gradient font-weight-bold">return to dashboard</a>
                  
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
     </div>
    </div>
    </>
  )
}
