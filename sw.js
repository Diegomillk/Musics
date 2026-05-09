const CACHE = 'quiz-musica-v1';

const ASSETS = [
  './',
  './index.html',
  './musicas/Antonio Carlos Jobim - Águas De Março.mp3',
  './musicas/Barão Vermelho - Por você.mp3',
  "./musicas/Bon Jovi - It's My Life.mp3",
  "./musicas/Bon Jovi - Livin' On A Prayer.mp3",
  './musicas/Bon Jovi - You Give Love A Bad Name.mp3',
  './musicas/Cazuza - Exagerado.mp3',
  './musicas/Cazuza - Ideologia.mp3',
  './musicas/Cazuza - O Tempo Não Pára.mp3',
  './musicas/Charlie Brown Jr. - Ela Vai Voltar.mp3',
  './musicas/Charlie Brown Jr. - Meu Novo Mundo.mp3',
  './musicas/Charlie Brown Jr. - Pontes Indestrutíveis.mp3',
  './musicas/Chico Buarque - A Banda.mp3',
  './musicas/Chico Buarque - Apesar De Você.mp3',
  './musicas/Chico Buarque - Construção.mp3',
  './musicas/Elis Regina - Como Nossos Pais.mp3',
  './musicas/Hungria - Amor e Fé (Acústico).mp3',
  './musicas/Hungria Hip Hop - Um Pedido.mp3',
  './musicas/Jorge & Mateus - Os Anjos Cantam.mp3',
  './musicas/Jorge & Mateus - Pra Sempre Com Você (Ao Vivo).mp3',
  './musicas/Jorge & Mateus - Seu Astral.mp3',
  './musicas/One Direction - Story of My Life.mp3',
  './musicas/One Direction - What Makes You Beautiful.mp3',
  './musicas/Seu Jorge - Burguesinha.mp3',
  './musicas/Seu Jorge - Mina do Condomínio.mp3',
  './musicas/Tim Maia - Azul Da Cor Do Mar.mp3',
  './musicas/Tim Maia - Gostava Tanto De Você.mp3'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
