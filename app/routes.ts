import { index, type RouteConfig, route } from "@react-router/dev/routes"

export default [
	index("routes/home.tsx"),
	route("resource/set-themes", "routes/resource.set-themes.ts"),
] satisfies RouteConfig
