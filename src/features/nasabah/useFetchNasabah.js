import { axiosInstance } from "../../lib/axios";

const nasabahUrl = import.meta.env.VITE_NASABAH_URL;

export const useFetchNasabah = () => {
    const fetchNasabah = async () => {
        try {
            const response = await axiosInstance.get(nasabahUrl)
            return response.data
        } catch (error) {
            console.error("Error Fetching Nasabah", error)
            throw error
        }
    }    

    return {
        fetchNasabah
    }
}