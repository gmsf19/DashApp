import { Flex, Button, Stack, Text, Box } from '@chakra-ui/react'
import { Input } from '../components/form/input'

export default function SignIn() {
  return (

     <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >

      <Flex
       as="form"
       w="100%"
       maxWidth={360}
       bg="gray.800"
       pt="10"
       pb="8"
       pr="8"
       pl="8"
       borderRadius={8}
       flexDir="column"
      >
        <Stack spacing="4">
          <Text
            mb="8"
            fontSize="3xl"
            fontWeight="bold"
            justify="top"
            align="center"
            >
             DashApp

            <Text as="span" ml="1" color="pink.500">.</Text>
          </Text>

          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
     </Flex>
  )
}
