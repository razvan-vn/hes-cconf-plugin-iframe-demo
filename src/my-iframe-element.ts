export class MyIframeElement extends HTMLElement {
  constructor(url: string) {
    super();
    this.url = url;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  url: string | undefined;
  

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
      <iframe src="${this.url}"></iframe>
    `;
  }
}