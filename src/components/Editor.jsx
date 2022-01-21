import { useEffect } from "react";

const Editor = (props) => {
  useEffect(() => {
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/markdown");
    editor.session.setUseWrapMode(true);

    const savedText = localStorage.getItem("text-mp");
    if (savedText) {
      editor.setValue(savedText, 1);
      props.setText(editor.getValue());
    } else {
      editor.setValue(props.text, 1);
    }

    editor.session.on("change", () => {
      props.setText(editor.getValue());
    });

    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      localStorage.setItem("text-mp", editor.getValue());
    });

    document.getElementById("btn-copy").addEventListener("click", () => {
      editor.selectAll();
      navigator.clipboard.writeText(editor.getValue());
    });
  }, []);

  return (
    <div className="w-1/2 h-full flex-1 border-2 border-black relative">
      <button
        className="absolute z-10 right-4 top-4 hover:scale-105"
        id="btn-copy"
      >
        <i className="fas fa-copy text-gray-800 text-2xl"></i>
      </button>
      <div className="w-full h-full overflow-auto text-base" id="editor"></div>
    </div>
  );
};

export default Editor;
