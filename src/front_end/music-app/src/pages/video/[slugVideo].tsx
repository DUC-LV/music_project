import React, { useState, useEffect } from "react";
import { Box } from "theme-ui";
import ListVideoRecommend from "../../components/ListVideoRecommend";
import {useRouter} from "next/router";
import getVideoDetail from "../../service/getVideoDetail";

const VideoDetail = () => {
    const router = useRouter();
    useEffect(() => {
        if(router.query.key){
            getVideoDetail.getAll(String(router.query.key)).then(res => {
                console.log(res.data)
            })
        }
    }, [router.query.key])
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
            <Box>
                <video
                    controls
                    src="https://stream.nixcdn.com/PreNCT21/NeuEmConDoiAnh-buitruonglinh-8422344.mp4?st=KQRaekv7LqCDqtrjpjsq7g&e=1672676483"
                />
            </Box>
            <ListVideoRecommend />
        </Box>
    );
}
export default VideoDetail;