import Link from "next/link";
import { SiteNavigation, type SiteSection } from "./SiteNavigation";
export function InnerHeader({ current }: { current: SiteSection }) {
  return <header className="inner-header">
    <Link className="wordmark" href="/">NEXT<span>ELEVEN</span></Link>
    <SiteNavigation current={current} />
  </header>;
}
