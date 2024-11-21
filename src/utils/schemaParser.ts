// src/utils/schemaParser.ts
export const parseJSONSchema = (schema: string) => {
  try {
    return JSON.parse(schema);
  } catch (error) {
    throw new Error("Invalid JSON schema");
  }
};
