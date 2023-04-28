"use client";
import { useState } from "react";
import "./styles.css";

export default function CSS02() {
  const [active, setActive] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="frame">
        <div className="center">
          <div
            className={`menu-icon ${active ? "actived" : ""} `}
            onClick={(e) => {
              e.preventDefault();
              // find all child divs and remove no-animation class
              const lines = document.querySelectorAll(".menu-icon > div");
              lines.forEach((line) => {
                line.classList.remove("no-animation");
              });
              setActive(!active);
            }}
          >
            <div className="line-1 no-animation" />
            <div className="line-2 no-animation" />
            <div className="line-3 no-animation" />
          </div>
        </div>
      </div>
    </div>
  );
}
