var books = [
  { title: '真夏の方程式', author: '東野圭吾', genre: '文学' },
  {
    title: '金持ち父さん貧乏父さん',
    author: 'ロバート・キヨサキ',
    genre: '教育',
  },
  { title: '燃えよ剣', author: '司馬遼太郎', genre: '歴史' },
];

console.log(books);

const genres = [
  '文学',
  'ノンフィクション',
  'ビジネス',
  '歴史',
  '政治',
  '芸能',
  'アート',
  '人文',
  '暮らし',
  'サイエンス',
  '趣味',
  '教育',
  'スポーツ',
  '音楽',
  '旅行',
  '絵本',
  'コミックス',
];

const addBooks = (newBooks) => {
  const res = newBooks.forEach((book) => {
    if (!genres.includes(book.genre)) {
      return;
    }
    books.push(book);
  });
  return res;
};

const removeBook = (index) => {
  const res = books.splice(index, 1);
  return res;
};

addBooks([
  { title: '斜めの夕暮れ', author: '若林正恭', genre: 'エッセイ' },
  {
    title: 'れもん、うむもん！――そして、ママになる――',
    author: 'はるな檸檬',
    genre: '暮らし',
  },
  { title: 'ヴェネツィア物語', author: '塩野七生', genre: '旅行' },
]);

console.log(books);

removeBook(1);
console.log(books);
