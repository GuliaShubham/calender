import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

let now = new Date();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Header = () => {
  return (
    <Box
      bg="#FFFFFF"
      position="absolute"
      h="60px"
      top="47px"
      left="20px"
      right="17px"
      borderRadius="5px"
      w="1329px"
    >
      <Flex>
        <Button fontSize="24px" position="relative" pl="21px" pt="16px">
          {months[now.getMonth()] + ' ' + now.getFullYear()}
        </Button>
        <Spacer />
        <Box pr="15px" pt="15px">
          <Button
            variant="navigation"
            p="11.23px"
            h="30px"
            w="27px"
            borderRadius="5px"
            mr="5px"
          >
            <BiChevronLeft />
          </Button>
          <Button
            variant="navigation"
            p="11.23px"
            h="30px"
            w="27px"
            borderRadius="5px"
          >
            <BiChevronRight />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
