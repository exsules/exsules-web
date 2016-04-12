module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: {}
    },
    {
      name: 'release',
      dependencies: {
        'ember': 'release',
        'ember-data': 'release'
      }
    },
    {
      name: 'beta',
      dependencies: {
        'ember': 'beta',
        'ember-data': 'beta'
      }
    },
    {
      name: 'canary',
      dependencies: {
        'ember': 'canary',
        'ember-data': 'canary'
      }
    }
  ]
}
