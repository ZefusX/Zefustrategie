<script lang="ts">
	export let data;
	import 'github-markdown-css/github-markdown.css';
</script>

<article class="markdown-body" style="max-width: 768px; margin: auto;">
	{@html data.content}
</article>

<style>
	:global(.markdown-body) {
		background: transparent;
		/* color: #e2e8f0; */
		padding: 2rem;
		font-size: 120%;
		font-family: 'Nunito Sans Variable', sans-serif;
	}

	:global(.markdown-body h1),
	:global(.markdown-body h2) {
		font-weight: 900;
	}

	:global(.markdown-body h3),
	:global(.markdown-body h4) {
		font-weight: 700;
	}
	:global(.markdown-body h1),
	:global(.markdown-body h2),
	:global(.markdown-body h3),
	:global(.markdown-body h5),
	:global(.markdown-body h6),
	:global(.markdown-body h4) {
		color: #93c5fd; /* Bleu clair */
		background: linear-gradient(to right, #bfdbfe, #e9d5ff); /* bleu-200 à violet-200 */
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		font-size: bold;
	}

	:global(.markdown-body a) {
		color: #60a5fa;
		text-decoration: underline;
	}

	:global(.markdown-body code) {
		background-color: #1e293b; /* Dark blue for inline code */
		color: #facc15;
		padding: 0.2em 0.4em;
		border-radius: 4px;
	}

	:global(.markdown-body pre) {
		background-color: #0f172a; /* Darker block background */
		color: #f8fafc;
		padding: 1em;
		border-radius: 8px;
		overflow-x: auto;
	}

	:global(.markdown-body blockquote) {
		border-left: 4px solid #60a5fa;
		padding-left: 1em;
		color: #cbd5e1;
		font-style: italic;
	}

	:global(.markdown-body ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin: 0.5rem 0;
	}

	:global(.markdown-body li) {
		margin-bottom: 0.25rem;
	}

	:global(.alert) {
		padding: 1rem;
		margin: 1rem 0;
		border-radius: 6px;
		border-left: 5px solid;
		background-color: #1e293b;
		color: #e2e8f0;
	}

	:global(.alert.note) {
		border-color: #60a5fa;
		background-color: #1e40af;
	}
	:global(.alert.info) {
		border-color: #38bdf8;
		background-color: #0e7490;
	}
	:global(.alert.faq) {
		border-color: #4ade80;
		background-color: #166534;
	}
	:global(.alert.warning) {
		border-color: #facc15;
		background-color: #854d0e;
	}
	:global(.alert.important) {
		border-color: #f87171;
		background-color: #7f1d1d;
	}

	:global([data-mode='light'] .markdown-body p),
	:global([data-mode='light'] .markdown-body li) {
		color: #424242;
	}

	:global([data-mode='light'] .markdown-body h1),
	:global([data-mode='light'] .markdown-body h2),
	:global([data-mode='light'] .markdown-body h3),
	:global([data-mode='light'] .markdown-body h5),
	:global([data-mode='light'] .markdown-body h6),
	:global([data-mode='light'] .markdown-body h4) {
		color: #3e3e3e; /* Bleu clair */
		background: linear-gradient(to right, #001d75, #b02a9c); /* bleu-200 à violet-200 */
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		font-size: bold;
	}
</style>
