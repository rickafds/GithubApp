import { AppRegistry } from "react-native";
if (__DEV__) {
  import("./src/config/ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}
import App from "./src";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
