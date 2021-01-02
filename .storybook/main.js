module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx)'],
	addons: [
		'@storybook/addon-docs',
		'@storybook/addon-links',
		'@storybook/addon-knobs',
		'@storybook/addon-essentials',
		'@storybook/addon-controls',
		'@storybook/addon-actions',
		'@storybook/addon-viewport',
	],
};
