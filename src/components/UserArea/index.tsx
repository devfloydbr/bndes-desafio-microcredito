import { Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

export function UserArea() {
  const data = {
    labels: ['Score'],
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
    <Flex h="100%">
      <Flex w="70%" justify="center" align="center" direction="column">
        <VStack align="flex-start">
          <Heading>Guilherme J. Floyd</Heading>
          <Text>Vendedor Ambulante</Text>
        </VStack>
        <Flex mt={8}>
          <Doughnut data={data} />
        </Flex>
        <Heading color="green.600" mt={4}>
          80
        </Heading>
      </Flex>
      <Flex w="30%" h="100%" bg="pallete.yellow" justify="center" py={6}>
        <Heading color="white">CONTRATOS</Heading>
      </Flex>
    </Flex>
  )
}
