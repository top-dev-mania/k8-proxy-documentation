# Glasswall IT and Infosec Documentation Site

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Prerequisites
[Node.js](https://nodejs.org/en/)

  
### Yarn
```
npm install -g yarn
```

This command will install the Yarn package manager. Yarn is used to build the project in the deployment pipeline.

### Installation
```
yarn install
```

Installs all NPM packages and dependencies specified in the package.json file.

### Local Development

```
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are refreshed live without having to restart the server.

### Build

```
yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service.


### Automation
#### CI
The Continuous Integration workflow runs on a Pull Request into master, it uses Yarn to build the React project and checks for errors. If any errors make it through, the check fails and the fixes need to be made before merging the PR.

By default, GitHub Actions treats warnings as errors.

#### CD
The Continuous Deployment workflow runs on a merge into master. It also uses Yarn to build/test the React code, and if successful, Deploys the code to the gh-pages branch. This then automagically updates the GH-Pages site.

### Modifying the site

Please use the [Docusaurus Creating Pages Documentation](https://v2.docusaurus.io/docs/2.0.0-alpha.43/creating-pages) to see how best to add to the pages.

When adding Markdown documentation the [Docusaurus Markdown Features](https://v2.docusaurus.io/docs/2.0.0-alpha.43/markdown-features) provides a full description. To add references to the Markdown the sidebar needs to be updated. [Docusaurus Sidebar](https://v2.docusaurus.io/docs/2.0.0-alpha.43/sidebar) documents how this is structured.

#### Glasswall notes
Docusaurus uses a header in each Markdown file to specify the metadata for that page. The [Markdown Header](/https://v2.docusaurus.io/docs/2.0.0-alpha.43/markdown-features#markdown-headers) is enclosed with a line ```---``` above and below it.

![Markdown Header Example](/readme-content/markdown-header-example.png)

Each Markdown document in the Site should be identifiable through its file name (this is used as the file id if none is specified within the file itself).

Each Markdown document should have a ```title``` specified in its header section.
Where an alternative heading is required to be used in the sidebar, then a ```sidebar_label``` should be specified in the document header.

