document.addEventListener('DOMContentLoaded', () => {
    /* --- Theme Management --- */
    const themeSwitcher = document.getElementById('themeSwitcher');
    const html = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('ent_theme') || 'dark';
    html.className = savedTheme;

    themeSwitcher.addEventListener('click', () => {
        const isDark = html.classList.contains('dark');
        const nextTheme = isDark ? 'light' : 'dark';
        html.className = nextTheme;
        localStorage.setItem('ent_theme', nextTheme);
        console.log(`Enterprise System switched to: ${nextTheme}`);
    });

    /* --- Tab Navigation --- */
    const menuItems = document.querySelectorAll('.menu-item');
    const tabViews = document.querySelectorAll('.tab-view');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-tab');

            // Toggle Sidebar Menu
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Toggle Views
            tabViews.forEach(view => {
                view.classList.remove('active');
                if (view.id === targetId) {
                    view.classList.add('active');
                }
            });

            // Re-trigger icon creation for new views if needed
            if (window.lucide) {
                window.lucide.createIcons();
            }
        });
    });

    /* --- Dynamic Metrics Logic --- */
    const integrityRing = document.getElementById('integrityRing');
    const integrityValue = 94; // Target

    // Calculate Dashoffset: dasharray is 283 (approx 2 * PI * 45)
    // 94% of circle = offset of 17 (approx 283 * (1 - 0.94))
    const offset = 283 - (283 * integrityValue) / 100;
    integrityRing.style.strokeDashoffset = offset;

    /* --- Access Log Simulator --- */
    const logRows = document.querySelectorAll('tbody tr');
    let logIndex = 0;

    const simulateAnalysis = () => {
        const current = logRows[logIndex % logRows.length];
        current.classList.add('analyzing');

        setTimeout(() => {
            current.classList.remove('analyzing');
        }, 2000);

        logIndex++;
    };

    setInterval(simulateAnalysis, 5000);

    /* --- AI Mini-Toggles --- */
    const miniToggles = document.querySelectorAll('.mini-toggle');
    miniToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            const control = toggle.getAttribute('data-control');
            console.log(`AI Control [${control}] optimized: ${toggle.classList.contains('active')}`);
        });
    });

    /* --- Privacy Tab: Hashing Simulator --- */
    const rawInput = document.getElementById('rawInput');
    const hashOutput = document.getElementById('hashOutput');
    const generateBtn = document.getElementById('generateHash');

    // Simple SHA-256 helper (simulated for UI)
    async function sha256(message) {
        const msgBuffer = new TextEncoder().encode(message);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            const val = rawInput.value;
            if (!val) {
                hashOutput.innerHTML = '<span class="text-red-500">Error: Input empty</span>';
                return;
            }
            hashOutput.innerHTML = '<span class="tech-blue">Encrypting...</span>';

            const hash = await sha256(val);
            setTimeout(() => {
                hashOutput.innerHTML = `<span class="tech-blue">${hash}</span>`;
                console.log("Data Secured: Hashing sequence complete.");
            }, 600);
        });
    }

    /* --- Audit Tab: Ledger Verification --- */
    const verifyLedgerBtn = document.getElementById('verifyLedger');

    if (verifyLedgerBtn) {
        verifyLedgerBtn.addEventListener('click', () => {
            const originalText = verifyLedgerBtn.innerText;
            verifyLedgerBtn.innerText = "VERIFYING BLOCKS...";
            verifyLedgerBtn.style.opacity = "0.7";
            verifyLedgerBtn.disabled = true;

            setTimeout(() => {
                verifyLedgerBtn.innerText = "CHECKING INTEGRITY...";
                setTimeout(() => {
                    verifyLedgerBtn.innerText = "CHAIN VERIFIED ✓";
                    verifyLedgerBtn.style.background = "var(--tech-green)";
                    verifyLedgerBtn.style.boxShadow = "0 0 30px rgba(10, 255, 0, 0.3)";

                    setTimeout(() => {
                        verifyLedgerBtn.innerText = originalText;
                        verifyLedgerBtn.style.background = "var(--primary)";
                        verifyLedgerBtn.style.boxShadow = "0 0 30px rgba(0, 243, 255, 0.3)";
                        verifyLedgerBtn.style.opacity = "1";
                        verifyLedgerBtn.disabled = false;
                    }, 3000);
                }, 1500);
            }, 1500);
        });
    }

    /* --- Risk Intelligence: Heatmap Interaction --- */
    const riskBoxes = document.querySelectorAll('.risk-box');
    riskBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const zone = box.getAttribute('data-zone');
            console.log(`Risk Analysis: Assessing vulnerabilities in [${zone}]...`);
            box.style.transform = 'scale(0.95)';
            setTimeout(() => { box.style.transform = 'scale(1)'; }, 200);
        });
    });

    /* --- Autonomous Response: Mitigation Test --- */
    const triggerMitigationBtn = document.getElementById('triggerMitigation');
    if (triggerMitigationBtn) {
        triggerMitigationBtn.addEventListener('click', () => {
            const originalText = triggerMitigationBtn.innerText;
            triggerMitigationBtn.innerText = "EXECUTING MITIGATION...";
            triggerMitigationBtn.style.background = "var(--red)";
            triggerMitigationBtn.disabled = true;

            console.warn("AUTONOMOUS RESPONSE TRIGGERED: Isolating suspicious network segments.");

            setTimeout(() => {
                triggerMitigationBtn.innerText = "THREAT NEUTRALIZED ✓";
                triggerMitigationBtn.style.background = "var(--tech-green)";

                setTimeout(() => {
                    triggerMitigationBtn.innerText = originalText;
                    triggerMitigationBtn.style.background = "var(--primary)";
                    triggerMitigationBtn.disabled = false;
                }, 3000);
            }, 2500);
        });
    }

    /* --- Compliance Center: Auto-Scanning --- */
    const fills = document.querySelectorAll('.progress-bar .fill');
    const reScanCompliance = () => {
        fills.forEach(fill => {
            const width = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => { fill.style.width = width; }, 100);
        });
    };

    // Trigger re-scan when compliance tab is clicked
    menuItems.forEach(item => {
        if (item.getAttribute('data-tab') === 'compliance') {
            item.addEventListener('click', reScanCompliance);
        }
    });

    /* --- Encryption Pulse --- */
    const bulbs = document.querySelectorAll('.bulb');

    setInterval(() => {
        const randomBulb = bulbs[Math.floor(Math.random() * bulbs.length)];
        if (randomBulb) {
            randomBulb.style.opacity = '0.5';
            setTimeout(() => {
                randomBulb.style.opacity = '1';
            }, 300);
        }
    }, 2000);
});
