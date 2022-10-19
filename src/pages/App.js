import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';

import theme from '../styles/theme';
// import SideBar from '../components/SideBar';
import Header from '../components/header';
import MainArea from '../components/MainArea';
import Scheduler from '../components/scheduler.jsx';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#E5E5E5" w="100%" h="100vh">
         {/* <Header /> */}
        { /* <SideBar /> 
        <MainArea /> */}
        <Scheduler/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
