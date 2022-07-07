// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const baseDocs = {
    id: 'base-docs',
    path: './docs',
    routeBasePath: 'docs',
    sidebarPath: require.resolve('./sidebars.docs.js'),
    showLastUpdateAuthor: true,
    showLastUpdateTime: true,
    remarkPlugins: [
        [require('@docusaurus/remark-plugin-npm2yarn'), {
            sync: true
        }]
    ],
    breadcrumbs: false,
};

const ruleDocs = {
    id: 'rules-docs',
    path: './rules',
    sidebarPath: require.resolve('./sidebars.rules.js'),
    routeBasePath: 'rules',
    showLastUpdateAuthor: true,
    showLastUpdateTime: true,
    breadcrumbs:false,
    remarkPlugins: [
        [require('@docusaurus/remark-plugin-npm2yarn'), {
            sync: true
        }]
    ],
    exclude: ['TEMPLATE.md'],
};
/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Typescript ESLint 中文文档',
    tagline: '使用 ESLint 来支持 Typescript',
    url: 'https://berber1016.github.io',
    baseUrl: '/typescript-eslint-chinese/',
    onBrokenLinks: 'log',
    onBrokenMarkdownLinks: 'warn',
    // favicon: '',
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'berber1016', // Usually your GitHub org/user name.
    projectName: 'typescript-eslint-chinese', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                debug: true,
                docs: ruleDocs,
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/'],
                    filename: 'sitemap.xml',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        ['@docusaurus/plugin-content-docs', baseDocs],
    ],
    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

        ({
            announcementBar: {
                id: 'announcementBar-2', // Increment on change
                content: `请注意：这里是一个非官方版本的文档，依靠社区(个人QAQ)维护，欢迎大家参与校对、翻译！⭐️ ⭐️ ⭐️ `,
                isCloseable: false
            },
            metadata: [{
                name: 'keywords',
                content: 'typescript,TypeScript,TypeScript-ESLint,typescript-eslint, typescript-eslint 中文文档'
            }],
            navbar: {
                hideOnScroll: true,
                title: 'Typescript ESLint 中文文档',
                // logo: {
                //     alt: 'Typescript ESLint 中文文档 Logo',
                //     src: 'img/logo.svg',
                //     href: 'https://berber1016.github.io/typescript-eslint-chinese/'
                // },
                items: [{
                        to: 'docs/',
                        activeBasePath: 'docs',
                        label: '开始',
                        position: 'left',
                    },
                    {
                        to: 'rules/',
                        activeBasePath: 'rules',
                        label: '规则',
                        position: 'left',
                    },
                    // {
                    //     type: 'search',
                    //     position: 'right',
                    // },
                    // { to: '/rules', label: '规则', position: 'left' },
                    {
                        href: 'https://github.com/berber1016/typescript-eslint-chinese',
                        label: 'GitHub',
                        position: 'right',
                    },
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
                // copyright: `备案`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;