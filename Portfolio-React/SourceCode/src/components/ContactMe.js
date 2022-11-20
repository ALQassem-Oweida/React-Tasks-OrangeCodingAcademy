
import React from 'react'

function ContactMe() {
  return (
    <div>
        
        <div className="Main_Contact_Me">
  <div className="Contact_Box">
    <div className="CBox">
      <form className="Form_Data">
        <input className="First_Name" type="text" placeholder="First Name" required />
        <input className="Last_Name" type="text" placeholder="Last Name" required />
        <input className="emailx" type="email" placeholder="someone@something.com" required />
        <input className="subjectx" type="text" placeholder="Subject" required />
        <textarea className="textx" placeholder="Message" required defaultValue={""} />
        <button className="sub" type="submit">Send Me a Message</button>
      </form>
    </div>
    <div className="CBox">
      <img src="./Pic/maps.png" />
    </div>
    <div className="CBox">
      <h5 style={{paddingTop: 20}}>Social Media </h5>
      <div className="Social2">
        <a href="https://web.facebook.com/alqassem.oweida?_rdc=1&_rdr" target="_blank"><img className="nav_imgs" src="./icons_facebook.svg" /></a>
        <a href="https://www.instagram.com/qasem_oweida/?fbclid=IwAR30eEO_vGwc5Z__DYIvwWv_lC3gOOUJXhu8faKzSHFeG6E9IpU8nlYpk2o" target="_blank"><img className="nav_imgs" src="./icons_instagram.svg" /></a><br />
        <a href="https://www.linkedin.com/in/alqassem-oweida?fbclid=IwAR2kLnjikBwsd1uLjYhvK1w6xdb9rVLYGLCqZLlK95hahBYfg6yAl27MJK0&original_referer=https%3A%2F%2Fl.facebook.com%2F" target="_blank"><img className="nav_imgs" src="./icons_linkedin.svg" /></a>
        <a href="https://twitter.com/?lang=en" target="_blank"><img className="nav_imgs" src="./icons_twitter.svg" /></a>
      </div>
    </div>
  </div>
  {/*Start of My fav.Saying */}
  <div className="Saying">
    <div>
      <p> My Favorite Saying :</p>
      <p> “Be the change that you wish to see in the world.”<br />
        <span>― Mahatma Gandhi</span>
      </p></div>
  </div>
</div>




    </div>
  )
}

export default ContactMe











