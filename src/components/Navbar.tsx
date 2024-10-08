import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="3.75rem" />
      <Text>Navbar</Text>
    </HStack>
  );
};
export default Navbar;
