import axiosInstance from "./axiosInstance";

const getTypeMusic = {
    getAll(typeMusic:string){
        const url = `/music/${typeMusic}/`;
        return axiosInstance.get(url);
    }
}
export default getTypeMusic;