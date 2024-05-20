import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

// const InputField = styled(TextField)(({ theme }) => ({
//     '&:focus': {
//         borderColor: 'blue', // Change border color on focus
//     },
// }))


export default function Input({ placeholder, value, onchangeHandler}) {
    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder={`${placeholder}`}
            fullWidth={true}
            value={value}
            onChange={(e)=>onchangeHandler(e.target.value)}
            sx={{
                border: "2px solid #dcdfe4",
                borderRadius: "3px",


                '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
                    // Custom styles here
                    padding: "6px 8px",
                    fontSize: "13px",
                    color: "black",
                    
                },

                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                    border: "none"
                },

                '&.focus .MuiFormControl-root': {
                    borderColor: 'blue',
                },
            }}
        />
    );
}


