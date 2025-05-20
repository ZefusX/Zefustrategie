import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export async function load({ params }) {
	const { slug } = params;

	const res = await fetch(`http://127.0.0.1:8000/articles/${slug}`);
	if (!res.ok) throw error(404, 'Article non trouvé');

	const { metadata, content } = await res.json();

	// Convertit les bloc [!NOTE]
	const parsedMarkdown = parseAdmonitions(content);
	const html = await marked.parse(parsedMarkdown);

	return {
		metadata,
		content: html,
		slug
	};
}

function parseAdmonitions(md: string): string {
	return md.replace(
		/^\s*>?\s*\[!(NOTE|INFO|IMPORTANT|WARNING|FAQ)\](?:\s*\n| )([\s\S]*?)(?=\n{2,}|$)/gm,
		(_match: string, typeRaw: string, body: string) => {
			const type = typeRaw.toUpperCase() as 'NOTE' | 'INFO' | 'IMPORTANT' | 'WARNING' | 'FAQ';

			const labels: Record<typeof type, string> = {
				NOTE: 'Note',
				INFO: 'Info',
				IMPORTANT: 'Important',
				WARNING: 'Attention',
				FAQ: 'FAQ'
			};

			const icons: Record<typeof type, string> = {
				NOTE: '📝',
				INFO: 'ℹ️',
				IMPORTANT: '❗',
				WARNING: '⚠️',
				FAQ: '❓'
			};

			return `<div class="alert ${type.toLowerCase()}">
				<strong>${icons[type]} ${labels[type]} :</strong> ${body.trim()}
			</div>`;
		}
	);
}
