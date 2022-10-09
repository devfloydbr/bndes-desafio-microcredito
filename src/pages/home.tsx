import { Box, Button, Flex, Heading, VStack } from '@chakra-ui/react'

import { useState } from 'react'

import { Dashboard } from '../components/Dashboard'
import { SupporterArea } from '../components/SupporterArea'
import { UserArea } from '../components/UserArea'

export default function Home() {
  const [homeMode, setHomeMode] = useState<'user' | 'supporter' | 'dashboard'>(
    'user'
  )

  return (
    <Flex height="100vh">
      <Flex w="30%" bg="pallete.blue2" align="center" pt={4} direction="column">
        <Heading color="white">
          {homeMode === 'dashboard'
            ? 'DASHBOARD'
            : homeMode === 'user'
            ? 'ÁREA DO USUÁRIO'
            : 'ÁREA DO APOIADOR'}
        </Heading>
        <Box px={8} mt={8}>
          <VStack align="flex-start">
            <Button w="100%" onClick={() => setHomeMode('dashboard')}>
              Dashboard
            </Button>
            <Button w="100%" onClick={() => setHomeMode('user')}>
              Área do Usuário
            </Button>
            <Button w="100%" onClick={() => setHomeMode('supporter')}>
              Área do Apoiador
            </Button>
          </VStack>
        </Box>
        {/* <Flex color="white" mt={4} h="100%" align="flex-end" pb={4}>
          <VStack>
            <Text as="u" cursor="pointer">
              Gostaria de melhorar o seu negócio?
            </Text>
            <Text as="u" cursor="pointer">
              Como conseguir maiores valores de microcrédito?
            </Text>
            <Text as="u" cursor="pointer">
              Aconselhamento financeiro
            </Text>
          </VStack>
        </Flex> */}
      </Flex>
      <Flex w="70%" p={8} direction="column">
        {homeMode === 'dashboard' ? (
          <Dashboard />
        ) : homeMode === 'user' ? (
          <UserArea />
        ) : (
          <SupporterArea />
        )}
      </Flex>
    </Flex>
  )
}
