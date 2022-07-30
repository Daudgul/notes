import { Avatar, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import PopUp from "./PopUp";
import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";

const getLocalItem = () => {
  let list = localStorage.getItem("userName");
  if (list) {
    return JSON.parse(list);
  } else {
    return "";
  }
};

const Folders = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(getLocalItem());

  const nameIcon = user.charAt(0).toUpperCase();

  useEffect(() => {
    if (user.length === 0) {
      return setOpen(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <Stack
        direction={"column"}
        justifyContent="space-between"
        alignItems="center"
        height="100%"
        width="100%"
      >
        <Box>
          <Typography
            sx={{
              marginBottom: { xs: 3, md: 5 },
              marginTop: 5,
            }}
            variant="h6"
            margin={"0 auto"}
            component="h6"
          >
            <CrisisAlertOutlinedIcon
              sx={{
                transform: {
                  xs: "translateX(45px)",
                  md: "translateX(-10px) translateY(5px)",
                },
              }}
            />
            NotesTakker
          </Typography>
          <Typography
            variant="body2"
            sx={{
              cursor: "pointer",
              "&:hover": {
                color: "red",
              },
            }}
          >
            <FolderOpenOutlinedIcon
              sx={{ transform: "translateY(7px)", marginRight: 1 }}
            />
            notes
          </Typography>
        </Box>
        <PopUp open={open} setOpen={setOpen} setUser={setUser} user={user} />
        <Box>
          <Paper
            sx={{
              width: { xs: "100px", md: "160px" },
              height: "60px",
              opacity: "0.2",
            }}
          >
            {""}
          </Paper>
          <Paper
            sx={{
              width: { xs: "100px", md: "160px" },
              height: "60px",
              backgroundColor: "transparent",
              color: "white",
              transform: "translateY(-100%)",
            }}
          >
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent={"center"}
              height="100%"
              spacing={1}
              width="80%"
              margin={"auto"}
            >
              <Avatar
                sx={{
                  bgcolor: "#e3e7eb",
                  color: "black",
                  width: { xs: 28, md: 40 },
                  height: { xs: 28, md: 40 },
                  fontSize: { xs: 12, md: 20 },
                }}
                variant="rounded"
              >
                {nameIcon}
              </Avatar>
              <p
                style={{
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {user}
              </p>
            </Stack>
          </Paper>
        </Box>
      </Stack>
    </>
  );
};

export default Folders;
