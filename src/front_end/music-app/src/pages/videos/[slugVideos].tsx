import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Box, Grid } from "theme-ui";
import Menu from "../../components/Menu";
import getCategoryVideo from "../../service/getCategoryVideo";
export interface DataVideo {
	image?: string;
	title?: string;
	nameArtist?: string;
	key?: string,
}
const CategoryVideo = () => {
    const router = useRouter();
    const [dataVideo, setDataVideo] = useState<DataVideo>()
    useEffect(() => {
        if(router.query.slugVideos){
            getCategoryVideo.getAll(String(router.query.slugVideos)).then((res:any) => {
                console.log(res.data.data)
                setDataVideo(res.data.data)
            })
        }
    })
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
            <Grid
                sx={{
                    "@media only screen and (min-width: 1024px)": {
                        margin: '20px 20px 20px 20px',
                        gridTemplateColumns: ['3','0.4fr 0.4fr 0.4fr'],
                    }
                }}
            ></Grid>
        </Box>
    );
}
export default CategoryVideo;