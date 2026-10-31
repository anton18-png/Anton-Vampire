// Все темы проекта. Ключ — имя темы, значение — карточка CSS-переменных.

export const THEMES = {
  /* ================= MATERIAL 3 ================= */
  material3: {
    bg:        '#141218', bgAlt:    '#1d1b20', card:      '#211f26', cardHover: '#2b2930',
    border:    '#49454f', fg:       '#e6e0e9', fgMuted:   '#cac4d0',
    accent:    '#d0bcff', accent2:  '#b69df8', accentText:'#381e72',
    success:   '#b8f2c0', warning:  '#ffd8a8', danger:    '#ffb4ab', info:      '#a8c7fa'
  },
  material3_light: {
    bg:        '#fef7ff', bgAlt:    '#f7f2fa', card:      '#ffffff', cardHover: '#f3edf7',
    border:    '#cac4d0', fg:       '#1d1b20', fgMuted:   '#49454f',
    accent:    '#6750a4', accent2:  '#7f67be', accentText:'#ffffff',
    success:   '#386a20', warning:  '#7a5900', danger:    '#ba1a1a', info:      '#0b57d0'
  },

  /* ================= Светлые темы ttkbootstrap ================= */
  cosmo: {
    bg: '#ffffff', bgAlt: '#f4f6f8', card: '#ffffff', cardHover: '#eef1f4',
    border: '#2780e3', fg: '#373a3c', fgMuted: '#7e8081',
    accent: '#2780e3', accent2: '#1a5fae', accentText: '#ffffff',
    success: '#3fb618', warning: '#ff7518', danger: '#ff0039', info: '#9954bb'
  },
  flatly: {
    bg: '#ffffff', bgAlt: '#f4f6f7', card: '#ffffff', cardHover: '#eceff1',
    border: '#2c3e50', fg: '#212529', fgMuted: '#95a5a6',
    accent: '#2c3e50', accent2: '#1e2b38', accentText: '#ffffff',
    success: '#18bc9c', warning: '#f39c12', danger: '#e74c3c', info: '#3498db'
  },
  litera: {
    bg: '#ffffff', bgAlt: '#f8f9fa', card: '#ffffff', cardHover: '#eef0f2',
    border: '#4582ec', fg: '#343a40', fgMuted: '#adb5bd',
    accent: '#4582ec', accent2: '#2a5fc2', accentText: '#ffffff',
    success: '#02b875', warning: '#f0ad4e', danger: '#d9534f', info: '#17a2b8'
  },
  minty: {
    bg: '#ffffff', bgAlt: '#f7fbfa', card: '#ffffff', cardHover: '#eef7f4',
    border: '#78c2ad', fg: '#5a5a5a', fgMuted: '#f3969a',
    accent: '#78c2ad', accent2: '#4c9c87', accentText: '#ffffff',
    success: '#56cc9d', warning: '#ffce67', danger: '#ff7851', info: '#6cc3d5'
  },
  lumen: {
    bg: '#ffffff', bgAlt: '#f7f7f7', card: '#ffffff', cardHover: '#ececec',
    border: '#158cba', fg: '#555555', fgMuted: '#919191',
    accent: '#158cba', accent2: '#0e6a8e', accentText: '#ffffff',
    success: '#28b62c', warning: '#ff851b', danger: '#ff4136', info: '#75caeb'
  },
  sandstone: {
    bg: '#ffffff', bgAlt: '#f8f5f0', card: '#ffffff', cardHover: '#ede8e0',
    border: '#325d88', fg: '#3e3f3a', fgMuted: '#8e8c84',
    accent: '#325d88', accent2: '#213e5a', accentText: '#ffffff',
    success: '#93c54b', warning: '#f47c3c', danger: '#d9534f', info: '#29abe0'
  },
  yeti: {
    bg: '#ffffff', bgAlt: '#f4f4f4', card: '#ffffff', cardHover: '#e9e9e9',
    border: '#008cba', fg: '#222222', fgMuted: '#707070',
    accent: '#008cba', accent2: '#006b8f', accentText: '#ffffff',
    success: '#43ac6a', warning: '#e99002', danger: '#f04124', info: '#5bc0de'
  },
  pulse: {
    bg: '#ffffff', bgAlt: '#f9f8fc', card: '#ffffff', cardHover: '#efeaf7',
    border: '#593196', fg: '#444444', fgMuted: '#69676e',
    accent: '#593196', accent2: '#3f216a', accentText: '#ffffff',
    success: '#13b955', warning: '#efa31d', danger: '#fc3939', info: '#009cdc'
  },
  united: {
    bg: '#ffffff', bgAlt: '#e9ecef', card: '#ffffff', cardHover: '#e0e3e6',
    border: '#e95420', fg: '#333333', fgMuted: '#aea79f',
    accent: '#e95420', accent2: '#bd3e12', accentText: '#ffffff',
    success: '#38b44a', warning: '#efb73e', danger: '#df382c', info: '#17a2b8'
  },
  morph: {
    bg: '#d9e3f1', bgAlt: '#cfd9e7', card: '#e9eff7', cardHover: '#dee6f1',
    border: '#378dfc', fg: '#7b8ab8', fgMuted: '#9aa6c7',
    accent: '#378dfc', accent2: '#0e6bef', accentText: '#ffffff',
    success: '#43cc29', warning: '#ffc107', danger: '#e52527', info: '#5b62f4'
  },
  journal: {
    bg: '#ffffff', bgAlt: '#f8f9fa', card: '#ffffff', cardHover: '#eef0f2',
    border: '#eb6864', fg: '#222222', fgMuted: '#aaaaaa',
    accent: '#eb6864', accent2: '#d24a46', accentText: '#ffffff',
    success: '#22b24c', warning: '#f5e625', danger: '#f57a00', info: '#336699'
  },
  simplex: {
    bg: '#fcfcfc', bgAlt: '#f2f2f2', card: '#ffffff', cardHover: '#ebebeb',
    border: '#d8220e', fg: '#3b3d3f', fgMuted: '#858e96',
    accent: '#d8220e', accent2: '#a91709', accentText: '#ffffff',
    success: '#469307', warning: '#d88220', danger: '#9a479e', info: '#0099ce'
  },
  cerculean: {
    bg: '#ffffff', bgAlt: '#eceef1', card: '#ffffff', cardHover: '#e3e6ea',
    border: '#4bb1ea', fg: '#2ea4e7', fgMuted: '#a9b4be',
    accent: '#4bb1ea', accent2: '#2395d4', accentText: '#ffffff',
    success: '#84b251', warning: '#e16e25', danger: '#cf3c40', info: '#225384'
  },

  /* ================= Тёмные темы ttkbootstrap ================= */
  darkly: {
    bg: '#222222', bgAlt: '#2a2a2a', card: '#303030', cardHover: '#3a3a3a',
    border: '#375a7f', fg: '#ffffff', fgMuted: '#adb5bd',
    accent: '#375a7f', accent2: '#24415d', accentText: '#ffffff',
    success: '#00bc8c', warning: '#f39c12', danger: '#e74c3c', info: '#3498db'
  },
  superhero: {
    bg: '#2b3e50', bgAlt: '#22323f', card: '#33475b', cardHover: '#3d5266',
    border: '#4e5d6c', fg: '#ffffff', fgMuted: '#abb6c2',
    accent: '#4c9be8', accent2: '#2e78c5', accentText: '#ffffff',
    success: '#5cb85c', warning: '#f0ad4e', danger: '#d9534f', info: '#5bc0de'
  },
  solar: {
    bg: '#002b36', bgAlt: '#00252e', card: '#073642', cardHover: '#0a404f',
    border: '#0b5162', fg: '#ffffff', fgMuted: '#a9bdbd',
    accent: '#bc951a', accent2: '#947512', accentText: '#ffffff',
    success: '#44aca4', warning: '#d05e2f', danger: '#d95092', info: '#3f98d7'
  },
  cyborg: {
    bg: '#060606', bgAlt: '#101010', card: '#1a1a1a', cardHover: '#242424',
    border: '#2a9fd6', fg: '#ffffff', fgMuted: '#adafae',
    accent: '#2a9fd6', accent2: '#1a7ea8', accentText: '#ffffff',
    success: '#77b300', warning: '#ff8800', danger: '#cc0000', info: '#9933cc'
  },
  vapor: {
    bg: '#190831', bgAlt: '#22103d', card: '#2a1752', cardHover: '#33205f',
    border: '#6e40c0', fg: '#32fbe2', fgMuted: '#bfb6cd',
    accent: '#ea38b8', accent2: '#6e40c0', accentText: '#ffffff',
    success: '#3af180', warning: '#ffbd05', danger: '#e34b54', info: '#1da2f2'
  },

  /* ================= Тёмные темы от разработчика ================= */
  cyberpunk: {
    bg: '#190831', bgAlt: '#22103d', card: '#2a1752', cardHover: '#33205f',
    border: '#ea38b8', fg: '#32fbe2', fgMuted: '#a39ec4',
    accent: '#ea38b8', accent2: '#b01a8b', accentText: '#32fbe2',
    success: '#3af180', warning: '#ffbd05', danger: '#ea38b8', info: '#1da2f2'
  },
  hacker: {
    bg: '#222222', bgAlt: '#2a2a2a', card: '#2f2f2f', cardHover: '#3a3a3a',
    border: '#222222', fg: '#3af180', fgMuted: '#5b9e75',
    accent: '#3af180', accent2: '#2bbf66', accentText: '#0a0a0a',
    success: '#3af180', warning: '#3af180', danger: '#3af180', info: '#3af180'
  },
  palenight: {
    bg: '#292d3e', bgAlt: '#25293a', card: '#2f3449', cardHover: '#3a4058',
    border: '#222222', fg: '#cccccc', fgMuted: '#8a8f9d',
    accent: '#89ddff', accent2: '#5fb6d9', accentText: '#1a1d2b',
    success: '#50c878', warning: '#f39c12', danger: '#ff5874', info: '#89ddff'
  },
  boosterx: {
    bg: '#1b2352', bgAlt: '#151b42', card: '#0a0f21', cardHover: '#1f2950',
    border: '#7930ff', fg: '#ffffff', fgMuted: '#bfb6cd',
    accent: '#7930ff', accent2: '#5a1fb0', accentText: '#ffffff',
    success: '#31ff83', warning: '#ffbd05', danger: '#d93b3b', info: '#2e5cff'
  },
  boosterxvapor: {
    bg: '#190831', bgAlt: '#22103d', card: '#0a0f21', cardHover: '#2f1a5c',
    border: '#7930ff', fg: '#ffffff', fgMuted: '#bfb6cd',
    accent: '#7930ff', accent2: '#5a1fb0', accentText: '#ffffff',
    success: '#31ff83', warning: '#ffbd05', danger: '#d93b3b', info: '#2e5cff'
  },

  /* ================= Тёмные темы Антона ================= */
  extreme: {
    bg: '#0a0a0a', bgAlt: '#141414', card: '#1a1a1a', cardHover: '#222222',
    border: '#ffffff', fg: '#ffffff', fgMuted: '#b8b8b8',
    accent: '#ff1744', accent2: '#c40030', accentText: '#ffffff',
    success: '#31ff83', warning: '#ffbd05', danger: '#ff1744', info: '#2e5cff'
  },
  newhone: {
    bg: '#080f1b', bgAlt: '#0d1520', card: '#121b2a', cardHover: '#1a2436',
    border: '#ffffff', fg: '#ffffff', fgMuted: '#8091a8',
    accent: '#ff1744', accent2: '#c40030', accentText: '#ffffff',
    success: '#3ef766', warning: '#f99926', danger: '#ff1744', info: '#3c77e3'
  },
  nord: {
    bg: '#1a1a1a', bgAlt: '#222222', card: '#2a2a2a', cardHover: '#333333',
    border: '#d1dbe5', fg: '#d1dbe5', fgMuted: '#8b9aac',
    accent: '#435f82', accent2: '#2d4460', accentText: '#ffffff',
    success: '#546639', warning: '#7c3d29', danger: '#c36c74', info: '#5e81ac'
  },

  /* ================= Тёмные темы Русланчика ================= */
  wincry: {
    bg: '#0a0a0a', bgAlt: '#141414', card: '#1a1a1a', cardHover: '#222222',
    border: '#ffffff', fg: '#ffffff', fgMuted: '#b8b8b8',
    accent: '#ff1744', accent2: '#c40030', accentText: '#ffffff',
    success: '#31ff83', warning: '#ffbd05', danger: '#ff1744', info: '#2e5cff'
  },
  ruslanchik: {
    bg: '#0a0a0a', bgAlt: '#141414', card: '#1a1a1a', cardHover: '#222222',
    border: '#ffffff', fg: '#ffffff', fgMuted: '#b8b8b8',
    accent: '#ff1744', accent2: '#c40030', accentText: '#ffffff',
    success: '#31ff83', warning: '#ffbd05', danger: '#ff1744', info: '#ffbd05'
  },
  wincry_warning: {
    bg: '#0a0a0a', bgAlt: '#141414', card: '#1a1a1a', cardHover: '#222222',
    border: '#ffbd05', fg: '#ffbd05', fgMuted: '#a38000',
    accent: '#ff1744', accent2: '#c40030', accentText: '#ffbd05',
    success: '#31ff83', warning: '#ffbd05', danger: '#ff1744', info: '#ffbd05'
  },
  wincry_full_warning: {
    bg: '#0a0a0a', bgAlt: '#141414', card: '#1a1a1a', cardHover: '#222222',
    border: '#ffbd05', fg: '#ffbd05', fgMuted: '#a38000',
    accent: '#ff1744', accent2: '#c40030', accentText: '#ffbd05',
    success: '#ffbd05', warning: '#ffbd05', danger: '#ff1744', info: '#ffbd05'
  },

  /* ================= Новые тёмные темы ================= */
  bloodmoon: {
    bg: '#14060a', bgAlt: '#1d080f', card: '#260b14', cardHover: '#350f1c',
    border: '#7a1226', fg: '#f5d9dd', fgMuted: '#a2757d',
    accent: '#e11d48', accent2: '#8f0f2e', accentText: '#ffffff',
    success: '#65d69f', warning: '#f0a83b', danger: '#e11d48', info: '#7aa2ff'
  },
  abyss: {
    bg: '#050b14', bgAlt: '#081120', card: '#0c1930', cardHover: '#12224a',
    border: '#1e3a8a', fg: '#dbeafe', fgMuted: '#7c93b8',
    accent: '#3b82f6', accent2: '#1e40af', accentText: '#ffffff',
    success: '#22c55e', warning: '#f59e0b', danger: '#ef4444', info: '#60a5fa'
  },
  newnord: {
    bg: '#242933', bgAlt: '#2e3440', card: '#3b4252', cardHover: '#434c5e',
    border: '#4c566a', fg: '#eceff4', fgMuted: '#a7b1c3',
    accent: '#88c0d0', accent2: '#5e81ac', accentText: '#2e3440',
    success: '#a3be8c', warning: '#ebcb8b', danger: '#bf616a', info: '#81a1c1'
  },
  catppuccin: {
    bg: '#1e1e2e', bgAlt: '#181825', card: '#313244', cardHover: '#45475a',
    border: '#585b70', fg: '#cdd6f4', fgMuted: '#a6adc8',
    accent: '#cba6f7', accent2: '#89b4fa', accentText: '#1e1e2e',
    success: '#a6e3a1', warning: '#f9e2af', danger: '#f38ba8', info: '#89dceb'
  },
  dracula: {
    bg: '#282a36', bgAlt: '#21222c', card: '#343746', cardHover: '#44475a',
    border: '#6272a4', fg: '#f8f8f2', fgMuted: '#bdbdd0',
    accent: '#bd93f9', accent2: '#ff79c6', accentText: '#282a36',
    success: '#50fa7b', warning: '#f1fa8c', danger: '#ff5555', info: '#8be9fd'
  },
  newpalenight: {
    bg: '#1c1f2b', bgAlt: '#232735', card: '#2e3449', cardHover: '#3a4058',
    border: '#3f4763', fg: '#d4d8ee', fgMuted: '#8b90a8',
    accent: '#82aaff', accent2: '#c792ea', accentText: '#1c1f2b',
    success: '#c3e88d', warning: '#ffcb6b', danger: '#f07178', info: '#89ddff'
  },
  hellokitty: {
    bg: '#2a1020', bgAlt: '#341528', card: '#3d1a30', cardHover: '#4a2039',
    border: '#ff8fc0', fg: '#ffe4f1', fgMuted: '#d38cad',
    accent: '#ff4f97', accent2: '#d62d75', accentText: '#ffffff',
    success: '#8be7a1', warning: '#ffd76b', danger: '#ff5c7a', info: '#7fc8ff'
  },
  kuromi: {
    bg: '#0e0b16', bgAlt: '#15111f', card: '#1c162a', cardHover: '#251c36',
    border: '#cfa5ff', fg: '#f0e6ff', fgMuted: '#a395bd',
    accent: '#a06bff', accent2: '#7a44d6', accentText: '#ffffff',
    success: '#7ee0a3', warning: '#ffc857', danger: '#ff5c7a', info: '#7fc8ff'
  },
  onedark: {
    bg: '#282c34', bgAlt: '#21252b', card: '#2c313a', cardHover: '#353b45',
    border: '#3e4451', fg: '#abb2bf', fgMuted: '#5c6370',
    accent: '#61afef', accent2: '#528bcc', accentText: '#282c34',
    success: '#98c379', warning: '#e5c07b', danger: '#e06c75', info: '#56b6c2'
  },

  /* ================= Curated 2.0 ================= */
  bootstrap: {
    bg: '#212529', bgAlt: '#1a1d20', card: '#2c3034', cardHover: '#343a40',
    border: '#0d6efd', fg: '#f8f9fa', fgMuted: '#adb5bd',
    accent: '#0d6efd', accent2: '#0a58ca', accentText: '#ffffff',
    success: '#198754', warning: '#ffc107', danger: '#dc3545', info: '#0dcaf0'
  },
  bootstrap_light: {
    bg: '#ffffff', bgAlt: '#f4f6f8', card: '#ffffff', cardHover: '#eef1f4',
    border: '#0d6efd', fg: '#212529', fgMuted: '#6c757d',
    accent: '#0d6efd', accent2: '#0a58ca', accentText: '#ffffff',
    success: '#198754', warning: '#ffc107', danger: '#dc3545', info: '#0dcaf0'
  },
  pydata: {
    bg: '#14181e', bgAlt: '#0f1318', card: '#1a2026', cardHover: '#232a32',
    border: '#0a7d91', fg: '#ced6dd', fgMuted: '#8b95a3',
    accent: '#0a7d91', accent2: '#075a6b', accentText: '#ffffff',
    success: '#198754', warning: '#ffc107', danger: '#dc3545', info: '#0dcaf0'
  },
  pydata_light: {
    bg: '#ffffff', bgAlt: '#f4f6f8', card: '#ffffff', cardHover: '#eef1f4',
    border: '#0a7d91', fg: '#222832', fgMuted: '#677384',
    accent: '#0a7d91', accent2: '#075a6b', accentText: '#ffffff',
    success: '#198754', warning: '#ffc107', danger: '#dc3545', info: '#0dcaf0'
  },
  nord_curated: {
    bg: '#2e3440', bgAlt: '#272c36', card: '#3b4252', cardHover: '#434c5e',
    border: '#5e81ac', fg: '#eceff4', fgMuted: '#a7b1c3',
    accent: '#5e81ac', accent2: '#4c6c93', accentText: '#eceff4',
    success: '#a3be8c', warning: '#ebcb8b', danger: '#bf616a', info: '#88c0d0'
  },
  solarized: {
    bg: '#002b36', bgAlt: '#00252e', card: '#073642', cardHover: '#0a404f',
    border: '#268bd2', fg: '#93a1a1', fgMuted: '#839496',
    accent: '#268bd2', accent2: '#1c6fa8', accentText: '#fdf6e3',
    success: '#859900', warning: '#b58900', danger: '#dc322f', info: '#2aa198'
  },
  solarized_light: {
    bg: '#f6f1e9', bgAlt: '#fdf6e3', card: '#fffaf0', cardHover: '#f0e9dc',
    border: '#268bd2', fg: '#586e75', fgMuted: '#839496',
    accent: '#268bd2', accent2: '#1c6fa8', accentText: '#fdf6e3',
    success: '#859900', warning: '#b58900', danger: '#dc322f', info: '#2aa198'
  },
  catppuccin_curated: {
    bg: '#1e1e2e', bgAlt: '#181825', card: '#313244', cardHover: '#45475a',
    border: '#8839ef', fg: '#cdd6f4', fgMuted: '#a6adc8',
    accent: '#8839ef', accent2: '#6c2bd9', accentText: '#ffffff',
    success: '#40a02b', warning: '#df8e1d', danger: '#d20f39', info: '#179299'
  },
  gruvbox: {
    bg: '#282828', bgAlt: '#1d2021', card: '#3c3836', cardHover: '#504945',
    border: '#458588', fg: '#ebdbb2', fgMuted: '#928374',
    accent: '#458588', accent2: '#36696b', accentText: '#fbf1c7',
    success: '#98971a', warning: '#d79921', danger: '#cc241d', info: '#689d6a'
  },
  gruvbox_light: {
    bg: '#f2ede9', bgAlt: '#fbf1c7', card: '#fffaf0', cardHover: '#ebdbb2',
    border: '#458588', fg: '#3c3836', fgMuted: '#7c6f64',
    accent: '#458588', accent2: '#36696b', accentText: '#fbf1c7',
    success: '#98971a', warning: '#d79921', danger: '#cc241d', info: '#689d6a'
  },
  dracula_curated: {
    bg: '#282a36', bgAlt: '#21222c', card: '#343746', cardHover: '#44475a',
    border: '#bd93f9', fg: '#f8f8f2', fgMuted: '#bdbdd0',
    accent: '#bd93f9', accent2: '#9b6fd9', accentText: '#282a36',
    success: '#50fa7b', warning: '#ffb86c', danger: '#ff5555', info: '#8be9fd'
  },
  tokyo_night: {
    bg: '#1a1b26', bgAlt: '#16161e', card: '#24283b', cardHover: '#2f334d',
    border: '#7aa2f7', fg: '#c0caf5', fgMuted: '#565f89',
    accent: '#7aa2f7', accent2: '#5a82d7', accentText: '#1a1b26',
    success: '#9ece6a', warning: '#e0af68', danger: '#f7768e', info: '#7dcfff'
  },
  tokyo_night_light: {
    bg: '#e1e2e7', bgAlt: '#d5d6db', card: '#f0f1f5', cardHover: '#e4e5ea',
    border: '#7aa2f7', fg: '#343b58', fgMuted: '#6172a0',
    accent: '#7aa2f7', accent2: '#5a82d7', accentText: '#ffffff',
    success: '#9ece6a', warning: '#e0af68', danger: '#f7768e', info: '#7dcfff'
  },
  one: {
    bg: '#282c34', bgAlt: '#21252b', card: '#2c313a', cardHover: '#353b45',
    border: '#4078f2', fg: '#abb2bf', fgMuted: '#5c6370',
    accent: '#4078f2', accent2: '#2d5bbf', accentText: '#ffffff',
    success: '#50a14f', warning: '#c18401', danger: '#e45649', info: '#0184bc'
  },
  one_light: {
    bg: '#fafafa', bgAlt: '#f0f0f1', card: '#ffffff', cardHover: '#eaeaeb',
    border: '#4078f2', fg: '#383a42', fgMuted: '#a0a1a7',
    accent: '#4078f2', accent2: '#2d5bbf', accentText: '#ffffff',
    success: '#50a14f', warning: '#c18401', danger: '#e45649', info: '#0184bc'
  },
  everforest: {
    bg: '#2d353b', bgAlt: '#232a2e', card: '#343f44', cardHover: '#3d484d',
    border: '#3a94c5', fg: '#d3c6aa', fgMuted: '#939f91',
    accent: '#3a94c5', accent2: '#2c7299', accentText: '#2d353b',
    success: '#8da101', warning: '#dfa000', danger: '#f85552', info: '#35a77c'
  },
  everforest_light: {
    bg: '#edf3ed', bgAlt: '#e0e8e0', card: '#f7fbf7', cardHover: '#dde5dd',
    border: '#3a94c5', fg: '#5c6a72', fgMuted: '#7a857c',
    accent: '#3a94c5', accent2: '#2c7299', accentText: '#ffffff',
    success: '#8da101', warning: '#dfa000', danger: '#f85552', info: '#35a77c'
  },

  /* ================= Игровые темы ================= */
  vampire_the_masquerade: {
    bg: '#0a0508', bgAlt: '#120a0f', card: '#1a0f16', cardHover: '#24141d',
    border: '#8b0000', fg: '#e8d5d5', fgMuted: '#9a7a7a',
    accent: '#b30000', accent2: '#7a0000', accentText: '#ffffff',
    success: '#4a7a4a', warning: '#b8860b', danger: '#cc0000', info: '#5c5c8a'
  },
  counter_strike_16: {
    bg: '#1a1a1a', bgAlt: '#222222', card: '#2a2a2a', cardHover: '#333333',
    border: '#c0a060', fg: '#d4d4d4', fgMuted: '#888888',
    accent: '#c0a060', accent2: '#a08040', accentText: '#1a1a1a',
    success: '#4a8a4a', warning: '#c0a060', danger: '#8a3a3a', info: '#4a6a8a'
  },
  counter_strike_2: {
    bg: '#121212', bgAlt: '#1a1a1a', card: '#222222', cardHover: '#2e2e2e',
    border: '#e8770a', fg: '#f2f2f2', fgMuted: '#8a8a8a',
    accent: '#e8770a', accent2: '#b85c00', accentText: '#121212',
    success: '#3a9a4a', warning: '#e8770a', danger: '#c03040', info: '#4a6a8a'
  },
  diablo: {
    bg: '#0a0604', bgAlt: '#120c08', card: '#1a100a', cardHover: '#24160e',
    border: '#8b1a1a', fg: '#d4b8a0', fgMuted: '#8a6a5a',
    accent: '#b22222', accent2: '#7a1010', accentText: '#ffffff',
    success: '#4a6a2a', warning: '#b8860b', danger: '#b22222', info: '#4a5a7a'
  },
  cyberpunk_2077: {
    bg: '#090507', bgAlt: '#11070a', card: '#180a10', cardHover: '#24101a',
    border: '#ff003c', fg: '#f0f0f0', fgMuted: '#8a7a7a',
    accent: '#00e5ff', accent2: '#ff003c', accentText: '#000000',
    success: '#00e5ff', warning: '#fcee0a', danger: '#ff003c', info: '#00b0c0'
  }
};

/* ============================================================
   Утилиты
   ============================================================ */
function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return { r: 0, g: 0, b: 0 };
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}
function rgbToHex(r, g, b) {
  const c = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return '#' + c(r) + c(g) + c(b);
}
function mix(hex1, hex2, t) {
  const a = hexToRgb(hex1), b = hexToRgb(hex2);
  return rgbToHex(a.r + (b.r - a.r) * t, a.g + (b.g - a.g) * t, a.b + (b.b - a.b) * t);
}

function makeDark(c) {
  return {
    bg:        mix('#0a0a0a', c.accent, 0.05),
    bgAlt:     mix('#111111', c.accent, 0.06),
    card:      mix('#181818', c.accent, 0.08),
    cardHover: mix('#222222', c.accent, 0.10),
    border:    c.accent,
    fg:        '#f4f6f8',
    fgMuted:   mix('#8a8f9d', c.accent, 0.15),
    accent:    c.accent,
    accent2:   mix(c.accent, '#000000', 0.25),
    accentText:'#ffffff',
    success:   c.success,
    warning:   c.warning,
    danger:    c.danger,
    info:      c.info
  };
}

const LIGHT_THEME_KEYS = [
  'cosmo', 'flatly', 'litera', 'minty', 'lumen', 'sandstone',
  'yeti', 'pulse', 'united', 'morph', 'journal', 'simplex', 'cerculean'
];
for (const name of LIGHT_THEME_KEYS) {
  const src = THEMES[name];
  if (src) THEMES[name + '-dark'] = makeDark(src);
}

export const THEME_NAMES = Object.keys(THEMES);

export const THEMES_META = {
  groups: [
    { id: 'material3',       title: '🎨 Material 3',                       themes: ['material3', 'material3_light'] },
    { id: 'light',           title: '☀️ Светлые темы',                     themes: LIGHT_THEME_KEYS },
    { id: 'dark-from-light', title: '🌗 Тёмные версии светлых',             themes: LIGHT_THEME_KEYS.map(n => n + '-dark') },
    { id: 'dark-ttk',        title: '🌑 Тёмные темы ttkbootstrap',          themes: ['darkly', 'superhero', 'solar', 'cyborg', 'vapor'] },
    { id: 'dark-dev',        title: '⚡ Тёмные темы от разработчика',       themes: ['cyberpunk', 'hacker', 'palenight', 'boosterx', 'boosterxvapor'] },
    { id: 'dark-anton',      title: '🩸 Тёмные темы Антона',                themes: ['extreme', 'newhone', 'nord'] },
    { id: 'dark-ruslan',     title: '💀 Тёмные темы Русланчика',            themes: ['wincry', 'ruslanchik', 'wincry_warning', 'wincry_full_warning'] },
    { id: 'dark-new',        title: '✨ Новые тёмные темы',                 themes: ['bloodmoon', 'abyss', 'newnord', 'catppuccin', 'dracula', 'newpalenight', 'hellokitty', 'kuromi', 'onedark'] },
    { id: 'curated-2-dark',  title: '🎯 Curated 2.0 — Тёмные', themes: [
      'bootstrap', 'pydata', 'nord_curated', 'solarized', 'catppuccin_curated',
      'gruvbox', 'dracula_curated', 'tokyo_night', 'one', 'everforest'
    ]},
    { id: 'curated-2-light', title: '🎯 Curated 2.0 — Светлые', themes: [
      'bootstrap_light', 'pydata_light', 'solarized_light',
      'gruvbox_light', 'tokyo_night_light', 'one_light', 'everforest_light'
    ]},
    { id: 'games', title: '🎮 Игровые темы', themes: [
      'vampire_the_masquerade', 'counter_strike_16', 'counter_strike_2', 'diablo', 'cyberpunk_2077'
    ]},
  ]
};

/* ============================================================
   СПИСКИ ШРИФТОВ
   ============================================================ */
export const FONT_HEADING_LATIN_OPTIONS = [
  { id: 'Jersey 10',        label: 'Jersey 10 (пиксельный)' },
  { id: 'Pixelify Sans',    label: 'Pixelify Sans (пиксельный)' },
  { id: 'Press Start 2P',   label: 'Press Start 2P (пиксельный)' },
  { id: 'VT323',            label: 'VT323 (терминальный)' },
  { id: 'Silkscreen',       label: 'Silkscreen (пиксельный)' },
  { id: 'Inter',            label: '★ Inter (variable 100-900)' },
  { id: 'JetBrains Mono',   label: '★ JetBrains Mono (variable 100-800)' },
  { id: 'Ubuntu',           label: '★ Ubuntu Sans (variable 100-900)' },
  { id: 'IBM Plex Mono',    label: 'IBM Plex Mono' }
];

export const FONT_HEADING_CYR_OPTIONS = [
  { id: 'IBM Plex Mono',    label: 'IBM Plex Mono (моно)' },
  { id: 'JetBrains Mono',   label: '★ JetBrains Mono (моно)' },
  { id: 'Ubuntu',           label: '★ Ubuntu Sans' },
  { id: 'Inter',            label: '★ Inter' },
  { id: 'system-ui',        label: 'System UI' },
  { id: 'Segoe UI',         label: 'Segoe UI (системный)' }
];

export const FONT_BODY_LATIN_OPTIONS = [
  { id: 'Pixelify Sans',    label: 'Pixelify Sans (пиксельный)' },
  { id: 'Inter',            label: '★ Inter (variable 100-900)' },
  { id: 'JetBrains Mono',   label: '★ JetBrains Mono (variable)' },
  { id: 'Ubuntu',           label: '★ Ubuntu Sans (variable)' },
  { id: 'IBM Plex Mono',    label: 'IBM Plex Mono' },
  { id: 'system-ui',        label: 'System UI' }
];

export const FONT_BODY_CYR_OPTIONS = [
  { id: 'IBM Plex Mono',    label: 'IBM Plex Mono' },
  { id: 'JetBrains Mono',   label: '★ JetBrains Mono' },
  { id: 'Ubuntu',           label: '★ Ubuntu Sans' },
  { id: 'Inter',            label: '★ Inter' },
  { id: 'Segoe UI',         label: 'Segoe UI (системный)' },
  { id: 'system-ui',        label: 'System UI' }
];

export const FONT_MONO_OPTIONS = [
  { id: 'JetBrains Mono',   label: '★ JetBrains Mono (variable)' },
  { id: 'IBM Plex Mono',    label: 'IBM Plex Mono' },
  { id: 'Ubuntu',           label: '★ Ubuntu Sans Mono' },
  { id: 'Consolas',         label: 'Consolas (системный)' },
  { id: 'Cascadia Mono',    label: 'Cascadia Mono' },
  { id: 'monospace',        label: 'monospace' }
];

export const DENSITY_OPTIONS = [
  { id: 'compact',     label: 'Компактная' },
  { id: 'comfortable', label: 'Обычная' },
  { id: 'spacious',    label: 'Просторная' }
];

export const FONT_SIZE_OPTIONS = [
  { id: '11', label: '11 px' },
  { id: '12', label: '12 px' },
  { id: '13', label: '13 px (по умолчанию)' },
  { id: '14', label: '14 px' },
  { id: '15', label: '15 px' },
  { id: '16', label: '16 px' }
];

/* ============================================================
   ПРИМЕНЕНИЕ ТЕМЫ
   ============================================================ */
export function applyTheme(name, unifiedButtons = false, sidebarOpacity = undefined) {
  const t = THEMES[name] || THEMES.material3;
  const root = document.documentElement.style;

  root.setProperty('--bg',          t.bg);
  root.setProperty('--bg-alt',      t.bgAlt);
  root.setProperty('--card',        t.card);
  root.setProperty('--card-hover',  t.cardHover);
  root.setProperty('--border',      t.border);
  root.setProperty('--fg',          t.fg);
  root.setProperty('--fg-muted',    t.fgMuted);
  root.setProperty('--accent',      t.accent);
  root.setProperty('--accent-2',    t.accent2);
  root.setProperty('--accent-text', t.accentText);
  root.setProperty('--info',        t.info);

  if (unifiedButtons) {
    root.setProperty('--success', t.accent);
    root.setProperty('--warning', t.accent);
    root.setProperty('--danger',  t.accent);
  } else {
    root.setProperty('--success', t.success);
    root.setProperty('--warning', t.warning);
    root.setProperty('--danger',  t.danger);
  }

  document.body.dataset.theme = name;
  document.body.classList.toggle('unified-buttons', !!unifiedButtons);

  if (sidebarOpacity !== undefined) applySidebarOpacity(sidebarOpacity);
}

export function applySidebarOpacity(opacityPercent) {
  const v = Math.max(0, Math.min(100, Number(opacityPercent))) / 100;
  document.documentElement.style.setProperty('--sidebar-alpha', String(v));
}

/* ============================================================
   ПРИМЕНЕНИЕ ШРИФТОВ (с весами для Variable Fonts)
   ============================================================ */
export function applyFonts(cfg = {}) {
  const root = document.documentElement.style;

  const hLatin = cfg.font_heading_latin || 'Jersey 10';
  const hCyr   = cfg.font_heading_cyr   || 'IBM Plex Mono';
  const bLatin = cfg.font_body_latin    || 'Pixelify Sans';
  const bCyr   = cfg.font_body_cyr      || 'IBM Plex Mono';
  const mono   = cfg.font_mono          || 'JetBrains Mono';
  const bodySz = Number(cfg.body_font_size) || 13;
  const headSz = Number(cfg.heading_font_size) || 15;
  const headWt = Number(cfg.heading_font_weight) || 700;
  const bodyWt = Number(cfg.body_font_weight) || 400;

  const headingStack = `'${hLatin}', '${hCyr}', 'IBM Plex Mono', system-ui, monospace`;
  const bodyStack    = `'${bLatin}', '${bCyr}', 'IBM Plex Mono', 'Segoe UI', system-ui, sans-serif`;
  const monoStack    = `'${mono}', 'IBM Plex Mono', Consolas, 'Cascadia Mono', monospace`;

  root.setProperty('--font-heading', headingStack);
  root.setProperty('--font-body',    bodyStack);
  root.setProperty('--font-mono',    monoStack);
  root.setProperty('--body-font-size', bodySz + 'px');
  root.setProperty('--heading-font-size', headSz + 'px');
  root.setProperty('--heading-font-weight', String(headWt));
  root.setProperty('--body-font-weight',    String(bodyWt));

  document.documentElement.style.fontFamily = bodyStack;
  document.documentElement.style.fontSize = bodySz + 'px';
  document.body.style.fontFamily = bodyStack;
  document.body.style.fontSize = bodySz + 'px';

  let styleTag = document.getElementById('__dynamic_fonts__');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = '__dynamic_fonts__';
    document.head.appendChild(styleTag);
  }

  styleTag.textContent = `
    h1, h2, h3, h4, h5, h6,
    .logo-title, .logo-sub, .brand h1, .apps-title,
    .section-title, .fixes-hero-title, .home-nav-name,
    .hh-hi, .security-score-title, .security-doc-title,
    .settings-section-title, .game-title, .opt-extra-title,
    .startup-group-title, .detected-title, .security-audit-title,
    .log-title, .comfort-tile-title, .apps-name,
    .hh-stat-label, .hh-stat-pct, .startup-name, .fw-name,
    .home-welcome-title, .tab-btn, .sub-tab-btn, .settings-subtab-btn,
    .sb-txt, .btn, .toggle-title, .field-label, .dd-value,
    .startup-badge, .startup-scope, .apps-count, .badge,
    .security-check-name, .security-stat-label, .security-stat-value,
    .security-summary-label, .security-summary-sub, .security-score-sub,
    .security-score-grade, .startup-summary-label, .startup-summary-value,
    .detected-panel-desc, .detected-tab-label, .opt-src-lbl,
    .vendor-select-all, .vendor-dropdown-title, .comfort-tile-state,
    .fixes-hero-sub, .fixes-hero-tile-title, .fixes-hero-tile-text,
    .hh-tag, .hh-stat-name, .home-nav-desc, .startup-details,
    .startup-status, .effect-card-label, .theme-name,
    .startup-mode-switch .mode-btn, .apps-run, .cbx-hone-run,
    .cbx-cancel, .fw-btn, .startup-btn {
      font-family: ${headingStack} !important;
      font-weight: ${headWt};
    }

    body, p, span, div, label, button, input, select, textarea,
    .muted, .apps-sub, .cbx-hone-desc, .cbx-at-label,
    .detected-desc, .toggle-desc, .field-desc,
    .security-note, .security-doc-t, .startup-details,
    .opt-extra-desc, .fixes-hero-sub {
      font-family: ${bodyStack};
      font-weight: ${bodyWt};
    }

    code, pre, .log-body, .security-audit-log,
    .fixes-log-body, .av-results-pre, .security-check-meta,
    .wallpaper-name, .cmd-row code, .mono, .startup-details {
      font-family: ${monoStack} !important;
    }

    body, p, span, div, label, input, select, textarea {
      font-size: ${bodySz}px;
    }
    h1, h2, h3, h4, h5, h6,
    .section-title, .apps-title, .logo-title,
    .brand h1, .fixes-hero-title, .home-nav-name, .hh-hi {
      font-size: ${headSz}px;
    }
  `;
}

/* ============================================================
   ПЛОТНОСТЬ
   ============================================================ */
export function applyDensity(density = 'comfortable') {
  const root = document.documentElement.style;
  const map = {
    compact:     { gap: '4px',  pad: '8px',  row: '28px', cardPad: '6px 10px',  btnPad: '4px 10px',  btnFs: '11px' },
    comfortable: { gap: '8px',  pad: '12px', row: '36px', cardPad: '10px 12px', btnPad: '5px 12px',  btnFs: '12px' },
    spacious:    { gap: '12px', pad: '16px', row: '44px', cardPad: '14px 16px', btnPad: '8px 18px',  btnFs: '13px' }
  };
  const d = map[density] || map.comfortable;
  root.setProperty('--ui-gap',  d.gap);
  root.setProperty('--ui-pad',  d.pad);
  root.setProperty('--ui-row',  d.row);
  root.setProperty('--ui-card-pad', d.cardPad);
  root.setProperty('--ui-btn-pad',  d.btnPad);
  root.setProperty('--ui-btn-fs',   d.btnFs);
}

/* ============================================================
   СКРУГЛЕНИЕ
   ============================================================ */
export function applyCornerRadius(px = 12) {
  const root = document.documentElement.style;
  const p = Math.max(0, Math.min(28, Number(px) || 12));
  root.setProperty('--radius-xs',   Math.max(2, Math.round(p * 0.25)) + 'px');
  root.setProperty('--radius-sm',   Math.max(4, Math.round(p * 0.5)) + 'px');
  root.setProperty('--radius-md',   p + 'px');
  root.setProperty('--radius-lg',   Math.round(p * 1.33) + 'px');
  root.setProperty('--radius-xl',   Math.round(p * 2) + 'px');
  root.setProperty('--radius-full', '9999px');
}

/* ============================================================
   ВИЗУАЛЬНЫЙ ЭФФЕКТ
   ============================================================ */
export function applyVisualEffect(effect = 'none') {
  const body = document.body;
  body.classList.remove('effect-glass', 'effect-aero');
  if (effect === 'glass') body.classList.add('effect-glass');
  else if (effect === 'aero') body.classList.add('effect-aero');

  try {
    if (window.api?.window?.setBackgroundMaterial) {
      let material = 'none';
      if (effect === 'aero') material = 'acrylic';
      else if (effect === 'glass') material = 'mica';
      window.api.window.setBackgroundMaterial(material);
    }
  } catch { /* ignore */ }
}