import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
    title: "Atoms/Spacing",
    parameters: {
        layout: 'centered'
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const SpaceCalculation = ({ value }: { value: string }) => {
    const spacing = React.useMemo(() => {
        const bodyStyle = window.getComputedStyle(document.body);
        return bodyStyle.getPropertyValue(value);
    }, [value]);
    return <span>{spacing}</span>;
};

const Style: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <>
        <style>{`
            dl {
                font-size: 1rem;
                border: 1px solid #ccc;
                max-width: calc(500rem / 16);
                display: grid;
                grid-template-columns: 1fr 1fr;
                border-bottom: none;
                border-radius: 5px;
            }
            dt {
                font-weight: 600;
                padding: var(--spacing-sm)  var(--spacing-md);
                border-bottom: 1px solid #ccc;
            }
            dd {
                border-bottom: 1px solid #ccc;
                padding: var(--spacing-sm)  var(--spacing-md);
                font-family: monospace;
                text-align: right;
            }
        `}</style>
        {children}
    </>;
}

export const Default: Story = {
    render: () => <>
        <Style>
            <dl>
                {["zero", "xs", "sm", "md", "lg", "xl"].map((key) => (
                    <React.Fragment key={key}>
                        <dt>{key}</dt>
                        <dd>
                            <SpaceCalculation value={`--spacing-${key}`} />
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </Style>
    </>,
}