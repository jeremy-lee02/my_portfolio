import { PageInfo } from "../typing";

export const fetchInfo = async() =>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/getInfo`)
    const data = await res.json();
    const info: PageInfo = data.pageInfo;
    return info;
}