# My PortFolio

This repository is dedicated to developing my portfolio, containing various information about my experiences as well as the ability to access and download my CV.\
I took this opportunity to implement my first React project.

## Commands

### Run project locally

`npm run dev`

### Build project for local run

`npm run build`

### Build project for Git Hub Pages site

This project is available at this link: 
https://paolinoangeletti.github.io/MyPortFolio/

In order to update the released project, you have to build project with:

`NODE_ENV=production npm run build`

To facilitate the deployment phase of the project, a bash file has been created that can be invoked using the following command:

`npm run deploy {version-increase-type}`

This command will perform the following operations:

1. Increase project version.
2. Build project via "NODE_ENV=production npm run build" command.
3. Commit and push all pending files.
4. Create a Pull Request in order to merge new changes into master branch (obviously the PR will have to be confirmed manually).

The {version-increase-type} parameter specifies the type of version increase to apply.\
The project version is in the X.Y.Z style, where:
- X indicates the major version
- Y indicates the minor version
- Z indicates the patch version

### Update Curriculum Vitae document

To update the Real Curriculum document and make it public, you need to update the file in the public folder.