import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <svg
      className="logo"
      width="38"
      height="38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12.667c0-4.434 0-6.651.863-8.344a7.917 7.917 0 0 1 3.46-3.46C6.016 0 8.233 0 12.667 0h12.666c4.434 0 6.651 0 8.344.863 1.49.759 2.701 1.97 3.46 3.46C38 6.016 38 8.233 38 12.667v12.666c0 4.434 0 6.651-.863 8.344a7.917 7.917 0 0 1-3.46 3.46c-1.693.863-3.91.863-8.344.863H12.667c-4.434 0-6.651 0-8.344-.863a7.917 7.917 0 0 1-3.46-3.46C0 31.984 0 29.767 0 25.333V12.667Z"
        fill="#2BE080"
      />
      <circle cx="19" cy="19" r="11" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.154 19a3.846 3.846 0 1 0 7.692 0H25a6 6 0 0 1-12 0h2.154Z"
        fill="#2BE080"
      />
    </svg>
  );
};

export default Logo;
