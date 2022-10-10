import {
  Flex,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Heading,
  Divider
} from '@chakra-ui/react'
import { useLayout } from '../../hooks/useLayout'
import { FaEye } from 'react-icons/fa'

export function SupporterArea() {
  const { contentContainerWidth } = useLayout()

  return (
    <Flex direction="column">
      <Flex direction="column">
        <Heading>Fundos disponíveis para aporte</Heading>
        <Divider mt={4} borderWidth={2} borderColor="pallete.yellow" />
      </Flex>
      <TableContainer
        w={`${contentContainerWidth && contentContainerWidth - 50}px`}
      >
        <Table variant="striped" colorScheme="green">
          <Thead>
            <Tr>
              <Th>Solicitante</Th>
              <Th>Segmento</Th>
              <Th isNumeric>Valor</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Guilherme J. Floyd</Td>
              <Td>Vendedor Ambulante</Td>
              <Td isNumeric>800.00</Td>
              <Td>
                <Button variant="solid-yellow" leftIcon={<FaEye />}>
                  Ver
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  )
}
