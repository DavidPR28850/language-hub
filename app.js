const resources = {
  english: {
    title: 'English', flag: 'gb',
    quick: [
      { label: '☁️ Mi carpeta de OneDrive', url: 'https://1drv.ms/f/c/685f78fc014b807e/IgD8W1kqTLq1Ram3CMjSqBNLAcA2Js6H5pbhaR8Ks3un7Ak?e=1550ny' },
      { label: '✉️ Newsletters en inglés', action: 'outlookEnglish' }
    ],
    categories: {
      Listening: [{ name: 'BBC Learning English — Skills', url: 'https://www.bbc.co.uk/learningenglish/english/skills', note: 'Listening y otras destrezas', icon: '🎧' }, { name: 'Teledirecto — Reino Unido', url: 'https://www.teledirecto.es/country/3/', note: 'Televisión británica en directo', icon: '📺' }],
      Reading: [{ name: 'BBC Learning English — Courses', url: 'https://www.bbc.co.uk/learningenglish/english/courses', note: 'Cursos y lecturas guiadas', icon: '📖' }],
      Speaking: [{ name: 'BBC Learning English — Pronunciation', url: 'https://www.bbc.co.uk/learningenglish/english/learn_pronunciation', note: 'Pronunciación', icon: '🗣️' }],
      Grammar: [{ name: 'BBC Learning English — Grammar', url: 'https://www.bbc.co.uk/learningenglish/english/grammar', note: 'Gramática', icon: '✍️' }],
      Vocabulary: [{ name: 'BBC Learning English — Vocabulary', url: 'https://www.bbc.co.uk/learningenglish/english/vocabulary', note: 'Vocabulario', icon: '🧠' }],
      Fun: [{ name: 'Teledirecto — Reino Unido', url: 'https://www.teledirecto.es/country/3/', note: 'Televisión británica en directo', icon: '📺' }, { name: 'BBC Learning English — Business English', url: 'https://www.bbc.co.uk/learningenglish/english/business-english', note: 'Inglés para el trabajo', icon: '💼' }],
      'YouTube Channels': [{ name: '@mariaspeaksenglish', url: 'https://www.youtube.com/@mariaspeaksenglish', note: 'Canal de YouTube', icon: '▶️' }, { name: '@vaughan-cursosdeingles', url: 'https://www.youtube.com/@vaughan-cursosdeingles', note: 'Canal de YouTube', icon: '▶️' }, { name: '@YouTalkTv', url: 'https://www.youtube.com/@YouTalkTv', note: 'Canal de YouTube', icon: '▶️' }],
      'SPEAK UP': [{ name: 'Speak Up revista', note: 'Abre la app en Android o la web en Windows', icon: '📖', action: 'speakup' }]
    }
  },
  italian: { title:'Italiano', flag:'it', quick:[{ label:'☁️ La mia cartella OneDrive', action:'onedrivePending' }, { label:'✉️ Notizie in italiano', action:'outlookItalian' }, { label:'🇮🇹 Online Italian Club', url:'https://onlineitalianclub.com/' }], categories:{ Ascolto:[{ name:'Lingua.com — Ascolto', url:'https://lingua.com/es/italiano/escucha/', note:'Esercizi di ascolto', icon:'🎧' }, { name:'Lingua.com — Dettati', url:'https://lingua.com/es/italiano/dictados/', note:'Dettati in italiano', icon:'✍️' }], Lettura:[{ name:'Lingua.com — Lettura', url:'https://lingua.com/es/italiano/lectura/', note:'Esercizi di lettura', icon:'📖' }], Grammatica:[{ name:'Lingua.com — Grammatica', url:'https://lingua.com/es/italiano/gramatica/', note:'Esercizi di grammatica', icon:'✍️' }], Vocabolario:[{ name:'Lingua.com — Allenatore di vocabolario', url:'https://lingua.com/es/italiano/vocabulario/entrenador/', note:'Allenati con le parole', icon:'🧠' }, { name:'Le mille parole più frequenti', url:'https://vocabulario.com.mx/las-mil-palabras-mas-frecuentes-en-italiano/', note:'Vocabolario italiano', icon:'🧠' }], 'Canali YouTube': [{ name:'@lucreziaoddone', url:'https://www.youtube.com/@lucreziaoddone', note:'Canale YouTube', icon:'▶️' }, { name:'@italianoautomatico', url:'https://www.youtube.com/@italianoautomatico', note:'Canale YouTube', icon:'▶️' }, { name:'@Italianeando', url:'https://www.youtube.com/@Italianeando', note:'Canale YouTube', icon:'▶️' }], Notizie:[{ name:'Easy Italian News', url:'https://easyitaliannews.com/', note:'Notizie in italiano', icon:'🗞️' }], 'Campus Torrejón':[{ name:'Campus Torrejón', url:'https://campustorrejon.formacampus.com/IndexIF.aspx', note:'Plataforma de formación', icon:'🎓' }] } },
  french: { title:'Français', flag:'fr', quick:[{ label:'☁️ Mon dossier OneDrive', url:'https://onedrive.live.com/my?id=%2Fpersonal%2F685f78fc014b807e%2FDocuments%2FIDIOMAS%2FFRANC%C3%89S&viewid=9152b10a%2Da9bc%2D41e4%2Da1a7%2D421135efde51' }], categories:{ Grammaire:[{ name:'TV5MONDE — Exercices A1 débutant', url:'https://apprendre.tv5monde.com/fr/exercices/a1-debutant', note:'Exercices de français', icon:'📺' }], 'Chaînes YouTube': [{ name:'@OhlàlàGinetteAprendefrancéscon', url:'https://www.youtube.com/@Ohl%C3%A0l%C3%A0GinetteAprendefranc%C3%A9scon', note:'Chaîne YouTube', icon:'▶️' }, { name:'@clasesfrancesfacil', url:'https://www.youtube.com/@clasesfrancesfacil', note:'Chaîne YouTube', icon:'▶️' }], Actualités:[{ name:'RFI — Journal en français facile', url:'https://francaisfacile.rfi.fr/es/podcasts/journal-en-fran%C3%A7ais-facile/', note:'Actualités en français facile', icon:'🗞️' }] } }
};
const categoryMeta = {
  english: { Listening:['🎧','Listening'], Reading:['📖','Reading'], Speaking:['🗣️','Speaking'], Grammar:['✍️','Grammar'], Vocabulary:['🧠','Vocabulary'], Fun:['🎬','Fun'], 'YouTube Channels':['▶️','YouTube'], 'SPEAK UP':['📖','Revista RBA'] },
  italian: { Ascolto:['🎧','Ascolto'], Lettura:['📖','Lettura'], Conversazione:['🗣️','Conversazione'], Grammatica:['✍️','Grammatica'], Vocabolario:['🧠','Vocabolario'], 'Tempo libero':['🎬','Tempo libero'], 'Canali YouTube':['▶️','YouTube'], Notizie:['🗞️','Notizie'], 'Campus Torrejón':['🎓','Campus'] },
  french: { 'Écoute':['🎧','Écoute'], Lecture:['📖','Lecture'], 'Expression orale':['🗣️','Expression orale'], Grammaire:['✍️','Grammaire'], Vocabulaire:['🧠','Vocabulaire'], Loisirs:['🎬','Loisirs'], 'Chaînes YouTube':['▶️','YouTube'], Actualités:['🗞️','Actualités'] }
};
const homeView = document.querySelector('#homeView'), languageView = document.querySelector('#languageView');
let activeLanguage = 'english', deferredPrompt;
function openLink(url) { window.open(url, '_blank', 'noopener'); }
function showLanguage(key) {
  activeLanguage = key; const lang = resources[key];
  document.querySelector('#languageFlag').innerHTML = `<img src="flags/${lang.flag}.svg" alt="Bandera de ${lang.title}" />`; document.querySelector('#languageTitle').textContent = lang.title;
  const actions = document.querySelector('#quickActions'); actions.innerHTML = '';
  if (key === 'english') { const news = document.createElement('button'); news.textContent = '📰 ENGLISH NEWS — Newsletters & actualidad'; news.onclick = () => openOutlookDialog('english'); actions.append(news); }
  lang.quick.forEach(item => { const button = document.createElement('button'); button.textContent = item.label; button.onclick = () => item.action === 'outlookEnglish' ? openOutlookDialog('english') : item.action === 'outlookItalian' ? openOutlookDialog('italian') : item.action === 'speakup' ? showSpeakUp() : item.action === 'onedrivePending' ? showOneDrivePending() : openLink(item.url); actions.append(button); });
  const grid = document.querySelector('#categoryGrid'); grid.innerHTML = '';
  Object.entries(categoryMeta[key]).forEach(([name,[icon,description]]) => { const card = document.createElement('button'); card.className='category'; card.innerHTML=`<span>${icon}</span><b>${name}</b><small>${description}</small>`; card.onclick=()=>showResources(name); grid.append(card); });
  document.querySelector('#resourcesSection').hidden = true; homeView.classList.remove('active'); languageView.classList.add('active');
}
function showResources(category) {
  const lang = resources[activeLanguage], list = lang.categories[category] || [];
  document.querySelector('#resourcesTitle').textContent = category;
  const target = document.querySelector('#resourceList'); target.innerHTML = '';
  if (!list.length) target.innerHTML = `<p class="hint">Aquí irán tus recursos de ${category.toLowerCase()}. Es muy fácil añadirlos después.</p>`;
  list.forEach(item => { const el = document.createElement(item.url ? 'a' : 'button'); el.className='resource'; if (item.url) { el.href=item.url; el.target='_blank'; el.rel='noopener'; } else el.type='button'; el.innerHTML=`<span class="resource-icon">${item.icon}</span><div><b>${item.name}</b><small>${item.note}</small></div><i>${item.url?'↗':'›'}</i>`; if(item.action==='speakup') el.onclick=showSpeakUp; target.append(el); });
  const section = document.querySelector('#resourcesSection'); section.hidden=false; section.scrollIntoView({ behavior:'smooth', block:'start' });
}
function showSpeakUp() {
  const android = /Android/i.test(navigator.userAgent);
  if (android) {
    const fallback = encodeURIComponent('https://www.speakup.es/app');
    window.location.href = `intent://open/#Intent;scheme=speakup;package=es.rba.speakup;S.browser_fallback_url=${fallback};end`;
    return;
  }
  openLink('https://www.speakup.es/app');
}
function showDuolingo() {
  if (/Android/i.test(navigator.userAgent)) {
    const fallback = encodeURIComponent('https://www.duolingo.com/');
    window.location.href = `intent://learn/#Intent;scheme=duolingo;package=com.duolingo;S.browser_fallback_url=${fallback};end`;
    return;
  }
  openLink('https://www.duolingo.com/');
}
function showOneDrivePending() { alert('Esta carpeta está preparada para añadirse. Falta únicamente el enlace exacto de OneDrive de este idioma; no se ha inventado ninguna ruta.'); }
function makeQuery() { const senders = document.querySelector('#senderInput').value.split(/\n|,/).map(s=>s.trim()).filter(Boolean); return senders.length ? senders.map(s=>`from:${s}`).join(' OR ') : ''; }
const OUTLOOK_ACCOUNT = 'davidpardoreina@hotmail.com';
const newsletterConfig = { english:{ storage:'languageHubEnglishNewslettersV2', fallback:'info@mailing.rba.es', description:'Correos de Speak Up News en inglés.' }, italian:{ storage:'languageHubItalianNewsletters', fallback:'donotreply@wordpress.com', description:'Correos de EasyItalianNews.com en italiano.' } };
let outlookLanguage = 'english';
function openOutlookDialog(language) { outlookLanguage = language; const config = newsletterConfig[language], input=document.querySelector('#senderInput'); input.value=localStorage.getItem(config.storage) || config.fallback; document.querySelector('#outlookDescription').textContent=config.description + ' Puedes modificar las direcciones cuando quieras; quedarán guardadas solo en este dispositivo.'; updateQuery(); document.querySelector('#outlookDialog').showModal(); }
function updateQuery() { document.querySelector('#queryPreview').textContent = makeQuery() || 'from:[remitente]'; }
document.querySelectorAll('[data-language]').forEach(button=>button.onclick=()=>showLanguage(button.dataset.language));
document.querySelector('#duolingoButton').onclick=showDuolingo;
document.querySelector('#todayButton').onclick=()=>alert('Para una sesión de 20 minutos: elige un idioma, dedica 10 minutos a Listening o Reading y termina con 10 minutos de Vocabulary o Grammar.');
document.querySelector('#homeButton').onclick=document.querySelector('#backButton').onclick=()=>{ languageView.classList.remove('active'); homeView.classList.add('active'); };
document.querySelector('#closeResources').onclick=()=>document.querySelector('#resourcesSection').hidden=true;
document.querySelector('#senderInput').addEventListener('input',updateQuery);
document.querySelector('#openOutlook').onclick=()=>{ const query=makeQuery(); if(!query) { alert('Falta al menos una dirección de remitente.'); return; } localStorage.setItem(newsletterConfig[outlookLanguage].storage,document.querySelector('#senderInput').value); openLink(`https://outlook.live.com/mail/0/search?login_hint=${encodeURIComponent(OUTLOOK_ACCOUNT)}&query=${encodeURIComponent(query)}`); document.querySelector('#outlookDialog').close(); };
window.addEventListener('beforeinstallprompt', e=>{ e.preventDefault(); deferredPrompt=e; document.querySelector('#installButton').hidden=false; });
document.querySelector('#installButton').onclick=async()=>{ if(!deferredPrompt) return; deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; document.querySelector('#installButton').hidden=true; };
if ('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
