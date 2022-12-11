import axiosInstance from "./axiosInstance";

const getListTopic = {
    getAll(){
        const url = '/list_topic'
        return axiosInstance.get(url)
    }
}
export default getListTopic;