import { axiosInstance } from "../../lib/axios";

const nasabahUrl = import.meta.env.VITE_NASABAH_URL;

export const useCreateNasabah = () => {
    const createNasabah = async (data) => {
        try {
            const response = await axiosInstance.post(nasabahUrl, data)
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