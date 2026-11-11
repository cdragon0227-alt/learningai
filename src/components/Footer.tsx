import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200/80 bg-stone-100/60 py-16 dark:border-stone-800/80 dark:bg-stone-950/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & Slogan */}
          <div className="md:col-span-5">
            <span className="font-editorial text-2xl font-semibold tracking-normal text-stone-900 dark:text-stone-50">
              Chan's School
            </span>
            <p className="mt-2 font-editorial text-lg italic text-stone-600 dark:text-stone-400">
              Learning for the better life.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-stone-500 dark:text-stone-400">
              찬스 스쿨은 학생이 자신의 삶과 세상을 바꿀 수 있는 지적 호기심과 주도적 탐구 역량을 길러내는 프리미엄 아카데믹 스쿨입니다.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-4 text-xs">
            <div>
              <div className="font-semibold text-stone-900 dark:text-stone-100">
                School
              </div>
              <ul className="mt-3 space-y-2 text-stone-600 dark:text-stone-400">
                <li><a href="#about" className="hover:text-stone-900 dark:hover:text-white">교육 철학</a></li>
                <li><a href="#programs" className="hover:text-stone-900 dark:hover:text-white">학업 트랙 & 실라버스</a></li>
                <li><a href="#campus" className="hover:text-stone-900 dark:hover:text-white">캠퍼스 시설 안내</a></li>
                <li><a href="#faculty" className="hover:text-stone-900 dark:hover:text-white">교수진 소개</a></li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-stone-900 dark:text-stone-100">
                Admissions
              </div>
              <ul className="mt-3 space-y-2 text-stone-600 dark:text-stone-400">
                <li><a href="#admissions" className="hover:text-stone-900 dark:hover:text-white">입학 전형 절차</a></li>
                <li><a href="#admissions" className="hover:text-stone-900 dark:hover:text-white">입학 설명회 일정</a></li>
                <li><a href="#admissions" className="hover:text-stone-900 dark:hover:text-white">진단 평가 안내</a></li>
                <li><a href="#admissions" className="hover:text-stone-900 dark:hover:text-white">자주 묻는 질문</a></li>
              </ul>
            </div>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-3 text-xs text-stone-600 dark:text-stone-400 space-y-2.5">
            <div className="font-semibold text-stone-900 dark:text-stone-100">
              Campus Info
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-3.5 w-3.5 shrink-0 mt-0.5 text-stone-500" />
              <span>서울특별시 강남구 테헤란로 425 Chan's School 3F-5F</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 shrink-0 text-stone-500" />
              <span>02-582-7700 (상담실 직통)</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5 shrink-0 text-stone-500" />
              <span>admissions@chans-school.edu</span>
            </div>
            <div className="pt-2 text-[11px] text-stone-500">
              상담 운영: 월~금 09:00 - 20:00 / 토 09:00 - 18:00
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200/80 pt-6 text-[11px] text-stone-500 dark:border-stone-800/80 dark:text-stone-400">
          <div>
            © {new Date().getFullYear()} Chan's School. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>개인정보 처리방침</span>
            <span>이용약관</span>
            <span>학원 등록번호 제2024-08호</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-950 dark:text-stone-300 dark:hover:text-white"
            >
              <span>맨 위로</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
