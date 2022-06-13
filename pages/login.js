import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

const login = () => {

const postForm=(event)=>{
    event.preventDefault();
   var email=event.target.email.value;
   var password=event.target.password.value;
   console.table(email,password)
    axios
    .post('http://localhost:3010/login', {
        email : email,
        password:password
    }
    )
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}
  return (
    <>
    <div className="back-to-top"></div>
    <header>

        <nav className="navbar navbar-expand-lg navbar-light navbar-float">
            <div className="container">
                <Link href="/"><a className="navbar-brand">Bit<span className="text-primary">App</span></a></Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent"
                    aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>

        <div className="page-banner home-banner">
            <div className="container h-100">
                <div className="row align-items-center h-100">
                    <div className="col-lg-6 py-3 wow fadeInUp">
                        <form method="POST" action="http://localhost:3010/login" onSubmit={postForm}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password"  className="form-control" id="exampleInputPassword1"
                                    placeholder="Password"/>
                            </div>
                            <hr/>
                            <button type="submit" className="btn btn-primary">Log In</button>
                        </form>
                       


                    </div>
                    <div className="col-lg-6 py-3 wow zoomIn">
                        <div className="img-place">
                            <Image height="100" width="100" layout='responsive' priority="true" src="/assets/img/bg_image_1.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <script src="/assets/js/jquery-3.5.1.min.js"></script>
    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/vendor/wow/wow.min.js"></script>
    <script src="/assets/vendor/owl-carousel/js/owl.carousel.min.js"></script>
    <script src="/assets/vendor/waypoints/jquery.waypoints.min.js"></script>
    <script src="/assets/vendor/animateNumber/jquery.animateNumber.min.js"></script>
    <script src="/assets/js/google-maps.js"></script>
    <script src="/assets/js/theme.js"></script>
    </>
  )
}

export default login