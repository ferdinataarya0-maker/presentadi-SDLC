import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SDLC & Analisis Kebutuhan Sistem — Presentasi" },
      { name: "description", content: "Presentasi Rekayasa Perangkat Lunak: SDLC dan Analisis Kebutuhan Sistem, Institut Bakti Nusantara 2026." },
      { property: "og:title", content: "SDLC & Analisis Kebutuhan Sistem" },
      { property: "og:description", content: "Presentasi interaktif Rekayasa Perangkat Lunak — Institut Bakti Nusantara 2026." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Deck,
});

type S = { kicker: string; title: string; text: string; dark?: boolean };
const content: S[] = [
  { kicker: "Konsep Dasar SDLC", title: "Pengertian & Tujuan SDLC", text: "SDLC merupakan kerangka kerja sistematis untuk merancang, membangun, menguji, dan memelihara sistem informasi. Penerapan SDLC bertujuan menghasilkan perangkat lunak berkualitas tinggi yang sesuai anggaran dan tepat waktu, sekaligus mencegah terjadinya software crisis atau kegagalan proyek." },
  { kicker: "6 Tahapan Utama SDLC", title: "Tahapan Pengembangan Sistem", text: "Proses SDLC diawali dengan Perencanaan dan Analisis kebutuhan, dilanjutkan ke tahap Perancangan arsitektur serta UI/UX. Setelah itu, sistem masuk ke tahap Implementasi pengodean, Pengujian fungsionalitas, dan diakhiri dengan Pemeliharaan sistem secara berkala.", dark: true },
  { kicker: "Model SDLC", title: "Model Waterfall & Iteratif", text: "Model Waterfall bekerja secara sekuensial dari atas ke bawah, menawarkan struktur yang rapi namun kurang fleksibel terhadap perubahan. Sementara itu, Model Iteratif membangun sistem secara bertahap per modul, sehingga evaluasi dapat dilakukan pada setiap versi baru yang dihasilkan." },
  { kicker: "Model SDLC", title: "Model Spiral & Metodologi Agile", text: "Model Spiral menggabungkan proses iteratif dengan analisis risiko mendalam di setiap siklusnya, sangat cocok untuk proyek skala besar. Di sisi lain, Metodologi Agile berfokus pada fleksibilitas dan kecepatan pengiriman produk melalui siklus pendek yang disebut Sprint.", dark: true },
  { kicker: "Identifikasi & Analisis Kebutuhan", title: "Kebutuhan Fungsional & Non-Fungsional", text: "Kebutuhan Fungsional mencakup fungsi dan proses utama yang harus dijalankan oleh sistem, seperti pengolahan data dan laporan. Sedangkan Kebutuhan Non-Fungsional berkaitan dengan properti pendukung seperti tingkat keamanan, kecepatan respon, dan spesifikasi perangkat." },
  { kicker: "Teknik Elisitasi", title: "Teknik Pengumpulan Kebutuhan", text: "Identifikasi kebutuhan pengguna dapat dilakukan melalui penyebaran Kuesioner kepada banyak responden, Wawancara langsung dengan stakeholder, Observasi alur kerja di lapangan, serta Analisis Dokumen fisik dan formulir yang sedang berjalan.", dark: true },
];
const TOTAL = content.length + 2;

function TitleSlide() {
  return (
    <div className="slide-content slide-dark flex flex-col justify-center px-[180px]">
      <div className="anim-in slide-kicker mb-10">Mata Kuliah: Rekayasa Perangkat Lunak</div>
      <h1 className="anim-in slide-title-lg max-w-[1500px]" style={{ animationDelay: ".15s" }}>
        Software Development Life Cycle (SDLC) & Analisis Kebutuhan Sistem
      </h1>
      <div className="anim-in mt-20 flex gap-8" style={{ animationDelay: ".35s" }}>
        <div className="slide-accent-bar" />
        <div>
          <p className="slide-body-lg">M. Arya Ferdinata, M. Ahwan, Linda Wahyu Ningsih</p>
          <p className="slide-body slide-soft mt-2">Institut Bakti Nusantara (2026)</p>
        </div>
      </div>
    </div>
  );
}

function ContentSlide({ s, n }: { s: S; n: number }) {
  return (
    <div className={`slide-content ${s.dark ? "slide-dark" : "slide-light"} flex items-center px-[180px]`}>
      <div className="slide-num absolute right-[140px] top-[80px] anim-in">{String(n).padStart(2, "0")}</div>
      <div className="flex gap-14 max-w-[1300px]">
        <div className="slide-accent-bar anim-in" />
        <div>
          <div className="anim-in slide-kicker mb-8">{s.kicker}</div>
          <h2 className="anim-in slide-title mb-14" style={{ animationDelay: ".12s" }}>{s.title}</h2>
          <p className={`anim-in slide-body-lg ${s.dark ? "slide-soft" : "slide-muted"}`} style={{ animationDelay: ".28s" }}>{s.text}</p>
        </div>
      </div>
      <div className={`slide-chrome absolute bottom-[60px] left-[180px] ${s.dark ? "slide-soft" : "slide-muted"}`}>SDLC & Analisis Kebutuhan Sistem</div>
    </div>
  );
}

function EndSlide() {
  return (
    <div className="slide-content slide-dark flex flex-col justify-center px-[180px]">
      <div className="anim-in slide-kicker mb-8">Penutup</div>
      <h2 className="anim-in slide-title-lg mb-14" style={{ animationDelay: ".12s" }}>Kesimpulan</h2>
      <p className="anim-in slide-body-lg slide-soft max-w-[1300px]" style={{ animationDelay: ".28s" }}>
        SDLC memastikan proses pengembangan perangkat lunak berjalan terarah dan terukur. Pemilihan model SDLC harus disesuaikan dengan skala proyek dan tingkat risiko, sementara kombinasi teknik analisis kebutuhan akan menghasilkan sistem yang tepat guna bagi pengguna.
      </p>
    </div>
  );
}

// Posisi logo per slide (titik tengah di kanvas 1920x1080, s = skala dari ukuran dasar 300px)
const LOGO_POS = [
  { x: 960, y: 110, s: 0.37 },  // 1  judul: di atas, kecil
  { x: 1710, y: 540, s: 0.9 },  // 2  pindah ke kanan, membesar
  { x: 1700, y: 870, s: 0.55 }, // 3  kanan bawah
  { x: 1720, y: 430, s: 0.7 },  // 4  kanan atas-tengah
  { x: 1680, y: 800, s: 0.8 },  // 5  kanan bawah, besar
  { x: 240, y: 120, s: 0.4 },   // 6  lompat ke kiri atas
  { x: 1700, y: 560, s: 0.6 },  // 7  kembali ke kanan
  { x: 1665, y: 540, s: 1.05 }, // 8  penutup: besar di kanan
];
// Putaran kumulatif: ke kanan = searah jarum jam, ke kiri = berlawanan
const LOGO_ROT = LOGO_POS.reduce<number[]>((acc, p, k) => {
  if (k === 0) return [0];
  const dx = p.x - LOGO_POS[k - 1]!.x;
  acc.push(acc[k - 1]! + (dx >= 0 ? 360 : -360));
  return acc;
}, []);

function CampusLogo({ i }: { i: number }) {
  const [broken, setBroken] = useState(false);
  const k = Math.min(i, LOGO_POS.length - 1);
  const p = LOGO_POS[k]!;
  return (
    <div
      className="campus-logo-wrap"
      style={{ transform: `translate(${p.x - 150}px, ${p.y - 150}px) scale(${p.s})` }}
    >
      <div key={i} className="campus-logo-pulse" />
      <div className="campus-logo" style={{ transform: `rotate(${LOGO_ROT[k]}deg)` }}>
        {broken ? (
          <span className="campus-logo-fallback">IBN</span>
        ) : (
          <img src="/logo-kampus.png" alt="Logo Institut Bakti Nusantara" onError={() => setBroken(true)} />
        )}
      </div>
    </div>
  );
}

function Deck() {
  const [i, setI] = useState(0);
  const [scale, setScale] = useState(0.5);
  const touch = useRef<number | null>(null);
  const go = useCallback((d: number) => setI((v) => Math.max(0, Math.min(TOTAL - 1, v + d))), []);

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / 1920, window.innerHeight / 1080));
    fit();
    window.addEventListener("resize", fit);
    const key = (e: KeyboardEvent) => {
      if (["ArrowRight", " ", "PageDown", "Enter"].includes(e.key)) { e.preventDefault(); go(1); }
      if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) go(-1);
      if (e.key === "Home") setI(0);
      if (e.key === "End") setI(TOTAL - 1);
      if (e.key.toLowerCase() === "f") toggleFs();
    };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("resize", fit); window.removeEventListener("keydown", key); };
  }, [go]);

  useEffect(() => { document.title = `${i + 1}/${TOTAL} — SDLC`; }, [i]);

  const toggleFs = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  };

  const slide = i === 0 ? <TitleSlide /> : i === TOTAL - 1 ? <EndSlide /> : <ContentSlide s={content[i - 1]!} n={i + 1} />;

  return (
    <div
      className="deck-stage"
      onClick={(e) => { if ((e.target as HTMLElement).closest("button")) return; go(e.clientX > window.innerWidth / 3 ? 1 : -1); }}
      onTouchStart={(e) => (touch.current = e.touches[0]!.clientX)}
      onTouchEnd={(e) => {
        if (touch.current == null) return;
        const dx = e.changedTouches[0]!.clientX - touch.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touch.current = null;
      }}
    >
      <div className="slide-wrapper" style={{ ["--scale" as string]: scale }}>
        <div key={i}>{slide}</div>
        <CampusLogo i={i} />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {Array.from({ length: TOTAL }).map((_, k) => (
          <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`deck-dot ${k === i ? "deck-dot-active w-8" : "w-3"}`} />
        ))}
      </div>
      <div className="absolute bottom-3 right-4 flex gap-2">
        <button className="deck-btn" onClick={() => go(-1)} aria-label="Sebelumnya">←</button>
        <button className="deck-btn" onClick={() => go(1)} aria-label="Berikutnya">→</button>
        <button className="deck-btn" onClick={toggleFs}>Layar Penuh</button>
      </div>
    </div>
  );
}
