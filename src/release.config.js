module.exports = {
  repositoryUrl: 'https://github.com/suramyaraim/demo-project.git',
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github'
  ]
};z