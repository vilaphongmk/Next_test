import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axiosApi from '../../utils/axios';
import showError from '../../utils/showError';
import { toast } from 'react-toastify';
import { Delete, Edit } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ModalDelete({ item, handleGetNews }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = async () => {
        const { data } = await axiosApi.delete(`news-delete/${item.id}`);
        if (data && data.status === "success") {
            handleGetNews()
            handleClose()
            toast.success(data.message)
        } else {
            showError(data.message);
        }
        console.log("call back api", data);
    }

    return (
        <div>
            <Button onClick={handleOpen} startIcon={<Delete />}></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box component="h2" sx={{
                        color: "red",
                        textAlign: "center",
                    }}>
                        ທ່ານຕ້ອງການລົບຂໍ້ມູນ ຫຼື ບໍ່ ?
                    </Box>
                    <Box component="h5"
                        sx={{
                            textAlign: "center",
                        }}>
                        {item.title}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: 1,
                    }}>
                        <Button onClick={handleClose} variant='outlined' fullWidth>No</Button>
                        <Button onClick={handleDelete} variant='contained' fullWidth>Yes</Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    );
}