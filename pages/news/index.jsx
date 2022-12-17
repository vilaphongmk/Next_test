import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

const News = () => {
  const [news, setNews] = useState(null);

  const handleGetNews = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/news`);
    if (data) {
      console.log(data.news);
      setNews(data.news);
    }
  };

  useEffect(() => {
    handleGetNews();
  }, []);
  return (
    <>
      <Box sx={{ p: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Tittle</TableCell>
                <TableCell align="right">Content</TableCell>
                <TableCell align="right">Created At</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {news &&
                news.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.tittle}</TableCell>
                    <TableCell align="right">{row.Content}</TableCell>
                    <TableCell align="right">{row.created_at}</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default News;
