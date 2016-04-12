module.exports = {
  scenarios: [
    {
      name: 'default',
      dependencies: {}
    },
    {
      name: 'release',
      bower: {
        dependencies: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'beta',
      bower: {
        dependencies: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'canary',
      bower: {
        dependencies: {
          'ember': 'canary'
        }
      }
    }
  ]
}
