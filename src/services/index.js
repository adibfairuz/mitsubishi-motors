import { API_URL } from "../config/URL"

const getProvinces = async () => {
    try {
        const res = await fetch(`${API_URL}/get-provinces`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

const getDealers = async (params) => {
    try {
        const res = await fetch(`${API_URL}/search-dealers?${new URLSearchParams(params)}`)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export {
    getProvinces,
    getDealers
}