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
                max-width: calc(550rem / 16);
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
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
                display: grid;
                grid-template-columns: subgrid;
                gap: 1ch;
                grid-column: 2/4;
                align-items: center;
            }
            .info {
                background-color:rgb(21, 104, 104);
                height: var(--story-spacing);
                border-radius: 2px;
                width: var(--story-spacing);
                display: block;
         }
        `}</style>
        {children}
    </>;
}

const dimensions = ["zero", "xs", "sm", "md", "lg", "xl"] as const;

export const Default: Story = {
    render: () => <>

        <h1>Spacing</h1>
        <p style={{ maxWidth: "55ch" }}>
            Our spacing variables use a clamping mechanism to ensure that the
            spacing is scalable across different screen sizes. * This is done by
            using the `clamp()` function. * The minimum viewport width is 400px and
            the maximum is 1200px.
        </p>
        <Style>
            <dl>
                {dimensions.map((key) => (
                    <React.Fragment key={key}>
                        <dt>{key}</dt>
                        <dd style={{ '--story-spacing': `var(--spacing-${key})` } as React.CSSProperties}>
                            <span>
                                <SpaceCalculation value={`--spacing-${key}`} />
                            </span>
                            <span className="info" />
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </Style>
    </>,
}

