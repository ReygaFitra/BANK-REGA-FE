import { axiosInstance } from "../../lib/axios";

export const useCreateNasabah = () => {
    const createNasabah = async (data) => {
        try {
            const response = await axiosInstance.post("/nasabah", data)
            return response.data
        } catch (error) {
            console.error("Error Creating Nasabah", error)
            throw error
        }
    }

    return {
        createNasabah
    }
}