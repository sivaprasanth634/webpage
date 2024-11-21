import React from 'react';

type MenuItemProps = {
  name: string;
  description: string;
  price: string;
};

export const MenuItem = ({ name, description, price }: MenuItemProps) => (
  <div className="border-b border-emerald-100 pb-6 mb-6 last:border-0">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold text-emerald-900">{name}</h3>
        <p className="text-emerald-700 mt-1">{description}</p>
      </div>
      <span className="text-lime-600 font-semibold">{price}</span>
    </div>
  </div>
);