import React from 'react'

function Slider() {
  return (
    <div>
         <div className="img_slide ">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./1.jpg" className="d-block w-100" alt="Orange_pic1"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./2.jpg" className="d-block w-100" alt="Orange_pic2"/>
                    </div>

                </div>

            </div>
        </div>


    </div>
  )
}

export default Slider