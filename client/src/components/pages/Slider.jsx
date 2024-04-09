import React from 'react'
import one from "../images/1.png"
import two from "../images/2.png"
const Slider = ({ sliderImage }) => {
  return (
    <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {
            sliderImage?.map((item , index) => {
              return (
                <>

                  <div className={`carousel-item ${index == 0 && "active"}`}>
                    <img src={item?.image} className="d-block w-100" alt="..." />
                  </div>
                </>
              )
            })
          }
          {/* <div className="carousel-item">
            <img src={two} className="d-block w-100" alt="..." />
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Slider
