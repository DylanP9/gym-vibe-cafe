import Link from "next/link";

interface BreadcrumbsProps {
  current: string;
}

export function Breadcrumbs({ current }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[#a9a092]">
      <ol className="flex items-center gap-3">
        <li>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-[#eee7da]">
          {current}
        </li>
      </ol>
    </nav>
  );
}
