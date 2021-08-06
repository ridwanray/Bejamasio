import React from "react";
import imageProd from "../images/pexels-evgeny-tchebotarev-2187304 (1) 1.png";

function CartNav() {
  const closeCartNav = () => {
    document.getElementById("mySidenav").style.display = "none";
  };
  return (
    <>
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onClick={closeCartNav}>
          &times;
        </a>

        <div class="mt-2">
          <div class="container d-flex justify-content-between">
            <div>
              <span class="mb-3" style={{fontSize: "15px;"}}>
                <strong>Samurai King Resting</strong>{" "}
              </span>
              <br />
              <span style={{fontSize: "12px"}} class="text-muted pt-0 mt-2">
                $100, 000. 00
              </span>
            </div>

            <div>
              <img src={imageProd} height="40" width="auto" alt="" />
            </div>
          </div>
          <hr
            style={{border: "2px solid #e4e4e4"}}
            class="mr-1 ml-1 container font-weight-bold"
          />
          <div class="container d-flex justify-content-between">
            <div>
              <span class="mb-3" style={{fontSize: "15px"}}>
                <strong>Samurai King Resting</strong>{" "}
              </span>
              <br />
              <span style={{fontSize: "12px"}} class="text-muted pt-0 mt-2">
                $100, 000. 00
              </span>
            </div>

            <div>
              <img src={imageProd} height="40" width="auto" alt="" />
            </div>
          </div>

          <hr
            style={{border: "2px solid #e4e4e4"}}
            class="mr-1 ml-1 container font-weight-bold"
          />
        </div>
      </div>
    </>
  );
}

export default CartNav;
