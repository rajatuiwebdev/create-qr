import React from "react";

import "../assets/docs.css";


export default function Docs() {
    

  return (
    <>
      <div className="left-menu">
        <div className="content-logo">
          <div className="logo">
            <img
              src={require("../assets/logo.png")}
              height={32}
            />
            <span>CreateQR</span>
          </div>
          <button className="burger-menu-icon" id="button-menu-mobile">

          </button>
        </div>
        <div className="mobile-menu-closer" />
        <div className="content-menu">
          <div className="content-infos">
            <div className="info">
              <b>Version:</b> 1.0.0
            </div>
            <div className="info">
              <b>Last Updated:</b> 30th June, 2023
            </div>
          </div>
          <ul>
            <li
              className="scroll-to-link active"
              data-target="content-get-started"
            >
              <a>CreateQR API</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content-page">
        <div className="content">
          <div
            className="overflow-hidden content-section"
            id="content-get-started"
          >
            <h1>Get started</h1>
            <p>
            CreateQR is a versatile service offering an intuitive API for seamless QR code generation. With CreateQR, developers can effortlessly integrate QR code functionality into their applications, websites, or systems. The API provides customizable options to generate dynamic QR codes for diverse purposes, including contact information, URLs, payment links, and more. Simplify QR code generation with CreateQR's user-friendly API.
            </p>
            <p>
              To use this API, you do not need an <strong>API key</strong>. Please
              contact us at{" "}
              <a href="mailto:dummmymailrsr@gmail.com">
              dummmymailrsr@gmail.com
              </a>{" "}
              if server is ever down.
            </p>
          </div>
          <div
            className="overflow-hidden content-section"
            id="content-get-characters"
          >
            <h2>GENERATE QR</h2>
            <p>
              To generate a QR you need to make a GET call to the following
              url :
              <br />
              <code className="higlighted break-word">
              https://createqr-api.netlify.app/gen/:tagID
              </code>
            </p>
            <br />
            <h4>PATH PARAMETER</h4>
            <table>
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>tagID</td>
                  <td>String</td>
                  <td>Text for which you want to generate a QR for.</td>
                </tr>

              </tbody>
            </table>
          </div>
          <div
            className="overflow-hidden content-section"
            id="content-get-characters"
          >
            <h2>Example Usage</h2>
            <p>

Try sending a GET request to the following. <br/>
<br/>

              <code className="higlighted break-word">
              https://createqr-api.netlify.app/gen/So this is how the API works.
              </code>
              <br/>
              <br/>
              As a response you'll get a json which will have a src in it.<br/>
              <br/>
              <br/>
You can use this <code className="highlighted break-word">src</code> in your HTML in the image tag's <code>src=""</code>
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
