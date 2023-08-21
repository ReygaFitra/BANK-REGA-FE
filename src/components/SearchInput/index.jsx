import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Table, TableCaption, Thead, Tbody, Tr, Th, Td, Flex } from "@chakra-ui/react"
import { useState } from "react"
import UpdateButton from "../FormUpdate"
import DeleteButton from "../DeleteButton"
import { useFetchByKtpNasabah } from "../../features/nasabah/useFetchByKtpNasabah"

const GetNasabahButton = () => {
    const [nomorKtp, setNomorKtp] = useState("")
    const [nasabahData, setNasabahData] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { fetchByKtpNasabah } = useFetchByKtpNasabah()

    const resetNasabahData = () => {
        setNasabahData([])
    };

    const fetchNasabahByKtp = async () => {
        try {
            if (nomorKtp) {
                const data = await fetchByKtpNasabah(nomorKtp)
                setNasabahData([data])
            }
        } catch (err) {
            console.error(err)
            setNasabahData([])
        }
    };

    return (
        <>
            <Button onClick={onOpen} size="sm" rounded="sm" colorScheme="blue">
                Search Nasabah
            </Button>
            <Modal isOpen={isOpen} onClose={() => { onClose(); resetNasabahData(); }}>
                <ModalOverlay />
                <ModalContent maxW="6xl">
                    <ModalHeader>Search by KTP</ModalHeader>
                    <ModalBody>
                        <label htmlFor="nomorKtp">Nomor KTP</label>
                        <Input
                            type="text"
                            id="nomorKtp"
                            value={nomorKtp}
                            onChange={(e) => setNomorKtp(e.target.value)}
                            size="sm"
                            required
                        />
                        <Flex gap={3}>
                            <Button onClick={() => { fetchNasabahByKtp(); onOpen(); }} variant="outline" size="sm" mt="2" colorScheme="blue">
                                Search
                            </Button>
                            <Button onClick={() => { setNomorKtp(""); resetNasabahData(); }} variant="outline" size="sm" mt="2" colorScheme="red">
                                Clear
                            </Button>
                        </Flex>

                        <Table variant='simple'>
                            <TableCaption>Data Nasabah</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>No.KTP</Th>
                                    <Th>Nama Lengkap</Th>
                                    <Th>Alamat</Th>
                                    <Th>Tempat Lahir</Th>
                                    <Th>Tanggal Lahir</Th>
                                    <Th>Nomor HP</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {nasabahData.map((nasabah) => (
                                    <Tr key={nasabah.nomorKtp}>
                                        <Td>{nasabah.nomorKtp}</Td>
                                        <Td>{nasabah.namaLengkap}</Td>
                                        <Td>{nasabah.alamat}</Td>
                                        <Td>{nasabah.tempatLahir}</Td>
                                        <Td>{nasabah.tanggalLahir}</Td>
                                        <Td>{nasabah.nomorHandphone}</Td>
                                        <Td>
                                            <Flex gap={3}>
                                                <UpdateButton nomorKtp={nasabah.nomorKtp} onUpdateSuccess={fetchNasabahByKtp} />
                                                <DeleteButton nomorKtp={nasabah.nomorKtp} onDeleteSuccess={fetchNasabahByKtp} />
                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GetNasabahButton
