
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
}: Props) {
  return (
    <div className="section-heading">
      <span className="section-eyebrow">{eyebrow}</span>

      <h2 className="section-title">{title}</h2>

      {text && <p className="section-description">{text}</p>}
    </div>
  );
}
