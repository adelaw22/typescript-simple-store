import React from "react";

export interface ComponentProps{
    title?: string;
    children: React.ReactNode | React.ReactElement;
    style?: React.CSSProperties;
} 

export interface CartItem {
    id: string;
    quantity: number;
    // Define other properties of your cart item here
  }