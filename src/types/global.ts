import React from "react";

export interface ComponentProps{
    title?: string;
    children: React.ReactNode | React.ReactElement;
    style?: React.CSSProperties;
} 