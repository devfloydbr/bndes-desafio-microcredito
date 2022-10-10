import { Box, Button, Flex, Image, VStack } from '@chakra-ui/react'

import { useEffect, useRef, useState } from 'react'

import { Dashboard } from '../components/Dashboard'
import { SupporterArea } from '../components/SupporterArea'
import { UserArea } from '../components/UserArea'
import { useLayout } from '../hooks/useLayout'
import { useWindowResize } from '../hooks/useWindowResize'

export default function Home() {
  const [homeMode, setHomeMode] = useState<'user' | 'supporter' | 'dashboard'>(
    'dashboard'
  )

  const contentContainerRef = useRef<HTMLDivElement>(null)

  const { setContentContainerWidth } = useLayout()

  const { width } = useWindowResize()

  useEffect(() => {
    if (contentContainerRef.current) {
      setContentContainerWidth(contentContainerRef.current.offsetWidth)
    }
  }, [contentContainerRef, width, setContentContainerWidth])

  return (
    <Flex>
      <Flex
        w="30%"
        h="100vh"
        bg="blue.50"
        align="center"
        pt={4}
        direction="column"
      >
        <Image src="/images/logo.png" alt="" />
        <Box px={8} mt={8}>
          <VStack align="flex-start">
            <Button
              variant="solid-yellow"
              w="100%"
              onClick={() => setHomeMode('dashboard')}
            >
              Dashboard
            </Button>
            <Button
              variant="solid-yellow"
              w="100%"
              onClick={() => setHomeMode('user')}
            >
              Área do Usuário
            </Button>
            <Button
              variant="solid-yellow"
              w="100%"
              onClick={() => setHomeMode('supporter')}
            >
              Área do Apoiador
            </Button>
          </VStack>
        </Box>
      </Flex>
      <Flex w="70%" p={8} direction="column" ref={contentContainerRef}>
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
