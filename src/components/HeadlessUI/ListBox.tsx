import React from "react";
import { useState } from "react";
import { Listbox as Lb } from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export const ListBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <Lb value={selectedPerson} onChange={setSelectedPerson}>
      <Lb.Button>{selectedPerson.name}</Lb.Button>
      <Lb.Options>
        {people.map((person) => (
          <Lb.Option
            key={person.id}
            value={person}
            disabled={person.unavailable}
          >
            {person.name}
          </Lb.Option>
        ))}
      </Lb.Options>
    </Lb>
  );
};
