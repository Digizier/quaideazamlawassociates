import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink text-gold border border-gold/40 shadow-gold">
          <Scale className="h-8 w-8" />
        </div>
        <p className="eyebrow text-gold-deep mt-4">Judicial Record Notice</p>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-foreground">
          404 — Page Not Found
        </h1>
        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
          The legal page or document you requested does not exist or has been relocated to another section of the website.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-gold-gradient px-6 text-sm font-bold text-ink shadow-gold hover:brightness-105"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/practice-areas"
            className="inline-flex h-11 items-center justify-center rounded-sm border border-border bg-card px-5 text-sm font-semibold text-foreground hover:bg-secondary"
          >
            Browse Practice Areas
          </Link>
        </div>
      </div>
    </div>
  );
}
