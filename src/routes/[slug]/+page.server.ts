import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { cwd } from 'node:process';
import shiki from 'shiki';

export async function load({ params }) {
	const { slug } = params;

	const fileName = convertToFileName(slug);
	const componentName = convertToComponentName(slug);

	console.log(`Generating page for ${componentName}...`);

	const html = await readFile(
		join(cwd(), 'src', 'lib', 'burgers', componentName.replace(' ', ''), fileName + '.svelte'),
		{
			encoding: 'utf-8'
		}
	);
	const css = await readFile(
		join(cwd(), 'src', 'lib', 'burgers', componentName.replace(' ', ''), slug + '.css'),
		{
			encoding: 'utf-8'
		}
	);

	const highlighter = await shiki.getHighlighter({
		theme: 'github-dark'
	});

	const formattedHtml = highlighter.codeToHtml(html, { lang: 'svelte' });

	const formattedCss = highlighter.codeToHtml(css, { lang: 'css' });

	return {
		formattedHtml,
		formattedCss,
		html,
		css,
		componentName,
		slug
	};
}

export const prerender = true;

function convertToFileName(slug: string) {
	return slug
		.split('-')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join('');
}

function convertToComponentName(slug: string) {
	return slug
		.split('-')
		.map((word) => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}
