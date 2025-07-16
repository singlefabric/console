/*
 * Please refer to the LICENSE file in the root directory of the project.
 * https://github.com/kubesphere/console/blob/master/LICENSE
 */

import React from 'react';
import {
  Root,
  DescriptionWrapper,
  Logo,
  Description,
  Links,
  Container,
  Section,
  VersionBadge,
  LinkGrid,
  LinkCard,
  IconWrapper
} from './styles';

export default function About() {
  const ksVersion = globals?.ksConfig?.ksVersion;
  const issueUrl = globals?.config?.issueUrl;
  const reposUrl = globals?.config?.reposUrl;
  const slackUrl = globals?.config?.slackUrl;

  const linkData = [
    {
      href: reposUrl,
      icon: '/assets/github.svg',
      alt: 'github',
      title: t('REPS_ADDRESS'),
      description: 'Explore our open source repositories'
    },
    {
      href: issueUrl,
      icon: '/assets/bug.svg',
      alt: 'bug',
      title: t('ISSUE_FEEDBACK'),
      description: 'Report bugs and request features'
    },
    {
      href: slackUrl,
      icon: '/assets/slack.svg',
      alt: 'slack',
      title: t('PART_IN_DISCUSSION'),
      description: 'Join our community discussions'
    },
    {
      href: reposUrl,
      icon: '/assets/blue-theme-git.svg',
      alt: 'git',
      title: t('CODE_CONTRIBUTE'),
      description: 'Contribute to the codebase'
    },
    {
      href: reposUrl,
      icon: '/assets/star.svg',
      alt: 'star',
      title: t('GITHUB_STAR'),
      description: 'Star us on GitHub'
    }
  ];

  return (
    <Root>
      <Container>
        <Section>
          <DescriptionWrapper>
            <div>
              <Logo src="/assets/logo.svg" alt="KubeSphere Logo" />
            </div>
            <Description>{t('KS_DESCRIPTION')}</Description>
            <VersionBadge>
              <span>KubeSphere {t('VERSION')}</span>
              <strong>{ksVersion}</strong>
            </VersionBadge>
          </DescriptionWrapper>
        </Section>

        <Section>
          <LinkGrid>
            {linkData.map((link, index) => (
              <LinkCard key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.title}
                >
                  <IconWrapper>
                    <img src={link.icon} alt={link.alt} />
                  </IconWrapper>
                  <div>
                    <strong>{link.title}</strong>
                    <p>{link.description}</p>
                  </div>
                </a>
              </LinkCard>
            ))}
          </LinkGrid>
        </Section>

        {/* Legacy Links for backward compatibility */}
        <Links style={{ display: 'none' }}>
          <div>
            <span>
              <a href={reposUrl} target="_blank" rel="noreferrer noopener">
                <img src="/assets/github.svg" alt="github" />
                <strong>{t('REPS_ADDRESS')}</strong>
              </a>
            </span>
            <span>
              <a href={issueUrl} target="_blank" rel="noreferrer noopener">
                <img src="/assets/bug.svg" alt="bug" />
                <strong>{t('ISSUE_FEEDBACK')}</strong>
              </a>
            </span>
          </div>
          <div>
            <span>
              <a href={slackUrl} target="_blank" rel="noreferrer noopener">
                <img src="/assets/slack.svg" alt="slack" />
                <strong>{t('PART_IN_DISCUSSION')}</strong>
              </a>
            </span>
            <span>
              <a href={reposUrl} target="_blank" rel="noreferrer noopener">
                <img src="/assets/blue-theme-git.svg" alt="git" />
                <strong>{t('CODE_CONTRIBUTE')}</strong>
              </a>
            </span>
            <span>
              <a href={reposUrl} target="_blank" rel="noreferrer noopener">
                <img src="/assets/star.svg" alt="star" />
                <strong>{t('GITHUB_STAR')}</strong>
              </a>
            </span>
          </div>
        </Links>
      </Container>
    </Root>
  );
}
