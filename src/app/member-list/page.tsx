import React from "react";
import Link from "next/link";
import { getFilteredMembers, siteStats } from "@/lib/data";
import { Search, Filter, RotateCcw, ArrowUpDown, Eye, Phone, MapPin, Building, ChevronLeft, ChevronRight, Users, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Members List | श्री पद्मावती पुरवाल दिगंबर जैन परिवार",
  description: "पद्मावती पुरवाल दिगंबर जैन परिवार सदस्य निर्देशिका, कुल पंजीकृत परिवार 467, कुल सदस्य 2180।",
};

interface MemberListPageProps {
  searchParams: Promise<{
    keyword?: string;
    sort?: string;
    direction?: string;
    page?: string;
  }>;
}

export default async function MemberListPage({ searchParams }: MemberListPageProps) {
  const resolvedParams = await searchParams;
  const keyword = resolvedParams.keyword || "";
  const sort = resolvedParams.sort || "fullname";
  const direction = (resolvedParams.direction || "asc") as "asc" | "desc";
  const currentPage = parseInt(resolvedParams.page || "1", 10) || 1;

  const { items, total, totalPages } = getFilteredMembers({
    keyword,
    sort,
    direction,
    page: currentPage,
    pageSize: 20,
  });

  // Helper for generating sort links
  const createSortUrl = (columnKey: string) => {
    const isCurrent = sort === columnKey;
    const newDir = isCurrent && direction === "asc" ? "desc" : "asc";
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    params.set("sort", columnKey);
    params.set("direction", newDir);
    params.set("page", "1");
    return `/member-list?${params.toString()}`;
  };

  // Helper for pagination links
  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams();
    if (keyword) params.set("keyword", keyword);
    if (sort) params.set("sort", sort);
    if (direction) params.set("direction", direction);
    params.set("page", pageNumber.toString());
    return `/member-list?${params.toString()}`;
  };

  return (
    <div className="w-full bg-warm-bg pb-16">
      {/* Header Banner */}
      <div className="bg-maroon-dark text-white py-8 border-b border-maroon-700">
        <div className="max-w-desktop mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-gold tracking-widest uppercase">।।श्री महावीराय नमः।।</p>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-devanagari mt-0.5">
                सदस्य सूची (Members List)
              </h1>
              <p className="text-xs text-white/80 font-devanagari mt-1">
                अखिल भारतीय पद्मावती पुरवाल दिगंबर जैन परिवार निर्देशिका
              </p>
            </div>

            <nav className="flex items-center gap-1.5 text-xs text-white/70">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gold font-semibold">Members List</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4 pt-8">
        {/* Top Filter and Stats Panel */}
        <div className="p-5 sm:p-6 bg-white rounded-2xl border border-warm-border shadow-soft mb-8">
          <form method="GET" action="/member-list" className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-muted">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                name="keyword"
                defaultValue={keyword}
                placeholder="e.g: Name, Mobile, MID, City etc.."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-border bg-warm-bg text-sm text-content-primary placeholder:text-content-muted focus:bg-white transition-colors"
              />
              {/* Maintain current sort params */}
              <input type="hidden" name="sort" value={sort} />
              <input type="hidden" name="direction" value={direction} />
            </div>

            {/* Filter and Reset Buttons */}
            <div className="lg:col-span-3 flex items-center gap-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-status-success text-white rounded-xl font-bold text-sm hover:bg-emerald-700 shadow-sm transition-all"
              >
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <Link
                href="/member-list"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gold text-maroon-dark rounded-xl font-bold text-sm hover:bg-gold-light shadow-sm transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </Link>
            </div>

            {/* Statistics Counters */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end text-xs space-y-1 bg-warm-muted/60 p-3 rounded-xl border border-warm-border">
              <div className="flex items-center gap-2">
                <Home className="w-3.5 h-3.5 text-maroon" />
                <span><strong>Total Registered Families:</strong> {siteStats.totalFamilies}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-gold-dark" />
                <span><strong>Total Registered Members:</strong> {siteStats.totalMembers}</span>
              </div>
            </div>
          </form>

          {keyword && (
            <div className="mt-3 text-xs text-content-secondary flex items-center gap-2">
              <span>Showing results for: <strong className="text-maroon">&quot;{keyword}&quot;</strong> ({total} records found)</span>
              <Link href="/member-list" className="text-status-error underline">Clear search</Link>
            </div>
          )}
        </div>

        {/* Desktop Table (Hidden on Mobile) */}
        <div className="hidden md:block bg-white rounded-2xl border border-warm-border shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-maroon-dark text-white font-semibold uppercase tracking-wider text-[11px] border-b border-maroon-800">
                <tr>
                  <th className="py-3 px-3 w-12 text-center">#</th>
                  <th className="py-3 px-3 w-24">
                    <Link href={createSortUrl("hof_mid_no")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">
                      <span>MID</span>
                      <ArrowUpDown className="w-3 h-3 text-gold" />
                    </Link>
                  </th>
                  <th className="py-3 px-4 min-w-[160px]">
                    <Link href={createSortUrl("fullname")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">
                      <span>Name</span>
                      <ArrowUpDown className="w-3 h-3 text-gold" />
                    </Link>
                  </th>
                  <th className="py-3 px-4 min-w-[160px]">
                    <Link href={createSortUrl("father_name")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">
                      <span>Father/Husband Name</span>
                      <ArrowUpDown className="w-3 h-3 text-gold" />
                    </Link>
                  </th>
                  <th className="py-3 px-3">
                    <Link href={createSortUrl("native_place")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">
                      <span>Native Place</span>
                      <ArrowUpDown className="w-3 h-3 text-gold" />
                    </Link>
                  </th>
                  <th className="py-3 px-3">
                    <Link href={createSortUrl("city")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">
                      <span>City</span>
                      <ArrowUpDown className="w-3 h-3 text-gold" />
                    </Link>
                  </th>
                  <th className="py-3 px-4 w-60">
                    <Link href={createSortUrl("address")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">
                      <span>Permanent Address</span>
                      <ArrowUpDown className="w-3 h-3 text-gold" />
                    </Link>
                  </th>
                  <th className="py-3 px-3 w-32">
                    <Link href={createSortUrl("mobile")} className="inline-flex items-center gap-1 hover:text-gold transition-colors">
                      <span>Contact No</span>
                      <ArrowUpDown className="w-3 h-3 text-gold" />
                    </Link>
                  </th>
                  <th className="py-3 px-3 text-center w-16">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-warm-border">
                {items.length === 0 ? (
                  <tr>
                    <td colSpan={9} className="py-12 text-center text-content-secondary">
                      कोई सदस्य रिकॉर्ड नहीं मिला। (No member records found matching your query)
                    </td>
                  </tr>
                ) : (
                  items.map((member, index) => (
                    <tr
                      key={member.id}
                      className={cn(
                        "hover:bg-warm-muted/50 transition-colors",
                        index % 2 === 1 ? "bg-warm-bg/50" : "bg-white"
                      )}
                    >
                      <td className="py-3 px-3 text-center font-medium text-content-secondary text-xs">
                        {(currentPage - 1) * 20 + index + 1}.
                      </td>
                      <td className="py-3 px-3 font-bold text-maroon font-mono text-xs">
                        {member.mid}
                      </td>
                      <td className="py-3 px-4 font-semibold text-content-primary font-devanagari">
                        {member.fullname}
                      </td>
                      <td className="py-3 px-4 text-content-secondary font-devanagari">
                        {member.father_name}
                      </td>
                      <td className="py-3 px-3 text-content-secondary">
                        {member.native_place}
                      </td>
                      <td className="py-3 px-3 font-medium text-content-primary">
                        {member.city}
                      </td>
                      <td className="py-3 px-4 text-content-secondary text-xs line-clamp-2">
                        {member.address}
                      </td>
                      <td className="py-3 px-3 font-mono text-xs text-content-secondary">
                        {member.mobile}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <Link
                          href="/login"
                          title="View Family Details (Requires Login)"
                          className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-maroon-50 text-maroon hover:bg-maroon hover:text-white transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards (Shown on mobile screens < 768px) */}
        <div className="md:hidden space-y-4">
          {items.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-warm-border text-content-secondary">
              कोई सदस्य रिकॉर्ड नहीं मिला।
            </div>
          ) : (
            items.map((member, index) => (
              <div
                key={member.id}
                className="p-4 bg-white rounded-2xl border border-warm-border shadow-soft space-y-3"
              >
                <div className="flex items-start justify-between gap-2 border-b border-warm-border pb-2.5">
                  <div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-maroon-50 text-maroon font-bold">
                      {member.mid}
                    </span>
                    <h3 className="text-sm font-bold text-content-primary font-devanagari mt-1">
                      {member.fullname}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-content-muted">
                    #{(currentPage - 1) * 20 + index + 1}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-content-secondary">
                  <div>
                    <span className="text-content-muted">पिता / पति: </span>
                    <span className="font-medium text-content-primary font-devanagari">{member.father_name}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Building className="w-3.5 h-3.5 text-gold-dark flex-shrink-0" />
                    <span>मूल निवास: <strong>{member.native_place}</strong></span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-maroon flex-shrink-0" />
                    <span>वर्तमान नगर: <strong>{member.city}</strong></span>
                  </div>

                  <div className="text-[11px] leading-relaxed">
                    <span className="text-content-muted">स्थाई पता: </span>
                    <span>{member.address}</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[11px] text-maroon font-semibold pt-1">
                    <Phone className="w-3.5 h-3.5 text-gold-dark" />
                    <span>{member.mobile}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-warm-border">
                  <Link
                    href="/login"
                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-warm-muted hover:bg-maroon hover:text-white text-maroon font-bold text-xs transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>परिवार विवरण देखें (View Family)</span>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-warm-border shadow-soft">
            <p className="text-xs text-content-secondary">
              पृष्ठ <strong>{currentPage}</strong> of <strong>{totalPages}</strong> (कुल <strong>{total}</strong> रिकॉर्ड)
            </p>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1">
              {/* Prev */}
              {currentPage > 1 ? (
                <Link
                  href={createPageUrl(currentPage - 1)}
                  className="p-2 rounded-lg border border-warm-border hover:bg-maroon hover:text-white transition-colors text-xs font-semibold"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              ) : (
                <span className="p-2 rounded-lg border border-warm-border opacity-30 cursor-not-allowed">
                  <ChevronLeft className="w-4 h-4" />
                </span>
              )}

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => {
                  return (
                    p === 1 ||
                    p === totalPages ||
                    (p >= currentPage - 2 && p <= currentPage + 2)
                  );
                })
                .map((p, idx, arr) => {
                  const showEllipsisBefore = idx > 0 && p - arr[idx - 1] > 1;
                  return (
                    <React.Fragment key={p}>
                      {showEllipsisBefore && (
                        <span className="px-2 text-content-muted text-xs">...</span>
                      )}
                      <Link
                        href={createPageUrl(p)}
                        className={cn(
                          "w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-colors",
                          p === currentPage
                            ? "bg-maroon text-white shadow-sm"
                            : "border border-warm-border hover:bg-warm-muted text-content-primary"
                        )}
                      >
                        {p}
                      </Link>
                    </React.Fragment>
                  );
                })}

              {/* Next */}
              {currentPage < totalPages ? (
                <Link
                  href={createPageUrl(currentPage + 1)}
                  className="p-2 rounded-lg border border-warm-border hover:bg-maroon hover:text-white transition-colors text-xs font-semibold"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="p-2 rounded-lg border border-warm-border opacity-30 cursor-not-allowed">
                  <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
