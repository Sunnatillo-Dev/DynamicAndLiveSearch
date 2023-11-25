import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";

function HomePage() {
  let [data, setData] = useState([]);
  let [inputValue, setInputValue] = useState("");
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products));
  }, []);
  return (
    <Container pt={"50px"} maxW={"container.xl"}>
      <Flex
        maxW={"1280px"}
        top={0}
        position={"fixed"}
        padding={"20px"}
        width={"100%"}
        background={"white"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading fontSize={"30px"}>Logo</Heading>
        <Flex gap={"20px"} alignItems={"center"}>
          <Text>Home</Text>
          <Text>Contact</Text>
          <Text>About</Text>
        </Flex>
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={"search..."}
          width={"300px"}
          type={"text"}
        />
        <Button colorScheme={"teal"}>Login</Button>
      </Flex>
      <Grid mt={"30px"} gap={"20px"} templateColumns={"repeat(4,1fr)"}>
        {data
          .filter((item) => {
            return item.title.toLowerCase().includes(inputValue.toLowerCase());
          })
          .map((item) => {
            return (
              <GridItem border={"1px solid gray"} p={"20px"} key={item.id}>
                <Link href={`/product/${item.id}`}>
                  <Image
                    height={"300px"}
                    objectFit={"cover"}
                    src={item.thumbnail}
                  />
                </Link>
                <Text>{item.title}</Text>
              </GridItem>
            );
          })}
      </Grid>
    </Container>
  );
}

export default HomePage;
