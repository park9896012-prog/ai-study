import { PracticeTutorial } from '../types';

export const PRACTICE_TUTORIALS: PracticeTutorial[] = [
  {
    id: 'email-writer',
    title: '1. 비즈니스 이메일 작성 및 톤앤매너 완벽 조절 실습',
    category: 'business',
    difficulty: '초급',
    targetAIs: ['chatgpt', 'claude', 'copilot'],
    summary: '거래처 일정 변경 및 정중한 사과 이메일을 3가지 톤(정중함, 친근함, 단호함)으로 자동 작성하는 실습',
    estimatedMinutes: 5,
    steps: [
      {
        stepNumber: 1,
        title: '핵심 사실 정보 정리하여 프롬프트 작성하기',
        instruction: 'AI에게 필요한 기본 정보(발신자, 수신자, 목적, 변경 사유)를 전달하는 기초 프롬프트를 작성합니다.',
        promptToCopy: `너는 정교한 커뮤니케이션 전문가야. 아래 상황에 맞는 비즈니스 이메일 초안을 작성해줘.

[기본 정보]
- 수신자: ABC상사 김철수 팀장님
- 발신자: XYZ기획 이영희 대리
- 목적: 다음 주 월요일 예정된 시스템 점검으로 인한 납품 일정 2일 연기 안내 및 사과
- 연기된 납품일: 8월 15일(수요일) 오후 2시까지
- 포함할 내용: 불편을 드린 점에 대한 사과, 품질 검증 강화 약속, 변경된 상세 스케줄 첨부 안내

작성 조건:
1. 정중하고 격식 있는 비즈니스 어조
2. 제목은 읽고 바로 핵심을 파악할 수 있도록 선명하게 작성
3. 본문은 인사말 -> 핵심 사안 -> 사유 및 대책 -> 마무리 인사 순으로 구성`,
        simulatedResponse: `[제목] [XYZ기획] 시스템 점검에 따른 납품 일정 조정 안내 및 사과의 건

ABC상사 김철수 팀장님, 안녕하십니까.
XYZ기획 사업팀 이영희 대리입니다.

항상 저희 XYZ기획에 보여주시는 신뢰와 협조에 깊은 감사의 말씀을 드립니다.

다름이 아니오라, 당사 내부의 안정적인 시스템 점검 및 최종 품질 검증 절차 진행으로 인해, 당초 예정되었던 납품 일정에 부득이하게 변경이 생기게 되어 안내드립니다.

- 기존 납품 예정일: 8월 13일(월요일)
- 변경 납품 예정일: 8월 15일(수요일) 14:00까지

사전에 약속드린 일정을 준수하지 못해 김철수 팀장님과 귀사에 심려를 끼쳐드린 점 진심으로 사과의 말씀을 올립니다. 

연기된 기간 동안 더욱 철저한 품질 검증을 거쳐 한 치의 오차도 없는 완벽한 결과물로 보답하겠습니다. 변경된 상세 작업 스케줄표를 첨부파일로 동봉하오니 확인을 부탁드립니다.

추가적인 문의사항이 있으시면 언제든지 편하게 연락해주시기 바랍니다.
감사합니다.

XYZ기획 이영희 대리 드림`,
        proTip: '이메일 수신자의 성향이나 조직 문화에 따라 "조금 더 부드러운 톤" 또는 "더 간결한 톤"으로 지시어를 추가해 수정해보세요.',
        commonMistake: '사유나 날짜 같은 핵심 수치를 누락하면 AI가 임의로 날짜를 만들어내므로 반드시 정확한 수치를 포함해야 합니다.'
      },
      {
        stepNumber: 2,
        title: '톤앤매너 변경 및 요약본 만들기',
        instruction: '작성된 이메일을 모바일 메신저(카카오톡/슬랙) 전달용 요약 메시지로 변환해보는 실습입니다.',
        promptToCopy: `위에서 작성한 이메일 내용을 슬랙(Slack)이나 카카오톡으로 팀원들에게 전달할 수 있도록, 3줄로 간결하게 요약한 메시지로 재작성해줘.`,
        simulatedResponse: `📢 [납품 일정 변경 안내]
- ABC상사 납품 일정이 내부 품질 검증으로 인해 8/13(월) ➔ 8/15(수) 14시로 2일 연기되었습니다.
- 상세 검증 스케줄은 첨부파일을 확인해 주시기 바랍니다.
- 일정 준수를 위해 팀원분들의 협조 부탁드립니다!`,
        proTip: '채널별(메일, 슬랙, 보고서)로 형식을 요청하면 전달 속도가 획기적으로 빨라집니다.'
      }
    ]
  },
  {
    id: 'pdf-summary',
    title: '2. 긴 문서/PDF 핵심 3줄 요약 및 인사이트 도출 실습',
    category: 'research',
    difficulty: '중급',
    targetAIs: ['gemini', 'claude', 'perplexity'],
    summary: '50페이지 분량의 긴 시장 조사 보고서나 PDF를 업로드하고 핵심 수치와 위험 요인을 단 1분 만에 요약하는 실습',
    estimatedMinutes: 8,
    steps: [
      {
        stepNumber: 1,
        title: '파일 첨부 및 요약 프롬프트 입력',
        instruction: 'Gemini나 Claude의 파일 첨부 버튼(📎)을 누르고 텍스트나 PDF를 업로드한 후 아래 프롬프트를 실행하세요.',
        promptToCopy: `첨부한 보고서 문서를 읽고 아래 서식에 맞춰 핵심 내용을 분석해줘.

1. [핵심 요약 3줄]: 이 문서 전체를 관통하는 가장 중요한 사실 3가지
2. [주요 수치 및 데이터]: 문서에 등장하는 중요한 통계나 금액 데이터
3. [시사점 및 실행 과제]: 우리 회사가 당장 적용해야 할 전략적 아이디어 2가지

원문 문장을 그대로 복사하지 말고, 이해하기 쉬운 한국어 문장으로 다듬어서 작성해줘.`,
        simulatedResponse: `📌 [보고서 요약 분석 결과]

1. [핵심 요약 3줄]
- 2026년 생성형 AI 시장은 단순 대화형 AI에서 업무 절차를 자동 실행하는 'AI Agent' 중심으로 빠르게 개편되고 있습니다.
- 국내 기업의 AI 도입률은 전년 대비 42% 증가하였으나, 데이터 보안 및 인력 부족이 주된 걸림돌로 지목됩니다.
- 최고경영자(CEO)의 78%는 AI 도입이 향후 3년 내 기업의 생존을 결정짓는 핵심 요소라고 응답했습니다.

2. [주요 수치 및 데이터]
- 글로벌 AI 시장 규모: 2026년 3,200억 달러 예상 (연평균 성장률 34.2%)
- 기업당 평균 AI 투자 예산: 전년 대비 2.5배 증액
- 가장 큰 효용을 본 분야: 고객지원(45%), SW 개발(38%), 마케팅(28%)

3. [시사점 및 실행 과제]
- [전략 1]: 사내 데이터 유출을 방지하기 위한 보안 가이드라인 및 프라이빗 AI 모델 구축 검토 필요
- [전략 2]: 전 직원 대상 실무 프롬프트 교육 과정 개설을 통해 AI 활용 역량 내재화 추진`,
        proTip: '문서 내용에 없는 정보까지 구며내는 환각(Hallucination)을 막으려면 "문서에 언급된 내용에만 기반하여 답변해줘"라는 문구를 꼭 붙이세요.',
        commonMistake: '스캔된 이미지 형태의 PDF는 OCR 처리가 되지 않을 수 있으므로 텍스트 드래그가 가능한 PDF인지 확인하세요.'
      }
    ]
  },
  {
    id: 'code-debugger',
    title: '3. 코딩 버그 수정 및 코드 설명 실습',
    category: 'coding',
    difficulty: '고급',
    targetAIs: ['claude', 'chatgpt'],
    summary: '에러가 발생하는 JavaScript/Python 코드를 AI에게 전달하여 원인을 파악하고, 수정된 코드와 주석을 받아보는 과정',
    estimatedMinutes: 10,
    steps: [
      {
        stepNumber: 1,
        title: '에러 코드와 발생한 에러 메시지 제공하기',
        instruction: '코딩 중 발생한 버그 코드와 에러 콘솔 로그를 함께 프롬프트에 제공합니다.',
        promptToCopy: `너는 15년 차 선행 개발자야. 아래 JavaScript 코드에서 버그가 발생하고 있어.

[문제의 코드]
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].price;
  }
  return total;
}

[발생하는 에러 메시지]
Uncaught TypeError: Cannot read properties of undefined (reading 'price')

요청사항:
1. 에러가 발생한 원인을 한 문장으로 설명해줘.
2. 올바르게 수정된 코드를 제공해줘.
3. 초보 개발자가 이해하기 쉽도록 수정된 부분에 친절한 주석을 달아줘.`,
        simulatedResponse: `👨‍💻 [버그 원인 분석 및 수정 코드]

1. [에러 원인]
배열의 인덱스 범위를 초과했기 때문입니다. 반복 조건문인 \`i <= items.length\`로 인해 배열의 마지막 요소 다음인 \`undefined\` 항목에 접근하려고 하여 에러가 발생했습니다.

2. [수정된 코드]
\`\`\`javascript
function calculateTotal(items) {
  // 방어적 프로그래밍: items가 배열이 아니거나 비어있을 경우 0 반환
  if (!Array.isArray(items) || items.length === 0) {
    return 0;
  }

  // reduce 메서드를 활용하여 깔끔하고 안전하게 합계 계산
  return items.reduce((sum, item) => sum + (item.price || 0), 0);
}
\`\`\`

3. [주석 설명]
- 조건식을 \`i < items.length\`로 바꾸거나 위의 \`reduce\` 방식처럼 안전한 배열 순회 메서드를 사용하는 것이 선호됩니다.
- \`item.price || 0\` 구문으로 price 속성이 누락되었을 때의 예외도 안전하게 처리했습니다.`,
        proTip: 'Claude의 경우 Artifacts 기능으로 수정된 결과물 화면을 즉시 확인할 수 있습니다.',
        commonMistake: '사용 중인 언어 버전이나 프레임워크(React, Vue, Python 등)를 명시하지 않으면 구버전 문법으로 답할 수 있습니다.'
      }
    ]
  },
  {
    id: 'market-research',
    title: '4. 최신 시장 트렌드 조사 및 출처 검증 실습',
    category: 'research',
    difficulty: '중급',
    targetAIs: ['perplexity', 'gemini'],
    summary: 'Perplexity를 이용하여 2026년 전기차 시장 트렌드를 검색하고 신뢰할 수 있는 출처와 통계를 얻는 실습',
    estimatedMinutes: 6,
    steps: [
      {
        stepNumber: 1,
        title: '출처 명시 심층 검색 요청',
        instruction: 'Perplexity 검색창에 아래의 검색 프롬프트를 입력하여 정밀 출처 조사를 수행하세요.',
        promptToCopy: `2026년 현재 글로벌 전기차(EV) 및 배터리 시장의 주요 트렌드를 조사해줘.

반드시 다음 조건을 지켜줘:
1. 최신 뉴스 기사 및 신뢰할 수 있는 시장 조사 기관(Gartner, BloombergNEF 등)의 자료를 바탕으로 작성
2. 모든 수치와 주장 뒤에 출처 URL 각주 포함
3. 배터리 기술 발전, 가격 동향, 주요 규제 이슈로 나누어 정리`,
        simulatedResponse: `🔍 [글로벌 전기차 및 배터리 시장 트렌드 보고서]

1. [배터리 기술 발전]
- 전고체 배터리(Solid-State Battery)의 양산화 단계 진입이 본격화되고 있으며, 기존 리튬이온 대비 에너지 밀도가 40% 이상 향상되었습니다[1].
- LFP(리튬인산철) 배터리의 시장 점유율이 저가형 전기차 확대로 인해 60%를 돌파했습니다[2].

2. [가격 동향 및 시장 점유율]
- 팩당 배터리 평균 가격은 kWh당 $95 수준으로 떨어져 내연기관 차량과의 가격 동등성(Price Parity)을 달성했습니다[3].

[참고 출처]
[1] BloombergNEF 2026 Energy Storage Outlook (https://bnef.com/...)
[2] SNE Research Global EV Battery Market Report 2026
[3] Reuters EV Market Trends 2026`,
        proTip: '보고서를 작성할 때 각주 URL을 바로 클릭하여 원래 논문이나 기사를 검증할 수 있습니다.'
      }
    ]
  }
];
