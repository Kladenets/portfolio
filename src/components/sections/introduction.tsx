import AnimatedText from '@/components/animatedText';

interface SectionProps {
  id: string;
}

export default function Introduction({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="section mt-16" // Use theme colors
    >
      <div className="max-w-4xl text-center">
        {/* Name as the highlight */}
        <AnimatedText className="mb-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold pt-10 pb-10 bg-primary-400 dark:bg-primary-800 text-text tracking-tight">
            Kyle Kent
          </h1>
        </AnimatedText>

        {/* Subtitle */}
        <AnimatedText delay={0.3}>
          <p className="text-lg md:text-xl lg:text-2xl text-text ">
            I build crisp, clean, and engaging online experiences
          </p>
        </AnimatedText>

        {/* Optional: Add a subtle scroll down indicator */}
        <AnimatedText delay={0.8} className="mt-16">
          <div className="animate-bounce text-primary dark:text-secondary ">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
}
