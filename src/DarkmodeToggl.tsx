import React, { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 border rounded bg-gray-200 dark:bg-gray-700"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
