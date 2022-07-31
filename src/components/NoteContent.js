import TextField from "@mui/material/TextField";
import React from "react";
import { createReactEditorJS } from "react-editor-js";
import CheckList from "@editorjs/checklist";

const NoteContent = () => {
  const ReactEditorJS = createReactEditorJS();

  return (
    <div>
      <div className="date-box">27 July 2022 at 11:47 PM</div>

      <TextField
        fullWidth
        id="standard-multiline-static"
        multiline
        rows={2}
        defaultValue="Heading"
        variant="standard"
      />
      <TextField
        fullWidth
        id="standard-multiline-subheading"
        multiline
        rows={1}
        defaultValue="Default Value"
        variant="standard"
      />
    </div>
  );
};

export default NoteContent;
