import {
  Box,
  Button,
  ButtonText,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  Heading,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Text,
  VStack,
  Card,
} from "@gluestack-ui/themed";

import React, { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  return (
    <>
      <Box
        justifyContent="center"
        h="$full"
        w="$full"
        sx={{
          "@base": {
            py: "$5",
          },
          "@md":{
            mx:"auto",
            px:"$72"
          },
          "@lg": {
            mx: "auto",
            px: "$72",
            py: "$5",
          },
        }}
      >
         <Heading mb="$10" size="2xl" textAlign="center" color="$white">
   Welcome to EEtv Bharat!
  </Heading>
        <Card size="md" variant="outline" m="$3" >
          {" "}
          <FormControl
     
            p="$4"
           
            $dark-borderWidth="$1"
            $dark-borderRadius="$lg"
            $dark-borderColor="$borderDark800"
          >
            <VStack space="xl">
              <Heading color="$white" lineHeight="$md">
                Login
              </Heading>
              <VStack space="xs">
                <Text color="$white" lineHeight="$xs">
                  Email
                </Text>
                <Input>
                  <InputField type="text" color="$white" />
                </Input>
              </VStack>
              <VStack space="xs">
                <Text color="$white" lineHeight="$xs">
                  Password
                </Text>
                <Input>
                  <InputField color="$white" type={showPassword ? "text" : "password"} />
                  <InputSlot pr="$3" onPress={handleState}>
                    {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                    <InputIcon
                      as={showPassword ? EyeIcon : EyeOffIcon}
                      color="$darkBlue500"
                    />
                  </InputSlot>
                </Input>
              </VStack>
              <Button
                ml="auto"
                onPress={() => {
                  alert("submitted!!");
                }}
              >
                <ButtonText color="$white">Save</ButtonText>
              </Button>
            </VStack>
          </FormControl>
        </Card>
      </Box>
    </>
  );
}
