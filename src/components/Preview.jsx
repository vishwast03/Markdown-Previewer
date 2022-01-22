import { useEffect } from "react";
import { marked } from "marked";

const Preview = (props) => {
  // rendering the respective HTML after parsing markdown to preview section
  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(props.text);
  });
  
  return (
    <div className="w-1/2 h-full m-0 flex-1 box-border border-2 border-black">
      <div
        className="w-full h-full p-2 overflow-auto text-base prose prose-lg max-w-full"
        id="preview"
      ></div>
    </div>
  );
};

export default Preview;
