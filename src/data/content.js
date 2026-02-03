import { Terminal, Cpu, Zap, Code, Book, MessageSquare, Box, Shield, Database, Activity, Layers, User } from 'lucide-react';

export const CATEGORIES = [
    {
        id: 'setup',
        label: 'PERSIAPAN_SISTEM',
        items: [
            { id: 'install', title: 'INSTALASI_CORE', subtitle: 'Compiler & Tooling', icon: 'Terminal', difficulty: 'Beginner' },
            { id: 'structure', title: 'ARSITEKTUR_FOLDER', subtitle: 'Workspace & Config', icon: 'Layers', difficulty: 'Beginner' },
        ]
    },
    {
        id: 'language',
        label: 'FUNDAMENTAL_PAWN',
        items: [
            { id: 'syntax', title: 'SINTAKS_DASAR', subtitle: 'Cell-Based Logic', icon: 'Cpu', difficulty: 'Intermediate' },
            { id: 'variables', title: 'MANAJEMEN_MEMORI', subtitle: 'Variabel & Scope', icon: 'Database', difficulty: 'Intermediate' },
            { id: 'logic', title: 'ALUR_LOGIKA', subtitle: 'Percabangan & Loop', icon: 'Zap', difficulty: 'Intermediate' },
        ]
    },
    {
        id: 'advanced',
        label: 'PENGEMBANGAN_LANJUT',
        items: [
            { id: 'functions', title: 'PROSEDUR_SISTEM', subtitle: 'Public & Stock', icon: 'Code', difficulty: 'Advanced' },
            { id: 'callbacks', title: 'EVENT_PIPELINE', subtitle: 'Hooking Callbacks', icon: 'Activity', difficulty: 'Advanced' },
            { id: 'mysql', title: 'DATABASE_ENGINE', subtitle: 'MySQL R41-4', icon: 'Database', difficulty: 'Expert' },
            { id: 'security', title: 'KEAMANAN_DATA', subtitle: 'Anti-Cheat Logic', icon: 'Shield', difficulty: 'Expert' },
        ]
    },
    {
        id: 'api_ref',
        label: 'MODUL_API_SAMP',
        items: [
            { id: 'player_api', title: 'KONTROL_PEMAIN', subtitle: 'State & Position', icon: 'User', difficulty: 'Beginner' },
            { id: 'gui', title: 'ANTARMUKA_GRAFIS', subtitle: 'Dialog & Textdraw', icon: 'MessageSquare', difficulty: 'Advanced' },
            { id: 'world', title: 'ENTITAS_DUNIA', subtitle: 'Object & Vehicle', icon: 'Box', difficulty: 'Intermediate' },
        ]
    }
];

export const CONTENT = {
    'install': {
        title: 'INSTALASI_CORE',
        meta: { sektor: 'Setup', status: 'Optimal', version: '0.3.7-R5' },
        body: `
            <h3 class="title">KONFIGURASI_DEVELOPER_WORKSPACE</h3>
            <p>Untuk memulai pengembangan SA-MP yang profesional, Anda tidak bisa hanya mengandalkan notepad biasa. Anda membutuhkan ekosistem yang mendukung kompilasi file <code>.pwn</code> menjadi <code>.amx</code> secara efisien.</p>
            
            <div class="grid">
                <div class="card">
                    <h5>Pawno Compiler</h5>
                    <p>Editor legendaris yang disertakan dalam paket server. Pastikan Anda menjalankan <code>pawno.exe</code> sebagai Administrator untuk menghindari error 'Unable to execute compiler'.</p>
                </div>
                <div class="card">
                    <h5>VS Code Integration</h5>
                    <p>Sangat disarankan bagi murid tingkat lanjut. Gunakan ekstensi <strong>Pawn Community</strong> untuk fitur <em>IntelliSense</em>, <em>Hover Docs</em>, dan <em>Smart Indentation</em>.</p>
                </div>
            </div>
            
            <h4 class="sub-title">COMPILER_DIRECTIVES</h4>
            <p>Parameter compiler menentukan bagaimana script Anda diproses. Flag <code>-d3</code> wajib digunakan saat development untuk mendeteksi lokasi crash via <em>crashdetect</em>.</p>
        `
    },
    'structure': {
        title: 'ARSITEKTUR_FOLDER',
        meta: { sektor: 'Infrastructure', status: 'Required', type: 'Static' },
        body: `
            <h3 class="title">FOLDER_HIERARCHY_EXPLAINED</h3>
            <p>Struktur folder SA-MP Server bersifat statis. Memahami fungsi setiap sub-folder akan mempermudah manajemen resource server Anda.</p>
            
            <div class="grid">
                <div class="card">
                    <h5>/gamemodes</h5>
                    <p>Tempat script utama berada. File <code>.pwn</code> adalah source-code, sedangkan <code>.amx</code> adalah file biner yang dibaca oleh server.</p>
                </div>
                <div class="card">
                    <h5>/filterscripts</h5>
                    <p>Script modular yang berjalan berdampingan dengan gamemode. Cocok untuk fitur mandiri seperti sistem admin atau objek statis.</p>
                </div>
            </div>
            
            <h4 class="sub-title">INCLUDE_DIRECTORY</h4>
            <p>Folder <code>pawno/include</code> berisi library (*.inc) yang mendefinisikan fungsi-fungsi native. Pastikan file <code>a_samp.inc</code> selalu up-to-date untuk mendukung fungsionalitas terbaru.</p>
        `
    },
    'syntax': {
        title: 'SINTAKS_DASAR',
        meta: { sektor: 'Core', status: 'Stable', type: 'Cell-Based' },
        body: `
            <h3 class="title">PAWN_CELL_DATA_SYSTEM</h3>
            <p>Pawn adalah bahasa <strong>Weakly Typed</strong> yang berbasis "Cell" (32-bit). Berbeda dengan C++ atau Java, setiap data di Pawn secara fisik adalah cell berukuran 4 bytes.</p>
            
            <div class="code-header">BASIC_SYNTAX_SPEC</div>
            <pre><code>// Sintaks komentar satu baris
/* Komentar multi baris */

#if defined MAX_PLAYERS
    #undef MAX_PLAYERS
#endif
#define MAX_PLAYERS 500 // Pre-processor directive</code></pre>

            <h4 class="sub-title">SENSITIVITAS_KARAKTER</h4>
            <p>Ingat: Pawn bersifat <strong>Case Sensitive</strong>. Fungsi <code>SendClientMessage</code> berbeda dengan <code>sendclientmessage</code>. Kesalahan penulisan satu huruf akan menyebabkan <em>Error 017: Undefined Symbol</em>.</p>
        `
    },
    'variables': {
        title: 'MANAJEMEN_MEMORI',
        meta: { sektor: 'Memory', status: 'Critical', type: 'Alloc' },
        body: `
            <h3 class="title">VARIABLE_SCOPING_ALLOCATION</h3>
            <p>Manajemen variabel di Pawn sangat krusial untuk mencegah kebocoran memori (memory leak) dan penggunaan stack yang berlebihan.</p>
            
            <pre><code>new iPoint; // Global Variable (jika di luar function)
static sValue; // Variabel yang nilainya tetap tersimpan namun scope terbatas
new szString[128]; // Array allocation</code></pre>

            <h4 class="sub-title">STRING_HANDLING</h4>
            <p>Pawn tidak memiliki tipe data <em>string</em> asli. String adalah array dari cell. Pastikan selalu memberikan terminator <code>\\0</code> pada akhir teks.</p>
            <div class="alert warn">
                <strong>PENTING:</strong> Alokasi string yang terlalu besar di dalam function (Stack) dapat menyebabkan <em>Stack Overflow</em>. Gunakan <code>static</code> untuk buffer besar.
            </div>
        `
    },
    'logic': {
        title: 'ALUR_LOGIKA',
        meta: { sektor: 'Logic', status: 'Active', type: 'Flow' },
        body: `
            <h3 class="title">CONDITIONAL_PROCESS_FLOW</h3>
            <p>Alur logika menentukan kecerdasan server Anda dalam memproses perintah dan event.</p>
            
            <div class="code-header">LOGIC_OPERATORS</div>
            <pre><code>if(PlayerLevel[playerid] >= 10 && !IsPlayerInAnyVehicle(playerid)) {
    // Logika jika pemain level 10+ dan tidak di kendaraan
} else if (IsPlayerAdmin(playerid)) {
    // Logika alternatif untuk admin
}</code></pre>

            <h4 class="sub-title">LOOPS_OPTIMIZATION</h4>
            <p>Hindari perulangan <code>MAX_PLAYERS</code> tanpa pengecekan koneksi. Gunakan library <em>foreach</em> (YSI) untuk performa yang jauh lebih ringan.</p>
            <pre><code>for(new i = 0; i < MAX_PLAYERS; i++) {
    if(IsPlayerConnected(i)) {
        // Hanya proses pemain yang online
    }
}</code></pre>
        `
    },
    'functions': {
        title: 'PROSEDUR_SISTEM',
        meta: { sektor: 'Modular', status: 'Ready', type: 'Function' },
        body: `
            <h3 class="title">DEFINISI_DAN_EKSEKUSI_FUNGSI</h3>
            <p>Fungsi modular memungkinkan Anda menulis kode sekali dan menggunakannya berkali-kali.</p>
            
            <div class="grid">
                <div class="card">
                    <h5>Stock Functions</h5>
                    <p>Fungsi pembantu yang hanya akan dicompile jika dipanggil. Sangat efisien untuk library internal.</p>
                </div>
                <div class="card">
                    <h5>Public Functions</h5>
                    <p>Wajib didefinisikan dengan <code>forward</code>. Digunakan untuk Timer dan Callbacks agar bisa diakses oleh server core.</p>
                </div>
            </div>
            
            <pre><code>forward OnPlayerLoginComplete(playerid);
public OnPlayerLoginComplete(playerid) {
    // Logika setelah login sukses
    return 1;
}

stock GiveExperience(playerid, amount) {
    PlayerLevel[playerid] += amount;
}</code></pre>
        `
    },
    'callbacks': {
        title: 'EVENT_PIPELINE',
        meta: { sektor: 'Event', status: 'Hooking', type: 'Callback' },
        body: `
            <h3 class="title">HOOKING_SYSTEM_EVENTS</h3>
            <p>Callback adalah fungsi yang otomatis dipanggil oleh server saat suatu kejadian terjadi.</p>
            
            <div class="code-header">ESSENTIAL_CALLBACKS</div>
            <pre><code>public OnGameModeInit() {
    // Dipanggil saat gamemode pertama kali dijalankan
    return 1;
}

public OnPlayerConnect(playerid) {
    // Dipanggil setiap kali pemain masuk ke server
    printf("Player ID %d has joined.", playerid);
    return 1;
}</code></pre>

            <h4 class="sub-title">RETURN_VALUES_MATTER</h4>
            <p>Nilai return (1 atau 0) pada callback sangat krusial. Pada <code>OnPlayerCommandText</code>, return 0 berarti perintah tersebut 'tidak ditemukan' dan akan diteruskan ke script lain.</p>
        `
    },
    'mysql': {
        title: 'DATABASE_ENGINE',
        meta: { sektor: 'Database', status: 'Secure', version: 'R41-4' },
        body: `
            <h3 class="title">PENGELOLAAN_DATA_RELASIONAL</h3>
            <p>Gunakan MySQL R41-4 untuk sistem penyimpanan data yang modern, cepat, dan aman.</p>
            
            <pre><code>// Inisialisasi Koneksi
new MySQL:dbHandle = mysql_connect("localhost", "root", "", "samp_db");

// Query Asinkron (Tidak menyebabkan server lag)
mysql_tquery(dbHandle, "SELECT * FROM users", "OnUsersLoad");</code></pre>

            <h4 class="sub-title">SECURITY_INJECTION_PREVENTION</h4>
            <p>Gunakan <code>mysql_format</code> dengan penentu <code>%e</code> untuk melakukan escaping otomatis pada input user guna mencegah SQL Injection.</p>
        `
    },
    'security': {
        title: 'KEAMANAN_DATA',
        meta: { sektor: 'Security', status: 'Hardened', level: 'Expert' },
        body: `
            <h3 class="title">SERVER_SIDE_VALIDATION</h3>
            <p>Prinsip utama: <strong>Client is a liar.</strong> Semua data yang dikirim client harus divalidasi ulang di sisi server.</p>
            
            <div class="alert warn">
                <strong>WARNING:</strong> Jangan pernah memercayai variabel <code>health</code> atau <code>posisi</code> yang dikirim client tanpa mengecek logikanya di server.
            </div>

            <h4 class="sub-title">ANTI_CHEAT_METHODS</h4>
            <p>Simpan koordinat terakhir pemain di variabel server-side. Jika koordinat baru terlalu jauh dalam waktu singkat, kemungkinan besar pemain melakukan teleport hack.</p>
        `
    },
    'player_api': {
        title: 'KONTROL_PEMAIN',
        meta: { sektor: 'API', status: 'Ready', target: 'Player' },
        body: `
            <h3 class="title">MANIPULASI_STATE_PEMAIN</h3>
            <p>Fungsi-fungsi dasar untuk mengontrol apa yang dialami pemain di dalam server.</p>
            
            <div class="grid">
                <div class="card">
                    <h5>SetPlayerPos</h5>
                    <p>Mengatur lokasi pemain (X, Y, Z). Pastikan memberika delay tipis saat memindahkan pemain antar interior.</p>
                </div>
                <div class="card">
                    <h5>GivePlayerMoney</h5>
                    <p>Memberikan uang ke pemain. Selalu sinkronkan dengan variabel server-side agar tidak bisa di-cheat.</p>
                </div>
            </div>
            
            <pre><code>SetPlayerPos(playerid, 1200.0, -1500.0, 15.0);
SetPlayerFacingAngle(playerid, 90.0);
SetCameraBehindPlayer(playerid);</code></pre>
        `
    },
    'gui': {
        title: 'ANTARMUKA_GRAFIS',
        meta: { sektor: 'UI', status: 'Enhanced', type: 'Dialog' },
        body: `
            <h3 class="title">PENGEMBANGAN_USER_INTERFACE</h3>
            <p>Gunakan Dialog dan Textdraw untuk memberikan antarmuka interaktif kepada pemain.</p>
            
            <div class="code-header">DIALOG_SYSTEM</div>
            <pre><code>ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_PASSWORD, "LOGIN SANKSI", "Masukkan password Anda:", "Login", "Keluar");</code></pre>

            <h4 class="sub-title">TEXTDRAW_OPTIMIZATION</h4>
            <p>Gunakan <em>Player-Textdraws</em> untuk UI yang bersifat individual (seperti bar HP atau Logo Nama) guna menghemat limit global textdraw (2048).</p>
        `
    },
    'world': {
        title: 'ENTITAS_DUNIA',
        meta: { sektor: 'World', status: 'Ready', type: 'Static/Dynamic' },
        body: `
            <h3 class="title">PENGELOLAAN_OBJEK_DAN_KENDARAAN</h3>
            <p>Dunia SA-MP diisi oleh objek, kendaraan, dan pickup yang harus dikelola dengan benar agar tidak terjadi lag visual.</p>
            
            <pre><code>// Membuat kendaraan di server init
CreateVehicle(411, 0.0, 0.0, 3.0, 0.0, 1, 1, 60);

// Membuat objek statis
CreateObject(1337, 100.0, 100.0, 5.0, 0.0, 0.0, 0.0);</code></pre>

            <h4 class="sub-title">DYNAMIC_STREAMER</h4>
            <p>Sangat disarankan menggunakan plugin <strong>Streamer by Incognito</strong> untuk mengelola ribuan objek tanpa terkena limit native SA-MP (1000 objek).</p>
        `
    }
};
