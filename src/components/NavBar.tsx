import {HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/nintendo logo.png";
import Toggle from "../Toggle";

function NavBar() {
  return (
    <>
      <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize={"60px"}></Image>
        <Text>Solo Store</Text>
        <Toggle></Toggle>
      </HStack>
    </>
  );
}
export default NavBar;
