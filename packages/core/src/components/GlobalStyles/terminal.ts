/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import { css } from 'styled-components';

const terminalStyles = css`
  .xterm {
    cursor: text;
    position: relative;
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    letter-spacing: 0;
    background-color: #000000;
    color: #ffffff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  }

  .xterm.focus,
  .xterm:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }

  .xterm .xterm-helpers {
    position: absolute;
    top: 0;
    /**
     * The z-index of the helpers must be higher than the canvases in order for
     * IMEs to appear on top.
     */
    z-index: 5;
  }

  .xterm .xterm-helper-textarea {
    padding: 0;
    border: 0;
    margin: 0;
    /* Move textarea out of the screen to the far left, so that the cursor is not visible */
    position: absolute;
    opacity: 0;
    left: -9999em;
    top: 0;
    width: 0;
    height: 0;
    z-index: -5;
    /** Prevent wrapping so the IME appears against the textarea at the correct position */
    white-space: nowrap;
    overflow: hidden;
    resize: none;
  }

  .xterm .composition-view {
    background: #000000;
    color: #ffffff;
    display: none;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
    border-radius: 4px;
    padding: 4px 8px;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .xterm .composition-view.active {
    display: block;
  }

  .xterm .xterm-viewport {
    /* On OS X this is required in order for the scroll bar to appear fully opaque */
    background-color: #000000;
    overflow-y: scroll;
    cursor: default;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  }

  .xterm .xterm-viewport::-webkit-scrollbar {
    width: 8px;
  }

  .xterm .xterm-viewport::-webkit-scrollbar-track {
    background: transparent;
  }

  .xterm .xterm-viewport::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  .xterm .xterm-viewport::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  .xterm .xterm-screen {
    position: relative;
  }

  .xterm .xterm-screen canvas {
    position: absolute;
    left: 0;
    top: 0;
  }

  .xterm .xterm-scroll-area {
    visibility: hidden;
  }

  .xterm-char-measure-element {
    display: inline-block;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: -9999em;
    line-height: 1.5;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    font-weight: 400;
  }

  .xterm.enable-mouse-events {
    /* When mouse events are enabled (eg. tmux), revert to the standard pointer cursor */
    cursor: default;
  }

  .xterm.xterm-cursor-pointer,
  .xterm .xterm-cursor-pointer {
    cursor: pointer;
  }

  .xterm.column-select.focus {
    /* Column selection mode */
    cursor: crosshair;
  }

  .xterm .xterm-accessibility,
  .xterm .xterm-message {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 10;
    color: transparent;
  }

  .xterm .live-region {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .xterm-dim {
    opacity: 0.6;
  }

  .xterm-underline-1 {
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.8);
  }

  .xterm-underline-2 {
    text-decoration: double underline;
    text-decoration-color: rgba(255, 255, 255, 0.8);
  }

  .xterm-underline-3 {
    text-decoration: wavy underline;
    text-decoration-color: rgba(255, 255, 255, 0.8);
  }

  .xterm-underline-4 {
    text-decoration: dotted underline;
    text-decoration-color: rgba(255, 255, 255, 0.8);
  }

  .xterm-underline-5 {
    text-decoration: dashed underline;
    text-decoration-color: rgba(255, 255, 255, 0.8);
  }

  .xterm-strikethrough {
    text-decoration: line-through;
    text-decoration-color: rgba(255, 255, 255, 0.8);
  }

  .xterm-screen .xterm-decoration-container .xterm-decoration {
    z-index: 6;
    position: absolute;
  }

  .xterm-decoration-overview-ruler {
    z-index: 7;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }

  .xterm-decoration-top {
    z-index: 2;
    position: relative;
  }

  /* Selection styling */
  .xterm .xterm-selection div {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }

  /* Cursor styling */
  .xterm .xterm-cursor-layer .xterm-cursor {
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }

  .xterm .xterm-cursor-layer .xterm-cursor.xterm-cursor-blink {
    animation: xterm-cursor-blink 1.2s ease-in-out infinite;
  }

  @keyframes xterm-cursor-blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  /* Link styling */
  .xterm .xterm-link {
    color: #ffffff;
    text-decoration: underline;
    text-decoration-color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
  }

  .xterm .xterm-link:hover {
    text-decoration-color: #ffffff;
  }

  /* Error text styling */
  .xterm .xterm-color-1 {
    color: #ff6b6b;
  }

  /* Success text styling */
  .xterm .xterm-color-2 {
    color: #51cf66;
  }

  /* Warning text styling */
  .xterm .xterm-color-3 {
    color: #ffd43b;
  }

  /* Info text styling */
  .xterm .xterm-color-4 {
    color: #74c0fc;
  }

  /* Muted text styling */
  .xterm .xterm-color-8 {
    color: rgba(255, 255, 255, 0.6);
  }

  /* Bright text styling */
  .xterm .xterm-color-15 {
    color: #ffffff;
    font-weight: 500;
  }
`;

export default terminalStyles;
