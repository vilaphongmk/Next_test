import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';


const initial = {
    tittle: "",
    content: "",
}
export default function BasicTextFields() {
    const [news, setNews] = useState(initial)
    const handleChange = (event) => {
        setNews({ ...news, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const { data } = await axios.post(`http://127.0.0.1:8000/api/addnews`, news);
        if (data && data.status === "success") {

            setNews(initial);

        }
        console.log(data);
    }
    return (
        <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            autoComplete="off"
            sx={{ m: 5 }}
        >
            <TextField id="standard-basic" label="tittle" name="tittle" variant="standard" value={news.tittle} onChange={handleChange} />
            <TextField id="standard-basic" label="content" name="content" variant="standard" value={news.content} onChange={handleChange} />
            <Button type="submit" variant='contained'>
                Add
            </Button>

        </Box >
    );
}