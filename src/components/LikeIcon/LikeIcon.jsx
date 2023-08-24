import React from "react";
import { useLocation } from "react-router-dom";
import "./LikeIcon.css";

const LikeIcon = ({ isSaved, isSavedMoviesPage }) => {
  const { pathname } = useLocation();
  return (
    <>
      {isSavedMoviesPage ? (
        <svg
          width="14"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m7 7.06 3.005 3.006 1.06-1.061L8.06 6l3.005-3.005-1.06-1.06L7 4.938 3.994 1.934l-1.06 1.06L5.939 6 2.934 9.005l1.06 1.06L7 7.062Z"
            fill="#000"
          />
        </svg>
      ) : null}
      {pathname === "/movies" ? (
        isSaved ? (
          <svg
            width="14"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.182 0C8.782 0 7.764.738 7 1.538 6.236.8 5.218 0 3.818 0 1.591 0 0 1.785 0 4c0 1.108.445 2.092 1.273 2.77L7 12l5.727-5.23C13.491 6.03 14 5.107 14 4c0-2.215-1.59-4-3.818-4Z"
              fill="#EE3465"
            />
          </svg>
        ) : (
          <svg
            width="14"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m6.652 1.898.362.35.348-.364C8.082 1.129 8.978.5 10.182.5 12.102.5 13.5 2.029 13.5 4c0 .937-.425 1.736-1.115 2.405L7 11.323 1.61 6.4l-.01-.01-.01-.008C.885 5.806.5 4.968.5 4 .5 2.029 1.898.5 3.818.5c1.195 0 2.09.678 2.834 1.398Z"
              stroke="#E8E8E8"
            />
          </svg>
        )
      ) : null}
    </>
  );
};

export default LikeIcon;
