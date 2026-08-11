import { LevelGuideContent } from '../types';

export const LEVEL_GUIDES: LevelGuideContent[] = [
  {
    level: 'beginner',
    levelTitle: '초보자 가이드 (입문)',
    levelDescription: 'AI가 처음이신가요? 계정 생성부터 첫 질문 던지기, 답변 요청 및 기초 대화 요령을 5분 만에 마스터해보세요!',
    iconName: 'Sparkles',
    chapters: [
      {
        id: 'beg-1',
        title: '1장. 나에게 맞는 AI 선택 및 첫 대화 시작하기',
        summary: 'ChatGPT, Gemini, Claude 등 주요 AI의 접속 방법과 회원가입, 대화창 레이아웃 구조 이해하기',
        targetAI: ['chatgpt', 'gemini', 'claude', 'perplexity', 'copilot'],
        steps: [
          {
            stepNumber: 1,
            title: '무료 계정 생성 및 로그인',
            description: 'ChatGPT(chatgpt.com), Gemini(gemini.google.com), Claude(claude.ai) 등에 구글 계정을 이용해 3초 만에 원클릭으로 가입하세요.',
            tip: '초보자에게는 구글 계정 소셜 로그인이 가장 쉽고 간편합니다.'
          },
          {
            stepNumber: 2,
            title: '입력창(Prompt Box) 위치 확인하기',
            description: '화면 중앙 하단의 긴 박스가 바로 AI에게 질문을 입력하는 "프롬프트 박스"입니다. 여기에 텍스트를 적고 엔터를 누르거나 전송 버튼을 누르면 AI가 답변을 시작합니다.',
            tip: '줄바꿈을 하려면 Shift + Enter 를 누르세요!'
          },
          {
            stepNumber: 3,
            title: '첫 번째 안부 및 질문 보내보기',
            description: '어려운 단어 대신 "안녕! 너는 어떤 일을 가장 잘하니?"라고 가볍게 인사를 건네보세요.',
            examplePrompt: '안녕! 너는 나를 도와줄 수 있는 인공지능 비서야. 주로 어떤 질문에 답변을 잘할 수 있는지 초보자 눈높이에서 3가지만 소개해줘.',
            expectedResult: 'AI가 자신이 수행할 수 있는 대표 과제(글쓰기, 번역, 요약, 브레인스토밍 등)를 친절하게 정리해 답변합니다.'
          }
        ]
      },
      {
        id: 'beg-2',
        title: '2장. 실패 없는 초보자 질문 작성 3가지 규칙',
        summary: '막연한 질문 대신 구체적이고 조건이 있는 질문을 던지는 명확한 질문법',
        steps: [
          {
            stepNumber: 1,
            title: '규칙 1: 명확한 목적(Task) 알려주기',
            description: '"여행 추천해줘" 대신 "3박 4일 제주도 가족 여행 코스를 추천해줘"처럼 대상과 구체적 목적을 제시하세요.',
            examplePrompt: '다음 주말에 70대 부모님과 함께 갈 2박 3일 제주도 동부 여행 일정을 추천해줘. 이동 시간이 짧고 경치가 좋은 코스 위주로 알려줘.'
          },
          {
            stepNumber: 2,
            title: '규칙 2: 원하는 출력 형태(Format) 지정하기',
            description: 'AI에게 줄글, 표(Table), 번호 매기기, 요약 등 원하는 양식을 명시하면 훨씬 보기 깔끔한 답변을 얻습니다.',
            examplePrompt: '아침, 점심, 저녁 일정 및 추천 식당을 [일차 / 시간 / 장소 / 추천이유] 항목의 표(Table) 양식으로 만들어줘.'
          },
          {
            stepNumber: 3,
            title: '규칙 3: 마음에 들지 않으면 추가 질문(Follow-up)하기',
            description: '한 번의 답변으로 끝내지 말고 "점심 식당을 해산물 전문점으로 바꿔줘" 또는 "이유를 더 자세히 써줘"라고 연이어 요청하세요.',
            tip: 'AI와의 대화는 단답형 검색이 아니라 끊임없이 대화하는 카카오톡 메신저와 같습니다.'
          }
        ]
      },
      {
        id: 'beg-3',
        title: '3장. 초보자가 바로 복사해서 쓰는 인공지능 꿀 프롬프트 5선',
        summary: '매일 쓰는 이메일 작성, 영어 번역, 요약, 공부 질문 템플릿',
        steps: [
          {
            stepNumber: 1,
            title: '정중한 비즈니스 이메일 작성',
            description: '상사나 고객에게 보낼 메시지 톤을 매끄럽게 교정합니다.',
            examplePrompt: '아래 내용으로 거래처 담당자에게 보낼 정중하고 프로페셔널한 안내 이메일을 작성해줘.\n- 내용: 프로젝트 일정 2일 연기 요청\n- 사유: 추가 검증 작업 진행\n- 요청사항: 변경된 마감일 승인 부탁'
          },
          {
            stepNumber: 2,
            title: '어려운 개념을 초등학생도 알기 쉽게 설명하기',
            description: '양자역학, 블록체인 등 난해한 주제를 쉬운 비유로 학습합니다.',
            examplePrompt: '인공지능의 "머신러닝(Machine Learning)" 개념을 10살 어린이가 이해할 수 있도록 일상적인 비유를 들어 아주 쉽게 설명해줘.'
          }
        ]
      }
    ]
  },
  {
    level: 'intermediate',
    levelTitle: '중급자 가이드 (실무 활용)',
    levelDescription: '역할(Persona) 설정, 문서 및 PDF 파일 분석, 웹 검색 활용, AI 특화 모드(Artifacts, Canvas 등) 완벽 정복!',
    iconName: 'Zap',
    chapters: [
      {
        id: 'int-1',
        title: '1장. AI에게 전문가 페르소나(Persona) 부여하기',
        summary: 'AI에게 역할을 부여하여 답변의 전문성과 톤앤매너를 300% 끌어올리는 기법',
        steps: [
          {
            stepNumber: 1,
            title: '전문가 역할 정의하기',
            description: '질문 첫머리에 "너는 10년 차 마케팅 전문가야" 또는 "너는 최고 성과를 내는 카피라이터야"라고 역할을 부여하세요.',
            examplePrompt: '너는 10년 차 IT 전문 마케팅 이사야. 이번에 새로 출시하는 습관 관리 앱의 2030세대 대상 인스타그램 마케팅 문구 5가지를 작성해줘.'
          },
          {
            stepNumber: 2,
            title: '제약조건(Constraints) 추가하기',
            description: '분량, 사용할 수 없는 단어, 타겟 연령대 등 가이드라인을 명확히 설정합니다.',
            examplePrompt: "조건:\n1. 전문 용어 대신 친근한 '해요체' 사용\n2. 이모지를 적절히 배치\n3. 각 문구는 100자 이내로 작성"
          }
        ]
      },
      {
        id: 'int-2',
        title: '2장. 파일(PDF, Excel, 이미지) 첨부 및 심층 데이터 분석',
        summary: 'PDF 보고서 요약, 엑셀 수치 분석, 이미지 속 텍스트 추출 및 설명 듣기',
        steps: [
          {
            stepNumber: 1,
            title: 'PDF 문서 업로드 및 3줄 핵심 요약',
            description: '대화창의 클립(📎) 또는 파일 추가 버튼을 눌러 긴 PDF 논문이나 사업계획서를 올리고 요약을 요청하세요.',
            examplePrompt: '첨부한 PDF 문서를 읽고 다음 3가지를 정리해줘:\n1. 이 문서의 핵심 결론 3줄 요약\n2. 주요 시사점 및 시사하는 바\n3. 위험 요인(Risk Factors)'
          },
          {
            stepNumber: 2,
            title: 'Gemini로 유튜브 영상 URL 직접 요약하기',
            description: 'Google Gemini는 유튜브 링크만 붙여넣어도 영상 내용을 요약할 수 있습니다.',
            examplePrompt: 'https://www.youtube.com/watch?v=EXAMPLE_LINK 이 영상의 핵심 내용을 타임스탬프와 함께 주요 섹션별로 요약해줘.'
          }
        ]
      },
      {
        id: 'int-3',
        title: '3장. 각 AI별 차별화 기능 100% 활용법',
        summary: 'Claude Artifacts, ChatGPT Canvas, Perplexity Pro Search의 비밀 기능',
        steps: [
          {
            stepNumber: 1,
            title: 'Claude Artifacts로 화면 우측에 실시간 웹 화면 만들기',
            description: 'Claude에게 "간단한 랜딩페이지 HTML 코드를 짜고 아티팩트로 보여줘"라고 입력하면 오른쪽 창에 즉각 작동하는 사이트가 나타납니다.'
          },
          {
            stepNumber: 2,
            title: 'Perplexity로 학술 논문 및 출처 검증하기',
            description: '검색 모드를 [Academic]으로 설정하고 검색하면 정식 저널과 DOAJ 논문 출처만 선별하여 답변합니다.'
          }
        ]
      }
    ]
  },
  {
    level: 'advanced',
    levelTitle: '고급자 가이드 (생산성 폭발)',
    levelDescription: 'Chain-of-Thought(생각의 사슬) 추론, Custom GPTs / Gems 구축, 시스템 프롬프트 및 API 워크플로우 자동화',
    iconName: 'Flame',
    chapters: [
      {
        id: 'adv-1',
        title: '1장. 고난도 문제 해결을 위한 Chain-of-Thought (CoT) 기법',
        summary: 'AI가 스스로 단계별로 생각하도록 유도하여 정답률을 극대화하는 프로그래밍/논리 추론 프롬프팅',
        steps: [
          {
            stepNumber: 1,
            title: '단계별 생각 유도문(Step-by-step reasoning) 삽입',
            description: 'AI가 바로 답을 내놓게 하지 않고, "단계별로 나누어 차근차근 생각해보자"라는 프롬프트를 포함시킵니다.',
            examplePrompt: '다음 비즈니스 문제를 해결하기 위해 바로 결론을 내지 말고, [문제 원인 파악 -> 가설 설정 -> 데이터 검증 방법 -> 최종 해결책] 순서로 단계별 논리 과정을 거쳐 답변해줘.'
          },
          {
            stepNumber: 2,
            title: '퓨샷(Few-shot) 프롬프팅으로 예시 입출력 제공',
            description: '원하는 입출력 결과 예시를 2~3개 직접 보여주어 AI가 정확한 패턴을 학습하게 만드는 고난도 기법입니다.',
            examplePrompt: '입력: "오늘 날씨가 너무 우울해"\n출력: { sentiment: "negative", confidence: 0.92, category: "weather" }\n\n입력: "이번 분기 매출 목표 달성했어!"\n출력: { sentiment: "positive", confidence: 0.98, category: "finance" }\n\n입력: "서류 전형 결과가 언제 나오나요?"\n출력:'
          }
        ]
      },
      {
        id: 'adv-2',
        title: '2장. 나만의 맞춤형 Custom AI (GPTs / Gems / Projects) 만들기',
        summary: '반복 업무를 자동화하는 나만의 전용 AI 비서 제작하기',
        steps: [
          {
            stepNumber: 1,
            title: '지침(Instructions) 및 지식베이스(Knowledge Base) 업로드',
            description: '회사 내 규정집, 자주 쓰는 코드 스타일가이드, 마케팅 톤앤매너 문서를 지식 파일로 올려두면 항상 해당 지식을 바탕으로 답변합니다.'
          },
          {
            stepNumber: 2,
            title: '시스템 프롬프트(System Prompt) 설계',
            description: 'AI의 기본적인 정체성과 절대 어기면 안 되는 규칙(Safety & Output format)을 지정합니다.'
          }
        ]
      }
    ]
  }
];
