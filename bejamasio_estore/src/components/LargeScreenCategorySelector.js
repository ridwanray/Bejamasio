import React from 'react'

function LargeScreenCategorySelector() {
    return (
        <>
            <div className="col-3 d-none d-sm-block">
          <strong> Category</strong>
          <br />
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">People</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">Premium</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">Pets</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">Food</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">Landmarks</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">Cities</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">Nature</label>
            </div>
          </div>
          <div className="">
            <hr
              style={{ border: "2px solid #e4e4e4" }}
              className="container font-weight-bold"
            />
          </div>

          <strong> Price range</strong>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">Lower than $20</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">$20 - $100</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">$100 - $200</label>
            </div>
          </div>
          <div className="mt-2 mb-3 form-inline">
            <div className="checkbox-example">
              <input type="checkbox" value="1" id="checkboxOneInput" />
              &nbsp;
              <label for="checkboxOneInput">More than $200</label>
            </div>
          </div>
        </div>
        </>
    )
}

export default LargeScreenCategorySelector
