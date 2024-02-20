import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import TextInput from "./TextInput";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ChatMessages from "./ChatMessages";
import { useState } from "react";
import { USERS } from "../../constants";
import ChatWindowStyles from "../../styles/ChatWindowStyles";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function ChatWindow() {
  const [selectedUser, setSelectedUser] = useState("");

  const handleSelectUser = (event: SelectChangeEvent) => {
    setSelectedUser(event.target.value as string);
  };
  return (
    <ApolloProvider client={client}>
      <Container sx={ChatWindowStyles}>
        <Box className="selectUserContainer">
          <FormControl className="selectUserInput">
            <InputLabel id="select-chat-user-label">User</InputLabel>
            <Select
              labelId="select-chat-user-label"
              value={selectedUser}
              label="Age"
              onChange={handleSelectUser}
              placeholder="Select user to chat"
              sx={{ height: 50 }}
            >
              {USERS.map(({ username }) => (
                <MenuItem key={username} value={username}>
                  {username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Container>
          <ChatMessages selectedUser={selectedUser} />
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextInput isUserSelected={!!selectedUser} />
          </Box>
        </Container>
      </Container>
    </ApolloProvider>
  );
}

export default ChatWindow;
