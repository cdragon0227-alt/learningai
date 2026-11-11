import React from 'react';
import { ADMISSION_STEPS, NOTICES } from '../data/schoolData';
import { Calendar, ArrowRight, CheckCircle2, Megaphone } from 'lucide-react';

interface AdmissionsSectionProps {
  onOpenBooking: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="admissions" className="border-t border-stone-200/80 py-24 dark:border-stone-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              Admissions Procedure
            </div>
            <h2 className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50">
              입학 전형 및 선발 절차
            </h2>
            <p className="mt-4 text-base text-stone-600 dark:text-stone-300">
              Chan's School은 정형화된 점수 대신 학생의 지적 호기심과 잠재력을 면밀히 평가합니다.
              체계적인 4단계 입학 전형을 통해 가장 최적의 배움 환경을 매칭합니다.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 rounded-lg bg-stone-900 px-6 py-3.5 text-xs font-semibold text-white shadow-sm hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <span>온라인 입학 상담 예약</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ADMISSION_STEPS.map((step) => (
            <div
              key={step.step}
              className="flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white/70 p-6 dark:border-stone-800/80 dark:bg-stone-900/60"
            >
              <div>
                <div className="font-editorial text-4xl font-light text-stone-400 dark:text-stone-600">
                  {step.step}
                </div>

                <div className="mt-4 text-xs font-semibold text-stone-500 dark:text-stone-400">
                  {step.period}
                </div>

                <h3 className="mt-1 font-editorial text-xl font-medium text-stone-900 dark:text-stone-50">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 border-t border-stone-100 pt-4 dark:border-stone-800/60">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  평가 및 제출 항목
                </div>
                <div className="mt-2 space-y-1">
                  {step.requirements.map((req, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 text-xs text-stone-700 dark:text-stone-300"
                    >
                      <CheckCircle2 className="h-3 w-3 shrink-0 text-stone-500" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice & Event Banner */}
        <div className="mt-12 rounded-2xl border border-stone-200/80 bg-stone-100/70 p-6 lg:p-8 dark:border-stone-800 dark:bg-stone-900/40">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300">
            <Megaphone className="h-4 w-4" />
            <span>최신 학사 공지 및 입학 설명회 안내</span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {NOTICES.map((notice, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between gap-4 rounded-xl border border-stone-200/80 bg-white p-4 dark:border-stone-800 dark:bg-stone-950/60"
              >
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400">
                    <span className="font-semibold text-stone-900 dark:text-stone-100">
                      [{notice.tag}]
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{notice.date}</span>
                  </div>
                  <h4 className="mt-1 text-xs sm:text-sm font-medium text-stone-800 hover:text-stone-950 dark:text-stone-200 dark:hover:text-white">
                    {notice.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
