import React, { useContext } from 'react'
import { mContext } from './ModalContext';
import availibleTagOptions from '../TASK/availibleTagOptions';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { IconButton, MenuItem, Select, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Tag from '../styledComponents/Tag';

function ModalIn({ children }) {
    return <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'background.paper',
        border: '2px solid #111',
        boxShadow: 24,
        padding: 4,
    }}
    >{children}</Box>
}

function ItemBox({ iKey, label, inputProps }) {
    const { item, updateCurrentItem } = useContext(mContext);
    return <TextField
        label={label} {...inputProps}
        defaultValue={item[iKey] || ""}
        onChange={(e) => updateCurrentItem(iKey, e)}
    />
}
function TagBox() {
    const { item, newTagValueandError = ["", false], addTag, delTag } = useContext(mContext);
    return <Box display={'flex'} sx={{ height: "fit-content" }} marginTop={"1em"}>
        <Box display={'flex'} sx={{ height: "fit-content" }}>
            {item.tags.map((tagname) =>
                <Tag key={tagname} tagname={tagname} display={'flex'}>
                    <Typography>{tagname}</Typography>
                    <IconButton sx={{ height: "0" }} onClick={() => delTag(tagname)}><DeleteIcon /> </IconButton>
                </Tag>)}
        </Box>
        <Select
            sx={{ width: "fit-content" }}
            value={newTagValueandError[0]}
            error={!!newTagValueandError[1]}
            placeholder='+ Add new Tag'
            onChange={addTag}
            label="new Tag"
        >
            {Object.entries(availibleTagOptions).map(([tagname, opts]) =>
                <MenuItem color={opts.color} key={tagname} value={tagname}>{tagname}</MenuItem>)}
        </Select>
    </Box>
}

export default function EditTaskModalUI({ isOpen, closeModal, accept, cancel }) {
    const { item } = useContext(mContext);
    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            aria-labelledby="edit-task-modal"
            aria-describedby="modal-description"
        >
            <ModalIn>
                <form onSubmit={e => { e.preventDefault(); accept(); }}>
                    <ItemBox label="Name" iKey="name" inputProps={{ "required": true, error: (!item["name"]) }} />
                    <ItemBox label="Description" iKey="description" />
                    <ItemBox label="Created on" iKey="dateStart" inputProps={{ disabled: true }} />
                    <ItemBox label={"Supposed to be complete by"} iKey="dateFinish" />
                    <TagBox />
                    <Button variant='contained' type='submit'>Accept</Button>
                    <Button variant='outlined' type="button" onClick={cancel}>Cancel</Button>
                </form>
            </ModalIn>
        </Modal >
    )
}
