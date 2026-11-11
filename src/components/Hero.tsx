import React from 'react';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { HERO_CAMPUS_IMAGE, SCHOOL_STATS } from '../data/schoolData';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePrograms: () => void;
  onExploreCampus: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onExplorePrograms,
  onExploreCampus,
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background subtle ambient warmth */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-stone-200/40 blur-3xl dark:bg-stone-800/20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Editorial Subtitle / Kicker (Text only, zero pills) */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
          <span>Chan's School</span>
          <span aria-hidden="true">·</span>
          <span>Excellence in Education</span>
          <span aria-hidden="true">·</span>
          <span>Est. 2018</span>
        </div>

        {/* The Core Slogan Headline: Learning for the better life */}
        <div className="mt-6 max-w-5xl">
          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-normal tracking-tight text-stone-900 leading-[1.04] text-balance dark:text-stone-50">
            Learning for <br className="hidden sm:inline" />
            <span className="italic font-normal text-stone-800 dark:text-stone-200">
              the better life.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed text-stone-600 dark:text-stone-300">
            단순한 정답 암기를 넘어 스스로 질문하고 세상을 탐구하는 지적 용기.
            <br className="hidden sm:inline" />
            Chan's School은 더 나은 삶과 미래를 주도적으로 열어가는
            글로벌 인재를 양성합니다.
          </p>

          {/* Interactive CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white whitespace-nowrap shrink-0"
            >
              <span>입학 상담 및 캠퍼스 투어</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={onExplorePrograms}
              className="inline-flex items-center gap-2 rounded-lg border border-stone-300 bg-white/80 px-6 py-3.5 text-sm font-medium text-stone-800 backdrop-blur-sm transition-all hover:border-stone-400 hover:bg-white dark:border-stone-700 dark:bg-stone-900/80 dark:text-stone-200 dark:hover:border-stone-600 dark:hover:bg-stone-900 whitespace-nowrap shrink-0"
            >
              <Sparkles className="h-4 w-4 text-stone-500" />
              <span>커리큘럼 살펴보기</span>
            </button>

            <button
              type="button"
              onClick={onExploreCampus}
              className="inline-flex items-center gap-2 rounded-lg px-4 py-3.5 text-sm font-medium text-stone-600 transition-colors hover:text-stone-950 dark:text-stone-400 dark:hover:text-stone-200 whitespace-nowrap shrink-0"
            >
              <Compass className="h-4 w-4" />
              <span>캠퍼스 공간 안내</span>
            </button>
          </div>
        </div>

        {/* Hero Visual: Large Architectural Campus Photography */}
        <div className="mt-14 relative overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100 shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-200 dark:bg-stone-800">
            <img
              src={HERO_CAMPUS_IMAGE}
              alt="Chan's School Campus Library and Modern Atrium"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              loading="eager"
            />
            {/* Subtle Gradient Scrim for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-300 font-semibold">
                  Main Learning Atrium & Ideas Archive
                </p>
                <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                  자연 채광과 사색이 어우러진 Chan's School 교정
                </h3>
              </div>
              <div className="text-xs text-stone-300">
                Seoul Gangnam Campus · Independent Academic Academy
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Key Metrics Strip (Placed full-width below hero per design guidelines) */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
          {SCHOOL_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-stone-200/80 bg-white/70 p-6 backdrop-blur-sm dark:border-stone-800/80 dark:bg-stone-900/60"
            >
              <div className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 dark:text-stone-50 tabular-nums">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-stone-800 dark:text-stone-200">
                {stat.label}
              </div>
              <div className="mt-0.5 text-xs text-stone-500 dark:text-stone-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
