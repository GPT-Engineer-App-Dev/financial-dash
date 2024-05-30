import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "World", href: "#" },
  { label: "Economy", href: "#" },
  { label: "Business", href: "#" },
  { label: "Tech", href: "#" },
  { label: "Markets", href: "#" },
];

const stories = [
  {
    image: "https://via.placeholder.com/800x400",
    headline: "Top Story 1",
  },
  {
    image: "https://via.placeholder.com/800x400",
    headline: "Top Story 2",
  },
  {
    image: "https://via.placeholder.com/800x400",
    headline: "Top Story 3",
  },
];

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        bg="brand.900"
        color="white"
        py={4}
        px={isMobile ? 4 : 10}
        justify="space-between"
        align="center"
      >
        <Heading size="lg">Financial Times</Heading>
        <HStack spacing={4} display={isMobile ? "none" : "flex"}>
          {navigationLinks.map((link) => (
            <Link key={link.label} href={link.href} color="white">
              {link.label}
            </Link>
          ))}
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        bgImage="https://via.placeholder.com/1600x600"
        bgSize="cover"
        bgPos="center"
        height="50vh"
        align="center"
        justify="center"
        color="white"
        textAlign="center"
        px={4}
      >
        <Heading size="2xl">Your Financial News Source</Heading>
      </Flex>

      {/* Top Stories */}
      <Container maxW="container.xl" py={8}>
        <Heading size="xl" mb={8}>
          Top Stories
        </Heading>
        <Flex direction={isMobile ? "column" : "row"} spacing={8} wrap="wrap">
          {stories.map((story, index) => (
            <Box key={index} maxW="md" mb={isMobile ? 8 : 0} flex="1">
              <Image src={story.image} alt={`Story ${index + 1}`} />
              <Text mt={4} fontWeight="bold" fontSize="xl">
                {story.headline}
              </Text>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
};

export default Index;
