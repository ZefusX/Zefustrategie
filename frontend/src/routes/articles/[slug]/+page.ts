import { error } from '@sveltejs/kit';
import { marked } from 'marked';

export async function load({ params }) {
	const { slug } = params;

	const res = await fetch(`https://zefustrategie.onrender.com/articles/${slug}`);
	if (!res.ok) throw error(404, 'Article non trouvé');

	const { metadata, content } = await res.json();

	// Convertit les blocs [!NOTE]
	const parsedMarkdown = parseAdmonitions(content);

	// Réécrit les chemins d'image relatifs (pour les appeler)
	const baseUrl = 'https://zefustrategie.onrender.com';
	const withImagePaths = rewriteImagePaths(parsedMarkdown, baseUrl);

	// Transforme en HTML (-> avec Marked goatesque)
	const html = await marked.parse(withImagePaths);

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

function rewriteImagePaths(md: string, baseUrl: string): string {
	return md.replace(/!\[(.*?)\]\((.*?)\)/g, (_match, alt, src) => {
		// Ignore les liens absolus
		if (/^https?:\/\//.test(src)) return `![${alt}](${src})`;

		// Sinon on ajoute le chemin vers l'API
		return `![${alt}](${baseUrl}/static/${src})`;
	});
}
