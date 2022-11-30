import axiosInstance from "./axiosInstance";

const getShowCaseHome = {
    getAll(){
        const url = '/showcase'
        return axiosInstance.get(url)
    }
}
export default getShowCaseHome;