import postcssPresetEnv from "postcss-preset-env";

export default function config(ctx) {
	return {
		map: ctx.options.map,
		plugins: [
			postcssPresetEnv({
				preserve: true,
				features: {
					"focus-visible-pseudo-class": true,
					"focus-within-pseudo-class": true,
					"logical-properties-and-values": true,
					"logical-resize": true
				}
			}),
		]
	}
}
