import axiosInstance from "./axiosInstance";

const getTypePlaylist = {
    getAll(typePlaylist:string){
        const url = `/playlist/${typePlaylist}/`;
        return axiosInstance.get(url);
    }
}
export default getTypePlaylist;