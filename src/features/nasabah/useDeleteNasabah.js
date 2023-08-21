import { axiosInstance } from "../../lib/axios";

const nasabahUrl = import.meta.env.VITE_NASABAH_URL;

export const useDeleteNasabah = () => {
    const deleteNasabah = async (nomorKtp) => {
        try {
            const response = await axiosInstance.delete(`${nasabahUrl}/${nomorKtp}`);
            return response.data;
        } catch (error) {
            const errorMessage = "Error Deleting Nasabah: " + error.message;
            console.error(errorMessage);
            throw new Error(errorMessage);
        }
    }

    return {
        deleteNasabah
    }
}