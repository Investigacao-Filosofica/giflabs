'use client';

import { FileText, Download, File } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import type { StrapiImage } from '@/types/blog';

interface AttachmentListProps {
  attachments: StrapiImage[];
}

// Função para obter ícone baseado na extensão do arquivo
function getFileIcon(name: string) {
  const ext = name.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'pdf':
      return FileText;
    case 'doc':
    case 'docx':
      return FileText;
    case 'xls':
    case 'xlsx':
      return File;
    case 'ppt':
    case 'pptx':
      return File;
    default:
      return File;
  }
}

// Função para formatar tamanho do arquivo
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

export function AttachmentList({ attachments }: AttachmentListProps) {
  const { t } = useLanguage();
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

  if (!attachments || attachments.length === 0) {
    return null;
  }

  return (
    <div className="mb-12 rounded-lg border border-neutral-200 bg-white p-6">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500">
        {t('blog.attachments') || 'Materiais para Download'}
      </h3>
      <div className="space-y-3">
        {attachments.map((attachment) => {
          const IconComponent = getFileIcon(attachment.name);
          const fileUrl = attachment.url.startsWith('http')
            ? attachment.url
            : `${STRAPI_URL}${attachment.url}`;
          
          // Tentar obter tamanho do arquivo (pode estar em diferentes lugares dependendo do tipo)
          const fileSize = (attachment as any).size 
            ? formatFileSize(Number((attachment as any).size)) 
            : null;

          return (
            <Link
              key={attachment.id}
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 transition-all hover:border-neutral-300 hover:bg-white hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-neutral-200 text-neutral-600 transition-colors group-hover:bg-neutral-300">
                <IconComponent className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-neutral-900 group-hover:text-neutral-700 truncate">
                  {attachment.name}
                </p>
                {fileSize && (
                  <p className="text-sm text-neutral-500">{fileSize}</p>
                )}
              </div>
              <Download className="h-5 w-5 flex-shrink-0 text-neutral-400 transition-colors group-hover:text-neutral-600" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
