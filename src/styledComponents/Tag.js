import { Box, styled } from "@mui/material";
import availibleTagOptions from '../TASK/availibleTagOptions';

const Tag = styled(Box)(({ theme, tagname }) => ({
    width: "fit-content",
    borderRadius: "1em",
    margin: "0 0.3em",
    padding: "0.1em 0.5em",
    backgroundColor: (tagname && availibleTagOptions[tagname] && availibleTagOptions[tagname].color) || "lightgray"
}));
export default Tag