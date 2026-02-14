const html = require('xou');
const vxv = require('vxv');
const alert = require('./alert.js');
const betterUrl = require('./utils/betterURL');
const dotify = require('./utils/dotify');

const styles = vxv`
top: 54px;
left: 0px;
right: 0px;
position: fixed;
padding: 0 16px;
background: transparent;
text-align: left;
margin: 0px;
border: none;

display: none;
opacity: 0;

:global(.tabs) {
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  margin-top: 54px;
}

:global(.simplebar-scrollbar) {
  border-radius: 2px!important;
  background-color: rgba(0,0,0,0.15);
}

:global(.simplebar-track.horizontal) {
  height: 4px;
  background: transparent;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  display: flex;
  gap: 4px;
  align-items: center;
}

li {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  background: rgba(0,0,0,0.06);
  border: none;
  border-radius: 6px;
  min-width: 80px;
  max-width: 160px;
  height: 28px;
  transition: all .15s ease;
  position: relative;
  font-size: 11px;
  font-weight: 400;
  cursor: pointer;
  color: #666;
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

li:hover {
  background: rgba(0,0,0,0.1);
  color: #333;

  .close {
    opacity: 0.5;
  }
}

li.active {
  background: #fff;
  color: #000;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);

  & a {
    color: #000;
  }

  .close {
    opacity: 0.5;
  }
}

li.active:hover {
  .close {
    opacity: 1;
  }
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
`;

let toggle = false;
let a = () => { };

module.exports = (emitter, state) => {
  const render = () => {
    const el = html`<div id="tabs" class="${styles}">
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
      new SimpleBar(el.querySelector('.tabs-bar'));
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
