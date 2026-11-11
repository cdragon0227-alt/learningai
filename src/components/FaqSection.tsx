import React, { useState } from 'react';
import { FAQS } from '../data/schoolData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="border-t border-stone-200/80 py-24 dark:border-stone-800/80">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Frequently Asked Questions
          </div>
          <h2 className="mt-3 font-editorial text-3xl sm:text-4xl font-normal text-stone-900 dark:text-stone-50">
            자주 묻는 질문
          </h2>
          <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
            Chan's School의 입학, 커리큘럼, 학생 선발에 관해 가장 많이 문의하시는 내용입니다.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-stone-200/80 bg-white/70 transition-colors dark:border-stone-800/80 dark:bg-stone-900/60"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-stone-900 transition-colors hover:text-stone-700 dark:text-stone-100 dark:hover:text-stone-300"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-stone-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-stone-100 px-5 pt-3 pb-5 text-xs sm:text-sm leading-relaxed text-stone-600 dark:border-stone-800/60 dark:text-stone-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
