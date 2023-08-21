import { axiosInstance } from "../../lib/axios";

export const useUpdateNasabah = () => {
    const updateNasabah = async (nomorKtp, data) => {
        try {
            const response = await axiosInstance.put(`/nasabah/${nomorKtp}`, data);
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