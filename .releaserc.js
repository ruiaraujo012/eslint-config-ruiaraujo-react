module.exports = {
  branches: [
    "main",
    {
      name: "beta",
      prerelease: true,
      chanel: "beta",
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        preset: "angular",
        releaseRules: [
          {
            release: false,
            scope: "wip",
          },
          {
            release: false,
            scope: "WIP",
          },
          {
            release: false,
            scope: "no-release",
          },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        preset: "angular",
        writerOpts: {
          commitsSort: ["subject", "scope"],
        },
      },
    ],
    "@semantic-release/changelog",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "yarn.lock", "CHANGELOG.md"],
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: true,
      },
    ],
    "@semantic-release/github",
  ],
};
