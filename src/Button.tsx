import React from "react";
interface Props {
    border: string;
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    width: string;
}
export const Button: React.FC<Props> = ({
    border,
    height,
    onClick,
    width
}) => {
    return (
        <button
        onClick={onClick}
        style={{
            border,
            height,
            width
        }}
        >
            
        </button>
    );
}