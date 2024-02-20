import { useState } from "react";
import {
  MentionsInput,
  Mention,
  OnChangeHandlerFunc,
  MentionItem,
} from "react-mentions";
import { USERS } from "../../constants";
import MentionStyles from "../../styles/MentionStyles";
import { Button } from "@mui/material";
import { gql, useMutation } from "@apollo/client";

const POST_MESSAGE = gql`
  mutation addMessage(
    $username: String!
    $content: String!
    $mentionedUsers: [String]!
  ) {
    postMessage(
      username: $username
      content: $content
      mentionedUsers: $mentionedUsers
    )
  }
`;

const initialPayloadValues = {
  username: "",
  content: " ",
  mentionedUsers: [] as MentionItem[],
};

type Props = {
  selectedUser: string;
};

function TextInput(props: Props) {
  const { selectedUser } = props;
  const isUserSelected = !!selectedUser;
  const [message, setMessage] = useState("");
  const [payload, setPayload] = useState(initialPayloadValues);
  console.log("selectedUser", selectedUser);

  const [postMessage] = useMutation(POST_MESSAGE);
  const handleChange: OnChangeHandlerFunc = (
    event,
    newValue,
    newPlainTextValue,
    usersMentioned
  ) => {
    setMessage(() => newValue);
    console.log("event", event.target.value);
    console.log("newValue", newValue);
    console.log("newPlainTextValue", newPlainTextValue);
    setPayload({
      username: selectedUser,
      content: newPlainTextValue,
      mentionedUsers: usersMentioned,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mentionedUsers = payload.mentionedUsers.map(
      (mention) => mention.display
    );
    postMessage({
      variables: {
        ...payload,
        mentionedUsers,
      },
    })
      .then(() => {
        setMessage("");
        setPayload({ ...initialPayloadValues });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 20 }}>
      <MentionsInput
        style={MentionStyles}
        value={message}
        onChange={handleChange}
        disabled={!isUserSelected}
      >
        <Mention
          trigger="@"
          data={USERS}
          appendSpaceOnAdd
          style={{ backgroundColor: "#cee4e5" }}
        />
      </MentionsInput>
      <Button variant="contained" type="submit">
        Send
      </Button>
    </form>
  );
}

export default TextInput;
