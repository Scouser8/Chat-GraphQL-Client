const messagesContainerStyles = {
  flex: 1,
  padding: 5,
};

const messageStyles = (isMessageFromCurrentUser: boolean) => ({
  color: "black",
  marginTop: 2,
  display: "flex",
  justifyContent: isMessageFromCurrentUser ? "flex-end" : "flex-start",
  gap: 2,
  "& .messageContent": {
    borderRadius: 1,
    padding: 1,
    background: isMessageFromCurrentUser ? "teal" : "lightGrey",
  },
});

export { messagesContainerStyles, messageStyles };
