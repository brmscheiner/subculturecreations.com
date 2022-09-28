import React from 'react';
import logo from '../assets/logo.svg';

function Item(props: { label: string, url: string }) {
  const { label, url } = props;
  return (
    <a href={url} className="text-base font-medium text-gray-900 hover:text-gray-700">{label}</a>
  )
}

export default function Navigation() {
  return (
    <div>
      <div className="hidden xl:flex fixed flex-col ml-20">
        <a href="/" className="mb-2">
          <img className="h-36 w-auto" src={logo} alt="View home page" />
        </a>
        <div className="flex flex-col ml-8">
          <Item label="About" url="/about" />
          {/* <Item label="Articles" url="/articles" /> */}
          <Item label="Photos" url="/photos" />
          <Item label="Projects" url="/projects" />
        </div>
      </div>
      <div className="xl:hidden w-full border-b-2 border-b-slate-800 flex items-center justify-between p-4">
        <a href="/" className="shrink-0">
          <img className="h-20 w-auto" src={logo} alt="View home page" />
        </a>
        <div className="flex flex-wrap justify-end space-x-4">
          <Item label="About" url="/about" />
          {/* <Item label="Articles" url="/articles" /> */}
          <Item label="Photos" url="/photos" />
          <Item label="Projects" url="/projects" />
        </div>
      </div>
    </div>
  )
}