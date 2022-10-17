import React, { useState } from "react";
import { Container } from "reactstrap";
import "./SignIn.css";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";

const SignIn = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="sign-in">
      <Container className="sign-in-container">
        <FormControl className="sign-in-form">
          <FormLabel
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            textAlign={"center"}
            fontSize={"2.5rem"}
            pb={"20px"}
          >
            <Image
              src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
              width={"150px"}
            />
          </FormLabel>

          <FormLabel>Email address</FormLabel>
          <Input
            fontSize={"small"}
            type="email"
            placeholder="E-mail"
            id="email"
            required
          />

          <FormLabel pt={"20px"}>Password</FormLabel>

          <InputGroup size="md">
            <Input
              fontSize={"small"}
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <FaEye fontSize={"18px"} onClick={handleClick} cursor={"pointer"}>
                {show ? "Hide" : "Show"}
              </FaEye>
            </InputRightElement>
          </InputGroup>

          <Box className="remember-forgot" pt={"20px"}>
            <FormHelperText color={"#ddd"}>
              <Checkbox defaultChecked fontSize={"12px"}>
                <p>Remember Me</p>
              </Checkbox>
            </FormHelperText>
            <FormHelperText color={"#ddd"} cursor={"pointer"}>
              <a href="/#">Forgot Password?</a>
            </FormHelperText>
          </Box>

          <Button colorScheme={"messenger"} width={"100%"} mb={"30px"}>
            Login
          </Button>

          <FormHelperText color={"#ddd"}>
            Don't have Account?
            <a style={{ margin: "5px" }} href="/signUp">
              Sign Up
            </a>
          </FormHelperText>
        </FormControl>
      </Container>
    </div>
  );
};

export default SignIn;
