import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import { useDeleteNasabah } from "../../features/nasabah/useDeleteNasabah"

const DeleteButton = ({ nomorKtp, onDeleteSuccess }) => {
    const {deleteNasabah} = useDeleteNasabah()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleDelete = async () => {
        try {
        await deleteNasabah(nomorKtp)
        console.log("Data terhapus")
        onClose()
        onDeleteSuccess()
        } catch (err) {
        console.error(err)
        }
     }

  return (
    <>
      <Button onClick={onOpen} size="sm" rounded="sm" colorScheme="red">Delete</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this record?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DeleteButton