import React from "react";
import imageProd from "../images/pexels-evgeny-tchebotarev-2187304 (1) 1.png";

function CartNav() {
  const closeCartNav = () => {
    document.getElementById("mySidenav").style.display = "none";
  };
  return (
    <>
      <div id="mySidenav" className="sidenav">
        <a href="#!" className="closebtn" onClick={closeCartNav}>
          &times;
        </a>

        <div className="mt-2">
          <div className="container d-flex justify-content-between">
            <div>
              <span className="mb-3" style={{ fontSize: "15px" }}>
                <strong>Samurai King Resting</strong>{" "}
              </span>
              <br />
              <span style={{ fontSize: "12px" }} className="text-muted pt-0 mt-2">
                $100, 000. 00
              </span>
            </div>

            <div>
              <img src={imageProd} height="40" width="auto" alt="" />
            </div>
          </div>
          <hr
            style={{ border: "2px solid #e4e4e4" }}
            className="mr-1 ml-1 container font-weight-bold"
          />
          <div className="container d-flex justify-content-between">
            <div>
              <span className="mb-3" style={{ fontSize: "15px" }}>
                <strong>Samurai King Resting</strong>{" "}
              </span>
              <br />
              <span style={{ fontSize: "12px" }} className="text-muted pt-0 mt-2">
                $100, 000. 00
              </span>
            </div>

            <div>
              <img src={imageProd} height="40" width="auto" alt="" />
            </div>
          </div>

          <hr
            style={{ border: "2px solid #e4e4e4" }}
            className="mr-1 ml-1 container font-weight-bold"
          />

          <div class="container d-flex justify-content-between">
            <div>
              <span class="mb-3" style={{ fontSize: "15px" }}>
                <strong>Samurai King Resting</strong>{" "}
              </span>
              <br />
              <span style={{ fontSize: "12px" }} class="text-muted pt-0 mt-2">
                $100, 000. 00
              </span>
            </div>

            <div>
              <img src={imageProd} height="40" width="auto" alt="" />
            </div>
          </div>

          <div class="container text-center d-grid gap-2 fixed-bottom">
            <button type="button" class="btn btn-outline-dark btn-md ">
              CLEAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartNav;
