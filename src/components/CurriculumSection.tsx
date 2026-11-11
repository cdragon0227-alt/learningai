import React, { useState } from 'react';
import { PROGRAMS } from '../data/schoolData';
import { Program } from '../types';
import { ArrowUpRight, Clock, Users, BookOpen } from 'lucide-react';
import { SyllabusModal } from './SyllabusModal';

interface CurriculumSectionProps {
  onBookConsultation: (programTitle?: string) => void;
}

export const CurriculumSection: React.FC<CurriculumSectionProps> = ({ onBookConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  const categories = [
    { id: 'all', label: '전체 프로그램 (All)' },
    { id: 'primary', label: '초등 창의 탐구' },
    { id: 'middle', label: '중등 융합 디베이트' },
    { id: 'high', label: '고등 심화 리서치' },
    { id: 'global', label: '글로벌 진로 포트폴리오' },
  ];

  const filteredPrograms =
    selectedCategory === 'all'
      ? PROGRAMS
      : PROGRAMS.filter((p) => p.category === selectedCategory);

  return (
    <section id="programs" className="border-t border-stone-200/80 py-24 dark:border-stone-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              Academic Curricula
            </div>
            <h2 className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50">
              체계적이고 깊이 있는 학업 트랙
            </h2>
            <p className="mt-4 text-base text-stone-600 dark:text-stone-300">
              기초 창의력 발굴부터 대학 수준의 심층 학술 리서치까지, 
              학생의 지적 호기심과 잠재력에 맞추어 유기적으로 연결되는 교육 과정입니다.
            </p>
          </div>

          <div className="text-xs text-stone-500 dark:text-stone-400">
            총 <span className="font-semibold text-stone-900 dark:text-stone-100 tabular-nums">{PROGRAMS.length}개</span> 정규 심화 과정 운영
          </div>
        </div>

        {/* Interactive Filter Tabs (Segmented controls with proper click handlers) */}
        <div className="mt-12 flex flex-wrap items-center gap-1.5 rounded-xl border border-stone-200 bg-stone-100/80 p-1.5 dark:border-stone-800 dark:bg-stone-900/80">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-lg px-4 py-2 text-xs font-medium transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-white text-stone-900 shadow-xs dark:bg-stone-800 dark:text-white'
                    : 'text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Programs Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white/70 p-8 transition-all hover:border-stone-300 hover:shadow-xs dark:border-stone-800/80 dark:bg-stone-900/60 dark:hover:border-stone-700"
            >
              <div>
                {/* Zero-Pill Metadata (Clean text with typographic separators) */}
                <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                  <span className="font-semibold text-stone-800 dark:text-stone-200">
                    {program.categoryLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{program.targetGrade}</span>
                </div>

                <h3 className="mt-3 font-editorial text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
                  {program.title}
                </h3>
                <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 font-medium">
                  {program.subtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
                  {program.summary}
                </p>

                {/* Highlights */}
                <div className="mt-6 border-t border-stone-100 pt-5 dark:border-stone-800/60">
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                    Key Focus Points
                  </div>
                  <ul className="mt-2.5 space-y-1.5">
                    {program.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-stone-700 dark:text-stone-300"
                      >
                        <span className="font-bold text-stone-400 dark:text-stone-500">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Info Strip & Action */}
              <div className="mt-8 border-t border-stone-200/80 pt-6 dark:border-stone-800/80">
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    <span>{program.classSize}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProgram(program)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-stone-300 bg-stone-50 py-2.5 text-xs font-medium text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-800/70 dark:text-stone-200 dark:hover:bg-stone-800"
                  >
                    <BookOpen className="h-3.5 w-3.5 text-stone-500" />
                    <span>실라버스 상세 보기</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookConsultation(program.title)}
                    className="inline-flex items-center justify-center gap-1 rounded-lg bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white shrink-0"
                  >
                    <span>상담 신청</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <SyllabusModal
        program={activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
        onBookConsultation={(title) => {
          setActiveModalProgram(null);
          onBookConsultation(title);
        }}
      />
    </section>
  );
};
