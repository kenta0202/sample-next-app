import React from "react";
import { Menu as Mn } from "@headlessui/react";

export const Menu = () => {
  return (
    <Mn>
      <Mn.Button>More</Mn.Button>
      <Mn.Items>
        <Mn.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Mn.Item>
        <Mn.Item>
          {({ active }) => (
            <a
              className={`${active && "bg-blue-500"}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Mn.Item>
        <Mn.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Mn.Item>
      </Mn.Items>
    </Mn>
  );
};
