import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default function RichTextEditor({ value, onChange }) {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
      className="mb-20"
      style={{ height: '400px' }}
    />
  );
}

// "use client";
// import { useEffect, useRef } from "react";
// import Quill from "quill";
// import "quill/dist/quill.snow.css";

// export default function RichTextEditor({ value, onChange }) {
//   const editorRef = useRef(null);
//   const quillRef = useRef(null);

//   useEffect(() => {
//     if (editorRef.current) {
//       quillRef.current = new Quill(editorRef.current, {
//         theme: "snow",
//         modules: {
//           toolbar: [
//             [{ header: "1" }, { header: "2" }, { font: [] }],
//             [{ list: "ordered" }, { list: "bullet" }],
//             ["bold", "italic", "underline"],
//             [{ color: [] }, { background: [] }],
//             ["link", "blockquote", "code-block"],
//             [{ align: [] }],
//             ["clean"],
//           ],
//         },
//       });

//       quillRef.current.on("text-change", () => {
//         const html = editorRef.current.children[0].innerHTML;
//         onChange(html);
//       });
//     }
//   }, [onChange]);

//   useEffect(() => {
//     if (quillRef.current && value) {
//       quillRef.current.clipboard.dangerouslyPasteHTML(value);
//     }
//   }, [value]);

//   return <div ref={editorRef} />;
// }
