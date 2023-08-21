import { axiosInstance } from "../../lib/axios";

const nasabahUrl = import.meta.env.VITE_NASABAH_URL;

export const useFetchByKtpNasabah = () => {
    const fetchByKtpNasabah = async (nomorKtp) => {
        try {
            const response = await axiosInstance.get(`${nasabahUrl}/${nomorKtp}`)
            return response.data
        } catch (error) {
            console.error("Error Fetching Nasabah", error)
            throw error
        }
    }

    return {
        fetchByKtpNasabah
    }
}