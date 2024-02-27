Deno.serve(req => {
	const lang = req.headers.get("Accept-Language");
	return new Response(`
<!DOCTYPE html>
<html>
	<head>
		<title>${lang}</title>
		<meta property="og:title" content="${lang}">
		<meta property="og:type" content="website">
		<meta property="og:url" content="https://letter.open-web-advocacy.org/">
		<meta name="twitter:card" content="summary_large_image">
		<meta property="og:image" content="https://letter.open-web-advocacy.org/images/og-image.png">
		<meta name="twitter:image" content="https://letter.open-web-advocacy.org/images/og-image.png">
		<meta property="og:image:alt" content="Page image for Open Letter to Tim Cook, Sabotaging Web Apps Is Indefensible">
		<meta name="twitter:image:alt" content="Page image for Open Letter to Tim Cook, Sabotaging Web Apps Is Indefensible">
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
