<p align="center">
  <img src=/frontend/public/github/logo.svg/>
</p>

<p align="center">
 <img src="https://img.shields.io/badge/Happy-NLW 3.0-blue"/>
  <a href="https://www.linkedin.com/in/rebeca-ferreira-oliveira/">
    <img alt="Rebeca Ferreira" src="https://img.shields.io/badge/-Rebeca Ferreira-blue?style=flat&logo=Linkedin&logoColor=white" />
  </a>
    <img src="https://img.shields.io/github/repo-size/rebecaferreira/happy" />
    <img src="https://img.shields.io/github/last-commit/rebecaferreira/happy?color=blue" />
</p>

## :pushpin: Table of Contents

<!--ts-->
   * [About](#about)
   * [Technologies](#computer-technologies)
   * [Installation](#arrow_double_down-installation)
   * [How to Run](#arrow_forward-how-to-run)
   * [Automated Tests](#robot-automated-tests)
      * [Run tests]()
      * [Generate reports]()
<!--te-->

 ## About

This project was made during **Next Level Week** event, held by **Rocketseat**. 

**Happy** is a web application to find and visit orphanages nearby to make a child's day very **happy**!

#### Landing Page
<img src="/frontend/public/github/landing.png" width="800" height="400"/>

#### Map Page
<img src="/frontend/public/github/map.jpg" width="800" height="400" />

#### Details Page
<img src="/frontend/public/github/details.png" width="800" height="400" />

#### Create new orphanage Page
<img src="/frontend/public/github/create.png" width="800" height="400" />

 ## :computer: Technologies 
 
 This project was made using the following techologies:
 
- HTML5 <img src="https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg" alt="html5"  width="20" height="20"/>
- CSS3 <img src="https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg" alt="css3"  width="20" height="20"/>
- React <img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original.svg" alt="react" width="17" height="17"/>
- Node <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original.svg" alt="nodejs" width="20" height="20"/>
- TypeScript <img src="https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg" alt="typescript" width="17" height="17"/>
- Cypress <img src="/frontend/public/github/cypress.svg" width="17px" height="17px" />

## :arrow_double_down: Installation 

Clone repository:
```bash
$ git clone https://github.com/rebecaferreira/happy.git
```

Install dependencies:
```bash
# Go to backend folder
$ cd backend

# Install dependencies
$ yarn install

# Go to frontend folder
$ cd frontend

# Install dependencies
$ yarn install
```
## :arrow_forward: How to Run

Run server and client: 
```bash
# Go to backend folder
$ cd backend

# Run server
$ yarn dev

# Go to frontend folder
$ cd frontend

# Run client
$ yarn start
```
Access application on http://localhost:3000/ 

## :robot: Automated Tests
The test automation framework used in this project was **Cypress** <img src="/frontend/public/github/cypress.svg" width="17px" height="17px" />

Cypress is a JavaScript end to end testing framework, and is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.
This enables you to write faster, easier and more reliable tests.

After you started the application, you can run the automated tests!

```bash
# Go to frontend folder
$ cd frontend

# Open Cypress
$ yarn cy:open
```
### Run Tests :fast_forward:

You can run your tests by using the Cypress test runner, or in headless mode.

```bash
#Headless mode
$ yarn cy:run
```
#### GIF of tests being executed:

<img src="frontend/public/github/test-running-gif.gif"/>

### Generate Reports :memo:

The report generator used in this project was **Mochawesome**. All reports go to a folder called *mochawesome-report* inside Cypress folder.

To generate a test report, you must run a test (or tests) first. Then:
```bash
#Merge all reports in one file (index.json)
$ yarn report:merge

#Generate report html
$ yarn report:mocha

#If you want to delete all reports, run:
$ yarn report:clean
```
