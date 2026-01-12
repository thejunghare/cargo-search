const html = require('xou');
const vxv = require('vxv');
const alert = require('./alert.js');
const betterUrl = require('./utils/betterURL');
const dotify = require('./utils/dotify');

const styles = vxv`
top: 68px; /* Push down to clear taller titlebar + spacing */
left: 0px;
right: 0px;
position: fixed;
padding: 0 24px; /* Match titlebar padding */
background: transparent; /* Transparent track */
text-align: center;
margin: 0px;
border: none;
transition: opacity .3s;

display: none;
opacity: 0;

:global(.tabs) {
border-radius:10px red solid;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  margin-top: 68px;
}

:global(.simplebar-scrollbar) {
  border-radius: 4px!important;
  background-color: rgba(0,0,0,0.1);
}

:global(.simplebar-track.horizontal) {
  height: 6px;
  background: transparent;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  text-align: left;
  display: flex;
  gap: 8px; /* Space between tabs */
}

li {
  display: inline-flex;
  align-items: center;
  width: 200px;
  padding: 8px 16px;
  background: rgba(255,255,255,0.7); /* translucent inactive */
  border: 1px solid transparent;
  border-radius: 8px 8px 0 0; /* Rounded top */
  /* OR fully rounded pill: border-radius: 8px; */
  border-radius: 10px;
  
  height: 36px;
  transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0,0,0,0.02);
  cursor: pointer;
}

li a {
  color: #5f6368;
  text-align: left;
  text-decoration: none;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none; /* Let parent handle click */
}

li:hover {
  background: rgba(255,255,255,0.9);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);

  .close {
    opacity: 1;
  }
}

li.active {
  background: #FFF;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  color: #1a73e8;
  z-index: 2;

  & a {
    color: #202124;
    font-weight: 600;
  }

  .close {
    opacity: 1;
  }
}

.close {
  position: absolute !important;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all .2s;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 10px;
  color: #999;
  
  &:hover {
    background: rgba(0,0,0,0.1);
    color: #d93025;
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
      let title = 'Loading';

      try {
        title = dotify(webview.getTitle());
      } catch (err) { }

      if (title == '' || title == ' ' || title == undefined) {
        title = dotify(webview.getURL());
      }

      if (title == '' || title == ' ' || title == undefined) {
        title = dotify(betterUrl(webview.getAttribute('src')) || 'Loading');
      }

      let closeClicked = false;

      return html`<li class="${active == true ? 'active' : ''}" onclick=${() => {
        if (!closeClicked) {
          emitter.emit('webview-change', id);
          emitter.emit('tabs-render');
        }
      }}><a class="nav">${title} <span class="close" onclick=${e => {
        closeClicked = true;
        e.preventDefault();
        emitter.emit('webview-remove', id);

        setTimeout(() => {
          closeClicked = false;
        }, 10);
      }}>×</span></a></li>`;
    })}
      </ul>
    </div>`;

    new SimpleBar(el.querySelector('.tabs-bar'));

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
