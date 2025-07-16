import styled from 'styled-components';


export const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  min-width: 320px;

  &.is-smaller-z-index {
    z-index: 100;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 0 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &.is-dark {
    background-color: rgba(0, 0, 0, 0.98);
    border-bottom-color: rgba(255, 255, 255, 0.15);

    .global-nav {
      color: rgba(255, 255, 255, 0.9);

      &:hover {
        color: #fff;
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .username,
    .caret-down {
      color: rgba(255, 255, 255, 0.9);
    }

    &.is-scroll {
      background-color: rgba(0, 0, 0, 0.99);
      border-bottom-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1),
                  0 1px 3px rgba(0, 0, 0, 0.3);
    }
  }

  &.is-scroll {
    background-color: rgba(0, 0, 0, 0.98);
    border-bottom-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1),
                0 1px 3px rgba(0, 0, 0, 0.2);

    &.is-transparent {
      background-color: rgba(0, 0, 0, 0.8);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
    }
  }

  &.is-transparent {
    background-color: transparent;
    border-bottom-color: rgba(255, 255, 255, 0.05);
  }

  .global-nav {
    padding: 0.5rem 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.08);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
    }

    &:focus-visible {
      outline: 2px solid rgba(255, 255, 255, 0.4);
      outline-offset: 2px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1rem;

    .global-nav {
      padding: 0.5rem;
      font-size: 0.8125rem;
    }
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  gap: 1rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  .logo {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }

    &:focus-visible {
      outline: 2px solid rgba(255, 255, 255, 0.4);
      outline-offset: 4px;
      border-radius: 4px;
    }
  }

  img {
    width: 120px;
    height: 24px;
    filter: invert(1);
    transition: all 0.2s ease;
  }

  svg {
    width: 120px;
    height: 24px;
    fill: #fff;
    transition: all 0.2s ease;
  }

  @media (max-width: 768px) {
    img,
    svg {
      width: 100px;
      height: 20px;
    }
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  gap: 0.5rem;
`;

export const NavbarBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  opacity: 0.6;
`;

export const NavbarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  min-width: 200px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:focus-within {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
  }

  input {
    background: none;
    border: none;
    color: #fff;
    font-size: 0.875rem;
    width: 100%;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    min-width: 160px;
  }
`;

export const NavbarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.4);
    outline-offset: 2px;
  }

  .username {
    color: inherit;
  }

  .caret-down {
    color: rgba(255, 255, 255, 0.6);
    transition: all 0.2s ease;
  }

  &:hover .caret-down {
    color: rgba(255, 255, 255, 0.8);
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.8125rem;
  }
`;

export const NavbarDivider = styled.div`
  width: 1px;
  height: 1.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 0.5rem;
`;

export const NavbarBreadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  font-weight: 400;

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #fff;
    }
  }

  .separator {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.75rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
