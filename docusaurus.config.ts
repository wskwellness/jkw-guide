import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Journal of Kinesiology and Wellness',
  tagline: 'Submission Guidelines and Resources',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wskwellness.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/jkw-guide/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wskw', // Usually your GitHub org/user name.
  projectName: 'jkw-guide', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wskw/jkw-guide/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // Add the local search plugin
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // Options for the search plugin
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Journal of Kinesiology and Wellness',
      logo: {
        alt: 'JKW Logo',
        src: 'img/logo-thumb.png',
        href: '/',
      },
      items: [
        {
          href: 'https://jkw.wskw.org/index.php/jkw/index',
          label: 'JKW Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Overview',
              to: '/',
            },
            {
              label: 'Submission Guidelines',
              to: '/submission-guidelines',
            },
            {
              label: 'Templates',
              to: '/templates',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'WSKW Website',
              href: 'https://www.wskw.org',
            },
            {
              label: 'JKW Journal',
              href: 'https://www.wskw.org/journal',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wskw/jkw-guide',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Western Society for Kinesiology and Wellness. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
