import {
  Button,
  Flex,
  Heading,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import { useRef } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function ReadSolicitation() {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [80, 20],
        backgroundColor: ['#48BB78', 'transparent'],
        borderColor: ['#48BB78', 'transparent'],
        borderWidth: 1
      }
    ]
  }

  return (
    <Flex h="100vh">
      <Flex w="60%" px={8}>
        <Flex direction="column" w="100%">
          <Flex justify="space-between" align="center">
            <Flex direction="column" align="center">
              <Flex mt={8}>
                <Doughnut data={data} />
              </Flex>
              <Heading color="green.600" mt={4}>
                SCORE: 80
              </Heading>
            </Flex>
            <Flex direction="column">
              <Heading size="md">Crédito Liberado:</Heading>
              <Text color="green.600" fontWeight="bold">
                R$ 7.000,00
              </Text>
            </Flex>
          </Flex>
          <Flex w="100%" justify="space-between" mt={8}>
            <Heading size="md">Fundo Garantidor Disponível:</Heading>
            <Text color="green.600" fontWeight="bold">
              + R$ 3.000,00
            </Text>
          </Flex>
          <Flex w="100%" justify="space-between">
            <Heading size="sm">ACME LTDA:</Heading>
            <Text color="green.400">+ R$ 3.000,00</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w="40%"
        ref={contentContainerRef}
        align="center"
        bg="pallete.yellow"
        direction="column"
        py={4}
      >
        <Heading color="gray.600">Lista de Oportunidades</Heading>
        <TableContainer
          w={`${
            contentContainerRef.current?.offsetWidth &&
            contentContainerRef.current?.offsetWidth - 50
          }px`}
          mt={6}
        >
          <Table variant="striped" colorScheme="white">
            <Thead>
              <Tr>
                <Th>Operadora</Th>
                <Th isNumeric>Juros (%)</Th>
                <Th isNumeric>Parcelas</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Banco X</Td>
                <Td isNumeric>4</Td>
                <Td isNumeric>12</Td>
                <Td>
                  <IconButton
                    colorScheme="green"
                    aria-label=""
                    icon={<FaCheck />}
                  ></IconButton>
                </Td>
              </Tr>
              <Tr>
                <Td>Banco Y</Td>
                <Td isNumeric>3.5</Td>
                <Td isNumeric>10</Td>
                <Td>
                  <IconButton
                    colorScheme="green"
                    aria-label=""
                    icon={<FaCheck />}
                  ></IconButton>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  )
}
