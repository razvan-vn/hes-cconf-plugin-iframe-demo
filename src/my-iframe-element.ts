export class MyIframeElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        :host {
          display: flex;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
          box-sizing: border-box;
        }

        iframe {
          width: 100%;
        }
      </style>
      <iframe src="https://www.sport.es/es/"></iframe>
    `;
  }
}

// Define el custom element
customElements.define('my-iframe-element', MyIframeElement);

// Declaración global (opcional, pero útil para TypeScript)
declare global {
  interface HTMLElementTagNameMap {
    'my-iframe-element': MyIframeElement;
  }
}