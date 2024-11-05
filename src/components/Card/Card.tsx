import { PropsWithChildren, ReactNode } from 'react';

import './Card.css';

interface ICardProps {
  title: string,
  text: string,
  btnLabel: string,
  children?: ReactNode,
}

export default function Card(props: PropsWithChildren<ICardProps>) {
  const {title, text, btnLabel, children} = props;
  return (
    <div className="card" style={{width: '18rem'}}>
      {children && children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{btnLabel}</a>
      </div>
    </div>
  );
}
