class CustomCard extends HTMLElement {
    constructor() {
      super();
  
      // Создание shadow DOM
      this.attachShadow({ mode: 'open' });
  
      // Получение содержимого слотов и шаблонов
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          /* Здесь можно добавить стили для компонента */
          :host {
            display: block;
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px;
            padding: 16px;
          }
  
          .header {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 8px;
          }
  
          .content {
            font-size: 14px;
            color: #555;
            line-height: 1.6;
            width: 300px;
          }
  
          img {
            max-width: 100%;
            height: auto;
            border-radius: 4px;
            margin-top: 10px;
          }
        </style>
        <div class="card">
          <div class="header">
            <slot name="header"></slot>
          </div>
          <div class="content">
            <slot name="content"></slot>
          </div>
        </div>
      `;
  
      // Клонирование содержимого шаблона в shadow DOM
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('custom-card', CustomCard);
  