import Balance from "@mui/icons-material/Balance";
import MusicNote from '@mui/icons-material/MusicNote';
import OndemandVideo from '@mui/icons-material/OndemandVideo';
// import Piano from '@mui/icons-material/Piano';
// import AutofpsSelect from "@mui/icons-material/AutofpsSelect";

const availibleTagOptions = {
    "General": {
        icon: <Balance />,
        color: "#ddddff"
    },
    "Anime": {
        icon: <OndemandVideo />,
        color: "#ffdddd"
    },
    "Chords": {
        icon: <MusicNote />,
        color: "#ddffdd",
    }
};

export default availibleTagOptions;
export const availibleTags = Object.keys(availibleTagOptions);