import { Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useFetchNasabah } from "../../features/nasabah/useFetchNasabah"
import { useEffect, useState } from "react"
import NasabahFormUpdate from "../FormUpdate"
import DeleteButton from "../DeleteButton"
import UpdateButton from "../FormUpdate"

const NasabahTable = () => {
    const { fetchNasabah } = useFetchNasabah()
    const [nasabahData, setNasabahData] = useState([])
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchNasabah()
          setNasabahData(data)
        } catch (error) {
          console.error("Error Fetching Nasabah", error)
        }
      }
      fetchData()
    }, [fetchNasabah])

  return (
    <TableContainer>
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
        {nasabahData.map((nasabah) => {
          return (
            <Tr key={nasabah.nomorKtp}>
              <Td>{nasabah.nomorKtp}</Td>
              <Td>{nasabah.namaLengkap}</Td>
              <Td>{nasabah.alamat}</Td>
              <Td>{nasabah.tempatLahir}</Td>
              <Td>{nasabah.tanggalLahir}</Td>
              <Td>{nasabah.nomorHandphone}</Td>
              <Td>
                <Flex gap={3}>
                  <UpdateButton nomorKtp={nasabah.nomorKtp} onUpdateSuccess={fetchNasabah} />
                  <DeleteButton nomorKtp={nasabah.nomorKtp} onDeleteSuccess={fetchNasabah} />
                </Flex>
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  </TableContainer>
  )
}

export default NasabahTable