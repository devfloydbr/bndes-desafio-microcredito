import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'

export default function Register() {
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
    <Flex flex={1} p={8} direction="column">
      <Heading color="gray.600">Cadastro</Heading>
      <Divider mt={4} borderWidth={2} borderColor="pallete.yellow" />
      <Box as="form" onSubmit={handleSubmit(formSubmit)} w="100%" mt={8}>
        <VStack spacing={8} w="100%">
          <SimpleGrid minChildWidth="100%" spacing={['8', '2']} w="100%">
            <FormControl>
              <FormLabel id={'name'} htmlFor={'name'} color="gray.700">
                Nome Completo
              </FormLabel>
              <Input
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
          </SimpleGrid>
          <SimpleGrid minChildWidth="250px" spacing={['8', '16']} w="100%">
            <FormControl>
              <FormLabel id={'name'} htmlFor={'name'} color="gray.700">
                Data de Nascimento
              </FormLabel>
              <Input
                id="birth_date"
                {...register('birth_date' as const)}
                borderColor={errors.birth_date?.message && 'red'}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'birth_date' as const}
              />
            </FormControl>
            <FormControl>
              <FormLabel id={'cpf'} htmlFor={'cpf'} color="gray.700">
                CPF
              </FormLabel>
              <Input
                id="cpf"
                {...register('cpf' as const)}
                borderColor={errors.cpf?.message && 'red'}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'cpf' as const}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth="250px" spacing={['8', '16']} w="100%">
            <FormControl>
              <FormLabel
                id={'telephone'}
                htmlFor={'telephone'}
                color="gray.700"
              >
                Telefone
              </FormLabel>
              <Input
                id="telephone"
                {...register('telephone' as const)}
                borderColor={errors.telephone?.message && 'red'}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'telephone' as const}
              />
            </FormControl>
            <FormControl>
              <FormLabel id={'email'} htmlFor={'email'} color="gray.700">
                Email
              </FormLabel>
              <Input
                id="email"
                {...register('email' as const)}
                borderColor={errors.email?.message && 'red'}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'email' as const}
              />
            </FormControl>
            <FormControl>
              <FormLabel id={'cep'} htmlFor={'cep'} color="gray.700">
                CEP
              </FormLabel>
              <Input
                id="cep"
                {...register('cep' as const)}
                borderColor={errors.cep?.message && 'red'}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'cep' as const}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth="250px" spacing={['8', '16']} w="100%">
            <FormControl>
              <FormLabel id={'password'} htmlFor={'password'} color="gray.700">
                Senha
              </FormLabel>
              <Input
                id="password"
                {...register('password' as const)}
                borderColor={errors.password?.message && 'red'}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'password' as const}
              />
            </FormControl>
            <FormControl>
              <FormLabel
                id={'confirm_password'}
                htmlFor={'confirm_password'}
                color="gray.700"
              >
                Confirmar Senha
              </FormLabel>
              <Input
                id="confirm_password"
                {...register('confirm_password' as const)}
                borderColor={errors.confirm_password?.message && 'red'}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'confirm_password' as const}
              />
            </FormControl>
          </SimpleGrid>
        </VStack>
        <Button w="100%" variant="solid-blue" mt={8}>
          PROSSEGUIR
        </Button>
      </Box>
    </Flex>
  )
}
