import {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { createBoard } from '../store/slices/boardSlice';
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

export default function AddBoardModel() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("")
    const dispatch = useDispatch();
    const { userID } = useParams();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen} sx={{color:"white", border:"none"}}>
            Create new board
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
                fullWidth={true}
            >
                <DialogTitle>Create Board</DialogTitle>
                <DialogContent>
                    {/* <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText> */}
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="boardName"
                        name="boardName"
                        label="Board Title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit" onClick={()=>dispatch(createBoard(userID, title))}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
