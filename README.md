# Prerequsites:
- To run the cypress automation tests you need to have following things on your device:
- `NPM` and `Cypress` should be installed along with an `IDE` (most preferabbly Visual Studio Code)

# How to run Cypress Spec files: 
- After all the dependencies are installed and prerequisites are met
-  Open your IDE
- Click on the `file` option on the top right of the menu bar
- Select `Open Folder` and navigate till the folder that has your tests
- Now navigate till the `terminal` tab on the top of your IDE click on it
- Select the `New terminal` option
- If you want to execute each spec file individually then within the terminal hit following commands for following spec files:
    -  Pro-main file: `npx cypress run --headed --spec cypress\e2e\Specs\Pro-main.cy.js --browser chrome`
    -  Pro-profile file: `npx cypress run --headed --spec cypress\e2e\Specs\Pro-profile.cy.js --browser chrome`
    -  Pro-requestquotation file: `npx cypress run --headed --spec cypress\e2e\Specs\Pro-requestquotation.cy.js --browser chrome`
    -  Pro-retrievequotation file: `npx cypress run --headed --spec cypress\e2e\Specs\Pro-retreivequotation.cy.js --browser chrome` 
- Or if you want to execute all of the files at once then within the terminal hit `npx cypress run` to start the headless execution of the spec files


# How to view the report:
- Wait until the spec files are executed as it can be seen in the terminal
- Navigate till the explorer on the left side of your IDE
- Search for the `reports` folder within the explorer panel
- Right click on the `index.html` file that is within the reports folder and select `Copy path` option
- Paste the path into the search bar of your web browser
- Hit enter to see the test report in HTML format

# Expected Results:
- Total no of test cases: 14
- No. of test cases expected to pass: 12
- No. of test cases expected to fail(Negative testing): 2 (We expect the last test cases of both `pro-main.cy.js` and `pro-profile.cy.js` to fail)
- In case of page not loading errors, response time error, please check your internet connection and re-run the test cases 



Happy Testing!
