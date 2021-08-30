import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import "./CustomPagination.css";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Pagination
          className="pagination"
          count={numberOfPages}
          shape="rounded"
          onChange={(e) => handlePageChange(e.target.textContent)}
          color="secondary"
          variant="outlined"
          hidePrevButton
          hideNextButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
