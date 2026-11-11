import React from 'react';
import { STUDENT_STORIES } from '../data/schoolData';
import { Award, GraduationCap } from 'lucide-react';

export const StudentStoriesSection: React.FC = () => {
  return (
    <section className="border-t border-stone-200/80 py-24 dark:border-stone-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Student Transformations & Impact
          </div>
          <h2 className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50">
            배움이 만든 삶의 변화와 결실
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-stone-300">
            Chan's School의 학생들은 단순히 시험 점수를 올리는 것을 넘어, 
            자신만의 독창적인 탐구 프로젝트를 완성하고 세계 유수의 무대로 뻗어나갑니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {STUDENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white/70 p-8 dark:border-stone-800/80 dark:bg-stone-900/60"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-2 border-b border-stone-100 pb-4 dark:border-stone-800">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-stone-700 dark:text-stone-300" />
                    <span className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                      {story.studentName}
                    </span>
                  </div>
                  <span className="text-xs text-stone-500 dark:text-stone-400">
                    {story.classYear}
                  </span>
                </div>

                {/* Outcome badge */}
                <div className="mt-4 text-xs font-semibold text-stone-900 dark:text-stone-100">
                  {story.currentPath}
                </div>

                <h3 className="mt-3 font-editorial text-xl font-medium text-stone-900 dark:text-stone-50">
                  “{story.title}”
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {story.story}
                </p>
              </div>

              {/* Key project outcome */}
              <div className="mt-6 border-t border-stone-100 pt-5 dark:border-stone-800">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300">
                  <Award className="h-3.5 w-3.5 text-stone-500" />
                  <span>대표 탐구 프로젝트</span>
                </div>
                <div className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                  {story.keyProject}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
