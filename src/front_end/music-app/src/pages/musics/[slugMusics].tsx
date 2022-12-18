import React from "react";
import { Box } from "theme-ui";
import Menu from "../../components/Menu";


const CategoryMusic = () => {
    return(
        <Box
            sx={{
                margin: '0px 320px 0px 200px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '0px 0px 0px 210px',
                },
                "@media only screen and (max-width: 767px)": {
                    margin: '0px',
                },
            }}
        >
            <Menu />
        </Box>
    );
}
export default CategoryMusic;