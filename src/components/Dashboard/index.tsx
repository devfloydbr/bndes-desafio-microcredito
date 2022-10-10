import { Box, Flex, HStack } from '@chakra-ui/react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
}

export function Dashboard() {
  const [dashboardMode, setDashboardMode] = useState<'personal' | 'company'>(
    'company'
  )

  return (
    <Flex direction="column">
      <Flex justify="center">
        <HStack>
          <Box
            px={6}
            py={4}
            bg="green.400"
            onClick={() => setDashboardMode('company')}
            cursor="pointer"
            _hover={{
              background: 'green.500'
            }}
            transition="linear 0.2s"
            borderRadius={4}
          >
            NEGÓCIO
          </Box>
          <Box
            px={6}
            py={4}
            bg="blue.400"
            onClick={() => setDashboardMode('personal')}
            cursor="pointer"
            _hover={{
              background: 'blue.500'
            }}
            transition="linear 0.2s"
            borderRadius={4}
          >
            PESSOA
          </Box>
        </HStack>
      </Flex>
      <Flex align="center" h="100%" mt={8}>
        <Flex w="50%">
          <Doughnut data={data} />
        </Flex>
        <Flex w="50%">
          <Doughnut data={data} />
        </Flex>
      </Flex>
    </Flex>
  )
}
