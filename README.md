# Rock, Paper, Scissors!
"Rock, Paper, Scissors!" is a website for people who want to play the famous Rock, Paper, Scissors game against a computer.

The purpose of "Rock, Paper, Scissors!" is to be a short distraction from the daily lives of their users.
This is achieved by presenting a very easy to follow webpage with an attractive design.

Visit the deployed page here: [https://85rhrl.github.io/PP2/index.html](https://85rhrl.github.io/PP2/index.html)

![Rock, Paper, Scissors! in different screen sizes](docs/images/amiresponsive.png)

## Design
A minimalistic but attractive design was chosen, there is no need for a substancial layout change based on the device where it is viewed.
- __Wireframes__
    - Wireframe was generated by hand to show the planned layout.
    
    Homepage
    ![Homepage](docs/images/wireframe-home.png)

- __Colors__
    - The colors used for "Rock, Paper, Scissors!" were inspired by the 1980s with flashy colors that are easy on the eyes. The Background color of the "Ties" box is the combination of the background colors of Player and CPU and is considered an Easter Egg.

    ![Colors](docs/images/colors.png)

## Features

### Existing Features

- __Header__
    - At the top of the page the user will find the header of the page "Rock, Paper, Scissors!" next to the hand gesture for scissors, this header also works as a link to refresh the webpage if the user wants to reset the scores.

    ![Header](docs/images/01-header.png)

- __Selection Area__
    - To start playing "Rock, Paper, Scissors!" the user must chose either Rock, Paper or Scissors, this can be done by clicking either of the options which are presented as images of the Rock, Paper or Scissors hand gestures respectively.
    - Under every option there is a text describing the hand gesture for those who haven't played the game.

    ![Selection Area](docs/images/02-choices.png)

- __Results Area__
    - The Results Area is located under the Selection Area and displays the option chosen by the user and CPU.
    - At the game start the Results Area displays a placeholder image showing the 3 possible options and all scores sets to zero.

    ![Game Start](docs/images/03-results-start.png)

    - As the game progresses the Results Area displays the latest option chosen by the user and CPU, their respectives scores, the number of Ties and the result of the latest game.

    ![Game End](docs/images/04-results-end.png)

- __Rules__
    - The rules of the game are presented under the Results area.
    - A short explanation of how to reset the scores is also presented to the user.

    ![Rules](docs/images/05-rules.png)

- __Footer__
    - At the bottom of the page the user finds a simple footer with a link to the GitHub page where it can see the source code of the "Rock, Paper, Scissors!" game.

    ![Footer](docs/images/06-footer.png)

### Features Left to Implement

- __Implement a 5 rounds game mode__
    - Create a game mode where 5 games are played and who has the most wins, wins.

- __Add game sounds__
    - Play different sounds depending if the user wins, ties or loses.

## Testing

Several test were carried out, please refer to [TESTING.md](TESTING.md) for more information.

## Deployment

GitHub pages was used to deploy the project by following the steps described below:
    
1. Go to the [github.com/85rhrl/PP2](https://github.com/85rhrl/PP2) repository.
2. Click on the Setting tab on the top. ([github.com/85rhrl/PP2/settings](https://github.com/85rhrl/PP2/settings))
3. Click the Pages link on the left hand side menu. ([github.com/85rhrl/PP2/settings/pages](https://github.com/85rhrl/PP2/settings/pages))
4. Select "Deploy from a branch" from the Source dropdown menu.
5. Select "main" branch and press the "Save" button on the right.
6. After some time the project will be deployed.

The deployed project can be viewed here: [https://85rhrl.github.io/PP2/index.html](https://85rhrl.github.io/PP2/index.html)