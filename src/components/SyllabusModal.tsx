import React from 'react';
import { X, Clock, Users, UserCheck, BookOpen, ArrowRight } from 'lucide-react';
import { Program } from '../types';

interface SyllabusModalProps {
  program: Program | null;
  onClose: () => void;
  onBookConsultation: (programTitle: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  program,
  onClose,
  onBookConsultation,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl transition-all sm:p-8 dark:border-stone-800 dark:bg-stone-900 max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-5 dark:border-stone-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 dark:text-stone-400">
              <span>{program.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{program.targetGrade}</span>
            </div>
            <h3 className="mt-1 font-editorial text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
              {program.title}
            </h3>
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-300">
              {program.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-100 dark:border-stone-800 dark:text-stone-400 dark:hover:bg-stone-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Info Strip */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-xl border border-stone-200/80 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-950/60 text-xs">
          <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
            <Clock className="h-4 w-4 text-stone-500" />
            <span>{program.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
            <Users className="h-4 w-4 text-stone-500" />
            <span>{program.classSize}</span>
          </div>
          <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
            <UserCheck className="h-4 w-4 text-stone-500" />
            <span>{program.mentor}</span>
          </div>
        </div>

        {/* Summary & Highlights */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
            과정 개요
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            {program.summary}
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
            주요 학습 성과
          </h4>
          <ul className="mt-2.5 space-y-2">
            {program.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300"
              >
                <span className="font-semibold text-stone-900 dark:text-stone-100">·</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Syllabus Schedule */}
        <div className="mt-8 border-t border-stone-200 pt-6 dark:border-stone-800">
          <div className="flex items-center gap-2 text-sm font-semibold text-stone-900 dark:text-stone-100">
            <BookOpen className="h-4 w-4 text-stone-500" />
            <span>주차별 상세 실라버스 (Curriculum Roadmap)</span>
          </div>

          <div className="mt-4 space-y-3">
            {program.syllabus.map((item, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-stone-200/80 bg-stone-50/50 p-4 dark:border-stone-800 dark:bg-stone-950/40"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="text-xs font-semibold text-stone-500 dark:text-stone-400">
                    {item.week}
                  </span>
                  <span className="text-xs font-medium text-stone-900 dark:text-stone-100">
                    {item.topic}
                  </span>
                </div>
                <div className="mt-1.5 text-xs text-stone-600 dark:text-stone-400">
                  <span className="font-medium text-stone-700 dark:text-stone-300">
                    도출 산출물:
                  </span>{' '}
                  {item.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200 pt-5 dark:border-stone-800">
          <span className="text-xs text-stone-500 dark:text-stone-400">
            학기별 정원 마감제로 사전 진단 후 입반이 확정됩니다.
          </span>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookConsultation(program.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 px-6 py-3 text-xs font-semibold text-white shadow-sm hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
          >
            <span>이 과정 입학 상담 신청</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
