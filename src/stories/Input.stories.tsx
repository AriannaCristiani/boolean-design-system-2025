import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/Input/Input";

const meta: Meta = {
    title: "Components/Input",
    parameters: {
        layout: "centered",
    },
    args: {
        label: "Label",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: ({ label }) => <Input label={label} kind="text" />,
};

export const Select: Story = {
    render: ({ label }) => (
        <Input
            label={label}
            options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
            ]}
            kind="select"
        />
    ),
};

export const Radio: Story = {
    render: ({ label }) => (
        <Input
            label={label}
            options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
            ]}
            kind="radio"
            name="Hello"
        />
    ),
};