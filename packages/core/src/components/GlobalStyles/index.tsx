/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import { createGlobalStyle } from 'styled-components';

import markdownStyles from './markdown';
import terminalStyles from './terminal';
import lightboxStyles from './lightbox';
import { notifyStyles } from './notify';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    background-color: #ffffff;
    color: #000000;
    line-height: 1.5;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root{
    height: 100%;
  }

  a {
    color: #0070f3;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #0060df;
      text-decoration: underline;
    }
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  ::selection {
    background-color: #0070f3;
    color: #ffffff;
  }

  ::placeholder {
    font-weight: 400;
    color: #666666;
  }

  strong {
    font-weight: 600;
  }

  .kubed-icon__coloured {
    color: #0070f3;
    fill: #e6f3ff;
  }

  .mt12 {
    margin-top: 12px;
  }

  .mr12 {
    margin-right: 12px;
  }

  .mb12 {
    margin-bottom: 12px;
  }

  .ml12 {
    margin-left: 12px;
  }

  .p-20 {
    padding: 20px;
  }

  .page-loading {
    display: inline-block;
    position: fixed;
    top: 50%;
    left: 50%;
    //transform: translate(-50%,-50%);
    margin-top: -16px;
    margin-left: -16px;
    z-index: 1000
  }

  .form-item {
    .input-wrapper,
    .kubed-select {
      width: 100%;
      max-width: 455px;
    }
  }

  .password-tip-dropdown {
    width: 350px;
    padding: 0 16px 16px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.1);

    .tip-title {
      font-weight: 600;
      color: #000000;
    }
  }

  .banner-desc {
    .kubed-icon {
      margin-left: 12px;
      margin-right: 4px;
      vertical-align: text-top;
    }

    a {
      font-weight: 500;
      color: #0070f3;
    }
  }

  .table-button {
    min-width: 96px;
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    color: #000000;
    transition: all 0.2s ease;

    &:hover {
      border-color: #000000;
      background: #fafafa;
    }
  }

  .modal-pd {
    .kubed-modal-body {
      padding: 20px;
      background: #ffffff;
      border-radius: 8px;
    }
  }

  .kubed-select-item-option.kubed-select-item-option-disabled {
    cursor: not-allowed;
    color: #999999;
    background: #f4f4f5;
  }

  ${markdownStyles};
  ${terminalStyles};
  ${lightboxStyles};
  ${notifyStyles};

  table tr {
    border-bottom: 1px solid #eaeaea;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #fafafa;

      .favorite-action {
        visibility: visible;
      }
    }

    .favorite-action {
      visibility: hidden;
    }

    .favorite-active-action {
      visibility: visible;
    }
  }

  .kube-table {
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #eaeaea;

    td.table-cell {
      word-break: break-word;
      color: #000000;
      border-bottom: 1px solid #f4f4f5;
      padding: 12px 16px;

      .field-label {
        max-width: 350px;
        color: #666666;
        font-size: 14px;
      }
     }

     th {
       background: #fafafa;
       color: #666666;
       font-weight: 500;
       font-size: 14px;
       padding: 12px 16px;
       border-bottom: 1px solid #eaeaea;
     }
  }

  .kube-table-wrapper {
    padding: 0 12px 12px;
    background: #ffffff;

    table.kube-table {
      width: 100%;
      border-collapse: collapse;
    }

    table.kube-table--max-context {
      width: max-content;
    }

    td.table-cell {
      .field-content {
        word-break: break-word;
        color: #000000;
      }

      .field-label {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: unset;
        color: #666666;
      }
    }
  }

  /* Custom scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f4f4f5;
  }

  ::-webkit-scrollbar-thumb {
    background: #d4d4d8;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a1a1aa;
  }

  /* Focus styles */
  *:focus {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }

  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: 2px solid #0070f3;
    outline-offset: 2px;
  }
`;

export default GlobalStyles;
