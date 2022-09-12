import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>Meta</div>
        <div>About</div>
        <div>Blog</div>
        <div>Jobs</div>
        <div>Help</div>
        <div>API</div>
        <div>Privacy</div>
        <div>Terms</div>
        <div>Top Accounts</div>
        <div>Hashtags</div>
        <div>Locations</div>
        <div>Instagram Lite</div>
        <div>Contact Uploading {"&"} Non-Users</div>
      </div>
      <div className="bottom" style={{marginTop: "1rem"}}>
        <div style={{width: "auto"}}>
          <select name="lang" id="select">
            <option value="English">English</option>
            <option value="Thailand">Thailand</option>
          </select>
        </div>
        <div style={{width: "auto"}}>© 2022 Instagram from Meta</div>
      </div>
    </div>
  );
}

export default Footer;
