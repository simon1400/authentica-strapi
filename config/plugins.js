module.exports = {
  'menus': {
    enabled: true,
    config: {
      layouts: {
        menuItem: { // This is the menu item edit panel.
          link: [ // This is the "link" tab in the menu item edit panel.
            {
              input: {
                label: 'Technicke clanky',
                name: 'articles',
                type: 'relation',
              },
              grid: {
                col: 6,
              },
            },
            {
              input: {
                label: 'Image',
                name: 'image',
                type: 'media',
              },
              grid: {
                col: 6,
              },
            },
          ],
        },
      },
    },
  },
};
