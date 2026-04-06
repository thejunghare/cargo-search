const html = require('xou');
const vxv = require('vxv');
const alert = require('./alert.js');
const betterUrl = require('./utils/betterURL');
const dotify = require('./utils/dotify');

const styles = vxv`
top: 48px; /* Match new titlebar height */
left: 0px;
right: 0px;
position: fixed;
padding: 4px 16px;
background: rgba(255, 255, 255, 0.8);
backdrop-filter: blur(10px);
text-align: left;
margin: 0px;
border-bottom: 1px solid rgba(0,0,0,0.03);
z-index: 9998;
transition: all .3s ease;

display: none;
opacity: 0;

&.vertical {
  top: 48px;
  left: 0;
  bottom: 0;
  width: 200px;
  height: auto;
  right: auto;
  padding: 16px 8px;
  border-bottom: none;
  border-right: 1px solid rgba(0,0,0,0.03);
  background: var(--tabs-vertical-bg, rgba(255, 255, 255, 0.95));
  
  ul {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  li {
    min-width: 0;
    max-width: none;
    width: 100%;
    height: 32px;
    padding: 6px 12px;
  }
}

:global(.tabs) {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  margin-top: 48px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  gap: 6px;
  align-items: center;
}

li {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  background: rgba(0,0,0,0.03);
  border: none;
  border-radius: 6px;
  min-width: 60px;
  max-width: 140px;
  height: 24px;
  transition: all .2s ease;
  position: relative;
  font-size: 11px;
  font-weight: 400;
  cursor: pointer;
  color: #70757a;
}

li:hover {
  background: rgba(0,0,0,0.06);
  color: #202124;
}

li.active {
    background: #fff;
    color: #202124;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  }

  li a {
    color: inherit;
    text-decoration: none;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    pointer-events: none;
  }

  .close {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    transition: all .15s;
    cursor: pointer;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    line-height: 1;
    color: #888;
    
    &:hover {
      background: rgba(0,0,0,0.1);
      color: #333;
    }
  }

  li:hover .close, li.active .close {
    opacity: 0.5;
  }

  li:hover .close:hover, li.active .close:hover {
    opacity: 1;
  }
`;

let toggle = false;
let a = () => { };

module.exports = (emitter, state) => {
  const render = () => {
    const isVertical = state.tabLayout === 'vertical';
    const el = html`<div id="tabs" class="${styles} ${isVertical ? 'vertical' : ''}">
      <ul class="tabs-bar">
        ${state.views.map((view, id) => {
      const webview = document.querySelector(`#${view.id}`);
      const active = view.element.style.display == 'block' ? true : false;
      let title = '';

      try {
        title = dotify(webview.getTitle(), 20);
      } catch (err) { }

      if (title == '' || title == ' ' || title == undefined) {
        title = dotify(webview.getURL(), 20);
      }

      if (title == '' || title == ' ' || title == undefined) {
        title = dotify(betterUrl(webview.getAttribute('src')) || 'New Tab', 20);
      }

      let closeClicked = false;

      return html`<li class="${active == true ? 'active' : ''}" onclick=${() => {
        if (!closeClicked) {
          emitter.emit('webview-change', id);
          emitter.emit('tabs-render');
        }
      }}><a class="nav">${title}</a><span class="close" onclick=${e => {
        closeClicked = true;
        e.stopPropagation();
        emitter.emit('webview-remove', id);

        setTimeout(() => {
          closeClicked = false;
        }, 10);
      }}>×</span></li>`;
    })}
      </ul>
    </div>`;

    try {
      new SimpleBar(el.querySelector('.tabs-bar'), {
        direction: isVertical ? 'ltr' : 'ltr', // Standard ltr
        orientation: isVertical ? 'vertical' : 'horizontal'
      });
    } catch (e) { }

    el.style.display = 'block';
    el.style.opacity = '1';

    return el;
  };

  const element = render();
  document.body.appendChild(element);

  emitter.on('tabs-render', () => {
    const newEl = render();
    html.update(element, newEl);
  });

  // Toggle functionality removed to keep tabs persistent
  // emitter.on('tabs-toggle', ... );

  emitter.on('tabs-create', src => {
    emitter.emit('webview-create', src);
    emitter.emit('tabs-render');
  });

  emitter.on('tabs-remove-current', () => {
    state.views.forEach((view, id) => {
      const active = view.element.style.display == 'block' ? true : false;

      if (active) {
        emitter.emit('webview-remove', id);
        emitter.emit('tabs-render');
      }
    });
  });
};
