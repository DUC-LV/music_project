import axiosInstance from "./axiosInstance";

const getTop100 = {
    getAll(){
        const url = '/top100'
        return axiosInstance.get(url)
    }
}
export default getTop100;