import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

import Image from "./backG.jpg";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Folders from "./components/Folders";
import Notes from "./components/Notes";
import "./App.css";
import NoteContent from "./components/NoteContent";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  height: "100vh",
  color: theme.palette.text.secondary,
}));

function App() {
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, "notes");
  const [newTitle, setTitle] = useState("");
  const [newSubtitle, setSubTitle] = useState("");
  const [newContent, setContent] = useState("");
  const [newFile, setNewFile] = useState("");

  const newNote = async () => {
    await addDoc(notesCollectionRef, {
      newfolder: setNewFile,
    });
  };

  const createNote = async () => {
    await addDoc(notesCollectionRef, {
      title: newTitle,
      subtitle: newSubtitle,
      content: newContent,
    });
  };

  const removeItem = async (id) => {
    const noteDoc = doc(db, "notes", id);
    await deleteDoc(noteDoc);
  };
  // const editItem = async (id) => {
  //   const noteDoc = doc(db, "notes", id);
  //   // const findNote = notes.find((note) => {
  //   //   return note.id === id;
  //   // });

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(notesCollectionRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getNotes();
  }, []);
  console.log(notes);

  return (
    <div>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={0}
        >
          <Item
            sx={{
              backgroundImage: `url(${Image})`,
              width: { xs: "250px", md: "400px", color: "white" },
            }}
          >
            <Folders />
          </Item>
          <Item
            sx={{
              width: { xs: "450px", md: "600px" },
              backgroundColor: "#f4f6f8",
            }}
          >
            <Notes notes={notes} removeItem={removeItem} setNotes={setNotes} />
          </Item>
          <Item sx={{ width: "100%" }}>
            <NoteContent />
          </Item>
        </Stack>
      </Box>
      {/* <form action=""></form> */}
      <input
        type="text"
        placeholder="Title.."
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Subtitle.."
        onChange={(event) => {
          setSubTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Content.."
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="NewFolder.."
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />

      <button onClick={createNote}> Create note </button>
    </div>
  );
}

export default App;

// {notes.map((note) => {
//   return (
//     <div key={note.id}>
//       {" "}
//       <h1>{note.title}</h1>
//       <h3>{note.subtitle}</h3>
//       <p>{note.content}</p>
//       <button onClick={() => removeItem(note.id)}>delete</button>
//       {/* <button onClick={() => editItem(note.id)}>edit item</button> } */}
//     </div>
//   );
// })}
