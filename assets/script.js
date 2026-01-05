const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const toast = document.getElementById("toast");
const form = document.getElementById("contact-form");
const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const menuToggles = Array.from(document.querySelectorAll(".menu-toggle"));
const navs = Array.from(document.querySelectorAll(".nav"));

const translations = {
  id: {},
  ja: {
    "nav.home": "ホーム",
    "nav.tentang": "会社概要",
    "nav.layanan": "サービス",
    "nav.contact": "お問い合わせ",
    "hero.kicker": "ようこそ",
    "hero.title": "令和スキルブリッジ インドネシア",
    "hero.lede": "現在の仕事を続けながら、日本でのキャリアを計画的かつ安全に目指すための語学・文化・ジョブマッチング支援。",
    "hero.cta.primary": "サービスを見る",
    "hero.cta.secondary": "お問い合わせ",
    "about.kicker": "会社概要",
    "about.title": "今の仕事から日本キャリアへの架け橋",
    "about.lede": "働きながら日本就職を目指す方に、柔軟なスケジュールと実践的なプログラムを提供します。",
    "about.card1.title": "働く人のために",
    "about.card1.body": "柔軟な時間割、効率的なモジュール、仕事と両立できる伴走支援。",
    "about.card2.title": "アプローチ",
    "about.card2.item1": "日本語＋日本のビジネス文化＋プロ意識。",
    "about.card2.item2": "職務スキルとメンタルの準備を強化。",
    "about.card2.item3": "業界に合わせたキャリア相談とマッチング。",
    "about.card3.title": "成果とサポート",
    "about.card3.item1": "就労に必要なJLPT水準の達成。",
    "about.card3.item2": "家族向けブリーフィングと書類支援で安心移行。",
    "about.card3.item3": "企業パートナーとのリアルな求人パイプライン。",
    "about.cta": "詳細を見る",
    "reviews.kicker": "卒業生の声",
    "reviews.title": "渡航とキャリアの軌跡",
    "reviews.lede": "日本でのキャリアをつかんだ卒業生の短い体験談です。",
    "feature1.title": "柔軟かつ体系的",
    "feature1.body": "夜間・週末に対応、繰り返し学べる短いモジュール、進捗の見える化。",
    "feature2.title": "業界ターゲット",
    "feature2.body": "ホスピタリティ、介護、エンジニアリングに焦点を当て実務力を強化。",
    "feature3.title": "伴走サポート",
    "feature3.body": "バイリンガル面接コーチング、書類作成、家族ブリーフィングまで対応。",
    "feature4.title": "ジョブマッチング",
    "feature4.body": "日本企業・ローカルパートナーと連携した実求人につなぐ支援。",
    "process.step1.title": "アセスメント＆計画",
    "process.step1.body": "語学レベル・経歴・目標を診断し、個別の学習ルートを設計。",
    "process.step2.title": "学習＆シミュレーション",
    "process.step2.body": "日本語・文化・ビジネスマナー、職場ロールプレイで実践力を養成。",
    "process.step3.title": "就労準備",
    "process.step3.body": "バイリンガル面接指導、CV/ポートフォリオ作成、JLPT模試。",
    "process.step4.title": "マッチング＆渡航",
    "process.step4.body": "企業マッピング、書類支援、家族ブリーフィング、オンボーディング初期支援。",
    "services.kicker": "サービス",
    "services.title": "日本でのキャリアに直結する統合プログラム",
    "services.lede": "働く人のための日本語研修、就労準備、ジョブマッチングを一体化したプログラムです。",
    "services.subtitle": "語学・文化・キャリアをまとめて強化",
    "service1.title": "日本語研修",
    "service1.i1": "初級から上級（N5–JFT）まで。",
    "service1.i2": "職場会話（会話）に特化したクラス。",
    "service1.i3": "柔軟な学習（オンライン・夜間クラス）。",
    "service2.title": "日本就労準備",
    "service2.i1": "日本の文化とビジネスエチケット。",
    "service2.i2": "職場でのプロフェッショナルコミュニケーション。",
    "service2.i3": "適応のための事前準備。",
    "service3.title": "キャリア支援・ジョブマッチング",
    "service3.i1": "日本で働くためのキャリア相談。",
    "service3.i2": "履歴書と面接対策。",
    "service3.i3": "内定までの手続き伴走。",
    "advantage.kicker": "強み",
    "advantage.title": "働きながら学べる現実的な設計",
    "advantage.c1": "現役で働く方向けに設計されたプログラム",
    "advantage.c2": "段階的で現実的な学習アプローチ",
    "advantage.c3": "語学だけでなく就労準備にフォーカス",
    "advantage.c4": "目標に合わせたパーソナル伴走",
    "advantage.c5": "長期的・継続的なキャリア視点",
    "target.kicker": "対象者",
    "target.title": "私たちが支援する方",
    "target1.title": "現役社員",
    "target1.body": "退職せずに日本で働きたい方。",
    "target2.title": "プロフェッショナル",
    "target2.body": "国際キャリアと文化適応力を高めたい方。",
    "target3.title": "キャリアチェンジ",
    "target3.body": "日本就職への明確なルートを求める方。",
    "target4.title": "伴走支援を希望",
    "target4.body": "書類、家族ブリーフィング、初期オンボーディングまで支援が必要な方。",
    "values.kicker": "価値観",
    "values.title": "私たちの行動指針",
    "values.i1": "学習品質へのコミットメント。",
    "values.i2": "キャリア伴走における誠実さ。",
    "values.i3": "すべてのプロセスでのプロ意識。",
    "values.i4": "参加者の準備と未来への配慮。",
    "aboutpage.kicker": "会社概要",
    "aboutpage.title": "学び・心構え・キャリアの架け橋",
    "aboutpage.title2": "今の仕事から日本キャリアへの架け橋",
    "aboutpage.lede": "時間が限られた現役社員の方へ、柔軟かつ実践的なプログラムで日本就職を支援します。",
    "approach.kicker": "アプローチ",
    "approach.title": "学び、心構え、実績につなげる",
    "approach.detail1": "現役で働く人のために",
    "approach.detail1.body": "柔軟な時間割、体系的なモジュール、仕事と両立できる伴走サポート。",
    "approach.detail2": "統合プログラム",
    "approach.detail2.i1": "就労基準に合わせた日本語学習。",
    "approach.detail2.i2": "文化・ビジネス礼儀・メンタルの準備。",
    "approach.detail2.i3": "キャリア伴走、ジョブマッチング、書類サポート。",
    "approach.detail3": "産業連携",
    "approach.detail3.i1": "日本企業やパートナーとの協働。",
    "approach.detail3.i2": "経歴に合った安全な配置スキーム。",
    "approach.detail3.i3": "家族ブリーフィングと初期オンボーディングでスムーズな移行。",
    "vision.title": "ビジョン",
    "vision.body": "関連する語学とスキルを通じて、日本のプロフェッショナルキャリアへ信頼の架け橋となる。",
    "mission.title": "ミッション",
    "mission.i1": "現役で働く人のための体系的・実践的・柔軟な日本語プログラムを提供。",
    "mission.i2": "日本で働くために必要な日本語レベルの達成を支援。",
    "mission.i3": "ビジネス文化・プロ意識・メンタル準備を提供。",
    "mission.i4": "経歴に合わせたキャリア伴走とジョブマッチングを実施。",
    "mission.i5": "日本企業・関連パートナーとの戦略的提携を構築。",
    "team.kicker": "チーム",
    "team.title": "Reiwa Skill Bridge を動かすメンバー",
    "team.lede": "運営・教育・マッチングを支えるコアメンバーです。",
    "pill.flex": "現役で働く人に合わせた柔軟さ",
    "pill.step": "段階的な学習設計",
    "pill.focus": "就労準備にフォーカス",
    "pill.support": "個別伴走サポート",
    "team.role1": "責任者",
    "team.role1.body": "プログラムの方向性と伴走品質をリード。",
    "team.role2": "管理",
    "team.role2.body": "事務、スケジュール、参加者調整を担当。",
    "team.role3": "経理",
    "team.role3.body": "財務の透明性と運営サポートを管理。",
    "team.role4": "ジョブマッチング",
    "team.role4.body": "求人ルート設計と産業パートナー調整を担当。",
    "team.role5": "講師（N3 & 会話）",
    "team.role5.body": "職場コミュニケーションとビジネス会話の専門家。",
    "contact.kicker": "お問い合わせ",
    "contact.title": "Reiwa Skill Bridge へのご連絡",
    "contact.lede": "研修や採用のご相談をお待ちしています。24時間以内に回答します。",
    "contact.office": "オフィス",
    "contact.address": "Jl. Raya Bandung Km.09 Kp. Cibakung Rt.03/06 Selajambe, Sukaluyu - Cianjur, Jawa Barat.",
    "contact.phoneLabel": "電話",
    "contact.hours": "営業時間",
    "contact.hoursValue": "月–金 09:00–18:00 WIB",
    "contact.form.name": "氏名",
    "contact.form.email": "メール",
    "contact.form.topic": "トピック",
    "contact.form.message": "メッセージ",
    "contact.form.submit": "送信",
    "contact.form.hint": "1営業日以内に返信します。",
  },
};

const applyLang = (lang) => {
  document.documentElement.lang = lang;
  langButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));

  const map = translations[lang] || {};

  const nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    if (!node.dataset.defaultText) {
      node.dataset.defaultText = node.textContent;
    }
    const text = map[key] ?? node.dataset.defaultText ?? node.textContent;
    node.textContent = text;
  });

  localStorage.setItem("reiwa_lang", lang);
};

langButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    applyLang(btn.dataset.lang);
  })
);

const savedLang = localStorage.getItem("reiwa_lang");
if (savedLang && translations[savedLang]) {
  applyLang(savedLang);
} else {
  applyLang("id");
}

// Mobile nav toggle
menuToggles.forEach((toggle) => {
  const nav = toggle.closest(".nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
});

// Close nav on link click (mobile)
navs.forEach((nav) => {
  nav.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        const toggle = nav.querySelector(".menu-toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }
    })
  );
});
// Highlight active nav based on page
const currentPage = document.body.dataset.page || "";
navLinks.forEach((link) => {
  link.classList.toggle("active", link.dataset.page === currentPage);
});

// Simple slider for team section
const sliders = Array.from(document.querySelectorAll("[data-slider]"));

sliders.forEach((slider) => {
  const slides = Array.from(
    slider.querySelectorAll(".team-card, .review-card")
  ).filter((el) => el.closest("[data-slider]") === slider);
  const isTeam = slider.dataset.slider === "team";
  const track =
    slider.querySelector(".review-track") || slider.querySelector(".team-track");
  const dots = Array.from(slider.querySelectorAll(".dot"));
  const prev = slider.querySelector(".slider-btn.prev");
  const next = slider.querySelector(".slider-btn.next");
  let index = 0;
  let timer;

  const setActive = (i) => {
    index = (i + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === index);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  };

  const startAuto = () => {
    clearInterval(timer);
    timer = setInterval(() => setActive(index + 1), 2000);
  };

  const setTrackHeight = () => {
    if (isTeam) return; // gunakan tinggi CSS tetap untuk slider tim
    if (!track || !slides.length) return;
    const maxH = Math.max(...slides.map((s) => s.offsetHeight));
    if (maxH > 0) {
      track.style.minHeight = `${maxH + 12}px`;
    }
  };

  prev?.addEventListener("click", () => {
    setActive(index - 1);
    startAuto();
    setTrackHeight();
  });
  next?.addEventListener("click", () => {
    setActive(index + 1);
    startAuto();
    setTrackHeight();
  });
  dots.forEach((dot, idx) =>
    dot.addEventListener("click", () => {
      setActive(idx);
      startAuto();
      setTrackHeight();
    })
  );

  if (slides.length > 1) {
    startAuto();
  }

  setTrackHeight();

  window.addEventListener("resize", () => {
    setTimeout(setTrackHeight, 100);
  });
});

// Lightweight toast on form submit (contact page)
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2600);
    form.reset();
  });
}
