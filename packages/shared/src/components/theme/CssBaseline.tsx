import { createGlobalStyle } from 'styled-components';

const CssBaseline = createGlobalStyle`
  html,
  body {
    background-color: ${({ theme }) => theme.palette.background || '#000'};
    color: ${p => p.theme.palette.foreground || '#fff'};
  }

  html {
    font-size: ${({ theme }) => theme.font.fontSizeBase || '16px'};
    --kubed-icons-background: ${p => p.theme.palette.background || '#000'};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    font-family: ${p => p.theme.font.sans || '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'};
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  p,
  small {
    font-weight: 400;
    color: inherit;
    letter-spacing: -0.01em;
    font-family: inherit;
  }

  p {
    margin: 1.5rem 0;
    font-size: 1rem;
    line-height: 1.7;
    color: ${p => p.theme.palette.foreground || 'rgba(255, 255, 255, 0.9)'};
  }

  small {
    margin: 0;
    line-height: 1.5;
    font-size: 0.875rem;
    color: ${p => p.theme.palette.foreground || 'rgba(255, 255, 255, 0.7)'};
  }

  b,
  strong {
    font-weight: 600;
  }

  span {
    font-size: inherit;
    color: inherit;
    font-weight: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    cursor: pointer;
    font-size: inherit;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-box-align: center;
    align-items: center;
    color: ${p => p.theme.palette.link || '#fff'};
    text-decoration: none;
    transition: all 0.2s ease;
    border-bottom: 1px solid transparent;
  }

  a:hover {
    color: ${p => p.theme.palette.linkHover || 'rgba(255, 255, 255, 0.8)'};
    border-bottom-color: currentColor;
  }

  a:focus {
    outline: 2px solid rgba(255, 255, 255, 0.3);
    outline-offset: 2px;
    border-radius: 2px;
  }

  ul,
  ol {
    padding: 0;
    list-style-type: none;
    margin: 1.5rem 0;
    color: ${p => p.theme.palette.foreground || '#fff'};
  }

  ol {
    list-style-type: decimal;
    padding-left: 1.5rem;
  }

  ul {
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.75rem;
    font-size: 1rem;
    line-height: 1.7;
    position: relative;
  }

  ul li::before {
    content: '•';
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: -1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: inherit;
    margin: 0 0 1rem 0;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 600;
    letter-spacing: -0.03em;
    line-height: 1.2;
    margin-bottom: 1.25rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.4;
    margin-bottom: 0.75rem;
  }

  h5 {
    font-size: 1.125rem;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.5;
    margin-bottom: 0.5rem;
  }

  h6 {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.6;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.7);
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    background: transparent;
    border: none;
  }

  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: 2px solid rgba(255, 255, 255, 0.3);
    outline-offset: 2px;
    border-radius: 4px;
  }

  input,
  textarea {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 0.75rem 1rem;
    transition: all 0.2s ease;
  }

  input:hover,
  textarea:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  input:focus,
  textarea:focus {
    border-color: rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.08);
  }

  code {
    color: ${p => p.theme.palette.code || '#fff'};
    font-family: ${p => p.theme.font.mono || 'ui-monospace, "SFMono-Regular", "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'};
    font-size: 0.875rem;
    white-space: pre-wrap;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 0.125rem 0.375rem;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  code::before,
  code::after {
    display: none;
  }

  pre {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 2rem 0;
    font-family: ${p => p.theme.font.mono || 'ui-monospace, "SFMono-Regular", "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'};
    white-space: pre;
    overflow: auto;
    line-height: 1.6;
    text-align: left;
    font-size: 0.875rem;
    -webkit-overflow-scrolling: touch;
    background-color: rgba(255, 255, 255, 0.02);
  }

  pre code {
    color: ${p => p.theme.palette.foreground || '#fff'};
    font-size: 0.875rem;
    line-height: 1.6;
    white-space: pre;
    background: none;
    padding: 0;
    border: none;
  }

  pre code::before,
  pre code::after {
    display: none;
  }

  pre p {
    margin: 0;
  }

  pre::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }

  pre::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  pre::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  pre::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  hr {
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin: 2rem 0;
  }

  details {
    background-color: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
  }

  details:focus,
  details:hover,
  details:active {
    outline: none;
    border-color: rgba(255, 255, 255, 0.2);
  }

  summary {
    cursor: pointer;
    user-select: none;
    list-style: none;
    outline: none;
    font-weight: 600;
    padding: 0.5rem 0;
  }

  blockquote {
    padding: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    background-color: rgba(255, 255, 255, 0.03);
    border-radius: 8px;
    margin: 2rem 0;
    border-left: 4px solid rgba(255, 255, 255, 0.2);
    font-style: italic;
  }

  blockquote *:first-child {
    margin-top: 0;
  }

  blockquote *:last-child {
    margin-bottom: 0;
  }

  [type='search']::-webkit-search-cancel-button {
    appearance: none;
  }

  .kubed-icon__light {
    color: rgba(255, 255, 255, 0.9);
    fill: rgba(255, 255, 255, 0.4);
  }

  .kubed-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  .kubed-modal-wrap {
    z-index: 1000;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    outline: 0;
  }

  .kubed-modal-centered {
    text-align: center;
  }

  .kubed-modal-centered::before {
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
    content: "";
  }

  .kubed-modal-centered .kubed-modal {
    top: 0;
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    background-color: rgba(0, 0, 0, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
  }

  .kubed-fade-enter, .kubed-fade-appear,
  .kubed-fade-leave,
  .kubed-zoom-enter, .kubed-zoom-appear,
  .kubed-zoom-leave {
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-play-state: paused;
  }

  .kubed-fade-enter.kubed-fade-enter-active,
  .kubed-fade-appear.kubed-fade-appear-active {
    animation-name: kubedFadeIn;
    animation-play-state: running;
  }

  .kubed-fade-leave.kubed-fade-leave-active {
    animation-name: kubedFadeOut;
    animation-play-state: running;
    pointer-events: none;
  }

  .kubed-fade-enter, .kubed-fade-appear {
    opacity: 0;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .kubed-fade-leave {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes kubedFadeIn {
    0% {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes kubedFadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  .kubed-zoom-enter.kubed-zoom-enter-active,
  .kubed-zoom-appear.kubed-zoom-appear-active {
    animation-name: kubedZoomIn;
    animation-play-state: running;
  }

  .kubed-zoom-leave.kubed-zoom-leave-active {
    animation-name: kubedZoomOut;
    animation-play-state: running;
    pointer-events: none;
  }

  .kubed-zoom-enter, .kubed-zoom-appear {
    transform: scale(0.96);
    opacity: 0;
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  .kubed-zoom-enter-prepare, .kubed-zoom-appear-prepare {
    transform: none;
  }

  .kubed-zoom-leave {
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes kubedZoomIn {
    0% {
      transform: scale(0.96);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes kubedZoomOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.96);
      opacity: 0;
    }
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  /* Selection Styling */
  ::selection {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  ::-moz-selection {
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  /* Focus Visible */
  *:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.4);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* Loading States */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  .loading {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  /* Responsive Typography */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }

    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    pre {
      padding: 1rem;
      font-size: 0.8125rem;
    }

    blockquote {
      padding: 1rem;
      margin: 1rem 0;
    }
  }
`;

export default CssBaseline;
