import { Button, HStack, Switch, useColorMode } from "@chakra-ui/react";

function Toggle() {
  let { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <HStack align="center" direction="row">
        <Switch colorScheme ="teal" isChecked={colorMode == "dark"} size="lg" onChange={toggleColorMode}>THEME</ Switch>
      </HStack>
    </header>
  );
}

export default Toggle;
