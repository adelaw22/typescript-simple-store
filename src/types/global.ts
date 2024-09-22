import React from "react";

export interface ComponentProps{
    title?: string;
    children: React.ReactNode | React.ReactElement;
    style?: React.CSSProperties;
} 

export interface productDataType{
    id: number;
    productName: string;
    price: string;
    description ?: string;
    img: string;
  }

export interface CartItem extends productDataType{
    quantity: number;
}

export interface ISectionTemp{
    sectionHeader: string;
    IndexOfFirstItem?: number;
    lengthOfItems?: number;
}