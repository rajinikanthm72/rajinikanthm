import React from 'react';

interface FieldProps {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  validation?: {
    pattern: RegExp;
    message: string;
  };
  options?: { value: string; label: string }[];
}

const FormGenerator: React.FC<{
  formTitle: string;
  formDescription: string;
  fields: FieldProps[];
}> = ({ formTitle, formDescription, fields }) => {
  return (
    <div>
      <h2>{formTitle}</h2>
      <p>{formDescription}</p>
      <form>
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === 'text' || field.type === 'email' ? (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : field.type === 'select' ? (
              <select id={field.name} name={field.name} required={field.required}>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : null}
            {field.validation && (
              <p className="error">{field.validation.message}</p>
            )}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormGenerator;
