// components/custom-editor.js
"use client"; // Required only in App Router.
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Essentials,
  Paragraph,
  Bold,
  Italic,
  Code,
  BlockQuote,
} from "ckeditor5";

import "ckeditor5/ckeditor5.css";

function App() {
  return (
    <CKEditor
        onChange={(e, editor) => {
            console.log(editor.getData())
        }}
      editor={ClassicEditor}
      config={{
        licenseKey: "GPL", 
        plugins: [Essentials, Paragraph, Bold, Italic, BlockQuote, Code],
        toolbar: ["undo", "redo", "|", "bold", "italic", "|", "formatPainter", "|", "code"],
        initialData: "<p style={{ 'fontSize': '12px' }}>What's on your mind ?</p>",
      }}
    />
  );
}

export default App;
