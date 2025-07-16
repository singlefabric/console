/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import styled from 'styled-components';

interface GlobalNavWrapperProps {
  $visible?: boolean;
}

export const GlobalNavWrapper = styled('div')<GlobalNavWrapperProps>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 2000;
  overflow: auto;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: all 0.2s ease-in-out;
`;

export const GlobalNavInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
`;

interface NavItemProps {
  $active?: boolean;
}

export const NavItem = styled('a')<NavItemProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 400px;
  margin: 0 1rem;
  padding: 2rem;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid ${({ $active }) => ($active ? '#000' : 'rgba(255, 255, 255, 0.1)')};
  background-color: ${({ $active }) => ($active ? '#000' : 'rgba(255, 255, 255, 0.02)')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    border-color: ${({ $active }) => ($active ? '#000' : 'rgba(255, 255, 255, 0.2)')};
    background-color: ${({ $active }) => ($active ? '#000' : 'rgba(255, 255, 255, 0.05)')};
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }

  .kubed-icon {
    margin-bottom: 1.5rem;
    color: ${({ $active }) => ($active ? '#fff' : '#888')};
    transition: color 0.3s ease;
  }

  &:hover .kubed-icon {
    color: ${({ $active }) => ($active ? '#fff' : '#fff')};
  }

  .nav-title {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.3;
    color: ${({ $active }) => ($active ? '#fff' : '#fff')};
    margin-bottom: 0.75rem;
    text-align: center;
    letter-spacing: -0.025em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  .nav-desc {
    color: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)')};
    text-align: center;
    line-height: 1.5;
    font-size: 0.875rem;
    font-weight: 400;
    max-width: 220px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  .kubed-icon {
    color: rgba(255, 255, 255, 0.7);
    fill: rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);

    .kubed-icon {
      color: #fff;
      fill: #fff;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const NavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
    letter-spacing: -0.05em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.125rem;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      padding: 0 1rem;
    }
  }
`;
