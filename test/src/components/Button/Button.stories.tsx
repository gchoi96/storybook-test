import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const One = Template.bind({});
One.args = {
  text: "One",
};
export const Two = Template.bind({});
Two.args = {
  text: "Two",
};
export const Three = Template.bind({});
Three.args = {
  text: "Three",
};
