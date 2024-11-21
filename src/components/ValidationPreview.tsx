import React from "react";

interface ValidationPreviewProps {
  schema: any;
}

const ValidationPreview: React.FC<ValidationPreviewProps> = ({ schema }) => {
  if (!schema || !schema.fields) return <p>No validation rules available.</p>;

  return (
    <div>
      <h2 className="text-lg font-bold">Validation Rules</h2>
      <ul className="list-disc pl-4">
        {schema.fields.map((field: any) => (
          <li key={field.id}>
            <strong>{field.label}:</strong> {field.validation?.regex || "No regex pattern"} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValidationPreview;
