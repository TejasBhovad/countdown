import React from "react";

const page = ({ params }) => {
  return <div>Name: {params.brand_id}</div>;
  // URL: http://localhost:3000/brand_name
};

export default page;
