import { FC } from 'react';

type props = {
  children : React.ReactNode;
}

export const DarkLayout = (props:props) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{props.children}</div>
    </div>
  );
};
