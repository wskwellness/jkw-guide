import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  jkwSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Overview',
    },
    {
      type: 'doc',
      id: 'submission-guidelines',
      label: 'Submission Guidelines',
    },
    {
      type: 'category',
      label: 'Manuscript Types',
      items: [
        {
          type: 'doc',
          id: 'article-manuscripts',
          label: 'Article Manuscripts',
        },
        {
          type: 'doc',
          id: 'student-scholarship',
          label: 'Student Scholarship',
        },
        {
          type: 'doc',
          id: 'massengale-papers',
          label: 'John Massengale Papers',
        },
        {
          type: 'doc',
          id: 'wskw-chronicles',
          label: 'WSKW Chronicles',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'doc',
          id: 'apa-style-guide',
          label: 'APA Style Guide',
        },
        {
          type: 'doc',
          id: 'templates',
          label: 'Templates',
        },
        {
          type: 'doc',
          id: 'faq',
          label: 'FAQ',
        },
      ],
    },
  ],
};

export default sidebars;
