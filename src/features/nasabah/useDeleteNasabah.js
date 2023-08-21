import { axiosInstance } from "../../lib/axios";

export const useDeleteNasabah = () => {
    const deleteNasabah = async (nomorKtp) => {
        try {
            const response = await axiosInstance.delete(`/nasabah/${nomorKtp}`);
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