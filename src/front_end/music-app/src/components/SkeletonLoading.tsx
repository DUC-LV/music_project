import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Box, Flex } from "theme-ui";

export const SkeletonSlide = () => {
    return(
        <Box
            sx={{
                margin: '10px 320px 10px 210px',
                "@media only screen and (max-width: 1260px)": {
                    margin: '10px 0px 10px 210px',
                },
            }}
        >
            <SkeletonTheme baseColor="rgba(244,246,248,0.05)" highlightColor="white" height="395px" width= '100%'>
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
                    <Box sx={{ mr: '20px'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    </Box>
                    <Box sx={{ mr: '20px'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    </Box>
                    <Box sx={{ mr: '20px'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    </Box>
                    <Box sx={{ mr: '20px'}}>
                        <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
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
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Flex>
            <Flex sx={{ mt: '20px'}}>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Flex>
            <Flex sx={{ mt: '20px'}}>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
                <Box sx={{ mr: '20px'}}>
                    <Skeleton baseColor="rgba(244,246,248,0.05)" highlightColor="white" width="240px" height="240px"/>
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                    <Skeleton width="70%" baseColor="gray" highlightColor="white" height="20px" />
                </Box>
            </Flex>
        </Box>
    )
}