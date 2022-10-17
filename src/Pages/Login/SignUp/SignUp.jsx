import React from "react";
import "./SignUp.css";
import { Container } from "reactstrap";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  FormHelperText,
  Image,
} from "@chakra-ui/react";

const SignUp = () => {
  return (
    <div className="sign-up">
      <Container className="sign-up-container">
        <FormControl className="sign-up-form">
          <FormLabel
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            textAlign={"center"}
            fontSize={"2.5rem"}
            pb={"10px"}
          >
            <Image
              src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
              width={"180px"}
            />
          </FormLabel>

          <FormLabel pt={"20px"} fontSize={"14px"}>
            FirstName
          </FormLabel>
          <Input
            fontSize={"small"}
            type="text"
            placeholder="Firstname"
            id="firstname"
            maxLength={"22"}
          />

          <FormLabel pt={"20px"} fontSize={"14px"}>
            LastName
          </FormLabel>
          <Input
            fontSize={"small"}
            type="text"
            placeholder="LastName"
            id="lastname"
            maxLength={"22"}
          />

          <FormLabel pt={"20px"} fontSize={"14px"}>
            Tc Kimlik
          </FormLabel>
          <Input
            fontSize={"small"}
            type="text"
            placeholder="Passaport id"
            id="tc"
            maxLength={"16"}
            required
          />

          <FormLabel pt={"20px"} fontSize={"14px"}>
            Enter E-mail
          </FormLabel>
          <Input
            fontSize={"small"}
            type="email"
            placeholder="E-mail"
            id="email"
            maxLength={"32"}
          />

          <FormLabel fontSize={"14px"} pt={"20px"}>
            Enter Password
          </FormLabel>
          <Input
            fontSize={"small"}
            type="password"
            placeholder="Password"
            id="password"
            maxLength={"20"}
          />

          <FormHelperText color={"#ddd"} textAlign={"start"} pt={"20px"}>
            <Checkbox defaultChecked fontSize={"12px"}>
              <small>Agree all rules and Create Account </small>
            </Checkbox>
          </FormHelperText>

          <Button
            width={"100%"}
            mt={"3rem"}
            colorScheme={"messenger"}
            fontWeight={"500"}
          >
            Create Account
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};

export default SignUp;
