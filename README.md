# Presentasi SDLC & Analisis Kebutuhan Sistem

Slideshow 16:9 (8 slide) bertema navy, abu-abu terang, dan teal. Dibuat dengan TanStack Start + React 19 + Tailwind CSS v4.

## Menjalankan di komputer

Syarat: Node.js 20.19+ (atau 22.12+). Bun juga bisa.

```sh
npm install
npm run dev
```

Buka alamat yang muncul di terminal (biasanya http://localhost:8080).

Kalau memakai Bun:

```sh
bun install
bun run dev
```

## Cara memakai slide

| Aksi | Cara |
| --- | --- |
| Slide berikutnya | tombol panah kanan, spasi, atau klik layar |
| Slide sebelumnya | tombol panah kiri |
| Geser | usap (swipe) ke kiri/kanan di ponsel atau tablet |
| Lompat ke slide tertentu | klik titik di bagian bawah |
| Layar penuh | tombol "Layar Penuh" atau tekan F |

Semua slide menyesuaikan diri dengan ukuran layar.

## Perintah lain

```sh
npm run build     # membuat versi siap unggah
npm run preview   # menjalankan hasil build
npm run test      # menjalankan pengujian
npm run lint      # memeriksa kode
```

## Isi folder

- `src/routes/index.tsx` — seluruh isi dan tampilan slide
- `src/routes/__root.tsx` — kerangka halaman dan metadata
- `src/styles.css` — warna, huruf, dan efek animasi
- `src/components/ui/` — komponen antarmuka bawaan
- `src/test/` — pengujian
