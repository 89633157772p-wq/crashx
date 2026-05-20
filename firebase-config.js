// ═══════════════════════════════════════════════════════════════
//  firebase-config.js  —  ЕДИНЫЙ КОНФИГ ДЛЯ ВСЕГО ПРОЕКТА
//  Подключается в index.html и admin.html ПЕРВЫМ скриптом
// ═══════════════════════════════════════════════════════════════
//
//  КАК ПОЛУЧИТЬ ДАННЫЕ:
//  1. Зайди на https://console.firebase.google.com
//  2. Открой свой проект → Настройки (шестерёнка) → Общие
//  3. Прокрути вниз до "Твои приложения" → Web App
//  4. Скопируй firebaseConfig и вставь сюда
//
// ═══════════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCk3SlfgmvaXZ2aFD0VvQ-lvZmUOY80cPk",
  authDomain:        "crashx-48475.firebaseapp.com",
  databaseURL:       "https://crashx-48475-default-rtdb.europe-west1.firebasedatabase.app",
  projectId:         "crashx-48475",
  storageBucket:     "crashx-48475.firebasestorage.app",
  messagingSenderId: "17365754287",
  appId:             "1:17365754287:web:b37ed2723c1c649166cf5a"
};

// ─── Учётные данные администраторов ───────────────────────────
// Можно добавить несколько объектов для нескольких модераторов
const ADMIN_CREDS = [
  { login: "admin",  password: "QwEaSd@3_" },
  // { login: "moder", password: "moder_pass" },
];

// ─── Инициализация Firebase (делается один раз здесь) ─────────
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}
const db = firebase.database();
