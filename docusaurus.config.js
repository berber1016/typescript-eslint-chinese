// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Typescript ESLint 中文文档',
    tagline: '使用 ESLint 来支持 Typescript',
    url: 'https://www.typescript-eslint.cn',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'berber1016', // Usually your GitHub org/user name.
    projectName: 'typescript-eslint-chinese', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh',
        locales: ['zh'],
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
                    remarkPlugins: [
                            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]
                        ]
                        // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        announcementBar: {
            id: 'announcementBar-2', // Increment on change
            content: `请注意：这里是一个非官方版本的文档，依靠社区(个人QAQ)维护，欢迎大家参与校对、翻译！⭐️ ⭐️ ⭐️ `,
            isCloseable: false
        },
        metadata: [{ name: 'keywords', content: 'typescript,TypeScript,TypeScript-ESLint,typescript-eslint, typescript-eslint 中文文档' }],
        navbar: {
            hideOnScroll: true,
            title: 'Typescript ESLint 中文文档',
            logo: {
                alt: 'Typescript ESLint 中文文档 Logo',
                src: 'img/logo.svg',
                href: 'https://www.typescript-eslint.cn'
            },
            items: [{
                    to: 'docs/',
                    position: 'left',
                    activeBasePath: 'docs',
                    label: '开始',
                },
                // {
                //     type: 'search',
                //     position: 'right',
                // },
                // { to: '/rules', label: '规则', position: 'left' },
                // {
                //     href: 'https://github.com/facebook/docusaurus',
                //     label: 'GitHub',
                //     position: 'right',
                // },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                // {
                //       title: 'Docs',
                //       items: [{
                //           label: 'Tutorial',
                //           to: '/docs/intro',
                //       }, ],
                //   },
                //   {
                //       title: 'Community',
                //       items: [{
                //               label: 'Stack Overflow',
                //               href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //           },
                //           {
                //               label: 'Discord',
                //               href: 'https://discordapp.com/invite/docusaurus',
                //           },
                //           {
                //               label: 'Twitter',
                //               href: 'https://twitter.com/docusaurus',
                //           },
                //       ],
                //   },
                //   {
                //       title: 'More',
                //       items: [{
                //               label: 'Blog',
                //               to: '/blog',
                //           },
                //           {
                //               label: 'GitHub',
                //               href: 'https://github.com/facebook/docusaurus',
                //           },
                //       ],
                //   },
            ],
            copyright: `备案`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;