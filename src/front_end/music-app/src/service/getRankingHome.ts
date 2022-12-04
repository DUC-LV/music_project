import axiosInstance from "./axiosInstance";

const getRankingHome = {
    getAll(){
        const url = '/ranking'
        return axiosInstance.get(url)
    }
}
export default getRankingHome;