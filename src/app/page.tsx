import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/edbotcito.png"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last" />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unleash Your Creativity with EDbotcito
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Input your ideas and let our AI-powered story generator bring them to life. Unlock your imagination
                    and create captivating tales.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <Link href="/bot">
                      Generate Story
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bring Your Ideas to Life</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Input your creative ideas, and our AI-powered story generator will transform them into captivating
                  narratives. Unlock your imagination and explore new worlds.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Story Awaits</h2>
              <div className="prose text-muted-foreground">
                <p>
                  Once you have submitted your ideas, our AI-powered story generator will work its magic. Sit back and
                  watch as your creative vision unfolds before your eyes.
                </p>
                <p>
                  Discover the power of imagination and let your story come to life. Whether you are a seasoned writer or
                  just starting your creative journey, our story generator is here to help you unlock your full
                  potential.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Your Generated Story</h2>
              <div className="prose text-muted-foreground">
                <p>
                  Once you have submitted your ideas, the story will be displayed here. Our AI-powered generator will
                  transform your input into a captivating narrative.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
