import { Program, Facility, FacultyMember, StudentStory, AdmissionStep } from '../types';

export const HERO_CAMPUS_IMAGE = '/src/assets/images/hero_chans_school_campus_1794368177690.jpg';
export const CLASSROOM_IMAGE = '/src/assets/images/classroom_innovation_lab_1794368177296.jpg';
export const LIBRARY_IMAGE = '/src/assets/images/library_reading_hall_1794368177759.jpg';
export const SEMINAR_IMAGE = '/src/assets/images/seminar_discussion_room_1794368178740.jpg';

export const SCHOOL_STATS = [
  { value: '12 : 1', label: '학생 대 교수 비율', sublabel: '소수 정예 밀착 코칭' },
  { value: '98.6%', label: '글로벌 명문 진학 & 만족도', sublabel: '국내외 명문대 및 영재원' },
  { value: '28+', label: '융합 심화 탐구 프로젝트', sublabel: 'AI·과학·인문·예술 랩' },
  { value: '100%', label: '1:1 진로 멘토링 보장', sublabel: '전담 디렉터 맞춤 설계' },
];

export const PHILOSOPHY_PILLARS = [
  {
    num: '01',
    titleEn: 'Inquiry-Driven Discovery',
    titleKo: '스스로 질문하고 탐구하는 힘',
    description:
      '주어진 정답을 외우는 수동적 공부에서 벗어나, 근본적인 질문을 던지고 가설을 세워 검증하는 비판적 사고력을 체계적으로 훈련합니다.',
    details: [
      '소크라테스식 대화형 세미나 진행',
      '개별 연구 주제 선정 및 학기별 논문 집필',
      '질문 노트(Inquiry Journal) 기반 1:1 피드백'
    ]
  },
  {
    num: '02',
    titleEn: 'Real-World Agency',
    titleKo: '배움을 삶의 실천으로 잇는 역량',
    description:
      '교과서 안의 이론에 머물지 않고 실제 세상의 복잡한 사회·기술적 문제를 해결하는 프로젝트를 수행하며 능동적인 실천가로 성장합니다.',
    details: [
      '현업 전문가 및 연구진과의 융합 캡스톤 프로젝트',
      'AI & 코딩 기술을 결합한 프로토타입 제작',
      '지역 사회 문제 해결 및 소셜 임팩트 활동'
    ]
  },
  {
    num: '03',
    titleEn: 'Empathy & Global Leadership',
    titleKo: '포용과 소통의 글로벌 리더십',
    description:
      '다양한 문화와 관점을 포용하고 깊은 공감 능력을 바탕으로 팀을 이끌며, 더 나은 사회를 만들어가는 성숙한 품격의 지성인을 지향합니다.',
    details: [
      '다국어 디베이트 및 국제 교류 심포지엄',
      '동료 튜터링 및 협업 윤리 리더십 프로그램',
      '지속 가능한 미래를 위한 글로벌 에시컬 프로젝트'
    ]
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'prog-1',
    category: 'high',
    categoryLabel: '고등 심화 리서치',
    title: 'Future AI & Computational Sciences Lab',
    subtitle: '미래 AI 컴퓨팅 & 융합 과학 심화 리서치',
    targetGrade: '고등학교 1~3학년 (G10-G12)',
    summary:
      '최신 인공지능 원리, 고급 알고리즘, 데이터 사이언스를 학습하고 실제 학술 연구 페이퍼를 작성하는 최고위 연구 프로그램입니다.',
    highlights: [
      '머신러닝 & 딥러닝 실전 아키텍처 구현',
      '자연과학·의생명 데이터 분석 및 예측 모델링',
      '국제 청소년 과학 논문 콘퍼런스 투고 지원'
    ],
    duration: '주 6시간 (이론 2h + 랩 4h) / 16주 과정',
    classSize: '정원 10명 이내 (심층 연구반)',
    mentor: 'Dr. Sean Park (Ph.D in CS, Stanford Alum)',
    syllabus: [
      { week: '1~4주차', topic: '수학적 기초와 선형대수 & 알고리즘 최적화', outcome: '수학 모델링 및 파이썬 알고리즘 검증' },
      { week: '5~8주차', topic: '신경망 아키텍처와 생성형 AI 구조 분석', outcome: '맞춤형 AI 파이프라인 설계 완료' },
      { week: '9~12주차', topic: '도메인 특화 데이터셋 구축 및 실험 연구', outcome: '실제 실험 데이터 수집 및 모델 검증' },
      { week: '13~16주차', topic: '학술 논문 집필, 피어 리뷰 및 콘퍼런스 발표', outcome: '최종 영문 연구 리포트 및 발표회' }
    ]
  },
  {
    id: 'prog-2',
    category: 'middle',
    categoryLabel: '중등 융합 탐구',
    title: 'Global Humanities & Oxford-Style Debate',
    subtitle: '글로벌 인문학 & 옥스퍼드 스타일 디베이트',
    targetGrade: '중학교 1~3학년 (G7-G9)',
    summary:
      '고전 철학부터 현대 글로벌 이슈까지 다각도로 분석하고, 논리적 반박과 설득력 있는 스피치를 완성하는 영미식 토론 트랙입니다.',
    highlights: [
      '세계사·철학·윤리학 핵심 텍스트 원서 강독',
      '영국 의회식(British Parliamentary) 토론 훈련',
      '설득적 에세이 작성 및 글로벌 시사 브리핑'
    ],
    duration: '주 4시간 (세미나 2h + 실전 토론 2h) / 12주 과정',
    classSize: '정원 12명 (소그룹 라운드테이블)',
    mentor: 'Elena Kang (M.A. Oxford University PPE)',
    syllabus: [
      { week: '1~3주차', topic: '정의론과 자유주의: 공공선과 개인의 권리', outcome: '논증 구조도 작성 및 반박 논리 수립' },
      { week: '4~6주차', topic: '과학 기술 윤리와 인공지능 시대의 인간 존엄', outcome: '정책 제안서 작성 및 모의 청문회' },
      { week: '7~9주차', topic: '국제 지정학과 기후 위기 갈등 해결 프레임', outcome: '다자간 협상 실전 롤플레잉' },
      { week: '10~12주차', topic: '챔피언십 디베이트 토너먼트 & 포트폴리오 완성', outcome: '파이널 토론 녹화 및 개별 코칭 피드백' }
    ]
  },
  {
    id: 'prog-3',
    category: 'primary',
    categoryLabel: '초등 창의 디스커버리',
    title: 'Young Maker & STEAM Inventors',
    subtitle: '영 메이커 & 융합 발명 스튜디오',
    targetGrade: '초등학교 4~6학년 (G4-G6)',
    summary:
      '생활 속 호기심을 물리적 메이킹과 소프트웨어 코딩으로 구현하며, 발명가적 상상력과 공간 지각력을 극대화하는 체험형 클래스입니다.',
    highlights: [
      '3D 모델링, 레이저 커팅, 아두이노 센서 융합',
      '일상의 불편함을 개선하는 디자인 씽킹 프로젝트',
      '스스로 작동 원리를 규명하는 과학 탐구 일지'
    ],
    duration: '주 3시간 (주말 집중 랩) / 10주 과정',
    classSize: '정원 8명 (안전 중심 실습)',
    mentor: 'Jinwoo Choi (M.S. KAIST Mechanical Eng.)',
    syllabus: [
      { week: '1~2주차', topic: '주변 세상 관찰하기 & 문제 정의와 아이디어 스케치', outcome: '발명 스케치북 및 기능 명세서' },
      { week: '3~5주차', topic: '기초 전자 회로 및 피지컬 마이크로비트 코딩', outcome: '스마트 홈 센서 키트 작동' },
      { week: '6~8주차', topic: '3D 프린팅 프로토타이핑과 외관 디자인', outcome: '실물 하드웨어 시제품 조립' },
      { week: '9~10주차', topic: '쇼케이스 데모데이: 학부모 초청 발명품 발표', outcome: '특허 아이디어 설명회 및 인증서 수여' }
    ]
  },
  {
    id: 'prog-4',
    category: 'global',
    categoryLabel: '글로벌 진로 전략',
    title: 'Ivy & Top University Honors Portfolio',
    subtitle: '명문대 진학 & 프리미엄 아너스 포트폴리오',
    targetGrade: '중3 ~ 고등 전 학년',
    summary:
      '학생 개인의 독창적인 학업적 정체성(Intellectual Spike)을 발굴하고, 국제 표준 학술 활동과 대외 수상 실적을 유기적으로 연계합니다.',
    highlights: [
      '개인 맞춤형 장기 연구 로드맵 1:1 수립',
      '해외 저명 경시대회 및 올림피아드 전략 지도',
      '미국·영국·아시아 최상위 대학 맞춤 에세이 & 인터뷰'
    ],
    duration: '연간 프리미엄 멘토링 / 정기 1:1 코칭',
    classSize: '소수 선발 (서류 심사 후 배정)',
    mentor: 'Dean David Miller (Former Admissions Director)',
    syllabus: [
      { week: '1분기', topic: '학업 진단 및 개별 테마(Spike) 발굴', outcome: '3개년 종합 아카데믹 로드맵' },
      { week: '2분기', topic: '심화 리서치 & 경시대회 포트폴리오 구축', outcome: '주요 콘테스트 출품 및 결과 도출' },
      { week: '3분기', topic: '교외 학술 인턴십 & 사회 기여 활동 연계', outcome: '대외 영향력 증명 리포트' },
      { week: '4분기', topic: '내러티브 기반 지원서 에세이 완성 및 모의 인터뷰', outcome: '최종 합격 포트폴리오 완성' }
    ]
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'fac-1',
    name: 'The Great Reading Hall & Idea Archive',
    nameEn: '중앙 도서관 & 지식의 전당',
    category: '학술·사색 공간',
    image: LIBRARY_IMAGE,
    description:
      '따뜻한 오크목 서가와 높은 천고, 풍부한 자연광이 어우러진 Chan\'s School의 상징적 지적 사색 공간입니다. 3만여 권의 인문·과학 원서와 독립 연구 부스를 갖추고 있습니다.',
    features: ['학술 데이터베이스(JSTOR, ScienceDirect) 무제한 열람', '조용한 개인 집중 사색 캐럴(Carrel)', '원목 인체공학 열람 데스크'],
    capacity: '최대 120석 동시 이용',
    hours: '평일 07:30 - 22:30 / 주말 09:00 - 20:00'
  },
  {
    id: 'fac-2',
    name: 'Creative Maker & AI Innovation Studio',
    nameEn: '창의 메이커 & AI 이노베이션 스튜디오',
    category: '실험·테크 랩',
    image: CLASSROOM_IMAGE,
    description:
      '아이디어를 시제품으로 즉각 구현할 수 있는 첨단 엔지니어링 랩입니다. 초고속 GPU 워크스테이션, 3D 프린터, 레이저 조각기, 전자 계측 장비가 완비되어 있습니다.',
    features: ['NVIDIA 최신 GPU 딥러닝 서버 연동', '산업용 정밀 3D 프린팅 & CNC 밀링 머신', '하이브리드 협업 스마트 인터랙티브 보드'],
    capacity: '최대 30명 프로젝트 진행',
    hours: '상시 예약제 운영 (24시간 랩 오픈 지원)'
  },
  {
    id: 'fac-3',
    name: 'Socratic Round Seminar & Forum Hall',
    nameEn: '소크라틱 라운드 세미나 & 포럼 홀',
    category: '토론·스피치 공간',
    image: SEMINAR_IMAGE,
    description:
      '교사와 학생, 동료와 동료가 수평적으로 눈을 맞추며 심도 있는 토론을 펼치는 원형 세미나 룸입니다. 통유리창 너머 정원을 조망하며 창의적 통찰을 나눕니다.',
    features: ['어쿠스틱 방음 및 첨단 화상 콘퍼런스 시스템', '원형 배치형 오크 회의 테이블 및 필기용 글라스월', '실시간 토론 녹화 및 AI 발화 분석 시스템'],
    capacity: '룸당 14~18명 정원',
    hours: '수업 및 학술 토론 동아리 우선 배정'
  },
  {
    id: 'fac-4',
    name: 'Main Atrium & Sunlit Courtyard',
    nameEn: '중앙 아트리움 & 글라스 가든',
    category: '휴식·네트워킹',
    image: HERO_CAMPUS_IMAGE,
    description:
      '사계절의 변화를 온전히 느낄 수 있는 친환경 글라스 아트리움입니다. 학생들의 일상적인 교류와 전시회, 실내 버스킹 및 학술 포스터 세션이 활발히 열립니다.',
    features: ['친환경 지열 냉난방 및 자연 채광 구조', '학생 라운지 및 유기농 티 바', '학술 포스터 전시 전용 갤러리 레일'],
    capacity: '전체 캠퍼스 공용 공간',
    hours: '상시 개방'
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-mem-1',
    name: 'Dr. Michael Chang',
    nameEn: '마이클 장 총괄 교장',
    role: 'Head of School / 총괄 교육원장',
    department: 'School Leadership',
    education: 'Harvard Ed.M & Columbia University Ph.D in Education Policy',
    quote:
      '“배움은 단순히 지식을 채우는 과정이 아니라, 스스로 생각하고 더 나은 삶의 방향을 결정하는 힘을 얻는 여정이어야 합니다.”',
    courses: ['아너스 리더십 포럼', '미래 교육 정책 세미나']
  },
  {
    id: 'fac-mem-2',
    name: 'Dr. Sean Park',
    nameEn: '박승원 수석 연구위원',
    role: 'Director of AI & Computational Science',
    department: 'School of Computing',
    education: 'Stanford University B.S. & M.S. in Computer Science, KAIST Ph.D',
    quote:
      '“단순히 AI를 소비하는 사용자가 아니라, AI의 근본 원리를 이해하고 세상의 난제를 푸는 창작자로 키웁니다.”',
    courses: ['AI 알고리즘 심화', '데이터 모델링 리서치 랩']
  },
  {
    id: 'fac-mem-3',
    name: 'Elena Kang',
    nameEn: '강예린 인문학 학과장',
    role: 'Chair of Global Humanities & Debate',
    department: 'School of Humanities',
    education: 'University of Oxford B.A. & M.A. in PPE, Former WSDC Coach',
    quote:
      '“정확한 언어로 생각을 정리하고, 타인의 목소리에 경청하는 훈련이야말로 진정한 지성의 시작입니다.”',
    courses: ['고전 철학과 정의론', '옥스퍼드 팔리아멘터리 디베이트']
  },
  {
    id: 'fac-mem-4',
    name: 'Sarah Jenkins',
    nameEn: '사라 젠킨스 진로 디렉터',
    role: 'Dean of Global College Counseling',
    department: 'Admissions & College Guidance',
    education: 'Brown University B.A., 15+ Years US Top 20 Admissions Officer',
    quote:
      '“모든 학생에게는 세상에 유일무이한 고유의 이야기가 있습니다. 그 잠재력이 세계 최고의 무대에서 빛나도록 돕습니다.”',
    courses: ['글로벌 명문대 아너스 포트폴리오', '퍼스널 에세이 랩']
  }
];

export const STUDENT_STORIES: StudentStory[] = [
  {
    id: 'story-1',
    studentName: '김민준 (Minjun Kim)',
    classYear: 'Class of 2025 졸업생',
    currentPath: 'MIT 전자컴퓨터공학과 (EECS) 조기 합격',
    title: '정답 대신 질문을 가르쳐준 Chan\'s School',
    story:
      '기존 학원에서는 주어진 문제를 빨리 푸는 요령만 익혔지만, Chan\'s School에 와서 처음으로 ‘왜 이 원리가 작동하는가’를 묻기 시작했습니다. 지도 교수님과 1년 동안 진행한 의료 영상 AI 진단 프로젝트는 저에게 지적 한계를 뛰어넘는 희열을 주었습니다.',
    keyProject: '심층 합성곱 신경망(CNN) 기반 희귀 안과 질환 조기 탐지 논문 작성'
  },
  {
    id: 'story-2',
    studentName: '이서윤 (Seoyun Lee)',
    classYear: 'Class of 2024 졸업생',
    currentPath: 'Oxford University PPE (철학·정치·경제) 합격',
    title: '배움이 삶의 나침반이 되는 경험',
    story:
      '“Learning for the better life”라는 슬로건을 매일 교정에서 마주하며, 나의 배움이 소외된 이웃과 사회에 어떻게 닿을 수 있을지 고민했습니다. 인문학 디베이트 세션에서 쌓은 비판적 사유의 힘이 옥스퍼드 인터뷰에서도 결정적인 차별점이 되었습니다.',
    keyProject: '기후 난민 보호를 위한 국제법적 가이드라인 비교 분석 연구'
  },
  {
    id: 'story-3',
    studentName: '박하늘 (Haneul Park)',
    classYear: '현재 고등 심화 트랙 2학년 재학',
    currentPath: '전국 과학전람회 국무총리상 수상 & 창업 펠로우',
    title: '실패해도 다시 일어설 수 있는 지지대',
    story:
      '메이커 스튜디오에서 수십 번의 3D 프린팅 실패와 회로 오류를 겪을 때마다, 선생님들은 결코 조급해하지 않고 “그 실패에서 무엇을 배웠니?”라고 물어봐 주셨습니다. 그 덕분에 두려움 없이 새로운 영역에 도전하는 단단한 마음을 얻었습니다.',
    keyProject: '시각장애인을 위한 햅틱 피드백 스마트 보행 지팡이 개발'
  }
];

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: '01',
    title: '온라인 입학 상담 & 사전 신청',
    period: '상시 접수 (학기별 정원 마감)',
    description: '홈페이지를 통해 학생의 기본 정보와 관심 학업 트랙을 작성하고 1:1 방문 상담 일정을 예약합니다.',
    requirements: ['기본 학적 정보 작성', '학생의 관심사 및 학업 목표 서술']
  },
  {
    step: '02',
    title: '진단 평가 & 창의적 탐구 세션',
    period: '상담 예약일 당일 진행 (약 90분)',
    description: '단순 암기 시험이 아닌, 학생의 문제 해결 능력, 논리적 사고력, 학습 잠재력을 종합적으로 관찰 평가합니다.',
    requirements: ['수리·논리적 사고력 진단', '비판적 독해 및 영문/국문 에세이']
  },
  {
    step: '03',
    title: '학부모 심층 면담 & 맞춤 로드맵 제안',
    period: '진단 후 3일 이내',
    description: '전문 디렉터와 함께 진단 결과를 공유하고, 학생 개개인의 성향과 미래 진로에 맞춘 최적의 학업 플랜을 설계합니다.',
    requirements: ['가정의 교육관 공유', '맞춤형 학기 커리큘럼 로드맵 확정']
  },
  {
    step: '04',
    title: '최종 선발 & 웰컴 오리엔테이션',
    period: '개강 2주 전',
    description: 'Chan\'s School의 새로운 일원으로 등록하며, 전담 멘토 배정 및 교재, 디지털 랩 계정이 발급됩니다.',
    requirements: ['입학 서류 최종 제출', '멘토-학생 1:1 오리엔테이션 참석']
  }
];

export const FAQS = [
  {
    question: 'Chan\'s School의 교육 대상과 학년 구성은 어떻게 되나요?',
    answer:
      '초등학교 고학년(4~6학년)을 위한 ‘Young Maker & STEAM Inventors’부터, 중학교 융합 탐구반, 고등학교 심화 연구 논문 및 글로벌 명문대 진학 트랙까지 체계적으로 운영됩니다. 각 과정은 학생의 현재 학업 수준과 지적 호기심을 면밀히 평가하여 무학년제 심화 편성도 지원합니다.'
  },
  {
    question: '일반 입시 학원과 Chan\'s School의 가장 큰 차별점은 무엇인가요?',
    answer:
      'Chan\'s School은 ‘Learning for the better life’라는 본질적 교육 철학을 바탕으로 운영됩니다. 단순한 점수 맞춤형 주입식 교육이 아닌, 하버드·스탠포드·옥스퍼드 출신의 교수진이 소크라테스식 문답법과 실제 연구 랩 실습을 통해 평생 동안 스스로 성장할 수 있는 메타인지와 탐구 역량을 길러줍니다.'
  },
  {
    question: '입학을 위한 별도의 선발 시험이나 자격 조건이 있나요?',
    answer:
      '기계적인 서열화 시험 대신 ‘창의적 탐구 진단 세션’을 진행합니다. 현재의 성적표보다는 새로운 지식에 대한 호기심, 질문의 깊이, 문제를 대하는 끈기를 종합적으로 평가합니다. 이를 통해 학생에게 가장 적합한 학습 속도와 멘토를 매칭합니다.'
  },
  {
    question: '캠퍼스 방문 및 1:1 상담 예약은 어떻게 진행되나요?',
    answer:
      '상단의 ‘입학 상담 예약’ 버튼 또는 홈페이지 내 예약 신청 양식을 작성해 주시면 24시간 이내에 입학 관리처에서 유선 연락을 드려 방문 일정을 최종 조율해 드립니다. 원활한 상담을 위해 사전 예약제로만 운영됩니다.'
  }
];

export const NOTICES = [
  {
    date: '2026.11.20',
    tag: '설명회',
    title: '2027학년도 봄학기 신입생 모집을 위한 오픈 캠퍼스 설명회 개최',
    pinned: true
  },
  {
    date: '2026.11.15',
    tag: '학술성과',
    title: 'Chan\'s School 융합 AI 연구팀, 국제 청소년 과학 심포지엄 최고 우수상 수상',
    pinned: true
  },
  {
    date: '2026.11.02',
    tag: '특강',
    title: '옥스퍼드대 명예교수 초청 ‘21세기 비판적 사고와 윤리’ 특별 공개 강연 안내',
    pinned: false
  },
  {
    date: '2026.10.25',
    tag: '장학안내',
    title: '차세대 미래 인재 발굴을 위한 2027 글로벌 펠로우십 장학생 선발 공고',
    pinned: false
  }
];
