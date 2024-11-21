import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface EditorProps {
  schema: string;
  onChange: (value: string) => void;
  error: string | null;
}

const Editor: React.FC<EditorProps> = ({ schema, onChange, error }) => {
  // Handle copy to clipboard action
  const handleCopyClick = () => {
    navigator.clipboard.writeText(schema).then(() => {
      alert("JSON schema copied to clipboard!");
    });
  };

  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <textarea
        value={schema}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-60 p-2 mb-4 rounded border"
        placeholder="Enter JSON schema here..."
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <SyntaxHighlighter language="json" style={dracula} className="mb-4">
        {schema}
      </SyntaxHighlighter>

      <button
        onClick={handleCopyClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Copy Form JSON
      </button>
    </div>
  );
};

export default Editor;
