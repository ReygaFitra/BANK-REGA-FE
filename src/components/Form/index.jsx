import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import { useCreateNasabah } from "../../features/nasabah/useCreateNasabah"


const NasabahForm = () => {
  const [nomorKtp, setNoKtp] = useState("")
  const [namaLengkap, setNamaLengkap] = useState("")
  const [alamat, setAlamat] = useState("")
  const [tempatLahir, setTempatLahir] = useState("")
  const [tanggalLahir, setTanggalLahir] = useState("")
  const [nomorHandphone, setNoHP] = useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {createNasabah} = useCreateNasabah()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createNasabah({
        nomorKtp,
        namaLengkap,
        alamat,
        tempatLahir,
        tanggalLahir,
        nomorHandphone})
      console.log("Nasabah berhasil dibuat")
      onClose()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
    <Button onClick={onOpen}>Input New Nasabah</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="4xl">
            <ModalHeader>Input Nasabah</ModalHeader>
            <ModalBody>
                <FormControl as="form" onSubmit={handleSubmit}>
                    <FormLabel>Nomor KTP</FormLabel>
                    <Input type='text' name="nomorKtp" value={nomorKtp} onChange={(e) => setNoKtp(e.target.value)} size="sm" rounded="sm" />
                    <FormLabel>Nama Lengkap</FormLabel>
                    <Input type='text' name="namaLengkap" value={namaLengkap} onChange={(e) => setNamaLengkap(e.target.value)} size="sm" rounded="sm" />
                    <FormLabel>Alamat</FormLabel>
                    <Input type='text' name="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} size="sm" rounded="sm" />
                    <FormLabel>Tempat Lahir</FormLabel>
                    <Input type='text' name="tempatLahir" value={tempatLahir} onChange={(e) => setTempatLahir(e.target.value)} size="sm" rounded="sm" />
                    <FormLabel>Tanggal Lahir</FormLabel>
                    <Input type='date' name="tanggalLahir" value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} size="sm" rounded="sm" />
                    <FormLabel>Nomor Handphone</FormLabel>
                    <Input type='text' name="nomorHandphone" value={nomorHandphone} onChange={(e) => setNoHP(e.target.value)} size="sm" rounded="sm" />
                    <Button type="submit" variant="outline" size="sm" my="10px">Submit</Button>
                 </FormControl>
            </ModalBody>
        </ModalContent>
    </Modal>
    
    </>
    
  )
}

export default NasabahForm