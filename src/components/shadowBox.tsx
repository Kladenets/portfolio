// components/AnimatedText.tsx
import { twJoin } from 'tailwind-merge';

interface ShadowBoxProps {
  children: React.ReactNode;
  delay?: number; // Optional delay
  shadowBorderStyles?: string; // Allow passing additional classes
  mainBorderStyles?: string;
  className?: string; // Allow passing additional classes
  transform?: { x: number; y: number };
}

export default function ShadowBox({
  children,
  shadowBorderStyles,
  mainBorderStyles,
  className,
  transform = { x: 6, y: 6 },
}: ShadowBoxProps) {
  // border-4 border-secondary-200 dark:border-secondary-800
  const shadowClasses = twJoin(
    'absolute top-0 left-0 z-0 my-transition-colors',
    shadowBorderStyles
  );

  // text-text border-4 border-secondary-500 dark:border-secondary-300
  const contentClasses = twJoin(
    'relative block bg-background z-10 my-transition-colors',
    mainBorderStyles
  );

  const mainClasses = twJoin('relative', className);

  return (
    <div className={mainClasses}>
      <div
        className={shadowClasses}
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px)`,
        }}
      ></div>

      <div className={contentClasses}>
        {/* border on h3 is just on the bottom and separates the title from the content */}
        {children}
      </div>
    </div>
  );
}
