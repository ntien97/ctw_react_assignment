# G123 React Assignment

## Author notes

```
Name: Nguyen Huu Anh Tien
Mail: nghuuanhtien@gmail.com
```
#### I made the following UI/UX improvements based on the wireframes provided

For simple action, prioritize default values over error messages. 
```
Simple actions should not be prone to error; if the UI is clear enough, the user will naturally understand it, rather than specific messages. 
As an example:
  Instead of displaying error messages when the user exceeds the maximum party size of ten, the button is disabled. 
```
Because this is a food-related app, images should be prioritized. 
```
I downloaded some images and named them, but the source of these images should be returned from the backend in a real-world application scenario (dishes.json). But I want to keep the dishes.json file intact.
```
Step-by-step UX improvement:
  - Step 1: 
    - Switch the Meal option from Select to Radio (only 1 meal can be selected at one time)
    - Using the - and + buttons, change the party size selection to a number input.
  - Step 2: Instead of hiding within the Select menu, all available restaurants should be displayed with their logos.
  - Step 3: Display all available dishes once more.
  - Step 4: Almost identical, but laid out in a more readable manner.


| This assignment is aimed to help us know more about your `React` skills.

<!-- toc -->

- [Requirements](#requirements)
  - [Must](#must)
  - [Optional](#optional)
- [Setup](#setup)
- [Description](#description)
  - [Step 1](#step-1)
  - [Step 2](#step-2)
  - [Step 3](#step-3)
  - [Step 4](#step-4)
  - [Notes](#notes)

<!-- tocstop -->

## Requirements

### Must

- Use `React`
- Use ES6 + TypeScript

### Optional

- If needed use a CSS framework, preferred `tailwindcss`
- Write Integration/Unit Tests

## Setup

As this test is to evaluate basic `React` skills, we won't focusing on tooling setup (webpack, create-react-app, Vite, etc...).

So FEEL FREE to use any tools or custom setup to jump start your development.

Also FEEL FREE to use any 3rd-party libraries you prefer (we maybe ask for the reasons).

## Description

We want a multi-steps form that is aimed to help users pre-order food from restaurants, the restaurants and food item data is provided in the [data](./data) folder.

Wire frames are provided in the [wire frames](./wireframes) folder (just guide lines, feel free to alter the UI).

### Step 1

- Select Meal Category (breakfast/lunch/dinner) (required)
- Need to input number of people (maximum 10) (required)

### Step 2

- Select restaurants that provides meals based on selection in Step 1. (required)

### Step 3

- Select dishes based on the meal and restaurant selected in Step 1 & Step 2.

- First choose a dish
- Then user can add number of servings of the dish (defaulted to 1)
- Also user CAN'T select the same dish twice, rather add more servings.

The total number of dishes (i.e Number of dishes \* respective serving) should be greater or equal to the number of people selected in Step 1 and a maximum of 10 is allowed.

### Step 4

User can review all his/her previous choices before final submit.

### Notes

- User can't proceed to next step unless have valid inputs on the current step.
- if inputs are invalid, show validation errors.
- At any step user can go back and change their preference on any previous step.
- For the final submit, just print the results in console, as we don't have any backend at this moment.
- Feel free to alter/optimize with the UI/UX.
