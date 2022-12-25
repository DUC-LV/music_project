import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Box, Flex, Grid } from "theme-ui";

export const SkeletonSlide = () => {
    return(
        <Box
            sx={{
                margin: '10px 310px 10px 210px',
                "@media only screen and (max-width: 1260px)": {
                    width: '82%',
                    margin: '10px 0px 10px 210px',
                },
                height: '400px'
            }}
        >
            <SkeletonTheme baseColor="rgba(244,246,248,0.05)" highlightColor="white" height="100%" width= '100%'>
                <Skeleton className="skeleton"/>
            </SkeletonTheme>
        </Box>
    )
}

export const SkeletonSlideShow = () => {
    return(
        <Box
            sx={{
                margin: '10px 320px 10px 210px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '10px 0px 10px 210px',
                },
            }}
        >
                <Box sx={{ mt: '20px'}}>
                    <Skeleton width="50%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Flex sx={{ mt: '20px'}}>
                    <Box sx={{ minWidth: '26%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '26%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '25%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '25%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                </Flex>
                <Box sx={{ mt: '20px'}}>
                    <Skeleton width="50%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Flex sx={{ mt: '20px'}}>
                    <Box sx={{ minWidth: '26%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '26%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '25%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '25%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                </Flex>
                <Box sx={{ mt: '20px'}}>
                    <Skeleton width="50%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Flex sx={{ mt: '20px'}}>
                    <Box sx={{ minWidth: '26%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '26%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '25%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                    <Box sx={{ minWidth: '25%'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                        <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    </Box>
                </Flex>
        </Box>
    )
}


export const LoadingCSS = () => {
    return(
        <Box
            sx={{
                margin: '10px 20px 10px 20px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '10px 0px 10px 10px',
                },
            }}
        >
            <Flex sx={{ mt: '20px'}}>
                <Box sx={{ minWidth: '26%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Flex>
            <Flex sx={{ mt: '20px'}}>
                <Box sx={{ minWidth: '26%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Flex>
            <Flex sx={{ mt: '20px'}}>
                <Box sx={{ minWidth: '26%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ minWidth: '25%'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="95%" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Flex>
        </Box>
    )
}


export const SkeletonVideo = () => {
    return(
        <Box>
            <Grid
                sx={{
                    "@media only screen and (min-width: 1024px)": {
                        margin: '20px 20px 20px 20px',
                        gridTemplateColumns: ['3','0.5fr 0.5fr 0.5fr'],
                    }
                }}
            >
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Grid>
            <Grid
                sx={{
                    "@media only screen and (min-width: 1024px)": {
                        margin: '20px 20px 20px 20px',
                        gridTemplateColumns: ['3','0.5fr 0.5fr 0.5fr'],
                    }
                }}
            >
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Grid>
            <Grid
                sx={{
                    "@media only screen and (min-width: 1024px)": {
                        margin: '20px 20px 20px 20px',
                        gridTemplateColumns: ['3','0.5fr 0.5fr 0.5fr'],
                    }
                }}
            >
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="100%" height="153px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Grid>
        </Box>
    )
}