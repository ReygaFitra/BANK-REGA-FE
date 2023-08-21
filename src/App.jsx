import { Flex, HStack } from "@chakra-ui/react"
import NasabahTable from "./components/NasabahTable"
import NasabahForm from "./components/Form"
import GetNasabahButton from "./components/SearchInput"


function App() {

  return (
    <Flex justifyContent="center" flexDir="column" minHeight="100vh" minWidth="full" p="25px" bg="white">
      <HStack justifyContent="space-between">
        <NasabahForm />
        <GetNasabahButton />
      </HStack>
      <NasabahTable />
    </Flex>
  )
}

export default App
