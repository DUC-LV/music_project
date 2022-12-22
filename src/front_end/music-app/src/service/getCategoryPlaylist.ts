import axiosInstance from "./axiosInstance";

const getCategoryPlaylist = {
    getAll(typePlaylist:string){
        const url = `/playlist/${typePlaylist}/`;
        return axiosInstance.get(url);
    }
}
export default getCategoryPlaylist;