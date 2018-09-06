import {html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * `test-polymer3`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TestPolymer3 extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          color: green;
        }
      </style>

      <h2>Hello {{word}}!</h2>
    `;
  }
  static get properties() {
    return {
      word: {
        type: String,
        value: "World"
      }
    };
  }
}

window.customElements.define('test-polymer3', TestPolymer3);
