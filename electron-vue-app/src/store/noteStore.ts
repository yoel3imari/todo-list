import { defineStore } from "pinia";
import { ref } from "vue";
import { NoteInfo } from "../shared/models";
import debounce from "debounce";
import { createNewNote } from "../../services/FileStreamService";
import { toast } from "vue3-toastify";

const data: NoteInfo[] = [
  {
    title: "note 1",
    content: "# Note 1 content",
    lastOpenedTime: 15445236,
    lastEditedTime: 15455236,
  },
  {
    title: "note 2",
    content: "# Note 2 content",
    lastOpenedTime: 15455235,
    lastEditedTime: 15455235,
  },
  {
    title: "note 3",
    content: "# Note 3 content",
    lastOpenedTime: 15456239,
    lastEditedTime: 15455239,
  },
  {
    title: "note 4",
    content: "# Note 4 content",
    lastOpenedTime: 15485231,
    lastEditedTime: 15495231,
  },
];

export const useNoteStore = defineStore("note-store", () => {
  const selectedNote = ref<NoteInfo>({} as NoteInfo);
  const allNotes = ref<NoteInfo[]>(
    data.sort((a, b) => b.lastEditedTime - a.lastEditedTime)
  );

  function selectNote(note: NoteInfo) {
    selectedNote.value = note;
    document.title = "Note: " + note.title;
  }

  // save changes to current note
  const onChange = debounce((v: string) => {
    selectedNote.value.content = v;
    console.log(selectedNote.value);
  }, 1000);

  // new file
  const newNote = () => {
    try {
      createNewNote();
      toast("Notebook created!", { autoClose: 1500 });
    } catch (error) {
      toast("Failed to create a new notebook!", { autoClose: 1500 });
    }
  };

  return {
    allNotes,
    selectedNote,
    selectNote,
    onChange,
    newNote,
  };
});
