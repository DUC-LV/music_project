import axiosInstance from "./axiosInstance";

const getTopicEventHome = {
    getAll(){
        const url = '/topic'
        return axiosInstance.get(url)
    }
}
export default getTopicEventHome;