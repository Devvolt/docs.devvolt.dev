// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Devvolt',
  tagline: 'no',
  url: 'https://docs.devvolt.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/devvolt.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'devvolt', // Usually your GitHub org/user name.
  projectName: 'docs.devvolt.dev', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Devvolt',
        hideOnScroll: true,
        logo: {
          alt: 'Devvolt Logo',
          src: 'img/devvolt.png',
        },
        items: [
          {
            href: 'https://www.github.com/devvolt',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://devvolt.dev/discord',
            label: 'Discord',
            position: 'left',
          },
          {
            href: 'https://npmjs.com/org/devvolt',
            label: 'npm',
            position: 'left',
          },
          {
            to: 'docs/',
            label: 'Documentation',
            position: 'right',
          },
          {
            // Still have to add the actual search :(
            type: 'search',
            position: 'right',
          },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Projects',
            items: [
              {
                label: 'dsc-music',
                to: '/docs/dsc_music',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://devvolt.dev/discord',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/devvolt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'NPM',
                href: 'https://npmjs.com/org/devvolt',
              },
              {
                label: 'GitHub',
                href: 'https://www.github.com/devvolt',
              },
            ],
          },
        ],
        copyright: `No Rights to Devvolt. ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'FD6MFZFZBH',
        apiKey: 'ecd193337c6d7e3809683d4bd4022e44',
        indexName: 'devvolt',
        contextualSearch: true,
      }
    }),
};

module.exports = config;
