const html = require('xou');
const vxv = require('vxv');
const alert = require('./alert.js');
const dotify = require('./utils/dotify');

const Dexie = require('dexie');

// --- MODERN "GLASS" CSS ---
const styles = vxv`
height: calc(100vh - 60px); /* Adjusted for header */
overflow-y: auto;

/* Frosted Glass Background */
background: rgba(255, 255, 255, 0.85);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);

padding: 0;
font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;

.history-container {
  max-width: 680px; /* Narrower for better readability */
  margin: 0 auto;
  padding: 40px 20px;
}

h2 {
  font-size: 11px;
  color: #888;
  margin: 32px 0 12px 12px; /* Indented slightly to match list items */
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 600;
  border: none;
  padding: 0;
}

/* Remove card look, go for clean list */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
}

li {
  padding: 10px 14px;
  margin-bottom: 2px;
  border-bottom: none; /* No dividers */
  border-radius: 8px; /* Rounded corners on hover */
  display: flex;
  flex-direction: column;
  transition: all 0.15s ease;
  cursor: default;

  &:hover {
    background: rgba(0, 0, 0, 0.05); /* Subtle grey pill hover */
    transform: scale(1.005);
  }
}

.title {
  font-size: 14px;
  color: #222;
  font-weight: 500;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #888;
}

.url {
  color: #666; /* Neutral color, not heavy blue */
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 75%;
  cursor: pointer;
  transition: color 0.1s;

  &:hover {
    color: #000; /* Darken on hover instead of underline */
    text-decoration: none;
  }
}

.time {
  color: #bbb;
  font-variant-numeric: tabular-nums; /* Monospaced numbers for alignment */
  font-size: 11px;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.1);
  border-radius: 3px;
}
`;

const overlayStyles = vxv`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0px;
  z-index: 100;
  
  /* Blended Header */
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-family: -apple-system, BlinkMacSystemFont, "Inter", sans-serif;
  font-size: 15px;
  font-weight: 600;
  color: #333;
  letter-spacing: -0.01em;
`;

let toggle = false;
let a = () => { };

const db = new Dexie('history');

db.version(1).stores({
  visit: 'url, title, timestamp'
});

const getGroupTitle = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);

  if (date.toDateString() === now.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }
};

module.exports = emitter => {
  const titleBarOverlay = html`<div id="history-overlay" class="${overlayStyles}">History</div>`;

  const element = html`<div id="history" class="${styles}">
    <div class="history-container"></div>
  </div>`;

  emitter.on('history-toggle', () => {
    if (toggle) {
      a();
      toggle = !toggle;
      if (document.body.contains(titleBarOverlay)) {
        document.body.removeChild(titleBarOverlay);
      }
    } else {
      try {
        a = alert({
          text: element,
          position: 'bottom'
        });

        document.body.appendChild(titleBarOverlay);
        const container = element.querySelector('.history-container');
        if (!container) {
          console.error('History container not found');
          return;
        }
        container.innerHTML = ''; // Clear previous content

        // ✅ FIX: Add error handling for database operations
        db.visit.orderBy('timestamp').reverse().toArray()
          .then(visits => {
            const groups = {};

            // Group visits
            visits.forEach(visit => {
              const group = getGroupTitle(visit.timestamp);
              if (!groups[group]) groups[group] = [];
              groups[group].push(visit);
            });

            // Render groups
            for (const [groupTitle, items] of Object.entries(groups)) {
              const groupHeader = html`<h2>${groupTitle}</h2>`;
              const list = html`<ul></ul>`;

              items.forEach(data => {
                const date = new Date(data.timestamp);
                const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                const li = html`<li>
                  <span class="title">${dotify(data.title || 'No Title', 60)}</span>
                  <div class="meta">
                    <span class="url" onclick=${() => {
                    emitter.emit('tabs-create', data.url);
                    a(); // Close alert
                    toggle = !toggle;
                    if (document.body.contains(titleBarOverlay)) {
                      document.body.removeChild(titleBarOverlay);
                    }
                  }}>${dotify(data.url, 50)}</span>
                    <span class="time">${timeStr}</span>
                  </div>
                </li>`;
                list.appendChild(li);
              });

              container.appendChild(groupHeader);
              container.appendChild(list);
            }
          })
          .catch(err => {
            console.error('Error loading history from database:', err);
            // Show error message in UI
            const errorMsg = html`<p style="color: #d93025; text-align: center; padding: 20px;">Unable to load history. Please try again.</p>`;
            container.appendChild(errorMsg);
          });

        toggle = !toggle;
      } catch (err) {
        console.error('Error toggling history view:', err);
      }
    }
  });

  emitter.on('history-navigated', data => {
    try {
      // ✅ FIX: Add validation and error handling
      if (!data || !data.url) {
        console.warn('Invalid history data:', data);
        return;
      }

      const time = new Date().getTime();
      db.visit.add({
        url: data.url,
        title: data.title || 'No Title',
        timestamp: time
      }).catch(err => {
        console.error('Error saving history entry:', err);
      });
    } catch (err) {
      console.error('Error in history-navigated handler:', err);
    }
  });
};