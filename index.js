(function () {
  var T = {
    en: {
      title: 'U1Gym — Be the One',
      'nav.memberships': 'Memberships',
      'nav.hours': 'Hours',
      'nav.location': 'Location',
      'nav.cta': 'Join Now',
      'lang.btn': 'عربي',
      'hero.badge': "Fayyum's Premier Gym",
      'hero.slogan': '<strong>Be the One.</strong> Be U1',
      'hero.primary': 'View Memberships',
      'hero.outline': 'WhatsApp Us',
      'hero.scroll': 'Scroll',
      'sec.memberships': 'Memberships',
      'sec.memberships.title': 'Choose Your <span>Plan</span>',
      'plan.best': 'Best Value',
      'plan.subscribe': 'Subscribe Now',
      'plan.1m.name': '1 Month',
      'plan.1m.dur': '30 days access',
      'plan.2m.name': '2 Months',
      'plan.2m.dur': '60 days access',
      'plan.3m.name': '3 Months',
      'plan.3m.dur': '90 days access',
      'plan.6m.name': '6 Months',
      'plan.6m.dur': '180 days access',
      'plan.an.name': 'Annual',
      'plan.an.dur': '12 months access',
      'plan.vip.name': 'Annual VIP',
      'plan.vip.dur': '12 months access',
      'pt.label': 'Personal Training',
      'pt.title': 'PT <span>Sessions</span>',
      'pt.book': 'Book Now',
      'pt.solo': 'Solo',
      'pt.duo': 'Duo',
      'pt.trio': 'Trio',
      'pt.1s': '<span>1</span> Session',
      'pt.8s': '<span>8</span> Sessions',
      'pt.10s': '<span>10</span> Sessions',
      'pt.16s': '<span>16</span> Sessions',
      'pt.20s': '<span>20</span> Sessions',
      'pt.25s': '<span>25</span> Sessions',
      'pt.30s': '<span>30</span> Sessions',
      'pt.40s': '<span>40</span> Sessions',
      'pt.v1d': 'Valid 1 day',
      'pt.v1m': 'Valid 1 month',
      'pt.v2m': 'Valid 2 months',
      'pt.v3m': 'Valid 3 months',
      'pt.v4m': 'Valid 4 months',
      'hours.label': 'Schedule',
      'hours.title': 'Gym <span>Hours</span>',
      'hours.men': 'Men',
      'hours.ladies': 'Ladies',
      'day.fri': 'Friday',
      'day.sat': 'Saturday',
      'day.mon': 'Monday',
      'day.wed': 'Wednesday',
      'day.sun': 'Sunday',
      'day.tue': 'Tuesday',
      'day.thu': 'Thursday',
      'loc.label': 'Find Us',
      'loc.title': 'Our <span>Location</span>',
      'loc.addr.label': 'Address',
      'loc.addr.text': 'Fayyum — Dallah — In front of Al Hayah 2 Hospital',
      'loc.maps': 'Open in Google Maps →',
      'loc.phone.label': 'Phone / WhatsApp',
      'loc.ig': 'Instagram',
      'loc.fb': 'Facebook',
      'loc.join': 'Join Us',
      'social.heading': 'Follow the <span>Journey</span>',
      'social.sub': 'Stay up to date with classes, transformations, and offers.',
      'social.ig': 'Instagram',
      'social.fb': 'Facebook',
      'social.wa': 'WhatsApp',
      'footer.slogan': 'Be the One. Be U1.',
      'footer.copy': '© 2026 U1Gym — Fayyum, Egypt. All rights reserved.',
    },
    ar: {
      title: 'U1 جيم — كن الأفضل',
      'nav.memberships': 'الاشتراكات',
      'nav.hours': 'المواعيد',
      'nav.location': 'الموقع',
      'nav.cta': 'انضم الآن',
      'lang.btn': 'English',
      'hero.badge': 'أفضل جيم في الفيوم',
      'hero.slogan': '<strong>كن الأفضل.</strong> كن U1',
      'hero.primary': 'عرض الاشتراكات',
      'hero.outline': 'تواصل واتساب',
      'hero.scroll': 'مرر',
      'sec.memberships': 'الاشتراكات',
      'sec.memberships.title': 'اختر <span>خطتك</span>',
      'plan.best': 'أفضل قيمة',
      'plan.subscribe': 'اشترك الآن',
      'plan.1m.name': 'شهر واحد',
      'plan.1m.dur': 'وصول لمدة 30 يومًا',
      'plan.2m.name': 'شهران',
      'plan.2m.dur': 'وصول لمدة 60 يومًا',
      'plan.3m.name': '3 أشهر',
      'plan.3m.dur': 'وصول لمدة 90 يومًا',
      'plan.6m.name': '6 أشهر',
      'plan.6m.dur': 'وصول لمدة 180 يومًا',
      'plan.an.name': 'سنوي',
      'plan.an.dur': 'وصول لمدة 12 شهرًا',
      'plan.vip.name': 'سنوي VIP',
      'plan.vip.dur': 'وصول لمدة 12 شهرًا',
      'pt.label': 'التدريب الشخصي',
      'pt.title': 'جلسات <span>PT</span>',
      'pt.book': 'احجز الآن',
      'pt.solo': 'فردي',
      'pt.duo': 'ثنائي',
      'pt.trio': 'ثلاثي',
      'pt.1s': '<span>1</span> جلسة',
      'pt.8s': '<span>8</span> جلسات',
      'pt.10s': '<span>10</span> جلسات',
      'pt.16s': '<span>16</span> جلسة',
      'pt.20s': '<span>20</span> جلسة',
      'pt.25s': '<span>25</span> جلسة',
      'pt.30s': '<span>30</span> جلسة',
      'pt.40s': '<span>40</span> جلسة',
      'pt.v1d': 'صالح ليوم واحد',
      'pt.v1m': 'صالح لشهر واحد',
      'pt.v2m': 'صالح لشهرين',
      'pt.v3m': 'صالح لثلاثة أشهر',
      'pt.v4m': 'صالح لأربعة أشهر',
      'hours.label': 'المواعيد',
      'hours.title': 'مواعيد <span>الجيم</span>',
      'hours.men': 'رجال',
      'hours.ladies': 'سيدات',
      'day.fri': 'الجمعة',
      'day.sat': 'السبت',
      'day.mon': 'الاثنين',
      'day.wed': 'الأربعاء',
      'day.sun': 'الأحد',
      'day.tue': 'الثلاثاء',
      'day.thu': 'الخميس',
      'loc.label': 'موقعنا',
      'loc.title': '<span>موقعنا</span>',
      'loc.addr.label': 'العنوان',
      'loc.addr.text': 'الفيوم — دله — أمام مستشفى الحياة 2',
      'loc.maps': 'افتح في خرائط جوجل ←',
      'loc.phone.label': 'هاتف / واتساب',
      'loc.ig': 'إنستغرام',
      'loc.fb': 'فيسبوك',
      'loc.join': 'انضم إلينا',
      'social.heading': 'تابع <span>الرحلة</span>',
      'social.sub': 'ابق على اطلاع بالكلاسات والتحولات والعروض.',
      'social.ig': 'إنستغرام',
      'social.fb': 'فيسبوك',
      'social.wa': 'واتساب',
      'footer.slogan': 'كن الأفضل. كن U1.',
      'footer.copy': '© 2026 U1Gym — الفيوم، مصر. جميع الحقوق محفوظة.',
    },
  };

  var PERKS = {
    '1m': {
      en: [
        { text: 'Full gym access', dim: false },
        { text: 'InBody scan', dim: true },
        { text: 'PT session', dim: true },
        { text: 'Sauna / Steam', dim: true },
        { text: 'Jacuzzi', dim: true },
      ],
      ar: [
        { text: 'دخول كامل للجيم', dim: false },
        { text: 'فحص InBody', dim: true },
        { text: 'جلسة تدريب شخصي', dim: true },
        { text: 'سونا / بخار', dim: true },
        { text: 'جاكوزي', dim: true },
      ],
    },
    '2m': {
      en: [
        { text: 'Full gym access', dim: false },
        { text: '1 InBody scan', dim: false },
        { text: '1 Invitation', dim: false },
        { text: 'PT session', dim: true },
        { text: 'Sauna / Steam', dim: true },
      ],
      ar: [
        { text: 'دخول كامل للجيم', dim: false },
        { text: 'فحص InBody واحد', dim: false },
        { text: 'دعوة واحدة', dim: false },
        { text: 'جلسة تدريب شخصي', dim: true },
        { text: 'سونا / بخار', dim: true },
      ],
    },
    '3m': {
      en: [
        { text: 'Full gym access', dim: false },
        { text: '1 InBody scan', dim: false },
        { text: '1 PT session', dim: false },
        { text: '1 Steam', dim: false },
        { text: '1 Sauna', dim: false },
        { text: '2 Invitations', dim: false },
      ],
      ar: [
        { text: 'دخول كامل للجيم', dim: false },
        { text: 'فحص InBody واحد', dim: false },
        { text: 'جلسة تدريب شخصي', dim: false },
        { text: 'بخار مرة واحدة', dim: false },
        { text: 'سونا مرة واحدة', dim: false },
        { text: 'دعوتان', dim: false },
      ],
    },
    '6m': {
      en: [
        { text: 'Full gym access', dim: false },
        { text: '2 InBody scans', dim: false },
        { text: '1 PT session', dim: false },
        { text: '2 Steam', dim: false },
        { text: '2 Sauna', dim: false },
        { text: '1 Jacuzzi', dim: false },
        { text: '3 Invitations', dim: false },
        { text: '2-Week freeze', dim: false },
      ],
      ar: [
        { text: 'دخول كامل للجيم', dim: false },
        { text: 'فحصا InBody', dim: false },
        { text: 'جلسة تدريب شخصي', dim: false },
        { text: 'بخار مرتان', dim: false },
        { text: 'سونا مرتان', dim: false },
        { text: 'جاكوزي مرة واحدة', dim: false },
        { text: '3 دعوات', dim: false },
        { text: 'تجميد أسبوعان', dim: false },
      ],
    },
    an: {
      en: [
        { text: 'Full gym access', dim: false },
        { text: '5 InBody scans', dim: false },
        { text: '3 PT sessions', dim: false },
        { text: '5 Steam', dim: false },
        { text: '5 Sauna', dim: false },
        { text: '2 Jacuzzi', dim: false },
        { text: '5 Invitations', dim: false },
        { text: '1-Month freeze', dim: false },
      ],
      ar: [
        { text: 'دخول كامل للجيم', dim: false },
        { text: '5 فحوصات InBody', dim: false },
        { text: '3 جلسات تدريب شخصي', dim: false },
        { text: 'بخار 5 مرات', dim: false },
        { text: 'سونا 5 مرات', dim: false },
        { text: 'جاكوزي مرتان', dim: false },
        { text: '5 دعوات', dim: false },
        { text: 'تجميد شهر واحد', dim: false },
      ],
    },
    vip: {
      en: [
        { text: 'Full gym access', dim: false },
        { text: '8 InBody scans', dim: false },
        { text: '4 PT sessions', dim: false },
        { text: '8 Steam', dim: false },
        { text: '8 Sauna', dim: false },
        { text: '4 Jacuzzi', dim: false },
        { text: '8 Invitations', dim: false },
        { text: '2-Month freeze', dim: false },
        { text: '1-Month nutrition plan', dim: false },
      ],
      ar: [
        { text: 'دخول كامل للجيم', dim: false },
        { text: '8 فحوصات InBody', dim: false },
        { text: '4 جلسات تدريب شخصي', dim: false },
        { text: 'بخار 8 مرات', dim: false },
        { text: 'سونا 8 مرات', dim: false },
        { text: 'جاكوزي 4 مرات', dim: false },
        { text: '8 دعوات', dim: false },
        { text: 'تجميد شهران', dim: false },
        { text: 'خطة تغذية لمدة شهر', dim: false },
      ],
    },
  };

  var lang = localStorage.getItem('u1-lang') || 'en';

  function applyLang(l) {
    lang = l;
    var t = T[l];
    var isRTL = l === 'ar';

    document.documentElement.lang = l;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.title = t.title;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-plan-perks]').forEach(function (ul) {
      var planId = ul.dataset.planPerks;
      var perks = PERKS[planId] && PERKS[planId][l];
      if (!perks) return;
      ul.innerHTML = perks
        .map(function (p) {
          return '<li' + (p.dim ? ' class="dim"' : '') + '>' + p.text + '</li>';
        })
        .join('');
    });

    var btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = t['lang.btn'];

    localStorage.setItem('u1-lang', l);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        applyLang(lang === 'en' ? 'ar' : 'en');
      });
    }
    applyLang(lang);
  });
})();
