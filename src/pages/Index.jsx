import { Box, Flex, Text, VStack, Input, Button, Heading, useBreakpointValue } from '@chakra-ui/react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Flex as="nav" bg="gray.100" p={4} justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">My Portfolio</Text>
        <Box>
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Contact</Button>
        </Box>
      </Flex>
      <Flex direction="column" align="center" justify="center" minHeight="70vh" bg="blue.100" p={10}>
        <Heading as="h1" size="2xl" mb={2}>Welcome!</Heading>
        <Text fontSize="xl">Discover My World of Development</Text>
      </Flex>
      <VStack spacing={8} p={10} bg="gray.50">
        <Heading as="h2" size="xl">About Me</Heading>
        <Text fontSize="lg">I'm a passionate developer with a knack for building beautiful and functional web applications. My journey in tech started over a decade ago, and I've been loving every minute of it!</Text>
      </VStack>
      <Box as="footer" bg="blue.200" p={10}>
        <VStack spacing={5}>
          <Heading as="h3" size="lg">Contact Me</Heading>
          <Flex as="form" direction={isMobile ? 'column' : 'row'} gap={2}>
            <Input placeholder="Your Name" leftIcon={<FaUser />} />
            <Input placeholder="Email Address" type="email" leftIcon={<FaEnvelope />} />
            <Input placeholder="Phone Number" type="tel" leftIcon={<FaPhone />} />
            <Button colorScheme="blue" px={8}>Send</Button>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default Index;