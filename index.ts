Deno.serve(req => {
	return new Response(`
<!DOCTYPE html>
<html>
	<body>
		<p>hello</p>
	</body>
</html
	`)
})
