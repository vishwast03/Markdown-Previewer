import { useState } from "react";
import Navbar from "./components/Navbar";
import Editor from "./components/Editor";
import Preview from "./components/Preview";

function App() {
  const [text, setText] = useState(`# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2 
###### This is a Heading h6

## Emphasis

*This text will be italic*  
_This will also be italic_

**This text will be bold**  
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
1. Item 3a
1. Item 3b

## Images

![This is a alt text.](https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg "This is a sample image.")

## Links

You may be using [GitHub](https://github.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
let message = 'Hello world';
alert(message);
\`\`\`

## Inline code

This web site is using \`markedjs/marked\`.
`);

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar />
      <section className="overflow-hidden box-border flex-1 flex">
        <Editor text={text} setText={setText} />
        <Preview text={text} />
      </section>
    </main>
  );
}

export default App;
