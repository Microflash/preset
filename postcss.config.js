import postcssPresetEnv from "postcss-preset-env";

export default function config(ctx) {
	return {
		map: ctx.options.map,
		plugins: [
			postcssPresetEnv({
				stage: 2,
				preserve: true,
			}),
		]
	}
}
