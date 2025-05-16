import Card from "@/components/Card";
import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Card>;
type Story = StoryObj<StoryProps>;

const meta: Meta<StoryProps> = {
  component: Card,
  args: {
    type: "primary",
    card: {
      id: 1,
      name: "primary",
      price: 200,
      image: "/poster.webp",
    },
  },
  argTypes: {
    type: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    card: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

export const primary: Story = {
  args: {},
  argTypes: {},

  render: (args) => (
    <div className="grid grid-cols-3 h-screen p-5 ">
      <Card {...args} />
    </div>
  ),
};

export const secondary: Story = {
  args: {
    type: "secondary",
  },
  argTypes: {
    type: {
      control: {
        type: "select",
      },
    },
    card: {
      control: {
        type: "object",
      },
    },
  },

  render: (args) => (
    <div className="grid grid-cols-3 h-screen p-5 ">
      <Card {...args} />
    </div>
  ),
};
