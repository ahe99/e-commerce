import Image from 'next/image'

interface BannerImage {
  src: string
  blurHash?: string
  className?: string
  alt: string
}
export const BannerImage = ({
  src = '',
  blurHash = '',
  alt = '',
  className = '',
}: BannerImage) => {
  const hasBlurHash = !!blurHash
  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-md bg-slate-50 ${className}`}
    >
      <Image
        alt={alt}
        src={src}
        fill
        className="object-cover"
        draggable={false}
        sizes="100% 100%"
        priority={true}
        placeholder={hasBlurHash ? 'blur' : 'empty'}
        blurDataURL={hasBlurHash ? blurHash : ''}
      />
    </div>
  )
}
