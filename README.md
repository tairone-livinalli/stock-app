# Stock App

This is a simple study project to learn about expo and develop a stock app with an algorithm to make recommendations.

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

1. If the stock price rises with a moderate social media support = Buy
2. If the stock price rises with a strong social media support = Buy
3. If the stock price drops with a high social media support = Buy
4. If the stock price drops with a low social media support = Sell
5. If the stock price rises with a low social media support = Sell
