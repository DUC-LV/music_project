import React from "react";
import { Box } from "theme-ui";

const PlayMusic = () => {
    return(
        <Box
            sx={{
                width: '320px',
                height: '100%',
                borderLeft: '1px solid #28313b',
                position: 'fixed',
                right: '0',
                "@media only screen and (max-width: 1260px)": {
                    display: 'none'
                }
            }}
        ></Box>
    );
}
export default PlayMusic;