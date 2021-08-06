import React from "react";
import rectangleImg from "../images/Rectangle 10.png"; // with import
function FeatureProductAbout() {
  return (
    <>
      <section className="container mt-4">
        <div className="d-flex justify-content-between">
          <div className="row">
            <div className="text-start col-12 col-sm-12 col-xl-8 col-lg-8">
              <div>
                <strong className="text-center">
                  About the Samurai King Resting
                </strong>
              </div>

              <strong>
                {" "}
                <span className="text-muted mt-1 mb-1 d-none d-sm-block">
                  Pets
                </span>
              </strong>
              <p className=" text-muted mt-2">
                So how did the classNameical Latin become so incoherent?
                According to McClincktock, a fifteen century typesetter likely
                scramble part of Ciceros'de Finibus in order to provide
                placeholder text to mock up various fonts for a type specimen
                book. So how did the classNameical Latin became so incoherent?
                According to McClincktock So how did the classNameical Latin
                became so incoherent? According to McClincktock So how did the
                classNameical Latin became so incoherent? According to
                McClincktock
              </p>
            </div>

            <div className="col-12 col-sm-12 col-xl-4 col-lg-4">
              <div className="text-xl-end text-lg-end text-sm-start text-container pr-n5">
                <strong>People also buy</strong>
              </div>

              <div className="col-12 d-flex justify-content-between justify-content-lg-evenly justify-content-xl-evenly mt-2 text-lg-end text-xl-end ">
                <img
                  className=""
                  src={rectangleImg}
                  alt=""
                  width="100"
                  height="120"
                />
                &nbsp;
                <img src={rectangleImg} alt="" width="100" height="120" />
                &nbsp;
                <img src={rectangleImg} alt="" width="100" height="120" />
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureProductAbout;
