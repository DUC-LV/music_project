import axiosInstance from "./axiosInstance";

const getCategoryVideo = {
    getAll(typePlaylist:string){
        const url = `/video/${typePlaylist}/`;
        return axiosInstance.get(url);
    }
}
export default getCategoryVideo;