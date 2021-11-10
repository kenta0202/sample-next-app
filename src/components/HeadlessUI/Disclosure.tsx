import React from "react";
import { Disclosure as Dis } from "@headlessui/react";

export const Disclosure = () => {
  return (
    <Dis>
      <Dis.Button className="py-2">Is team pricing available?</Dis.Button>
      <Dis.Panel className="text-gray-500">
        Yes! You can purchase a license that you can share with your entire
        team.
      </Dis.Panel>
    </Dis>
  );
};
