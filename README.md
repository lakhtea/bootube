# README
Link to live site(https://bootube.herokuapp.com/#/)

WELCOME TO BOOTUBE:
bootube is a video sharing platform where you can upload, watch, and comment on your favorite videos! A website modeled after Youtube, it allows for all the same features. Watch videos and browse through channels without creating an account. If you want to like, comment, or even upload your own videos, you can create a secure account in seconds.

Built on Rails and React, Bootube boasts a robust and secure backend along with a clean and fast frontend. PostgreSQL allows for reliable storage of data and quick lookup and Redux allows for information to be shared with frontend components efficiently. The website is hosted on Heroku and uses AWS for video hosting and storage.

# Using Ruby on Rails

- Making use of ActiveRecord connected with a PostegresQL DB 

- Using ActiveStorage connected with AWS to host & play videos

- Using JBuilder to allow for easy access of information to frontend

Using React with Redux

- Using Redux to efficiently share information between all React components

- Using JSX to dynamically render HTML elements with the correct configuration

# Homepage

<img src="/readme-screenshots/homepage.png" />

Using CSS Grid and Redux, bootube will fetch videos hosted on AWS and display them in a grid for you to choose from.

# Sign In page

<img src="/readme-screenshots/login.png" />
<img src="/readme-screenshots/signup.png" />

A simple, yet stylish sign in form with the flexibility to sign in with either an email address or username. Animations on the form make it easy to navigate and if you don't yet have an account, you can quickly move to the sign up page instead.

User authentication is built on BCrypt and Rails validations, keeping your information entirely secure.

# Upload modal

<img src="/readme-screenshots/upload.png" />

Regardless of where you are on bootube ( as long as you're signed in ), you can always click the upload icon on the navbar to upload your own video for everyone to enjoy.

# Show page

<img src="/readme-screenshots/show.png" />

Show page has many components and will be where most of the time on bootube is spent. The video you're currently watching takes up most of the screen, with the ability to like and comment on it right underneath. And once you're done, you have recommended videos on the right side to choose from.

# Search results page

<img src="/readme-screenshots/search.png" />

bootube is up and coming so soon, there will be too many videos to browse through. That's where the search feature comes in handy! Allowing you to search for both users ( to view their channels and uploaded videos ) and videos at the same time!

# Channel

<img src="/readme-screenshots/channel.png" />

This is where a user's uploaded videos live. If you ever wanted to binge a single creator's content or browse through your own uploads, this is the place to do it.

# Edit

<img src="/readme-screenshots/edit.png" />

Through your channel page, you can choose to delete or edit your own videos. Not everything is meant to stay on the internet forever, or at least not in the same form.
