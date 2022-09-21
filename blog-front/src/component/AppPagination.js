import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AppPagination = ({ setPage, pageNumber }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        sx={{
          margin: "60px 0px",
        }}
      >
        <Pagination
          count={pageNumber}
          color="primary"
          onChange={(e) => handleChange(e.target.textContent)}
        />
      </Box>
    </div>
  );
};

export default AppPagination;
