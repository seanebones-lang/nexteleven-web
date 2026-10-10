import Link from "next/link";
export default function NotFound(){return <main className="not-found"><p className="section-label">404 · Page not found</p><h1>This page isn’t here.</h1><p>The address does not point to a current NextEleven page.</p><Link className="primary-action" href="/">Return home <span>↗</span></Link></main>}
