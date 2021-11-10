import React from "react";
import { Popover as PO } from "@headlessui/react";
import Img from "next/image";
export const Popover = () => {
  return (
    <PO className="relative">
      <PO.Button>Solutions</PO.Button>

      <PO.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>
        <Img src="/solutions.jpg" alt="" />
      </PO.Panel>
    </PO>
  );
};
