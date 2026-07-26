/* ==========================================================================
   ApexStudio Settings Controller Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- DOM References ---
    const htmlEl = document.documentElement;
    const settingsForm = document.getElementById('settings-form');
    const navTabs = document.querySelectorAll('.nav-tab');
    const panels = document.querySelectorAll('.settings-panel');

    // Form Inputs
    const usernameInput = document.getElementById('input-username');
    const emailInput = document.getElementById('input-email');
    const bioInput = document.getElementById('input-bio');
    const bioCharCount = document.getElementById('bio-char-count');

    // Preferences Inputs
    const themeCheckbox = document.getElementById('theme-mode-checkbox');
    const accentButtons = document.querySelectorAll('.accent-btn');
    const languageSelect = document.getElementById('select-lang');
    const densityRadios = document.querySelectorAll('input[name="density"]');

    // Notifications Inputs
    const notifyEmail = document.getElementById('toggle-email');
    const notifyPush = document.getElementById('toggle-push');
    const notifyDigest = document.getElementById('toggle-digest');
    const notifyUpdates = document.getElementById('toggle-updates');

    // Security Inputs
    const currentPassInput = document.getElementById('input-current-pass');
    const newPassInput = document.getElementById('input-new-pass');
    const confirmPassInput = document.getElementById('input-confirm-pass');
    const twoFactorToggle = document.getElementById('toggle-2fa');
    const passwordToggleBtns = document.querySelectorAll('.password-toggle-btn');

    // Avatar Elements
    const avatarOptions = document.querySelectorAll('.avatar-option');
    const profileAvatarPreview = document.getElementById('profile-avatar-preview');
    const headerAvatar = document.getElementById('header-avatar');
    const headerUserName = document.querySelector('.user-name-display');

    // Buttons & Toasts
    const btnReset = document.getElementById('btn-reset');
    const btnSubmit = document.getElementById('btn-submit');
    const btnText = btnSubmit.querySelector('.btn-text');
    const btnSpinner = btnSubmit.querySelector('.btn-spinner');
    const toastContainer = document.getElementById('toast-container');

    // --- SVGs for Avatars & Password visibility ---
    const avatarColors = {
        indigo: '#6366f1',
        emerald: '#10b981',
        rose: '#f43f5e',
        amber: '#f59e0b',
        violet: '#8b5cf6'
    };

    const eyeIconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pass-show-icon">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `;

    const eyeOffIconSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="pass-hide-icon">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
      <line x1="1" y1="1" x2="23" y2="23"></line>
    </svg>
  `;

    // Default values definition
    const defaults = {
        username: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Frontend designer and AI explorer. Crafting premium web layouts.',
        avatar: 'indigo',
        theme: 'dark',
        accent: 'indigo',
        language: 'en',
        density: 'comfortable',
        notifyEmail: true,
        notifyPush: false,
        notifyDigest: true,
        notifyUpdates: false,
        twoFactor: false
    };

    // --- Helper Functions ---

    // Generate Avatar Data URI dynamically based on initials and selected color theme
    function generateAvatarDataUri(initials, colorKey) {
        const colorHex = avatarColors[colorKey] || avatarColors.indigo;
        const cleanHex = encodeURIComponent(colorHex);
        return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='${cleanHex}'><circle cx='50' cy='50' r='50'/><text x='50%' y='55%' font-size='38' font-weight='bold' fill='white' font-family='sans-serif' text-anchor='middle' dominant-baseline='middle'>${initials}</text></svg>`;
    }

    // Get Initials from Username string
    function getInitials(name) {
        if (!name) return 'JD';
        const parts = name.trim().split(/\s+/);
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return name.slice(0, 2).toUpperCase();
    }

    // Update visual Avatar displays
    function updateAvatars(initials, colorKey) {
        const dataUri = generateAvatarDataUri(initials, colorKey);
        profileAvatarPreview.src = dataUri;
        headerAvatar.src = dataUri;
    }

    // Load configuration from LocalStorage (or load defaults)
    function loadSettings() {
        const saved = localStorage.getItem('apex_settings');
        const settings = saved ? JSON.parse(saved) : defaults;

        // Apply inputs values
        usernameInput.value = settings.username || '';
        emailInput.value = settings.email || '';
        bioInput.value = settings.bio || '';
        bioCharCount.textContent = bioInput.value.length;

        // Load Avatar selection
        const avatarKey = settings.avatar || 'indigo';
        avatarOptions.forEach(opt => {
            if (opt.getAttribute('data-avatar') === avatarKey) {
                opt.classList.add('active');
            } else {
                opt.classList.remove('active');
            }
        });

        // Apply styling tags (Theme + Accent)
        const themeKey = settings.theme || 'dark';
        themeCheckbox.checked = (themeKey === 'dark');
        htmlEl.setAttribute('data-theme', themeKey);

        const accentKey = settings.accent || 'indigo';
        htmlEl.setAttribute('data-accent', accentKey);
        accentButtons.forEach(btn => {
            if (btn.getAttribute('data-accent') === accentKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Preferences
        languageSelect.value = settings.language || 'en';

        // Layout Density
        const densityVal = settings.density || 'comfortable';
        htmlEl.setAttribute('data-density', densityVal);
        densityRadios.forEach(radio => {
            radio.checked = (radio.value === densityVal);
        });

        // Notifications
        notifyEmail.checked = !!settings.notifyEmail;
        notifyPush.checked = !!settings.notifyPush;
        notifyDigest.checked = !!settings.notifyDigest;
        notifyUpdates.checked = !!settings.notifyUpdates;

        // Security / Auth
        twoFactorToggle.checked = !!settings.twoFactor;
        currentPassInput.value = '';
        newPassInput.value = '';
        confirmPassInput.value = '';

        // Header Display Sync
        headerUserName.textContent = settings.username || 'User Account';

        // Render initial avatars
        const initials = getInitials(settings.username || 'JD');
        updateAvatars(initials, avatarKey);
    }

    // Save Config parameters to localStorage
    function saveSettings() {
        // Determine avatar color
        let activeAvatar = 'indigo';
        avatarOptions.forEach(opt => {
            if (opt.classList.contains('active')) {
                activeAvatar = opt.getAttribute('data-avatar');
            }
        });

        // Get checked accent
        let activeAccent = 'indigo';
        accentButtons.forEach(btn => {
            if (btn.classList.contains('active')) {
                activeAccent = btn.getAttribute('data-accent');
            }
        });

        // Layout Density
        let selectedDensity = 'comfortable';
        densityRadios.forEach(radio => {
            if (radio.checked) selectedDensity = radio.value;
        });

        const config = {
            username: usernameInput.value.trim(),
            email: emailInput.value.trim(),
            bio: bioInput.value,
            avatar: activeAvatar,
            theme: themeCheckbox.checked ? 'dark' : 'light',
            accent: activeAccent,
            language: languageSelect.value,
            density: selectedDensity,
            notifyEmail: notifyEmail.checked,
            notifyPush: notifyPush.checked,
            notifyDigest: notifyDigest.checked,
            notifyUpdates: notifyUpdates.checked,
            twoFactor: twoFactorToggle.checked
        };

        localStorage.setItem('apex_settings', JSON.stringify(config));

        // Update Header Display instantly
        headerUserName.textContent = config.username;
        updateAvatars(getInitials(config.username), config.avatar);
    }

    // Toast System Renderer
    function showToast(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        // Icons based on Toast Level
        let iconSvg = '';
        if (type === 'success') {
            iconSvg = `
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
        } else {
            iconSvg = `
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      `;
        }

        toast.innerHTML = `
      ${iconSvg}
      <span class="toast-message">${message}</span>
    `;

        toastContainer.appendChild(toast);

        // Fade out and remove after delay
        setTimeout(() => {
            toast.classList.add('fade-out');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 3500);
    }

    // Set visual Validation State on DOM
    function setFieldError(inputEl, errorEl, hasError, customText = null) {
        const formGroup = inputEl.closest('.form-group');
        if (hasError) {
            formGroup.classList.add('has-error');
            if (customText) errorEl.textContent = customText;
        } else {
            formGroup.classList.remove('has-error');
        }
    }

    // Validate form entries
    function validateForm() {
        let isValid = true;

        // 1. Username checks
        const username = usernameInput.value.trim();
        const errorUsername = document.getElementById('error-username');
        if (username.length < 3 || username.length > 20) {
            setFieldError(usernameInput, errorUsername, true);
            isValid = false;
        } else {
            setFieldError(usernameInput, errorUsername, false);
        }

        // 2. Email format checks
        const email = emailInput.value.trim();
        const errorEmail = document.getElementById('error-email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setFieldError(emailInput, errorEmail, true);
            isValid = false;
        } else {
            setFieldError(emailInput, errorEmail, false);
        }

        // 3. Password Reset checks (only evaluated if New Password input has content)
        const currentPass = currentPassInput.value;
        const newPass = newPassInput.value;
        const confirmPass = confirmPassInput.value;
        const errorNewPass = document.getElementById('error-new-pass');
        const errorConfirmPass = document.getElementById('error-confirm-pass');

        // Reset password errors initially
        setFieldError(newPassInput, errorNewPass, false);
        setFieldError(confirmPassInput, errorConfirmPass, false);
        setFieldError(currentPassInput, document.createElement('div'), false); // temporary error tracker

        if (currentPass || newPass || confirmPass) {
            // Validate current password isn't blank
            if (!currentPass) {
                isValid = false;
                showToast('Please specify your current password to apply credentials updates.', 'info');
                currentPassInput.closest('.form-group').classList.add('has-error');
            }

            // Check min length of new password
            if (newPass.length < 8) {
                setFieldError(newPassInput, errorNewPass, true);
                isValid = false;
            }

            // Check passwords matching
            if (newPass !== confirmPass) {
                setFieldError(confirmPassInput, errorConfirmPass, true);
                isValid = false;
            }
        }

        return isValid;
    }

    // --- Event Listeners ---

    // Tab switching click controller
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            // Update sidebar nav highlights
            navTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Switch corresponding form panels
            panels.forEach(panel => {
                if (panel.id === `panel-${tabId}`) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        });
    });

    // Bio content characters counting tracker
    bioInput.addEventListener('input', () => {
        const currentLen = bioInput.value.length;
        bioCharCount.textContent = currentLen;
    });

    // Real-time Theme changes trigger
    themeCheckbox.addEventListener('change', () => {
        const isDark = themeCheckbox.checked;
        htmlEl.setAttribute('data-theme', isDark ? 'dark' : 'light');
        showToast(`Interface switched to ${isDark ? 'Dark' : 'Light'} Mode.`, 'info');
    });

    // Real-time Accent Picker triggers
    accentButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const accent = btn.getAttribute('data-accent');

            // Active styling updates
            accentButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Dynamic variables shifts
            htmlEl.setAttribute('data-accent', accent);
            showToast(`Interface accent changed to ${accent.charAt(0).toUpperCase() + accent.slice(1)}.`, 'info');
        });
    });

    // Layout density responsive switcher
    densityRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.checked) {
                htmlEl.setAttribute('data-density', radio.value);
                showToast(`Layout spacing set to ${radio.value}.`, 'info');
            }
        });
    });

    // Avatar presets buttons interactions
    avatarOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            avatarOptions.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');

            const avatarKey = opt.getAttribute('data-avatar');
            const initials = getInitials(usernameInput.value || 'JD');
            updateAvatars(initials, avatarKey);
        });
    });

    // Sync avatar letters when Username is edited
    usernameInput.addEventListener('input', () => {
        let activeAvatar = 'indigo';
        avatarOptions.forEach(opt => {
            if (opt.classList.contains('active')) activeAvatar = opt.getAttribute('data-avatar');
        });
        const initials = getInitials(usernameInput.value || 'JD');
        updateAvatars(initials, activeAvatar);
    });

    // Password Visibility Toggle button triggers
    passwordToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            const isPass = input.getAttribute('type') === 'password';

            input.setAttribute('type', isPass ? 'text' : 'password');
            btn.innerHTML = isPass ? eyeIconSvg : eyeOffIconSvg;
        });
    });

    // Form Submission Event
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateForm()) {
            // Find the first error tab and switch to it for better usability
            const firstErrorField = document.querySelector('.has-error');
            if (firstErrorField) {
                const containingPanel = firstErrorField.closest('.settings-panel');
                if (containingPanel) {
                    const panelId = containingPanel.id.replace('panel-', '');
                    const matchingTab = document.querySelector(`.nav-tab[data-tab="${panelId}"]`);
                    if (matchingTab) matchingTab.click();
                }
            }
            showToast('Validation failed. Please verify your inputs errors.', 'info');
            return;
        }

        // Toggle button submission loading animation state
        btnSubmit.disabled = true;
        btnText.textContent = 'Saving Changes...';
        btnSpinner.classList.remove('hidden');

        // Simulate backend response trigger
        setTimeout(() => {
            saveSettings();

            // Clean loading states
            btnSubmit.disabled = false;
            btnText.textContent = 'Save Changes';
            btnSpinner.classList.add('hidden');

            showToast('All settings saved successfully!');

            // Clean credentials inputs
            currentPassInput.value = '';
            newPassInput.value = '';
            confirmPassInput.value = '';
        }, 1200);
    });

    // Restore Default settings values
    btnReset.addEventListener('click', () => {
        if (confirm('Are you sure you want to restore all settings to default values? This cannot be undone.')) {
            localStorage.removeItem('apex_settings');
            loadSettings();
            showToast('Settings restored to defaults.', 'info');

            // Click first tab
            const firstTab = document.querySelector('.nav-tab[data-tab="profile"]');
            if (firstTab) firstTab.click();
        }
    });

    // Initialize System State on Load
    loadSettings();

});
