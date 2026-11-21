// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
	site: 'https://liam8wong.github.io',
	base: isGitHubActions ? '/liam-portfolio/' : '/',
});
