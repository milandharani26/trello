import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({

    borderRadius: "3px",
    '&:hover': {
        backgroundColor: "#0065FF",
    }
}));

export default function ButtonFiled({ children, bgColor, color, hoverbg,  variant, border}) {
    return (
        <ColorButton
            variant={variant}
            fullWidth={true}
            sx={{
                backgroundColor: `${bgColor}`, 
                color: { color }, 
                border:`1px solid ${border}`,

                '&:hover': {
                    backgroundColor: `${hoverbg}`, // Change background color on hover
                    border:`1px solid ${border}`
                },
            }}
        >
            {children}
        </ColorButton>
    );
}
