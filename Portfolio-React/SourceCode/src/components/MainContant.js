import React from 'react'

function MainContant() {
  return (
   
    // <!--Start of Main_Contant Section -->
    <section id="Main_Contant">
        {/* <!--Start of About Me_Box --> */}
        <div id="How_Am_I_Box">
            <h3>How Am I ?</h3>
            <hr/>
            <p className="Describe_yourself"> I am a tranee at Orange Coding Academy,I have a Bachelor's degree in Civil
                Engineering graguated 6 year's ago and worked in many project as a site civil engineer ,recently I
                decided to take a new path and follow my passion for coding.Orange Coding Academy was the right way to do that. </p>
        </div>
     
        {/* <!--End of About Me_Box --> */}
        {/* <!--Start of Qualification_Box --> */}
        <div id="Qualifications">
            <h3>Qualifications</h3>
            <hr/>
            <div className="Qualification_Box">
                {/* <!--  Education_Box#1  --> */}
                <div className="QBox">
                  
                    <h5>Education</h5>
                    <ul>
                        <li>Trainee at Orange coding Academy</li>
                        <br/>
                        <li>Bachelor's degree in Civil Engineering</li>
                    </ul>
                </div>
                {/* <!--  Experience_Box#2  --> */}
                <div className="QBox">
                   
                    <h5>Experience</h5>
                    <ul>
                        <li>Daily tasks and weekly projects at Orange Academy</li>
                        <br/>
                        <li>Site Engineer at many projects</li>
                        <br/>
                        <li>Field Supervisor</li>
                    </ul>
                </div>
                {/* <!--  Technical Skills_Box#3  --> */}
                <div className="QBox">
                    
                    <h5>Technical Skills</h5>
                    <ul>
                        <li>HTML5</li>
                        <br/>
                        <li>CSS</li>
                        <br/>
                        <li>Miro</li>
                        <br/>
                        <li>Bootstrap</li>
                        <br/>
                        <li>Github</li>
                    </ul>
                </div>
                {/* <!--  Skills_Box#4  --> */}
                <div className="QBox">
                   
                    <h5>Skills</h5>
                    <ul>
                        <li>Searching skills</li>
                        <br/>
                        <li>Presentation skills </li>
                        <br/>
                        <li>Self learning </li>
                        <br/>
                        <li>Construction Management</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!--End of Qualification_Box --> */}
    </section>




  )
}

export default MainContant