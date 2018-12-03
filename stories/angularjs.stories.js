import { storiesOf } from "@storybook/html";

import { text, withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { forModule } from "storybook-addon-angularjs";

  storiesOf("Components/Buttons/Default", module)
  .addDecorator(withKnobs)
  .add(
    "default",
    forModule("myApp").createElement(compile => {
      const label = text("Label", "Button");
      const onHit = action("hit");

      return compile`
      <button-component 
      label="${label}" 
      on-hit="${onHit}(${label})">
      </button-component>
      `;
    })
  );

  storiesOf("Components/Buttons/Alt", module)
  .addDecorator(withKnobs)
  .add(
    "Alt",
    forModule("myApp").createElement(compile => {
      const label = text("Label", "Button");
      const onHit = action("hit");

      return compile`
      <button-alt-component
      class="{{$ctrl.classes.btn-alt}}" 
      label="${label}" 
      on-hit="${onHit}(${label})">
      </button-component>
      `;
    })
  );
  