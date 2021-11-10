import React from "react";
import { useState } from "react";
import { RadioGroup as RG } from "@headlessui/react";

export const RadioGroup = () => {
  const [plan, setPlan] = useState("startup");

  return (
    <RG value={plan} onChange={setPlan}>
      <RG.Label>Plan</RG.Label>
      <RG.Option value="startup">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>Startup</span>
        )}
      </RG.Option>
      <RG.Option value="business">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>Business</span>
        )}
      </RG.Option>
      <RG.Option value="enterprise">
        {({ checked }) => (
          <span className={checked ? "bg-blue-200" : ""}>Enterprise</span>
        )}
      </RG.Option>
    </RG>
  );
};
