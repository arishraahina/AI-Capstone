# Accessibility Component Notes

## Handwritten Implementation

The initial `Modal`, `Tabs`, and `Disclosure` components were written manually from scratch using React, TypeScript, and standard HTML elements to follow the W3C WAI-ARIA Authoring Practices.

- **Modal Dialog (`src/components/Modal.tsx`)**: Uses `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, focus restoration when closed, and manual `Tab`/`Shift + Tab` focus trapping.
- **Tabs (`src/components/Tabs.tsx`)**: Uses `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls`, `aria-labelledby`, roving `tabIndex` values, and Arrow/Home/End keyboard navigation.
- **Disclosure (`src/components/Disclosure.tsx`)**: Uses a native `<button>` with `aria-expanded` and `aria-controls` to toggle the visibility of the associated content.

## What shadcn/ui Handles That I Missed

### 1. Background Interaction and Isolation

**My Handwritten Implementation**

My `Modal.tsx` uses a fixed overlay and manually manages keyboard focus inside the dialog. However, it does not include the additional document-level behavior provided by Radix's dialog primitives, such as automatically managing the rest of the document while the dialog is open.

**shadcn/ui / Radix Implementation**

The shadcn Dialog is built on `@radix-ui/react-dialog`, which provides additional dialog infrastructure around the content, including modal behavior, focus management, dismissal handling, and document-level interaction handling.

**Why It Matters**

A production-ready modal needs to manage not only focus inside the dialog but also interaction with the rest of the document. These additional behaviors make the component more robust across different layouts and usage scenarios.

### 2. Portal Rendering

**My Handwritten Implementation**

My `Modal.tsx` renders the dialog inline inside the parent React component tree where the `<Modal>` is placed.

**shadcn/ui / Radix Implementation**

The shadcn Dialog uses `DialogPrimitive.Portal` to render the dialog content outside the normal parent DOM hierarchy, typically under `document.body`.

**Why It Matters**

Rendering through a portal helps prevent dialogs from being clipped or affected by parent containers with CSS properties such as `overflow`, `transform`, or stacking contexts. This makes the dialog more robust when used inside complex layouts.

### 3. Support for Vertical Orientation and Manual Activation in Tabs

**My Handwritten Implementation**

My `Tabs.tsx` implements horizontal tab navigation using `ArrowLeft` and `ArrowRight` and automatically selects a tab when keyboard focus moves to it.

**shadcn/ui / Radix Implementation**

The shadcn Tabs component is built on `@radix-ui/react-tabs` and provides support for both horizontal and vertical orientations. It also supports an `activationMode` option that can be used for manual tab activation.

**Why It Matters**

Supporting different orientations and activation modes makes the component more reusable and allows developers to choose behavior appropriate for different interfaces, including cases where changing tabs may trigger expensive operations.

## What I Learned

Inspecting shadcn/ui and Radix UI showed me that accessible components require more than basic ARIA attributes. Production-ready components also need robust focus management, keyboard interaction, document-level behavior, portal rendering, and support for different usage scenarios.

Building the components manually first helped me understand the accessibility requirements before comparing them with a production-oriented implementation.

## Verification

The project was verified using:

- `npm run build`
- `npm run lint`

Both checks completed successfully with 0 errors and 0 warnings.