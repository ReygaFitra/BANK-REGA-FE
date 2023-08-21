import { axiosInstance } from "../../lib/axios";

const nasabahUrl = import.meta.env.VITE_NASABAH_URL;

export const useUpdateNasabah = () => {
    const updateNasabah = async (nomorKtp, data) => {
        try {
            const response = await axiosInstance.put(`${nasabahUrl}/${nomorKtp}`, data);
            return response.data;
        } catch (error) {
            const errorMessage = "Error Updating Nasabah: " + error.message;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }
    }

    return {
        updateNasabah
    }
}