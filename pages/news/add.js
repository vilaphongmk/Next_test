import { Grid, TextareaAutosize, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Link from 'next/link'
import { WidthFull } from '@mui/icons-material'

const add = () => {
    return (
        <div >
            <Box component="form" sx={{
                maxWidth: "960px",
                width: "100%",
                mx: "auto",
                border: "1px solid red"

            }}>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={6}>
                        <TextField id="standard-basic" label="title" name="title" variant="outlined" fullWidth />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={6}>
                        <TextField id="standard-basic" label="Standard" name="group" variant="outlined" fullWidth />

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <TextareaAutosize
                            maxRows={12}
                            cols={12}
                            aria-label="maximum height"
                            placeholder="Maximum 6 rows"
                            sx={{ width: "100%" }}

                        />

                    </Grid>

                </Grid>
                <Box component={"a"} href={"/"} >
                    hhhh
                </Box>
                <Link href="/news">
                    back news
                </Link>
            </Box>



        </div>
    )
}

export default add
