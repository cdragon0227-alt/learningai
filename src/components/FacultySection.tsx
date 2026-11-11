import React from 'react';
import { FACULTY_MEMBERS } from '../data/schoolData';
import { GraduationCap, BookOpen, Quote } from 'lucide-react';

interface FacultySectionProps {
  onBookConsultation: (mentorName?: string) => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({ onBookConsultation }) => {
  return (
    <section id="faculty" className="border-t border-stone-200/80 py-24 dark:border-stone-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
              Distinguished Faculty & Mentors
            </div>
            <h2 className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50">
              세계를 선도하는 학술 멘토단
            </h2>
            <p className="mt-4 text-base text-stone-600 dark:text-stone-300">
              하버드, 스탠포드, 옥스퍼드 등 세계 최상위 연구 환경에서 검증된 
              석학들이 학생 개개인의 지적 여정을 1:1로 밀착 지도합니다.
            </p>
          </div>
          <div className="text-xs text-stone-500 dark:text-stone-400">
            전임 교수진 100% 석·박사 학위 소지 및 풍부한 연구 실적
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white/70 p-6 transition-all hover:border-stone-300 dark:border-stone-800/80 dark:bg-stone-900/60 dark:hover:border-stone-700"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {member.department}
                </div>

                <h3 className="mt-2 font-editorial text-2xl font-medium text-stone-900 dark:text-stone-50">
                  {member.name}
                </h3>
                <div className="text-xs text-stone-600 dark:text-stone-400">
                  {member.nameEn} · {member.role}
                </div>

                {/* Education */}
                <div className="mt-4 flex items-start gap-2 border-t border-stone-100 pt-4 text-xs text-stone-600 dark:border-stone-800/60 dark:text-stone-300">
                  <GraduationCap className="h-4 w-4 shrink-0 text-stone-500 mt-0.5" />
                  <span>{member.education}</span>
                </div>

                {/* Quote */}
                <div className="mt-4 rounded-xl bg-stone-50 p-3.5 text-xs italic text-stone-600 dark:bg-stone-950/50 dark:text-stone-400 leading-relaxed relative">
                  <Quote className="h-3 w-3 text-stone-400 dark:text-stone-600 mb-1" />
                  {member.quote}
                </div>

                {/* Courses */}
                <div className="mt-5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-700 dark:text-stone-300">
                    <BookOpen className="h-3.5 w-3.5 text-stone-500" />
                    <span>담당 심화 세미나</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {member.courses.map((course, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-stone-500 dark:text-stone-400"
                      >
                        · {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 border-t border-stone-200/60 pt-4 dark:border-stone-800/60">
                <button
                  type="button"
                  onClick={() => onBookConsultation(`${member.name} (${member.role})`)}
                  className="w-full rounded-lg border border-stone-200 bg-white py-2 text-xs font-medium text-stone-700 transition-colors hover:border-stone-400 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  멘토 상담 문의
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
