Deno.serve(req => {
	return new Response(req.headers.get("Accept-Language"))
})
