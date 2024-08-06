// RichTextEditor.jsx
import React, { useRef, useState, useCallback, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '@/config/firebase';

export default function RichTextEditor({ value, onChange }) {
  const quillRef = useRef(null);

  // Function to upload image to Firebase Storage
  const uploadImageToServer = useCallback(async (file) => {
    const fileRef = ref(storage, `blog/articleImages/${file.name}`);
    try {
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      return url;
    } catch (error) {
      console.error('Error uploading image to Firebase Storage:', error);
      return 'https://example.com/default-image.png'; // Fallback URL
    }
  }, []);

  // Image handler to handle image uploads
  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
  
    input.onchange = async () => {
      const file = input.files[0];
      if (!file) return;
  
      const range = quillRef.current?.getEditor().getSelection();
      if (range) {
        // Insert a temporary placeholder image
        const placeholderUrl = '/images/blog/uploading.jpg'; // 1x1 transparent GIF
        quillRef.current.getEditor().insertEmbed(range.index, 'image', placeholderUrl, 'user');
  
        try {
          const imageUrl = await uploadImageToServer(file);
          quillRef.current.getEditor().deleteText(range.index, 1); // Delete the placeholder
          quillRef.current.getEditor().insertEmbed(range.index, 'image', imageUrl, 'user'); // Insert the actual image URL
        } catch (error) {
          console.error('Error uploading image:', error);
          // Optionally, remove the placeholder image if there was an error
          quillRef.current.getEditor().deleteText(range.index, 1);
        }
      }
    };
  }, [uploadImageToServer]);
  
  

  // Memoize Quill modules
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ header: "1" }, { header: "2" }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image", "video"],
        [{ color: [] }, { background: [] }],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), [imageHandler]);

  // Memoize formats
  const formats = useMemo(() => [
    "header",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
    "background",
  ], []);

  // Handle editor content change
  const handleChange = useCallback((content) => {
    if (onChange) onChange(content);
  }, [onChange]);

  // Sync editor value with prop value
  const editorValue = value || '';

  return (
    <ReactQuill
      ref={quillRef}
      theme="snow"
      modules={modules}
      formats={formats}
      value={editorValue}
      onChange={handleChange}
      className="mb-20"
      style={{ height: '400px', overflowY: 'auto' }}
    />
  );
}

