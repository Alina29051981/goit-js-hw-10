# Countdown Timer & Promise Generator

This repository contains two independent tasks focused on practicing asynchronous JavaScript, working with timers, delays, Promises, and user notifications.
The project is built with Vite and uses flatpickr and iziToast libraries.

**Live Demo:**  
[GitHub Pages Link](https://Alina29051981.github.io/goit-js-hw-10/) 

![Build Status](https://img.shields.io/github/actions/workflow/status/Alina29051981/goit-js-hw-10/deploy.yml?branch=main)
![Last Commit](https://img.shields.io/github/last-commit/Alina29051981/goit-js-hw-10)
![Repo Size](https://img.shields.io/github/repo-size/Alina29051981/goit-js-hw-10)

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![HTML5](https://img.shields.io/badge/Markup-HTML5-orange)
![CSS3](https://img.shields.io/badge/Styles-CSS3-blue)

![GitHub stars](https://img.shields.io/github/stars/Alina29051981/goit-js-hw-10?style=social)
![GitHub issues](https://img.shields.io/github/issues/Alina29051981/goit-js-hw-10)

![Made with Love](https://img.shields.io/badge/Made%20with-%E2%99%A5-red)

# Countdown Timer
[GitHub Pages Link-1](https://alina29051981.github.io/goit-js-hw-10/1-timer.html) 

Features
- Implementation of a countdown timer linked to a user-selected date.
- Integrated flatpickr for cross-browser date & time selection.
- Validation prevents selecting a past date and disables the Start button until a valid future date is chosen.
- Timer updates every second using setInterval.
- Remaining time is displayed in the Days / Hours / Minutes / Seconds format.
- Automatic formatting with leading zeros.
- Timer stops correctly at 00:00:00:00.
- Notifications for invalid actions are displayed using iziToast.
- Input becomes disabled while the timer is running to prevent new selections.

# Promise Generator
[GitHub Pages Link-2](https://alina29051981.github.io/goit-js-hw-10/2-snackbar.html) 

Features
- Form submission intercepted with event.preventDefault().
- Promise is created with a user-specified delay (in ms).
- Promise resolves or rejects depending on the selected radio option.
- After the delay expires, iziToast displays: Fulfilled or Rejected.
- Form resets after each submission.
- All notifications handled via iziToast, not console logs.

# Strengthened

- Understanding synchronous vs asynchronous JavaScript
- Working with timeouts, intervals
- Creating and handling Promises
- Using external libraries in real tasks
- Building clean UI behavior and validation logic
