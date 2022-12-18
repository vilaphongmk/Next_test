import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, Grid } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import showError from '../../utils/showError';
import { toast } from 'react-toastify';
import axiosApi from '../../utils/axios';


const initial = {
    title: "",
    content: "",
}
export default function BasicTextFields() {
    const [news, setNews] = useState(initial)
    const handleChange = (event) => {
        setNews({ ...news, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { data } = await axiosApi.post(`addnews`, news);
        if (data && data.status === "success") {
            setNews(initial);
            toast.success(data.message)
        } else {
            showError(data.message);
        }
    }
    return (
        <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            autoComplete="off"
            sx={{ m: 5 }}
        >
            <Card sx={{ px: 3, pb: 3 }}>
                <Box component="h1" sx={{ color: "#444" }}>Add News</Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Title" name="title" variant="standard" value={news.title} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth label="Content" name="content" variant="standard" value={news.content} onChange={handleChange} />
                    </Grid>

                    <Grid item xs={6} sm={6}>
                        <Link href="/news">
                            <Button fullWidth type="submit" variant='outlined'>
                                Back
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Button fullWidth type="submit" variant='contained'>
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </Box >
    );
}