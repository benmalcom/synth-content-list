import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import React from 'react';

import { ContentListPage } from 'pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex h="100vh" w="full">
        <ContentListPage />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
