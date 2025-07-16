/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import styled from 'styled-components';

export const Main = styled.div<{ $headerHight: number }>`
  padding-top: ${({ $headerHight }) => $headerHight}px;
  min-width: 1164px;
  height: 100%;
  background-color: #ffffff;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.005em;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow-x: auto;
  overflow-y: auto;

  /* Modern scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    transition: background-color 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* Responsive behavior */
  @media (max-width: 1200px) {
    min-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media (max-width: 768px) {
    padding-left: 12px;
    padding-right: 12px;
    font-size: 13px;
  }

  @media (max-width: 640px) {
    padding-left: 8px;
    padding-right: 8px;
  }

  /* Focus management for accessibility */
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid rgba(0, 0, 0, 0.2);
    outline-offset: -2px;
  }

  /* Loading state */
  &[data-loading="true"] {
    opacity: 0.6;
    pointer-events: none;
    cursor: wait;
  }

  /* Error state */
  &[data-error="true"] {
    border-left: 3px solid #ff1744;
    background-color: #fafafa;
  }

  /* Dark mode support (optional) */
  @media (prefers-color-scheme: dark) {
    &[data-theme="auto"] {
      background-color: #000000;
      color: #ffffff;

      &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.2);
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(255, 255, 255, 0.3);
      }

      &:focus-visible {
        outline-color: rgba(255, 255, 255, 0.3);
      }

      &[data-error="true"] {
        border-left-color: #ff6b6b;
        background-color: #111111;
      }
    }
  }

  /* Print styles */
  @media print {
    min-width: auto;
    height: auto;
    padding: 0;
    background: white;
    color: black;
    overflow: visible;
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    border: 1px solid currentColor;

    &::-webkit-scrollbar-thumb {
      background-color: currentColor;
      opacity: 0.5;
    }
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &::-webkit-scrollbar-thumb {
      transition: none;
    }
  }
`;
