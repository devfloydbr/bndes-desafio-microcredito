import {
  Box,
  Button,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Text,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  SimpleGrid,
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  HStack
} from '@chakra-ui/react'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import * as yup from 'yup'
import { FaEye } from 'react-icons/fa'
import { useRef } from 'react'
import { useRouter } from 'next/router'

ChartJS.register(ArcElement, Tooltip, Legend)

export function UserArea() {
  const router = useRouter()

  const {
    isOpen: modalRequestMicrocredit,
    onOpen: onOpenRequestMicrocredit,
    onClose: onCloseRequestMicrocredit
  } = useDisclosure()

  const {
    isOpen: modalListMicrocredit,
    onOpen: onOpenListMicrocredit,
    onClose: onCloseListMicrocredit
  } = useDisclosure()

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

  const validation = yup.object().shape({})

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(validation)
  })

  async function formSubmit() {}

  return (
    <>
      <Modal
        isOpen={modalRequestMicrocredit}
        onClose={onCloseRequestMicrocredit}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Solicitação de Microcrédito</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box as="form" onSubmit={handleSubmit(formSubmit)} w="100%" mt={8}>
              <VStack spacing={8} w="100%">
                <SimpleGrid minChildWidth="100%" spacing={['8', '2']} w="100%">
                  <FormControl>
                    <FormLabel id={'name'} htmlFor={'name'} color="gray.700">
                      Para que você precisa de dinheiro?
                    </FormLabel>
                    <Textarea
                      id="name"
                      {...register('name' as const)}
                      borderColor={errors.name?.message && 'red'}
                    />
                    <ErrorMessage
                      as={<Text color="red" />}
                      errors={errors}
                      name={'name' as const}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel id={'name'} htmlFor={'name'} color="gray.700">
                      Qual valor você gostaria de contratar ?
                    </FormLabel>
                    <NumberInput>
                      <NumberInputField />
                    </NumberInput>
                    <ErrorMessage
                      as={<Text color="red" />}
                      errors={errors}
                      name={'birth_date' as const}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel id={'name'} htmlFor={'name'} color="gray.700">
                      Em quantos meses você pretende devolver o crédito ?
                    </FormLabel>
                    <NumberInput>
                      <NumberInputField />
                    </NumberInput>
                    <ErrorMessage
                      as={<Text color="red" />}
                      errors={errors}
                      name={'birth_date' as const}
                    />
                  </FormControl>
                </SimpleGrid>
              </VStack>
              <Button w="100%" variant="solid-blue" mt={8}>
                PROSSEGUIR
              </Button>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="cancel"
              mr={3}
              onClick={onCloseRequestMicrocredit}
              w="100%"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={modalListMicrocredit}
        onClose={onCloseListMicrocredit}
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Solicitação de Microcrédito</ModalHeader>
          <ModalCloseButton />
          <ModalBody ref={contentContainerRef} w="100%">
            <TableContainer
              w={`${
                contentContainerRef.current?.offsetWidth &&
                contentContainerRef.current?.offsetWidth - 50
              }px`}
            >
              <Table variant="striped" colorScheme="green">
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th isNumeric>Valor</Th>
                    <Th isNumeric>Fundo</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>0001</Td>
                    <Td isNumeric>800.00</Td>
                    <Td isNumeric>00.00</Td>
                    <Td>
                      <Button
                        variant="solid-yellow"
                        leftIcon={<FaEye />}
                        onClick={() => router.push('/solicitations/1')}
                      >
                        Ver
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="cancel"
              mr={3}
              onClick={onCloseListMicrocredit}
              w="100%"
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex h="100%">
        <Flex w="70%" align="center" direction="column">
          <HStack w="100%">
            <Button
              colorScheme="green"
              leftIcon={<FaPlus />}
              onClick={onOpenRequestMicrocredit}
            >
              Solicitar Microcrédito
            </Button>
            <Button
              colorScheme="yellow"
              leftIcon={<FaEye />}
              onClick={onOpenListMicrocredit}
            >
              Minhas Solicitações
            </Button>
          </HStack>
          <VStack align="flex-start" mt={4}>
            <Heading>Guilherme J. Floyd</Heading>
            <Text>Vendedor Ambulante</Text>
          </VStack>
          <Flex mt={8}>
            <Doughnut data={data} />
          </Flex>
          <Heading color="green.600" mt={4}>
            SCORE: 80
          </Heading>
        </Flex>
        <Flex
          w="30%"
          h="100%"
          bg="pallete.yellow"
          align="center"
          py={6}
          px={6}
          direction="column"
          borderRadius={6}
        >
          <Heading color="gray.700">CONTRATOS</Heading>
          <Flex w="100%" direction="column" mt={2}>
            <Flex direction="column" borderRadius={4} cursor="pointer ">
              <Box
                bg="pallete.blue2"
                borderTopLeftRadius={4}
                borderTopRightRadius={4}
                p={2}
              >
                <Text>Operadora 1</Text>
              </Box>
              <Box
                bg="white"
                borderBottomLeftRadius={4}
                borderBottomRightRadius={4}
                p={2}
              >
                R$ 800,00
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
