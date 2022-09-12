import React from 'react'
import "./blocksecond.css";

function BlockSecond() {
  return (
    <div className="container">
      <div className="block_2">
        <div style={{marginRight: "6px", fontSize: "0.8rem", color: "var(--color-text-parmary)"}}>Don't have an account?</div>
        <a style={{fontSize: "0.8rem", textDecoration: "none", fontWeight: "700", color: "var(--color-text-face)"}} href="/">Sign up</a>
      </div>
    </div>
  )
}

export default BlockSecond