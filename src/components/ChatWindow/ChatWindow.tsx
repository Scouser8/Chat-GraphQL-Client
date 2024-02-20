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
      <Container>
        <ChatMessages />
        <Box sx={{ display: "flex", gap: 2 }}>
          <FormControl sx={{ width: 150 }}>
            <InputLabel id="select-chat-user">User</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedUser}
              label="Age"
              onChange={handleSelectUser}
              placeholder="Select user to chat"
            >
              {USERS.map(({ id, username }) => (
                <MenuItem key={id} value={id}>
                  {username}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextInput isUserSelected={!!selectedUser} />
        </Box>
      </Container>
    </ApolloProvider>
  );
}

export default ChatWindow;
