import template from './about.component.html';
import './about.component.scss';

export default function AboutComponent(appModule) {
  appModule.component('atAbout', {
    template: template
  });
}

