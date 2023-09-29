import React from "react";

const page = ({ params }) => {
  return <div>Category: {params.type}</div>;
  // URL: http://localhost:3000/category/type
};

export default page;
