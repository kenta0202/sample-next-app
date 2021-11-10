import React from "react";
import { useState } from "react";
import { Dialog as Di } from "@headlessui/react";

export const Dialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
          className="py-2 px-4 text-sm font-medium text-white bg-black bg-opacity-20 hover:bg-opacity-30 rounded-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus:outline-none"
        >
          Open dialog
        </button>
        <button
          type="button"
          onClick={() => {
            setIsOpen(false);
          }}
          className="py-2 px-4 text-sm font-medium text-white bg-black bg-opacity-20 hover:bg-opacity-30 rounded-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus:outline-none"
        >
          Close dialog
        </button>
      </div>
      <Di
        className="fixed inset-0 z-10 bg-red-300"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Di.Overlay />

        <Di.Title>Deactivate account</Di.Title>
        <Di.Description>
          This will permanently deactivate your account
        </Di.Description>

        <p>
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed. This action cannot be undone.
        </p>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Di>
    </>
  );
};
