import { ReactNode } from "react";

type navItem = {
  navName: string;
  navLink: string;
};

interface FlashItemsProps {
  children: ReactNode;
}

type itemsProps = {
  discount: string;
  images: string[];
  productImage: string;
  description: string;
  price: string;
  discountedPrice: string;
};
type itemsProps2 = {
  discount: string;
  images: string[];
  productImage: string;
  description: string;
  price: string;
  discountedPrice: string;
};
