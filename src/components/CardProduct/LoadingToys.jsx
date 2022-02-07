import React from "react";
import ContentLoader from "react-content-loader";

function LoadingToys() {
  return (
    <ContentLoader
      speed={2}
      width={303}
      height={500}
      viewBox="0 0 303 500"
      backgroundColor="#fcfcfc"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="303" height="613" />
    </ContentLoader>
  );
}

export default LoadingToys;
