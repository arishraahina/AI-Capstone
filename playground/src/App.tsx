import { useState } from 'react';
import { Modal } from './components/Modal';
import { Tabs, type TabItem } from './components/Tabs';
import { Disclosure } from './components/Disclosure';
import './App.css';

export function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const sampleTabs: TabItem[] = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div>
          <h3>Overview Section</h3>
          <p>
            Welcome to the accessible design system showcase! This tab demonstrates the WAI-ARIA
            Tabs design pattern with standard keyboard interactions.
          </p>
        </div>
      ),
    },
    {
      id: 'features',
      label: 'Features',
      content: (
        <div>
          <h3>Features Section</h3>
          <ul>
            <li>Full keyboard accessibility (Arrow Left/Right, Home, End)</li>
            <li>ARIA roles: tablist, tab, tabpanel</li>
            <li>Proper focus management and tabIndex attributes</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      content: (
        <div>
          <h3>Settings Section</h3>
          <p>
            Customize component behavior or inspect accessibility attributes using browser dev
            tools.
          </p>
          <button type="button" className="demo-btn">
            Sample Setting Action
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Accessible UI Components</h1>
        <p>A demonstration of handwritten, fully accessible React + TypeScript components.</p>
      </header>

      <main className="app-main">
        {/* SECTION 1: MODAL DIALOG */}
        <section className="component-section">
          <h2>1. Modal Dialog</h2>
          <p>
            Click the button below or press <kbd>Enter</kbd>/<kbd>Space</kbd> to open the modal
            dialog. Focus will be trapped inside the modal until closed.
          </p>
          <button
            type="button"
            className="action-btn"
            onClick={() => setIsModalOpen(true)}
          >
            Open Modal
          </button>

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Accessible Modal Dialog"
          >
            <p>
              This modal dialog follows WAI-ARIA guidelines. Keyboard focus is trapped inside while
              open.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="modal-form">
              <label htmlFor="modal-input">User Name:</label>
              <input
                id="modal-input"
                type="text"
                placeholder="Enter your name"
                className="text-input"
              />
              <div className="modal-actions">
                <button
                  type="button"
                  className="secondary-btn"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="action-btn"
                  onClick={() => {
                    alert('Confirmed!');
                    setIsModalOpen(false);
                  }}
                >
                  Confirm
                </button>
              </div>
            </form>
          </Modal>
        </section>

        {/* SECTION 2: TABS */}
        <section className="component-section">
          <h2>2. Tabs Component</h2>
          <p>
            Use <kbd>&rarr;</kbd> and <kbd>&larr;</kbd> arrow keys to switch tabs. Press{' '}
            <kbd>Home</kbd> to jump to the first tab, and <kbd>End</kbd> to jump to the last tab.
          </p>
          <Tabs tabs={sampleTabs} defaultTabId="overview" />
        </section>

        {/* SECTION 3: DISCLOSURE */}
        <section className="component-section">
          <h2>3. Disclosure (Accordion) Component</h2>
          <p>
            Press <kbd>Tab</kbd> to focus the trigger button, then press <kbd>Enter</kbd> or{' '}
            <kbd>Space</kbd> to expand or collapse the content.
          </p>
          <div className="disclosure-list">
            <Disclosure title="What is WAI-ARIA?" defaultExpanded={true}>
              <p>
                WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) defines
                ways to make Web content and Web applications more accessible to people with
                disabilities.
              </p>
            </Disclosure>
            <Disclosure title="Why focus trapping matters in modals?">
              <p>
                Focus trapping ensures screen reader and keyboard-only users cannot accidentally tab
                out of an active modal dialog into background elements.
              </p>
            </Disclosure>
            <Disclosure title="How keyboard navigation works in Tabs?">
              <p>
                Tabs use a single tab stop (`tabIndex=0` on active tab). Navigation between tabs is
                handled using arrow keys, following standard desktop UI paradigms.
              </p>
            </Disclosure>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
