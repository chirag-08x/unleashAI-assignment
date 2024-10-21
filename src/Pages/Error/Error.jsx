import React, { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return <div>404!! Page not found </div>;
};

export default Error;
