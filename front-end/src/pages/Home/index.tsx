import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { History } from "history";
import { FaCheck } from "react-icons/fa";
import { Container, Button, Input, Content } from "./styles";

type Props = {
  history: History;
};

export const CREATE_OR_LOGIN_USER = gql`
  mutation($email: String!) {
    createOrLoginUser(data: { email: $email }) {
      id
    }
  }
`;

const Home: React.FC<Props> = ({ history }) => {
  const [email, setEmail] = useState<string>("");

  const [createOrLoginUser, { data }] = useMutation(CREATE_OR_LOGIN_USER);

  useEffect(() => {
    if (data) {
      const { createOrLoginUser } = data;
      const { id } = createOrLoginUser;

      history.push(`/dashboard?id=${id}`);
    }
  }, [data, history]);

  async function handleRegister(e: React.MouseEvent) {
    e.preventDefault();

    if (email.length < 1) {
      alert("Inset an email");
      return;
    }

    createOrLoginUser({
      variables: {
        email,
      },
    });

    setEmail("");
  }

  return (
    <Container>
      <Content>
        <form action="">
          <Input
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Button onClick={handleRegister}>
            <FaCheck size={36} color="#fff" />
            <span>Login or Register</span>
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Home;
