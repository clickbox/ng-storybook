import jss from 'jss'
import preset from 'jss-preset-default'

jss.setup(preset())

const componentName = "buttonAltComponent";

const style = {
  btn: {
    display: 'inline-block',
    'background': '#C83192',
    'border': 'solid 2px #C83192',
    'color': '#FFF',
    'border-radius': '5px',
    'font-family': 'Roboto Condensed',
    'font-size': '1rem',
    'font-weight': 'bold',
    'line-height': '17px',
    'padding': '4px 14px',
    'position': 'relative',
    'text-align': 'center',
    'text-decoration': 'none',
    'transition': 'background .4s, border .4s, color .4s',
    'vertical-align': 'middle',
    'z-index': '1'
  }
}

const sheet = jss.createStyleSheet(style).attach()

const component = {
  template: `
        <button 
          class="{{$ctrl.classes.btn}}" 
          ng-click="$ctrl.onClick($ctrl.label)"
        >
          {{$ctrl.label}}
        </button>
  `,
  bindings: {
    label: "<",
    onHit: "&"
  },
  controller: class { 
    $onInit() {
      this.classes = sheet.classes;
      console.log("$onInit");
    }

    $onChanges(changes) {
      console.log("$onChanges", changes);
    }

    onClick(label) {
      console.log("onHit", label);
      this.onHit({ label });
    }
  }
};

export default [componentName, component];
