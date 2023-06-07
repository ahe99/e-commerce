import Image from 'next/image'

interface ProductImageProps {
  src: string
  className?: string
  alt: string
}

export const ProductImage = ({
  src = '',
  alt = '',
  className = '',
}: ProductImageProps) => {
  return (
    <div className={`relative aspect-square rounded-md ${className}`}>
      <Image
        alt={alt}
        src={src}
        fill
        loading="lazy"
        sizes="100% 100%"
        className="object-contain"
      />
    </div>
  )
}
