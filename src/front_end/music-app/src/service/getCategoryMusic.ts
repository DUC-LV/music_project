import axiosInstance from "./axiosInstance";

const getCategoryMusic = {
    getAll(typeMusic:string){
        const url = `/music/${typeMusic}/`;
        return axiosInstance.get(url);
    }
}
export default getCategoryMusic;