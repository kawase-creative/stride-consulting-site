import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Check,
  Network,
  ShieldCheck,
  Users,
} from 'lucide-react';

const metrics = [
  { label: '継続支援率', value: '96.4', suffix: '%', note: '長期的な変革を共に推進' },
  { label: '顧客推奨度', value: '9.2', suffix: '/10', note: 'プロジェクト終了後に集計' },
  { label: '支援プロジェクト', value: '280', suffix: '+', note: '戦略・DX・組織変革' },
];

const challenges = [
  '戦略はあるが、現場の実行に落ちない',
  'AI活用が検証段階から先へ進まない',
  '部門をまたぐプロジェクトが停滞する',
  '外部依存が続き、知見が社内に残らない',
];

const services = [
  { no: '01', title: '変革戦略', en: 'TRANSFORMATION STRATEGY', text: '経営課題を構造化し、実行可能なロードマップと意思決定の仕組みを設計します。', icon: ChartNoAxesCombined },
  { no: '02', title: 'AI・データ活用', en: 'AI & DATA', text: 'ユースケース探索から業務実装、ガバナンス整備まで、価値創出を一気通貫で支援します。', icon: BrainCircuit },
  { no: '03', title: 'PMO・実行推進', en: 'PROGRAM DELIVERY', text: '複雑な利害関係を整理し、現場に入り込んでプロジェクトの前進をつくります。', icon: Network },
  { no: '04', title: '組織・内製化', en: 'ORGANIZATION', text: '仕組みと人材を同時に育て、支援終了後も改善が続く組織へ移行します。', icon: Users },
];

const cases = [
  { tag: 'MANUFACTURING', title: '全社DXを、構想から現場定着まで推進', result: '18か月で主要12業務を刷新', body: '部門ごとに分断されていた変革テーマを再編。経営会議と現場チームをつなぐ推進基盤を構築しました。' },
  { tag: 'FINANCIAL', title: '生成AIの実務活用基盤を短期構築', result: '業務時間を年間32,000時間削減', body: 'リスク管理と利用促進を両立するガイドライン、検証環境、ユースケース開発を一体で支援しました。' },
  { tag: 'RETAIL', title: '赤字プロジェクトの再建と内製化', result: '6か月で計画を正常化', body: '課題の可視化から意思決定ルールの再設計、チーム育成まで伴走し、自走できる運営へ移行しました。' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Stride Consulting トップへ">
          <span className="brand-mark">S</span>
          <span>STRIDE<small>CONSULTING</small></span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#approach">私たちのアプローチ</a>
          <a href="#services">支援領域</a>
          <a href="#results">実績</a>
        </nav>
        <a className="header-cta" href="#contact">相談してみる <ArrowUpRight /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow light">STRATEGY TO REALITY</p>
          <h1>構想を、<br />現場の前進に。</h1>
          <p className="hero-lead">戦略を描くだけで終わらせない。<br />チームの一員として、変革が根づくまで伴走します。</p>
          <div className="hero-actions">
            <a className="button primary" href="#contact"><span>無料相談を申し込む</span><ArrowUpRight /></a>
            <a className="button secondary" href="#approach"><span>私たちについて</span><ArrowDown /></a>
          </div>
        </div>
        <p className="vertical-note">BUSINESS TRANSFORMATION PARTNER</p>
      </section>

      <section className="metrics" aria-label="実績数値">
        <div className="section-kicker"><span>01</span><p>FACTS &amp; FIGURES</p></div>
        <div className="metrics-grid">
          {metrics.map((item) => (
            <article className="metric-card" key={item.label}>
              <p>{item.label}</p>
              <strong>{item.value}<small>{item.suffix}</small></strong>
              <span>{item.note}</span>
            </article>
          ))}
        </div>
        <p className="sample-note">※ 掲載数値はデザイン確認用のサンプルです。</p>
      </section>

      <section className="challenge-band">
        <div className="oversized-word" aria-hidden="true">CHALLENGES</div>
        <div className="challenge-inner">
          <p className="eyebrow light">よくある経営課題</p>
          <h2>変えたい意思はある。<br />けれど、前に進まない。</h2>
          <div className="challenge-grid">
            {challenges.map((challenge, i) => (
              <article key={challenge}>
                <span>0{i + 1}</span>
                <p>{challenge}</p>
                <ArrowRight />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-intro">
          <div className="section-kicker"><span>02</span><p>OUR APPROACH</p></div>
          <h2>外から助言するのではなく、<br />内側で変化をつくる。</h2>
          <p>私たちは、提言書を納品して終わるコンサルティングをしません。目的を共有し、現場に入り、意思決定と実行の両方を前へ動かします。</p>
        </div>
        <div className="approach-visual">
          <div className="approach-photo" role="img" aria-label="チームで議論するビジネスパーソン" />
          <div className="approach-panel">
            <p>ONE TEAM</p>
            <h3>同じ側に立つ。</h3>
            <ul>
              <li><Check /> 成果を起点に優先順位を判断</li>
              <li><Check /> 経営と現場の対話を設計</li>
              <li><Check /> ノウハウを仕組みとして移管</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-head">
          <div className="section-kicker"><span>03</span><p>CAPABILITIES</p></div>
          <h2>支援領域</h2>
          <p>領域を分断せず、必要な専門性をひとつのチームに。</p>
        </div>
        <div className="service-list">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-row" key={service.no}>
                <span className="service-no">{service.no}</span>
                <Icon className="service-icon" />
                <div><p>{service.en}</p><h3>{service.title}</h3></div>
                <p className="service-description">{service.text}</p>
                <ArrowUpRight className="service-arrow" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="results" id="results">
        <div className="results-head">
          <div className="section-kicker light-kicker"><span>04</span><p>SELECTED WORK</p></div>
          <h2>変化が数字に表れるまで。</h2>
          <p>戦略の美しさではなく、事業と現場に起きた変化を成果と考えます。</p>
        </div>
        <div className="case-grid">
          {cases.map((item, i) => (
            <article className="case-card" key={item.tag}>
              <div className="case-top"><span>CASE 0{i + 1}</span><span>{item.tag}</span></div>
              <h3>{item.title}</h3>
              <strong>{item.result}</strong>
              <p>{item.body}</p>
              <a href="#contact">この領域について相談する <ArrowUpRight /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="promise">
        <div className="promise-copy">
          <ShieldCheck />
          <p className="eyebrow">OUR PROMISE</p>
          <h2>知見を残し、<br />支援を終える。</h2>
        </div>
        <p>私たちのゴールは、支援がなくても改善が続く状態です。プロジェクトの過程をブラックボックスにせず、判断の基準、運営の型、学びを組織の資産として残します。</p>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy">
          <div className="section-kicker light-kicker"><span>05</span><p>START A CONVERSATION</p></div>
          <h2>まだ輪郭のない課題から、<br />お聞かせください。</h2>
          <p>ご相談内容が固まっていなくても構いません。現在地を整理し、次の一歩を一緒に考えます。</p>
          <div className="contact-points"><span><Check /> 初回相談無料</span><span><Check /> 2営業日以内に返信</span></div>
        </div>
        <form className="contact-form">
          <label>お名前<span>必須</span><input name="name" placeholder="例）山田 太郎" /></label>
          <label>会社名<span>必須</span><input name="company" placeholder="例）株式会社ストライド" /></label>
          <label>メールアドレス<span>必須</span><input name="email" type="email" placeholder="example@company.jp" /></label>
          <label>ご相談内容<span>任意</span><textarea name="message" rows={4} placeholder="課題感やご希望をお聞かせください" /></label>
          <button type="button">無料相談を申し込む <ArrowUpRight /></button>
          <small>このフォームはデザイン確認用のため、送信機能はまだ接続されていません。</small>
        </form>
      </section>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark">S</span><span>STRIDE<small>CONSULTING</small></span></div>
        <p>Strategy to reality. Together.</p>
        <div><a href="#top">TOP</a><a href="#services">SERVICES</a><a href="#contact">CONTACT</a></div>
        <small>© 2026 STRIDE CONSULTING. DEMO SITE.</small>
      </footer>
    </main>
  );
}
