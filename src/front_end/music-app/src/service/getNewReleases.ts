import axiosInstance from "./axiosInstance";

const getNewReleases = {
    getAll(){
        const url = '/new_release'
        return axiosInstance.get(url)
    }
}
export default getNewReleases;