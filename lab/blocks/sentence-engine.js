// Sentence changer engine: the grammar lives here, separate from the screen, so every sentence it can show is tested.
(function (root) {
  const SUBJECTS = [
    { id: 'I', text: 'I', third: false, ja: '私' },
    { id: 'you', text: 'You', third: false, ja: 'あなた' },
    { id: 'he', text: 'He', third: true, ja: '彼' },
    { id: 'she', text: 'She', third: true, ja: '彼女' },
    { id: 'we', text: 'We', third: false, ja: '私たち' },
    { id: 'they', text: 'They', third: false, ja: '彼ら' },
  ];
  const VERBS = [
    { id: 'have', base: 'have', s: 'has', rest: 'a cat', emoji: '🐱', ja: '猫を飼っている' },
    { id: 'like', base: 'like', s: 'likes', rest: 'music', emoji: '🎵', ja: '音楽が好き' },
    { id: 'play', base: 'play', s: 'plays', rest: 'soccer', emoji: '⚽', ja: 'サッカーをする' },
    { id: 'go', base: 'go', s: 'goes', rest: 'to school', emoji: '🏫', ja: '学校に行く' },
    { id: 'watch', base: 'watch', s: 'watches', rest: 'TV', emoji: '📺', ja: 'テレビを見る' },
    { id: 'study', base: 'study', s: 'studies', rest: 'English', emoji: '📘', ja: '英語を勉強する' },
  ];
  const FORMS = ['positive', 'negative', 'question'];

  // Tokens: { text, role } where role is subject | helper | verb | rest | mark. The screen colours by role.
  function build(subjectId, verbId, form) {
    const s = SUBJECTS.find((x) => x.id === subjectId), v = VERBS.find((x) => x.id === verbId);
    if (!s || !v || !FORMS.includes(form)) throw new Error('unknown choice');
    const helper = s.third ? 'does' : 'do';
    if (form === 'positive') return [{ text: s.text, role: 'subject' }, { text: s.third ? v.s : v.base, role: 'verb' }, { text: v.rest, role: 'rest' }, { text: '.', role: 'mark' }];
    if (form === 'negative') return [{ text: s.text, role: 'subject' }, { text: `${helper}n't`, role: 'helper' }, { text: v.base, role: 'verb' }, { text: v.rest, role: 'rest' }, { text: '.', role: 'mark' }];
    const subj = s.id === 'I' ? 'I' : s.text.toLowerCase();
    return [{ text: helper[0].toUpperCase() + helper.slice(1), role: 'helper' }, { text: subj, role: 'subject' }, { text: v.base, role: 'verb' }, { text: v.rest, role: 'rest' }, { text: '?', role: 'mark' }];
  }
  const sentence = (tokens) => tokens.map((t) => t.text).join(' ').replace(/ ([.?])$/, '$1');

  // The one idea the widget teaches: with he/she, the -s goes to the verb; when do comes in, the -s moves to do (does) and the verb goes back to its base.
  function explain(subjectId, verbId, form, lang = 'en') {
    const s = SUBJECTS.find((x) => x.id === subjectId), v = VERBS.find((x) => x.id === verbId);
    if (lang === 'ja') {
      if (!s.third) return form === 'positive' ? `${s.text} のときは、動詞はそのまま（${v.base}）。` : `${s.text} のときは do を使い、動詞はそのまま（${v.base}）。`;
      return form === 'positive' ? `he / she のときは、動詞に -s がつく（${v.base} → ${v.s}）。` : `does が -s を持っていくので、動詞は元の形に戻る（${v.s} → ${v.base}）。`;
    }
    if (!s.third) return form === 'positive' ? `With ${s.text.toLowerCase() === 'i' ? 'I' : s.text.toLowerCase()}, the verb stays the same: ${v.base}.` : `With ${s.text.toLowerCase() === 'i' ? 'I' : s.text.toLowerCase()}, we use do, and the verb stays the same: ${v.base}.`;
    return form === 'positive' ? `With he and she, the verb gets -s: ${v.base} → ${v.s}.` : `Does takes the -s, so the verb goes back to its base: ${v.s} → ${v.base}.`;
  }
  root.SentenceEngine = { SUBJECTS, VERBS, FORMS, build, sentence, explain };
  if (typeof module !== 'undefined') module.exports = root.SentenceEngine;
})(typeof window !== 'undefined' ? window : globalThis);
