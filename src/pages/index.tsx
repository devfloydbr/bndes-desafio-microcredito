import { Button, Flex, Image, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
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
      <Flex w="50%" direction="column" justifyContent="center" px={8} py={10}>
        <Flex flex={1} align="center" pb={8}>
          <Text>
            Mussum Ipsum, cacilds vidis litro abertis. Todo mundo vê os porris
            que eu tomo, mas ninguém vê os tombis que eu levo!Viva Forevis
            aptent taciti sociosqu ad litora torquent.Quem num gosta di mim que
            vai caçá sua turmis!Posuere libero varius. Nullam a nisl ut ante
            blandit hendrerit. Aenean sit amet nisi. Leite de capivaris, leite
            de mula manquis sem cabeça.Aenean aliquam molestie leo, vitae
            iaculis nisl.Quem manda na minha terra sou euzis!Si num tem leite
            então bota uma pinga aí cumpadi! Nec orci ornare consequat. Praesent
            lacinia ultrices consectetur. Sed non ipsum felis.Aenean aliquam
            molestie leo, vitae iaculis nisl.Praesent vel viverra nisi. Mauris
            aliquet nunc non turpis scelerisque, eget.Suco de cevadiss deixa as
            pessoas mais interessantis.
          </Text>
        </Flex>
        <VStack align="center" justify="center" direction="column">
          <Button w="100%" variant="solid-blue">
            Login
          </Button>
          <Button w="100%" variant="solid-yellow">
            Iniciar Cadastro
          </Button>
        </VStack>
      </Flex>
    </Flex>
  )
}

export default Home
