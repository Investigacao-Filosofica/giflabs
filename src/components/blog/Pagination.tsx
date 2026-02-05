'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
  queryParams?: Record<string, string>;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath = '/blog',
  queryParams = {},
}: PaginationProps) {
  const { t } = useLanguage();

  if (totalPages <= 1) return null;

  const buildUrl = (page: number) => {
    const params = new URLSearchParams(queryParams);
    if (page > 1) {
      params.set('page', String(page));
    } else {
      params.delete('page');
    }
    const queryString = params.toString();
    return queryString ? `${basePath}?${queryString}` : basePath;
  };

  const pages = [];
  const showEllipsisStart = currentPage > 3;
  const showEllipsisEnd = currentPage < totalPages - 2;

  // Primeira página
  pages.push(1);

  // Ellipsis início
  if (showEllipsisStart) {
    pages.push('...');
  }

  // Páginas ao redor da atual
  for (
    let i = Math.max(2, currentPage - 1);
    i <= Math.min(totalPages - 1, currentPage + 1);
    i++
  ) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  // Ellipsis fim
  if (showEllipsisEnd) {
    pages.push('...');
  }

  // Última página
  if (totalPages > 1 && !pages.includes(totalPages)) {
    pages.push(totalPages);
  }

  return (
    <nav className="flex items-center justify-center gap-2" aria-label="Paginação">
      {/* Anterior */}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage <= 1}
        asChild={currentPage > 1}
        className="border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 disabled:opacity-50"
      >
        {currentPage > 1 ? (
          <Link href={buildUrl(currentPage - 1)}>
            <ChevronLeft className="mr-1 h-4 w-4" />
            {t('blog.pagination.previous') || 'Anterior'}
          </Link>
        ) : (
          <span>
            <ChevronLeft className="mr-1 h-4 w-4" />
            {t('blog.pagination.previous') || 'Anterior'}
          </span>
        )}
      </Button>

      {/* Números */}
      <div className="flex items-center gap-1">
        {pages.map((page, index) =>
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="px-2 text-neutral-400">
              ...
            </span>
          ) : (
            <Button
              key={page}
              variant={page === currentPage ? 'default' : 'outline'}
              size="sm"
              asChild={page !== currentPage}
              className={
                page === currentPage
                  ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                  : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
              }
            >
              {page !== currentPage ? (
                <Link href={buildUrl(page as number)}>{page}</Link>
              ) : (
                <span>{page}</span>
              )}
            </Button>
          )
        )}
      </div>

      {/* Próxima */}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage >= totalPages}
        asChild={currentPage < totalPages}
        className="border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 disabled:opacity-50"
      >
        {currentPage < totalPages ? (
          <Link href={buildUrl(currentPage + 1)}>
            {t('blog.pagination.next') || 'Próxima'}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        ) : (
          <span>
            {t('blog.pagination.next') || 'Próxima'}
            <ChevronRight className="ml-1 h-4 w-4" />
          </span>
        )}
      </Button>
    </nav>
  );
}
