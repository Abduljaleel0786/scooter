import React from 'react'
import LOGO from './Images/Group 1.png'
import Hero from './Images/hero-img.png'
import Whole from './Images/Whole.png'



const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container">

                    <img src={LOGO} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">ContactUs</a>
                            </li>


                        </ul>
                        <form class="d-flex">
                            <button class="btn " type="submit">Login</button>
                            <button class="btn btn-warning rounded-5 text-white mx-3" type="submit">Book Scooter</button>
                        </form>
                    </div>
                </div>
            </nav>


            <div className='postion-relative'>
                <div className="position-absolute top-50 start-0 translate-middle-y ms-5 ps-5">
                    <img className='ps-5 ms-5 pb-5 mb-5' src={Whole} />
                </div>
                <div className='container '>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col col-md-6 col-sm-12 col-xs-12 position-relative'>

                            <h1 className='fw-medium text-light-emphasis'>Fair price ride</h1>
                            <h1 className='display-1 fw-bold'>Rent our <span className='text-warning'>Scooter</span> </h1>

                            <p className='text-light-emphasis'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>


                        </div>
                        <div className='col-lg-6 col col-md-6 col-sm-12 col-xs-12'>
                            <img className='img-fluid' src={Hero} />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}

export default Header