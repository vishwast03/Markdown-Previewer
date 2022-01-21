import { useEffect } from "react";
import { marked } from "marked";

const Preview = (props) => {
  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(props.text);
  });

  return (
    <div
      className="w-1/2 h-full m-0 p-2 flex-1 overflow-auto text-base box-border border-2 border-black prose prose-lg"
      id="preview"
    ></div>
  );
};

export default Preview;