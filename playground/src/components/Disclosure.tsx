import React, { useState, useId } from 'react';

export interface DisclosureProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export const Disclosure: React.FC<DisclosureProps> = ({
  title,
  children,
  defaultExpanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const panelId = useId();

  const toggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="disclosure-container">
      <button
        type="button"
        className="disclosure-button"
        aria-expanded={isExpanded}
        aria-controls={panelId}
        onClick={toggle}
      >
        <span className="disclosure-title">{title}</span>
        <span
          className={`disclosure-chevron ${isExpanded ? 'open' : ''}`}
          aria-hidden="true"
        >
          ▲
        </span>
      </button>
      <div
        id={panelId}
        className={`disclosure-panel ${isExpanded ? 'open' : 'collapsed'}`}
        hidden={!isExpanded}
      >
        {children}
      </div>
    </div>
  );
};
