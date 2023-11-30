import React from "react";
import { Accordion } from "./Accordion";

export const FAQ = () => {
  return (
    <div className="p-4 bg-gray-200 rounded-lg">
      <Accordion
        title="Do you prefer Android or iOS?"
        answer="I like to use iOS products"
      />
      <Accordion
        title="Do you prefer writing CSS or tailwind"
        answer="I like to use tailwind"
      />
      <Accordion title="Firebase or Supabase" answer="I am using Supabase" />
    </div>
  );
};
