import Image from 'next/image'

interface ProductImageProps {
  src: string
  blurHash?: string
  className?: string
  alt: string
}

export const ProductImage = ({
  src = '',
  blurHash = '',
  alt = '',
  className = '',
}: ProductImageProps) => {
  const hasBlurHash = !!blurHash
  return (
    <div className={`relative aspect-square rounded-md ${className}`}>
      <Image
        alt={alt}
        src={src}
        fill
        loading="lazy"
        sizes="100% 100%"
        className="object-contain"
        placeholder={hasBlurHash ? 'blur' : 'empty'}
        blurDataURL={hasBlurHash ? blurHash : ''}
      />
    </div>
  )
}
