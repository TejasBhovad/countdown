import React from "react";

const page = ({ params }) => {
  return <div>Settings {params.brand_id}</div>;
  // URL: http://localhost:3000/settings/brand_name
};

export default page;
