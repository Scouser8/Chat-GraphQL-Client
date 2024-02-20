import { useState } from "react";
import { MentionsInput, Mention, OnChangeHandlerFunc } from "react-mentions";
import { USERS } from "../../constants";
import MentionStyles from "../../styles/MentionStyles";
import { Button } from "@mui/material";

type Props = {
  isUserSelected: boolean;
};

function TextInput(props: Props) {
  const { isUserSelected } = props;
  const [message, setMessage] = useState("");
  const handleChange: OnChangeHandlerFunc = (
    event,
    newValue,
    newPlainTextValue,
    mentions
  ) => {
    setMessage(() => newValue);
    // console.log("event", event.target.value);
    // console.log("newValue", newValue);
    // console.log("newPlainTextValue", newPlainTextValue);
    // console.log("mentions", mentions);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Did Submit");
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
