Deno.serve(req => {
	const lang = req.headers.get("Accept-Language");
	return new Response(`
<!DOCTYPE html>
<html>
	<head>
		<title>${lang}</title>
		<meta property="og:title" content="${lang}">
		<meta property="og:type" content="website">
		<meta property="og:url" content="https://language-is.deno.dev/">
		<meta name="twitter:card" content="summary_large_image">
		<meta property="og:image:alt" content="image alt">
		<meta name="twitter:image:alt" content="image alt">
	</head>
	<body>
		<p>${lang}</p>
	</body>
</html
	`, {
		headers: {
			"Content-Type": "text/html; charset=UTF-8",
		}
	})
})
