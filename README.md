
# WebEngage React-Native TypeScript Demo

This project shows how to implement WebEngage React-Native plugin with TypeScript template. A small fix for the import warnings has been included by adding the following JSON array object in the `tsconfig.json` file.

```json
{

  ...

  "include": [
    "src/**/*",
    "index.d.ts"
  ]
}
```

### Running the Demo App

To run Sample Project please follow below steps:

1. Install dependencies using the following command:
```
npm install --save
```

2.  For Android, replace ```YOUR_WEBENGAGE_LICENSE_CODE``` with your WebEngage license code in `MainApplication.java` file.

3. For iOS, replace ```YOUR_WEBENGAGE_LICENSE_CODE``` with your WebEngage license code in `Info.plist` file.

4. Now run you project using ```react-native run-android``` or ```react-native run-ios```.
