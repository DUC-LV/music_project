export const linkLogo = "https://cdn.tgdd.vn/2020/04/campaign/NCTanhrthumb-640x360.jpg"
export interface DataShowCase {
    title: string;
    key: string;
    thumbnail: string;
    url: string;
    description: string;
    order: string;
    imageUrl: string;
}
export interface DataTopicEvent {
    key: string;
    title:string;
    thumbnail: string;
    dateRelease: string;
    dateCreate: string;
    dataArtists: [
        artistId: string,
        imageUrl: string,
        name: string,
        shortLink: string,
    ]
}
export interface DataRanking {
    key: string;
    title:string;
    thumbnail: string;
    dateRelease: string;
    dateCreate: string;
    highestPosition: string;
    dataArtists: [
        artistId: string,
        imageUrl: string,
        name: string,
        shortLink: string,
    ]
}
export const getFullTimeFromDatetime = (dt: string) => {
    const datetime = new Date(dt);
    return `${datetime.getDate()}/${datetime.getMonth() + 1}/${datetime.getFullYear()}`
}
export const convertSlug = (TXT:string) => {
    return TXT.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
}