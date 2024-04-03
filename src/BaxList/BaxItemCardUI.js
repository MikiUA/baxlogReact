import Box from '@mui/material/Box'

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import { styled } from '@mui/material';
import Tag from '../styledComponents/Tag';
import RoundIconButton from '../styledComponents/RoundIconButton';

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'space-between',
    width: '100%',
    margin: '1em',
    borderRadius: "0.4em",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow: "0px 7px 8px -4px rgba(0,0,0,0.2), 0px 12px 17px 2px rgba(0,0,0,0.14), 0px 5px 22px 4px rgba(0,0,0,0.12)"
}));

const DescrContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: "1em",
}));
const TagNButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));
const TagContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    height: "fit-content",
    fontSize: "0.8em",
}));
const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
}));


export default function BaxItemCardUI({ item, isAccomplished, onAccomplish, onEdit, onDelete }) {
    return (
        <Container bgcolor={isAccomplished ? 'green' : 'white'}>
            <DescrContainer>
                <Typography>{item.name}</Typography>
                {item.description && <Typography>{item.description}</Typography>}
            </DescrContainer>
            <TagNButtonContainer>
                <TagContainer>
                    {!item.tags.length
                        ? <Tag>No Tags</Tag>
                        : item.tags.map((tagname) =>
                            <Tag key={tagname} tagname={tagname}>
                                <Typography>{tagname}</Typography>
                            </Tag>)}
                </TagContainer>
                <ButtonContainer>
                    {isAccomplished
                        ?
                        <RoundIconButton sx={{ bgcolor: "lightgray" }}
                            onClick={onAccomplish}>
                            <DoneIcon style={{ transform: "scale(0.8)" }} />
                            <CloseIcon style={{ fill: '#bb0505', transform: "scale(1.3)" }} sx={{ position: "absolute", left: "16%" }} />
                        </RoundIconButton>
                        : <RoundIconButton sx={{ bgcolor: "gray" }} onClick={onAccomplish}><DoneIcon /></RoundIconButton>
                    }

                    <RoundIconButton sx={{ bgcolor: "lightblue" }} onClick={onEdit}><EditIcon /></RoundIconButton>
                    <RoundIconButton sx={{ bgcolor: "lightcoral" }} onClick={onDelete}><DeleteIcon /></RoundIconButton>
                    <RoundIconButton sx={{ bgcolor: "white", border: "1px solid black" }} onClick={() => console.log(item)}><QuestionMarkIcon /></RoundIconButton>
                </ButtonContainer>
            </TagNButtonContainer>
        </Container>
    )
}
