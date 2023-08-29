import React from "react";

const page = ({ params }) => {
  return (
    <div>
      {params.brand_id}:{params.count_id}
    </div>
    // URL: http://localhost:3000/brand_name/count_id
  );
};

export default page;
