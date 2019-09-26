export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d8d0dbef2f601a376b092b5',
                  title: 'Sanity Studio',
                  name: 'CarlOda2020-studio',
                  apiId: 'f3803552-b8e8-42a3-85c8-28afa152ef48'
                },
                {
                  buildHookId: '5d8d0dbeb885018a767a066a',
                  title: 'Landing pages Website',
                  name: 'CarlOda2020',
                  apiId: '4e40bffa-7db9-41c0-8814-6dcb3ffea3e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/paalfredrik/CarlOda2020',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://CarlOda2020.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
