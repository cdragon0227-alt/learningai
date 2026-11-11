import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, Mail, User, School, ArrowRight } from 'lucide-react';
import { ConsultationBooking } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTrack?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTrack = '',
}) => {
  const [formData, setFormData] = useState<ConsultationBooking>({
    parentName: '',
    studentName: '',
    studentGrade: '고등 1학년 (G10)',
    phone: '',
    email: '',
    track: initialTrack || '미래 AI 컴퓨팅 & 융합 과학 심화',
    visitDate: '2026-11-28',
    visitTime: '14:00',
    memo: '',
  });

  const [submittedData, setSubmittedData] = useState<ConsultationBooking | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.parentName.trim()) errs.parentName = '학부모 성함을 입력해주세요.';
    if (!formData.studentName.trim()) errs.studentName = '학생 이름을 입력해주세요.';
    if (!formData.phone.trim()) {
      errs.phone = '연락처를 입력해주세요.';
    } else if (!/^[0-9\-+\s]{9,15}$/.test(formData.phone)) {
      errs.phone = '올바른 전화번호 형식을 입력해주세요.';
    }
    if (!formData.email.trim()) {
      errs.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = '올바른 이메일 형식을 입력해주세요.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomId = Math.floor(1000 + Math.random() * 9000);
    const bookingCode = `CS-2026-${randomId}`;

    setSubmittedData({
      ...formData,
      bookingCode,
    });
  };

  const handleReset = () => {
    setSubmittedData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-xl rounded-2xl border border-stone-200 bg-white p-6 shadow-2xl transition-all sm:p-8 dark:border-stone-800 dark:bg-stone-900 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-5 dark:border-stone-800">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Admissions & Campus Visit
            </div>
            <h3 className="mt-1 font-editorial text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
              {submittedData ? '입학 상담 예약 완료' : '1:1 입학 상담 및 캠퍼스 투어 신청'}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-100 dark:border-stone-800 dark:text-stone-400 dark:hover:bg-stone-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submittedData ? (
          /* Confirmation State */
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-6 text-center dark:border-emerald-900/40 dark:bg-emerald-950/30">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600 dark:text-emerald-400" />
              <h4 className="mt-3 font-editorial text-2xl font-medium text-emerald-950 dark:text-emerald-100">
                상담 예약이 정상 접수되었습니다
              </h4>
              <p className="mt-1 text-xs text-emerald-800 dark:text-emerald-300">
                접수 확인 문자 및 안내 메일이 발송되었습니다. 담당 상담관이 24시간 이내에 확인 전화를 드립니다.
              </p>

              <div className="mt-4 inline-block rounded-lg bg-emerald-100/80 px-4 py-2 font-mono text-sm font-bold tracking-wider text-emerald-900 dark:bg-emerald-900/50 dark:text-emerald-200">
                예약 번호: {submittedData.bookingCode}
              </div>
            </div>

            {/* Booking Details Card */}
            <div className="rounded-xl border border-stone-200/80 bg-stone-50 p-5 dark:border-stone-800 dark:bg-stone-950/50 space-y-3 text-xs">
              <div className="flex justify-between border-b border-stone-200/60 pb-2 dark:border-stone-800/60">
                <span className="text-stone-500 dark:text-stone-400">학생 / 학부모</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {submittedData.studentName} ({submittedData.studentGrade}) / {submittedData.parentName} 님
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-200/60 pb-2 dark:border-stone-800/60">
                <span className="text-stone-500 dark:text-stone-400">희망 일시</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {submittedData.visitDate} {submittedData.visitTime}
                </span>
              </div>
              <div className="flex justify-between border-b border-stone-200/60 pb-2 dark:border-stone-800/60">
                <span className="text-stone-500 dark:text-stone-400">관심 트랙</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  {submittedData.track}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 dark:text-stone-400">캠퍼스 위치</span>
                <span className="font-semibold text-stone-900 dark:text-stone-100">
                  서울 강남구 테헤란로 425 Chan's School 3F 입학처
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full rounded-lg bg-stone-900 py-3 text-xs font-semibold text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
              >
                확인 및 닫기
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                  학부모 성명 <span className="text-rose-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="예: 홍길동"
                    className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 dark:focus:border-stone-100"
                  />
                </div>
                {errors.parentName && (
                  <p className="mt-1 text-[11px] text-rose-500">{errors.parentName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                  학생 성명 <span className="text-rose-500">*</span>
                </label>
                <div className="mt-1 relative">
                  <input
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    placeholder="예: 홍민준"
                    className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 dark:focus:border-stone-100"
                  />
                </div>
                {errors.studentName && (
                  <p className="mt-1 text-[11px] text-rose-500">{errors.studentName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                  연락처 (휴대전화) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="010-1234-5678"
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 dark:focus:border-stone-100"
                />
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-rose-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                  이메일 주소 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 dark:focus:border-stone-100"
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-rose-500">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                  학생 현재 학년
                </label>
                <select
                  value={formData.studentGrade}
                  onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100"
                >
                  <option value="초등 4학년">초등 4학년 (G4)</option>
                  <option value="초등 5학년">초등 5학년 (G5)</option>
                  <option value="초등 6학년">초등 6학년 (G6)</option>
                  <option value="중등 1학년">중등 1학년 (G7)</option>
                  <option value="중등 2학년">중등 2학년 (G8)</option>
                  <option value="중등 3학년">중등 3학년 (G9)</option>
                  <option value="고등 1학년 (G10)">고등 1학년 (G10)</option>
                  <option value="고등 2학년 (G11)">고등 2학년 (G11)</option>
                  <option value="고등 3학년 (G12)">고등 3학년 (G12)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                  관심 프로그램 트랙
                </label>
                <input
                  type="text"
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  placeholder="예: Future AI 랩 또는 인문 디베이트"
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                  방문 희망 날짜
                </label>
                <input
                  type="date"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                  방문 희망 시간
                </label>
                <select
                  value={formData.visitTime}
                  onChange={(e) => setFormData({ ...formData, visitTime: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100"
                >
                  <option value="10:00">오전 10:00</option>
                  <option value="11:30">오전 11:30</option>
                  <option value="14:00">오후 02:00</option>
                  <option value="15:30">오후 03:30</option>
                  <option value="17:00">오후 05:00</option>
                  <option value="19:00 (야간상담)">오후 07:00 (야간 상담)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-700 dark:text-stone-300">
                사전 문의 및 학생 성향 (선택)
              </label>
              <textarea
                rows={3}
                value={formData.memo}
                onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
                placeholder="학생의 현재 고민이나 중점 상담을 원하시는 영역을 자유롭게 기재해주세요."
                className="mt-1 w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs text-stone-900 focus:border-stone-900 focus:outline-hidden dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-stone-900 py-3 text-xs font-semibold text-white shadow-sm hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-white"
              >
                <span>상담 예약 확정 신청</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-2 text-center text-[11px] text-stone-500 dark:text-stone-400">
                수집된 정보는 입학 상담 및 안내 목적 외에는 사용되지 않습니다.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
