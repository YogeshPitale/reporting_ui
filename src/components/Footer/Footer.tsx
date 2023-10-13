import { Box, Typography } from '@mui/material'
import logo from "../../assets/Wells-Fargo-Logo-1852.png"
const Footer = () => {
    return (
        <Box
            position={"fixed"}
            bottom={"0"}
            display={"flex"}
            width={"100%"}
            height={"45px"}
            alignItems={"center"}
            sx={{ bgcolor: "secondary.main",borderTop:"1px solid silver" }}
            justifyContent={"space-between"}
        >
            <img src={logo} style={{ height: "inherit" }} alt="logo" />
            <Typography variant='caption' mr={2}>Well Fargo Inc. All rights reserved.</Typography>
        </Box>
    )
}

export default Footer