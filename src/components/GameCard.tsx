import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Image } from "@chakra-ui/react";

function GameCard() {
  return (
    <Card>
      <CardBody>
        <Image src="https://cdn.wallpapersafari.com/5/64/bUKrna.jpeg"/>
        <Text>Great Power Comes With Great Reponsibility</Text>
      </CardBody>
    </Card>
  );
}

export default GameCard;
