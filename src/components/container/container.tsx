import * as React from "react";
import css from "./container.module.css";

type Props = {
  bgColor?: string;
  textColor?: string;
  top?: string;
  bottom?: string;
  initialSides?: string;
  children: React.ReactNode;
};

export const Container = ({
  bgColor = "#fff",
  textColor = "#000",
  top = "1.2rem",
  bottom = "1.2rem",
  initialSides = "5%",
  children
}: Props) => {
  const styles: React.CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
    padding: `${top} ${initialSides} ${bottom} ${initialSides}`
  };

  return (
    <section className={css.container} style={styles}>
      <div className={css.inner}>{children}</div>
    </section>
  );
};
