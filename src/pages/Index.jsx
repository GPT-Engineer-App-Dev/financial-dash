import { Box, Container, Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container
      maxW="container.xl"
      p={0}
      display="flex"
      flexDirection="column"
      minH="100vh"
    >
      {/* Navigation Bar */}
      <Box as="nav" w="100%" p={4} bg="brand.800" color="white">
        <HStack spacing={8} justify="center">
          <Link to="/">Home</Link>
          <Link to="/world">World</Link>
          <Link to="/economy">Economy</Link>
          <Link to="/business">Business</Link>
          <Link to="/tech">Tech</Link>
          <Link to="/markets">Markets</Link>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Flex
        bg="gray.200"
        w="100%"
        align="center"
        justify="center"
        p={[4, 8]}
        textAlign="center"
        flex="1"
      >
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Financial News
          </Heading>
          <Text fontSize="xl">
            Bringing you the latest updates from around the world, business,
            technology, markets, and more.
          </Text>
        </Box>
      </Flex>

      {/* Highlight Sections */}
      <VStack spacing={8} p={[4, 8]} bg="white">
        <Box w="100%" textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Top Stories
          </Heading>
        </Box>
        <Flex wrap="wrap" justify="space-around">
          <Box bg="gray.100" w={["100%", "45%"]} p={4} m={[2]} borderRadius="md">
            <Image borderRadius="md" src="https://via.placeholder.com/600x400" mb={4} />
            <Heading as="h3" size="md">
              Story Headline 1
            </Heading>
            <Text>Summary of the story goes here...</Text>
          </Box>
          <Box bg="gray.100" w={["100%", "45%"]} p={4} m={[2]} borderRadius="md">
            <Image borderRadius="md" src="https://via.placeholder.com/600x400" mb={4} />
            <Heading as="h3" size="md">
              Story Headline 2
            </Heading>
            <Text>Summary of the story goes here...</Text>
          </Box>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;