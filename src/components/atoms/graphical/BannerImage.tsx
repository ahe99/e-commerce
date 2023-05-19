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
        loading="eager"
        alt={alt}
        src={src}
        fill
        className="object-cover"
        draggable={false}
        sizes="100% 100%"
        placeholder={hasBlurHash ? 'blur' : 'empty'}
        blurDataURL={hasBlurHash ? blurHash : ''}
      />
    </div>
  )
}
