import { useState } from "react";

type ExpandableTextProps = {
  text?: string;
  className?: string;
  collapsedLines?: number; 
  showMoreLabel?: string;
  showLessLabel?: string;
};

export default function ExpandableText({
  text,
  className = "",
  showMoreLabel = "Ver más",
  showLessLabel = "Ver menos",
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const paragraphs = text.split('\n').filter(Boolean);
  const firstParagraph = paragraphs[0];
  const restParagraphs = paragraphs.slice(1);

  return (
    <div className={`whitespace-pre-line ${className}`}>
      {firstParagraph}
      {restParagraphs.length > 0 && !expanded && (
        <span>
          ...{" "}
          <button className="text-blue-600 underline" onClick={() => setExpanded(true)}>
            {showMoreLabel}
          </button>
        </span>
      )}
      {expanded && (
        <span>
          {"\n"}
          {restParagraphs.join('\n')}
          <button className="text-blue-600 underline ml-2" onClick={() => setExpanded(false)}>
            {showLessLabel}
          </button>
        </span>
      )}
    </div>
  );
}