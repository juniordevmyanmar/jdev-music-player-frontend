import React from "react";

interface buttonProps {
  text: string;
  width?: string;
  loading?: boolean;
}

function Button({ text, width,loading }: buttonProps) {
  return (
    <button
      className={`${loading ? 'bg-yellow-100' : 'bg-primary'}  ${
        width ? width : "w-full"
      } p-3 text-center rounded-md text-buttonContent`}
      disabled={loading}
    >
      {loading ? 'loading' : text}
    </button>
  );
}

export default Button;
