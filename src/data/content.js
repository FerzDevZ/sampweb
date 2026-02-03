import { Terminal, Cpu, Zap, Code, Book, MessageSquare, Box, Shield, Database, Activity, Layers, User } from 'lucide-react';

export const CATEGORIES = [
    {
        id: 'start',
        label: 'PERSIAPAN_MENTAL_ALAT',
        items: [
            { id: 'install', title: '01. PERALATAN_PERANG', subtitle: 'Setup & Tools', icon: 'Terminal', difficulty: 'Beginner' },
            { id: 'logic_analog', title: '02. ANALOGI_CODING', subtitle: 'Pola Pikir Komputer', icon: 'Zap', difficulty: 'Beginner' },
            { id: 'syntax_deep', title: '03. ANATOMI_SCRIPT', subtitle: 'Simbol & Aturan', icon: 'Cpu', difficulty: 'Beginner' },
            { id: 'clean_code', title: '04. SENI_KERAPIHAN', subtitle: 'Indentasi & Gaya', icon: 'Layers', difficulty: 'Beginner' },
        ]
    },
    {
        id: 'basics',
        label: 'FUNDAMENTAL_PAWN_DASAR',
        items: [
            { id: 'variables_ultra', title: '05. KOTAK_AJAIB', subtitle: 'Variabel & Wadah', icon: 'Database', difficulty: 'Beginner' },
            { id: 'constants', title: '06. KATA_KUNCI_TETAP', subtitle: 'Konstanta & Macro', icon: 'Shield', difficulty: 'Beginner' },
            { id: 'formatting', title: '07. SENI_BERBICARA', subtitle: 'Format & Teks', icon: 'MessageSquare', difficulty: 'Intermediate' },
            { id: 'playerid_concept', title: '08. NOMOR_ANTRIAN', subtitle: 'Konsep PlayerID', icon: 'User', difficulty: 'Beginner' },
        ]
    },
    {
        id: 'logic_data',
        label: 'STRUKTUR_LOGIKA_DATA',
        items: [
            { id: 'control_flow', title: '09. PENGAMBIL_KEPUTUSAN', subtitle: 'If, Else, Switches', icon: 'Zap', difficulty: 'Intermediate' },
            { id: 'enum_data', title: '10. RAK_DATA_MODULAR', subtitle: 'Enumerasi (Enum)', icon: 'Layers', difficulty: 'Intermediate' },
            { id: 'functions_easy', title: '11. MESIN_OTOMATIS', subtitle: 'Stock & Public', icon: 'Code', difficulty: 'Intermediate' },
        ]
    },
    {
        id: 'samp_systems',
        label: 'INTEGRASI_SERVER_SAMP',
        items: [
            { id: 'callbacks_master', title: '12. DETEKSI_KEJADIAN', subtitle: 'System Callbacks', icon: 'Activity', difficulty: 'Advanced' },
            { id: 'gui_step', title: '13. JENDELA_INTERAKSI', subtitle: 'Dialog & Textdraws', icon: 'Box', difficulty: 'Advanced' },
            { id: 'mysql_beginner', title: '14. CATATAN_ABADI', subtitle: 'Simpan Data (MySQL)', icon: 'Database', difficulty: 'Expert' },
        ]
    }
];

export const CONTENT = {
    'install': {
        title: 'PERALATAN_PERANG',
        meta: { level: 'Prakondisi', durasi: '15m', fokus: 'Tooling' },
        body: `
            <h3 class="title">MENYIAPKAN_MEDAN_TEMPUR</h3>
            <p>Coding itu seperti memasak. Jika pisau Anda tumpul, Anda akan susah memotong daging. Jika compiler Anda salah konfig, Anda akan kesusahan membuat script.</p>
            <div class="grid">
                <div class="card">
                    <h5>Pawno Compiler</h5>
                    <p>Wajib dijalankan dari folder <code>pawno/pawno.exe</code>. Aplikasi ini adalah penerjemah bahasa manusia ke bahasa mesin (AMX).</p>
                </div>
                <div class="card">
                    <h5>Include Kamus</h5>
                    <p>Pawn tidak tahu apa itu Kesehatan Pemain sebelum ia membaca kamus <code>a_samp.inc</code>. Selalu masukkan ini di baris pertama!</p>
                </div>
            </div>
            <h4 class="sub-title">KESALAHAN_PEMULA_01</h4>
            <p>Banyak pemula mencoba membuat script di desktop. JANGAN! Pawno harus tetap berada di satu folder dengan include-nya agar ia tidak buta.</p>
        `
    },
    'logic_analog': {
        title: 'ANALOGI_CODING',
        meta: { level: 'Psikologi', durasi: '10m', fokus: 'Mindset' },
        body: `
            <h3 class="title">BAGAIMANA_KOMPUTER_MEMBACA</h3>
            <p>Murid harus paham bahwa komputer membaca script kita seperti kita membaca koran: Dari Atas ke Bawah, Baris demi Baris.</p>
            <div class="alert warn">
              <strong>LOGIKA URUTAN:</strong><br/>
              Jika Anda menulis "Nyalakan Mesin" di baris 5, lalu "Masukkan Kunci" di baris 10, mesin tidak akan pernah menyala. Urutan adalah SEGALANYA.
            </div>
            <h4 class="sub-title">INPUT_PROSES_OUTPUT</h4>
            <p>Setiap program mengikuti pola ini: Seseorang memicu sesuatu (Input), komputer menghitung (Proses), dan hasilnya muncul (Output).</p>
        `
    },
    'syntax_deep': {
        title: 'ANATOMI_SCRIPT',
        meta: { level: 'Linguistik', durasi: '20m', fokus: 'Syntax' },
        body: `
            <h3 class="title">SIMBOL_DAN_MAKNA_TERSEMBUNYI</h3>
            <p>Belajar Pawn itu seperti belajar bahasa asing. Tanda baca bukan hiasan, melainkan instruksi keras.</p>
            <ul class="space-y-6 text-sm text-neutral-500">
                <li><strong class="text-orange-600">Kurung Kurawal { }</strong> : Menandakan Awal dan Akhir kode.</li>
                <li><strong class="text-orange-600">Titik Koma ;</strong> : Menandakan akhir satu instruksi.</li>
                <li><strong class="text-orange-600">Kurung Biasa ( )</strong> : Tempat menaruh informasi.</li>
            </ul>
        `
    },
    'clean_code': {
        title: 'SENI_KERAPIHAN',
        meta: { level: 'Etika', durasi: '15m', fokus: 'Indentation' },
        body: `
            <h3 class="title">PENTINGNYA_INDENTASI</h3>
            <p>Script yang berantakan adalah script yang sulit diperbaiki. Gunakan tombol TAB untuk merapikan kode.</p>
            <div class="code-header">CONTOH_RAPI</div>
            <pre><code>if(x == 5)
{
    SendClientMessage(playerid, -1, "Halo");
}</code></pre>
        `
    },
    'variables_ultra': {
        title: 'KOTAK_AJAIB',
        meta: { level: 'Fundamental', durasi: '25m', fokus: 'Storage' },
        body: `
            <h3 class="title">TEMPAT_PENYIMPANAN_DATA</h3>
            <p>Variabel adalah sebuah nama yang kita berikan pada sepotong memori. Bayangkan sebuah kotak dengan label.</p>
            <div class="grid">
                <div class="card">
                    <h5>Integer (Angka)</h5>
                    <code>new Uang = 100;</code>
                </div>
                <div class="card">
                    <h5>Float (Desimal)</h5>
                    <code>new Float:Posisi = 5.5;</code>
                </div>
            </div>
        `
    },
    'constants': {
        title: 'KATA_KUNCI_TETAP',
        meta: { level: 'Strategi', durasi: '10m', fokus: 'Macros' },
        body: `
            <h3 class="title">MEMUDAHKAN_PEMBACAAN_KODE</h3>
            <p>Gunakan julukan untuk angka-angka sulit seperti warna.</p>
            <pre><code>#define WARNA_MERAH 0xFF0000FF
SendClientMessage(playerid, WARNA_MERAH, "Hanya untuk Admin!");</code></pre>
        `
    },
    'formatting': {
        title: 'SENI_BERBICARA',
        meta: { level: 'Menengah', durasi: '30m', fokus: 'Strings' },
        body: `
            <h3 class="title">TEKS_DAN_VARIABEL</h3>
            <p>Gunakan fungsi format untuk menggabungkan teks dan data pemain.</p>
            <pre><code>new szBuffer[128];
format(szBuffer, sizeof(szBuffer), "Uangmu: $%d", Uang);
SendClientMessage(playerid, -1, szBuffer);</code></pre>
        `
    },
    'playerid_concept': {
        title: 'NOMOR_ANTRIAN',
        meta: { level: 'Konsep', durasi: '20m', fokus: 'Logic' },
        body: `
            <h3 class="title">KONSEP_PLAYER_ID</h3>
            <p>Setiap pemain memiliki nomor unik dari 0 sampai 999 sebagai identitas di server.</p>
        `
    },
    'control_flow': {
        title: 'PENGAMBIL_KEPUTUSAN',
        meta: { level: 'Logika', durasi: '40m', fokus: 'Branching' },
        body: `
            <h3 class="title">IF_DAN_ELSE_SWITCH</h3>
            <p>Memungkinkan server memilih tindakan berdasarkan kondisi tertentu.</p>
            <pre><code>if(IsPlayerAdmin(playerid)) { }</code></pre>
        `
    },
    'enum_data': {
        title: 'RAK_DATA_MODULAR',
        meta: { level: 'Struktur', durasi: '35m', fokus: 'Arrays' },
        body: `
            <h3 class="title">STRUKTUR_DATA_PEMAIN</h3>
            <p>Gunakan Enum untuk merapikan banyak data pemain dalam satu variabel tunggal.</p>
            <pre><code>enum pInfo { pMoney, pLevel }
new PlayerData[MAX_PLAYERS][pInfo];</code></pre>
        `
    },
    'functions_easy': {
        title: 'MESIN_OTOMATIS',
        meta: { level: 'Modular', durasi: '25m', fokus: 'Workflow' },
        body: `
            <h3 class="title">STOCK_DAN_PUBLIC</h3>
            <p>Memecah kode menjadi fungsi-fungsi kecil agar bisa digunakan berulang kali.</p>
        `
    },
    'callbacks_master': {
        title: 'DETEKSI_KEJADIAN',
        meta: { level: 'Integrasi', durasi: '30m', fokus: 'Events' },
        body: `
            <h3 class="title">CALLBACKS_DALAM_SAMP</h3>
            <p>Kejadian otomatis seperti pemain mati (OnPlayerDeath) atau chat (OnPlayerText).</p>
        `
    },
    'gui_step': {
        title: 'JENDELA_INTERAKSI',
        meta: { level: 'Visual', durasi: '20m', fokus: 'UI' },
        body: `
            <h3 class="title">DIALOG_DAN_TEXTDRAW</h3>
            <p>Antarmuka visual agar pemain bisa memilih menu secara langsung.</p>
        `
    },
    'mysql_beginner': {
        title: 'CATATAN_ABADI',
        meta: { level: 'Expert', durasi: '60m', fokus: 'Database' },
        body: `
            <h3 class="title">DATABASE_MYSQL</h3>
            <p>Cara menyimpan progres pemain secara permanen ke dalam tabel database.</p>
        `
    }
};
