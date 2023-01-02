import React from "react";
import { Box } from "theme-ui";

const ListVideoRecommend = () => {
    return(
        <Box
            sx={{
                width: '360px',
                height: '100%',
                borderLeft: '1px solid #28313b',
                position: 'fixed',
                top: '0px',
                right: '0',
                "@media only screen and (max-width: 1260px)": {
                    display: 'none'
                },
            }}
        ></Box>
    );
}
export default ListVideoRecommend;