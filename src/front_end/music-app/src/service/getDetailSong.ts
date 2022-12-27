import axiosInstance from "./axiosInstance";

const getDetailSong = {
    getAll(key:string){
        const url = `/music/${key}`
        return axiosInstance.get(url)
    }
}
export default getDetailSong;