import fs from "fs";
import path from "path";
import os from "os";
import { dialog } from "electron";
import { useNoteStore } from "../src/store/noteStore";

const homeDirectory = os.homedir();
console.log(homeDirectory, "Filse Stream Service");
const documentsFolder = path.join(homeDirectory, "Documents");

const store = useNoteStore();
var fileCount = 0;

function preprocess() {
  // Check if Documents folder exists
  if (!fs.existsSync(documentsFolder)) {
    // Create the Documents folder
    fs.mkdirSync(documentsFolder);
    console.log(`Created Documents folder at: ${documentsFolder}`);
  } else {
    console.log(`Documents folder already exists at: ${documentsFolder}`);
  }

  fileCount = store.allNotes.length + 1;
}

/**
 * create a new notebook
 */
const createNewNote = () => {
  preprocess();

  dialog
    .showSaveDialog({
      title: "Create a new notebook",
      defaultPath: documentsFolder,
      buttonLabel: "Save",
      filters: [
        {
          name: "new_notebook_" + fileCount,
          extensions: ["md", "txt", "html"],
        },
      ],
      properties: [],
    })
    .then((file) => {
      if (!file.canceled) {
        // console.log(file.filePath.toString());
        // Creating and Writing to the sample.txt file
        fs.writeFile(
          file.filePath.toString(),
          "# New Notebook " + fileCount,
          function (err) {
            if (err) throw err;
          }
        );
      }
    });
};

export { createNewNote };
