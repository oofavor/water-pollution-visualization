import { ChakraProvider } from '@chakra-ui/react';
import { YMaps } from '@pbe/react-yandex-maps';
import { Main } from './Page';

function App() {
  return (
    <ChakraProvider>
      <YMaps>
        <Main />
      </YMaps>
    </ChakraProvider>
  );
}

export default App;
