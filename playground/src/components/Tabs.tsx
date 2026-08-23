import React, { useState, useRef } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTabId }) => {
  const [activeTabId, setActiveTabId] = useState<string>(
    defaultTabId || (tabs.length > 0 ? tabs[0].id : '')
  );

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  if (tabs.length === 0) {
    return null;
  }

  const focusAndSelectTab = (index: number) => {
    const targetTab = tabs[index];
    if (targetTab) {
      setActiveTabId(targetTab.id);
      tabRefs.current[index]?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        nextIndex = (index + 1) % tabs.length;
        focusAndSelectTab(nextIndex);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        focusAndSelectTab(nextIndex);
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        focusAndSelectTab(nextIndex);
        break;
      case 'End':
        event.preventDefault();
        nextIndex = tabs.length - 1;
        focusAndSelectTab(nextIndex);
        break;
      default:
        break;
    }
  };

  return (
    <div className="tabs-container">
      <div role="tablist" aria-label="Tabbed Content" className="tabs-list">
        {tabs.map((tab, index) => {
          const isSelected = tab.id === activeTabId;
          const tabHeaderId = `tab-${tab.id}`;
          const tabPanelId = `panel-${tab.id}`;

          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              id={tabHeaderId}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={tabPanelId}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`tab-button ${isSelected ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => {
        const isSelected = tab.id === activeTabId;
        const tabHeaderId = `tab-${tab.id}`;
        const tabPanelId = `panel-${tab.id}`;

        return (
          <div
            key={tab.id}
            id={tabPanelId}
            role="tabpanel"
            aria-labelledby={tabHeaderId}
            tabIndex={0}
            hidden={!isSelected}
            className={`tab-panel ${isSelected ? 'active' : ''}`}
          >
            {tab.content}
          </div>
        );
      })}
    </div>
  );
};
