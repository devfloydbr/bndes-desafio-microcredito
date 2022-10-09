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
  NumberDecrementStepper
} from '@chakra-ui/react'
import { ErrorMessage } from '@hookform/error-message'
import { yupResolver } from '@hookform/resolvers/yup'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { useForm } from 'react-hook-form'
import { FaPlus } from 'react-icons/fa'
import * as yup from 'yup'

export function UserArea() {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      <Modal isOpen={isOpen} onClose={onClose}>
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
            <Button variant="cancel" mr={3} onClick={onClose} w="100%">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex h="100%">
        <Flex w="70%" align="center" direction="column">
          <Flex w="100%">
            <Button colorScheme="green" leftIcon={<FaPlus />} onClick={onOpen}>
              Solicitar Microcrédito
            </Button>
          </Flex>
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
