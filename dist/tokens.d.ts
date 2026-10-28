/** Tokens de CG con su valor final, para usar donde no hay variables CSS. */
export declare const tokens: {
    readonly primary: "#006e94";
    readonly primaryHover: "#006688";
    readonly primaryDark: "#005577";
    readonly primaryLight: "#0088aa";
    readonly primary50: "#e6f4f8";
    readonly primary100: "#d6ebf2";
    readonly primary200: "#a3c2d1";
    readonly brand: "#0e5a8a";
    readonly brandLight: "#136a9f";
    readonly brandDark: "#0a4266";
    readonly brandDarker: "#062a45";
    readonly brandMobile: "#3a7ba6";
    readonly canvas: "#f6f8fb";
    readonly surface: "#ffffff";
    readonly surfaceMuted: "#f9fafb";
    readonly surfaceSunken: "#f3f4f6";
    readonly inkStrong: "#111827";
    readonly ink: "#1f2937";
    readonly inkSoft: "#374151";
    readonly inkMuted: "#6b7280";
    readonly inkSubtle: "#9ca3af";
    readonly inkInverse: "#ffffff";
    readonly line: "#e5e7eb";
    readonly lineSoft: "#f3f4f6";
    readonly lineStrong: "#d1d5db";
    readonly danger: "#dc2626";
    readonly dangerHover: "#b91c1c";
    readonly dangerSoft: "#fef2f2";
    readonly dangerLine: "#fecaca";
    readonly dangerInk: "#b91c1c";
    readonly dangerField: "#ef4444";
    readonly success: "#059669";
    readonly successHover: "#047857";
    readonly successSoft: "#ecfdf5";
    readonly successLine: "#a7f3d0";
    readonly successInk: "#047857";
    readonly warning: "#f59e0b";
    readonly warningHover: "#b45309";
    readonly warningSoft: "#fffbeb";
    readonly warningLine: "#fde68a";
    readonly warningInk: "#b45309";
    readonly info: "#0284c7";
    readonly infoHover: "#0369a1";
    readonly infoSoft: "#f0f9ff";
    readonly infoLine: "#bae6fd";
    readonly infoInk: "#0369a1";
    readonly purple: "#a855f7";
    readonly purpleSoft: "#faf5ff";
    readonly purpleLine: "#e9d5ff";
    readonly purpleInk: "#7e22ce";
    readonly rose: "#f43f5e";
    readonly roseSoft: "#fff1f2";
    readonly roseLine: "#fecdd3";
    readonly roseInk: "#be123c";
    readonly orange: "#f97316";
    readonly orangeSoft: "#fff7ed";
    readonly orangeLine: "#fed7aa";
    readonly orangeInk: "#c2410c";
    readonly overlay: "rgb(0 0 0 / 0.5)";
    readonly onDarkHover: "rgb(255 255 255 / 0.1)";
    readonly onDarkActive: "rgb(255 255 255 / 0.2)";
    readonly onDarkLine: "rgb(255 255 255 / 0.25)";
    readonly gradientPrimary: "linear-gradient(to right, #006e94, #005577)";
    readonly gradientNav: "linear-gradient(to bottom, #136a9f, #0e5a8a)";
    readonly gradientHero: "linear-gradient(to right, #062a45, #0a4266)";
    readonly gradientDanger: "linear-gradient(to right, #dc2626, #991b1b)";
    readonly gradientSuccess: "linear-gradient(to right, #10b981, #047857)";
    readonly gradientWarning: "linear-gradient(to right, #f59e0b, #b45309)";
    readonly fontSans: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"";
    readonly fontMono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", monospace";
    readonly textMicro: "0.625rem";
    readonly textCaption: "0.6875rem";
    readonly textXs: "0.75rem";
    readonly textSm: "0.875rem";
    readonly textBase: "1rem";
    readonly textLg: "1.125rem";
    readonly textXl: "1.25rem";
    readonly text2xl: "1.5rem";
    readonly text3xl: "1.875rem";
    readonly weightNormal: "400";
    readonly weightMedium: "500";
    readonly weightSemibold: "600";
    readonly weightBold: "700";
    readonly weightBlack: "900";
    readonly leadingNone: "1";
    readonly leadingTight: "1.25";
    readonly leadingNormal: "1.5";
    readonly leadingRelaxed: "1.625";
    readonly trackingTight: "-0.025em";
    readonly trackingWider: "0.05em";
    readonly trackingWidest: "0.1em";
    readonly space1: "0.25rem";
    readonly space2: "0.5rem";
    readonly space3: "0.75rem";
    readonly space4: "1rem";
    readonly space6: "1.5rem";
    readonly space8: "2rem";
    readonly space12: "3rem";
    readonly radiusSm: "0.375rem";
    readonly radiusButton: "1rem";
    readonly radiusItem: "0.75rem";
    readonly radiusField: "0.75rem";
    readonly radiusCard: "0.75rem";
    readonly radiusPanel: "1rem";
    readonly radiusPill: "9999px";
    readonly shadowSm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly shadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly shadowXl: "0 25px 50px -12px rgb(0 0 0 / 0.25)";
    readonly shadowPrimary: "0 2px 10px -3px rgb(0 136 170 / 0.15)";
    readonly focusRing: "0 0 0 2px #ffffff, 0 0 0 4px #006e94";
    readonly focusRingField: "0 0 0 2px rgb(0 119 153 / 0.2)";
    readonly focusRingDanger: "0 0 0 2px #fecaca";
    readonly durationFast: "150ms";
    readonly duration: "200ms";
    readonly durationSlow: "300ms";
    readonly ease: "cubic-bezier(0.4, 0, 0.2, 1)";
    readonly container: "1400px";
    readonly navbarHeight: "52px";
    readonly sidebarWidth: "280px";
    readonly zSticky: "10";
    readonly zNavbar: "40";
    readonly zModal: "50";
    readonly zPopover: "100";
    readonly zToast: "110";
};
export type TokenName = keyof typeof tokens;
/**
 * Los mismos valores que `tokens`, agrupados: `theme.colors.primary.main`,
 * `theme.colors.primary[50]`, `theme.colors.danger.soft`, `theme.radius.button`.
 */
export declare const theme: {
    readonly colors: {
        readonly primary: {
            readonly "50": "#e6f4f8";
            readonly "100": "#d6ebf2";
            readonly "200": "#a3c2d1";
            readonly main: "#006e94";
            readonly hover: "#006688";
            readonly dark: "#005577";
            readonly light: "#0088aa";
        };
        readonly brand: {
            readonly main: "#0e5a8a";
            readonly light: "#136a9f";
            readonly dark: "#0a4266";
            readonly darker: "#062a45";
            readonly mobile: "#3a7ba6";
        };
        readonly canvas: "#f6f8fb";
        readonly surface: {
            readonly main: "#ffffff";
            readonly muted: "#f9fafb";
            readonly sunken: "#f3f4f6";
        };
        readonly ink: {
            readonly strong: "#111827";
            readonly main: "#1f2937";
            readonly soft: "#374151";
            readonly muted: "#6b7280";
            readonly subtle: "#9ca3af";
            readonly inverse: "#ffffff";
        };
        readonly line: {
            readonly main: "#e5e7eb";
            readonly soft: "#f3f4f6";
            readonly strong: "#d1d5db";
        };
        readonly danger: {
            readonly main: "#dc2626";
            readonly hover: "#b91c1c";
            readonly soft: "#fef2f2";
            readonly line: "#fecaca";
            readonly ink: "#b91c1c";
            readonly field: "#ef4444";
        };
        readonly success: {
            readonly main: "#059669";
            readonly hover: "#047857";
            readonly soft: "#ecfdf5";
            readonly line: "#a7f3d0";
            readonly ink: "#047857";
        };
        readonly warning: {
            readonly main: "#f59e0b";
            readonly hover: "#b45309";
            readonly soft: "#fffbeb";
            readonly line: "#fde68a";
            readonly ink: "#b45309";
        };
        readonly info: {
            readonly main: "#0284c7";
            readonly hover: "#0369a1";
            readonly soft: "#f0f9ff";
            readonly line: "#bae6fd";
            readonly ink: "#0369a1";
        };
        readonly purple: {
            readonly main: "#a855f7";
            readonly soft: "#faf5ff";
            readonly line: "#e9d5ff";
            readonly ink: "#7e22ce";
        };
        readonly rose: {
            readonly main: "#f43f5e";
            readonly soft: "#fff1f2";
            readonly line: "#fecdd3";
            readonly ink: "#be123c";
        };
        readonly orange: {
            readonly main: "#f97316";
            readonly soft: "#fff7ed";
            readonly line: "#fed7aa";
            readonly ink: "#c2410c";
        };
        readonly overlay: "rgb(0 0 0 / 0.5)";
        readonly on: {
            readonly darkHover: "rgb(255 255 255 / 0.1)";
            readonly darkActive: "rgb(255 255 255 / 0.2)";
            readonly darkLine: "rgb(255 255 255 / 0.25)";
        };
    };
    readonly gradient: {
        readonly primary: "linear-gradient(to right, #006e94, #005577)";
        readonly nav: "linear-gradient(to bottom, #136a9f, #0e5a8a)";
        readonly hero: "linear-gradient(to right, #062a45, #0a4266)";
        readonly danger: "linear-gradient(to right, #dc2626, #991b1b)";
        readonly success: "linear-gradient(to right, #10b981, #047857)";
        readonly warning: "linear-gradient(to right, #f59e0b, #b45309)";
    };
    readonly font: {
        readonly sans: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"";
        readonly mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", monospace";
    };
    readonly text: {
        readonly micro: "0.625rem";
        readonly caption: "0.6875rem";
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly "2xl": "1.5rem";
        readonly "3xl": "1.875rem";
    };
    readonly weight: {
        readonly normal: "400";
        readonly medium: "500";
        readonly semibold: "600";
        readonly bold: "700";
        readonly black: "900";
    };
    readonly leading: {
        readonly none: "1";
        readonly tight: "1.25";
        readonly normal: "1.5";
        readonly relaxed: "1.625";
    };
    readonly tracking: {
        readonly tight: "-0.025em";
        readonly wider: "0.05em";
        readonly widest: "0.1em";
    };
    readonly space: {
        readonly "1": "0.25rem";
        readonly "2": "0.5rem";
        readonly "3": "0.75rem";
        readonly "4": "1rem";
        readonly "6": "1.5rem";
        readonly "8": "2rem";
        readonly "12": "3rem";
    };
    readonly radius: {
        readonly sm: "0.375rem";
        readonly button: "1rem";
        readonly item: "0.75rem";
        readonly field: "0.75rem";
        readonly card: "0.75rem";
        readonly panel: "1rem";
        readonly pill: "9999px";
    };
    readonly shadow: {
        readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
        readonly xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)";
        readonly primary: "0 2px 10px -3px rgb(0 136 170 / 0.15)";
    };
    readonly focus: {
        readonly ring: "0 0 0 2px #ffffff, 0 0 0 4px #006e94";
        readonly ringField: "0 0 0 2px rgb(0 119 153 / 0.2)";
        readonly ringDanger: "0 0 0 2px #fecaca";
    };
    readonly duration: {
        readonly fast: "150ms";
        readonly main: "200ms";
        readonly slow: "300ms";
    };
    readonly ease: "cubic-bezier(0.4, 0, 0.2, 1)";
    readonly container: "1400px";
    readonly navbar: {
        readonly height: "52px";
    };
    readonly sidebar: {
        readonly width: "280px";
    };
    readonly z: {
        readonly sticky: "10";
        readonly navbar: "40";
        readonly modal: "50";
        readonly popover: "100";
        readonly toast: "110";
    };
};
export type Theme = typeof theme;
