import { AIModel } from '../types';

export const AI_MODELS: AIModel[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    vendor: 'OpenAI',
    tagline: '가장 대중적이고 다재다능한 만능 AI 비서',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    accentColor: '#10A37F',
    borderColor: 'border-emerald-300',
    gradient: 'from-emerald-500 to-teal-600',
    pricing: {
      free: 'GPT-4o-mini / GPT-4o 제한적 무료',
      paid: 'Plus ($20/월) - GPT-4o, o1, Canvas, Voice Mode'
    },
    keyFeatures: [
      'GPT-4o 최신 지능 모델 탑재',
      '고성능 추론 모델 o1 / o3-mini 지원',
      '실시간 실체감 음성 대화 (Advanced Voice Mode)',
      'Custom GPTs 및 스토어 활용',
      'Canvas 기능으로 코드 및 문서 양방향 편집'
    ],
    strengths: [
      '대화의 자연스러움과 유연성이 뛰어남',
      '음성, 이미지, 문서, 코드 등 멀티모달 처리 탁월',
      '커스텀 GPTs를 통한 업무 맞춤형 챗봇 제작 용이',
      'Canvas 모드로 글쓰기 및 프로그래밍 협업에 매우 편리'
    ],
    weaknesses: [
      '무료 플랜은 피크 타임 사용량 제한이 다소 엄격함',
      '실시간 웹 검색 결과의 출처 정밀도가 Perplexity 대비 낮을 수 있음'
    ],
    bestFor: ['일반적인 일상 질문', '아이디어 브레인스토밍', '대화형 음성 학습', '맞춤형 AI 챗봇 만들기'],
    contextWindow: '128K 토큰 (약 300페이지 책 분량)',
    webSearch: true,
    imageGen: true,
    dataAnalysis: true,
    customGPTsGems: true,
    scoreCard: {
      writing: 95,
      coding: 94,
      research: 88,
      speed: 92,
      easeOfUse: 98
    }
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    vendor: 'Google',
    tagline: '구글 생태계 및 방대한 정보와 실시간 연동되는 AI',
    badgeBg: 'bg-blue-100',
    badgeText: 'text-blue-800',
    accentColor: '#1A73E8',
    borderColor: 'border-blue-300',
    gradient: 'from-blue-500 to-indigo-600',
    pricing: {
      free: 'Gemini 2.0 Flash 기본 무료',
      paid: 'Advanced ($19.99/월) - Gemini 1.5 Pro / 2.0 Flash, 2M Context, 구글 원 2TB 포함'
    },
    keyFeatures: [
      '최대 200만 토큰의 압도적 컨텍스트 창 (전체 서적/긴 영상 분석)',
      '구글 워크스페이스 (Gmail, Docs, Drive, Maps, YouTube) 실시간 연동',
      'Gems 기능으로 맞춤형 전문가 AI 생성',
      'Deep Research 기능으로 심층 자서 및 전문 문서 조사',
      '유튜브 영상 직접 분석 및 요약'
    ],
    strengths: [
      '방대한 양의 문서(최대 150만 자) 및 긴 동영상 한 번에 분석',
      '구글 드라이브, 지메일 등 기존 구글 문서와의 최상급 통합',
      '실시간 구글 검색 기반의 최신성 높은 정보 제공',
      'Gemini Advanced 요금제 시 구글 드라이브 2TB 스토리지 혜택 동시 제공'
    ],
    weaknesses: [
      '복잡한 한국어 문맥 논리 표현 시 다소 기계적인 말투가 섞일 때가 있음',
      '안전 가이드라인이 엄격하여 일부 창의적 질문에 답변을 거부할 수 있음'
    ],
    bestFor: ['긴 PDF 및 연구 논문 분석', '구글 워크스페이스 사용자', '유튜브 영상 요약', '실시간 뉴스 및 구글 생태계 연동'],
    contextWindow: '2,000,000 토큰 (약 150만 자/수시간 영상)',
    webSearch: true,
    imageGen: true,
    dataAnalysis: true,
    customGPTsGems: true,
    scoreCard: {
      writing: 90,
      coding: 91,
      research: 96,
      speed: 95,
      easeOfUse: 94
    }
  },
  {
    id: 'claude',
    name: 'Claude 3.5',
    vendor: 'Anthropic',
    tagline: '자연스러운 문장력과 압도적 코드 작성을 자랑하는 AI',
    badgeBg: 'bg-orange-100',
    badgeText: 'text-amber-900',
    accentColor: '#D97706',
    borderColor: 'border-amber-300',
    gradient: 'from-amber-500 to-orange-600',
    pricing: {
      free: 'Claude 3.5 Sonnet / Haiku 기본 무료 (메시지 제한)',
      paid: 'Pro ($20/월) - 5배 높은 메시지 한도, Projects 기능'
    },
    keyFeatures: [
      '업계 최고 수준의 Claude 3.5 Sonnet 코딩 & 문맥 이해 지능',
      'Artifacts 기능: 코드, 웹사이트, 인터랙티브 캔버스를 우측 창에 실시간 시각화',
      'Projects 기능: 프로젝트 단위 파일 및 참고 자료 기증 관리',
      '인간다운 매끄럽고 정교한 한국어 글쓰기 및 번역',
      '코딩 및 복잡한 논리 분석 평가 기준 1위'
    ],
    strengths: [
      '한국어 표현이 매우 자연스럽고 문맥 이해도가 AI 중 가장 뛰어남',
      '코딩 버그 수정, 웹 애플리케이션 생성 및 시각화(Artifacts) 최고의 성능',
      '긴 글 작성 시 어색함이 적고 논리적인 문단 구성 탁월'
    ],
    weaknesses: [
      '무료 사용자의 일일 메시지 제한이 상대적으로 타사 대비 빠름',
      '기본 실시간 인터넷 웹 검색 기능이 없음 (외부 확장 필요)'
    ],
    bestFor: ['개발자 및 프로그래밍 학습', '고품질 보고서/소설/블로그 작성', 'Artifacts를 통한 실시간 UI 시각화', '정교한 한국어 번역'],
    contextWindow: '200K 토큰 (약 500페이지 책 분량)',
    webSearch: false,
    imageGen: false,
    dataAnalysis: true,
    customGPTsGems: true,
    scoreCard: {
      writing: 99,
      coding: 99,
      research: 89,
      speed: 90,
      easeOfUse: 92
    }
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    vendor: 'Perplexity AI',
    tagline: '모든 답변의 출처를 정확히 밝혀주는 리서치 전문 AI 검색엔진',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    accentColor: '#7C3AED',
    borderColor: 'border-purple-300',
    gradient: 'from-purple-500 to-violet-600',
    pricing: {
      free: '기본 검색 무제한 + Pro Search 일일 5회',
      paid: 'Pro ($20/월) - Pro Search 일 600회+, GPT-4o/Claude 3.5 모델 선택 기능'
    },
    keyFeatures: [
      'Pro Search: 질문을 여러 단계로 분해하여 심층 검색 실행',
      '모든 문장에 대한 각주 번호와 웹 사이트 출처 URL 제공',
      '학술 논문(Academic), 뉴스, 유튜브, Reddit 등 출처 범위 지정 검색',
      'Perplexity Pages: 검색한 정보로 깔끔한 아티클 및 보고서 자동 생성',
      '스마트 모델 전환 (Claude 3.5, GPT-4o, Sonar 중 선택)'
    ],
    strengths: [
      '할루시네이션(거짓 정보) 위험이 가장 적고 정보 신뢰도가 극상',
      '보고서 작성 시 각주와 근거 자료 정리 시간을 90% 이상 단축',
      '최신 뉴스, 주식, 시장 동향, 기술 블로그 조사에 가장 강력함'
    ],
    weaknesses: [
      '창작 글쓰기나 자유로운 브레인스토밍 용도로는 제한적일 수 있음',
      '이미지 생성 등 대화형 엔터테인먼트 기능은 적음'
    ],
    bestFor: ['학술 및 논문 자료 조사', '최신 트렌드 및 주식/시장 분석', '신뢰할 수 있는 출처가 필요한 보고서 작성', '팩트체크'],
    contextWindow: '가변적 (검색 결과 통합 분석)',
    webSearch: true,
    imageGen: true,
    dataAnalysis: true,
    customGPTsGems: false,
    scoreCard: {
      writing: 85,
      coding: 88,
      research: 100,
      speed: 96,
      easeOfUse: 95
    }
  },
  {
    id: 'copilot',
    name: 'Microsoft Copilot',
    vendor: 'Microsoft',
    tagline: 'Windows 및 MS Office 오피스 제품군과 완벽 연결된 AI',
    badgeBg: 'bg-cyan-100',
    badgeText: 'text-cyan-800',
    accentColor: '#0284C7',
    borderColor: 'border-cyan-300',
    gradient: 'from-cyan-500 to-blue-600',
    pricing: {
      free: '웹 및 Windows 무료 지원 (GPT-4 기반)',
      paid: 'Copilot Pro ($20/월) - MS Word, Excel, PowerPoint, Outlook 앱 내 직접 사용'
    },
    keyFeatures: [
      'Microsoft 365 (Word, Excel, PPT, Outlook) 앱 내 자동 연동',
      'Windows 11 OS 단축키(Win+C) 통합 제어',
      'Designer (DALL-E 3 기반) 고화질 이미지 무료 생성',
      'Bing 검색 엔진 기반의 실시간 최신 정보 웹 검색',
      '세 가지 대화 스타일 선택 (창의적인, 균형있는, 정교한)'
    ],
    strengths: [
      'MS 워드 문서 작성, 엑셀 함수 및 데이터 분석, 파워포인트 슬라이드 자동 생성',
      '별도 결제 없이 무료로 GPT-4 수준의 지능과 DALL-E 3 이미지를 사용 가능',
      '직장인 및 학생들의 오피스 생태계 실무 생산성 최적화'
    ],
    weaknesses: [
      '오피스 앱 외부의 대화 인터페이스 반응이 때때로 둔감할 수 있음',
      '독자적인 커스텀 기능 확장이 타사 대비 덜 다양함'
    ],
    bestFor: ['MS 워드/엑셀/PPT 자주 쓰는 직장인', '무료로 GPT-4 및 DALL-E 3 이미지를 쓰고 싶은 분', 'Windows 11 환경 사용자'],
    contextWindow: '가변적 (대화 스타일별 조정)',
    webSearch: true,
    imageGen: true,
    dataAnalysis: true,
    customGPTsGems: false,
    scoreCard: {
      writing: 89,
      coding: 87,
      research: 91,
      speed: 88,
      easeOfUse: 93
    }
  }
];
