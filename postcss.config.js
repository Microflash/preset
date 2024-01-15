const postcssPresetEnv = require("postcss-preset-env");

module.exports = (ctx) => ({
	map: ctx.options.map,
	plugins: [
		postcssPresetEnv({
			preserve: true,
			enableClientSidePolyfills: true,
			features: {
				"focus-visible-pseudo-class": true,
				"focus-within-pseudo-class": true,
				"is-pseudo-class": true,
				"logical-properties-and-values": true,
				"logical-resize": true
			}
		}),
	]
});
