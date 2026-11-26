
/* =========================================================
   PI220 LIVE RADIO
   ADAPTIVE LAYOUT ENGINE
   Version 001
   ========================================================= */

(() => {
    "use strict";

    const app = document.querySelector(".radio-app");

    if (!app) {
        console.warn("[PI220 Layout] Application container not found.");
        return;
    }

    const root = document.documentElement;

    let observer = null;
    let lastWidth = -1;
    let lastHeight = -1;
    let lastMode = "";

    function detectMode(width, height) {
        if (width <= 760) {
            return "mobile";
        }

        if (height <= 620) {
            return "compact";
        }

        return "desktop";
    }

    function updateLayout(width, height) {
        width = Math.round(width);
        height = Math.round(height);

        if (width <= 0 || height <= 0) return;

        const mode = detectMode(width, height);

        if (
            width === lastWidth &&
            height === lastHeight &&
            mode === lastMode
        ) {
            return;
        }

        lastWidth = width;
        lastHeight = height;
        lastMode = mode;

        app.dataset.layout = mode;

        app.style.setProperty(
            "--app-width",
            `${width}px`
        );

        app.style.setProperty(
            "--app-height",
            `${height}px`
        );

        root.dataset.pi220Layout = mode;

        console.info(
            `[PI220 Layout] ${mode.toUpperCase()} | ${width} × ${height}px`
        );
    }

    function measure() {
        const rect = app.getBoundingClientRect();

        updateLayout(rect.width, rect.height);
    }

    if ("ResizeObserver" in window) {
        observer = new ResizeObserver(entries => {
            const entry = entries[0];

            if (!entry) return;

            updateLayout(
                entry.contentRect.width,
                entry.contentRect.height
            );
        });

        observer.observe(app);

    } else {
        window.addEventListener("resize", measure, {
            passive: true
        });
    }

    window.addEventListener("orientationchange", measure, {
        passive: true
    });

    window.addEventListener("pageshow", measure);

    measure();

    console.info("[PI220 Layout] Adaptive engine initialized.");

})();
