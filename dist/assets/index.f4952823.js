import{j as d,r as c,m,R as u,a as f}from"./vendor.aa9511b2.js";const h=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}};h();var g="/Markdown-Previewer/assets/markdown-icon.489e3ced.png";const s=d.exports.jsx,l=d.exports.jsxs;function x(){return s("nav",{className:"bg-gray-800 flex justify-center",children:l("div",{className:"flex items-center",children:[s("img",{src:g,className:"h-10 my-2",alt:"logo"}),s("h1",{className:"text-neutral-100 text-2xl",children:"Markdown Previewer"})]})})}const b=o=>(c.exports.useEffect(()=>{const e=ace.edit("editor");e.setTheme("ace/theme/chrome"),e.session.setMode("ace/mode/markdown"),e.session.setUseWrapMode(!0);const a=localStorage.getItem("text-mp");a?(e.setValue(a,1),o.setText(e.getValue())):e.setValue(o.text,1),e.session.on("change",()=>{o.setText(e.getValue())}),window.addEventListener("beforeunload",i=>{i.preventDefault(),localStorage.setItem("text-mp",e.getValue())}),document.getElementById("btn-copy").addEventListener("click",()=>{e.selectAll(),navigator.clipboard.writeText(e.getValue())})},[]),l("div",{className:"w-1/2 h-full flex-1 border-2 border-black relative",children:[s("button",{className:"absolute z-10 right-6 top-4 hover:scale-105",id:"btn-copy",children:s("i",{className:"fas fa-copy text-gray-800 text-2xl"})}),s("div",{className:"w-full h-full overflow-auto text-base",id:"editor"})]})),p=o=>(c.exports.useEffect(()=>{document.getElementById("preview").innerHTML=m.parse(o.text)}),s("div",{className:"w-1/2 h-full m-0 flex-1 box-border border-2 border-black",children:s("div",{className:"w-full h-full p-2 overflow-auto text-base prose prose-lg max-w-full",id:"preview"})}));function w(){const[o,e]=c.exports.useState(`# Markdown syntax guide

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
`);return l("main",{className:"w-screen h-screen flex flex-col",children:[s(x,{}),l("section",{className:"overflow-hidden box-border flex-1 flex",children:[s(b,{text:o,setText:e}),s(p,{text:o})]})]})}u.render(s(f.StrictMode,{children:s(w,{})}),document.getElementById("root"));
