import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";


export default function Dashboard() {

  const tasks =useLoaderData()
  return (
    <SimpleGrid minChildWidth="300px" spacing='10px'>
      {tasks && tasks.map(task => (
        <Card key={task.id} bg='white' borderTop='8px' borderColor='purple.400'>
          <CardHeader>
            <Flex gap='5'>
              <Box w="50px" h="50px">
                <Avatar src={task.img} />
              </Box>
              <Box>
                <Heading as="h3" size="sm">{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>
          <CardBody color='gray.500'>
          <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor='gray.200' />

          <CardFooter>
            <HStack spacing={5}>
              <Button variant='ghost' leftIcon={<ViewIcon />}>Watch</Button>
              <Button variant='ghost' leftIcon={<EditIcon />}>Comment</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>

  )
}

  export const tasksLoader = async () =>  {
    const res = await fetch ('http://localhost:3000/tasks')

    return res.json()
  }
