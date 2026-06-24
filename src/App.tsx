import './App.css';

type GalleryItem = {
  id: number;
  title: string;
  tag: string;
  description: string;
  image: string;
  accent: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: '星河旅人',
    tag: '幻想冒险',
    description: '在漂浮城市与星屑列车之间，追寻遗失的愿望。',
    image: '/photos/1.jpg',
    accent: '#8b5cf6',
  },
  {
    id: 2,
    title: '樱雨午后',
    tag: '校园日常',
    description: '柔和的粉色光影，记录青春里最闪亮的一秒。',
    image: '/photos/7.jpg',
    accent: '#fb7185',
  },
  {
    id: 3,
    title: '霓虹剑姬',
    tag: '赛博朋克',
    description: '雨夜霓虹下的高速对决，刀光映出未来都市。',
    image: '/photos/12.jpg',
    accent: '#22d3ee',
  },
  {
    id: 4,
    title: '森林守望',
    tag: '治愈奇幻',
    description: '绿意与精灵低语交织，打开一扇通往秘境的门。',
    image: '/photos/18.jpg',
    accent: '#34d399',
  },
  {
    id: 5,
    title: '月下契约',
    tag: '暗夜物语',
    description: '银月照亮古老钟楼，命运契约在此刻苏醒。',
    image: '/photos/23.jpg',
    accent: '#a78bfa',
  },
  {
    id: 6,
    title: '夏日海风',
    tag: '清新短篇',
    description: '海浪、汽水与蓝天，是属于夏天的限定回忆。',
    image: '/photos/30.jpg',
    accent: '#38bdf8',
  },
];

const stats = [
  { value: '32+', label: '精选作品' },
  { value: '6', label: '主题分区' },
  { value: '4K', label: '沉浸视觉' },
];

function App() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">Anime Gallery · 动漫画廊</p>
          <h1>收藏光影、角色与故事的二次元展厅</h1>
          <p className="hero__description">
            一个以动漫插画为核心的沉浸式网站模板，适合展示角色设定、同人作品、壁纸合集与主题企划。
          </p>
          <div className="hero__actions">
            <a href="#gallery" className="button button--primary">开始浏览</a>
            <a href="#featured" className="button button--ghost">查看推荐</a>
          </div>
        </div>
        <div className="hero__poster" id="featured" aria-label="推荐动漫作品">
          <img src="/photos/top.jpg" alt="动漫画廊推荐封面" />
          <div className="poster-card">
            <span>Featured</span>
            <strong>梦境收藏室</strong>
          </div>
        </div>
      </section>

      <section className="stats" aria-label="画廊数据">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section-heading" id="gallery">
        <p className="eyebrow">Curated Collection</p>
        <h2>人气主题展区</h2>
        <p>用卡片式布局呈现不同动漫风格，让访客快速进入喜欢的世界观。</p>
      </section>

      <section className="gallery-grid">
        {galleryItems.map((item) => (
          <article className="gallery-card" key={item.id} style={{ '--accent': item.accent } as React.CSSProperties}>
            <div className="gallery-card__image">
              <img src={item.image} alt={`${item.title} 展示图`} />
              <span>{item.tag}</span>
            </div>
            <div className="gallery-card__body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
