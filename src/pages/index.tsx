import { Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <Flex h="100vh">
      <Flex
        bg="pallete.blue3"
        w="50%"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Image boxSize="500px" src="/images/login-image.png" alt="Welcome" />
      </Flex>
      <Flex
        w="50%"
        direction="column"
        justify="center"
        align="center"
        px={8}
        py={10}
      >
        <Image boxSize="350px" src="/images/logo.png" alt="Welcome" />
        <Flex flex={1} align="center" pb={8} px={8}>
          <Heading fontWeight="extrabold" size="lg">
            ACREDITA é uma plataforma que conecta o ecossistema financeiro para
            ajudar o microempreendedor a ter acesso ágil ao microcredito para
            evoluir o seu negócio.
          </Heading>
        </Flex>
        <VStack align="center" justify="center" direction="column" w="100%">
          <Button
            w="100%"
            variant="solid-yellow"
            onClick={() => router.push('register')}
          >
            Iniciar Cadastro
          </Button>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default Home
