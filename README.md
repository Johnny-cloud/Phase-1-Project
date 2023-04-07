# My Music

**5 April 2023**\
**By John Kipruto**

## About the project

This project was developed as a clone of boomplay.
A user can view the new songs, trending, and the top 100. The user can like a song and it appears on the favorites section. They can also add a song to their playlist section.

## Technologies used

* Html
* Css
* Javascript
* Json server
* Json
* Rapid API
* Shazam API

## Behavioral Driven Development

* When a user hovers over a song, the "like" and "Add to playlist" buttons are shown.
* When the user clicks on the "like" button, the song is added to the "Favorites" section where a user can view it when they navigate to the section.
* When the user hovers over the song on "Favorites" section, the "Remove" button appears. A user can remove the song by clicking on the button.
* When the user clicks on the "Add to playlist" button, the song is added to the "Playlist" section where a user can view it when they navigate to the section.
* When the user hovers over the song on "Playlist" section, the "Remove" button appears. A user can remove the song by clicking on the button.

## How to run the project

### Option i (On Github)

    Click on the livelink to see how the project works

### Option ii (On your local server)

1. Make sure you have node installed on your machine.
2. Download the json-server using the command "npm install -g json-server". This will ensure the server is installed globally on the machine.
3. Fork and clone this repository to your local machine.
4. Cd into this repository.
5. The data to be used is in the current folder.
6. Run the command "json-server --watch db.json" to start up the local server. This is where you will get the data to be used.
7. Open the index.html file in the browser.
