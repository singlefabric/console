/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import styled from 'styled-components';

export const Root = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.foreground};
  font-family: ${({ theme }) => theme.font.sans};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  padding: 24px 0;
  transition: background-color 0.2s ease, color 0.2s ease;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    padding: 0 12px;
  }
`;

export const Section = styled.section`
  padding: 48px 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    padding: 32px 0;
  }

  @media (max-width: 480px) {
    padding: 24px 0;
  }
`;

export const DescriptionWrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.accents_0};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 12px;
  padding: 48px;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      ${({ theme }) => theme.palette.primary} 0%,
      ${({ theme }) => theme.palette.selection} 50%,
      ${({ theme }) => theme.palette.primary} 100%
    );
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px;
    border-radius: 6px;
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: 32px;
  user-select: none;
  pointer-events: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 150px;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    width: 120px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  margin: 0 0 32px 0;
  font-family: ${({ theme }) => theme.font.sans};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.palette.accents_7};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.65;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const VersionBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 24px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.accents_7};
  box-shadow: ${({ theme }) => theme.expressiveness.shadowSmall};

  span {
    color: ${({ theme }) => theme.palette.accents_6};
  }

  strong {
    color: ${({ theme }) => theme.palette.primary};
    font-weight: 600;
    background-color: ${({ theme }) => theme.palette.accents_1};
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 12px;

    strong {
      font-size: 11px;
      padding: 1px 6px;
    }
  }
`;

export const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 20px;
  }
`;

export const LinkCard = styled.div`
  background-color: ${({ theme }) => theme.palette.background};
  border: 1px solid ${({ theme }) => theme.palette.border};
  border-radius: 8px;
  transition: all 0.2s ease;
  overflow: hidden;

  &:hover {
    border-color: ${({ theme }) => theme.palette.accents_3};
    box-shadow: ${({ theme }) => theme.expressiveness.shadowMedium};
    transform: translateY(-2px);
  }

  a {
    display: flex;
    align-items: flex-start;
    padding: 24px;
    text-decoration: none;
    color: inherit;
    gap: 16px;
    transition: all 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.palette.accents_0};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.palette.selection};
      outline-offset: -2px;
    }

    div {
      flex: 1;
    }

    strong {
      display: block;
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.palette.primary};
      margin-bottom: 4px;
      line-height: 1.3;
    }

    p {
      margin: 0;
      font-size: 14px;
      color: ${({ theme }) => theme.palette.accents_6};
      line-height: 1.4;
    }
  }

  @media (max-width: 768px) {
    a {
      padding: 20px;
      gap: 14px;

      strong {
        font-size: 15px;
      }

      p {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 480px) {
    a {
      padding: 16px;
      gap: 12px;

      strong {
        font-size: 14px;
      }

      p {
        font-size: 12px;
      }
    }
  }
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.accents_1};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.2s ease;

  img {
    width: 20px;
    height: 20px;
    user-select: none;
    filter: brightness(0) saturate(100%);
    transition: filter 0.2s ease;
  }

  ${LinkCard}:hover & {
    background-color: ${({ theme }) => theme.palette.accents_2};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    border-radius: 6px;

    img {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

// Legacy Links component (hidden by default, kept for compatibility)
export const Links = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  padding: 20px 0 12px 0;
  flex-wrap: wrap;

  div {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }

  span + span {
    margin-left: 0;
    position: relative;

    &:before {
      content: '|';
      color: ${({ theme }) => theme.palette.accents_4};
      margin: 0 12px 0 0;
      vertical-align: middle;
      font-weight: 300;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    line-height: 24px;
    vertical-align: middle;
    color: ${({ theme }) => theme.palette.primary};
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    border-radius: 4px;
    padding: 4px 8px;
    margin: -4px -8px;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.palette.secondary};
      text-decoration: underline;
      outline: none;
      background-color: ${({ theme }) => theme.palette.accents_1};
    }

    &:focus-visible {
      outline: 2px solid ${({ theme }) => theme.palette.selection};
      outline-offset: 2px;
    }

    img {
      margin-right: 6px;
      vertical-align: middle;
      user-select: none;
      width: 16px;
      height: 16px;
    }

    strong {
      vertical-align: middle;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 16px 0 8px 0;

    div {
      gap: 20px;
    }
  }

  @media (max-width: 480px) {
    gap: 16px;

    div {
      gap: 16px;
    }

    span + span:before {
      margin: 0 8px 0 0;
    }
  }
`;
