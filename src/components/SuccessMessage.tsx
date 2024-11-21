import React from "react";

interface SuccessMessageProps {
  visible: boolean;
  onClose: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-lg">
        <p>Form successfully submitted!</p>
        <button
          onClick={onClose}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
