import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans px-6 md:px-16 py-10">

      {/* NAVBAR */}
      <nav className="flex gap-5 text-sm md:text-base tracking-normal mb-10">
        <Link href="/">lacunyada</Link>
        <Link href="/objects">.objects</Link>
        <Link href="/exhibitions">.exhibitions</Link>
        <Link href="/about">.about</Link>
        <Link href="/order">.order</Link>
      </nav>

      {/* TEXTO */}
      <div className="max-w-6xl">
        <p className="text-3xl md:text-6xl leading-tight mb-10">
          .lacunyada is a research project focused on objects, material exploration and experimental form.
        </p>
      </div>

<div className="mt-10 w-full flex flex-col justify-end min-h-[60vh]">

  <div className="flex items-end justify-end gap-[3vw] px-6 md:px-16">

    {/* VIDEO */}
    <video
      src="/video.mp4"
      className="w-[40vw] max-w-[520px] min-w-[180px] h-auto object-cover"
      autoPlay
      muted
      loop
      playsInline
    />

    {/* IMAGEN */}
    <img
      src="/image.jpg"
      alt="project"
      className="w-[40vw] max-w-[420px] min-w-[100px] h-auto object-cover"
    />

  </div>

</div>

    </main>
  );
}
  