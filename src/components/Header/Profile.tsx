import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData}: ProfileProps){
  return(
    <Flex align="center" ml="auto">


    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gabriel Mateus</Text>
          <Text color="gray.300" fontSize="small">
            gmsf19@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Gabriel Mateus"
        src="https://github.com/gmsf19.png"
      />
    </Flex>
  </Flex>
  )
}
