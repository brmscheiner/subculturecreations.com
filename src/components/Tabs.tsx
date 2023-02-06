import React, { useState } from 'react';

export interface TabItem {
  label: string;
  id: string;
  default?: boolean;
  renderContent: () => React.ReactNode;
}

const sharedClasses = "inline-block px-4 py-2"

export default function Tabs(props: { items: TabItem[] }) {
  const { items } = props;
  const [activeItem, setActiveItem] = useState<TabItem>(items.find((item) => item.default) || items?.[0]);
  return (
    <>
  <ul className="flex flex-wrap font-medium text-center border-b-2 border-black">
      {items.map((item) => {  
        const active = item.label === activeItem.label;
        const classNames = active 
          ? `${sharedClasses} border-x-2 border-t-2 border-black bg-gray-100 active`
          : `${sharedClasses} hover:text-gray-700 hover:bg-gray-200`;
        return (
          <li key={item.label} className="mr-2">
              <button onClick={() => setActiveItem(item)} className={classNames}>{item.label}</button>
          </li>
        )
      })}
  </ul>
  <div className="mt-3">
    {activeItem.renderContent()}
  </div>
  </>
  );
}