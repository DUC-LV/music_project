import axiosInstance from "./axiosInstance";

const getVideoDetail = {
    getAll(key:string){
        const url = `/video/${key}`
        return axiosInstance.get(url)
    }
}
export default getVideoDetail;
