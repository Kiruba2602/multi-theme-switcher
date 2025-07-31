import React from "react";

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="bg-red-100 text-red-800 px-4 py-2 rounded my-4">{message}</div>
);

export default ErrorMessage;
