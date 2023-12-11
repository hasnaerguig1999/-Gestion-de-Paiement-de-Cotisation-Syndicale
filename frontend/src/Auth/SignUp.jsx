import React from 'react'

export default function SignUp() {
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
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0  mt-2">Sign Up</h4>
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
                <form role="form">
                    <div class="input-group input-group-outline mb-3">
                      <input type="text" class="form-control" placeholder='Name' />
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <input type="email" class="form-control"  placeholder='Email'/>
                    </div>
                    <div class="input-group input-group-outline mb-3">
                      <input type="password" class="form-control" placeholder='Password' />
                    </div>
                    <div class="form-check form-check-info text-start ps-0">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
                      <label class="form-check-label" for="flexCheckDefault">
                        I agree the <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                      </label>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0">Sign Up</button>
                    </div>
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
