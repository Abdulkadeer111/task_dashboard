import { UnlockIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, useToast, Heading, HStack, Spacer, Text, Avatar, AvatarBadge } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  const toast = useToast()
  const showToast = () => {
    toast({
      title: "Logged out",
      description: "successfully logged out",
      duration: 3000,
      isClosable: true,
      position: 'top',
      colorScheme:'purple',
      status: "success",
      icon: <UnlockIcon />
    })
  }
  return (
    <Flex as="nav" p='10px' mb='40px' alignItems='center'>
        <Heading as="h1">Task App</Heading>
        <Spacer/>

        <HStack spacing='10px'>
            <Avatar name="abdul" src="/img/mario.png">
              <AvatarBadge width='1.3em' bg="teal.500">
                <Text fontSize="xs" color='white' >4</Text>
              </AvatarBadge>
            </Avatar>
            <Text>abdul@codewithjameel.dev</Text>
            <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>


  )
}
