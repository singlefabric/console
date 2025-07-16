/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import { css } from 'styled-components';

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const markdownStyles = css`
  .markdown-body {
    font-size: 14px;
    color: #000000;
    line-height: 1.6;
    word-wrap: break-word;
    font-family: ${fontFamily};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    h1 {
      font-family: ${fontFamily};
      font-size: 32px;
      font-weight: 700;
      line-height: 1.25;
      margin-bottom: 24px;
      margin-top: 32px;
      color: #000000;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 16px;
    }

    h2 {
      font-family: ${fontFamily};
      font-size: 24px;
      font-weight: 600;
      line-height: 1.3;
      margin-bottom: 16px;
      margin-top: 24px;
      color: #000000;
    }

    h3 {
      font-family: ${fontFamily};
      font-size: 20px;
      font-weight: 600;
      line-height: 1.4;
      margin-bottom: 12px;
      margin-top: 20px;
      color: #000000;
    }

    h4 {
      font-family: ${fontFamily};
      font-size: 16px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 8px;
      margin-top: 16px;
      color: #000000;
    }

    h5 {
      font-family: ${fontFamily};
      font-size: 14px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 8px;
      margin-top: 16px;
      color: #000000;
    }

    h6 {
      font-family: ${fontFamily};
      font-size: 12px;
      font-weight: 600;
      line-height: 1.5;
      margin-bottom: 8px;
      margin-top: 16px;
      color: #666666;
    }

    p {
      color: #000000;
      margin-bottom: 16px;
      line-height: 1.6;

      a {
        color: #0070f3;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease;

        &:hover {
          color: #0060df;
          border-bottom-color: #0060df;
        }
      }
    }

    ul, ol {
      margin-bottom: 16px;
      padding-left: 24px;
      color: #000000;

      li {
        position: relative;
        margin-bottom: 8px;
        line-height: 1.6;

        &::marker {
          color: #666666;
        }

        ul, ol {
          margin-top: 8px;
          margin-bottom: 8px;
        }
      }
    }

    ul li {
      list-style-type: disc;
    }

    ol li {
      list-style-type: decimal;
    }

    blockquote {
      margin: 16px 0;
      padding: 16px 20px;
      background-color: #fafafa;
      border-left: 4px solid #0070f3;
      border-radius: 0 6px 6px 0;
      color: #000000;
      font-style: italic;

      p {
        margin-bottom: 0;
      }
    }

    code {
      display: inline;
      padding: 2px 6px;
      border-radius: 4px;
      background-color: #f4f4f5;
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
      font-size: 13px;
      color: #eb5757;
      font-weight: 500;
    }

    pre {
      background-color: #fafafa;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      padding: 16px;
      margin: 16px 0;
      overflow-x: auto;
      font-size: 14px;
      line-height: 1.4;

      code {
        display: block;
        padding: 0;
        background-color: transparent;
        border-radius: 0;
        color: #000000;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 13px;
        font-weight: 400;
      }
    }

    table {
      width: 100%;
      margin: 16px 0;
      border-collapse: collapse;
      border-spacing: 0;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      overflow: hidden;
      font-size: 14px;

      th {
        background-color: #fafafa;
        padding: 12px 16px;
        text-align: left;
        font-weight: 600;
        color: #000000;
        border-bottom: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;

        &:last-child {
          border-right: none;
        }
      }

      td {
        padding: 12px 16px;
        border-bottom: 1px solid #f4f4f5;
        border-right: 1px solid #f4f4f5;
        color: #000000;

        &:last-child {
          border-right: none;
        }
      }

      tr:last-child td {
        border-bottom: none;
      }

      tr:hover {
        background-color: #fafafa;
      }
    }

    hr {
      border: none;
      height: 1px;
      background-color: #eaeaea;
      margin: 24px 0;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
      margin: 16px 0;
    }

    kbd {
      display: inline-block;
      padding: 3px 8px;
      font-size: 12px;
      line-height: 1;
      color: #000000;
      background-color: #f4f4f5;
      border: 1px solid #d4d4d8;
      border-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    }

    mark {
      background-color: #fff3cd;
      padding: 2px 4px;
      border-radius: 2px;
      color: #000000;
    }

    del {
      text-decoration: line-through;
      color: #999999;
    }

    strong {
      font-weight: 600;
      color: #000000;
    }

    em {
      font-style: italic;
      color: #000000;
    }

    /* Task lists */
    ul li.task-list-item {
      list-style-type: none;
      position: relative;
      padding-left: 24px;

      input[type="checkbox"] {
        position: absolute;
        left: 0;
        top: 4px;
        margin: 0;
        accent-color: #0070f3;
      }
    }

    /* Footnotes */
    .footnotes {
      border-top: 1px solid #eaeaea;
      margin-top: 32px;
      padding-top: 16px;
      font-size: 12px;
      color: #666666;
    }

    /* Code syntax highlighting support */
    .hljs {
      background: #fafafa;
      color: #000000;
    }

    .hljs-comment,
    .hljs-quote {
      color: #666666;
      font-style: italic;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-type {
      color: #0070f3;
      font-weight: 600;
    }

    .hljs-string,
    .hljs-title {
      color: #eb5757;
    }

    .hljs-number,
    .hljs-literal {
      color: #0070f3;
    }

    .hljs-variable,
    .hljs-template-variable {
      color: #000000;
    }

    .hljs-attribute {
      color: #0070f3;
    }
  }
`;

export default markdownStyles;
