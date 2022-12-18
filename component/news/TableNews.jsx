import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import ModalDelete from './ModalDelete';
import Link from 'next/link';
import { Edit } from '@mui/icons-material';

const TableNews = ({ news, handleGetNews }) => {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Title</TableCell>
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
                                    <TableCell align="right">{row.title}</TableCell>
                                    <TableCell align="right">{row.content}</TableCell>
                                    <TableCell align="right">{row.created_at}</TableCell>
                                    <TableCell align="right">
                                        <Box
                                            sx={{
                                                display: 'flex',
                                            }}
                                            component="div"
                                        >

                                            <ModalDelete item={row} handleGetNews={handleGetNews} />
                                            <Button>
                                                <Link href={`news/update/${row.id}`} style={{ width: '100%' }}>
                                                    <Edit fontSize='small' />
                                                </Link>

                                            </Button>
                                        </Box>

                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableNews