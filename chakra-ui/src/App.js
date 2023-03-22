import './App.css';
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'

function App() {
  return (
    <>
      <Box bg='tomato' w='100%' p={4} color='white'>
        This is the Box
      </Box>
      <Center bg='tomato' h='100px' color='white'>
        This is the Center
      </Center>
    </>
  );
}

export default App;
