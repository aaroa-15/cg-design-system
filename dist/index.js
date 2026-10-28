import { ThemeProvider as e, alpha as t, createTheme as n, styled as r } from "@mui/material/styles";
import i from "@mui/material/Typography";
import "@fontsource-variable/inter";
import a from "@mui/material/CssBaseline";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
import l from "@mui/material/Button";
import { Children as u, Fragment as d, forwardRef as f, useId as p, useRef as m, useState as h } from "react";
import g from "@mui/material/Box";
import _ from "@mui/material/IconButton";
import v from "@mui/icons-material/ChevronLeftRounded";
import y from "@mui/icons-material/ChevronRightRounded";
import b from "@mui/material/Card";
import x from "@mui/icons-material/CheckCircleRounded";
import S from "@mui/material/Autocomplete";
import C from "@mui/material/InputAdornment";
import w from "@mui/material/MenuItem";
import T from "@mui/material/TextField";
import E from "@mui/material/CircularProgress";
import D from "@mui/material/Stack";
import O from "@mui/material/Dialog";
import k from "@mui/material/DialogActions";
import A from "@mui/material/DialogContent";
import j from "@mui/material/DialogTitle";
import M from "@mui/icons-material/CloseRounded";
import ee from "@mui/material/ButtonBase";
import te from "@mui/material/LinearProgress";
import N from "@mui/material/Menu";
import ne from "@mui/icons-material/CheckRounded";
import P from "@mui/material/Container";
import re from "@mui/material/AppBar";
import ie from "@mui/material/Collapse";
import ae from "@mui/material/Divider";
import oe from "@mui/material/Toolbar";
import se from "@mui/icons-material/ExpandMoreRounded";
import ce from "@mui/icons-material/MenuRounded";
import le from "@mui/material/List";
import ue from "@mui/material/ListItemButton";
import de from "@mui/material/ListItemIcon";
import fe from "@mui/material/ListItemText";
import { Alert as pe, Avatar as F, Box as I, CardActionArea as L, CardActions as R, CardContent as z, CardHeader as B, Checkbox as me, Chip as he, CircularProgress as ge, Container as _e, Divider as ve, FormControlLabel as ye, FormGroup as be, FormHelperText as xe, Grid as Se, IconButton as Ce, InputAdornment as we, Link as Te, Menu as Ee, MenuItem as De, Select as Oe, Skeleton as ke, Stack as Ae, Switch as je, Tab as Me, Table as Ne, TableBody as Pe, TableCell as Fe, TableContainer as Ie, TableHead as Le, TableRow as Re, Tabs as ze, TextField as Be, Tooltip as Ve, Typography as He, alpha as Ue, styled as We, useMediaQuery as Ge, useTheme as Ke } from "@mui/material";
//#region src/tokens.ts
var V = {
	primary: "#006e94",
	primaryHover: "#006688",
	primaryDark: "#005577",
	primaryLight: "#0088aa",
	primary50: "#e6f4f8",
	primary100: "#d6ebf2",
	primary200: "#a3c2d1",
	brand: "#0e5a8a",
	brandLight: "#136a9f",
	brandDark: "#0a4266",
	brandDarker: "#062a45",
	brandMobile: "#3a7ba6",
	canvas: "#f6f8fb",
	surface: "#ffffff",
	surfaceMuted: "#f9fafb",
	surfaceSunken: "#f3f4f6",
	inkStrong: "#111827",
	ink: "#1f2937",
	inkSoft: "#374151",
	inkMuted: "#6b7280",
	inkSubtle: "#9ca3af",
	inkInverse: "#ffffff",
	line: "#e5e7eb",
	lineSoft: "#f3f4f6",
	lineStrong: "#d1d5db",
	danger: "#dc2626",
	dangerHover: "#b91c1c",
	dangerSoft: "#fef2f2",
	dangerLine: "#fecaca",
	dangerInk: "#b91c1c",
	dangerField: "#ef4444",
	success: "#059669",
	successHover: "#047857",
	successSoft: "#ecfdf5",
	successLine: "#a7f3d0",
	successInk: "#047857",
	warning: "#f59e0b",
	warningHover: "#b45309",
	warningSoft: "#fffbeb",
	warningLine: "#fde68a",
	warningInk: "#b45309",
	info: "#0284c7",
	infoHover: "#0369a1",
	infoSoft: "#f0f9ff",
	infoLine: "#bae6fd",
	infoInk: "#0369a1",
	purple: "#a855f7",
	purpleSoft: "#faf5ff",
	purpleLine: "#e9d5ff",
	purpleInk: "#7e22ce",
	rose: "#f43f5e",
	roseSoft: "#fff1f2",
	roseLine: "#fecdd3",
	roseInk: "#be123c",
	orange: "#f97316",
	orangeSoft: "#fff7ed",
	orangeLine: "#fed7aa",
	orangeInk: "#c2410c",
	overlay: "rgb(0 0 0 / 0.5)",
	onDarkHover: "rgb(255 255 255 / 0.1)",
	onDarkActive: "rgb(255 255 255 / 0.2)",
	onDarkLine: "rgb(255 255 255 / 0.25)",
	gradientPrimary: "linear-gradient(to right, #006e94, #005577)",
	gradientNav: "linear-gradient(to bottom, #136a9f, #0e5a8a)",
	gradientHero: "linear-gradient(to right, #062a45, #0a4266)",
	gradientDanger: "linear-gradient(to right, #dc2626, #991b1b)",
	gradientSuccess: "linear-gradient(to right, #10b981, #047857)",
	gradientWarning: "linear-gradient(to right, #f59e0b, #b45309)",
	fontSans: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
	fontMono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", monospace",
	textMicro: "0.625rem",
	textCaption: "0.6875rem",
	textXs: "0.75rem",
	textSm: "0.875rem",
	textBase: "1rem",
	textLg: "1.125rem",
	textXl: "1.25rem",
	text2xl: "1.5rem",
	text3xl: "1.875rem",
	weightNormal: "400",
	weightMedium: "500",
	weightSemibold: "600",
	weightBold: "700",
	weightBlack: "900",
	leadingNone: "1",
	leadingTight: "1.25",
	leadingNormal: "1.5",
	leadingRelaxed: "1.625",
	trackingTight: "-0.025em",
	trackingWider: "0.05em",
	trackingWidest: "0.1em",
	space1: "0.25rem",
	space2: "0.5rem",
	space3: "0.75rem",
	space4: "1rem",
	space6: "1.5rem",
	space8: "2rem",
	space12: "3rem",
	radiusSm: "0.375rem",
	radiusButton: "1rem",
	radiusItem: "0.75rem",
	radiusField: "0.75rem",
	radiusCard: "0.75rem",
	radiusPanel: "1rem",
	radiusPill: "9999px",
	shadowSm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
	shadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
	shadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
	shadowXl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
	shadowPrimary: "0 2px 10px -3px rgb(0 136 170 / 0.15)",
	focusRing: "0 0 0 2px #ffffff, 0 0 0 4px #006e94",
	focusRingField: "0 0 0 2px rgb(0 119 153 / 0.2)",
	focusRingDanger: "0 0 0 2px #fecaca",
	durationFast: "150ms",
	duration: "200ms",
	durationSlow: "300ms",
	ease: "cubic-bezier(0.4, 0, 0.2, 1)",
	container: "1400px",
	navbarHeight: "52px",
	sidebarWidth: "280px",
	zSticky: "10",
	zNavbar: "40",
	zModal: "50",
	zPopover: "100",
	zToast: "110"
}, qe = {
	colors: {
		primary: {
			50: "#e6f4f8",
			100: "#d6ebf2",
			200: "#a3c2d1",
			main: "#006e94",
			hover: "#006688",
			dark: "#005577",
			light: "#0088aa"
		},
		brand: {
			main: "#0e5a8a",
			light: "#136a9f",
			dark: "#0a4266",
			darker: "#062a45",
			mobile: "#3a7ba6"
		},
		canvas: "#f6f8fb",
		surface: {
			main: "#ffffff",
			muted: "#f9fafb",
			sunken: "#f3f4f6"
		},
		ink: {
			strong: "#111827",
			main: "#1f2937",
			soft: "#374151",
			muted: "#6b7280",
			subtle: "#9ca3af",
			inverse: "#ffffff"
		},
		line: {
			main: "#e5e7eb",
			soft: "#f3f4f6",
			strong: "#d1d5db"
		},
		danger: {
			main: "#dc2626",
			hover: "#b91c1c",
			soft: "#fef2f2",
			line: "#fecaca",
			ink: "#b91c1c",
			field: "#ef4444"
		},
		success: {
			main: "#059669",
			hover: "#047857",
			soft: "#ecfdf5",
			line: "#a7f3d0",
			ink: "#047857"
		},
		warning: {
			main: "#f59e0b",
			hover: "#b45309",
			soft: "#fffbeb",
			line: "#fde68a",
			ink: "#b45309"
		},
		info: {
			main: "#0284c7",
			hover: "#0369a1",
			soft: "#f0f9ff",
			line: "#bae6fd",
			ink: "#0369a1"
		},
		purple: {
			main: "#a855f7",
			soft: "#faf5ff",
			line: "#e9d5ff",
			ink: "#7e22ce"
		},
		rose: {
			main: "#f43f5e",
			soft: "#fff1f2",
			line: "#fecdd3",
			ink: "#be123c"
		},
		orange: {
			main: "#f97316",
			soft: "#fff7ed",
			line: "#fed7aa",
			ink: "#c2410c"
		},
		overlay: "rgb(0 0 0 / 0.5)",
		on: {
			darkHover: "rgb(255 255 255 / 0.1)",
			darkActive: "rgb(255 255 255 / 0.2)",
			darkLine: "rgb(255 255 255 / 0.25)"
		}
	},
	gradient: {
		primary: "linear-gradient(to right, #006e94, #005577)",
		nav: "linear-gradient(to bottom, #136a9f, #0e5a8a)",
		hero: "linear-gradient(to right, #062a45, #0a4266)",
		danger: "linear-gradient(to right, #dc2626, #991b1b)",
		success: "linear-gradient(to right, #10b981, #047857)",
		warning: "linear-gradient(to right, #f59e0b, #b45309)"
	},
	font: {
		sans: "\"Inter Variable\", Inter, ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
		mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", monospace"
	},
	text: {
		micro: "0.625rem",
		caption: "0.6875rem",
		xs: "0.75rem",
		sm: "0.875rem",
		base: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem"
	},
	weight: {
		normal: "400",
		medium: "500",
		semibold: "600",
		bold: "700",
		black: "900"
	},
	leading: {
		none: "1",
		tight: "1.25",
		normal: "1.5",
		relaxed: "1.625"
	},
	tracking: {
		tight: "-0.025em",
		wider: "0.05em",
		widest: "0.1em"
	},
	space: {
		1: "0.25rem",
		2: "0.5rem",
		3: "0.75rem",
		4: "1rem",
		6: "1.5rem",
		8: "2rem",
		12: "3rem"
	},
	radius: {
		sm: "0.375rem",
		button: "1rem",
		item: "0.75rem",
		field: "0.75rem",
		card: "0.75rem",
		panel: "1rem",
		pill: "9999px"
	},
	shadow: {
		sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
		md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
		lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
		primary: "0 2px 10px -3px rgb(0 136 170 / 0.15)"
	},
	focus: {
		ring: "0 0 0 2px #ffffff, 0 0 0 4px #006e94",
		ringField: "0 0 0 2px rgb(0 119 153 / 0.2)",
		ringDanger: "0 0 0 2px #fecaca"
	},
	duration: {
		fast: "150ms",
		main: "200ms",
		slow: "300ms"
	},
	ease: "cubic-bezier(0.4, 0, 0.2, 1)",
	container: "1400px",
	navbar: { height: "52px" },
	sidebar: { width: "280px" },
	z: {
		sticky: "10",
		navbar: "40",
		modal: "50",
		popover: "100",
		toast: "110"
	}
}, Je = {
	defaultProps: {
		variant: "contained",
		disableElevation: !0
	},
	styleOverrides: {
		root: {
			borderRadius: V.radiusButton,
			textTransform: "none",
			fontWeight: Number(V.weightSemibold),
			lineHeight: "1.25rem",
			transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
			"&.Mui-focusVisible": { boxShadow: `0 0 0 2px ${V.surface}, 0 0 0 4px ${V.primary}` },
			"&.Mui-disabled": { opacity: .5 }
		},
		startIcon: { "& svg": {
			width: "1rem",
			height: "1rem"
		} },
		endIcon: { "& svg": {
			width: "1rem",
			height: "1rem"
		} },
		sizeSmall: {
			padding: "6px 12px",
			fontSize: V.textXs,
			lineHeight: "1rem"
		},
		sizeMedium: {
			padding: "8px 16px",
			fontSize: V.textSm
		},
		sizeLarge: {
			padding: "10px 20px",
			fontSize: V.textBase,
			lineHeight: "1.5rem"
		},
		outlined: {
			color: V.inkSoft,
			borderColor: V.lineStrong,
			backgroundColor: V.surface,
			"&:hover": {
				backgroundColor: V.surfaceMuted,
				borderColor: V.lineStrong
			}
		},
		text: {
			color: V.inkSoft,
			"&:hover": {
				backgroundColor: V.surfaceSunken,
				color: V.inkStrong
			}
		}
	}
}, H = {
	primary: {
		bg: V.primary50,
		ink: V.primary,
		line: V.primary100
	},
	success: {
		bg: V.successSoft,
		ink: V.successInk,
		line: V.successLine
	},
	warning: {
		bg: V.warningSoft,
		ink: V.warningInk,
		line: V.warningLine
	},
	error: {
		bg: V.dangerSoft,
		ink: V.dangerInk,
		line: V.dangerLine
	},
	info: {
		bg: V.infoSoft,
		ink: V.infoInk,
		line: V.infoLine
	}
}, U = (e) => ({
	props: {
		color: e,
		variant: "filled"
	},
	style: {
		backgroundColor: H[e].bg,
		color: H[e].ink,
		borderColor: H[e].line
	}
}), Ye = {
	defaultProps: { size: "small" },
	styleOverrides: {
		root: {
			height: "auto",
			border: "1px solid transparent",
			borderRadius: V.radiusPill,
			fontSize: V.textXs,
			fontWeight: 600,
			lineHeight: 1.4
		},
		label: { padding: "4px 10px" },
		sizeMedium: {
			fontSize: V.textSm,
			"& .MuiChip-label": { padding: "6px 12px" }
		}
	},
	variants: [
		{
			props: {
				color: "default",
				variant: "filled"
			},
			style: {
				backgroundColor: V.surfaceSunken,
				color: V.inkMuted
			}
		},
		U("primary"),
		U("success"),
		U("warning"),
		U("error"),
		U("info")
	]
}, Xe = { styleOverrides: { root: {
	width: "1.75rem",
	height: "1.75rem",
	backgroundColor: V.primary50,
	color: V.primary,
	fontSize: V.textXs,
	fontWeight: 700
} } }, W = (e) => ({
	props: {
		severity: e,
		variant: "standard"
	},
	style: {
		backgroundColor: H[e].bg,
		color: H[e].ink,
		borderColor: H[e].line,
		"& .MuiAlert-icon": { color: "inherit" }
	}
}), Ze = {
	styleOverrides: {
		root: {
			border: "1px solid",
			borderRadius: V.radiusItem,
			padding: "12px",
			fontSize: V.textSm,
			fontWeight: 500,
			lineHeight: "1.25rem",
			alignItems: "flex-start"
		},
		icon: {
			padding: 0,
			marginRight: 12,
			opacity: 1
		},
		message: { padding: 0 }
	},
	variants: [
		W("info"),
		W("success"),
		W("warning"),
		W("error")
	]
}, Qe = { defaultProps: {
	size: 48,
	thickness: 4
} }, $e = "0 0 0 2px rgb(0 119 153 / 0.2)", et = "0 0 0 2px #fecaca", G = `0 0 0 2px ${V.surface}, 0 0 0 4px ${V.primary}`, tt = { styleOverrides: {
	root: {
		borderRadius: V.radiusField,
		backgroundColor: V.surface,
		fontSize: V.textSm,
		lineHeight: "1.25rem",
		transition: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
		"& fieldset": {
			top: 0,
			borderColor: V.line
		},
		"& legend": { display: "none" },
		"&:hover fieldset": { borderColor: V.lineStrong },
		"&.Mui-focused": { boxShadow: $e },
		"&.Mui-focused fieldset": {
			borderColor: V.primary,
			borderWidth: 1
		},
		"&.Mui-error fieldset": { borderColor: V.dangerField },
		"&.Mui-error.Mui-focused": { boxShadow: et },
		"&.Mui-disabled": {
			backgroundColor: V.surfaceMuted,
			opacity: .5
		}
	},
	input: {
		padding: "10px 16px",
		"&::placeholder": {
			color: V.inkSubtle,
			opacity: 1
		},
		"&.MuiInputBase-inputSizeSmall": {
			padding: "6px 12px",
			fontSize: V.textXs
		}
	},
	multiline: { padding: 0 },
	adornedStart: { paddingLeft: 12 },
	adornedEnd: { paddingRight: 12 }
} }, nt = { styleOverrides: { root: {
	"&&": {
		position: "static",
		transform: "none",
		maxWidth: "100%",
		marginBottom: 4,
		marginLeft: 4,
		fontSize: V.textXs,
		fontWeight: 700,
		textTransform: "uppercase",
		letterSpacing: "0.05em",
		color: V.inkSoft
	},
	"&&.Mui-focused": { color: V.inkSoft },
	"&&.Mui-error": { color: V.inkSoft },
	"& .MuiFormLabel-asterisk": {
		color: V.dangerField,
		marginLeft: 4
	}
} } }, rt = { styleOverrides: { root: {
	margin: "4px 0 0 4px",
	fontSize: V.textCaption,
	lineHeight: 1.5,
	color: V.inkMuted,
	"&.Mui-error": { color: V.danger }
} } }, it = { styleOverrides: {
	select: { "&.MuiOutlinedInput-input": { paddingRight: 40 } },
	icon: {
		color: V.inkSubtle,
		right: 12
	}
} }, at = { styleOverrides: { root: {
	padding: 4,
	color: V.lineStrong,
	"&:hover": {
		backgroundColor: "transparent",
		color: V.primary
	},
	"&.Mui-checked, &.MuiCheckbox-indeterminate": { color: V.primary },
	"&.Mui-focusVisible": { boxShadow: G },
	"&.Mui-disabled": { opacity: .5 },
	"& .MuiSvgIcon-root": { fontSize: "1.375rem" }
} } }, ot = { styleOverrides: {
	root: {
		marginLeft: -4,
		alignItems: "flex-start"
	},
	label: {
		fontSize: V.textSm,
		fontWeight: 600,
		lineHeight: "1.25rem",
		color: V.inkSoft,
		paddingTop: 4,
		"&.Mui-disabled": { opacity: .5 }
	}
} }, st = { styleOverrides: {
	root: {
		width: 32,
		height: 18,
		padding: 0,
		overflow: "visible"
	},
	switchBase: {
		padding: 2,
		"&.Mui-checked": {
			transform: "translateX(14px)",
			color: V.surface,
			"& + .MuiSwitch-track": {
				backgroundColor: V.primary,
				opacity: 1
			}
		},
		"&.Mui-focusVisible + .MuiSwitch-track": { boxShadow: G },
		"&.Mui-disabled": { opacity: .5 }
	},
	thumb: {
		width: 14,
		height: 14,
		boxShadow: "none",
		border: `1px solid ${V.lineStrong}`,
		backgroundColor: V.surface
	},
	track: {
		borderRadius: V.radiusPill,
		backgroundColor: V.line,
		opacity: 1
	}
} }, ct = {
	defaultProps: { elevation: 0 },
	styleOverrides: { root: {
		border: `1px solid ${V.line}`,
		borderRadius: V.radiusCard,
		boxShadow: V.shadowSm,
		backgroundImage: "none"
	} },
	variants: [{
		props: { variant: "hero" },
		style: {
			background: `linear-gradient(to right, ${V.brandDarker}, ${V.brandDark})`,
			borderColor: "transparent",
			color: V.inkInverse,
			"& .MuiTypography-root": { color: V.inkInverse },
			"& .MuiTypography-body2, & .MuiTypography-meta": { color: V.primary100 }
		}
	}, {
		props: { variant: "split" },
		style: {
			display: "flex",
			flexWrap: "wrap",
			overflow: "hidden",
			minHeight: "20rem",
			"& > .MuiCardContent-root": {
				flex: "1 1 15rem",
				paddingTop: 24
			}
		}
	}]
}, lt = {
	defaultProps: { slotProps: { title: { variant: "h3" } } },
	styleOverrides: { root: { padding: "24px 24px 16px" } }
}, ut = { styleOverrides: { root: {
	padding: "0 24px 24px",
	"&:last-child": { paddingBottom: 24 }
} } }, dt = { styleOverrides: { root: { padding: "0 24px 24px" } } }, ft = { styleOverrides: { root: { backgroundImage: "none" } } }, pt = { styleOverrides: { paper: {
	borderRadius: V.radiusPanel,
	boxShadow: V.shadowXl
} } }, mt = { styleOverrides: {
	root: {
		backgroundColor: "rgb(0 0 0 / 0.5)",
		backdropFilter: "blur(4px)"
	},
	invisible: {
		backdropFilter: "none",
		backgroundColor: "transparent"
	}
} }, ht = { styleOverrides: {
	paper: {
		border: `1px solid ${V.lineSoft}`,
		borderRadius: V.radiusCard,
		boxShadow: V.shadowXl
	},
	list: { padding: "4px 0" }
} }, gt = { styleOverrides: { root: {
	gap: 12,
	padding: "10px 16px",
	fontSize: V.textSm,
	color: V.inkSoft,
	"&:hover": { backgroundColor: V.surfaceMuted },
	"&.Mui-selected": {
		backgroundColor: V.primary50,
		color: V.primary,
		fontWeight: 500
	},
	"&.Mui-selected:hover": { backgroundColor: V.primary50 },
	"& svg": {
		width: "1rem",
		height: "1rem",
		flexShrink: 0
	}
} } }, _t = { styleOverrides: {
	root: {
		borderBottom: `1px solid ${V.line}`,
		minHeight: 0
	},
	indicator: {
		height: 2,
		backgroundColor: V.primary
	}
} }, vt = { styleOverrides: { root: {
	minHeight: 0,
	padding: "0 16px 12px",
	fontSize: V.textSm,
	fontWeight: 700,
	textTransform: "none",
	color: V.inkMuted,
	"&:hover": { color: V.inkSoft },
	"&.Mui-selected": { color: V.primary }
} } }, yt = { styleOverrides: { root: {
	border: `1px solid ${V.lineSoft}`,
	borderRadius: V.radiusCard,
	boxShadow: V.shadowSm,
	backgroundColor: V.surface
} } }, bt = {
	MuiAlert: Ze,
	MuiAvatar: Xe,
	MuiBackdrop: mt,
	MuiButton: Je,
	MuiCard: ct,
	MuiCardActions: dt,
	MuiCardContent: ut,
	MuiCardHeader: lt,
	MuiCheckbox: at,
	MuiChip: Ye,
	MuiCircularProgress: Qe,
	MuiDialog: pt,
	MuiFormControlLabel: ot,
	MuiFormHelperText: rt,
	MuiInputLabel: nt,
	MuiMenu: ht,
	MuiMenuItem: gt,
	MuiOutlinedInput: tt,
	MuiPaper: ft,
	MuiSelect: it,
	MuiSwitch: st,
	MuiTab: vt,
	MuiTableCell: { styleOverrides: {
		root: {
			padding: "8px 12px",
			fontSize: V.textXs,
			fontWeight: 500,
			color: V.inkSoft,
			borderBottom: `1px solid ${V.lineSoft}`
		},
		head: {
			padding: "10px 12px",
			backgroundColor: V.surfaceMuted,
			fontSize: V.textMicro,
			fontWeight: 700,
			textTransform: "uppercase",
			letterSpacing: "0.05em",
			color: V.inkMuted
		},
		sizeSmall: { padding: "6px 12px" }
	} },
	MuiTableContainer: yt,
	MuiTableRow: { styleOverrides: { root: { "&.MuiTableRow-hover:hover": { backgroundColor: V.surfaceMuted } } } },
	MuiTabs: _t,
	MuiContainer: {
		variants: [{
			props: (e) => !e.disableGutters,
			style: {
				paddingLeft: V.space4,
				paddingRight: V.space4,
				"@media (min-width: 640px)": {
					paddingLeft: V.space6,
					paddingRight: V.space6
				}
			}
		}],
		styleOverrides: {
			maxWidthLg: { "@media (min-width: 1024px)": { maxWidth: 1200 } },
			maxWidthXl: { "@media (min-width: 1280px)": { maxWidth: 1536 } }
		}
	},
	MuiStack: { defaultProps: { useFlexGap: !0 } },
	MuiTextField: { defaultProps: { fullWidth: !0 } },
	MuiTypography: { defaultProps: { variantMapping: {
		kpi: "p",
		meta: "p",
		subtitle1: "p",
		subtitle2: "p",
		overline: "p"
	} } }
}, xt = {
	primary: {
		main: V.primary,
		light: V.primaryLight,
		dark: V.primaryDark,
		contrastText: V.inkInverse
	},
	secondary: {
		main: V.brand,
		light: V.brandLight,
		dark: V.brandDark,
		contrastText: V.inkInverse
	},
	error: {
		main: V.danger,
		dark: V.dangerHover,
		contrastText: V.inkInverse
	},
	success: {
		main: V.success,
		dark: V.successHover,
		contrastText: V.inkInverse
	},
	warning: {
		main: V.warning,
		dark: V.warningHover,
		contrastText: V.inkInverse
	},
	info: {
		main: V.info,
		dark: V.infoHover,
		contrastText: V.inkInverse
	},
	background: {
		default: V.canvas,
		paper: V.surface
	},
	text: {
		primary: V.ink,
		secondary: V.inkMuted,
		disabled: V.inkSubtle
	},
	divider: V.line
}, St = {
	fontFamily: V.fontSans,
	fontSize: 14,
	h1: {
		fontSize: V.text2xl,
		fontWeight: 700,
		lineHeight: 1.25,
		"@media (min-width: 640px)": { fontSize: V.text3xl }
	},
	h2: {
		fontSize: V.textXl,
		fontWeight: 700,
		lineHeight: 1.4
	},
	h3: {
		fontSize: V.textBase,
		fontWeight: 700,
		lineHeight: 1.5
	},
	subtitle1: {
		fontSize: V.textSm,
		fontWeight: 500,
		lineHeight: 1.5,
		color: V.inkSoft
	},
	body1: {
		fontSize: V.textSm,
		lineHeight: 1.5,
		color: V.inkSoft
	},
	body2: {
		fontSize: V.textXs,
		lineHeight: 1.5,
		color: V.inkMuted
	},
	meta: {
		fontSize: V.textMicro,
		lineHeight: 1.5,
		color: V.inkSubtle
	},
	overline: {
		fontSize: V.textXs,
		fontWeight: 700,
		lineHeight: 1.5,
		letterSpacing: "0.05em",
		textTransform: "uppercase"
	},
	kpi: {
		fontSize: V.textXl,
		fontWeight: 900,
		lineHeight: 1,
		color: V.inkStrong
	},
	button: {
		textTransform: "none",
		fontWeight: Number(V.weightSemibold)
	}
}, K = n({
	palette: xt,
	typography: St,
	components: bt,
	spacing: 4,
	shape: { borderRadius: 12 },
	breakpoints: { values: {
		xs: 0,
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	} }
});
//#endregion
//#region src/theme/CgThemeProvider.tsx
function Ct({ children: t, baseline: n = !0 }) {
	return /* @__PURE__ */ c(e, {
		theme: K,
		children: [n && /* @__PURE__ */ s(a, {}), t]
	});
}
//#endregion
//#region src/components/Button/Button.tsx
var wt = r(l, { shouldForwardProp: (e) => e !== "shadow" && e !== "lift" })(({ theme: e, shadow: n, lift: r, color: i, variant: a }) => {
	let o = i && i !== "inherit" ? e.palette[i].main : a === "outlined" || a === "text" ? V.ink : e.palette.primary.main;
	return {
		...n && {
			"&:not(.Mui-disabled)": { boxShadow: `0 8px 20px ${t(o, .35)}` },
			"&:not(.Mui-disabled):hover": { boxShadow: `0 12px 28px ${t(o, .48)}` },
			"&.Mui-focusVisible:not(.Mui-disabled)": { boxShadow: `0 0 0 2px ${V.surface}, 0 0 0 4px ${V.primary}, 0 8px 20px ${t(o, .35)}` }
		},
		...r && { "&:not(.Mui-disabled):hover": { transform: "translateY(-2px)" } }
	};
}), Tt = f(function(e, t) {
	return /* @__PURE__ */ s(wt, {
		ref: t,
		...e
	});
}), Et = {
	region: "Carrusel",
	previous: "Anterior",
	next: "Siguiente",
	goTo: (e) => `Ir a la diapositiva ${e}`,
	slide: (e, t) => `${e} de ${t}`
}, Dt = 50, q = "cubic-bezier(0.4, 0, 0.2, 1)";
function Ot({ children: e, index: t, defaultIndex: n = 0, onIndexChange: r, slideWidth: i = {
	xs: "240px",
	sm: "280px",
	md: "320px",
	lg: "400px"
}, slideHeight: a, scale: o = .75, gap: l = 3, hideArrows: d = !1, hideIndicators: f = !1, labels: p, sx: b }) {
	let x = {
		...Et,
		...p
	}, S = u.toArray(e), C = S.length, w = C - 1, [T, E] = h(n), D = m(null), O = Math.min(Math.max(t ?? T, 0), Math.max(w, 0)), k = (e) => {
		let n = Math.min(Math.max(e, 0), w);
		n !== O && (t === void 0 && E(n), r?.(n));
	}, A = (e) => {
		if (D.current === null) return;
		let t = e - D.current;
		D.current = null, !(Math.abs(t) < Dt) && k(O + (t < 0 ? 1 : -1));
	}, j = (e) => {
		let t = {
			ArrowLeft: O - 1,
			ArrowRight: O + 1,
			Home: 0,
			End: w
		}[e.key];
		t !== void 0 && (e.preventDefault(), k(t));
	};
	if (C === 0) return null;
	let M = {
		position: "absolute",
		top: "50%",
		zIndex: 1,
		width: 40,
		height: 40,
		mt: -5,
		color: V.inkSoft,
		backgroundColor: "rgb(255 255 255 / 0.85)",
		backdropFilter: "blur(6px)",
		border: `1px solid ${V.line}`,
		boxShadow: V.shadowMd,
		transition: `all 200ms ${q}`,
		"&:hover": {
			backgroundColor: V.surface,
			color: V.primary,
			borderColor: V.primary
		},
		"&.Mui-disabled": {
			opacity: 0,
			pointerEvents: "none"
		},
		"& svg": {
			width: "1.25rem",
			height: "1.25rem"
		}
	};
	return /* @__PURE__ */ c(g, {
		role: "region",
		"aria-roledescription": "carrusel",
		"aria-label": x.region,
		tabIndex: 0,
		onKeyDown: j,
		sx: [{
			position: "relative",
			px: {
				xs: 0,
				sm: 12
			},
			borderRadius: V.radiusPanel,
			outline: "none",
			"&:focus-visible": { boxShadow: `0 0 0 2px ${V.surface}, 0 0 0 4px ${V.primary}` }
		}, ...Array.isArray(b) ? b : [b]],
		children: [
			!d && /* @__PURE__ */ s(_, {
				"aria-label": x.previous,
				disabled: O <= 0,
				onClick: () => k(O - 1),
				sx: {
					...M,
					left: {
						xs: 4,
						sm: 0
					},
					display: {
						xs: "none",
						sm: "inline-flex"
					}
				},
				children: /* @__PURE__ */ s(v, { "aria-hidden": "true" })
			}),
			/* @__PURE__ */ s(g, {
				onTouchStart: (e) => {
					D.current = e.touches[0]?.clientX ?? null;
				},
				onTouchEnd: (e) => A(e.changedTouches[0]?.clientX ?? 0),
				sx: (e) => ({
					"--slide-w": i,
					"--slide-h": a ?? "auto",
					"--scale": String(o),
					"--gap": e.spacing(l),
					"--small-w": "calc(var(--slide-w) * var(--scale))",
					"--pitch": "calc((var(--slide-w) + var(--small-w)) / 2 + var(--gap))",
					width: "calc(var(--slide-w) + 2 * (var(--small-w) + var(--gap)))",
					maxWidth: "100%",
					mx: "auto",
					overflow: "hidden",
					pt: 3,
					pb: 8,
					touchAction: "pan-y"
				}),
				children: /* @__PURE__ */ s(g, {
					sx: {
						display: "flex",
						alignItems: "center",
						position: "relative",
						left: "50%",
						transform: `translateX(calc(-1 * (${O} + 0.5) * var(--pitch)))`,
						transition: `transform 450ms ${q}`,
						"@media (prefers-reduced-motion: reduce)": { transition: "none" }
					},
					children: S.map((e, t) => {
						let n = t === O;
						return /* @__PURE__ */ s(g, {
							sx: {
								flex: "none",
								width: "var(--pitch)",
								display: "flex",
								justifyContent: "center"
							},
							children: /* @__PURE__ */ s(g, {
								role: "group",
								"aria-roledescription": "diapositiva",
								"aria-label": x.slide(t + 1, C),
								"aria-current": n || void 0,
								onClick: () => k(t),
								sx: {
									flex: "none",
									width: "var(--slide-w)",
									height: "var(--slide-h)",
									cursor: n ? "default" : "pointer",
									transform: n ? "scale(1)" : "scale(var(--scale))",
									opacity: n ? 1 : .75,
									filter: n ? "none" : "saturate(0.7)",
									transition: `transform 450ms ${q}, opacity 300ms ${q}, filter 300ms ${q}`,
									"@media (prefers-reduced-motion: reduce)": { transition: "none" },
									"& > *": {
										boxShadow: n ? `0 18px 36px -12px color-mix(in srgb, ${V.primary} 35%, transparent)` : "none",
										transition: `box-shadow 450ms ${q}`
									}
								},
								children: e
							})
						}, t);
					})
				})
			}),
			!d && /* @__PURE__ */ s(_, {
				"aria-label": x.next,
				disabled: O >= w,
				onClick: () => k(O + 1),
				sx: {
					...M,
					right: {
						xs: 4,
						sm: 0
					},
					display: {
						xs: "none",
						sm: "inline-flex"
					}
				},
				children: /* @__PURE__ */ s(y, { "aria-hidden": "true" })
			}),
			!f && C > 1 && /* @__PURE__ */ s(g, {
				sx: {
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 1.5,
					mt: 2
				},
				children: S.map((e, t) => {
					let n = t === O;
					return /* @__PURE__ */ s(g, {
						component: "button",
						type: "button",
						"aria-label": x.goTo(t + 1),
						"aria-current": n || void 0,
						onClick: () => k(t),
						sx: {
							width: n ? 24 : 8,
							height: 8,
							p: 0,
							border: 0,
							borderRadius: V.radiusPill,
							cursor: "pointer",
							backgroundColor: n ? V.primary : V.lineStrong,
							transition: `all 300ms ${q}`,
							"&:hover": { backgroundColor: n ? V.primary : V.inkSubtle },
							"&:focus-visible": {
								outline: "none",
								boxShadow: `0 0 0 2px ${V.surface}, 0 0 0 4px ${V.primary}`
							},
							"@media (prefers-reduced-motion: reduce)": { transition: "none" }
						}
					}, t);
				})
			})
		]
	});
}
//#endregion
//#region src/components/Card/liftStyles.ts
var J = {
	transition: `transform 250ms ease, box-shadow 250ms ease, border-color ${V.duration} ease, background-color ${V.duration} ease`,
	"&:hover:not(:disabled)": {
		transform: "translateY(-6px)",
		boxShadow: `0 20px 36px -12px ${t(V.primary, .35)}`
	},
	"@media (prefers-reduced-motion: reduce)": {
		transition: "none",
		"&:hover:not(:disabled)": { transform: "none" }
	}
}, kt = r(b, { shouldForwardProp: (e) => e !== "lift" })(({ lift: e }) => e ? J : {}), At = f(function(e, t) {
	return /* @__PURE__ */ s(kt, {
		ref: t,
		...e
	});
}), jt = {
	primary: {
		border: V.primary,
		ink: V.primary
	},
	neutral: {
		border: V.inkSubtle,
		ink: V.inkStrong
	},
	success: {
		border: V.success,
		ink: V.successInk
	},
	warning: {
		border: V.warning,
		ink: V.warningInk
	},
	error: {
		border: V.danger,
		ink: V.dangerInk
	},
	info: {
		border: V.info,
		ink: V.infoInk
	}
};
function Mt({ label: e, value: t, color: n = "primary", sx: r, ...a }) {
	let o = jt[n];
	return /* @__PURE__ */ c(b, {
		sx: [{
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			height: "100%",
			p: 3,
			borderLeft: `4px solid ${o.border}`
		}, ...Array.isArray(r) ? r : [r]],
		...a,
		children: [/* @__PURE__ */ s(i, {
			variant: "meta",
			sx: {
				fontWeight: 700,
				textTransform: "uppercase",
				letterSpacing: "0.05em"
			},
			children: e
		}), /* @__PURE__ */ s(i, {
			variant: "kpi",
			sx: {
				mt: 1,
				color: o.ink
			},
			children: t
		})]
	});
}
//#endregion
//#region src/components/Card/SelectableCard.tsx
var Nt = r("button", { shouldForwardProp: (e) => e !== "lift" && e !== "sx" })(({ theme: e, lift: n }) => ({
	position: "relative",
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	gap: e.spacing(3),
	padding: e.spacing(4),
	[e.breakpoints.up("sm")]: { padding: e.spacing(5) },
	textAlign: "left",
	font: "inherit",
	color: "inherit",
	cursor: "pointer",
	backgroundColor: V.surface,
	border: `1.5px solid ${V.line}`,
	borderRadius: V.radiusCard,
	boxShadow: "none",
	...n && J,
	"&:hover:not(:disabled)": {
		...n && J["&:hover:not(:disabled)"],
		borderColor: V.primary
	},
	"&:focus-visible": {
		outline: "none",
		boxShadow: `0 0 0 2px ${V.surface}, 0 0 0 4px ${V.primary}`
	},
	"&[aria-pressed='true']": {
		borderColor: V.primary,
		backgroundColor: t(V.primary, .05),
		boxShadow: `0 12px 28px -8px ${t(V.primary, .35)}`
	},
	"&:disabled": {
		cursor: "default",
		opacity: .5
	}
}));
function Pt({ children: e, selected: t = !1, onClick: n, lift: r = !0, hideCheck: i = !1, disabled: a, sx: o }) {
	return /* @__PURE__ */ c(Nt, {
		type: "button",
		"aria-pressed": t,
		disabled: a,
		onClick: n,
		lift: r,
		sx: o,
		children: [t && !i && /* @__PURE__ */ s(x, {
			"aria-hidden": !0,
			color: "primary",
			sx: {
				position: "absolute",
				top: 14,
				right: 14,
				fontSize: 22
			}
		}), e]
	});
}
//#endregion
//#region src/components/IconTile/IconTile.tsx
var Ft = {
	primary: {
		bg: V.primary,
		ink: V.primary
	},
	success: {
		bg: V.success,
		ink: V.successInk
	},
	warning: {
		bg: V.warning,
		ink: V.warningInk
	},
	error: {
		bg: V.danger,
		ink: V.dangerInk
	},
	info: {
		bg: V.info,
		ink: V.infoInk
	},
	neutral: {
		bg: V.inkMuted,
		ink: V.inkSoft
	}
}, It = {
	sm: {
		box: 32,
		icon: 16,
		radius: V.radiusSm
	},
	md: {
		box: 40,
		icon: 20,
		radius: V.radiusItem
	},
	lg: {
		box: 48,
		icon: 24,
		radius: V.radiusItem
	}
};
function Lt({ icon: e, color: n = "primary", size: r = "lg", className: i, sx: a }) {
	let o = Ft[n], c = It[r];
	return /* @__PURE__ */ s(g, {
		"aria-hidden": !0,
		className: i,
		sx: [{
			flexShrink: 0,
			width: c.box,
			height: c.box,
			borderRadius: c.radius,
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			bgcolor: t(o.bg, .12),
			color: o.ink,
			transition: `box-shadow ${V.duration} ease`
		}, ...Array.isArray(a) ? a : [a]],
		children: /* @__PURE__ */ s(e, { sx: { fontSize: c.icon } })
	});
}
//#endregion
//#region src/components/Dropdown/Dropdown.tsx
var Y = (e) => /* @__PURE__ */ c(g, {
	sx: {
		display: "flex",
		alignItems: "center",
		gap: 3,
		minWidth: 0
	},
	children: [e.icon, /* @__PURE__ */ s("span", { children: e.label })]
});
function Rt({ options: e, value: t, onChange: n, label: r, error: i, disabled: a = !1, required: o = !1, searchable: l = !1, sortOptions: u = !0, leftIcon: d, id: f, placeholder: p = "Seleccionar...", emptyText: m = "No se encontraron resultados" }) {
	let h = !!i?.trim(), g = e.find((e) => e.value === t) ?? null, _ = u ? [...e].sort((e, t) => e.value === "" ? -1 : t.value === "" ? 1 : e.label.localeCompare(t.label, void 0, { sensitivity: "base" })) : e, v = d ? /* @__PURE__ */ s(C, {
		position: "start",
		sx: { color: V.inkSubtle },
		children: d
	}) : void 0;
	return l ? /* @__PURE__ */ s(S, {
		id: f,
		options: _,
		value: g,
		disabled: a,
		noOptionsText: m,
		getOptionLabel: (e) => e.label,
		isOptionEqualToValue: (e, t) => e.value === t.value,
		onChange: (e, t) => {
			t && n(t.value);
		},
		renderOption: ({ key: e, ...t }, n) => /* @__PURE__ */ s("li", {
			...t,
			children: Y(n)
		}, e),
		renderInput: (e) => /* @__PURE__ */ s(T, {
			...e,
			label: r,
			required: o,
			error: h,
			helperText: h ? i : void 0,
			placeholder: p,
			slotProps: {
				...e.slotProps,
				input: {
					...e.slotProps.input,
					startAdornment: v
				}
			}
		})
	}) : /* @__PURE__ */ s(T, {
		select: !0,
		id: f,
		label: r,
		required: o,
		disabled: a,
		error: h,
		helperText: h ? i : void 0,
		value: g ? g.value : "",
		onChange: (t) => {
			let r = e.find((e) => e.value === t.target.value);
			r && n(r.value);
		},
		slotProps: {
			input: { startAdornment: v },
			select: {
				displayEmpty: !0,
				renderValue: () => g ? Y(g) : /* @__PURE__ */ s("span", {
					style: {
						color: V.inkSubtle,
						fontWeight: 400
					},
					children: p
				})
			}
		},
		children: _.map((e) => /* @__PURE__ */ c(w, {
			value: e.value,
			children: [e.icon, e.label]
		}, e.value))
	});
}
//#endregion
//#region src/components/Feedback/Feedback.tsx
function zt({ text: e, fullPage: t, sx: n, ...r }) {
	return /* @__PURE__ */ s(g, {
		role: "status",
		sx: [{
			display: "flex",
			flexGrow: 1,
			alignItems: "center",
			justifyContent: "center",
			height: "100%",
			p: 8,
			...t && {
				minHeight: "100vh",
				bgcolor: V.surfaceMuted
			}
		}, ...Array.isArray(n) ? n : [n]],
		...r,
		children: /* @__PURE__ */ c(D, {
			spacing: 4,
			sx: { alignItems: "center" },
			children: [/* @__PURE__ */ s(E, { "aria-label": e ?? "Cargando" }), e && /* @__PURE__ */ s(i, {
				sx: {
					fontWeight: 500,
					color: V.inkMuted
				},
				children: e
			})]
		})
	});
}
function Bt({ icon: e, title: t, description: n, action: r, sx: a, ...o }) {
	return /* @__PURE__ */ c(D, {
		spacing: 3,
		sx: [{
			alignItems: "center",
			px: 4,
			py: 12,
			textAlign: "center"
		}, ...Array.isArray(a) ? a : [a]],
		...o,
		children: [
			/* @__PURE__ */ s(g, {
				sx: {
					display: "inline-flex",
					color: V.line,
					"& svg": {
						width: "3rem",
						height: "3rem"
					}
				},
				children: e
			}),
			/* @__PURE__ */ s(i, {
				sx: {
					fontSize: V.textLg,
					fontWeight: 500,
					color: V.inkMuted
				},
				children: t
			}),
			n && /* @__PURE__ */ s(i, {
				variant: "body1",
				sx: {
					maxWidth: "28rem",
					color: V.inkSubtle
				},
				children: n
			}),
			r && /* @__PURE__ */ s(g, {
				sx: { mt: 2 },
				children: r
			})
		]
	});
}
//#endregion
//#region src/components/Modal/Modal.tsx
var Vt = {
	primary: `linear-gradient(to right, ${V.primary}, ${V.primaryDark})`,
	danger: "linear-gradient(to right, #dc2626, #991b1b)",
	success: "linear-gradient(to right, #10b981, #047857)",
	warning: "linear-gradient(to right, #f59e0b, #b45309)"
}, Ht = {
	sm: "448px",
	md: "624px",
	lg: "672px",
	xl: "768px",
	"2xl": "896px",
	full: "95vw"
};
function Ut({ isOpen: e, onClose: t, title: n, subtitle: r, variant: a = "primary", children: o, footer: l, headerActions: u, size: d = "md", closeOnBackdrop: f = !1, closeLabel: p = "Cerrar" }) {
	return /* @__PURE__ */ c(O, {
		open: e,
		onClose: (e, n) => {
			(n !== "backdropClick" || f) && t();
		},
		fullWidth: !0,
		maxWidth: !1,
		slotProps: { paper: { sx: {
			maxWidth: Ht[d],
			...d === "full" && { height: "95vh" }
		} } },
		children: [
			/* @__PURE__ */ c(g, {
				sx: {
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					flexShrink: 0,
					px: 6,
					py: 4,
					background: Vt[a],
					color: V.inkInverse
				},
				children: [/* @__PURE__ */ c("div", { children: [/* @__PURE__ */ s(j, {
					sx: {
						p: 0,
						color: "inherit",
						fontSize: V.textXl,
						fontWeight: 700,
						lineHeight: 1.25
					},
					children: n
				}), r && /* @__PURE__ */ s(i, {
					sx: {
						mt: 1.5,
						color: "inherit",
						fontSize: V.textXs,
						textTransform: "uppercase",
						letterSpacing: "0.1em",
						opacity: .8
					},
					children: r
				})] }), /* @__PURE__ */ c(g, {
					sx: {
						display: "flex",
						alignItems: "center",
						gap: 1
					},
					children: [u, /* @__PURE__ */ s(_, {
						"aria-label": p,
						onClick: t,
						sx: {
							color: "rgb(255 255 255 / 0.7)",
							"&:hover": {
								color: V.inkInverse,
								backgroundColor: "rgb(255 255 255 / 0.1)"
							},
							"& svg": {
								width: "1.25rem",
								height: "1.25rem"
							}
						},
						children: /* @__PURE__ */ s(M, { "aria-hidden": "true" })
					})]
				})]
			}),
			/* @__PURE__ */ s(A, {
				sx: { p: 6 },
				children: o
			}),
			l && /* @__PURE__ */ s(k, {
				sx: {
					px: 6,
					py: 4,
					gap: 3,
					borderTop: `1px solid ${V.lineSoft}`,
					backgroundColor: V.surfaceMuted,
					"& > :not(style) ~ :not(style)": { ml: 0 }
				},
				children: l
			})
		]
	});
}
//#endregion
//#region src/components/Stepper/Stepper.tsx
var X = {
	nav: "Pasos",
	stepOf: (e, t) => `Paso ${e} de ${t}`,
	progress: "Avance",
	previousSteps: "Ver pasos anteriores",
	previousStepsMenu: "Pasos anteriores"
}, Wt = {
	position: "absolute",
	width: "1px",
	height: "1px",
	m: "-1px",
	p: 0,
	border: 0,
	overflow: "hidden",
	clip: "rect(0 0 0 0)",
	whiteSpace: "nowrap"
};
function Gt({ status: e, number: n }) {
	return /* @__PURE__ */ s(g, {
		component: "span",
		className: "CgStepper-marker",
		sx: (n) => ({
			flexShrink: 0,
			width: 26,
			height: 26,
			borderRadius: "50%",
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: 12,
			fontWeight: 600,
			fontVariantNumeric: "tabular-nums",
			transition: "background-color 0.2s ease, box-shadow 0.2s ease",
			...e === "done" && {
				bgcolor: t(n.palette.primary.main, .12),
				color: n.palette.primary.main
			},
			...e === "current" && {
				bgcolor: n.palette.primary.main,
				color: n.palette.primary.contrastText,
				boxShadow: `0 0 0 4px ${t(n.palette.primary.main, .14)}`
			},
			...e === "upcoming" && {
				color: n.palette.text.secondary,
				boxShadow: `inset 0 0 0 1.5px ${n.palette.divider}`
			}
		}),
		children: e === "done" ? /* @__PURE__ */ s(ne, {
			"aria-hidden": "true",
			sx: { fontSize: 16 }
		}) : n
	});
}
function Kt({ steps: e, currentStepId: n, onStepClick: r, compactBelow: a = "sm", hideLabelsBelow: u, labels: f, sx: m }) {
	let _ = {
		...X,
		...f
	}, [v, y] = h(null), b = p(), x = e.length;
	if (x === 0) return null;
	let S = Math.max(e.findIndex((e) => e.id === n), 0), C = e[S], T = `@container (max-width: ${(u ?? x * 160) - .02}px)`, E = (e) => e.name ?? e.label;
	return /* @__PURE__ */ c(g, {
		sx: m,
		children: [/* @__PURE__ */ c(g, {
			sx: { display: {
				xs: "block",
				[a]: "none"
			} },
			children: [
				/* @__PURE__ */ c(g, {
					sx: {
						display: "flex",
						alignItems: "baseline",
						gap: .75,
						mb: 1
					},
					children: [/* @__PURE__ */ s(i, {
						variant: "body2",
						color: "text.secondary",
						sx: {
							fontWeight: 500,
							flexShrink: 0
						},
						children: _.stepOf(S + 1, x)
					}), /* @__PURE__ */ s(i, {
						variant: "body2",
						noWrap: !0,
						sx: { fontWeight: 600 },
						children: C && E(C)
					})]
				}),
				/* @__PURE__ */ s(te, {
					"aria-label": _.progress,
					variant: "determinate",
					value: Math.round((S + 1) / x * 100),
					sx: {
						height: 4,
						borderRadius: 999
					}
				}),
				S > 0 && r && /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s(l, {
					"aria-haspopup": "menu",
					"aria-expanded": !!v,
					"aria-controls": v ? b : void 0,
					onClick: (e) => y(e.currentTarget),
					sx: {
						mt: 1,
						minHeight: 44
					},
					children: _.previousSteps
				}), /* @__PURE__ */ s(N, {
					id: b,
					anchorEl: v,
					open: !!v,
					onClose: () => y(null),
					slotProps: { list: { "aria-label": _.previousStepsMenu } },
					children: e.slice(0, S).map((e) => /* @__PURE__ */ s(w, {
						onClick: () => {
							y(null), r(e.id);
						},
						sx: { minHeight: 44 },
						children: E(e)
					}, e.id))
				})] })
			]
		}), /* @__PURE__ */ s(g, {
			sx: {
				display: {
					xs: "none",
					[a]: "block"
				},
				containerType: "inline-size",
				minWidth: 0
			},
			children: /* @__PURE__ */ s(g, {
				component: "nav",
				"aria-label": _.nav,
				sx: {
					display: "flex",
					alignItems: "center",
					minHeight: 56,
					px: 2.5,
					py: 1.5,
					bgcolor: "background.paper",
					border: 1,
					borderColor: "divider",
					borderRadius: 1
				},
				children: /* @__PURE__ */ s(g, {
					component: "ol",
					sx: {
						flex: 1,
						display: "flex",
						alignItems: "center",
						gap: 1.5,
						m: 0,
						p: 0,
						listStyle: "none"
					},
					children: e.map((e, n) => {
						let i = n < S ? "done" : n === S ? "current" : "upcoming", a = i === "done" && !!r, l = /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s(Gt, {
							status: i,
							number: n + 1
						}), /* @__PURE__ */ s(g, {
							component: "span",
							className: "CgStepper-label",
							sx: {
								...i !== "current" && { [T]: Wt },
								fontSize: 14,
								whiteSpace: "nowrap",
								fontWeight: i === "current" ? 600 : 500,
								color: i === "current" ? "text.primary" : "text.secondary",
								transition: "color 0.15s ease"
							},
							children: e.label
						})] });
						return /* @__PURE__ */ c(d, { children: [n > 0 && /* @__PURE__ */ s(g, {
							component: "li",
							"aria-hidden": !0,
							sx: (e) => ({
								flex: "1 1 16px",
								minWidth: 12,
								height: 2,
								borderRadius: 1,
								bgcolor: n <= S ? t(e.palette.primary.main, .45) : e.palette.divider
							})
						}), /* @__PURE__ */ s(g, {
							component: "li",
							sx: { flexShrink: 0 },
							children: a ? /* @__PURE__ */ s(ee, {
								onClick: () => r?.(e.id),
								disableRipple: !0,
								sx: (e) => ({
									gap: 1,
									borderRadius: 999,
									pr: .5,
									[T]: { pr: 0 },
									"&:hover .CgStepper-label": { color: "primary.main" },
									"&:hover .CgStepper-marker": { bgcolor: t(e.palette.primary.main, .2) },
									"&.Mui-focusVisible": {
										outline: `2px solid ${e.palette.primary.main}`,
										outlineOffset: 3
									}
								}),
								children: l
							}) : /* @__PURE__ */ s(g, {
								component: "span",
								"aria-current": i === "current" ? "step" : void 0,
								sx: {
									display: "inline-flex",
									alignItems: "center",
									gap: 1
								},
								children: l
							})
						})] }, e.id);
					})
				})
			})
		})]
	});
}
//#endregion
//#region src/layout/Footer.tsx
function qt({ version: e, children: t }) {
	return /* @__PURE__ */ s(g, {
		component: "footer",
		sx: {
			mt: 12,
			py: 8,
			textAlign: "center",
			color: V.inkMuted
		},
		children: /* @__PURE__ */ s(i, {
			sx: {
				fontSize: V.textCaption,
				color: "inherit"
			},
			children: t ?? /* @__PURE__ */ c(o, { children: [
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Powered by Consultoría Global ©",
				e ? ` - ${e}` : ""
			] })
		})
	});
}
//#endregion
//#region src/layout/Header.tsx
var Z = (e, t, n) => ({
	content: "\"\"",
	position: "absolute",
	right: 0,
	top: 0,
	height: "100%",
	width: t,
	background: `linear-gradient(to left, color-mix(in srgb, ${V.brand} ${e}%, transparent), transparent)`,
	transform: `translateX(${n}) skewX(12deg)`
});
function Jt({ logoSrc: e, logoAlt: t = "Consultoría Global", tagline: n }) {
	return /* @__PURE__ */ s(g, {
		component: "header",
		sx: {
			display: {
				xs: "none",
				sm: "block"
			},
			position: "relative",
			overflow: "hidden",
			backgroundColor: V.surface,
			boxShadow: V.shadowSm
		},
		children: /* @__PURE__ */ c(P, {
			maxWidth: !1,
			sx: {
				maxWidth: 1400,
				position: "relative",
				zIndex: 1,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				py: 1.5
			},
			children: [
				/* @__PURE__ */ s(g, {
					"aria-hidden": "true",
					sx: {
						display: {
							xs: "none",
							md: "block"
						},
						position: "absolute",
						right: 0,
						top: 0,
						zIndex: -1,
						width: "50%",
						height: "100%",
						pointerEvents: "none",
						"&::before": Z(5, "100%", "4rem"),
						"&::after": Z(10, "75%", "2rem")
					}
				}),
				/* @__PURE__ */ s(g, {
					component: "img",
					src: e,
					alt: t,
					sx: {
						height: "4rem",
						width: "auto",
						objectFit: "contain"
					}
				}),
				n && /* @__PURE__ */ s(g, {
					sx: {
						display: {
							xs: "none",
							md: "inline-flex"
						},
						alignItems: "center",
						gap: 3,
						px: 4,
						py: 1.5,
						border: `1px solid color-mix(in srgb, ${V.brand} 20%, transparent)`,
						borderRadius: V.radiusPill,
						backgroundColor: `color-mix(in srgb, ${V.surface} 70%, transparent)`,
						backdropFilter: "blur(4px)",
						boxShadow: V.shadowSm,
						fontSize: V.textXs,
						fontWeight: 600,
						textTransform: "uppercase",
						letterSpacing: "0.1em",
						color: V.brand,
						"&::before": {
							content: "\"\"",
							width: "0.5rem",
							height: "0.5rem",
							borderRadius: V.radiusPill,
							backgroundColor: V.brand
						}
					},
					children: n
				})
			]
		})
	});
}
//#endregion
//#region src/layout/Navbar.tsx
var Yt = {
	openMenu: "Abrir menú",
	closeMenu: "Cerrar menú"
}, Q = "rgb(255 255 255 / 0.1)", $ = (e, t) => ({
	borderRadius: 0,
	px: 6,
	py: 3,
	color: "inherit",
	fontWeight: 600,
	letterSpacing: "0.025em",
	borderRight: `1px solid ${Q}`,
	backgroundColor: e ?? (t ? Q : "transparent"),
	"&:hover": e ? {
		backgroundColor: e,
		filter: "brightness(0.92)"
	} : { backgroundColor: Q }
});
function Xt({ items: e, currentPath: t, linkComponent: n, labels: r }) {
	let i = {
		...Yt,
		...r
	}, [a, o] = h(!1), l = (e) => e !== void 0 && t === e, u = () => o(!1), d = (e) => e === void 0 ? {} : {
		href: e,
		...n && { component: n }
	}, f = e.filter((e) => e.align !== "end"), p = e.filter((e) => e.align === "end"), m = (e) => /* @__PURE__ */ s(Zt, {
		item: e,
		isCurrent: l,
		asLink: d
	}, e.label);
	return /* @__PURE__ */ c(re, {
		component: "nav",
		color: "inherit",
		enableColorOnDark: !0,
		sx: {
			position: {
				xs: "sticky",
				sm: "relative"
			},
			top: 0,
			background: `linear-gradient(to bottom, ${V.brandLight}, ${V.brand})`,
			borderBlock: `1px solid ${V.brandDark}`,
			boxShadow: V.shadowMd,
			color: V.inkInverse,
			fontSize: V.textSm
		},
		children: [/* @__PURE__ */ s(P, {
			maxWidth: !1,
			sx: { maxWidth: 1400 },
			children: /* @__PURE__ */ c(oe, {
				disableGutters: !0,
				sx: { minHeight: 52 },
				children: [
					/* @__PURE__ */ s(_, {
						"aria-label": a ? i.closeMenu : i.openMenu,
						"aria-expanded": a,
						color: "inherit",
						onClick: () => o(!a),
						sx: {
							display: { sm: "none" },
							ml: -2
						},
						children: s(a ? M : ce, {
							"aria-hidden": "true",
							fontSize: "small"
						})
					}),
					/* @__PURE__ */ s(g, {
						sx: {
							display: {
								xs: "none",
								sm: "flex"
							},
							flexWrap: "wrap"
						},
						children: f.map(m)
					}),
					/* @__PURE__ */ s(g, {
						sx: {
							display: {
								xs: "none",
								sm: "flex"
							},
							flexWrap: "wrap",
							ml: "auto",
							"& > *": {
								borderRight: 0,
								borderLeft: `1px solid ${Q}`
							},
							"& > :first-of-type": { borderLeft: 0 }
						},
						children: p.map(m)
					})
				]
			})
		}), /* @__PURE__ */ s(ie, {
			in: a,
			unmountOnExit: !0,
			sx: {
				position: "absolute",
				top: "100%",
				left: 0,
				width: "100%",
				display: { sm: "none" },
				backgroundColor: V.brandMobile,
				borderBottom: `1px solid ${V.brand}`,
				boxShadow: V.shadowLg
			},
			children: /* @__PURE__ */ s(g, {
				component: "ul",
				sx: {
					m: 0,
					py: 2,
					px: 0,
					listStyle: "none"
				},
				children: [...f, ...p].map((e) => /* @__PURE__ */ s($t, {
					item: e,
					isCurrent: l,
					asLink: d,
					onDone: u
				}, e.label))
			})
		})]
	});
}
function Zt({ item: e, isCurrent: t, asLink: n }) {
	let { label: r, icon: i, href: a, onSelect: u, items: f, color: p } = e, [m, g] = h(null);
	if (f) {
		let e = f.some((e) => t(e.href));
		return /* @__PURE__ */ c(o, { children: [/* @__PURE__ */ s(l, {
			color: "inherit",
			variant: "text",
			"aria-haspopup": "menu",
			"aria-expanded": !!m,
			startIcon: i && /* @__PURE__ */ s(i, { "aria-hidden": !0 }),
			endIcon: /* @__PURE__ */ s(se, {
				"aria-hidden": !0,
				style: {
					transform: m ? "rotate(180deg)" : void 0,
					transition: "transform 300ms"
				}
			}),
			onClick: (e) => g(e.currentTarget),
			sx: $(p, e),
			children: r
		}), /* @__PURE__ */ s(N, {
			anchorEl: m,
			open: !!m,
			onClose: () => g(null),
			anchorOrigin: {
				vertical: "bottom",
				horizontal: "right"
			},
			transformOrigin: {
				vertical: "top",
				horizontal: "right"
			},
			slotProps: { paper: { sx: {
				width: "12rem",
				mt: 2
			} } },
			children: f.map((e) => /* @__PURE__ */ c(d, { children: [e.separator && /* @__PURE__ */ s(ae, { component: "li" }), /* @__PURE__ */ s(Qt, {
				sub: e,
				asLink: n,
				onDone: () => g(null)
			})] }, e.label))
		})] });
	}
	return /* @__PURE__ */ s(l, {
		color: "inherit",
		variant: "text",
		startIcon: i && /* @__PURE__ */ s(i, { "aria-hidden": !0 }),
		"aria-current": t(a) ? "page" : void 0,
		onClick: u,
		sx: $(p, t(a)),
		...n(a),
		children: r
	});
}
function Qt({ sub: e, asLink: t, onDone: n }) {
	let { label: r, icon: i, href: a, onSelect: o, tone: l } = e;
	return /* @__PURE__ */ c(w, {
		onClick: () => {
			o?.(), n();
		},
		sx: l === "danger" ? { color: V.danger } : void 0,
		...t(a),
		children: [i && /* @__PURE__ */ s(g, {
			sx: {
				display: "inline-flex",
				p: 1.5,
				borderRadius: V.radiusItem,
				bgcolor: l === "danger" ? V.dangerSoft : V.primary50,
				color: l === "danger" ? "inherit" : V.primary,
				"& svg": {
					width: "0.875rem",
					height: "0.875rem"
				}
			},
			children: /* @__PURE__ */ s(i, { "aria-hidden": !0 })
		}), r]
	});
}
function $t({ item: e, isCurrent: t, asLink: n, onDone: r }) {
	let { label: i, icon: a, href: o, onSelect: u, items: d, color: f } = e, p = (e) => ({
		justifyContent: "flex-start",
		width: "100%",
		borderRadius: 0,
		px: 6,
		py: 3.5,
		color: V.inkInverse,
		fontWeight: 500,
		backgroundColor: f ?? "transparent",
		"&:hover": { backgroundColor: f ?? Q },
		...e
	});
	return d ? /* @__PURE__ */ c("li", { children: [/* @__PURE__ */ c(g, {
		sx: {
			display: "flex",
			alignItems: "center",
			gap: 2,
			px: 6,
			pt: 3.5,
			pb: 2,
			fontSize: V.textXs,
			fontWeight: 700,
			textTransform: "uppercase",
			letterSpacing: "0.05em",
			opacity: .7,
			"& svg": {
				width: "1rem",
				height: "1rem"
			}
		},
		children: [a && /* @__PURE__ */ s(a, { "aria-hidden": !0 }), i]
	}), /* @__PURE__ */ s(g, {
		component: "ul",
		sx: {
			m: 0,
			p: 0,
			listStyle: "none"
		},
		children: d.map((e) => {
			let i = e.icon;
			return /* @__PURE__ */ s("li", { children: /* @__PURE__ */ s(l, {
				color: "inherit",
				variant: "text",
				startIcon: i && /* @__PURE__ */ s(i, { "aria-hidden": !0 }),
				"aria-current": t(e.href) ? "page" : void 0,
				onClick: () => {
					e.onSelect?.(), r();
				},
				sx: p({
					pl: 10,
					...e.tone === "danger" && { color: V.dangerLine }
				}),
				...n(e.href),
				children: e.label
			}) }, e.label);
		})
	})] }) : /* @__PURE__ */ s("li", { children: /* @__PURE__ */ s(l, {
		color: "inherit",
		variant: "text",
		startIcon: a && /* @__PURE__ */ s(a, { "aria-hidden": !0 }),
		"aria-current": t(o) ? "page" : void 0,
		onClick: () => {
			u?.(), r();
		},
		sx: p(),
		...n(o),
		children: i
	}) });
}
//#endregion
//#region src/layout/SideNav.tsx
function en({ title: e, items: t, active: n, onSelect: r }) {
	return /* @__PURE__ */ c(g, {
		sx: {
			display: "flex",
			flexDirection: "column",
			flexShrink: 0,
			width: {
				xs: "100%",
				lg: 280
			},
			backgroundColor: V.surfaceMuted,
			borderRight: `1px solid ${V.line}`
		},
		children: [/* @__PURE__ */ s(g, {
			sx: {
				p: 4,
				borderBottom: `1px solid ${V.line}`
			},
			children: /* @__PURE__ */ s(i, {
				variant: "overline",
				component: "h2",
				sx: {
					fontSize: V.textSm,
					color: V.inkMuted
				},
				children: e
			})
		}), /* @__PURE__ */ s(le, {
			component: "nav",
			"aria-label": e,
			sx: {
				p: 3,
				overflowY: "auto"
			},
			children: t.map(({ id: e, label: t, icon: i }) => /* @__PURE__ */ c(ue, {
				selected: e === n,
				"aria-current": e === n ? "page" : void 0,
				onClick: () => r(e),
				sx: {
					gap: 3,
					mb: 1,
					px: 3,
					py: 2.5,
					borderRadius: V.radiusItem,
					color: V.inkSoft,
					"&:hover": { backgroundColor: V.surfaceSunken },
					"&.Mui-selected, &.Mui-selected:hover": {
						backgroundColor: V.primary50,
						color: V.primary
					}
				},
				children: [i && /* @__PURE__ */ s(de, {
					sx: {
						minWidth: 0,
						color: e === n ? V.primary : V.inkSubtle,
						"& svg": {
							width: "1rem",
							height: "1rem"
						}
					},
					children: /* @__PURE__ */ s(i, { "aria-hidden": !0 })
				}), /* @__PURE__ */ s(fe, {
					primary: t,
					slotProps: { primary: { sx: {
						fontSize: V.textSm,
						fontWeight: 500
					} } },
					sx: { m: 0 }
				})]
			}, e))
		})]
	});
}
//#endregion
export { pe as Alert, F as Avatar, I as Box, Tt as Button, At as Card, L as CardActionArea, R as CardActions, z as CardContent, B as CardHeader, Ot as Carousel, Ct as CgThemeProvider, me as Checkbox, he as Chip, ge as CircularProgress, _e as Container, ve as Divider, Rt as Dropdown, Bt as EmptyState, qt as Footer, ye as FormControlLabel, be as FormGroup, xe as FormHelperText, Se as Grid, Jt as Header, Ce as IconButton, Lt as IconTile, we as InputAdornment, Mt as KpiCard, Te as Link, zt as Loader, Ee as Menu, De as MenuItem, Ut as Modal, Xt as Navbar, Oe as Select, Pt as SelectableCard, en as SideNav, ke as Skeleton, Ae as Stack, Kt as Stepper, je as Switch, Me as Tab, Ne as Table, Pe as TableBody, Fe as TableCell, Ie as TableContainer, Le as TableHead, Re as TableRow, ze as Tabs, Be as TextField, Ve as Tooltip, He as Typography, Ue as alpha, K as cgTheme, We as styled, qe as theme, V as tokens, Ge as useMediaQuery, Ke as useTheme };
