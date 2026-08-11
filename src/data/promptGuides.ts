import { PromptTemplate } from '../types';

export interface PromptFramework {
  name: string;
  fullName: string;
  description: string;
  formula: string;
  example: string;
}

export const PROMPT_FRAMEWORKS: PromptFramework[] = [
  {
    name: 'RTF 프레임워크',
    fullName: 'Role - Task - Format',
    description: '가장 직관적이고 빠르게 높은 품질의 결과를 얻을 수 있는 3단계 만능 프롬프트 공공 공식',
    formula: '역할(Role) + 과업(Task) + 양식(Format)',
    example: '너는 [20년 차 펀드매니저]야. [초보 투자자를 위한 주식 분산투자 전략]을 [3가지 실행 단계가 포함된 깔끔한 번호 매기기 목록]으로 설명해줘.'
  },
  {
    name: 'CLEAR 프레임워크',
    fullName: 'Context - Logical - Example - Action - Result',
    description: '복잡한 비즈니스 문제나 논문, 긴 문서 작업을 수행할 때 쓰는 정교한 5단계 체계',
    formula: '배경(Context) -> 논리구조(Logical) -> 예시(Example) -> 동작(Action) -> 목표결과(Result)',
    example: '배경: 우리 회사는 신규 커피 브랜드를 런칭 중입니다.\n논리: 2030 직장인의 아침 소비 패턴을 고려해야 합니다.\n예시: "바쁜 아침 3분 만에 즐기는 프리미엄 드립백"\n동작: 이 컨셉으로 인스타그램 홍보 카피 3개를 작성하세요.\n목표: 클릭을 유도할 수 있는 매력적인 헤드라인 형태여야 합니다.'
  },
  {
    name: 'CARE 프레임워크',
    fullName: 'Context - Action - Result - Example',
    description: '마케팅 카피, 블로그 포스팅, SNS 게시글을 쓸 때 매력적인 반응을 이끌어내는 구성',
    formula: '상황 맥락(Context) + 구체적 행동(Action) + 기대 효과(Result) + 참조 예시(Example)',
    example: '상황: 이번에 여름 신상품 자외선 차단제가 출시되었습니다.\n행동: 야외활동을 즐기는 20대 남녀를 대상으로 인스타그램 카드뉴스 문구를 써주세요.\n효과: 끈적임 없이 피부를 보호한다는 점을 강조해주세요.\n예시: 기존 제품 대비 끈적임 0%!'
  }
];

export const PROMPT_TEMPLATES: PromptTemplate[] = [
  {
    id: 'tpl-1',
    title: '블로그 포스팅 기획 및 완벽 글쓰기',
    framework: 'RTF',
    category: 'writing',
    recommendedAI: 'Claude 3.5 / ChatGPT',
    description: '구글 SEO 검색 엔진 최적화 맞춤형 블로그 글 생성 템플릿',
    promptText: `너는 네이버 및 구글 SEO 상위 노출 전문 상위 1% 블로거야. 
주제: {주제}
타겟 독자: {타겟독자}

다음 가이드라인에 맞춰 블로그 포스팅 글을 작성해줘:
1. 매력적이고 클릭을 부르는 제목 3개 제안
2. 본문은 [서론 - 본론(3가지 핵심) - 결론 및 요약] 구조로 작성
3. 전문 용어는 쉽게 풀어서 설명하고 소제목(H2, H3)을 적절히 사용
4. 글 마무리에 독자의 댓글 참여를 유도하는 질문 포함`,
    variables: ['주제', '타겟독자'],
    exampleOutput: '제목 예시: "2026년 전기차 지원금 완벽 정리! 신청 방법부터 지급 시기까지 한눈에"'
  },
  {
    id: 'tpl-2',
    title: '프로그래밍 코드 리팩토링 및 성능 최적화',
    framework: 'CLEAR',
    category: 'coding',
    recommendedAI: 'Claude 3.5 Sonnet',
    description: '기존 코드를 더 깨끗하고(Clean) 빠른 성능으로 개편하는 프롬프트',
    promptText: `너는 시니어 소프트웨어 아키텍트야. 아래 코드를 검토하고 성능 최적화 및 가독성 개선 리팩토링을 수행해줘.

언어/프레임워크: {언어}
목표: {개선목표}

[코드]
{소스코드}

요청사항:
1. 기존 코드의 비효율적인 부분 2가지 지적
2. 가독성과 속도가 개선된 수정 코드 제공
3. 변경 사항에 관한 핵심 설명 주석 작성`,
    variables: ['언어', '개선목표', '소스코드'],
    exampleOutput: '반복문 O(N^2) 구조를 해시맵 O(N)으로 변경하여 실행 속도 10배 향상'
  },
  {
    id: 'tpl-3',
    title: '외국어 번역 및 자연스러운 문맥 교정',
    framework: 'RTF',
    category: 'writing',
    recommendedAI: 'Claude 3.5 / ChatGPT',
    description: '직역 투를 벗어나 자연스러운 현지 원어민 표현으로 다듬어주는 템플릿',
    promptText: `너는 원어민 수준의 한/영 전문 번역가야. 아래 문장을 번역해줘.

[원문]
{번역할문장}

조건:
1. 단어 대 단어 직역이 아닌 원어민이 일상 비즈니스에서 쓰는 매끄러운 표현으로 번역
2. 3가지 버전으로 제공: (1) 캐주얼하고 친근한 어조 (2) 정중한 비즈니스 어조 (3) 간결한 메시지 어조`,
    variables: ['번역할문장'],
    exampleOutput: '영문 비즈니스 메일 어조 및 세부 가이드 제공'
  }
];
