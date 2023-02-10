# Instructions:
- To run the cypress automation tests you need to have following things on your device:
- `NPM` and `Cypress` should be installed along with an `IDE` (most preferabbly Visual Studio Code)

# How to run Cypress Spec files and 
- After all the dependencies are installed and prerequisites are met
-  Open your IDE
- Click on the `file` option on the top right of the menu bar
- Select `Open Folder` and navigate till the folder that has your tests
- Now navigate till the `terminal` tab on the top of your IDE click on it
- Select the `New terminal` option
- Within the terminal hit `npx cypress run` to start the headless execution of the spec files within the spec folder

# How to view the report
- Wait until all the spec files are executed as it can be seen in the terminal
- Navigate till the explorer on the left side of your IDE
- Search for the `reports` folder within the explorer panel
- Right click on the `index.html` file that is within the reports folder and select `Copy path` option
- Paste the path into the search bar of your web browser
- Hit enter to see the test report in HTML format


Happy Testing!
