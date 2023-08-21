import { axiosInstance } from "../../lib/axios";

export const useFetchNasabah = () => {
    const fetchNasabah = async () => {
        try {
            const response = await axiosInstance.get("/nasabah")
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