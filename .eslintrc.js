/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  plugins: [
    "simple-import-sort"
  ],
  "rules": {
    "import/order": "off",
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          [
            "^react",
            "^\\w",
            "^@\\w+"
          ],
          [
            "^~/layouts"
          ],
          [
            "^~/modules"
          ],
          [
            "^~/components"
          ],
          [
            "^~/shared/constants",
            "^~/shared/api",
            "^~/shared/helpers",
            "^~/shared/hocs",
            "^~/shared/hooks",
            "^~/shared/transitions",
            "^~/data"
          ],
          [
            "^~/assets/styles",
            "^\\.\\./styles",
            "^\\./(\\w+).module.scss$"
          ],
          [
            "^~/assets/images",
            "^~/assets/video"
          ],
          [
            "^~/types",
            "^~/shared/types",
            "^\\./types$",
            "^(\\w*|~/components)(/\\w*)?/types$"
          ],
          [
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$"
          ],
          [
            "^\\.(\\/(?!types)\\w+)+$"
          ],
          [
            "^\\u0000"
          ]
        ]
      }
    ]
  }
};
