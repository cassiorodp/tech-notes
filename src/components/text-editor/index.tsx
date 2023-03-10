import MDEditor from '@uiw/react-md-editor';
import { useEffect, useRef, useState } from 'react';
import './index.css';

const TextEditor: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('# Start writing!');
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        editorRef.current &&
        event.target &&
        editorRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div className="text-editor" ref={editorRef}>
        <MDEditor onChange={(typedText) => setText(typedText || '')} />
      </div>
    );
  }

  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={text} />
      </div>
    </div>
  );
};

export default TextEditor;
