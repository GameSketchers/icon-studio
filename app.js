(function() {
    'use strict';

    const ICON_BASE_PATH = './icons/';

    const ANDROID_DENSITIES = {
        'ldpi':    { legacy: 36,  adaptive: 81 },
        'mdpi':    { legacy: 48,  adaptive: 108 },
        'hdpi':    { legacy: 72,  adaptive: 162 },
        'xhdpi':   { legacy: 96,  adaptive: 216 },
        'xxhdpi':  { legacy: 144, adaptive: 324 },
        'xxxhdpi': { legacy: 192, adaptive: 432 }
    };

    const IOS_SIZES = [20, 29, 40, 58, 60, 76, 80, 87, 120, 152, 167, 180, 1024];
    const WEB_SIZES = [16, 32, 48, 72, 96, 128, 144, 192, 384, 512];

    const GRID_APPS = [
        { id: 'gmail', name: 'Gmail', file: 'gmail.png', mono: 'gmail_mono.png', color: '#EA4335' },
        { id: 'maps', name: 'Maps', file: 'maps.png', mono: 'maps_mono.png', color: '#34A853' },
        { id: 'photos', name: 'Photos', file: 'photos.png', mono: 'photos_mono.png', color: '#4285F4' },
        { id: 'chrome', name: 'Chrome', file: 'chrome.png', mono: 'chrome_mono.png', color: '#4285F4' },
        { id: 'youtube', name: 'YouTube', file: 'youtube.png', mono: 'youtube_mono.png', color: '#ffffff' },
        { id: 'drive', name: 'Drive', file: 'drive.png', mono: 'drive_mono.png', color: '#FBBC04' },
        { id: 'calendar', name: 'Calendar', file: 'calendar.png', mono: 'calendar_mono.png', color: '#4285F4' },
        { id: 'settings', name: 'Settings', file: 'settings.png', mono: 'settings_mono.png', color: '#555555' }
    ];

    const DOCK_ICONS = [
        { id: 'phone', name: 'Phone', file: 'phone.png', mono: 'phone_mono.png', color: '#34A853' },
        { id: 'messages', name: 'Messages', file: 'messages.png', mono: 'messages_mono.png', color: '#1A73E8' },
        { id: 'camera', name: 'Camera', file: 'camera.png', mono: 'camera_mono.png', color: '#333333' }
    ];

    const TV_APPS = [
        { id: 'hbo_max', name: 'HBO Max', banner: 'hbo_max_banner.webp', color: '#080b16' },
        { id: 'netflix', name: 'Netflix', banner: 'netflix_banner.png', color: '#E50914' },
        { id: 'youtube', name: 'YouTube', banner: 'youtube_banner.png', color: '#ffffff' },
        { id: 'prime', name: 'Prime Video', banner: 'prime_banner.png', color: '#00A8E1' },
        { id: 'spotify', name: 'Spotify', banner: 'spotify_banner.png', color: '#1DB954' },
        { id: 'twitch', name: 'Twitch', banner: 'twitch_banner.png', color: '#9146FF' }
    ];

    const LANGUAGES = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' }
    ];

    const translations = {
        en: {
            configuration: "Configuration",
            tabIcon: "Icon",
            tabTV: "TV Banner",
            appName: "App Name",
            iconFileName: "Icon File Name",
            foreground: "FOREGROUND",
            uploadForeground: "Upload Foreground",
            dragDrop: "Drag & Drop or Click",
            monoIcon: "Mono Icon",
            uploadMono: "Upload Mono Layer",
            autoConvert: "Or auto-convert from foreground",
            bgColor: "Background Color",
            tvBgColor: "TV Banner Background",
            syncWithIcon: "Sync with icon background",
            scale: "Scale",
            iconShape: "Preview Shape",
            tvBanner: "TV BANNER (320×180)",
            uploadTvBanner: "Upload TV Banner",
            tvHint: "If not uploaded, will generate from icon automatically",
            tvHome: "Home",
            tvMovies: "Movies",
            tvApps: "Apps",
            tvYourApps: "Your Apps",
            tvPopular: "Popular Apps",
            preview: "Preview",
            previewHint: "Switch theme mode to preview themed monochrome icons",
            export: "Export",
            totalFiles: "Files",
            platforms: "Platforms",
            includedPlatforms: "PLATFORMS",
            androidDesc: "Adaptive + Legacy + Mono",
            iosDesc: "All sizes + Contents.json",
            webDesc: "Favicon + Manifest icons",
            fileStructure: "FILE STRUCTURE",
            downloadZip: "Download ZIP",
            codeSnippets: "Code Snippets",
            code: "Code",
            config: "Config",
            processing: "Processing...",
            success: "ZIP downloaded successfully!",
            error: "Please upload a foreground image first",
            loaded: "Image loaded!",
            copied: "Copied to clipboard!",
            selectLanguage: "Select Language",
            enableMono: "Enable Mono Icon first"
        },
        tr: {
            configuration: "Yapılandırma",
            tabIcon: "İkon",
            tabTV: "TV Banner",
            appName: "Uygulama Adı",
            iconFileName: "İkon Dosya Adı",
            foreground: "ÖN PLAN",
            uploadForeground: "Ön Plan Yükle",
            dragDrop: "Sürükle veya Tıkla",
            monoIcon: "Mono İkon",
            uploadMono: "Mono Katman Yükle",
            autoConvert: "Veya otomatik dönüştür",
            bgColor: "Arkaplan Rengi",
            tvBgColor: "TV Banner Arkaplanı",
            syncWithIcon: "İkon arkaplanı ile senkronize",
            scale: "Ölçek",
            iconShape: "Önizleme Şekli",
            tvBanner: "TV BANNER (320×180)",
            uploadTvBanner: "TV Banner Yükle",
            tvHint: "Yüklenmezse ikondan otomatik oluşturulur",
            tvHome: "Ana Sayfa",
            tvMovies: "Filmler",
            tvApps: "Uygulamalar",
            tvYourApps: "Uygulamalarınız",
            tvPopular: "Popüler Uygulamalar",
            preview: "Önizleme",
            previewHint: "Temalı mono ikonları önizlemek için tema modunu değiştirin",
            export: "Dışa Aktar",
            totalFiles: "Dosya",
            platforms: "Platform",
            includedPlatforms: "PLATFORMLAR",
            androidDesc: "Adaptive + Legacy + Mono",
            iosDesc: "Tüm boyutlar + Contents.json",
            webDesc: "Favicon + Manifest ikonları",
            fileStructure: "DOSYA YAPISI",
            downloadZip: "ZIP İndir",
            codeSnippets: "Kod Parçacıkları",
            code: "Kod",
            config: "Ayarlar",
            processing: "İşleniyor...",
            success: "ZIP başarıyla indirildi!",
            error: "Lütfen önce bir ön plan görseli yükleyin",
            loaded: "Görsel yüklendi!",
            copied: "Panoya kopyalandı!",
            selectLanguage: "Dil Seçin",
            enableMono: "Önce Mono İkonu etkinleştirin"
        },
        ja: {
            configuration: "設定",
            tabIcon: "アイコン",
            tabTV: "TVバナー",
            appName: "アプリ名",
            iconFileName: "アイコンファイル名",
            foreground: "フォアグラウンド",
            uploadForeground: "フォアグラウンドをアップロード",
            dragDrop: "ドラッグ＆ドロップまたはクリック",
            monoIcon: "モノクロアイコン",
            uploadMono: "モノレイヤーをアップロード",
            autoConvert: "または自動変換",
            bgColor: "背景色",
            tvBgColor: "TVバナー背景",
            syncWithIcon: "アイコン背景と同期",
            scale: "スケール",
            iconShape: "プレビュー形状",
            tvBanner: "TVバナー (320×180)",
            uploadTvBanner: "TVバナーをアップロード",
            tvHint: "アップロードしない場合、アイコンから自動生成",
            tvHome: "ホーム",
            tvMovies: "映画",
            tvApps: "アプリ",
            tvYourApps: "あなたのアプリ",
            tvPopular: "人気のアプリ",
            preview: "プレビュー",
            previewHint: "テーマモードを切り替えてモノクロアイコンをプレビュー",
            export: "エクスポート",
            totalFiles: "ファイル",
            platforms: "プラットフォーム",
            includedPlatforms: "プラットフォーム",
            androidDesc: "Adaptive + Legacy + Mono",
            iosDesc: "全サイズ + Contents.json",
            webDesc: "Favicon + Manifestアイコン",
            fileStructure: "ファイル構造",
            downloadZip: "ZIPをダウンロード",
            codeSnippets: "コードスニペット",
            code: "コード",
            config: "設定",
            processing: "処理中...",
            success: "ZIPのダウンロードが完了しました！",
            error: "最初にフォアグラウンド画像をアップロードしてください",
            loaded: "画像を読み込みました！",
            copied: "クリップボードにコピーしました！",
            selectLanguage: "言語を選択",
            enableMono: "先にモノアイコンを有効にしてください"
        },
        de: {
            configuration: "Konfiguration",
            tabIcon: "Symbol",
            tabTV: "TV-Banner",
            appName: "App-Name",
            iconFileName: "Symbol-Dateiname",
            foreground: "VORDERGRUND",
            uploadForeground: "Vordergrund hochladen",
            dragDrop: "Ziehen & Ablegen oder Klicken",
            monoIcon: "Mono-Symbol",
            uploadMono: "Mono-Ebene hochladen",
            autoConvert: "Oder automatisch konvertieren",
            bgColor: "Hintergrundfarbe",
            tvBgColor: "TV-Banner-Hintergrund",
            syncWithIcon: "Mit Symbol-Hintergrund synchronisieren",
            scale: "Skalierung",
            iconShape: "Vorschauform",
            tvBanner: "TV-BANNER (320×180)",
            uploadTvBanner: "TV-Banner hochladen",
            tvHint: "Wird automatisch aus dem Symbol generiert",
            tvHome: "Startseite",
            tvMovies: "Filme",
            tvApps: "Apps",
            tvYourApps: "Ihre Apps",
            tvPopular: "Beliebte Apps",
            preview: "Vorschau",
            previewHint: "Themenmodus umschalten für Monochrom-Vorschau",
            export: "Exportieren",
            totalFiles: "Dateien",
            platforms: "Plattformen",
            includedPlatforms: "PLATTFORMEN",
            androidDesc: "Adaptive + Legacy + Mono",
            iosDesc: "Alle Größen + Contents.json",
            webDesc: "Favicon + Manifest-Symbole",
            fileStructure: "DATEISTRUKTUR",
            downloadZip: "ZIP herunterladen",
            codeSnippets: "Code-Snippets",
            code: "Code",
            config: "Konfig",
            processing: "Verarbeitung...",
            success: "ZIP erfolgreich heruntergeladen!",
            error: "Bitte laden Sie zuerst ein Vordergrundbild hoch",
            loaded: "Bild geladen!",
            copied: "In die Zwischenablage kopiert!",
            selectLanguage: "Sprache auswählen",
            enableMono: "Aktivieren Sie zuerst das Mono-Symbol"
        },
        fr: {
            configuration: "Configuration",
            tabIcon: "Icône",
            tabTV: "Bannière TV",
            appName: "Nom de l'app",
            iconFileName: "Nom du fichier icône",
            foreground: "PREMIER PLAN",
            uploadForeground: "Télécharger le premier plan",
            dragDrop: "Glisser-déposer ou Cliquer",
            monoIcon: "Icône Mono",
            uploadMono: "Télécharger la couche Mono",
            autoConvert: "Ou conversion automatique",
            bgColor: "Couleur d'arrière-plan",
            tvBgColor: "Arrière-plan bannière TV",
            syncWithIcon: "Synchroniser avec l'arrière-plan",
            scale: "Échelle",
            iconShape: "Forme de prévisualisation",
            tvBanner: "BANNIÈRE TV (320×180)",
            uploadTvBanner: "Télécharger la bannière TV",
            tvHint: "Généré automatiquement si non téléchargé",
            tvHome: "Accueil",
            tvMovies: "Films",
            tvApps: "Apps",
            tvYourApps: "Vos Apps",
            tvPopular: "Apps Populaires",
            preview: "Aperçu",
            previewHint: "Basculer le mode thème pour prévisualiser",
            export: "Exporter",
            totalFiles: "Fichiers",
            platforms: "Plateformes",
            includedPlatforms: "PLATEFORMES",
            androidDesc: "Adaptive + Legacy + Mono",
            iosDesc: "Toutes tailles + Contents.json",
            webDesc: "Favicon + icônes Manifest",
            fileStructure: "STRUCTURE DES FICHIERS",
            downloadZip: "Télécharger ZIP",
            codeSnippets: "Extraits de code",
            code: "Code",
            config: "Config",
            processing: "Traitement...",
            success: "ZIP téléchargé avec succès!",
            error: "Veuillez d'abord télécharger une image",
            loaded: "Image chargée!",
            copied: "Copié!",
            selectLanguage: "Choisir la langue",
            enableMono: "Activez d'abord l'icône Mono"
        },
        es: {
            configuration: "Configuración",
            tabIcon: "Icono",
            tabTV: "Banner TV",
            appName: "Nombre de App",
            iconFileName: "Nombre de archivo",
            foreground: "PRIMER PLANO",
            uploadForeground: "Subir primer plano",
            dragDrop: "Arrastrar o hacer clic",
            monoIcon: "Icono Mono",
            uploadMono: "Subir capa Mono",
            autoConvert: "O conversión automática",
            bgColor: "Color de fondo",
            tvBgColor: "Fondo de banner TV",
            syncWithIcon: "Sincronizar con fondo",
            scale: "Escala",
            iconShape: "Forma de vista previa",
            tvBanner: "BANNER TV (320×180)",
            uploadTvBanner: "Subir banner TV",
            tvHint: "Se generará automáticamente si no se sube",
            tvHome: "Inicio",
            tvMovies: "Películas",
            tvApps: "Apps",
            tvYourApps: "Tus Apps",
            tvPopular: "Apps Populares",
            preview: "Vista previa",
            previewHint: "Cambiar modo de tema para previsualizar",
            export: "Exportar",
            totalFiles: "Archivos",
            platforms: "Plataformas",
            includedPlatforms: "PLATAFORMAS",
            androidDesc: "Adaptive + Legacy + Mono",
            iosDesc: "Todos los tamaños + Contents.json",
            webDesc: "Favicon + iconos Manifest",
            fileStructure: "ESTRUCTURA",
            downloadZip: "Descargar ZIP",
            codeSnippets: "Fragmentos de código",
            code: "Código",
            config: "Config",
            processing: "Procesando...",
            success: "¡ZIP descargado!",
            error: "Por favor, suba una imagen primero",
            loaded: "¡Imagen cargada!",
            copied: "¡Copiado!",
            selectLanguage: "Seleccionar idioma",
            enableMono: "Primero habilite el icono Mono"
        },
        zh: {
            configuration: "配置",
            tabIcon: "图标",
            tabTV: "电视横幅",
            appName: "应用名称",
            iconFileName: "图标文件名",
            foreground: "前景",
            uploadForeground: "上传前景",
            dragDrop: "拖放或点击",
            monoIcon: "单色图标",
            uploadMono: "上传单色图层",
            autoConvert: "或自动转换",
            bgColor: "背景颜色",
            tvBgColor: "电视横幅背景",
            syncWithIcon: "与图标背景同步",
            scale: "缩放",
            iconShape: "预览形状",
            tvBanner: "电视横幅 (320×180)",
            uploadTvBanner: "上传电视横幅",
            tvHint: "未上传将自动生成",
            tvHome: "主页",
            tvMovies: "电影",
            tvApps: "应用",
            tvYourApps: "您的应用",
            tvPopular: "热门应用",
            preview: "预览",
            previewHint: "切换主题模式预览单色图标",
            export: "导出",
            totalFiles: "文件",
            platforms: "平台",
            includedPlatforms: "平台",
            androidDesc: "Adaptive + Legacy + Mono",
            iosDesc: "所有尺寸 + Contents.json",
            webDesc: "Favicon + Manifest图标",
            fileStructure: "文件结构",
            downloadZip: "下载ZIP",
            codeSnippets: "代码片段",
            code: "代码",
            config: "配置",
            processing: "处理中...",
            success: "下载成功！",
            error: "请先上传前景图像",
            loaded: "图像已加载！",
            copied: "已复制！",
            selectLanguage: "选择语言",
            enableMono: "请先启用单色图标"
        },
        ko: {
            configuration: "구성",
            tabIcon: "아이콘",
            tabTV: "TV 배너",
            appName: "앱 이름",
            iconFileName: "아이콘 파일 이름",
            foreground: "전경",
            uploadForeground: "전경 업로드",
            dragDrop: "드래그 앤 드롭 또는 클릭",
            monoIcon: "모노 아이콘",
            uploadMono: "모노 레이어 업로드",
            autoConvert: "또는 자동 변환",
            bgColor: "배경색",
            tvBgColor: "TV 배너 배경",
            syncWithIcon: "아이콘 배경과 동기화",
            scale: "크기",
            iconShape: "미리보기 모양",
            tvBanner: "TV 배너 (320×180)",
            uploadTvBanner: "TV 배너 업로드",
            tvHint: "업로드하지 않으면 자동 생성",
            tvHome: "홈",
            tvMovies: "영화",
            tvApps: "앱",
            tvYourApps: "내 앱",
            tvPopular: "인기 앱",
            preview: "미리보기",
            previewHint: "테마 모드 전환으로 미리보기",
            export: "내보내기",
            totalFiles: "파일",
            platforms: "플랫폼",
            includedPlatforms: "플랫폼",
            androidDesc: "Adaptive + Legacy + Mono",
            iosDesc: "모든 크기 + Contents.json",
            webDesc: "Favicon + Manifest 아이콘",
            fileStructure: "파일 구조",
            downloadZip: "ZIP 다운로드",
            codeSnippets: "코드 스니펫",
            code: "코드",
            config: "설정",
            processing: "처리 중...",
            success: "다운로드 완료!",
            error: "먼저 전경 이미지를 업로드하세요",
            loaded: "이미지 로드됨!",
            copied: "복사됨!",
            selectLanguage: "언어 선택",
            enableMono: "먼저 모노 아이콘을 활성화하세요"
        }
    };

    const state = {
        foregroundImg: null,
        monoImg: null,
        tvBannerImg: null,
        appName: 'MyApp',
        iconName: 'ic_launcher',
        bgColor: '#1a1a1a',
        tvBgColor: '#1a1a1a',
        syncTvBgColor: true,
        scale: 100,
        shape: 'squircle',
        useMono: true,
        isThemed: false,
        exportAndroid: true,
        exportIOS: true,
        exportWeb: true,
        exportTV: false,
        exportPlayStore: true,
        currentLang: 'en',
        currentTab: 'icon',
        currentPreviewMode: 'phone',
        currentPanel: 'config',
        langModalOpen: false
    };

    let DOM = {};
    let toastTimeout;

    function $(id) {
        return document.getElementById(id);
    }

    function $$(selector) {
        return document.querySelectorAll(selector);
    }

    function cacheDOMElements() {
        DOM = {
            langBtn: $('langBtn'),
            mobileLangBtn: $('mobileLangBtn'),
            langModal: $('langModal'),
            langModalClose: $('langModalClose'),
            langOptions: $$('.lang-option'),
            currentLangFlag: $('currentLangFlag'),
            currentLangName: $('currentLangName'),
            desktopNav: $('desktopNav'),
            navTabs: $$('.nav-tab'),
            mobileNav: $('mobileNav'),
            mobileNavItems: $$('.mobile-nav-item'),
            configPanel: $('configPanel'),
            previewPanel: $('previewPanel'),
            exportPanel: $('exportPanel'),
            codePanel: $('codePanel'),
            tabs: $$('.tab'),
            iconTab: $('iconTab'),
            tvTab: $('tvTab'),
            appNameInput: $('appNameInput'),
            iconNameInput: $('iconNameInput'),
            bgColorPicker: $('bgColorPicker'),
            bgColorText: $('bgColorText'),
            tvBgColorPicker: $('tvBgColorPicker'),
            tvBgColorText: $('tvBgColorText'),
            syncTvBgColor: $('syncTvBgColor'),
            scaleSlider: $('scaleSlider'),
            scaleValue: $('scaleValue'),
            resetScaleBtn: $('resetScaleBtn'),
            monoToggle: $('monoToggle'),
            monoSection: $('monoSection'),
            monoStatus: $('monoStatus'),
            foregroundUpload: $('foregroundUpload'),
            foregroundFile: $('foregroundFile'),
            foregroundPreview: $('foregroundPreview'),
            monoUpload: $('monoUpload'),
            monoFile: $('monoFile'),
            tvBannerUpload: $('tvBannerUpload'),
            tvBannerFile: $('tvBannerFile'),
            tvBannerPreview: $('tvBannerPreview'),
            colorPresets: $$('.color-preset'),
            shapeOptions: $$('.shape-option'),
            segmentBtns: $$('.segment-btn'),
            previewHint: $('previewHint'),
            phoneFrame: $('phoneFrame'),
            phoneScreen: $('phoneScreen'),
            appGrid: $('appGrid'),
            phoneDock: $('phoneDock'),
            clockDisplay: $('clockDisplay'),
            clockDate: $('clockDate'),
            statusTime: $('statusTime'),
            tvFrame: $('tvFrame'),
            tvPopularRow: $('tvPopularRow'),
            tvPreviewCanvas: $('tvPreviewCanvas'),
            tvBannerTitle: $('tvBannerTitle'),
            tvTime: $('tvTime'),
            exportAndroid: $('exportAndroid'),
            exportIOS: $('exportIOS'),
            exportWeb: $('exportWeb'),
            exportTV: $('exportTV'),
            exportPlayStore: $('exportPlayStore'),
            totalFilesCount: $('totalFilesCount'),
            platformCount: $('platformCount'),
            fileTree: $('fileTree'),
            downloadBtn: $('downloadBtn'),
            progressBar: document.querySelector('.progress-bar'),
            progressFill: $('progressFill'),
            copyBtns: $$('.copy-btn'),
            toast: $('toast'),
            toastIcon: $('toastIcon'),
            toastMessage: $('toastMessage')
        };
    }

    function init() {
        cacheDOMElements();
        setupEventListeners();
        renderPhoneApps();
        renderDockIcons();
        renderTVApps();
        updateClock();
        setInterval(updateClock, 1000);
        updateScaleDisplay();
        updateAllPreviews();
        updateFileCount();
        updateFileTree();
        updateCodeSnippets();
        handleResize();
        toggleTvInputsState();
        updateLangDisplay();
        switchPanel('config');
    }

    function setupEventListeners() {
        DOM.langBtn?.addEventListener('click', openLangModal);
        DOM.mobileLangBtn?.addEventListener('click', openLangModal);
        DOM.langModalClose?.addEventListener('click', closeLangModal);
        DOM.langModal?.addEventListener('click', (e) => {
            if (e.target === DOM.langModal) closeLangModal();
        });
        
        DOM.langOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                setLanguage(opt.dataset.lang);
                closeLangModal();
            });
        });

        DOM.mobileNavItems.forEach(item => {
            item.addEventListener('click', () => switchPanel(item.dataset.panel));
        });

        DOM.navTabs.forEach(btn => {
            btn.addEventListener('click', () => switchPanel(btn.dataset.panel));
        });

        window.addEventListener('resize', handleResize);

        DOM.tabs.forEach(tab => {
            tab.addEventListener('click', () => switchConfigTab(tab.dataset.tab));
        });

        DOM.appNameInput?.addEventListener('input', (e) => {
            state.appName = e.target.value || 'MyApp';
            updateAppNameDisplays();
            updateCodeSnippets();
        });

        DOM.iconNameInput?.addEventListener('input', (e) => {
            state.iconName = e.target.value || 'ic_launcher';
            updateFileTree();
            updateCodeSnippets();
        });

        DOM.bgColorPicker?.addEventListener('input', (e) => updateBgColor(e.target.value));
        DOM.bgColorText?.addEventListener('input', (e) => {
            if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
                updateBgColor(e.target.value);
            }
        });

        DOM.tvBgColorPicker?.addEventListener('input', handleTvBgColorChange);
        DOM.tvBgColorText?.addEventListener('input', handleTvBgColorTextChange);
        DOM.syncTvBgColor?.addEventListener('change', handleSyncTvBgChange);

        DOM.colorPresets.forEach(preset => {
            preset.addEventListener('click', () => updateBgColor(preset.dataset.color));
        });

        DOM.scaleSlider?.addEventListener('input', (e) => {
            state.scale = parseInt(e.target.value, 10);
            updateScaleDisplay();
            updateAllPreviews();
        });

        DOM.resetScaleBtn?.addEventListener('click', () => {
            state.scale = 100;
            if (DOM.scaleSlider) DOM.scaleSlider.value = 100;
            updateScaleDisplay();
            updateAllPreviews();
        });

        DOM.shapeOptions.forEach(opt => {
            opt.addEventListener('click', () => {
                DOM.shapeOptions.forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                state.shape = opt.dataset.shape;
                updateIconShapes();
            });
        });

        DOM.monoToggle?.addEventListener('change', (e) => {
            state.useMono = e.target.checked;
            if (DOM.monoSection) {
                DOM.monoSection.style.display = e.target.checked ? 'block' : 'none';
            }
            if (!e.target.checked) {
                state.isThemed = false;
                updateThemeUI();
            }
            updateAllPreviews();
            updateFileCount();
            updateFileTree();
        });

        setupUploadZone(DOM.foregroundUpload, DOM.foregroundFile, DOM.foregroundPreview, handleForegroundUpload);
        setupUploadZone(DOM.monoUpload, DOM.monoFile, null, handleMonoUpload);
        setupUploadZone(DOM.tvBannerUpload, DOM.tvBannerFile, DOM.tvBannerPreview, handleTvBannerUpload);

        DOM.segmentBtns.forEach(btn => {
            if (btn.dataset.mode) {
                btn.addEventListener('click', () => switchPreviewMode(btn.dataset.mode));
            } else if (btn.dataset.theme) {
                btn.addEventListener('click', () => switchTheme(btn.dataset.theme));
            }
        });

        [DOM.exportAndroid, DOM.exportIOS, DOM.exportWeb, DOM.exportTV, DOM.exportPlayStore].forEach(el => {
            el?.addEventListener('change', () => {
                state[el.id] = el.checked;
                updateFileCount();
                updateFileTree();
            });
        });

        DOM.downloadBtn?.addEventListener('click', handleDownload);

        DOM.copyBtns.forEach(btn => {
            btn.addEventListener('click', () => handleCopy(btn));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.langModalOpen) closeLangModal();
        });
    }

    function openLangModal() {
        DOM.langModal?.classList.add('active');
        state.langModalOpen = true;
        document.body.style.overflow = 'hidden';
    }

    function closeLangModal() {
        DOM.langModal?.classList.remove('active');
        state.langModalOpen = false;
        document.body.style.overflow = '';
    }

    function setLanguage(lang) {
        state.currentLang = lang;
        updateLangDisplay();
        updateTranslations();
        updateClock();
        DOM.langOptions.forEach(opt => {
            const isActive = opt.dataset.lang === lang;
            opt.classList.toggle('active', isActive);
            opt.setAttribute('aria-selected', isActive.toString());
        });
    }

    function updateLangDisplay() {
        const lang = LANGUAGES.find(l => l.code === state.currentLang) || LANGUAGES[0];
        if (DOM.currentLangFlag) DOM.currentLangFlag.textContent = lang.flag;
        if (DOM.currentLangName) DOM.currentLangName.textContent = lang.name;
    }

    function updateTranslations() {
        const t = translations[state.currentLang] || translations.en;
        $$('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });
    }

    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        if (DOM.desktopNav) DOM.desktopNav.style.display = isMobile ? 'none' : 'flex';
        if (DOM.mobileNav) DOM.mobileNav.style.display = isMobile ? 'flex' : 'none';
        switchPanel(state.currentPanel);
    }

    function switchPanel(panel) {
        state.currentPanel = panel;
        
        const panels = {
            config: DOM.configPanel,
            preview: DOM.previewPanel,
            export: DOM.exportPanel,
            code: DOM.codePanel
        };

        Object.values(panels).forEach(p => {
            if (p) {
                p.classList.remove('active');
                p.style.display = 'none';
            }
        });

        if (panels[panel]) {
            panels[panel].classList.add('active');
            panels[panel].style.display = 'flex';
        }

        DOM.mobileNavItems.forEach(item => {
            item.classList.toggle('active', item.dataset.panel === panel);
        });

        DOM.navTabs.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.panel === panel);
        });
    }

    function switchConfigTab(tab) {
        state.currentTab = tab;
        
        DOM.tabs.forEach(t => {
            const isActive = t.dataset.tab === tab;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', isActive.toString());
        });
        
        if (DOM.iconTab) {
            const iconActive = tab === 'icon';
            DOM.iconTab.style.display = iconActive ? 'flex' : 'none';
            DOM.iconTab.classList.toggle('active', iconActive);
            DOM.iconTab.hidden = !iconActive;
        }
        
        if (DOM.tvTab) {
            const tvActive = tab === 'tv';
            DOM.tvTab.style.display = tvActive ? 'flex' : 'none';
            DOM.tvTab.classList.toggle('active', tvActive);
            DOM.tvTab.hidden = !tvActive;
        }
        
        updateFileTree();
    }

    function setupUploadZone(zone, input, previewEl, callback) {
        if (!zone || !input) return;

        zone.addEventListener('click', () => input.click());

        input.addEventListener('change', (e) => {
            if (e.target.files && e.target.files.length) {
                processImageFile(e.target.files[0], zone, previewEl, callback);
            }
        });

        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('dragover');
        });

        zone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            zone.classList.remove('dragover');
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('dragover');
            if (e.dataTransfer.files && e.dataTransfer.files.length) {
                processImageFile(e.dataTransfer.files[0], zone, previewEl, callback);
            }
        });
    }

    function processImageFile(file, zone, previewEl, callback) {
        if (!file.type.startsWith('image/')) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                zone.classList.add('active', 'has-image');
                if (previewEl) {
                    previewEl.src = e.target.result;
                    previewEl.style.display = 'block';
                }
                callback(img);
            };
            img.onerror = () => {
                showToast('Failed to load image', 'error');
            };
            img.src = e.target.result;
        };
        reader.onerror = () => {
            showToast('Failed to read file', 'error');
        };
        reader.readAsDataURL(file);
    }

    function getDominantColor(img) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const size = 50;
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);

        const imageData = ctx.getImageData(0, 0, size, size);
        const data = imageData.data;
        const colorCounts = {};
        let maxCount = 0;
        let dominantColor = { r: 26, g: 26, b: 26 };

        for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
            if (a < 128) continue;
            const brightness = (r + g + b) / 3;
            if (brightness > 240 || brightness < 15) continue;

            const qr = Math.round(r / 32) * 32;
            const qg = Math.round(g / 32) * 32;
            const qb = Math.round(b / 32) * 32;
            const key = `${qr},${qg},${qb}`;
            colorCounts[key] = (colorCounts[key] || 0) + 1;

            if (colorCounts[key] > maxCount) {
                maxCount = colorCounts[key];
                dominantColor = { r: qr, g: qg, b: qb };
            }
        }

        const toHex = (n) => Math.min(255, Math.max(0, n)).toString(16).padStart(2, '0');
        return `#${toHex(dominantColor.r)}${toHex(dominantColor.g)}${toHex(dominantColor.b)}`;
    }

    function handleForegroundUpload(img) {
        state.foregroundImg = img;
        const detectedColor = getDominantColor(img);
        updateBgColor(detectedColor);
        updateAllPreviews();
        showToast(translations[state.currentLang]?.loaded || 'Image loaded!', 'success');
    }

    function handleMonoUpload(img) {
        state.monoImg = img;
        DOM.monoUpload?.classList.add('active');
        if (DOM.monoStatus) DOM.monoStatus.style.opacity = '1';
        updatePhonePreview();
        showToast(translations[state.currentLang]?.loaded || 'Image loaded!', 'success');
    }

    function handleTvBannerUpload(img) {
        state.tvBannerImg = img;
        updateTVPreview();
        showToast(translations[state.currentLang]?.loaded || 'Image loaded!', 'success');
    }

    function updateBgColor(color) {
        state.bgColor = color;
        if (DOM.bgColorPicker) DOM.bgColorPicker.value = color;
        if (DOM.bgColorText) DOM.bgColorText.value = color;

        if (state.syncTvBgColor) {
            state.tvBgColor = color;
            if (DOM.tvBgColorPicker) DOM.tvBgColorPicker.value = color;
            if (DOM.tvBgColorText) DOM.tvBgColorText.value = color;
        }

        updateColorPresets();
        updateAllPreviews();
        updateCodeSnippets();
    }

    function handleTvBgColorChange(e) {
        if (state.syncTvBgColor) {
            state.syncTvBgColor = false;
            if (DOM.syncTvBgColor) DOM.syncTvBgColor.checked = false;
            toggleTvInputsState();
        }
        state.tvBgColor = e.target.value;
        if (DOM.tvBgColorText) DOM.tvBgColorText.value = e.target.value;
        updateTVPreview();
    }

    function handleTvBgColorTextChange(e) {
        if (/^#[0-9A-Fa-f]{6}$/.test(e.target.value)) {
            if (state.syncTvBgColor) {
                state.syncTvBgColor = false;
                if (DOM.syncTvBgColor) DOM.syncTvBgColor.checked = false;
                toggleTvInputsState();
            }
            state.tvBgColor = e.target.value;
            if (DOM.tvBgColorPicker) DOM.tvBgColorPicker.value = e.target.value;
            updateTVPreview();
        }
    }

    function handleSyncTvBgChange(e) {
        state.syncTvBgColor = e.target.checked;
        if (state.syncTvBgColor) updateBgColor(state.bgColor);
        toggleTvInputsState();
    }

    function toggleTvInputsState() {
        const row = $('tvColorRow');
        if (row) {
            row.style.opacity = state.syncTvBgColor ? '0.5' : '1';
            row.style.pointerEvents = state.syncTvBgColor ? 'none' : 'auto';
        }
        if (DOM.tvBgColorPicker) DOM.tvBgColorPicker.disabled = state.syncTvBgColor;
        if (DOM.tvBgColorText) DOM.tvBgColorText.disabled = state.syncTvBgColor;
    }

    function updateColorPresets() {
        DOM.colorPresets.forEach(preset => {
            preset.classList.toggle('active', preset.dataset.color.toLowerCase() === state.bgColor.toLowerCase());
        });
    }

    function updateScaleDisplay() {
        if (DOM.scaleValue) DOM.scaleValue.textContent = state.scale + '%';
    }

    function switchPreviewMode(mode) {
        state.currentPreviewMode = mode;
        $$('.segment-btn[data-mode]').forEach(b => {
            b.classList.toggle('active', b.dataset.mode === mode);
        });
        DOM.phoneFrame?.classList.toggle('hidden', mode !== 'phone');
        DOM.tvFrame?.classList.toggle('hidden', mode !== 'tv');
        
        const t = translations[state.currentLang] || translations.en;
        if (DOM.previewHint) {
            DOM.previewHint.textContent = mode === 'tv' ? t.tvHint : t.previewHint;
        }
    }

    function switchTheme(theme) {
        if (theme === 'themed' && !state.useMono) {
            const t = translations[state.currentLang] || translations.en;
            showToast(t.enableMono, 'error');
            return;
        }
        state.isThemed = (theme === 'themed');
        updateThemeUI();
    }

    function updateThemeUI() {
        $$('.segment-btn[data-theme]').forEach(b => {
            b.classList.toggle('active', (b.dataset.theme === 'themed') === state.isThemed);
        });
        DOM.phoneScreen?.classList.toggle('themed', state.isThemed);
        updatePhonePreview();
    }

    function updateIconShapes() {
        $$('.app-icon').forEach(icon => {
            icon.classList.remove('circle', 'squircle', 'rounded', 'square');
            icon.classList.add(state.shape);
        });
        $$('.dock-icon').forEach(icon => {
            icon.classList.remove('circle', 'squircle', 'rounded', 'square');
            icon.classList.add(state.shape);
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function renderPhoneApps() {
        if (!DOM.appGrid) return;
        
        const appsBefore = GRID_APPS.slice(0, 4);
        const appsAfter = GRID_APPS.slice(4);

        let html = '';
        appsBefore.forEach(app => html += createAppIconHtml(app));
        
        html += `
            <div class="app-item">
                <div class="app-icon user-icon ${state.shape}" id="userAppIcon">
                    <canvas id="phonePreviewCanvas" width="100" height="100"></canvas>
                </div>
                <span class="app-label" id="phoneAppLabel">${escapeHtml(state.appName)}</span>
            </div>
        `;

        appsAfter.forEach(app => html += createAppIconHtml(app));
        DOM.appGrid.innerHTML = html;
        updatePhonePreview();
    }

    function createAppIconHtml(app) {
        return `
            <div class="app-item">
                <div class="app-icon ${state.shape}" style="background: ${app.color}">
                    <img class="icon-color" src="${ICON_BASE_PATH}${app.file}" alt="${escapeHtml(app.name)}" onerror="this.style.display='none'">
                    <img class="icon-mono" src="${ICON_BASE_PATH}${app.mono}" alt="${escapeHtml(app.name)} Mono" onerror="this.style.display='none'">
                </div>
                <span class="app-label">${escapeHtml(app.name)}</span>
            </div>
        `;
    }

    function renderDockIcons() {
        if (!DOM.phoneDock) return;
        
        let html = '';
        DOCK_ICONS.forEach(app => {
            html += `
                <div class="dock-icon ${state.shape}" style="background: ${app.color}">
                    <img class="icon-color" src="${ICON_BASE_PATH}${app.file}" alt="${escapeHtml(app.name)}" onerror="this.style.display='none'">
                    <img class="icon-mono" src="${ICON_BASE_PATH}${app.mono}" alt="${escapeHtml(app.name)} Mono" onerror="this.style.display='none'">
                </div>
            `;
        });
        DOM.phoneDock.innerHTML = html;
    }

    function renderTVApps() {
        if (!DOM.tvPopularRow) return;
        
        let html = '';
        TV_APPS.forEach(app => {
            html += `
                <div class="tv-banner-card" data-app="${app.id}">
                    <div class="tv-banner-image" style="background: ${app.color}">
                        <img src="${ICON_BASE_PATH}${app.banner}" alt="${escapeHtml(app.name)}" onerror="this.parentElement.style.background='${app.color}'">
                    </div>
                    <div class="tv-banner-name">${escapeHtml(app.name)}</div>
                </div>
            `;
        });
        DOM.tvPopularRow.innerHTML = html;
        
        updateTVPreview();
    }

    function updateAllPreviews() {
        updatePhonePreview();
        updateTVPreview();
    }

    function updatePhonePreview() {
        const canvas = $('phonePreviewCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const size = 100;
        ctx.clearRect(0, 0, size, size);

        if (state.isThemed && state.useMono) {
            ctx.fillStyle = '#333333';
            ctx.fillRect(0, 0, size, size);
            if (state.monoImg) {
                drawMonoImage(ctx, state.monoImg, size);
            } else if (state.foregroundImg) {
                drawAutoMono(ctx, state.foregroundImg, size);
            }
        } else {
            ctx.fillStyle = state.bgColor;
            ctx.fillRect(0, 0, size, size);
            if (state.foregroundImg) {
                drawScaledImage(ctx, state.foregroundImg, size);
            }
        }

        const label = $('phoneAppLabel');
        if (label) label.textContent = state.appName;
    }

    function updateTVPreview() {
        const canvas = DOM.tvPreviewCanvas;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = 320;
        const height = 180;
        
        ctx.clearRect(0, 0, width, height);
        
        const bgColor = state.syncTvBgColor ? state.bgColor : state.tvBgColor;
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);

        if (state.tvBannerImg) {
            const scale = Math.max(width / state.tvBannerImg.width, height / state.tvBannerImg.height);
            const w = state.tvBannerImg.width * scale;
            const h = state.tvBannerImg.height * scale;
            ctx.drawImage(state.tvBannerImg, (width - w) / 2, (height - h) / 2, w, h);
        } else if (state.foregroundImg) {
            const iconSize = 80 * (state.scale / 100);
            const ar = state.foregroundImg.width / state.foregroundImg.height;
            let dw = ar > 1 ? iconSize : iconSize * ar;
            let dh = ar > 1 ? iconSize / ar : iconSize;
            
            const iconX = (width - dw) / 2;
            const iconY = (height - dh) / 2 - 15;
            
            ctx.drawImage(state.foregroundImg, iconX, iconY, dw, dh);
            
            ctx.fillStyle = '#ffffff';
            ctx.font = '600 18px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(state.appName, width / 2, iconY + dh + 12);
        } else {
            ctx.fillStyle = 'rgba(255,255,255,0.3)';
            ctx.font = '500 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('TV Banner Preview', width / 2, height / 2);
        }

        if (DOM.tvBannerTitle) {
            DOM.tvBannerTitle.textContent = state.appName;
        }
    }

    function drawScaledImage(ctx, img, canvasSize) {
        const scaleFactor = state.scale / 100;
        const drawSize = canvasSize * scaleFactor;
        const ar = img.width / img.height;
        let dw, dh;
        
        if (ar > 1) {
            dw = drawSize;
            dh = drawSize / ar;
        } else {
            dh = drawSize;
            dw = drawSize * ar;
        }
        
        const ox = (canvasSize - dw) / 2;
        const oy = (canvasSize - dh) / 2;
        ctx.drawImage(img, ox, oy, dw, dh);
    }

    function drawMonoImage(ctx, img, size) {
        const temp = document.createElement('canvas');
        temp.width = size;
        temp.height = size;
        const tctx = temp.getContext('2d');
        drawScaledImage(tctx, img, size);
        tctx.globalCompositeOperation = 'source-in';
        tctx.fillStyle = '#ffffff';
        tctx.fillRect(0, 0, size, size);
        ctx.drawImage(temp, 0, 0);
    }

    function drawAutoMono(ctx, img, size) {
        const temp = document.createElement('canvas');
        temp.width = size;
        temp.height = size;
        const tctx = temp.getContext('2d');
        drawScaledImage(tctx, img, size);
        
        const imageData = tctx.getImageData(0, 0, size, size);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] > 20) {
                data[i] = 255;
                data[i + 1] = 255;
                data[i + 2] = 255;
            }
        }
        tctx.putImageData(imageData, 0, 0);
        ctx.drawImage(temp, 0, 0);
    }

    function updateAppNameDisplays() {
        const label = $('phoneAppLabel');
        if (label) label.textContent = state.appName;
        if (DOM.tvBannerTitle) DOM.tvBannerTitle.textContent = state.appName;
        updateTVPreview();
    }

    function updateClock() {
        const now = new Date();
        const h = now.getHours().toString().padStart(2, '0');
        const m = now.getMinutes().toString().padStart(2, '0');
        const time = `${h}:${m}`;

        if (DOM.clockDisplay) DOM.clockDisplay.textContent = time;
        if (DOM.statusTime) DOM.statusTime.textContent = time;
        if (DOM.tvTime) DOM.tvTime.textContent = time;

        if (DOM.clockDate) {
            DOM.clockDate.textContent = now.toLocaleDateString(state.currentLang, {
                weekday: 'long', month: 'short', day: 'numeric'
            });
        }
    }

    function updateFileCount() {
        let count = 0, platforms = 0;
        
        if (state.exportAndroid) {
            count += 24;
            if (state.useMono) count += 6;
            platforms++;
        }
        if (state.exportIOS) { count += 14; platforms++; }
        if (state.exportWeb) { count += 12; platforms++; }
        if (state.exportTV) { count += 2; platforms++; }
        if (state.exportPlayStore) count += 1;

        if (DOM.totalFilesCount) DOM.totalFilesCount.textContent = count;
        if (DOM.platformCount) DOM.platformCount.textContent = platforms;
    }

    function updateFileTree() {
        if (!DOM.fileTree) return;
        
        const name = state.iconName || 'ic_launcher';
        let html = '';

        if (state.exportAndroid) {
            html += `
                <div class="file-item folder"><span class="material-symbols-rounded">folder</span><span>android/res/</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>mipmap-*/${escapeHtml(name)}.png</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>mipmap-*/${escapeHtml(name)}_round.png</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>mipmap-*/${escapeHtml(name)}_foreground.png</span></div>
            `;
            if (state.useMono) {
                html += `<div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>mipmap-*/${escapeHtml(name)}_monochrome.png</span></div>`;
            }
            html += `
                <div class="file-item file indent-1"><span class="material-symbols-rounded">code</span><span>values/${escapeHtml(name)}_background.xml</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">code</span><span>mipmap-anydpi-v26/${escapeHtml(name)}.xml</span></div>
            `;
        }

        if (state.exportTV) {
            html += `<div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>drawable-xhdpi/${escapeHtml(name)}_tv_banner.png</span></div>`;
        }

        if (state.exportPlayStore) {
            html += `<div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>android/playstore-icon.png</span></div>`;
        }

        if (state.exportIOS) {
            html += `
                <div class="file-item folder"><span class="material-symbols-rounded">folder</span><span>ios/AppIcon.appiconset/</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>Icon-*.png</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">code</span><span>Contents.json</span></div>
            `;
        }

        if (state.exportWeb) {
            html += `
                <div class="file-item folder"><span class="material-symbols-rounded">folder</span><span>web/</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>icons/icon-*.png</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">code</span><span>manifest.json</span></div>
                <div class="file-item file indent-1"><span class="material-symbols-rounded">image</span><span>favicon.png</span></div>
            `;
        }

        if (!html) {
            html = `<div class="file-item" style="color: var(--text-muted); font-style: italic;"><span class="material-symbols-rounded">info</span><span>No platforms selected</span></div>`;
        }

        DOM.fileTree.innerHTML = html;
    }

    function updateCodeSnippets() {
        $$('.code-dynamic').forEach(el => {
            if (el.id.includes('IconName')) el.textContent = state.iconName;
            if (el.id.includes('BgColor') || el.id.includes('ThemeColor')) el.textContent = state.bgColor;
            if (el.id.includes('AppName')) el.textContent = state.appName;
        });

        const adaptiveFile = $('adaptiveFileName');
        if (adaptiveFile) adaptiveFile.textContent = `${state.iconName}.xml`;
        
        const bgFile = $('bgColorFileName');
        if (bgFile) bgFile.textContent = `${state.iconName}_background.xml`;
    }

    function handleCopy(btn) {
        const targetId = btn.dataset.target;
        const codeBlock = $(targetId);
        if (!codeBlock) return;

        const code = codeBlock.querySelector('code');
        const text = code ? code.textContent : codeBlock.textContent;

        navigator.clipboard.writeText(text).then(() => {
            btn.classList.add('copied');
            const icon = btn.querySelector('.material-symbols-rounded');
            if (icon) icon.textContent = 'check';
            showToast(translations[state.currentLang]?.copied || 'Copied to clipboard!', 'success');

            setTimeout(() => {
                btn.classList.remove('copied');
                if (icon) icon.textContent = 'content_copy';
            }, 2000);
        }).catch(() => {
            showToast('Failed to copy', 'error');
        });
    }

    function updateProgress(value) {
        if (DOM.progressFill) {
            DOM.progressFill.style.width = Math.min(value, 100) + '%';
        }
        if (DOM.progressBar) {
            DOM.progressBar.setAttribute('aria-valuenow', Math.min(value, 100).toString());
        }
    }

    async function handleDownload() {
        const t = translations[state.currentLang] || translations.en;
        
        if (!state.foregroundImg) {
            showToast(t.error, 'error');
            return;
        }

        DOM.downloadBtn.disabled = true;
        DOM.downloadBtn.innerHTML = `<span class="material-symbols-rounded spinning">sync</span><span>${t.processing}</span>`;

        try {
            await generateZip();
            showToast(t.success, 'success');
        } catch (err) {
            console.error(err);
            showToast('Error: ' + err.message, 'error');
        }

        setTimeout(() => {
            DOM.downloadBtn.disabled = false;
            DOM.downloadBtn.innerHTML = `<span class="material-symbols-rounded">download</span><span data-i18n="downloadZip">${t.downloadZip}</span>`;
            updateProgress(0);
        }, 1500);
    }

    async function generateZip() {
        const zip = new JSZip();
        const name = state.iconName || 'ic_launcher';
        let progress = 0;

        const addProgress = (amt) => {
            progress += amt;
            updateProgress(progress);
        };

        if (state.exportAndroid) {
            for (const [density, sizes] of Object.entries(ANDROID_DENSITIES)) {
                zip.file(`android/res/mipmap-${density}/${name}.png`, await createLegacyIcon(sizes.legacy, false));
                zip.file(`android/res/mipmap-${density}/${name}_round.png`, await createLegacyIcon(sizes.legacy, true));
                zip.file(`android/res/mipmap-${density}/${name}_foreground.png`, await createAdaptiveForeground(sizes.adaptive));
                
                if (state.useMono) {
                    zip.file(`android/res/mipmap-${density}/${name}_monochrome.png`, await createMonochrome(sizes.adaptive));
                }
                addProgress(3);
            }

            const bgXml = `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="${name}_background">${state.bgColor}</color>\n</resources>`;
            zip.file(`android/res/values/${name}_background.xml`, bgXml);

            let adaptiveXml = `<?xml version="1.0" encoding="utf-8"?>\n<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">\n    <background android:drawable="@color/${name}_background"/>\n    <foreground android:drawable="@mipmap/${name}_foreground"/>`;
            if (state.useMono) {
                adaptiveXml += `\n    <monochrome android:drawable="@mipmap/${name}_monochrome"/>`;
            }
            adaptiveXml += `\n</adaptive-icon>`;
            
            zip.file(`android/res/mipmap-anydpi-v26/${name}.xml`, adaptiveXml);
            zip.file(`android/res/mipmap-anydpi-v26/${name}_round.xml`, adaptiveXml);
            addProgress(5);
        }

        if (state.exportIOS) {
            for (const size of IOS_SIZES) {
                zip.file(`ios/AppIcon.appiconset/Icon-${size}.png`, await createIOSIcon(size));
                addProgress(1);
            }
            zip.file('ios/AppIcon.appiconset/Contents.json', JSON.stringify(createIOSContentsJson(), null, 2));
        }

        if (state.exportWeb) {
            for (const size of WEB_SIZES) {
                zip.file(`web/icons/icon-${size}.png`, await createWebIcon(size));
                addProgress(1);
            }
            zip.file('web/manifest.json', JSON.stringify({
                name: state.appName,
                short_name: state.appName,
                icons: WEB_SIZES.map(s => ({
                    src: `icons/icon-${s}.png`,
                    sizes: `${s}x${s}`,
                    type: 'image/png',
                    purpose: 'any maskable'
                })),
                theme_color: state.bgColor,
                background_color: state.bgColor,
                display: 'standalone'
            }, null, 2));
            zip.file('web/favicon.png', await createWebIcon(32));
        }

        if (state.exportTV) {
            zip.file(`android/res/drawable-xhdpi/${name}_tv_banner.png`, await createTVBanner());
            zip.file(`android/res/drawable-xhdpi/${name}_tv_icon.png`, await createLegacyIcon(320, false));
            addProgress(5);
        }

        if (state.exportPlayStore) {
            zip.file('android/playstore-icon.png', await createPlayStoreIcon());
            addProgress(5);
        }

        updateProgress(100);
        const content = await zip.generateAsync({ type: 'blob', compression: 'DEFLATE', compressionOptions: { level: 9 } });
        saveAs(content, `${state.appName.toLowerCase().replace(/\s+/g, '_')}_icons.zip`);
    }

    function createLegacyIcon(size, isRound) {
        return new Promise(resolve => {
            const scale = size < 128 ? 4 : 2;
            const canvas = document.createElement('canvas');
            canvas.width = size * scale;
            canvas.height = size * scale;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            if (isRound) {
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2);
                ctx.fillStyle = state.bgColor;
                ctx.fill();
                ctx.clip();
            } else {
                ctx.fillStyle = state.bgColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            if (state.foregroundImg) {
                drawScaledImageToCanvas(ctx, state.foregroundImg, canvas.width);
            }

            const final = document.createElement('canvas');
            final.width = size;
            final.height = size;
            const fctx = final.getContext('2d');
            fctx.imageSmoothingEnabled = true;
            fctx.imageSmoothingQuality = 'high';
            fctx.drawImage(canvas, 0, 0, size, size);
            final.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function createAdaptiveForeground(size) {
        return new Promise(resolve => {
            const scale = size < 128 ? 4 : 2;
            const canvas = document.createElement('canvas');
            canvas.width = size * scale;
            canvas.height = size * scale;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            if (state.foregroundImg) {
                const safeZone = canvas.width * 0.6667;
                const scaleFactor = state.scale / 100;
                const drawSize = safeZone * scaleFactor;
                const ar = state.foregroundImg.width / state.foregroundImg.height;
                let dw, dh;

                if (ar > 1) {
                    dw = drawSize;
                    dh = drawSize / ar;
                } else {
                    dh = drawSize;
                    dw = drawSize * ar;
                }

                const ox = (canvas.width - dw) / 2;
                const oy = (canvas.height - dh) / 2;
                ctx.drawImage(state.foregroundImg, ox, oy, dw, dh);
            }

            const final = document.createElement('canvas');
            final.width = size;
            final.height = size;
            const fctx = final.getContext('2d');
            fctx.imageSmoothingEnabled = true;
            fctx.imageSmoothingQuality = 'high';
            fctx.drawImage(canvas, 0, 0, size, size);
            final.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function createMonochrome(size) {
        return new Promise(resolve => {
            const scale = size < 128 ? 4 : 2;
            const canvas = document.createElement('canvas');
            canvas.width = size * scale;
            canvas.height = size * scale;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            const img = state.monoImg || state.foregroundImg;
            if (img) {
                const safeZone = canvas.width * 0.6667;
                const scaleFactor = state.scale / 100;
                const drawSize = safeZone * scaleFactor;
                const ar = img.width / img.height;
                let dw, dh;

                if (ar > 1) {
                    dw = drawSize;
                    dh = drawSize / ar;
                } else {
                    dh = drawSize;
                    dw = drawSize * ar;
                }

                const ox = (canvas.width - dw) / 2;
                const oy = (canvas.height - dh) / 2;
                ctx.drawImage(img, ox, oy, dw, dh);

                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    if (data[i + 3] > 20) {
                        data[i] = 255;
                        data[i + 1] = 255;
                        data[i + 2] = 255;
                    }
                }
                ctx.putImageData(imageData, 0, 0);
            }

            const final = document.createElement('canvas');
            final.width = size;
            final.height = size;
            const fctx = final.getContext('2d');
            fctx.imageSmoothingEnabled = true;
            fctx.imageSmoothingQuality = 'high';
            fctx.drawImage(canvas, 0, 0, size, size);
            final.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function createIOSIcon(size) {
        return new Promise(resolve => {
            const scale = size < 128 ? 4 : 2;
            const canvas = document.createElement('canvas');
            canvas.width = size * scale;
            canvas.height = size * scale;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            ctx.fillStyle = state.bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (state.foregroundImg) {
                drawScaledImageToCanvas(ctx, state.foregroundImg, canvas.width);
            }

            const final = document.createElement('canvas');
            final.width = size;
            final.height = size;
            const fctx = final.getContext('2d');
            fctx.imageSmoothingEnabled = true;
            fctx.imageSmoothingQuality = 'high';
            fctx.drawImage(canvas, 0, 0, size, size);
            final.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function createWebIcon(size) {
        return createIOSIcon(size);
    }

    function createPlayStoreIcon() {
        return new Promise(resolve => {
            const size = 512;
            const scale = 2;
            const canvas = document.createElement('canvas');
            canvas.width = size * scale;
            canvas.height = size * scale;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            ctx.fillStyle = state.bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (state.foregroundImg) {
                drawScaledImageToCanvas(ctx, state.foregroundImg, canvas.width);
            }

            const final = document.createElement('canvas');
            final.width = size;
            final.height = size;
            const fctx = final.getContext('2d');
            fctx.imageSmoothingEnabled = true;
            fctx.imageSmoothingQuality = 'high';
            fctx.drawImage(canvas, 0, 0, size, size);
            final.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function createTVBanner() {
        return new Promise(resolve => {
            const scale = 2;
            const canvas = document.createElement('canvas');
            canvas.width = 320 * scale;
            canvas.height = 180 * scale;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            ctx.fillStyle = state.syncTvBgColor ? state.bgColor : state.tvBgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (state.tvBannerImg) {
                const imgScale = Math.max(canvas.width / state.tvBannerImg.width, canvas.height / state.tvBannerImg.height);
                const w = state.tvBannerImg.width * imgScale;
                const h = state.tvBannerImg.height * imgScale;
                ctx.drawImage(state.tvBannerImg, (canvas.width - w) / 2, (canvas.height - h) / 2, w, h);
            } else if (state.foregroundImg) {
                const iconSize = 160 * (state.scale / 100);
                const ar = state.foregroundImg.width / state.foregroundImg.height;
                let dw = ar > 1 ? iconSize : iconSize * ar;
                let dh = ar > 1 ? iconSize / ar : iconSize;
                
                const iconX = (canvas.width - dw) / 2;
                const iconY = (canvas.height - dh) / 2 - 30;
                
                ctx.drawImage(state.foregroundImg, iconX, iconY, dw, dh);
                
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 36px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'top';
                ctx.fillText(state.appName, canvas.width / 2, iconY + dh + 20);
            }

            const final = document.createElement('canvas');
            final.width = 320;
            final.height = 180;
            const fctx = final.getContext('2d');
            fctx.imageSmoothingEnabled = true;
            fctx.imageSmoothingQuality = 'high';
            fctx.drawImage(canvas, 0, 0, 320, 180);
            final.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function drawScaledImageToCanvas(ctx, img, canvasSize) {
        const scaleFactor = state.scale / 100;
        const drawSize = canvasSize * scaleFactor;
        const ar = img.width / img.height;
        let dw, dh;

        if (ar > 1) {
            dw = drawSize;
            dh = drawSize / ar;
        } else {
            dh = drawSize;
            dw = drawSize * ar;
        }

        const ox = (canvasSize - dw) / 2;
        const oy = (canvasSize - dh) / 2;
        ctx.drawImage(img, ox, oy, dw, dh);
    }

    function createIOSContentsJson() {
        return {
            images: [
                { size: "20x20", idiom: "iphone", scale: "2x", filename: "Icon-40.png" },
                { size: "20x20", idiom: "iphone", scale: "3x", filename: "Icon-60.png" },
                { size: "29x29", idiom: "iphone", scale: "2x", filename: "Icon-58.png" },
                { size: "29x29", idiom: "iphone", scale: "3x", filename: "Icon-87.png" },
                { size: "40x40", idiom: "iphone", scale: "2x", filename: "Icon-80.png" },
                { size: "40x40", idiom: "iphone", scale: "3x", filename: "Icon-120.png" },
                { size: "60x60", idiom: "iphone", scale: "2x", filename: "Icon-120.png" },
                { size: "60x60", idiom: "iphone", scale: "3x", filename: "Icon-180.png" },
                { size: "20x20", idiom: "ipad", scale: "1x", filename: "Icon-20.png" },
                { size: "20x20", idiom: "ipad", scale: "2x", filename: "Icon-40.png" },
                { size: "29x29", idiom: "ipad", scale: "1x", filename: "Icon-29.png" },
                { size: "29x29", idiom: "ipad", scale: "2x", filename: "Icon-58.png" },
                { size: "40x40", idiom: "ipad", scale: "1x", filename: "Icon-40.png" },
                { size: "40x40", idiom: "ipad", scale: "2x", filename: "Icon-80.png" },
                { size: "76x76", idiom: "ipad", scale: "1x", filename: "Icon-76.png" },
                { size: "76x76", idiom: "ipad", scale: "2x", filename: "Icon-152.png" },
                { size: "83.5x83.5", idiom: "ipad", scale: "2x", filename: "Icon-167.png" },
                { size: "1024x1024", idiom: "ios-marketing", scale: "1x", filename: "Icon-1024.png" }
            ],
            info: { version: 1, author: "Icon Studio" }
        };
    }

    function showToast(message, type = 'success') {
        if (toastTimeout) clearTimeout(toastTimeout);
        
        if (DOM.toastMessage) DOM.toastMessage.textContent = message;
        if (DOM.toast) DOM.toast.className = `toast ${type}`;
        
        const icons = { success: 'check_circle', error: 'error', info: 'info' };
        if (DOM.toastIcon) DOM.toastIcon.textContent = icons[type] || 'check_circle';

        if (DOM.toast) {
            void DOM.toast.offsetWidth;
            DOM.toast.classList.add('show');
        }
        
        toastTimeout = setTimeout(() => {
            if (DOM.toast) DOM.toast.classList.remove('show');
        }, 3000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
