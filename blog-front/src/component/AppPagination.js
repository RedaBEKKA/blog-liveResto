import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AppPagination = () => {
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
        <Pagination count={10} />
      </Box>
    </div>
  );
};

export default AppPagination;
