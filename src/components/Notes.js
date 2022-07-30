import AddIcon from "@mui/icons-material/Add";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import React, { useState } from "react";
import "./Notes.css";
import { Pagination } from "@mui/material";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Notes = ({ notes, removeItem, setNotes }) => {
  const [page, setPage] = useState(1);
  const [pin, setPin] = useState(true);

  const count = Math.ceil(notes.length / 5);

  const handleChange = (event, value) => {
    setPage(value);

    document.getElementById("newPage")?.scrollIntoView({ behavior: "smooth" });
  };

  const completeTodo = (id) => {
    let updatedTodos = notes.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setNotes(updatedTodos);
  };
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{ height: "100%", borderRight: " 1px solid #e3e7eb" }}
    >
      <Box>
        <Stack
          marginTop={5}
          direction={"row"}
          justifyContent="space-around"
          alignItems={"center"}
          sx={{ fontWeight: "700", marginBottom: 5 }}
          onClick={() => {}}
        >
          <Typography variant="h5" color={"black"}>
            All ideas
          </Typography>

          <Tooltip arrow title="Add" placement="top">
            <AddIcon className="addIcon" />
          </Tooltip>
        </Stack>
        {notes.slice((page - 1) * 6, page * 6).map((note) => {
          return (
            <Box
              width={"100%"}
              sx={{
                padding: 1,
                borderBottom: "1px solid #e3e7eb",
                borderTop: "1px solid #e3e7eb",
                paddingLeft: { xs: 1, md: 3 },
                position: "relative",
              }}
              key={note.id}
            >
              <Typography
                className={
                  note.isComplete ? "headingMain complete" : "headingMain"
                }
                variant="body1"
              >
                {note.title}
              </Typography>
              <Typography className="headingSub" variant="body2">
                {note.content}
              </Typography>
              <div className="noteBtn">
                <div>
                  <IconButton
                    sx={{ marginRight: "5px" }}
                    aria-label="delete"
                    size="small"
                    color="primary"
                    onClick={() => completeTodo(note.id)}
                  >
                    <PushPinOutlinedIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    color="primary"
                    onClick={() => removeItem(note.id)}
                  >
                    <DeleteOutlineOutlinedIcon fontSize="inherit" color="" />
                  </IconButton>
                </div>
                <div>note.time</div>
              </div>
            </Box>
          );
        })}
      </Box>
      <Pagination
        sx={{ display: "flex", justifyContent: "center", marginBottom: 8 }}
        count={count}
        size="small"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Stack>
  );
};

export default Notes;
