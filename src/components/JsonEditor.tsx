import React, { useState } from "react";

interface JsonEditorProps {
  onSchemaChange: (json: string) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onSchemaChange }) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    onSchemaChange(e.target.value);
  };

  return (
    <textarea
      value={input}
      onChange={handleChange}
      className="w-full h-96 p-2 border rounded"
      placeholder="Enter JSON schema here..."
    />
  );
};

export default JsonEditor;
