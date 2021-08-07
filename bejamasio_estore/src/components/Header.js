import React from "react";
import logo from "../images/Group 3.1.png"; 
function Header() {

  const openCartNav = ()=>
  {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("mySidenav").style.display = "inline";
  }

  return (
    <section className="mt-3 container">
      <div className="container d-flex justify-content-between">
        <div className="font-weight-bold">
          <strong>BEJAMAS</strong>
        </div>

        <div>
          <img
       
          style={{cursor: 'pointer'}}
            onClick={openCartNav}
            className="position-relative mb-3"
            src={logo}
            alt=""
            width="25"
            height="25"
          />
          <span
            style={{ fontSize: "x-small" }}
            class="position-absolute bottom-0 start-100 pr-n3 translate-middle badge bg-secondary"
          >
            1<span class="visually-hidden">cart items count</span>
          </span>
        </div>
      </div>
      <div className="container">
        <hr
          style={{ border: "2px solid #e4e4e4" }}
          className="container font-weight-bold"
        />
      </div>
    </section>
  );
}

export default Header;
