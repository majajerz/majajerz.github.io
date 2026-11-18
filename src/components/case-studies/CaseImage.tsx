import Image from "next/image";

export interface CaseImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL: string;
  title: string;
  year: number;
}

export default function CaseImage({
  title,
  year,
  alt,
  ...image
}: CaseImageProps) {
  return (
    <Image
      {...image}
      alt={alt}
      title={`${title}, ${year}`}
      placeholder="blur"
      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 1080px"
    />
  );
}
