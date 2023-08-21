import { axiosInstance } from "../../lib/axios";

export const useFetchByKtpNasabah = () => {
    const fetchByKtpNasabah = async (nomorKtp) => {
        try {
            const response = await axiosInstance.get(`/nasabah/${nomorKtp}`)
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