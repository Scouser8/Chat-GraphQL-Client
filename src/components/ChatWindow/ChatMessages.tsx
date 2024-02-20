import { gql, useQuery } from "@apollo/client";

const GET_MESSAGES = gql`
  query ExampleQuery {
    messages {
      id
      username
      content
    }
  }
`;

function ChatMessages() {
  const { data } = useQuery(GET_MESSAGES);
  return (
    <div>
      {data?.messages.map((msg) => (
        <p>{msg.content}</p>
      ))}
    </div>
  );
}

export default ChatMessages;
