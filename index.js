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
      'loc.addr.html':
        'Fayyum \u2014 Dallah \u2014 In front of Al Hayah 2 Hospital<br><a href="https://maps.app.goo.gl/UnkZtGBVn61oXhRw6" target="_blank">Open in Google Maps \u2192</a>',
      'loc.phone.label': 'Phone / WhatsApp',
      'loc.ig': 'Instagram',
      'loc.fb': 'Facebook',
      'loc.join': 'Join Us',
      'social.heading': 'Follow the <span>Journey</span>',
      'social.sub':
        'Stay up to date with classes, transformations, and offers.',
      'social.ig': 'Instagram',
      'social.fb': 'Facebook',
      'social.wa': 'WhatsApp',
      'footer.slogan': 'Be the One. Be U1.',
      'footer.copy': 'Developed by codegate',
    },
    ar: {
      title:
        'U1 \u062c\u064a\u0645 \u2014 \u0643\u0646 \u0627\u0644\u0623\u0641\u0636\u0644',
      'nav.memberships':
        '\u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a',
      'nav.hours': '\u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f',
      'nav.location': '\u0627\u0644\u0645\u0648\u0642\u0639',
      'nav.cta': '\u0627\u0646\u0636\u0645 \u0627\u0644\u0622\u0646',
      'lang.btn': 'English',
      'hero.badge':
        '\u0623\u0641\u0636\u0644 \u062c\u064a\u0645 \u0641\u064a \u0627\u0644\u0641\u064a\u0648\u0645',
      'hero.slogan':
        '<strong>\u0643\u0646 \u0627\u0644\u0623\u0641\u0636\u0644.</strong> \u0643\u0646 U1',
      'hero.primary':
        '\u0639\u0631\u0636 \u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a',
      'hero.outline':
        '\u062a\u0648\u0627\u0635\u0644 \u0648\u0627\u062a\u0633\u0627\u0628',
      'hero.scroll': '\u0645\u0631\u0631',
      'sec.memberships':
        '\u0627\u0644\u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a',
      'sec.memberships.title':
        '\u0627\u062e\u062a\u0631 <span>\u062e\u0637\u062a\u0643</span>',
      'plan.best': '\u0623\u0641\u0636\u0644 \u0642\u064a\u0645\u0629',
      'plan.subscribe':
        '\u0627\u0634\u062a\u0631\u0643 \u0627\u0644\u0622\u0646',
      'plan.1m.name': '\u0634\u0647\u0631 \u0648\u0627\u062d\u062f',
      'plan.1m.dur':
        '\u0648\u0635\u0648\u0644 \u0644\u0645\u062f\u0629 30 \u064a\u0648\u0645\u064b\u0627',
      'plan.2m.name': '\u0634\u0647\u0631\u0627\u0646',
      'plan.2m.dur':
        '\u0648\u0635\u0648\u0644 \u0644\u0645\u062f\u0629 60 \u064a\u0648\u0645\u064b\u0627',
      'plan.3m.name': '3 \u0623\u0634\u0647\u0631',
      'plan.3m.dur':
        '\u0648\u0635\u0648\u0644 \u0644\u0645\u062f\u0629 90 \u064a\u0648\u0645\u064b\u0627',
      'plan.6m.name': '6 \u0623\u0634\u0647\u0631',
      'plan.6m.dur':
        '\u0648\u0635\u0648\u0644 \u0644\u0645\u062f\u0629 180 \u064a\u0648\u0645\u064b\u0627',
      'plan.an.name': '\u0633\u0646\u0648\u064a',
      'plan.an.dur':
        '\u0648\u0635\u0648\u0644 \u0644\u0645\u062f\u0629 12 \u0634\u0647\u0631\u064b\u0627',
      'plan.vip.name': '\u0633\u0646\u0648\u064a VIP',
      'plan.vip.dur':
        '\u0648\u0635\u0648\u0644 \u0644\u0645\u062f\u0629 12 \u0634\u0647\u0631\u064b\u0627',
      'pt.label':
        '\u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0627\u0644\u0634\u062e\u0635\u064a',
      'pt.title': 'جلسات <span>خاصة</span>',
      'pt.book': '\u0627\u062d\u062c\u0632 \u0627\u0644\u0622\u0646',
      'pt.solo': '\u0641\u0631\u062f\u064a',
      'pt.duo': '\u062b\u0646\u0627\u0626\u064a',
      'pt.trio': '\u062b\u0644\u0627\u062b\u064a',
      'pt.1s': '<span>1</span> \u062c\u0644\u0633\u0629',
      'pt.8s': '<span>8</span> \u062c\u0644\u0633\u0627\u062a',
      'pt.10s': '<span>10</span> \u062c\u0644\u0633\u0627\u062a',
      'pt.16s': '<span>16</span> \u062c\u0644\u0633\u0629',
      'pt.20s': '<span>20</span> \u062c\u0644\u0633\u0629',
      'pt.25s': '<span>25</span> \u062c\u0644\u0633\u0629',
      'pt.30s': '<span>30</span> \u062c\u0644\u0633\u0629',
      'pt.40s': '<span>40</span> \u062c\u0644\u0633\u0629',
      'pt.v1d':
        '\u0635\u0627\u0644\u062d \u0644\u064a\u0648\u0645 \u0648\u0627\u062d\u062f',
      'pt.v1m':
        '\u0635\u0627\u0644\u062d \u0644\u0634\u0647\u0631 \u0648\u0627\u062d\u062f',
      'pt.v2m': '\u0635\u0627\u0644\u062d \u0644\u0634\u0647\u0631\u064a\u0646',
      'pt.v3m':
        '\u0635\u0627\u0644\u062d \u0644\u062b\u0644\u0627\u062b\u0629 \u0623\u0634\u0647\u0631',
      'pt.v4m':
        '\u0635\u0627\u0644\u062d \u0644\u0623\u0631\u0628\u0639\u0629 \u0623\u0634\u0647\u0631',
      'hours.label': '\u0627\u0644\u0645\u0648\u0627\u0639\u064a\u062f',
      'hours.title':
        '\u0645\u0648\u0627\u0639\u064a\u062f <span>\u0627\u0644\u062c\u064a\u0645</span>',
      'hours.men': '\u0631\u062c\u0627\u0644',
      'hours.ladies': '\u0633\u064a\u062f\u0627\u062a',
      'day.fri': '\u0627\u0644\u062c\u0645\u0639\u0629',
      'day.sat': '\u0627\u0644\u0633\u0628\u062a',
      'day.mon': '\u0627\u0644\u0627\u062b\u0646\u064a\u0646',
      'day.wed': '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621',
      'day.sun': '\u0627\u0644\u0623\u062d\u062f',
      'day.tue': '\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621',
      'day.thu': '\u0627\u0644\u062e\u0645\u064a\u0633',
      'loc.label': '\u0645\u0648\u0642\u0639\u0646\u0627',
      'loc.title': '<span>\u0645\u0648\u0642\u0639\u0646\u0627</span>',
      'loc.addr.label': '\u0627\u0644\u0639\u0646\u0648\u0627\u0646',
      'loc.addr.html':
        '\u0627\u0644\u0641\u064a\u0648\u0645 \u2014 \u062f\u0644\u0647 \u2014 \u0623\u0645\u0627\u0645 \u0645\u0633\u062a\u0634\u0641\u0649 \u0627\u0644\u062d\u064a\u0627\u0629 2<br><a href="https://maps.app.goo.gl/UnkZtGBVn61oXhRw6" target="_blank">\u0627\u0641\u062a\u062d \u0641\u064a \u062e\u0631\u0627\u0626\u0637 \u062c\u0648\u062c\u0644 \u2190</a>',
      'loc.phone.label':
        '\u0647\u0627\u062a\u0641 / \u0648\u0627\u062a\u0633\u0627\u0628',
      'loc.ig': '\u0625\u0646\u0633\u062a\u062c\u0631\u0627\u0645',
      'loc.fb': '\u0641\u064a\u0633\u0628\u0648\u0643',
      'loc.join': '\u0627\u0646\u0636\u0645 \u0625\u0644\u064a\u0646\u0627',
      'social.heading':
        '\u062a\u0627\u0628\u0639 <span>\u0627\u0644\u0631\u062d\u0644\u0629</span>',
      'social.sub':
        '\u0627\u0628\u0642 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u0628\u0627\u0644\u0643\u0644\u0627\u0633\u0627\u062a \u0648\u0627\u0644\u062a\u062d\u0648\u0644\u0627\u062a \u0648\u0627\u0644\u0639\u0631\u0648\u0636.',
      'social.ig': '\u0625\u0646\u0633\u062a\u062c\u0631\u0627\u0645',
      'social.fb': '\u0641\u064a\u0633\u0628\u0648\u0643',
      'social.wa': '\u0648\u0627\u062a\u0633\u0627\u0628',
      'footer.slogan':
        '\u0643\u0646 \u0627\u0644\u0623\u0641\u0636\u0644. \u0643\u0646 U1.',
      'footer.copy': 'Developed by codegate',
    },
  };

  var PERKS = {
    '1m': {
      en: [
        { text: 'Unlimited gym entrance & sessions', dim: false },
        { text: 'InBody scan', dim: true },
        { text: 'PT session', dim: true },
        { text: 'Sauna / Steam', dim: true },
        { text: 'Jacuzzi', dim: true },
      ],
      ar: [
        {
          text: '\u062f\u062e\u0648\u0644 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0644\u0644\u062c\u064a\u0645 \u0648\u062d\u0635\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629',
          dim: false,
        },
        { text: '\u0641\u062d\u0635 InBody', dim: true },
        {
          text: '\u062c\u0644\u0633\u0629 \u062a\u062f\u0631\u064a\u0628 \u0634\u062e\u0635\u064a',
          dim: true,
        },
        {
          text: '\u0633\u0648\u0646\u0627 / \u0628\u062e\u0627\u0631',
          dim: true,
        },
        { text: '\u062c\u0627\u0643\u0648\u0632\u064a', dim: true },
      ],
    },
    '2m': {
      en: [
        { text: 'Unlimited gym entrance & sessions', dim: false },
        { text: '1 InBody scan', dim: false },
        { text: '1 Invitation', dim: false },
        { text: 'PT session', dim: true },
        { text: 'Sauna / Steam', dim: true },
      ],
      ar: [
        {
          text: '\u062f\u062e\u0648\u0644 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0644\u0644\u062c\u064a\u0645 \u0648\u062d\u0635\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629',
          dim: false,
        },
        {
          text: '\u0641\u062d\u0635 InBody \u0648\u0627\u062d\u062f',
          dim: false,
        },
        {
          text: '\u062f\u0639\u0648\u0629 \u0648\u0627\u062d\u062f\u0629',
          dim: false,
        },
        {
          text: '\u062c\u0644\u0633\u0629 \u062a\u062f\u0631\u064a\u0628 \u0634\u062e\u0635\u064a',
          dim: true,
        },
        {
          text: '\u0633\u0648\u0646\u0627 / \u0628\u062e\u0627\u0631',
          dim: true,
        },
      ],
    },
    '3m': {
      en: [
        { text: 'Unlimited gym entrance & sessions', dim: false },
        { text: '1 InBody scan', dim: false },
        { text: '1 PT session', dim: false },
        { text: '1 Steam', dim: false },
        { text: '1 Sauna', dim: false },
        { text: '2 Invitations', dim: false },
      ],
      ar: [
        {
          text: '\u062f\u062e\u0648\u0644 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0644\u0644\u062c\u064a\u0645 \u0648\u062d\u0635\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629',
          dim: false,
        },
        {
          text: '\u0641\u062d\u0635 InBody \u0648\u0627\u062d\u062f',
          dim: false,
        },
        {
          text: '\u062c\u0644\u0633\u0629 \u062a\u062f\u0631\u064a\u0628 \u0634\u062e\u0635\u064a',
          dim: false,
        },
        {
          text: '\u0628\u062e\u0627\u0631 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629',
          dim: false,
        },
        {
          text: '\u0633\u0648\u0646\u0627 \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629',
          dim: false,
        },
        { text: '\u062f\u0639\u0648\u062a\u0627\u0646', dim: false },
      ],
    },
    '6m': {
      en: [
        { text: 'Unlimited gym entrance & sessions', dim: false },
        { text: '2 InBody scans', dim: false },
        { text: '1 PT session', dim: false },
        { text: '2 Steam', dim: false },
        { text: '2 Sauna', dim: false },
        { text: '1 Jacuzzi', dim: false },
        { text: '3 Invitations', dim: false },
        { text: '2-Week freeze', dim: false },
      ],
      ar: [
        {
          text: '\u062f\u062e\u0648\u0644 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0644\u0644\u062c\u064a\u0645 \u0648\u062d\u0635\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629',
          dim: false,
        },
        { text: '\u0641\u062d\u0635\u0627 InBody', dim: false },
        {
          text: '\u062c\u0644\u0633\u0629 \u062a\u062f\u0631\u064a\u0628 \u0634\u062e\u0635\u064a',
          dim: false,
        },
        {
          text: '\u0628\u062e\u0627\u0631 \u0645\u0631\u062a\u0627\u0646',
          dim: false,
        },
        {
          text: '\u0633\u0648\u0646\u0627 \u0645\u0631\u062a\u0627\u0646',
          dim: false,
        },
        {
          text: '\u062c\u0627\u0643\u0648\u0632\u064a \u0645\u0631\u0629 \u0648\u0627\u062d\u062f\u0629',
          dim: false,
        },
        { text: '3 \u062f\u0639\u0648\u0627\u062a', dim: false },
        {
          text: '\u062a\u062c\u0645\u064a\u062f \u0623\u0633\u0628\u0648\u0639\u0627\u0646',
          dim: false,
        },
      ],
    },
    an: {
      en: [
        { text: 'Unlimited gym entrance & sessions', dim: false },
        { text: '5 InBody scans', dim: false },
        { text: '3 PT sessions', dim: false },
        { text: '5 Steam', dim: false },
        { text: '5 Sauna', dim: false },
        { text: '2 Jacuzzi', dim: false },
        { text: '5 Invitations', dim: false },
        { text: '1-Month freeze', dim: false },
      ],
      ar: [
        {
          text: '\u062f\u062e\u0648\u0644 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0644\u0644\u062c\u064a\u0645 \u0648\u062d\u0635\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629',
          dim: false,
        },
        { text: '5 \u0641\u062d\u0648\u0635\u0627\u062a InBody', dim: false },
        {
          text: '3 \u062c\u0644\u0633\u0627\u062a \u062a\u062f\u0631\u064a\u0628 \u0634\u062e\u0635\u064a',
          dim: false,
        },
        {
          text: '\u0628\u062e\u0627\u0631 5 \u0645\u0631\u0627\u062a',
          dim: false,
        },
        {
          text: '\u0633\u0648\u0646\u0627 5 \u0645\u0631\u0627\u062a',
          dim: false,
        },
        {
          text: '\u062c\u0627\u0643\u0648\u0632\u064a \u0645\u0631\u062a\u0627\u0646',
          dim: false,
        },
        { text: '5 \u062f\u0639\u0648\u0627\u062a', dim: false },
        {
          text: '\u062a\u062c\u0645\u064a\u062f \u0634\u0647\u0631 \u0648\u0627\u062d\u062f',
          dim: false,
        },
      ],
    },
    vip: {
      en: [
        { text: 'Unlimited gym entrance & sessions', dim: false },
        { text: '8 InBody scans', dim: false },
        { text: '4 PT sessions', dim: false },
        { text: '8 Steam', dim: false },
        { text: '8 Sauna', dim: false },
        { text: '4 Jacuzzi', dim: false },
        { text: '8 Invitations', dim: false },
        { text: '2-Month freeze', dim: false },
      ],
      ar: [
        {
          text: '\u062f\u062e\u0648\u0644 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0644\u0644\u062c\u064a\u0645 \u0648\u062d\u0635\u0635 \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f\u0629',
          dim: false,
        },
        { text: '8 \u0641\u062d\u0648\u0635\u0627\u062a InBody', dim: false },
        {
          text: '4 \u062c\u0644\u0633\u0627\u062a \u062a\u062f\u0631\u064a\u0628 \u0634\u062e\u0635\u064a',
          dim: false,
        },
        {
          text: '\u0628\u062e\u0627\u0631 8 \u0645\u0631\u0627\u062a',
          dim: false,
        },
        {
          text: '\u0633\u0648\u0646\u0627 8 \u0645\u0631\u0627\u062a',
          dim: false,
        },
        {
          text: '\u062c\u0627\u0643\u0648\u0632\u064a 4 \u0645\u0631\u0627\u062a',
          dim: false,
        },
        { text: '8 \u062f\u0639\u0648\u0627\u062a', dim: false },
        {
          text: '\u062a\u062c\u0645\u064a\u062f \u0634\u0647\u0631\u0627\u0646',
          dim: false,
        },
      ],
    },
  };

  var TIER_KEYS = {
    Solo: 'pt.solo',
    Duo: 'pt.duo',
    Trio: 'pt.trio',
    '\u0641\u0631\u062f\u064a': 'pt.solo',
    '\u062b\u0646\u0627\u0626\u064a': 'pt.duo',
    '\u062b\u0644\u0627\u062b\u064a': 'pt.trio',
  };

  var VALIDITY_KEYS = {
    'Valid 1 day': 'pt.v1d',
    'Valid 1 month': 'pt.v1m',
    'Valid 2 months': 'pt.v2m',
    'Valid 3 months': 'pt.v3m',
    'Valid 4 months': 'pt.v4m',
    '\u0635\u0627\u0644\u062d \u0644\u064a\u0648\u0645 \u0648\u0627\u062d\u062f':
      'pt.v1d',
    '\u0635\u0627\u0644\u062d \u0644\u0634\u0647\u0631 \u0648\u0627\u062d\u062f':
      'pt.v1m',
    '\u0635\u0627\u0644\u062d \u0644\u0634\u0647\u0631\u064a\u0646': 'pt.v2m',
    '\u0635\u0627\u0644\u062d \u0644\u062b\u0644\u0627\u062b\u0629 \u0623\u0634\u0647\u0631':
      'pt.v3m',
    '\u0635\u0627\u0644\u062d \u0644\u0623\u0631\u0628\u0639\u0629 \u0623\u0634\u0647\u0631':
      'pt.v4m',
  };

  var DAY_KEYS = {
    Friday: 'day.fri',
    Saturday: 'day.sat',
    Monday: 'day.mon',
    Wednesday: 'day.wed',
    Sunday: 'day.sun',
    Tuesday: 'day.tue',
    Thursday: 'day.thu',
    '\u0627\u0644\u062c\u0645\u0639\u0629': 'day.fri',
    '\u0627\u0644\u0633\u0628\u062a': 'day.sat',
    '\u0627\u0644\u0627\u062b\u0646\u064a\u0646': 'day.mon',
    '\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621': 'day.wed',
    '\u0627\u0644\u0623\u062d\u062f': 'day.sun',
    '\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621': 'day.tue',
    '\u0627\u0644\u062e\u0645\u064a\u0633': 'day.thu',
  };

  var lang = localStorage.getItem('u1-lang') || 'en';

  function applyLang(l) {
    lang = l;
    var t = T[l];
    var isAR = l === 'ar';

    document.documentElement.lang = l;
    document.documentElement.dir = isAR ? 'rtl' : 'ltr';
    document.title = t.title;

    // data-i18n (text)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // data-i18n-html (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.dataset.i18nHtml;
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // plan perks
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

    // subscribe / book buttons (all same key)
    document.querySelectorAll('.plan-subscribe').forEach(function (el) {
      el.textContent = t['plan.subscribe'];
    });
    document.querySelectorAll('.pt-subscribe').forEach(function (el) {
      el.textContent = t['pt.book'];
    });

    // PT tier labels — auto-detect on first call
    document.querySelectorAll('.pt-tier-label').forEach(function (el) {
      if (!el.dataset.tierKey)
        el.dataset.tierKey = TIER_KEYS[el.textContent.trim()] || '';
      if (el.dataset.tierKey) el.textContent = t[el.dataset.tierKey];
    });

    // PT validity — auto-detect on first call
    document.querySelectorAll('.pt-validity').forEach(function (el) {
      if (!el.dataset.validityKey)
        el.dataset.validityKey = VALIDITY_KEYS[el.textContent.trim()] || '';
      if (el.dataset.validityKey) el.textContent = t[el.dataset.validityKey];
    });

    // PT sessions HTML — auto-detect number on first call
    document.querySelectorAll('.pt-sessions').forEach(function (el) {
      if (!el.dataset.ptKey) {
        var span = el.querySelector('span');
        if (span) el.dataset.ptKey = 'pt.' + span.textContent.trim() + 's';
      }
      if (el.dataset.ptKey && t[el.dataset.ptKey] !== undefined)
        el.innerHTML = t[el.dataset.ptKey];
    });

    // Day pills — auto-detect on first call
    document.querySelectorAll('.day-pill').forEach(function (el) {
      if (!el.dataset.dayKey)
        el.dataset.dayKey = DAY_KEYS[el.textContent.trim()] || '';
      if (el.dataset.dayKey) el.textContent = t[el.dataset.dayKey];
    });

    // Discount badges — reformat "17% OFF" ↔ "خصم 17%"
    document.querySelectorAll('.plan-discount-badge').forEach(function (el) {
      var match = el.textContent.match(/(\d+)%/);
      if (!match) return;
      var pct = match[1];
      el.textContent = isAR ? 'خصم ' + pct + '%' : pct + '% OFF';
    });

    // Currency label
    document.querySelectorAll('.currency').forEach(function (el) {
      el.textContent = isAR ? 'جم' : 'LE';
    });

    // Old amount currency in plan cards
    document.querySelectorAll('.old-amount').forEach(function (el) {
      if (!el.dataset.oldAmountEn)
        el.dataset.oldAmountEn = el.textContent.trim();
      el.textContent = isAR
        ? el.dataset.oldAmountEn.replace(/\bLE\b/g, 'جم')
        : el.dataset.oldAmountEn;
    });

    // Hours — translate AM/PM
    document.querySelectorAll('.hours-time').forEach(function (el) {
      if (!el.dataset.hoursEn) el.dataset.hoursEn = el.textContent.trim();
      el.textContent = isAR
        ? el.dataset.hoursEn.replace(/AM/g, 'ص').replace(/PM/g, 'م')
        : el.dataset.hoursEn;
    });

    // lang button
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
