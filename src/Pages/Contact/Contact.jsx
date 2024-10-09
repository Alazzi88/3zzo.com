
import {  EmailOutlined } from "@mui/icons-material";
import "./Contact.css";




const Contact = () => {

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <div className="cont contact">
        <span>Contact</span>
        <p className="info">
          I’m front end developer, website and mobile application{" "}
        </p>
        <div className="share">
          <a href="https://www.instagram.com/3zzoezzo/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@3zzo.com">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://www.snapchat.com/add/ezzo.com">
            <i className="fa-brands fa-snapchat"></i>
          </a>
          <a href="https://github.com/Alazzi88">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <p className="email" style={{ color: "#fff", fontSize: "10px", marginTop: "12px" }}>
        <EmailOutlined sx={{fontSize:"16px"}}/>  3zzoezzo@gmail.com
        </p>
      </div>

    </div>
  );
};

export default Contact;
