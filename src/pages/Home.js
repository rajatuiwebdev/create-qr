import React from 'react'
import '../assets/style.css'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark nav ">
            <div className="container-fluid">
              <a className="navbar-brand Logo" style={{color: 'white'}} href="#">Create<span style={{color: 'rgb(143, 170, 239,1)'}}>QR</span></a>
              <button className="navbar-toggler mx-3 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto nav-list ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/docs">API & Docs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* Main Body Section */}
        <main>
          <div id="home">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Left column content here */}
                  <img className="home img-fluid" src={require("../assets/home.png")} alt="homeimage" />
                </div>
                <div className="col-md-6">
                  {/* Right column content here */}
                  <h1 className="main-text display-3">Create <span style={{color: 'rgb(143, 170, 239,1)'}}>QR Codes</span>
                    <br></br>seamlessly without
                    any interference </h1>
                  <h5 className="main-description "><em>Easily generate any QR code for any link on
                      the internet / any text / any message for free.
                      No ads. No account making.</em></h5>
                  {/* Buttons for the application */}
                  <div className="buttons">
                    <Link to="/create"><button type="button" className="btn btn-light home_button btn-lg   mt-5">Create QR</button></Link>
                    <a href='mailto:dummmymailrsr@gmail.com'><button type="button" className="btn btn-light home_button btn-lg mt-5 ">Contact US</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="hr-container">
            <hr className="hr-line my-5" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col text-align-center"><p className="left-footer"> Copyright   <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-c-circle" viewBox="0 0 16 16">
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
                  </svg> Team CreateQR | All Rights Reserved </p></div>
              <div className="col justify-content-end">
                <p className="right-footer me-5 "></p>
              </div>  
            </div>
          </div>
        </footer>
  
    </>
  )
}
