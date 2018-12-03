import angular from "angular";

import buttonComponent from "./button.component";
import buttonAltComponent from "./button-alt.component";

const MyAppModule = angular
  .module("myApp", [])
  .component(...buttonAltComponent)
  .component(...buttonComponent);

export { MyAppModule };
