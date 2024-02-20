import { gql, useQuery } from "@apollo/client";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { Message } from "../../types";
import { getUserAvatarText } from "../../utils";
import {
  messageStyles,
  messagesContainerStyles,
} from "../../styles/MessageStyles";

const GET_MESSAGES = gql`
  query ExampleQuery {
    messages {
      id
      username
      content
    }
  }
`;

type Props = {
  selectedUser: string;
};

function ChatMessages(props: Props) {
  const { selectedUser } = props;
  const { data } = useQuery(GET_MESSAGES);
  const chatMessages: Message[] = data?.messages || [];
  return (
    <Container sx={messagesContainerStyles}>
      {chatMessages?.map(({ username, content }) => {
        const isFromCurrentUser = selectedUser === username;
        return (
          <Box sx={messageStyles(isFromCurrentUser)}>
            {!isFromCurrentUser && (
              <Avatar>{getUserAvatarText(username)}</Avatar>
            )}
            <Typography className="messageContent">{content}</Typography>
          </Box>
        );
      })}
    </Container>
  );
}

export default ChatMessages;
