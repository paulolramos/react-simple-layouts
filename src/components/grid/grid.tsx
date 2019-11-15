import * as React from "react";
import css from "./grid.module.css";

type Props = {
  columns: string;
  rows?: string;
  gap?: string;
  children: React.ReactNode;
};

export const Grid = ({
  columns,
  rows = "1",
  gap = "10px",
  children
}: Props) => {
  const styles: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridGap: gap
  };

  return (
    <div className={css.grid} style={styles}>
      {children}
    </div>
  );
};
