import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TableNews from "../../component/news/TableNews";
import axiosApi from "../../utils/axios";

const News = () => {
  const [news, setNews] = useState(null);

  const handleGetNews = async () => {
    const { data } = await axiosApi.get(`news`);
    if (data) {
      setNews(data.news);
    }
  };

  useEffect(() => {
    handleGetNews();
  }, []);


  return (
    <Box sx={{ p: 3 }}>
      <Button variant="contained" sx={{ mb: 2 }} >
        <Link href='/news/add' style={{ width: "100%" }}>Add News</Link>
      </Button>
      <TableNews news={news} handleGetNews={handleGetNews} />
    </Box>
  );
};

export default News;
