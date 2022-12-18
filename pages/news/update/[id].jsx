import React, { useCallback, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Card, Grid } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import showError from "../../../utils/showError";
import { toast } from "react-toastify";
import axiosApi from "../../../utils/axios";
import { useRouter } from "next/router";

const initial = {
  tittle: "",
  Content: "",
};
export default function BasicTextFields() {
  const [news, setNews] = useState(initial);

  const router = useRouter();

  const handleChange = (event) => {
    setNews({ ...news, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axiosApi.post(`news-update`, news);
    if (data && data.status === "success") {
      toast.success(data.message);
      router.push("/news");
    } else {
      showError(data.message);
    }
  };

  const handleGetNewsByID = useCallback(async (id) => {
    const { data } = await axiosApi.get(`news/${id}`);
    if (data && data.status === "success" && data.news) {
      setNews({
        ...news,
        id: data.news.id,
        title: data.news.title,
        content: data.news.content,
      });
    } else if (data && data.message) {
      showError(data.message);
    } else {
      router.push("/news");
    }
  }, []);

  useEffect(() => {
    if (router.query.id) {
      handleGetNewsByID(router.query.id);
    }
  }, [handleGetNewsByID, router.query.id]);

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      noValidate
      autoComplete="off"
      sx={{ m: 5 }}
    >
      <Card sx={{ px: 3, pb: 3 }}>
        <Box component="h1" sx={{ color: "#444" }}>
          Update News
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              variant="standard"
              defaultValue={news.title}
              value={news.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Content"
              name="content"
              variant="standard"
              value={news.content}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <Link href="/news">
              <Button fullWidth type="submit" variant="outlined">
                Back
              </Button>
            </Link>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button fullWidth type="submit" variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
