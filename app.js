const resources = {
  english: {
    title: 'English', flag: 'gb',
    quick: [
      { label: '☁️ Mi carpeta de OneDrive', url: 'https://1drv.ms/f/c/685f78fc014b807e/IgD8W1kqTLq1Ram3CMjSqBNLAcA2Js6H5pbhaR8Ks3un7Ak?e=1550ny' },
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
  italian: { title:'Italiano', flag:'it', quick:[{ label:'☁️ La mia cartella OneDrive', url:'https://onedrive.live.com/my?id=%2Fpersonal%2F685f78fc014b807e%2FDocuments%2FIDIOMAS%2FITALIANO&viewid=9152b10a%2Da9bc%2D41e4%2Da1a7%2D421135efde51' }, { label:'🇮🇹 Online Italian Club', url:'https://onlineitalianclub.com/' }], categories:{ Ascolto:[{ name:'Lingua.com — Ascolto', url:'https://lingua.com/es/italiano/escucha/', note:'Esercizi di ascolto', icon:'🎧' }, { name:'Lingua.com — Dettati', url:'https://lingua.com/es/italiano/dictados/', note:'Dettati in italiano', icon:'✍️' }], Lettura:[{ name:'Lingua.com — Lettura', url:'https://lingua.com/es/italiano/lectura/', note:'Esercizi di lettura', icon:'📖' }], Grammatica:[{ name:'Lingua.com — Grammatica', url:'https://lingua.com/es/italiano/gramatica/', note:'Esercizi di grammatica', icon:'✍️' }], Vocabolario:[{ name:'Lingua.com — Allenatore di vocabolario', url:'https://lingua.com/es/italiano/vocabulario/entrenador/', note:'Allenati con le parole', icon:'🧠' }, { name:'Le mille parole più frequenti', url:'https://vocabulario.com.mx/las-mil-palabras-mas-frecuentes-en-italiano/', note:'Vocabolario italiano', icon:'🧠' }], 'Tempo libero':[
  { name:'The White Lotus Soundtrack', url:'https://open.spotify.com/playlist/6HcB7tIzdAMeIKOu5kojPm?si=bbHIL9wIT1uwrugwZpOEIQ&utm_source=copy-link', note:'Colonna sonora', icon:'🎵' },
  { name:'Roma', url:'https://open.spotify.com/playlist/7449dDUSuitkiu37ukZi1m?si=Ie_UXLUBQJemVaX8LcKRGA&utm_source=copy-link', note:'Musica italiana', icon:'🎵' },
  { name:'Indie Italia', url:'https://open.spotify.com/playlist/37i9dQZF1DX6PSDDh80gxI?si=AdRWnrsvRA6QVc5zDk46fw&utm_source=copy-link', note:'Indie italiano', icon:'🎵' },
  { name:'Anni 80', url:'https://open.spotify.com/playlist/37i9dQZF1DX3kkOVvCOkIe?si=a8hU_KjsRLiQUbWyX9WUFg&utm_source=copy-link', note:'Musica italiana degli anni 80', icon:'🎵' },
  { name:'Canzoni italiane da cantare', url:'https://open.spotify.com/playlist/37i9dQZF1DX7gGbVYiYw1L?si=GMyCTzlKSbKOWEIWW8VhhA&utm_source=copy-link', note:'Canzoni italiane', icon:'🎵' }
],'Canali YouTube': [{ name:'@lucreziaoddone', url:'https://www.youtube.com/@lucreziaoddone', note:'Canale YouTube', icon:'▶️' }, { name:'@italianoautomatico', url:'https://www.youtube.com/@italianoautomatico', note:'Canale YouTube', icon:'▶️' }, { name:'@Italianeando', url:'https://www.youtube.com/@Italianeando', note:'Canale YouTube', icon:'▶️' }], Notizie:[{ name:'Easy Italian News', url:'https://easyitaliannews.com/', note:'Notizie in italiano', icon:'🗞️' }], 'Campus Torrejón':[{ name:'Campus Torrejón', url:'https://campustorrejon.formacampus.com/IndexIF.aspx', note:'Plataforma de formación', icon:'🎓' }] } },
  french: { 
  title:'Français', 
  flag:'fr', 
  quick:[
    { label:'☁️ Mon dossier OneDrive', url:'https://onedrive.live.com/my?id=%2Fpersonal%2F685f78fc014b807e%2FDocuments%2FIDIOMAS%2FFRANC%C3%89S&viewid=9152b10a%2Da9bc%2D41e4%2Da1a7%2D421135efde51' }
  ], 
  categories:{ 

    'Écoute':[
      { name:'TV5MONDE — Compréhension orale', url:'https://apprendre.tv5monde.com/fr/exercices', note:'Vidéos et exercices par niveau', icon:'🎧' },
      { name:'RFI — Français facile', url:'https://francaisfacile.rfi.fr/fr/', note:'Écoute du français authentique', icon:'🎧' },
      { name:'InnerFrench', url:'https://innerfrench.com/podcast/', note:'Podcast pour apprenants', icon:'🎧' }
    ],

    Lecture:[
      { name:'Lingua.com — Lecture', url:'https://lingua.com/francais/lecture/', note:'Exercices de lecture en français', icon:'📖' },
      { name:'1jour1actu', url:'https://www.1jour1actu.com/', note:'Actualités adaptées aux jeunes lecteurs', icon:'📰' }
    ],

    'Expression orale':[
      { name:'Français avec Pierre', url:'https://www.francaisavecpierre.com/', note:'Français et expression orale', icon:'🗣️' },
      { name:'Easy French', url:'https://www.easy-languages.org/easy-french', note:'Français parlé dans la rue', icon:'🗣️' }
    ],

    'Prononciation':[
      { name:'TV5MONDE — Prononciation', url:'https://apprendre.tv5monde.com/fr/aides/prononciation', note:'Prononciation et phonétique', icon:'🔊' },
      { name:'Forvo — Français', url:'https://forvo.com/languages/fr/', note:'Prononciation par locuteurs natifs', icon:'🔊' },
      { name:'Lawless French — Pronunciation', url:'https://www.lawlessfrench.com/pronunciation/', note:'Prononciation et phonétique', icon:'🔊' }
    ],

    Grammaire:[
      { name:'TV5MONDE — Grammaire', url:'https://apprendre.tv5monde.com/fr/aides/grammaire', note:'Grammaire française', icon:'✍️' },
      { name:'Lawless French — Grammaire', url:'https://www.lawlessfrench.com/grammar/', note:'Explications et exercices', icon:'✍️' },
      { name:'Lingolia — Grammaire française', url:'https://francais.lingolia.com/fr/grammaire', note:'Grammaire avec exercices', icon:'✍️' }
    ],

    Vocabulaire:[
      { name:'TV5MONDE — Vocabulaire', url:'https://apprendre.tv5monde.com/fr/aides/vocabulaire', note:'Vocabulaire français', icon:'🧠' },
      { name:'LanguageGuide — Vocabulaire français', url:'https://www.languageguide.org/french/vocabulary/', note:'Vocabulaire avec audio', icon:'🧠' },
      { name:'Lawless French — Vocabulaire', url:'https://www.lawlessfrench.com/vocabulary/', note:'Vocabulaire par temas', icon:'🧠' }
    ],

    'Loisirs':[
      { name:'Francia', url:'https://open.spotify.com/playlist/3YIqHmmR6HKLCWyDlXZFfV?si=H9nKeprpQaKe_7IIN4uDEw&utm_source=copy-link', note:'Musique française', icon:'🎵' },
      { name:'Carrousel', url:'https://open.spotify.com/playlist/1PkHXYbzyXth3Dkho8mOv2?si=mot0gO-aSke7941z7jEraQ&utm_source=copy-link', note:'Musique française', icon:'🎵' }
    ],

    'Chaînes YouTube':[
      { name:'@OhlàlàGinetteAprendefrancéscon', url:'https://www.youtube.com/@Ohl%C3%A0l%C3%A0GinetteAprendefranc%C3%A9scon', note:'Chaîne YouTube', icon:'▶️' },
      { name:'@clasesfrancesfacil', url:'https://www.youtube.com/@clasesfrancesfacil', note:'Chaîne YouTube', icon:'▶️' },
      { name:'Easy French', url:'https://www.youtube.com/@EasyFrench', note:'Français parlé dans la rue', icon:'▶️' },
      { name:'Français avec Pierre', url:'https://www.youtube.com/@FrancaisAvecPierre', note:'Cours et conseils de français', icon:'▶️' },
      { name:'InnerFrench', url:'https://www.youtube.com/@innerFrench', note:'Français pour niveau intermédiaire', icon:'▶️' }
    ],

    Actualités:[
      { name:'RFI — Journal en français facile', url:'https://francaisfacile.rfi.fr/es/podcasts/journal-en-fran%C3%A7ais-facile/', note:'Actualités en français facile', icon:'🗞️' },
      { name:'TV5MONDE — Actualités', url:'https://information.tv5monde.com/', note:'Actualités en français', icon:'🗞️' }
    ]

  } 
}
const categoryMeta = {
  english: { Listening:['🎧','Listening'], Reading:['📖','Reading'], Speaking:['🗣️','Speaking'], Grammar:['✍️','Grammar'], Vocabulary:['🧠','Vocabulary'], Fun:['🎬','Fun'], 'YouTube Channels':['▶️','YouTube'], 'SPEAK UP':['📖','Revista RBA'] },
  italian: { Ascolto:['🎧','Ascolto'], Lettura:['📖','Lettura'], Conversazione:['🗣️','Conversazione'], Grammatica:['✍️','Grammatica'], Vocabolario:['🧠','Vocabolario'], 'Tempo libero':['🎬','Tempo libero'], 'Canali YouTube':['▶️','YouTube'], Notizie:['🗞️','Notizie'], 'Campus Torrejón':['🎓','Campus'] },
  french: { 'Écoute':['🎧','Écoute'], Lecture:['📖','Lecture'], 'Expression orale':['🗣️','Expression orale'], Grammaire:['✍️','Grammaire'],'Prononciation':['🔊','Prononciation'],  Vocabulaire:['🧠','Vocabulaire'], Loisirs:['🎬','Loisirs'], 'Chaînes YouTube':['▶️','YouTube'], Actualités:['🗞️','Actualités'] }
};
const homeView = document.querySelector('#homeView'), languageView = document.querySelector('#languageView');
let activeLanguage = 'english', deferredPrompt;
function openLink(url) { window.open(url, '_blank', 'noopener'); }
function showLanguage(key) {
  activeLanguage = key; const lang = resources[key];
  document.querySelector('#languageFlag').innerHTML = `<img src="flags/${lang.flag}.svg" alt="Bandera de ${lang.title}" />`; document.querySelector('#languageTitle').textContent = lang.title;
  const actions = document.querySelector('#quickActions'); actions.innerHTML = '';
  if (key === 'english') { const news = document.createElement('button'); news.textContent = '📰 ENGLISH NEWS — Newsletters & actualidad'; news.onclick = () => openLink('https://www.speakup.es/news'); actions.append(news); }
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
    window.location.href =
      `intent://open/#Intent;package=es.rba.speakup;S.browser_fallback_url=${fallback};end`;
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
