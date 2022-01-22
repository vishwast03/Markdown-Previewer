import { useEffect } from "react";

const Editor = (props) => {

  // useEffect hook used to execute code as soon as the editor component is mounted
  useEffect(() => {

    // Configuring the Ace editor
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/markdown");
    editor.session.setUseWrapMode(true);

    // checking for previously saved text in localStorage
    const savedText = localStorage.getItem("text-mp");
    if (savedText) {
      // if text saved previously rendering that text
      editor.setValue(savedText, 1);
      props.setText(editor.getValue());
    } else {
      // rendering default text if text was not saved previously
      editor.setValue(props.text, 1);
    }

    // listening for change event in editor and updating text state accordingly
    editor.session.on("change", () => {
      props.setText(editor.getValue());
    });

    // saving the text from editor to localStorage before the window is closed
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      localStorage.setItem("text-mp", editor.getValue());
    });

    // handling click on copy button and writing the text to clipboard
    document.getElementById("btn-copy").addEventListener("click", () => {
      editor.selectAll();
      navigator.clipboard.writeText(editor.getValue());
    });
  }, []);

  return (
    <div className="w-1/2 h-full flex-1 border-2 border-black relative">
      <button
        className="absolute z-10 right-6 top-4 hover:scale-105"
        id="btn-copy"
      >
        <i className="fas fa-copy text-gray-800 text-2xl"></i>
      </button>
      <div className="w-full h-full overflow-auto text-base" id="editor"></div>
    </div>
  );
};

export default Editor;
