(function() {
    'use strict';

    const ICON_BASE_PATH = './icons/';

    const GRID_APPS = [
        { id: 'gmail', name: 'Gmail', file: 'gmail.png', mono: 'gmail_mono.png', color: '#EA4335' },
        { id: 'maps', name: 'Maps', file: 'maps.png', mono: 'maps_mono.png', color: '#34A853' },
        { id: 'photos', name: 'Photos', file: 'photos.png', mono: 'photos_mono.png', color: '#4285F4' },
        { id: 'chrome', name: 'Chrome', file: 'chrome.png', mono: 'chrome_mono.png', color: '#4285F4' },
        { id: 'youtube', name: 'YouTube', file: 'youtube.png', mono: 'youtube_mono.png', color: '#FF0000' },
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
        { id: 'netflix', name: 'Netflix', file: 'netflix.png', color: '#E50914' },
        { id: 'youtube', name: 'YouTube', file: 'youtube.png', color: '#FF0000' },
        { id: 'prime', name: 'Prime Video', file: 'prime.png', color: '#00A8E1' },
        { id: 'spotify', name: 'Spotify', file: 'spotify.png', color: '#1DB954' },
        { id: 'twitch', name: 'Twitch', file: 'twitch.png', color: '#9146FF' }
    ];

    const translations = {
        en: {
            appTitle: "Icon Studio",
            configuration: "Configuration",
            tabIcon: "Icon",
            tabTV: "TV Banner",
            appName: "App Name",
            iconFileName: "Icon File Name",
            foregroundSection: "FOREGROUND",
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
            tvBannerSection: "TV BANNER (320×180)",
            uploadTvBanner: "Upload TV Banner",
            tvHint: "If not uploaded, will generate from icon automatically",
            tvApps: "Apps",
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
            processing: "Processing...",
            success: "ZIP downloaded successfully!",
            error: "Please upload a foreground image first",
            loaded: "Image loaded!",
            copied: "Copied to clipboard!",
            dateDisplay: "Sunday, Jan 14"
        },
        tr: {
            appTitle: "İkon Stüdyosu",
            configuration: "Yapılandırma",
            tabIcon: "İkon",
            tabTV: "TV Banner",
            appName: "Uygulama Adı",
            iconFileName: "İkon Dosya Adı",
            foregroundSection: "ÖN PLAN",
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
            tvBannerSection: "TV BANNER (320×180)",
            uploadTvBanner: "TV Banner Yükle",
            tvHint: "Yüklenmezse ikondan otomatik oluşturulur",
            tvApps: "Uygulamalar",
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
            processing: "İşleniyor...",
            success: "ZIP başarıyla indirildi!",
            error: "Lütfen önce bir ön plan görseli yükleyin",
            loaded: "Görsel yüklendi!",
            copied: "Panoya kopyalandı!",
            dateDisplay: "Pazar, 14 Ocak"
        },
        ja: {
            appTitle: "アイコンスタジオ",
            configuration: "設定",
            tabIcon: "アイコン",
            tabTV: "TVバナー",
            appName: "アプリ名",
            iconFileName: "アイコンファイル名",
            foregroundSection: "フォアグラウンド",
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
            tvBannerSection: "TVバナー (320×180)",
            uploadTvBanner: "TVバナーをアップロード",
            tvHint: "アップロードしない場合、アイコンから自動生成",
            tvApps: "アプリ",
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
            processing: "処理中...",
            success: "ZIPのダウンロードが完了しました！",
            error: "最初にフォアグラウンド画像をアップロードしてください",
            loaded: "画像を読み込みました！",
            copied: "クリップボードにコピーしました！",
            dateDisplay: "1月14日 日曜日"
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
        currentMobilePanel: 'config'
    };

    let DOM = {};
    let toastTimeout;

    function cacheDOMElements() {
        DOM = {
            langSelect: document.getElementById('langSelect'),
            mobileMenuBtn: document.getElementById('mobileMenuBtn'),
            mobileNav: document.getElementById('mobileNav'),
            mobileNavItems: document.querySelectorAll('.mobile-nav-item'),
            configPanel: document.getElementById('configPanel'),
            previewPanel: document.getElementById('previewPanel'),
            exportPanel: document.getElementById('exportPanel'),
            codePanel: document.getElementById('codePanel'),
            tabs: document.querySelectorAll('.tab'),
            iconTab: document.getElementById('iconTab'),
            tvTab: document.getElementById('tvTab'),
            appNameInput: document.getElementById('appNameInput'),
            iconNameInput: document.getElementById('iconNameInput'),
            bgColorPicker: document.getElementById('bgColorPicker'),
            bgColorText: document.getElementById('bgColorText'),
            tvBgColorPicker: document.getElementById('tvBgColorPicker'),
            tvBgColorText: document.getElementById('tvBgColorText'),
            syncTvBgColor: document.getElementById('syncTvBgColor'),
            scaleSlider: document.getElementById('scaleSlider'),
            scaleValue: document.getElementById('scaleValue'),
            resetScaleBtn: document.getElementById('resetScaleBtn'),
            monoToggle: document.getElementById('monoToggle'),
            monoSection: document.getElementById('monoSection'),
            monoStatus: document.getElementById('monoStatus'),
            foregroundUpload: document.getElementById('foregroundUpload'),
            foregroundFile: document.getElementById('foregroundFile'),
            foregroundPreview: document.getElementById('foregroundPreview'),
            monoUpload: document.getElementById('monoUpload'),
            monoFile: document.getElementById('monoFile'),
            tvBannerUpload: document.getElementById('tvBannerUpload'),
            tvBannerFile: document.getElementById('tvBannerFile'),
            tvBannerPreview: document.getElementById('tvBannerPreview'),
            colorPresets: document.querySelectorAll('.color-preset'),
            shapeOptions: document.querySelectorAll('.shape-option'),
            segmentBtns: document.querySelectorAll('.segment-btn'),
            previewContainer: document.querySelector('.preview-container'),
            previewHint: document.getElementById('previewHint'),
            phoneFrame: document.getElementById('phoneFrame'),
            phoneScreen: document.getElementById('phoneScreen'),
            appGrid: document.getElementById('appGrid'),
            phoneDock: document.getElementById('phoneDock'),
            clockDisplay: document.getElementById('clockDisplay'),
            clockDate: document.getElementById('clockDate'),
            statusTime: document.getElementById('statusTime'),
            tvFrame: document.getElementById('tvFrame'),
            tvScreen: document.getElementById('tvScreen'),
            tvAppList: document.getElementById('tvAppList'),
            tvAppRow: document.getElementById('tvAppRow'),
            tvPreviewCanvas: document.getElementById('tvPreviewCanvas'),
            tvBannerTitle: document.getElementById('tvBannerTitle'),
            tvTime: document.getElementById('tvTime'),
            exportAndroid: document.getElementById('exportAndroid'),
            exportIOS: document.getElementById('exportIOS'),
            exportWeb: document.getElementById('exportWeb'),
            exportTV: document.getElementById('exportTV'),
            exportPlayStore: document.getElementById('exportPlayStore'),
            totalFilesCount: document.getElementById('totalFilesCount'),
            platformCount: document.getElementById('platformCount'),
            fileTree: document.getElementById('fileTree'),
            downloadBtn: document.getElementById('downloadBtn'),
            progressFill: document.getElementById('progressFill'),
            copyBtns: document.querySelectorAll('.copy-btn'),
            toast: document.getElementById('toast'),
            toastIcon: document.getElementById('toastIcon'),
            toastMessage: document.getElementById('toastMessage'),
            processCanvas: document.getElementById('processCanvas')
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
        updateAllPreviews();
        updateFileCount();
        updateCodeSnippets();
        checkMobileView();
        toggleTvInputsState();
    }

    function setupEventListeners() {
        DOM.langSelect.addEventListener('change', handleLanguageChange);
        
        DOM.mobileMenuBtn.addEventListener('click', () => {
            DOM.langSelect.focus();
            DOM.langSelect.click();
        });

        DOM.mobileNavItems.forEach(item => {
            item.addEventListener('click', handleMobileNavClick);
        });
        
        window.addEventListener('resize', checkMobileView);
        
        DOM.tabs.forEach(tab => {
            tab.addEventListener('click', handleTabClick);
        });
        
        DOM.appNameInput.addEventListener('input', handleAppNameChange);
        DOM.iconNameInput.addEventListener('input', handleIconNameChange);
        
        DOM.bgColorPicker.addEventListener('input', handleBgColorChange);
        DOM.bgColorText.addEventListener('input', handleBgColorTextChange);
        
        if (DOM.tvBgColorPicker) {
            DOM.tvBgColorPicker.addEventListener('input', handleTvBgColorChange);
        }
        if (DOM.tvBgColorText) {
            DOM.tvBgColorText.addEventListener('input', handleTvBgColorTextChange);
        }
        if (DOM.syncTvBgColor) {
            DOM.syncTvBgColor.addEventListener('change', handleSyncTvBgColorChange);
        }
        
        DOM.colorPresets.forEach(preset => {
            preset.addEventListener('click', handleColorPresetClick);
        });
        
        if (DOM.scaleSlider) {
            DOM.scaleSlider.addEventListener('input', handleScaleChange);
        }
        
        if (DOM.resetScaleBtn) {
            DOM.resetScaleBtn.addEventListener('click', handleResetScale);
        }
        
        DOM.shapeOptions.forEach(option => {
            option.addEventListener('click', handleShapeChange);
        });
        
        DOM.monoToggle.addEventListener('change', handleMonoToggle);
        
        setupUploadZone(DOM.foregroundUpload, DOM.foregroundFile, DOM.foregroundPreview, handleForegroundUpload);
        setupUploadZone(DOM.monoUpload, DOM.monoFile, null, handleMonoUpload);
        setupUploadZone(DOM.tvBannerUpload, DOM.tvBannerFile, DOM.tvBannerPreview, handleTvBannerUpload);
        
        DOM.segmentBtns.forEach(btn => {
            if (btn.dataset.mode) {
                btn.addEventListener('click', handlePreviewModeChange);
            } else if (btn.dataset.theme) {
                btn.addEventListener('click', handleThemeChange);
            }
        });
        
        [DOM.exportAndroid, DOM.exportIOS, DOM.exportWeb, DOM.exportTV, DOM.exportPlayStore].forEach(el => {
            if (el) el.addEventListener('change', () => {
                state[el.id] = el.checked;
                updateFileCount();
            });
        });
        
        DOM.downloadBtn.addEventListener('click', handleDownload);
        
        DOM.copyBtns.forEach(btn => {
            btn.addEventListener('click', handleCopyClick);
        });
    }

    function setupUploadZone(zone, input, previewEl, callback) {
        if (!zone || !input) return;
        
        zone.addEventListener('click', () => input.click());
        
        input.addEventListener('change', (e) => {
            if (e.target.files.length) {
                handleImageFile(e.target.files[0], zone, previewEl, callback);
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
            if (e.dataTransfer.files.length) {
                handleImageFile(e.dataTransfer.files[0], zone, previewEl, callback);
            }
        });
    }

    function handleImageFile(file, zone, previewEl, callback) {
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
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    function handleLanguageChange(e) {
        state.currentLang = e.target.value;
        updateTranslations();
        updateClock();
    }

    function handleMobileNavClick(e) {
        const item = e.currentTarget;
        const panel = item.dataset.panel;
        
        DOM.mobileNavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        state.currentMobilePanel = panel;
        updateMobilePanels();
    }

    function handleTabClick(e) {
        const tab = e.currentTarget;
        const tabId = tab.dataset.tab;
        
        DOM.tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        state.currentTab = tabId;
        
        DOM.iconTab.classList.toggle('active', tabId === 'icon');
        DOM.tvTab.classList.toggle('active', tabId === 'tv');
        DOM.iconTab.style.display = tabId === 'icon' ? 'flex' : 'none';
        DOM.tvTab.style.display = tabId === 'tv' ? 'flex' : 'none';
    }

    function handleAppNameChange(e) {
        state.appName = e.target.value || 'MyApp';
        updateAppNameDisplays();
        updateCodeSnippets();
    }

    function handleIconNameChange(e) {
        state.iconName = e.target.value || 'ic_launcher';
        updateCodeSnippets();
    }

    function handleBgColorChange(e) {
        updateBgColor(e.target.value);
    }

    function handleBgColorTextChange(e) {
        const val = e.target.value;
        if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
            updateBgColor(val);
        }
    }

    function updateBgColor(color) {
        state.bgColor = color;
        DOM.bgColorPicker.value = color;
        DOM.bgColorText.value = color;
        
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
            DOM.syncTvBgColor.checked = false;
            toggleTvInputsState();
        }
        state.tvBgColor = e.target.value;
        DOM.tvBgColorText.value = e.target.value;
        updateTVPreview();
    }

    function handleTvBgColorTextChange(e) {
        const val = e.target.value;
        if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
            if (state.syncTvBgColor) {
                state.syncTvBgColor = false;
                DOM.syncTvBgColor.checked = false;
                toggleTvInputsState();
            }
            state.tvBgColor = val;
            DOM.tvBgColorPicker.value = val;
            updateTVPreview();
        }
    }

    function handleSyncTvBgColorChange(e) {
        state.syncTvBgColor = e.target.checked;
        if (state.syncTvBgColor) {
            updateBgColor(state.bgColor);
        }
        toggleTvInputsState();
    }

    function toggleTvInputsState() {
        const opacity = state.syncTvBgColor ? '0.5' : '1';
        const pointerEvents = state.syncTvBgColor ? 'none' : 'auto';
        
        const row = document.getElementById('tvColorRow');
        if (row) {
            row.style.opacity = opacity;
            row.style.pointerEvents = pointerEvents;
        }
        
        if (DOM.tvBgColorPicker) DOM.tvBgColorPicker.disabled = state.syncTvBgColor;
        if (DOM.tvBgColorText) DOM.tvBgColorText.disabled = state.syncTvBgColor;
    }

    function handleColorPresetClick(e) {
        updateBgColor(e.currentTarget.dataset.color);
    }

    function handleScaleChange(e) {
        state.scale = parseInt(e.target.value);
        updateScaleDisplay();
        updateAllPreviews();
    }

    function handleResetScale() {
        state.scale = 100;
        if (DOM.scaleSlider) {
            DOM.scaleSlider.value = 100;
        }
        updateScaleDisplay();
        updateAllPreviews();
    }

    function updateScaleDisplay() {
        if (DOM.scaleValue) {
            DOM.scaleValue.textContent = state.scale + '%';
        }
    }

    function handleShapeChange(e) {
        const option = e.currentTarget;
        DOM.shapeOptions.forEach(o => {
            o.classList.toggle('active', o.dataset.shape === option.dataset.shape);
        });
        state.shape = option.dataset.shape;
        updateIconShapes();
    }

    function handleMonoToggle(e) {
        state.useMono = e.target.checked;
        DOM.monoSection.style.display = e.target.checked ? 'block' : 'none';
        
        if (!e.target.checked) {
            state.isThemed = false;
            updateThemeUI();
        }
        updateAllPreviews();
    }

    function handleForegroundUpload(img) {
        state.foregroundImg = img;
        updateAllPreviews();
        showToast(translations[state.currentLang].loaded, 'success');
    }

    function handleMonoUpload(img) {
        state.monoImg = img;
        DOM.monoUpload.classList.add('active');
        DOM.monoStatus.style.opacity = '1';
        updatePhonePreview();
    }

    function handleTvBannerUpload(img) {
        state.tvBannerImg = img;
        updateTVPreview();
        showToast(translations[state.currentLang].loaded, 'success');
    }

    function handlePreviewModeChange(e) {
        const btn = e.currentTarget;
        const mode = btn.dataset.mode;
        
        document.querySelectorAll('.segment-btn[data-mode]').forEach(b => {
            b.classList.toggle('active', b.dataset.mode === mode);
        });
        
        state.currentPreviewMode = mode;
        DOM.phoneFrame.classList.toggle('hidden', mode !== 'phone');
        DOM.tvFrame.classList.toggle('hidden', mode !== 'tv');
        
        const t = translations[state.currentLang];
        DOM.previewHint.textContent = mode === 'tv' ? t.tvHint : t.previewHint;
    }

    function handleThemeChange(e) {
        const btn = e.currentTarget;
        const theme = btn.dataset.theme;
        
        if (theme === 'themed' && !state.useMono) {
            showToast("Enable Mono Icon in Config first", "error");
            return;
        }

        state.isThemed = (theme === 'themed');
        updateThemeUI();
    }
    
    function updateThemeUI() {
        document.querySelectorAll('.segment-btn[data-theme]').forEach(b => {
            b.classList.toggle('active', (b.dataset.theme === 'themed') === state.isThemed);
        });
        DOM.phoneScreen.classList.toggle('themed', state.isThemed);
        updatePhonePreview();
    }

    function handleCopyClick(e) {
        const btn = e.currentTarget;
        const targetId = btn.dataset.target;
        const codeBlock = document.getElementById(targetId);
        
        if (!codeBlock) return;
        
        const code = codeBlock.querySelector('code');
        const text = code ? code.textContent : codeBlock.textContent;
        
        navigator.clipboard.writeText(text).then(() => {
            btn.classList.add('copied');
            btn.querySelector('.material-symbols-rounded').textContent = 'check';
            showToast(translations[state.currentLang].copied, 'success');
            
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.querySelector('.material-symbols-rounded').textContent = 'content_copy';
            }, 2000);
        });
    }

    async function handleDownload() {
        if (!state.foregroundImg) {
            showToast(translations[state.currentLang].error, 'error');
            return;
        }
        
        DOM.downloadBtn.disabled = true;
        DOM.downloadBtn.innerHTML = `
            <span class="material-symbols-rounded spinning">sync</span>
            <span>${translations[state.currentLang].processing}</span>
        `;
        
        try {
            await generateAndDownloadZip();
            showToast(translations[state.currentLang].success, 'success');
        } catch (error) {
            console.error('Download error:', error);
            showToast('Error: ' + error.message, 'error');
        }
        
        setTimeout(() => {
            DOM.downloadBtn.disabled = false;
            DOM.downloadBtn.innerHTML = `
                <span class="material-symbols-rounded">download</span>
                <span data-i18n="downloadZip">${translations[state.currentLang].downloadZip}</span>
            `;
            DOM.progressFill.style.width = '0%';
        }, 1500);
    }

    function renderPhoneApps() {
        const appsBefore = GRID_APPS.slice(0, 4);
        const appsAfter = GRID_APPS.slice(4);

        let html = '';
        appsBefore.forEach(app => html += generateAppHtml(app));

        html += `
            <div class="app-item">
                <div class="app-icon user-icon ${state.shape}" id="userAppIcon">
                    <canvas id="phonePreviewCanvas" width="100" height="100"></canvas>
                </div>
                <span class="app-label" id="phoneAppLabel">${state.appName}</span>
            </div>
        `;

        appsAfter.forEach(app => html += generateAppHtml(app));
        DOM.appGrid.innerHTML = html;
        updatePhonePreview();
    }

    function generateAppHtml(app) {
        return `
            <div class="app-item">
                <div class="app-icon ${state.shape}" style="background: ${app.color}">
                    <img class="icon-color" src="${ICON_BASE_PATH}${app.file}" alt="${app.name}" 
                         onerror="this.style.display='none'">
                    <img class="icon-mono" src="${ICON_BASE_PATH}${app.mono}" alt="${app.name} Mono" 
                         onerror="this.style.display='none'">
                </div>
                <span class="app-label">${app.name}</span>
            </div>
        `;
    }

    function renderDockIcons() {
        let html = '';
        DOCK_ICONS.forEach(app => {
            html += `
                <div class="dock-icon" style="background: ${app.color}">
                    <img class="icon-color" src="${ICON_BASE_PATH}${app.file}" alt="${app.name}"
                         onerror="this.style.display='none'">
                    <img class="icon-mono" src="${ICON_BASE_PATH}${app.mono}" alt="${app.name} Mono" 
                         onerror="this.style.display='none'">
                </div>
            `;
        });
        DOM.phoneDock.innerHTML = html;
    }

    function renderTVApps() {
        let sidebarHtml = '';
        TV_APPS.forEach((app, index) => {
            sidebarHtml += `
                <div class="tv-app-item ${index === 0 ? 'active' : ''}" data-app="${app.id}">
                    <div class="tv-app-icon" style="background: ${app.color}">
                        <img src="${ICON_BASE_PATH}${app.file}" alt="${app.name}" onerror="this.style.display='none'">
                    </div>
                    <span class="tv-app-name">${app.name}</span>
                </div>
            `;
        });
        
        sidebarHtml += `
            <div class="tv-app-item" data-app="user">
                <div class="tv-app-icon" id="tvSidebarUserIcon">
                    <canvas id="tvSidebarCanvas" width="32" height="32"></canvas>
                </div>
                <span class="tv-app-name" id="tvSidebarAppName">${state.appName}</span>
            </div>
        `;
        DOM.tvAppList.innerHTML = sidebarHtml;
        
        let rowHtml = `
            <div class="tv-app-card" data-app="user">
                <div class="tv-app-card-icon" id="tvRowUserIcon">
                    <canvas id="tvRowCanvas" width="60" height="60"></canvas>
                </div>
                <span class="tv-app-card-name" id="tvRowAppName">${state.appName}</span>
            </div>
        `;
        
        TV_APPS.forEach(app => {
            rowHtml += `
                <div class="tv-app-card" data-app="${app.id}">
                    <div class="tv-app-card-icon" style="background: ${app.color}">
                        <img src="${ICON_BASE_PATH}${app.file}" alt="${app.name}" onerror="this.style.display='none'">
                    </div>
                    <span class="tv-app-card-name">${app.name}</span>
                </div>
            `;
        });
        
        DOM.tvAppRow.innerHTML = rowHtml;
        updateTVPreview();
    }

    function updateAllPreviews() {
        updatePhonePreview();
        updateTVPreview();
    }

    function updatePhonePreview() {
        const canvas = document.getElementById('phonePreviewCanvas');
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
                drawCenteredImage(ctx, state.foregroundImg, size, state.scale);
            }
        }
        
        if (DOM.phoneAppLabel) DOM.phoneAppLabel.textContent = state.appName;
    }

    function updateTVPreview() {
        const canvas = DOM.tvPreviewCanvas;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 320, 180);
        
        ctx.fillStyle = state.syncTvBgColor ? state.bgColor : state.tvBgColor;
        ctx.fillRect(0, 0, 320, 180);
        
        if (state.tvBannerImg) {
            const imgScale = Math.max(320 / state.tvBannerImg.width, 180 / state.tvBannerImg.height);
            const w = state.tvBannerImg.width * imgScale;
            const h = state.tvBannerImg.height * imgScale;
            ctx.drawImage(state.tvBannerImg, (320 - w) / 2, (180 - h) / 2, w, h);
        } else if (state.foregroundImg) {
            const iconSize = 70 * (state.scale / 100);
            const aspectRatio = state.foregroundImg.width / state.foregroundImg.height;
            let drawWidth = aspectRatio > 1 ? iconSize : iconSize * aspectRatio;
            let drawHeight = aspectRatio > 1 ? iconSize / aspectRatio : iconSize;
            
            ctx.drawImage(state.foregroundImg, (320 - drawWidth) / 2, 40, drawWidth, drawHeight);
            
            ctx.fillStyle = '#ffffff';
            ctx.font = '600 16px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(state.appName, 160, 140);
            
            ctx.font = '400 11px Inter, sans-serif';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fillText('Open App', 160, 158);
        }
        
        if (DOM.tvBannerTitle) DOM.tvBannerTitle.textContent = state.appName;
        
        updateSmallCanvas('tvSidebarCanvas', 32);
        updateSmallCanvas('tvRowCanvas', 60);
        
        if (DOM.tvSidebarAppName) DOM.tvSidebarAppName.textContent = state.appName;
        if (DOM.tvRowAppName) DOM.tvRowAppName.textContent = state.appName;
    }

    function updateSmallCanvas(id, size) {
        const canvas = document.getElementById(id);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, size, size);
        ctx.fillStyle = state.bgColor;
        ctx.fillRect(0, 0, size, size);
        
        if (state.foregroundImg) {
            drawCenteredImage(ctx, state.foregroundImg, size, state.scale);
        }
    }

    function drawCenteredImage(ctx, img, size, scalePercent = 100) {
        const scaleFactor = scalePercent / 100;
        const drawSize = size * scaleFactor;
        
        const aspectRatio = img.width / img.height;
        let drawWidth, drawHeight;
        
        if (aspectRatio > 1) {
            drawWidth = drawSize;
            drawHeight = drawSize / aspectRatio;
        } else {
            drawHeight = drawSize;
            drawWidth = drawSize * aspectRatio;
        }
        
        const offsetX = (size - drawWidth) / 2;
        const offsetY = (size - drawHeight) / 2;
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }

    function drawMonoImage(ctx, img, size) {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = size;
        tempCanvas.height = size;
        const tempCtx = tempCanvas.getContext('2d');
        
        drawCenteredImage(tempCtx, img, size, state.scale);
        
        tempCtx.globalCompositeOperation = 'source-in';
        tempCtx.fillStyle = '#ffffff';
        tempCtx.fillRect(0, 0, size, size);
        
        ctx.drawImage(tempCanvas, 0, 0);
    }

    function drawAutoMono(ctx, img, size) {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = size;
        tempCanvas.height = size;
        const tempCtx = tempCanvas.getContext('2d');
        
        drawCenteredImage(tempCtx, img, size, state.scale);
        
        const imageData = tempCtx.getImageData(0, 0, size, size);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
            if (data[i + 3] > 20) {
                data[i] = 255;
                data[i + 1] = 255;
                data[i + 2] = 255;
            }
        }
        
        tempCtx.putImageData(imageData, 0, 0);
        ctx.drawImage(tempCanvas, 0, 0);
    }

    function updateIconShapes() {
        document.querySelectorAll('.app-icon').forEach(icon => {
            icon.classList.remove('circle', 'squircle', 'rounded', 'square');
            icon.classList.add(state.shape);
        });
    }

    function updateColorPresets() {
        DOM.colorPresets.forEach(preset => {
            preset.classList.toggle('active', preset.dataset.color.toLowerCase() === state.bgColor.toLowerCase());
        });
    }

    function updateAppNameDisplays() {
        if (DOM.phoneAppLabel) DOM.phoneAppLabel.textContent = state.appName;
        if (DOM.tvSidebarAppName) DOM.tvSidebarAppName.textContent = state.appName;
        if (DOM.tvRowAppName) DOM.tvRowAppName.textContent = state.appName;
        if (DOM.tvBannerTitle) DOM.tvBannerTitle.textContent = state.appName;
        updateTVPreview();
    }

    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;
        
        if (DOM.clockDisplay) DOM.clockDisplay.textContent = time;
        if (DOM.statusTime) DOM.statusTime.textContent = time;
        if (DOM.tvTime) DOM.tvTime.textContent = time;
        
        if (DOM.clockDate) {
            const dateOptions = { weekday: 'long', month: 'short', day: 'numeric' };
            DOM.clockDate.textContent = now.toLocaleDateString(state.currentLang, dateOptions);
        }
    }

    function updateTranslations() {
        const t = translations[state.currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.textContent = t[key];
        });
    }

    function updateFileCount() {
        let count = 0;
        let platforms = 0;
        
        if (state.exportAndroid) { 
            count += 20;
            if (state.useMono) count += 5;
            platforms++; 
        }
        if (state.exportIOS) { count += 14; platforms++; }
        if (state.exportWeb) { count += 12; platforms++; }
        if (state.exportTV) { count += 2; platforms++; }
        if (state.exportPlayStore) { count += 1; }
        
        DOM.totalFilesCount.textContent = count;
        DOM.platformCount.textContent = platforms;
    }

    function updateCodeSnippets() {
        document.querySelectorAll('.code-dynamic').forEach(el => {
            if (el.id.includes('IconName')) el.textContent = state.iconName;
            if (el.id.includes('BgColor') || el.id.includes('ThemeColor')) el.textContent = state.bgColor;
            if (el.id.includes('AppName')) el.textContent = state.appName;
        });
        
        const adaptiveXml = document.getElementById('adaptiveIconFileName');
        if (adaptiveXml) adaptiveXml.textContent = `${state.iconName}.xml`;
        
        const bgXml = document.getElementById('bgColorFileName');
        if (bgXml) bgXml.textContent = `${state.iconName}_background.xml`;
    }

    function checkMobileView() {
        const isMobile = window.innerWidth <= 768;
        if (isMobile) {
            updateMobilePanels();
        } else {
            [DOM.configPanel, DOM.previewPanel, DOM.exportPanel, DOM.codePanel].forEach(p => {
                if (p) {
                    p.classList.remove('active');
                    p.style.display = '';
                }
            });
        }
    }

    function updateMobilePanels() {
        const panels = {
            config: DOM.configPanel,
            preview: DOM.previewPanel,
            export: DOM.exportPanel,
            code: DOM.codePanel
        };
        
        Object.entries(panels).forEach(([key, panel]) => {
            if (panel) {
                const isActive = key === state.currentMobilePanel;
                panel.classList.toggle('active', isActive);
                panel.style.display = isActive ? 'flex' : 'none';
            }
        });
    }

    function showToast(message, type = 'success') {
        if (toastTimeout) clearTimeout(toastTimeout);

        DOM.toastMessage.textContent = message;
        DOM.toast.className = `toast ${type}`;
        
        const icons = { success: 'check_circle', error: 'error', info: 'info' };
        DOM.toastIcon.textContent = icons[type] || icons.success;
        
        void DOM.toast.offsetWidth;
        
        DOM.toast.classList.add('show');
        toastTimeout = setTimeout(() => {
            DOM.toast.classList.remove('show');
        }, 3000);
    }

    async function generateAndDownloadZip() {
        const zip = new JSZip();
        const iconName = state.iconName || 'ic_launcher';
        let progress = 0;
        
        const updateProgress = (amount) => {
            progress += amount;
            DOM.progressFill.style.width = Math.min(progress, 100) + '%';
        };
        
        const densities = {
            'mdpi': { legacy: 48, adaptive: 108 },
            'hdpi': { legacy: 72, adaptive: 162 },
            'xhdpi': { legacy: 96, adaptive: 216 },
            'xxhdpi': { legacy: 144, adaptive: 324 },
            'xxxhdpi': { legacy: 192, adaptive: 432 }
        };
        
        if (state.exportAndroid) {
            for (const [density, sizes] of Object.entries(densities)) {
                zip.file(`android/res/mipmap-${density}/${iconName}.png`, 
                    await generateHighQualityIcon(sizes.legacy, false));
                zip.file(`android/res/mipmap-${density}/${iconName}_round.png`, 
                    await generateHighQualityIcon(sizes.legacy, true));
                zip.file(`android/res/mipmap-${density}/${iconName}_foreground.png`, 
                    await generateHighQualityForeground(sizes.adaptive));
                
                if (state.useMono) {
                    zip.file(`android/res/mipmap-${density}/${iconName}_monochrome.png`, 
                        await generateHighQualityMonochrome(sizes.adaptive));
                }
                
                updateProgress(4);
            }
            
            const bgXml = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <color name="${iconName}_background">${state.bgColor}</color>
</resources>`;
            zip.file(`android/res/values/${iconName}_background.xml`, bgXml);
            
            let adaptiveXml = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/${iconName}_background"/>
    <foreground android:drawable="@mipmap/${iconName}_foreground"/>`;
            if (state.useMono) {
                adaptiveXml += `
    <monochrome android:drawable="@mipmap/${iconName}_monochrome"/>`;
            }
            adaptiveXml += `
</adaptive-icon>`;
            
            zip.file(`android/res/mipmap-anydpi-v26/${iconName}.xml`, adaptiveXml);
            zip.file(`android/res/mipmap-anydpi-v26/${iconName}_round.xml`, adaptiveXml);
            updateProgress(5);
        }
        
        if (state.exportIOS) {
            const iosSizes = [20, 29, 40, 58, 60, 76, 80, 87, 120, 152, 167, 180, 1024];
            for (const size of iosSizes) {
                zip.file(`ios/AppIcon.appiconset/Icon-${size}.png`, 
                    await generateHighQualityIcon(size, false, true));
                updateProgress(1.5);
            }
            zip.file('ios/AppIcon.appiconset/Contents.json', JSON.stringify(generateIOSContentsJson(), null, 2));
        }
        
        if (state.exportWeb) {
            const webSizes = [16, 32, 48, 72, 96, 128, 144, 192, 384, 512];
            for (const size of webSizes) {
                zip.file(`web/icons/icon-${size}.png`, 
                    await generateHighQualityIcon(size, false));
                updateProgress(1);
            }
            
            const manifest = {
                name: state.appName,
                short_name: state.appName,
                icons: webSizes.map(size => ({
                    src: `icons/icon-${size}.png`,
                    sizes: `${size}x${size}`,
                    type: 'image/png',
                    purpose: 'any maskable'
                })),
                theme_color: state.bgColor,
                background_color: state.bgColor,
                display: 'standalone'
            };
            zip.file('web/manifest.json', JSON.stringify(manifest, null, 2));
            zip.file('web/favicon.png', await generateHighQualityIcon(32, false));
        }
        
        if (state.exportTV) {
            zip.file(`android/res/drawable-xhdpi/${iconName}_tv_banner.png`, 
                await generateHighQualityTVBanner());
            zip.file(`android/res/drawable-xhdpi/${iconName}_tv_icon.png`, 
                await generateHighQualityIcon(320, false));
            updateProgress(5);
        }
        
        if (state.exportPlayStore) {
            zip.file('playstore-icon.png', await generateHighQualityIcon(512, false, true));
            updateProgress(5);
        }
        
        DOM.progressFill.style.width = '100%';
        const content = await zip.generateAsync({ 
            type: 'blob', 
            compression: 'DEFLATE', 
            compressionOptions: { level: 9 } 
        });
        const filename = `${state.appName.toLowerCase().replace(/\s+/g, '_')}_icons.zip`;
        saveAs(content, filename);
    }

    function generateHighQualityIcon(size, isRound = false, noAlpha = false) {
        return new Promise(resolve => {
            const upscale = size < 128 ? 4 : 2;
            const canvas = document.createElement('canvas');
            canvas.width = size * upscale;
            canvas.height = size * upscale;
            const ctx = canvas.getContext('2d');
            
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            if (noAlpha) {
                ctx.fillStyle = state.bgColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            } else if (isRound) {
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
                drawCenteredImage(ctx, state.foregroundImg, canvas.width, state.scale);
            }
            
            const finalCanvas = document.createElement('canvas');
            finalCanvas.width = size;
            finalCanvas.height = size;
            const finalCtx = finalCanvas.getContext('2d');
            finalCtx.imageSmoothingEnabled = true;
            finalCtx.imageSmoothingQuality = 'high';
            finalCtx.drawImage(canvas, 0, 0, size, size);
            
            finalCanvas.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function generateHighQualityForeground(size) {
        return new Promise(resolve => {
            const upscale = size < 128 ? 4 : 2;
            const canvas = document.createElement('canvas');
            canvas.width = size * upscale;
            canvas.height = size * upscale;
            const ctx = canvas.getContext('2d');
            
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            if (state.foregroundImg) {
                drawCenteredImage(ctx, state.foregroundImg, canvas.width, state.scale);
            }
            
            const finalCanvas = document.createElement('canvas');
            finalCanvas.width = size;
            finalCanvas.height = size;
            const finalCtx = finalCanvas.getContext('2d');
            finalCtx.imageSmoothingEnabled = true;
            finalCtx.imageSmoothingQuality = 'high';
            finalCtx.drawImage(canvas, 0, 0, size, size);
            
            finalCanvas.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function generateHighQualityMonochrome(size) {
        return new Promise(resolve => {
            const upscale = size < 128 ? 4 : 2;
            const canvas = document.createElement('canvas');
            canvas.width = size * upscale;
            canvas.height = size * upscale;
            const ctx = canvas.getContext('2d');
            
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            const img = state.monoImg || state.foregroundImg;
            if (img) {
                drawCenteredImage(ctx, img, canvas.width, state.scale);
                
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
            
            const finalCanvas = document.createElement('canvas');
            finalCanvas.width = size;
            finalCanvas.height = size;
            const finalCtx = finalCanvas.getContext('2d');
            finalCtx.imageSmoothingEnabled = true;
            finalCtx.imageSmoothingQuality = 'high';
            finalCtx.drawImage(canvas, 0, 0, size, size);
            
            finalCanvas.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function generateHighQualityTVBanner() {
        return new Promise(resolve => {
            const upscale = 2;
            const canvas = document.createElement('canvas');
            canvas.width = 320 * upscale;
            canvas.height = 180 * upscale;
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
                const iconSize = 140 * (state.scale / 100);
                const aspectRatio = state.foregroundImg.width / state.foregroundImg.height;
                let dw = aspectRatio > 1 ? iconSize : iconSize * aspectRatio;
                let dh = aspectRatio > 1 ? iconSize / aspectRatio : iconSize;
                
                ctx.drawImage(state.foregroundImg, (canvas.width - dw) / 2, 80, dw, dh);
                
                ctx.fillStyle = '#ffffff';
                ctx.font = '600 36px Inter, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText(state.appName, canvas.width / 2, 280);
            }
            
            const finalCanvas = document.createElement('canvas');
            finalCanvas.width = 320;
            finalCanvas.height = 180;
            const finalCtx = finalCanvas.getContext('2d');
            finalCtx.imageSmoothingEnabled = true;
            finalCtx.imageSmoothingQuality = 'high';
            finalCtx.drawImage(canvas, 0, 0, 320, 180);
            
            finalCanvas.toBlob(blob => resolve(blob), 'image/png', 1.0);
        });
    }

    function generateIOSContentsJson() {
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
            info: { version: 1, author: "Icon Studio Pro" }
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
