export const OptImg = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <picture>
      <source type="image/avif" srcSet={`${src}.avif`} />
      <source type="image/webp" srcSet={`${src}.webp`} />
      <img src={`${src}.jpg`} alt={alt} />
    </picture>
  );
};
