import type { Route } from "./+types/_home._index";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <div className="font-sans min-h-screen max-h-screen ">  
    Hello
  </div>
}
