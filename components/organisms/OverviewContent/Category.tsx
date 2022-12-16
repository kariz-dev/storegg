import Image from "next/image";
import { ReactNode } from "react";

interface CategoriItemProps {
  children: ReactNode;
  icon: "ic-desktop" | "ic-mobile" | "ic-categories";
  price: number;
}

export default function Categori(props: CategoriItemProps) {
  const { children, icon, price } = props;

  // Create currency formatter.
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const nominal = formatter.format(price);

  return (
    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/${icon}.svg`} alt={icon} width={60} height={60} />
          <p className="color-palette-1 mb-0 ms-12">{children}</p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{nominal}</p>
        </div>
      </div>
    </div>
  );
}
