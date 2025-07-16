/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Close } from '@kubed/icons';
import { useHotkeys } from '@kubed/hooks';
import { Icon, useGlobalStore } from '/home/canokan/mindaeon/console/packages/shared/src/stores/global.ts';

import {
  GlobalNavWrapper,
  GlobalNavInner,
  CloseButton,
  NavItem,
  NavGrid,
  NavSection,
  NavHeader
} from './styles';

interface NavItem {
  name: string;
  icon: string;
  title: string;
  desc?: string;
  link?: string;
}

interface GlobalNavProps {
  navs: NavItem[];
}

const GlobalNav = ({ navs }: GlobalNavProps) => {
  const [activeNav, setActiveNav] = useState<string>(navs[0]?.name || '');
  const { setNavOpen, globalStore } = useGlobalStore();

  // Handle keyboard navigation
  useHotkeys([
    [
      'Escape',
      () => {
        setNavOpen(false);
      },
    ],
    [
      'ArrowLeft',
      () => {
        const currentIndex = navs.findIndex(nav => nav.name === activeNav);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : navs.length - 1;
        setActiveNav(navs[prevIndex].name);
      },
    ],
    [
      'ArrowRight',
      () => {
        const currentIndex = navs.findIndex(nav => nav.name === activeNav);
        const nextIndex = currentIndex < navs.length - 1 ? currentIndex + 1 : 0;
        setActiveNav(navs[nextIndex].name);
      },
    ],
  ]);

  // Handle body scroll lock
  useEffect(() => {
    if (globalStore.globalNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [globalStore.globalNavOpen]);

  // Close navigation on background click
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setNavOpen(false);
    }
  };

  // Handle navigation item click
  const handleNavClick = (nav: NavItem) => {
    setActiveNav(nav.name);
    // Small delay to show the active state before closing
    setTimeout(() => {
      setNavOpen(false);
    }, 150);
  };

  if (!navs || navs.length === 0) {
    return null;
  }

  return (
    <GlobalNavWrapper $visible={globalStore.globalNavOpen}>
      <GlobalNavInner onClick={handleBackgroundClick}>
        <NavSection>
          <NavHeader>
            <h1>Navigate</h1>
            <p>Choose your destination and explore the platform</p>
          </NavHeader>

          <NavGrid>
            {navs.map(nav => {
              const { name, icon, title, desc } = nav;
              const isActive = activeNav === name;
              const to = nav.link || `/${name}`;

              return (
                <NavItem
                  as={Link}
                  to={to}
                  key={name}
                  $active={isActive}
                  onMouseEnter={() => setActiveNav(name)}
                  onClick={() => handleNavClick(nav)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Navigate to ${title}`}
                >
                  <Icon
                    name={icon}
                    size={48}
                    variant="light"
                    className="kubed-icon"
                  />
                  <div className="nav-title">
                    {t(title)}
                  </div>
                  <div className="nav-desc">
                    {t(desc || `${title.replace(/\s/g, '_').toUpperCase()}_DESC`)}
                  </div>
                </NavItem>
              );
            })}
          </NavGrid>
        </NavSection>
      </GlobalNavInner>

      <CloseButton
        onClick={() => setNavOpen(false)}
        role="button"
        tabIndex={0}
        aria-label="Close navigation"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setNavOpen(false);
          }
        }}
      >
        <Close size={20} className="kubed-icon" />
      </CloseButton>
    </GlobalNavWrapper>
  );
};

export default GlobalNav;
