import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import TextField from "../textfield/TextField";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function ScrollDialog() {
  const [showInput, setShowInput] = React.useState(false);
  const [handleTextState, setHandleTextState] = React.useState(false);
  const [handleUploadState, setHandleUploadState] = React.useState(false);

  const [selectedFile, setSelectedFile] = React.useState(null);
  const hiddenFileInput = React.useRef(null);
  const [fileURL, setFileURL] = React.useState(null);

  const handleClick2 = () => {
    hiddenFileInput.current.click();
    setShowInput(false);
    setOpen("false");
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setSelectedFile(fileUploaded);
    const fileUrl = URL.createObjectURL(fileUploaded);
    setFileURL(fileUrl);
  };
  function handleText() {
    setHandleTextState(!handleTextState);
    setHandleUploadState(false);
  }

  function handleUpload() {
    setHandleUploadState(!handleUploadState);
    setHandleTextState(false);
  }
  const handleClick = () => {
    if (handleTextState === true) {
      setShowInput(true);
    }
  };
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <>
      {showInput && <TextField />}

      <div
        style={{
          margin: "50px 280px",
          flexDirection: "column",
          alignItems: "center",
          display: showInput ? "none" : "flex",
        }}
        className="main-container"
      >
        <div className="add-content-container">
          <ArticleOutlinedIcon fontSize="large" />
        </div>
        <p style={{ fontWeight: "600" }}>Content is not added yet!</p>
        <button onClick={handleClickOpen("paper")}>Add Content</button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DialogTitle id="scroll-dialog-title">Add Content</DialogTitle>
          <CloseIcon
            sx={{ marginTop: "20px", marginRight: "2px" }}
            onClick={handleClose}
          />
        </div>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
            style={{
              height: "200px",
              width: "220px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={handleText}
                style={{
                  height: "140px",
                  width: "100px",
                  cursor: "pointer",
                  border: handleTextState ? "2px solid blue" : "none",
                }}
              >
                <img
                  src={require("../images/t-text.png")}
                  alt="t-text"
                  style={{
                    height: "50px",
                    width: "50px",
                    margin: "20px",
                  }}
                />
                <span style={{ fontWeight: "bold" }}>
                  Type your own content
                </span>
              </button>

              <button
                onClick={handleUpload}
                style={{
                  width: "100px",
                  cursor: "pointer",
                  border: handleUploadState ? "2px solid red" : "none",
                }}
              >
                <img
                  src={require("../images/upload.png")}
                  alt="t-text"
                  style={{
                    height: "50px",
                    width: "50px",
                    margin: "20px",
                  }}
                />
                <span style={{ fontWeight: "bold" }}>Upload your document</span>
              </button>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              height: "30px",
              width: "120px",
              borderRadius: "30px",
              cursor: "pointer",
              border: "1px solid #e8ebed ",
            }}
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            style={{
              backgroundColor: "#0377fc",
              color: "white",
              height: "30px",
              width: "120px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={handleTextState ? handleClick : handleClick2}
            // onClick={handleClick2}
          >
            Add content
          </button>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }} // Hide the input field
          />
        </DialogActions>
      </Dialog>
      {selectedFile && (
        <div style={{ marginTop: "50px", marginLeft: "100px" }}>
          <PictureAsPdfIcon
            style={{ color: "blue", fontSize: "60px", marginBottom: "-20px" }}
          />
          <p> {selectedFile.name}</p>

          {selectedFile.type.startsWith("image/") && (
            <div>
              <h3>Preview:</h3>
              <img
                src={fileURL}
                alt="file preview"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
