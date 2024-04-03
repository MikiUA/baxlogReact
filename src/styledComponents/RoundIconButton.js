import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton'

const RoundIconButton = styled(IconButton)(({ theme }) => ({
    width: "2em",
    height: "2em",
    borderRadius: "50%",
    marginRight: "0.2em",
}));

export default RoundIconButton