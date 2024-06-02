import axios from "axios";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";
import "./style.css";
export default function TextField() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  function handleClick() {
    if (content.length >= 1)
      axios.post("http://localhost:3331/data", { content });
    setContent("");
  }
  return (
    <>
      <div
        style={{
          height: "300px",
          width: "100%",
          marginTop: "30px",
          paddingLeft: "10px",
        }}
      >
        <div className="jodieditor">
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          ></JoditEditor>
        </div>
        <button
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "30px",
            height: "30px",
            fontSize: "15px",
            // padding: "auto",
            marginTop: "2rem",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          + Add content
        </button>
      </div>
    </>
  );
}
