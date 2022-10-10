import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'
import { useRouter } from 'next/router'

export default function MeetingClient() {
  const router = useRouter()

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
      <Heading color="gray.600">Queremos te conhecer melhor</Heading>
      <Divider mt={4} borderWidth={2} borderColor="pallete.yellow" />
      <Box as="form" onSubmit={handleSubmit(formSubmit)} w="100%" mt={8}>
        <VStack spacing={8} w="100%">
          <SimpleGrid minChildWidth="250px" spacing={['8', '2']} w="100%">
            <FormControl>
              <FormLabel id="plan" htmlFor="plan" color="gray.700">
                Você planeja
              </FormLabel>
              <Controller
                name="plan"
                control={control}
                defaultValue={0.0}
                render={({ field: controlledField }) => (
                  <RadioGroup
                    onChange={controlledField.onChange}
                    value={controlledField.value}
                  >
                    <Stack direction="column">
                      <Radio value="Investir em um novo negócio">
                        Investir em um novo negócio
                      </Radio>
                      <Radio value="Investir em meu negócio">
                        Investir em meu negócio
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'name' as const}
              />
            </FormControl>
            <FormControl>
              <FormLabel id="plan" htmlFor="plan" color="gray.700">
                O seu negócio é?
              </FormLabel>
              <Controller
                name="mobility-type"
                control={control}
                defaultValue={0.0}
                render={({ field: controlledField }) => (
                  <RadioGroup
                    onChange={controlledField.onChange}
                    value={controlledField.value}
                  >
                    <Stack direction="column">
                      <Radio value="Fixo">Fixo</Radio>
                      <Radio value="Ambulante">Ambulante</Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'name' as const}
              />
            </FormControl>
            <FormControl>
              <FormLabel id="plan" htmlFor="plan" color="gray.700">
                Você atua no seu negócio
              </FormLabel>
              <Controller
                name="acting"
                control={control}
                defaultValue={0.0}
                render={({ field: controlledField }) => (
                  <RadioGroup
                    onChange={controlledField.onChange}
                    value={controlledField.value}
                  >
                    <Stack direction="column">
                      <Radio value="Aos finais de semana">
                        Aos finais de semana
                      </Radio>
                      <Radio value="Durante toda a semana">
                        Durante toda a semana
                      </Radio>
                      <Radio value="Somente dias úteis">
                        Somente dias úteis
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'acting' as const}
              />
            </FormControl>
            <FormControl>
              <FormLabel id="plan" htmlFor="plan" color="gray.700">
                Como você obtém seu produto?
              </FormLabel>
              <Controller
                name="obtaining-product"
                control={control}
                defaultValue={0.0}
                render={({ field: controlledField }) => (
                  <RadioGroup
                    onChange={controlledField.onChange}
                    value={controlledField.value}
                  >
                    <Stack direction="column">
                      <Radio value="Através de um fornecedor">
                        Através de um fornecedor
                      </Radio>
                      <Radio value="Eu fabrico meu produto">
                        Eu fabrico meu produto
                      </Radio>
                    </Stack>
                  </RadioGroup>
                )}
              />
              <ErrorMessage
                as={<Text color="red" />}
                errors={errors}
                name={'obtaining-product' as const}
              />
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth="250px" spacing={['8', '16']} w="100%">
            <FormControl>
              <FormLabel id={'name'} htmlFor={'name'} color="gray.700">
                Quanto custa para você este produto?
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
                Por quanto você vende este produto?
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
            <FormControl>
              <FormLabel id={'cpf'} htmlFor={'cpf'} color="gray.700">
                Quantas unidades você vende por mês?
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
        </VStack>
        <Button
          w="100%"
          variant="solid-blue"
          mt={8}
          onClick={() => router.push('/home')}
        >
          Finalizar
        </Button>
      </Box>
    </Flex>
  )
}
