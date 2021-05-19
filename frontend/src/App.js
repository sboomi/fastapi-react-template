import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Todos />
    </ChakraProvider>
  );
}

export default App;
