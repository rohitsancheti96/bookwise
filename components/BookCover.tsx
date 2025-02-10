import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type BookCoverVariants = 'extraSmall' | 'small' | 'medium' | 'regular' | 'wide';

const variantStyles: Record<BookCoverVariants, string> = {
    extraSmall: 'book-cover_extra_small',
    small: 'book-cover_small',
    medium: 'book-cover_medium',
    regular: 'book-cover_regular',
    wide: 'book-cover_wide',
}

export default function BookCover({
  variant = 'regular',
  className,
  coverColor = '#012B48',
  coverImage = "https://placehold.co/400x600.png",
}: {
  variant?: BookCoverVariants;
  className?: string;
  coverColor: string;
  coverImage: string;
}) {
  return (
    <div className={cn('relative transition-all duration-300', variantStyles[variant], className)}>
        Book SIDE SVG
      <div className="absolute z-10" style={{left: "12%", width: "87.5%", height: "88%"}}>
        <Image src={coverImage} alt="book cover" fill className="rounded-sm object-fill" />
      </div>
    </div>
  );
}
