export default function PageBanner({ title, image }) {
  return (
    <section
      className={`relative flex min-h-[180px] items-end overflow-hidden border-b-4 border-red-600 px-5 pb-7 pt-14 sm:min-h-[220px] sm:px-8 sm:pb-9 lg:min-h-[260px] lg:px-12 ${
        image ? 'bg-cover bg-center' : 'bg-gray-100'
      }`}
      style={image ? { backgroundImage: `url('${image}')` } : undefined}
    >
      {image && <div className="absolute inset-0 bg-black/30" aria-hidden="true" />}
      <div className="relative z-10">
        <h1 className={`text-3xl font-bold sm:text-4xl ${image ? 'text-white' : 'text-gray-800'}`}>
          {title}
        </h1>
        <p className={`mt-1 text-sm font-medium sm:text-base ${image ? 'text-white/90' : 'text-gray-500'}`}>
          Home &gt; {title}
        </p>
      </div>
    </section>
  );
}