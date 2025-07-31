import React from "react";

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center my-8">
    <div className="animate-spin h-8 w-8 border-4 border-blue-400 border-t-transparent rounded-full" />
  </div>
);

export default LoadingSpinner;
