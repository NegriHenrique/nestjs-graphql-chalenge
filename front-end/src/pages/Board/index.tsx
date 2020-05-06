import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Container, Message } from "./styles";

interface IMessage {
  id: number;
  content: string;
  user: {
    email: string;
  };
}

const GET_ALL_MESSAGES = gql`
  query {
    getMessages {
      id
      content
      user {
        email
      }
    }
  }
`;

const Board: React.FC = () => {
  const { loading, data } = useQuery<{ getMessages: IMessage[] }>(
    GET_ALL_MESSAGES
  );

  if (loading) return <p>Loading ...</p>;

  return (
    <Container>
      {data?.getMessages.map((message: IMessage, index: number) => (
        <Message key={index}>
          <p>{message.content}</p>

          <span>{message.user.email}</span>
        </Message>
      ))}
    </Container>
  );
};

export default Board;
