import React from "react";

const page = ({ params }) => {
  return (
    <div>
      Edit page
      <br />
      {params.brand_id}:{params.count_id}
    </div>
  );
  // URL: http://localhost:3000/brand_name/count_id/edit
};

export default page;
npm