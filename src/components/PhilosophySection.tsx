import React, { useState } from 'react';
import { PHILOSOPHY_PILLARS } from '../data/schoolData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section id="about" className="border-t border-stone-200/80 py-24 dark:border-stone-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Educational Philosophy
          </div>
          <h2 className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50">
            삶의 본질을 바꾸는 세 가지 지적 기둥
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-stone-300">
            “Learning for the better life”는 단순한 구호가 아닙니다. 
            스스로 사유하고, 세상과 연대하며, 자신의 삶을 가치 있게 설계해 나가는 
            Chan's School의 3대 교육 원칙입니다.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const isSelected = activePillar === idx;
            return (
              <div
                key={pillar.num}
                onClick={() => setActivePillar(idx)}
                className={`group cursor-pointer rounded-2xl border p-8 transition-all duration-300 ${
                  isSelected
                    ? 'border-stone-900 bg-stone-900 text-white shadow-md dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900'
                    : 'border-stone-200/80 bg-white/70 hover:border-stone-300 dark:border-stone-800/80 dark:bg-stone-900/60 dark:hover:border-stone-700'
                }`}
              >
                {/* Clean Editorial Numbering (No // or fake comment code) */}
                <div
                  className={`font-editorial text-4xl font-light tracking-tight ${
                    isSelected ? 'text-stone-400 dark:text-stone-500' : 'text-stone-400 dark:text-stone-600'
                  }`}
                >
                  {pillar.num}
                </div>

                <div className="mt-6">
                  <div
                    className={`text-xs font-semibold tracking-wider uppercase ${
                      isSelected ? 'text-stone-300 dark:text-stone-600' : 'text-stone-500 dark:text-stone-400'
                    }`}
                  >
                    {pillar.titleEn}
                  </div>
                  <h3
                    className={`mt-1 font-editorial text-2xl font-medium ${
                      isSelected ? 'text-white dark:text-stone-900' : 'text-stone-900 dark:text-stone-100'
                    }`}
                  >
                    {pillar.titleKo}
                  </h3>
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    isSelected ? 'text-stone-300 dark:text-stone-700' : 'text-stone-600 dark:text-stone-300'
                  }`}
                >
                  {pillar.description}
                </p>

                {/* Details list */}
                <div className="mt-8 space-y-2.5 border-t pt-6 border-stone-200/20 dark:border-stone-800/20">
                  {pillar.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-2.5 text-xs">
                      <CheckCircle2
                        className={`h-4 w-4 shrink-0 mt-0.5 ${
                          isSelected ? 'text-stone-300 dark:text-stone-700' : 'text-stone-700 dark:text-stone-300'
                        }`}
                      />
                      <span
                        className={
                          isSelected ? 'text-stone-200 dark:text-stone-800' : 'text-stone-700 dark:text-stone-300'
                        }
                      >
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                  <span>자세히 보기</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
