const DB_NAME = 'blogNotes', STORE = 'notes';
let db;

async function openDB() {
  return new Promise((res, rej) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onerror = () => rej();
    req.onsuccess = () => { db = req.result; res(); };
    req.onupgradeneeded = e => {
      const d = e.target.result;
      if (!d.objectStoreNames.contains(STORE))
        d.createObjectStore(STORE, {keyPath: 'id', autoIncrement: true});
    };
  });
}

async function addNote(note) {
  const tx = db.transaction([STORE], 'readwrite');
  tx.objectStore(STORE).add(note);
}

async function getAllNotes() {
  return new Promise(res => {
    const tx = db.transaction([STORE], 'readonly');
    const store = tx.objectStore(STORE);
    const arr = [];
    store.openCursor().onsuccess = e => {
      const c = e.target.result;
      if (c) { arr.push(c.value); c.continue(); }
      else res(arr.reverse());
    };
  });
}

async function deleteNote(id) {
  const tx = db.transaction([STORE], 'readwrite');
  tx.objectStore(STORE).delete(id);
}

// 页面逻辑
function showEditor() {
  document.getElementById('editor').style.display = 'block';
  document.getElementById('list').style.display = 'none';
  document.getElementById('title').value = '';
  document.getElementById('body').value = '';
}

function cancelEdit() {
  document.getElementById('editor').style.display = 'none';
  document.getElementById('list').style.display = 'block';
}

async function saveNote() {
  const body = document.getElementById('body').value.trim();
  if (!body) return alert('正文不能为空');
  await addNote({
    title: document.getElementById('title').value.trim(),
    body: body,
    date: new Date().toLocaleString()
  });
  cancelEdit();
  loadList();
}

async function loadList() {
  await openDB();
  const notes = await getAllNotes();
  const list = document.getElementById('list');
  list.innerHTML = notes.length ? notes.map(n => `
    <details>
      <summary>${n.title || '无题'} <small>${n.date}</small>
        <button onclick="deleteNote(${n.id});loadList();" style="float:right;">删除</button>
      </summary>
      <div style="white-space:pre-wrap">${n.body}</div>
    </details>`).join('') : '<p>暂无随笔，点上方“写新随笔”开始～</p>';
}

loadList();