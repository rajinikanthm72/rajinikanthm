export const validateSchema = (schema: any) => {
  if (!schema.formTitle || typeof schema.formTitle !== "string") {
    throw new Error("Schema must have a 'formTitle'.");
  }
  if (!schema.fields || !Array.isArray(schema.fields)) {
    throw new Error("Schema must have a 'fields' array.");
  }
};
