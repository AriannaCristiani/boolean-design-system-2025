import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/Badge";

const meta: Meta = {
    title: "Badge",
    component: Badge,
};

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {
    render: () => <Badge />,
}