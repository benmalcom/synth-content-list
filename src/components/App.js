import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ContentListPage } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Flex h="100vh" w="full">
          <Routes>
            <Route path="/contents" element={<ContentListPage />} />
            <Route path="*" element={<Navigate to="/contents" replace />} />
          </Routes>
        </Flex>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
