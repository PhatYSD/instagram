import React, { useState, useEffect } from "react";
import "./block_1.css";
import Logo from "../assets/images/7a252de00b20.png";

function BlockFrist() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const style = {
    height: "35%",
    width: "100%",
  };

  const style_2 = {
    height: "25%",
    width: "100%",
  };

  const hr = {
    width: "30%",
    height: "1px",
    borderTop: "1px solid var(--color-bg-line)",
  };

  useEffect(() => {
    const pass = password.length;

    if (username && pass >= 6) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }

  }, [username, password]);

  return (
    <div className="container">
      <div className="block_1">
        <div className="top" style={style}>
          <img src={Logo} alt="Logo Instagram" />
        </div>
        <div className="center" style={style}>
          <form>
            <div style={{ height: "60%" }}>
              <input
                type="text"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Phone number, username, or email"
              />
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
              />
            </div>
            <div style={{ height: "40%" }}>
              <button type="submit" disabled={!disabled}>
                Log in
              </button>
            </div>
          </form>
        </div>
        <div
          style={{
            width: "100%",
            height: "5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div style={hr}></div>
          <div style={{ color: "var(--color-bg-line)" }}>OR</div>
          <div style={hr}></div>
        </div>
        <div className="bottom" style={style_2}>
          <div className="b-top">
            <a href="/">
              <i className="fa-brands fa-square-facebook"></i>
              <span>Log in with Facebook</span>
            </a>
          </div>
          <div className="b-bottom">
            <a href="/">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockFrist;
