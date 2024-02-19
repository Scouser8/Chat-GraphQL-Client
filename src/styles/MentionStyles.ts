const MentionStyles = {
  control: {
    backgroundColor: "#fff",
    fontSize: 14,
    fontWeight: "normal",
    width: 700,
    height: 50,
  },

  "&multiLine": {
    control: {
      fontFamily: "monospace",
    },
    highlighter: {
      padding: 9,
      border: "1px solid transparent",
    },
    input: {
      padding: 9,
      border: "1px solid silver",
    },
  },

  "&singleLine": {
    display: "inline-block",
    width: 500,

    highlighter: {
      padding: 1,
      border: "2px inset transparent",
    },
    input: {
      padding: 5,
      border: "2px inset",
    },
  },

  suggestions: {
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 14,
    },
    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      "&focused": {
        backgroundColor: "#cee4e5",
      },
    },
  },
};

export default MentionStyles;
