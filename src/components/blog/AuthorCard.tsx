'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Linkedin, Github, ExternalLink } from 'lucide-react';
import type { Author } from '@/types/blog';
import { getStrapiImageUrl } from '@/lib/strapi';

interface AuthorCardProps {
  author: Author;
  size?: 'sm' | 'md' | 'lg';
  showBio?: boolean;
  linkToProfile?: boolean;
}

export function AuthorCard({
  author,
  size = 'md',
  showBio = true,
  linkToProfile = true,
}: AuthorCardProps) {
  const avatarUrl = getStrapiImageUrl(author.avatar?.url);

  const sizes = {
    sm: { avatar: 40, text: 'text-sm' },
    md: { avatar: 56, text: 'text-base' },
    lg: { avatar: 80, text: 'text-lg' },
  };

  const config = sizes[size];

  const content = (
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div
        className="relative flex-shrink-0 overflow-hidden rounded-full bg-neutral-200"
        style={{ width: config.avatar, height: config.avatar }}
      >
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={author.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-neutral-400">
            <span className="text-xl">👤</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1">
        <h4 className={`font-semibold text-neutral-900 ${config.text}`}>
          {author.name}
        </h4>
        {author.role && (
          <p className="text-sm text-neutral-500">{author.role}</p>
        )}
        {showBio && author.bio && (
          <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
            {author.bio}
          </p>
        )}

        {/* Social Links */}
        {author.social_links && (
          <div className="mt-3 flex gap-3">
            {author.social_links.twitter && (
              <a
                href={author.social_links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-neutral-900"
              >
                <Twitter className="h-4 w-4" />
              </a>
            )}
            {author.social_links.linkedin && (
              <a
                href={author.social_links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-neutral-900"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            )}
            {author.social_links.github && (
              <a
                href={author.social_links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-neutral-900"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {author.social_links.lattes && (
              <a
                href={author.social_links.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-neutral-900"
                title="Lattes"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );

  if (linkToProfile) {
    return (
      <Link
        href={`/blog?author=${author.slug}`}
        className="block rounded-lg p-4 transition-colors hover:bg-neutral-50"
      >
        {content}
      </Link>
    );
  }

  return <div className="p-4">{content}</div>;
}
