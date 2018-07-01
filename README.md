# React-Native TypeScript
This is a boilerplate code that can get you started for React-Native applications in [TypeScript](http://www.typescriptlang.org).

This boilerplate is designed to be as simplistic as it can be and is "ejected" by default.

## Prerequisites
- NodeJS
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

## Setup
1. Clone this repo with your application name as the second argument:
    ```bash
    $ git clone https://github.com/vjcagay/react-native-typescript.git <application-name>
    $ cd <application-name>
    ```
    Then delete this repo's git history and initialize a new one.
2. Run `npm install` to install the dependencies.
3. Run `npm run setup` to create the `android` and `ios` folders.
4. If you are running the iOS and Android emulators simultaneously (in a Mac) the Metro servers should be running on separate ports. You can do this by running `npm run start-ios` and `npm run start-android` on different terminal instances respectively.
5. To push the code to the simulators/devices you can run `npm run ios` and `npm run android`.

## Testing and Linting
This boilerplate uses [Jest](https://facebook.github.io/jest/) and is preconfigured to be able to test TypeScript React-Native code.

[TSLint](https://palantir.github.io/tslint/) is also included for linting TypeScript code.


## Debugging
[React Native Debugger](https://github.com/jhen0409/react-native-debugger) is used by default since it offers more features out-of-the-box.

## Contributing
Please file an issue if you find a bug or have concerns or make a pull request if you like some sensible changes!

## Author
© [vjcagay](https://github.com/vjcagay), Released under the [MIT](https://github.com/vjcagay/webpack-typescript/blob/master/LICENSE) license.

## References
https://github.com/react-community/create-react-native-app

https://github.com/Microsoft/TypeScript-React-Native-Starter
