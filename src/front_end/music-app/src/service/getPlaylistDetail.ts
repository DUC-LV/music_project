import axiosInstance from "./axiosInstance";

const getPlaylistDetail = {
    getAll(key:string){
        const url = `/playlist/${key}`
        return axiosInstance.get(url)
    }
}
export default getPlaylistDetail;