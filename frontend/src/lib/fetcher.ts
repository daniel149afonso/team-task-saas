export async function fetcher(url: string, options: RequestInit = {}) {

	const res = await fetch(url, {
		headers: { "Content-Type": "application/json" },
		...options,
	});

	return res.json();
}
