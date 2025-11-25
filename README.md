# Countdown Timer & Promise Generator

This repository contains two independent tasks focused on practicing asynchronous JavaScript, working with timers, delays, Promises, and user notifications.
The project is built with Vite and uses flatpickr and iziToast libraries.

# Countdown Timer

Features
Implementation of a countdown timer linked to a user-selected date.
Integrated flatpickr for cross-browser date & time selection.
Validation prevents selecting a past date and disables the Start button until a valid future date is chosen.
Timer updates every second using setInterval.
Remaining time is displayed in the Days / Hours / Minutes / Seconds format.
Automatic formatting with leading zeros.
Timer stops correctly at 00:00:00:00.
Notifications for invalid actions are displayed using iziToast.
Input becomes disabled while the timer is running to prevent new selections.

# Promise Generator

Features
Form submission intercepted with event.preventDefault().
Promise is created with a user-specified delay (in ms).
Promise resolves or rejects depending on the selected radio option.
After the delay expires, iziToast displays: Fulfilled or Rejected.
Form resets after each submission.
All notifications handled via iziToast, not console logs.

# Strengthened

Understanding synchronous vs asynchronous JavaScript
Working with setTimeout, setInterval
Creating and handling Promises
Using external libraries in real tasks
Building clean UI behavior and validation logic
