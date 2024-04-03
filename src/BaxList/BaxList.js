import React, { useContext } from 'react'
import BaxItemCard from './BaxItemCard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { filterContext } from '../context/FilterContext';

const comment = {/* <Box width={"100%"} alignContent={"center"}>
        <Box display={"flex"} flexDirection={"column"} alignItems="flex-start" width="fit-content">
        </Box>
    </Box> */}

export default function BaxList() {
    const { filteredItems } = useContext(filterContext);
    return (
        <Grid
            id={comment}
            container
            spacing={2}
            direction="column"
            justifyContent="space-around"
            alignItems="center"
            width="auto"
        >
            <Grid item xs={6}>
                <Box
                    sx={{
                        p: 2,
                        display: 'table-row-group',
                    }}
                >

                    {Object.entries(filteredItems).map(([id, item]) => <BaxItemCard key={id} item={item} id={id} />)}
                </Box>
            </Grid>
        </Grid>)
}