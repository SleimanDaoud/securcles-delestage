const app = document.getElementById('app');

const createElement = (dataEl) => {
  const { tag, content, parent, className, id, src, alt, href, target } =
    dataEl;

  const el = document.createElement(tag);

  if (id) el.id = id;
  if (className) el.classList.add(className);

  if (tag === 'img') {
    if (src) el.src = src;
    if (alt) el.alt = alt;
  } else if (tag === 'a') {
    if (href) el.href = href;
    if (target) el.target = target;
    if (content) el.textContent = content;
  } else if (content) {
    el.textContent = content;
  }

  parent.appendChild(el);

  return el;
};

let secondImg, secondImageSrc;

function getSecImage() {
  const width = window.innerWidth;
  if (width > 768) secondImageSrc = '../img/desk.png';
  else secondImageSrc = '../img/mob.png';
}

// Function to detect the operating system
function detectOSURL() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return `https://play.google.com/store/apps/details?id=com.fd.securcles&hl=fr`; // Android
  } else if (/windows/i.test(userAgent)) {
    return `https://play.google.com/store/apps/details?id=com.fd.securcles&hl=fr`; // Windows desktop
  } else if (/macintosh|mac os x/i.test(userAgent)) {
    return `https://securcles.onelink.me/XdmT?af_js_web=true&amp;af_ss_ver=2_8_1&amp;pid=notMapped&amp;deep_link_value=https%3A%2F%2Fsecurcles.com%2F&amp;af_sub1=notMapped&amp;af_sub2=notMapped&amp;af_sub3=notMapped&amp;af_sub4=notMapped&amp;deep_link_sub1=userLocation`; // macOS
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    return `https://securcles.onelink.me/XdmT?af_js_web=true&amp;af_ss_ver=2_8_1&amp;pid=notMapped&amp;deep_link_value=https%3A%2F%2Fsecurcles.com%2F&amp;af_sub1=notMapped&amp;af_sub2=notMapped&amp;af_sub3=notMapped&amp;af_sub4=notMapped&amp;deep_link_sub1=userLocation`; // iOS
  } else {
    return `https://securcles.onelink.me/XdmT?af_js_web=true&amp;af_ss_ver=2_8_1&amp;pid=notMapped&amp;deep_link_value=https%3A%2F%2Fsecurcles.com%2F&amp;af_sub1=notMapped&amp;af_sub2=notMapped&amp;af_sub3=notMapped&amp;af_sub4=notMapped&amp;deep_link_sub1=userLocation`;
  }
}

export default function main(pageNbr) {
  getSecImage();

  const title =
    pageNbr === 'p1'
      ? `Suite à l’émission Qui veut être mon associé, vous êtes très nombreux à vouloir vous connecter à notre site !`
      : `Suite à l’émission Qui veut être mon associé, bienvenue chez SecurClés ! `;

  const appLink = detectOSURL();

  const overlay = createElement({
    tag: 'div',
    className: 'overlay',
    parent: app,
  });

  createElement({
    tag: 'img',
    className: 'logo',
    src: '../img/logo.jpeg',
    alt: 'SecurClés',
    parent: overlay,
  });

  createElement({
    tag: 'h3',
    content: title,
    parent: overlay,
  });

  if (pageNbr === 'p1') {
    createElement({
      tag: 'div',
      content: `En raison d’un nombre phénoménal de connexions, vous avez été orienté vers notre page de redirection.`,
      parent: overlay,
    });
  }

  const imagesWrapper = createElement({
    tag: 'div',
    className: 'img-wrapper',
    parent: overlay,
  });

  const firstLink = createElement({
    tag: 'a',
    href: 'https://sowefund.com/investir/securcles',
    target: '_blank', // Open link in a new tab
    parent: imagesWrapper,
  });

  const secondLink = createElement({
    tag: 'a',
    href: appLink,
    target: '_blank', // Open link in a new tab
    parent: imagesWrapper,
  });

  createElement({
    tag: 'img',
    src: '../img/1.png',
    parent: firstLink,
  });

  secondImg = createElement({
    tag: 'img',
    src: secondImageSrc,
    parent: secondLink,
  });
}

window.onload = () => {};

// Debouncer function
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

// Updated resize event listener with debounce
export const debouncedResizeHandler = debounce(() => {
  getSecImage();
  secondImg.src = secondImageSrc;
}, 200); // 200ms delay

window.addEventListener('resize', debouncedResizeHandler);
