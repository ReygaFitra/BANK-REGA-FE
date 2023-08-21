import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { axiosInstance } from "../../lib/axios"
import { useUpdateNasabah } from "../../features/nasabah/useUpdateNasabah"

const UpdateButton = ({ nomorKtp, onUpdateSuccess }) => {
    const [namaLengkap, setNamaLengkap] = useState("")
    const [alamat, setAlamat] = useState("")
    const [tempatLahir, setTempatLahir] = useState("")
    const [tanggalLahir, setTanggalLahir] = useState("")
    const [nomorHandphone, setNoHP] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {updateNasabah} = useUpdateNasabah()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(`/nasabah/${nomorKtp}`)
                const data = response.data
                setNamaLengkap(data.namaLengkap)
                setAlamat(data.alamat)
                setTempatLahir(data.tempatLahir)
                setTanggalLahir(data.tanggalLahir)
                setNoHP(data.nomorHandphone)
            } catch (err) {
                console.error(err)
            }
        }

        fetchData()
    }, [nomorKtp])

    const handleUpdate = async () => {
        try {
            await updateNasabah( nomorKtp, {
                namaLengkap,
                alamat,
                tempatLahir,
                tanggalLahir,
                nomorHandphone,
            })
            console.log("Data terupdate")
            onClose()
            onUpdateSuccess()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Button onClick={onOpen} size="sm" rounded="sm" colorScheme="blue">Update</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update Nasabah</ModalHeader>
                    <ModalBody>
                        <form onSubmit={handleUpdate}>
                            <label htmlFor="namaLengkap">Nama Lengkap</label>
                            <Input
                                type="text"
                                id="namaLengkap"
                                value={namaLengkap}
                                onChange={(e) => setNamaLengkap(e.target.value)}
                                size="sm"
                                required
                            />
                            <label htmlFor="alamat">Alamat</label>
                            <Input
                                type="text"
                                id="alamat"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                                size="sm"
                                required
                            />
                            <label htmlFor="tempatLahir">Tempat Lahir</label>
                            <Input
                                type="text"
                                id="tempatLahir"
                                value={tempatLahir}
                                onChange={(e) => setTempatLahir(e.target.value)}
                                size="sm"
                                required
                            />
                            <label htmlFor="tanggalLahir">Tanggal Lahir</label>
                            <Input
                                type="date"
                                id="tanggalLahir"
                                value={tanggalLahir}
                                onChange={(e) => setTanggalLahir(e.target.value)}
                                size="sm"
                                required
                            />
                            <label htmlFor="nomorHandphone">Nomor Handphone</label>
                            <Input
                                type="text"
                                id="nomorHandphone"
                                value={nomorHandphone}
                                onChange={(e) => setNoHP(e.target.value)}
                                size="sm"
                                required
                            />
                            <Button type="submit" variant="outline" size="sm" mt="2">
                                Update
                            </Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UpdateButton