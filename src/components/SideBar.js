// import { BiChevronRight } from 'react-icons/bi';
import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { Box, VStack } from '@chakra-ui/react';

// import { AddIcon } from '@chakra-ui/icons';

function SideBar() {
  return (
    <VStack
      spacing={1}
      align="inherit"
      padding="6px"
      w="120px"
      flex="1"
      bg="white"
      position="absolute"
      width={'112px'}
      height={'609px'}
      left={'20px'}
      top={'112px'}
      borderRadius={'4px'}
    >
      <Box
        h="60px"
        w="100px"
        borderRadius="5px"
        bg="#F4F4F4"
        left="20px"
        padding={'25px'}
        paddingLeft={'40px'}
      >
        <FiCalendar margin="10px" />
      </Box>
      <Box
        // margin={'px'}
        h="73px"
        w="100px"
        borderRadius="5px"
        bg="#F4F4F4"
        textAlign={'center'}
        paddingTop="20px"
        paddingBottom={'10px'}
      >
        Day Date
      </Box>
      <Box
        // margin={'2px'}
        h="73px"
        w="100px"
        borderRadius="5px"
        bg="#F4F4F4"
        textAlign={'center'}
        paddingTop="20px"
        paddingBottom={'10px'}
      >
        Day Date
      </Box>
      <Box
        margin={'2px'}
        h="73px"
        w="100px"
        borderRadius="5px"
        bg="#F4F4F4"
        textAlign={'center'}
        paddingTop="20px"
        paddingBottom={'10px'}
      >
        Day Date
      </Box>
      <Box
        margin={'2px'}
        h="73px"
        w="100px"
        borderRadius="5px"
        bg="#F4F4F4"
        textAlign={'center'}
        paddingTop="20px"
        paddingBottom={'10px'}
      >
        Day Date
      </Box>
      <Box
        margin={'2px'}
        h="73px"
        w="100px"
        borderRadius="5px"
        bg="#F4F4F4"
        textAlign={'center'}
        paddingTop="20px"
        paddingBottom={'10px'}
      >
        Day Date
      </Box>
      <Box
        margin={'2px'}
        h="73px"
        w="100px"
        borderRadius="5px"
        bg="#F4F4F4"
        textAlign={'center'}
        paddingTop="20px"
        paddingBottom={'10px'}
      >
        Day Date
      </Box>
      <Box
        margin={'2px'}
        h="73px"
        w="100px"
        borderRadius="5px"
        bg="#F4F4F4"
        textAlign={'center'}
        paddingTop="20px"
        paddingBottom={'10px'}
      >
        Day Date
      </Box>
    </VStack>
  );
}

export default SideBar;
