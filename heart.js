const phrases = [
  "I love you", "Te amo", "Je t'aime", "Ich liebe dich", "Ti amo",
  "Eu te amo", "Ik hou van jou", "Я тебя люблю", "愛してる", "사랑해",
  "我爱你", "Anh yêu em", "ฉันรักคุณ", "Aku cinta kamu", "Saya cinta awak",
  "मैं तुमसे प्यार करता हूँ", "أحبك", "Seni seviyorum", "Σ' αγαπώ",
  "Kocham cię", "Jag älskar dig", "Jeg elsker deg", "Szeretlek",
  "Miluji tě", "Te iubesc", "Обичам те", "Volim te", "Tá grá agam duit",
  "Nakupenda", "Ek is lief vir jou", "Mo nífẹ̀ẹ́ rẹ", "Ina son ki",
  "Mi amas vin", "T'estimo", "Maite zaitut", "Aloha wau iā 'oe"
];

const repeated = [...phrases, ...phrases, ...phrases];

const container = document.getElementById('heart-container');
const width = container.offsetWidth;
const height = container.offsetHeight;
const scale = Math.min(width, height) / 35;
const fontSize = scale * 0.85;
const n = repeated.length;

const rawPoints = [];
for (let i = 0; i < n; i++) {
  const t = (i / n) * Math.PI * 2;
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
  rawPoints.push({ x, y });
}

const ys = rawPoints.map(p => p.y);
const xs = rawPoints.map(p => p.x);
const midY = (Math.min(...ys) + Math.max(...ys)) / 2;
const midX = (Math.min(...xs) + Math.max(...xs)) / 2;

const cx = width / 2;
const cy = height / 2;

rawPoints.forEach((p, i) => {
  const px = cx + (p.x - midX) * scale + (Math.random() - 0.5) * 8;
  const py = cy + (p.y - midY) * scale + (Math.random() - 0.5) * 8;

  const span = document.createElement('span');
  span.textContent = repeated[i];
  span.className = 'heart-word';
  span.style.left = px + 'px';
  span.style.top = py + 'px';
  span.style.fontSize = fontSize + 'px';
  container.appendChild(span);
});

const center = document.createElement('span');
center.textContent = 'Mahal kita!';
center.className = 'heart-word heart-center';
center.style.left = cx + 'px';
center.style.top = cy + 'px';
center.style.fontSize = (fontSize * 1.6) + 'px';
container.appendChild(center);