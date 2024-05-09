import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: "400px",
    // height: "40vh",
    padding:"32px 40px",
    display:'flex',
    flexDirection:'column',
    margin:"0px auto",
    backgroundColor:"rgb(255, 255, 255)",
    borderRadius:"3px",
    boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 10px",
    boxSizing:'border-box',
    color:"#42526E"

    // padding: theme.spacing(5),
    // ...theme.typography.body2,
    // textAlign: 'center',

    /**
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;

     */
}));

export default function PaperComponent({children}) {
    return (
        // <Stack direction="row" spacing={2}>
            <DemoPaper square={false}>{children}</DemoPaper>
        // </Stack>
    );
}