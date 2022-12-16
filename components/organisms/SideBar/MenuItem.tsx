import React from "react";
import Image from "next/image";
import cx from "classnames";

interface MenuItemProps {
  title: string;
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, active } = props;
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
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
