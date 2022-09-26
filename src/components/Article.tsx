import React from 'react';
import Card from './Card';

export default function Article(props: { title: string, subtitle?: string, content: string }) {
  const { title, subtitle, content } = props;
  return (
    <Card>
      <p className="text-2xl">{title}</p>
      {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
      <p className="mt-2">{content}</p>
    </Card>
  )
}