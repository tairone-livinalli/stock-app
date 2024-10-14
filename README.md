# Stock App

This is a simple study project to learn about Expo and develop a stock app with an algorithm to make recommendations.

## Demo

https://github.com/user-attachments/assets/54d856be-2f67-4f03-88fb-52b3ac79bd60

<img src="https://github.com/user-attachments/assets/7a22b148-89b6-4996-8a65-82ab7d7c8c43" width="230.63" height="500">
<img src="https://github.com/user-attachments/assets/51751f41-0f9e-4055-b7fb-74879a10fd0f" width="230.63" height="500">
<img src="https://github.com/user-attachments/assets/9c3d93a4-a432-4e24-907d-7ae615567b39" width="230.63" height="500">


## Requirements

- Node.js
- Expo CLI
- Android Studio (for Android emulator)
- Xcode (for iOS emulator)

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run ios` or `npm run android` to start the app

## Features

- [x] List of stocks
- [x] Stock recommendations algorithm

## Algorithm

The algorithm is based on the following rules:

1. If the stock price rises with moderate social media support = Buy
2. If the stock price drops with high social media support = Buy
3. If the stock price drops with low social media support = Sell
4. If the stock price rises with low social media support = Sell
