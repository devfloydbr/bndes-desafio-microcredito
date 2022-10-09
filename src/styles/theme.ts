import { extendTheme } from '@chakra-ui/react'
import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4
    }
  },
  variants: {
    'outline-blue': {
      border: '2px solid',
      borderColor: 'default.500',
      color: 'default.500'
    },
    'solid-blue': {
      bg: 'pallete.blue1',
      color: 'white'
    },
    'solid-yellow': {
      bg: 'pallete.yellow',
      color: 'white'
    },
    cancel: {
      bg: 'company.base',
      color: 'white'
    },
    create: {
      bg: 'green.500',
      color: 'white'
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'solid'
  }
}

const Input: ComponentStyleConfig = {
  variants: {
    outline: {
      field: {
        border: '2px solid',
        borderColor: 'pallete.blue2',
        borderRadius: 'none',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        _focus: {
          borderColor: 'pallete.blue1',
          boxShadow: 'none'
        }
      }
    }
  }
}

export const theme = extendTheme({
  colors: {
    pallete: {
      blue1: '#576490',
      blue2: '#7796CB',
      blue3: '#A3BCF9',
      yellow: '#F3A712',
      red: '#E4572E'
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  components: {
    Button,
    Input
  }
})
