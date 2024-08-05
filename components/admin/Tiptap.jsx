// Import required extensions
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Heading from '@tiptap/extension-heading';
import Table from '@tiptap/extension-table';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    //   Table.configure({
    //     resizable: true, // Example configuration for resizable tables
    //   }),
      Image.configure({
        // Configuration options for image extension (e.g., upload handling)
        upload: file => {
          // Implement your upload logic here (e.g., to AWS S3, Firebase Storage, etc.)
          return new Promise(resolve => {
            setTimeout(() => resolve('https://example.com/image.png'), 1500); // Simulated upload delay
          });
        },
      }),
      Heading,
    ],
    content: '<p>Hello World! 🌎️</p>',
  });

  return (
    <div>
      <div>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          H1
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
          H2
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
          H3
        </button>
        {/* <button onClick={() => editor.chain().focus().insertContent('<table><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>').run()}>
          Insert Table
        </button> */}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
