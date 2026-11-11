import React, { useState } from 'react';
import { Sparkles, Calendar, BookOpen, Award, ArrowRight, RotateCcw } from 'lucide-react';

interface PathwayPlannerProps {
  onApplyPlan: (planSummary: string) => void;
}

export const InteractivePathwayPlanner: React.FC<PathwayPlannerProps> = ({ onApplyPlan }) => {
  const [grade, setGrade] = useState<'primary' | 'middle' | 'high'>('high');
  const [track, setTrack] = useState<'stem' | 'humanities' | 'maker' | 'global'>('stem');
  const [goal, setGoal] = useState<'paper' | 'debate' | 'olympiad' | 'portfolio'>('paper');

  // Computed recommendation
  const getRecommendation = () => {
    let title = '';
    let mentor = '';
    let hours = '';
    let milestones = [''];
    let quote = '';

    if (track === 'stem') {
      title = '미래 AI 컴퓨팅 & 데이터 사이언스 리서치 로드맵';
      mentor = 'Dr. Sean Park (Stanford / KAIST)';
      hours = '주 6~8시간 (이론 2h + 랩 실습 4h + 멘토링 1h)';
      milestones = [
        '1단계: 파이썬 알고리즘 및 선형대수 모델링 마스터',
        '2단계: 생성형 AI & 컴퓨터 비전 실험 모델 구축',
        '3단계: 국제 청소년 과학 논문 콘퍼런스 투고 및 학술 발표',
      ];
      quote = '“기술의 소비자를 넘어 세상을 바꿀 지적 알고리즘을 설계합니다.”';
    } else if (track === 'humanities') {
      title = '옥스퍼드 스타일 인문학 & 글로벌 디베이트 로드맵';
      mentor = 'Elena Kang (Oxford PPE)';
      hours = '주 4~6시간 (원서 강독 2h + 실전 토론 2h + 에세이 1h)';
      milestones = [
        '1단계: 고전 철학 및 정의론 텍스트 심층 비판적 독해',
        '2단계: 영국 의회식(BP) 및 WSDC 토론 전략 실전 훈련',
        '3단계: 시사 이슈 정책 제안서 완성 및 전국/국제 토론대회 출전',
      ];
      quote = '“단단한 언어와 논리적 사유는 삶의 가장 강력한 무기입니다.”';
    } else if (track === 'maker') {
      title = '영 메이커 & 피지컬 컴퓨팅 발명 로드맵';
      mentor = 'Jinwoo Choi (KAIST Mech Eng)';
      hours = '주 3~5시간 (메이커 랩 실습 + 디자인 씽킹)';
      milestones = [
        '1단계: 생활 속 문제 정의 및 3D 모델링 스케치',
        '2단계: 아두이노 마이크로컨트롤러 회로 제작 및 센서 연동',
        '3단계: 실물 하드웨어 프로토타입 전시 및 특허 아이디어 출품',
      ];
      quote = '“상상을 현실의 물성으로 구현하는 창의적 자신감을 기릅니다.”';
    } else {
      title = '아이비리그 & 글로벌 톱20 아너스 포트폴리오 로드맵';
      mentor = 'Dean David Miller (Former Admissions Officer)';
      hours = '정기 1:1 맞춤 멘토링 + 학기별 집중 세션';
      milestones = [
        '1단계: 학생 고유의 Intellectual Spike(학업적 차별점) 정의',
        '2단계: 대외 학술 활동 및 교외 영향력 프로젝트 연계',
        '3단계: 내러티브 기반 퍼스널 에세이 및 심층 인터뷰 마스터',
      ];
      quote = '“전 세계 입학 사정관의 마음을 움직이는 독창적 내러티브를 구축합니다.”';
    }

    return { title, mentor, hours, milestones, quote };
  };

  const rec = getRecommendation();

  const handleReset = () => {
    setGrade('high');
    setTrack('stem');
    setGoal('paper');
  };

  const handleBookWithPlan = () => {
    const summary = `[맞춤 로드맵] 대상: ${
      grade === 'primary' ? '초등' : grade === 'middle' ? '중등' : '고등'
    } | 트랙: ${rec.title} | 멘토: ${rec.mentor}`;
    onApplyPlan(summary);
  };

  return (
    <section className="border-t border-stone-200/80 py-24 dark:border-stone-800/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-stone-500 dark:text-stone-400">
            Interactive Pathway Planner
          </div>
          <h2 className="mt-3 font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-900 dark:text-stone-50">
            나만의 학업 로드맵 설계기
          </h2>
          <p className="mt-4 text-base text-stone-600 dark:text-stone-300">
            학생의 현재 학년과 관심 영역, 학업 목표를 선택하면 Chan's School의 
            전문 멘토링 시스템이 최적화된 맞춤형 성장 플랜을 시뮬레이션해 드립니다.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Controls Deck (Left 6 cols) */}
          <div className="space-y-6 lg:col-span-6">
            {/* Step 1: Grade Selection */}
            <div className="rounded-xl border border-stone-200/80 bg-white/70 p-6 dark:border-stone-800/80 dark:bg-stone-900/60">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                01. 학생 현재 학년 (Grade Level)
              </label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { id: 'primary', label: '초등 (G4~G6)' },
                  { id: 'middle', label: '중등 (G7~G9)' },
                  { id: 'high', label: '고등 (G10~G12)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGrade(item.id as any)}
                    className={`rounded-lg py-2.5 px-3 text-xs font-medium transition-all ${
                      grade === item.id
                        ? 'bg-stone-900 text-white shadow-xs dark:bg-stone-100 dark:text-stone-900'
                        : 'border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Track Selection */}
            <div className="rounded-xl border border-stone-200/80 bg-white/70 p-6 dark:border-stone-800/80 dark:bg-stone-900/60">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                02. 집중 관심 탐구 영역 (Core Track)
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  { id: 'stem', label: 'AI & 미래 과학 기술' },
                  { id: 'humanities', label: '글로벌 인문학 & 디베이트' },
                  { id: 'maker', label: 'STEAM 발명 & 메이커' },
                  { id: 'global', label: '아이비 & 글로벌 명문대 아너스' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTrack(item.id as any)}
                    className={`rounded-lg py-2.5 px-3 text-left text-xs font-medium transition-all ${
                      track === item.id
                        ? 'bg-stone-900 text-white shadow-xs dark:bg-stone-100 dark:text-stone-900'
                        : 'border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Priority Goal */}
            <div className="rounded-xl border border-stone-200/80 bg-white/70 p-6 dark:border-stone-800/80 dark:bg-stone-900/60">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                03. 학기 주요 목표 산출물 (Key Milestone)
              </label>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  { id: 'paper', label: '학술 연구논문 투고' },
                  { id: 'debate', label: '디베이트 대회 수상' },
                  { id: 'olympiad', label: '창작물·발명 특허 출품' },
                  { id: 'portfolio', label: '종합 입학 포트폴리오' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as any)}
                    className={`rounded-lg py-2.5 px-3 text-left text-xs font-medium transition-all ${
                      goal === item.id
                        ? 'bg-stone-900 text-white shadow-xs dark:bg-stone-100 dark:text-stone-900'
                        : 'border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>옵션 초기화</span>
              </button>
            </div>
          </div>

          {/* Blueprint Result Panel (Right 6 cols) */}
          <div className="flex flex-col justify-between rounded-2xl border border-stone-900/10 bg-stone-900 p-8 text-white shadow-xl dark:border-stone-100/10 dark:bg-stone-100 dark:text-stone-900 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between border-b border-stone-800 pb-4 dark:border-stone-200">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-600">
                  <Sparkles className="h-4 w-4" />
                  <span>맞춤형 학업 청사진 (Simulated Blueprint)</span>
                </div>
                <span className="text-xs text-stone-400 dark:text-stone-500">
                  {grade === 'primary' ? '초등' : grade === 'middle' ? '중등' : '고등'} 추천 과정
                </span>
              </div>

              <h3 className="mt-6 font-editorial text-2xl sm:text-3xl font-medium">
                {rec.title}
              </h3>

              <p className="mt-3 text-xs italic text-stone-300 dark:text-stone-700">
                {rec.quote}
              </p>

              {/* Specs */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl border border-stone-800 bg-stone-950/40 p-4 text-xs dark:border-stone-200 dark:bg-stone-200/50">
                <div>
                  <div className="text-stone-400 dark:text-stone-600 font-medium">
                    매칭 수석 멘토
                  </div>
                  <div className="mt-1 font-semibold text-white dark:text-stone-900">
                    {rec.mentor}
                  </div>
                </div>
                <div>
                  <div className="text-stone-400 dark:text-stone-600 font-medium">
                    권장 학습 시수
                  </div>
                  <div className="mt-1 font-semibold text-white dark:text-stone-900">
                    {rec.hours}
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="mt-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 dark:text-stone-600">
                  3단계 추천 학업 마일스톤
                </div>
                <div className="mt-3 space-y-2.5">
                  {rec.milestones.map((ms, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-stone-300 dark:text-stone-800"
                    >
                      <Award className="h-4 w-4 shrink-0 text-stone-400 dark:text-stone-600 mt-0.5" />
                      <span>{ms}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="mt-8 border-t border-stone-800 pt-6 dark:border-stone-200">
              <button
                type="button"
                onClick={handleBookWithPlan}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-xs font-semibold text-stone-900 transition-all hover:bg-stone-100 dark:bg-stone-900 dark:text-white dark:hover:bg-stone-800"
              >
                <span>이 맞춤 로드맵으로 1:1 심층 상담 예약</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
