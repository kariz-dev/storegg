import React from "react";
import Image from "next/image";
import cx from "classnames";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  active?: boolean;
  href: string;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, active, href = '/member' } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });
  return (
    <div className={classItem}>
      <Image
        className="icon me-3"
        src={`/icon/ic-menu-${title}.svg`}
        alt={`menu ${title}`}
        width={25}
        height={25}
      />
      <p className="item-title m-0">
        <Link href={href} aria-current="page" className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
