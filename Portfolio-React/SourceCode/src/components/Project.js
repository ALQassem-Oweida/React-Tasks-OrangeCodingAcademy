
import React from 'react'

function Project() {
  return (
    <div>
        
        <div id="Project_Main_Box">
  <div className="Intro">
    <hr />
    <h4>SOME OF MY LATEST WORK</h4>
    <hr />
  </div>
  {/* Slide Show Start */}
  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
    </div>
    <div className="carousel-inner">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <a target="_blank" href="https://github.com/ALQassem-Oweida/SellAnyFlat.com/blob/main/Documentation/Website%20Mockup%20edited.pdf">
            <img src="./Pic/Carousel/SellAnyFlat.com.jpg" className="d-block w-100" /> </a>
          <div className="carousel-caption d-none d-md-block">
            <div style={{color: 'black', backgroundColor: 'rgba(216, 216, 216, 0.852)', textAlign: 'center', borderRadius: 18}}>
              <h5>SellAnyFlat.com
              </h5>
              <p>A mockup and a wireframe i made for aproject at Orange Coding Academy</p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <a target="_blank" href="https://alqassem-oweida.github.io/Orange-Coding-Academy-Projects/">
            <img src="./Pic/Carousel/Team Project.png" className="d-block w-100" /> </a>
          <div className="carousel-caption d-none d-md-block">
            <div style={{color: 'black', backgroundColor: 'rgba(216, 216, 216, 0.852)', textAlign: 'center', borderRadius: 18}}>
              <h5>A Team Project</h5>
              <p>Firest Project we made as a team at the Coding Academy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Slide Show End */}
  {/* Tasks Section Start */}
  <div className="Intro">
    <hr />
    <h4>Tasks we mad at Orange Coding Academy</h4>
    <hr />
  </div>
  {/*Start of Task_Box */}
  <div id="Tasks_Section">
    <div className="Tasks_Box">
      {/* Box#1  */}
      <div className="TBox">
        <img src="../Pic/Tasks/1.png" />
        <h5>in this task we learnd how to make responsive website</h5>
      </div>
      {/* Box#2  */}
      <div className="TBox">
        <img src="../Pic/Tasks/2.png" />
        <h5>We used Flex+Grid to do this task</h5>
      </div>
      {/*  Box#3  */}
      <div className="TBox">
        <img src="../Pic/Tasks/3.png" />
        <h5>We imetate orange website in this task and made it useing grid </h5>
      </div>
      {/*  Box#4  */}
      <div className="TBox">
        <img src="../Pic/Tasks/4.png" />
        <h5>A Blog website that we made</h5>
      </div>
    </div>
  </div>
  {/*End of Task_Box */}
  <div className="gitAccount">
    <h5>If you want to see more, you are more than welcome to visit my Github account</h5>
    <a href="https://github.com/ALQassem-Oweida" target="_blank">
      <svg height={52} aria-hidden="true" viewBox="0 0 16 16" version="1.1" width={52} data-view-component="true" className="octicon octicon-mark-github v-align-middle">
        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    </a>
  </div>

</div>

    </div>
  )
}

export default Project










