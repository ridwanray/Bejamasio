import React from 'react'
import arrowLeft from "../images/Vector 1 (1).png"; 
import arrowRight from "../images/Vector 2 (1).png"; 

function Paginate() {
    return (
        <>
            <section class="mt-3 container text-center form-inline">
   <strong><div class="  ml-lg-5  ml-xl-5 d-flex justify-content-center container" >
      <span>
        <img src={arrowLeft} alt="" />
      </span>
      
       <span class="text-muted" style={{marginRight: '10px;margin-left: 10px'}}>
         1
       </span>
       <span class="text-muted" style={{marginRight: '10px;margin-left: 10px'}}>
         2
       </span>
       <span class="" style={{marginRight: '10px;margin-left: 10px'}}>
        3
      </span>
      <span class="text-muted" style={{marginRight: '10px;margin-left: 10px'}}>
        4
      </span>

      <span>
        <img src={arrowRight} alt="" />
      </span>

    </div>
  </strong> 
  </section>
        </>
    )
}

export default Paginate
