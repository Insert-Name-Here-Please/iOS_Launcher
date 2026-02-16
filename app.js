// Simple tile data — edit to add your apps/links
const tiles = [
  {label:'Phone', href:'tel:+123456789', icon:'/icons/phone.png'},
  {label:'Mail', href:'mailto:me@example.com', icon:'/icons/mail.png'},
  {label:'Notes', href:'shortcuts://run-shortcut?name=Notes', icon:'/icons/notes.png'},
  {label:'Web', href:'https://duckduckgo.com', icon:'/icons/web.png'},
  {label:'Maps', href:'maps://', icon:'/icons/maps.png'},
  {label:'Files', href:'shareddocuments://', icon:'/icons/files.png'}
];

const grid = document.getElementById('grid');
tiles.forEach(t=>{
  const a = document.createElement('a');
  a.className='tile';
  a.href = t.href;
  a.innerHTML = `<img src="${t.icon}" alt=""><span>${t.label}</span>`;
  grid.appendChild(a);
});

// register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(()=>{});
}
