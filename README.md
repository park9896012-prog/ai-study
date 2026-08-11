# 알기쉽게 배우는 AI (ChatGPT, Google Gemini, Claude, Perplexity, Microsoft Copilot)

> **AI 초보자부터 전문가까지, 한눈에 비교하고 바로 따라하는 실무 생성형 AI 가이드 웹 사이트**

![알기쉽게 배우는 AI 헤드](https://learn-ai-guide.com/favicon.svg)

---

## 📌 프로젝트 소개

본 프로젝트는 **ChatGPT, Google Gemini, Claude 3.5, Perplexity, Microsoft Copilot** 등 최신 대표 5대 AI 서비스의 특징과 장단점을 한눈에 비교하고, 초보자·중급자·고급자 수준별 사용법과 실습 예제, 효과적인 프롬프트 작성법을 무료로 배울 수 있도록 개발된 웹 애플리케이션입니다.

**구글 애드센스(Google AdSense) 승인 정책을 100% 충족**할 수 있도록 풍부하고 유용한 교육 콘텐츠, 명확한 사이트 레이아웃, 필수 정책 페이지(사이트 소개, 개인정보처리방침, 이용약관, 문의하기) 및 반응형 광고 스팟 구조가 완전하게 구축되어 있습니다.

---

## ✨ 주요 기능 및 특징

### 1. 5대 대표 AI 완벽 비교 분석 (`#compare`)
- **대상 AI**: ChatGPT (OpenAI), Google Gemini, Claude 3.5 (Anthropic), Perplexity, Microsoft Copilot
- **비교 항목**: 무료/유료 가격 정책, 컨텍스트 용량, 핵심 장점, 아쉬운 점, 추천 활용 분야
- **보기 모드**: 직관적인 카드 포맷 및 비교 표(Matrix Table) 포맷 제공

### 2. 수준별 가이드 커리큘럼 (`#guide`)
- **초보자 (입문)**: 회원가입, 대화창 사용법, 실패 없는 질문 작성 3가지 규칙, 꿀 프롬프트 5선
- **중급자 (실무)**: 전문가 페르소나(Persona) 부여, PDF/파일 분석, 유튜브 영상 요약, Claude Artifacts / Perplexity Academic 모드 활용법
- **고급자 (전문)**: Chain-of-Thought (CoT) 추론 프롬프팅, Custom GPTs / Gems / Projects 구축, 시스템 프롬프트 가이드

### 3. 단계별 인터랙티브 실습 예제 (`#practice`)
- 순서대로 따라하며 배우는 실무 예제 (이메일 작성, PDF 3줄 요약, 코딩 디버깅, 시장 조사 등)
- **1초 프롬프트 복사 기능** 및 **AI 시뮬레이션 답변 결과 미리보기**
- 실습 결과 PDF 저장/인쇄 기능 제공

### 4. 프롬프트 작성법 & 실시간 자동 생성기 (`#prompt`)
- 프롬프트 작성 5대 원칙 (ROLE - TASK - CONTEXT - FORMAT - CONSTRAINT)
- 유명 프롬프트 공공 공식 (RTF, CLEAR, CARE 프레임워크)
- **실시간 프롬프트 생성기 (Prompt Auto-Builder)**: 원하는 요소를 입력하면 최적의 지시어로 자동 조합

### 5. 나에게 꼭 맞는 AI 찾기 진단 테스트 (`#quiz`)
- 3가지 짧은 선택형 질문으로 사용자의 업무/기기/예산에 적합한 맞춤 AI 추천

### 6. 구글 애드센스(AdSense) 정책 준수 완벽 대응 (`#policy`)
- **사이트 소개 (About Us)**
- **개인정보처리방침 (Privacy Policy)**: 쿠키(Cookie) 및 서드파티 광고 기술(Google AdSense) 사용 고지 포함
- **이용약관 (Terms of Service)**
- **문의하기 (Contact Us)**: 공식 문의처 `ju9896012@gmail.com` 반영 및 문의 접수 폼
- **반응형 애드센스 광고 영역 스팟 (`AdSenseSlot`)** 제공

---

## 🛠 기술 스택

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Lucide React Icons
- **Animation**: Motion
- **SEO Optimization**: Open Graph tags, Twitter Cards, Schema.org JSON-LD, `robots.txt`, `sitemap.xml`, `favicon.svg`

---

## 🚀 GitHub Repository 업로드 및 배포 방법

### 1. 로컬 개발 환경 실행

```bash
# 패키지 설치
npm install

# 개발 서버 실행 (port 3000)
npm run dev
```

### 2. 빌드 및 테스트

```bash
# 타입 체크 및 빌드
npm run build
```

빌드 결과물은 `dist/` 폴더에 정적 HTML/JS/CSS 파일로 생성됩니다.

### 3. GitHub Repository에 업로드하기

```bash
git init
git add .
git commit -m "Initial commit: 알기쉽게 배우는 AI 웹사이트"
git branch -M main
git remote add origin https://github.com/사용자계정/learn-ai-guide.git
git push -u origin main
```

---

## 💰 구글 애드센스(Google AdSense) 설정 방법

1. **Google AdSense 신청**: [Google AdSense](https://adsense.google.com/)에 로그인 후 본 사이트 URL 등록
2. **AdSense 스크립트 적용**: `index.html` 파일의 주석 처리된 AdSense 스크립트 부분의 주석을 해제하고, `ca-pub-XXXXXXXXXXXXXXXX` 본인의 Publisher ID로 변경합니다.
3. **광고 스팟 활성화**: `src/components/AdSenseSlot.tsx` 컴포넌트의 `data-ad-client` 값 및 `data-ad-slot` 값을 발급받은 슬롯 ID로 교체합니다.

---

## 📧 문의처 (Contact)

- **공식 문의 이메일**: `ju9896012@gmail.com`
- **운영자**: 알기쉽게 배우는 AI 운영팀

---

© 2026 알기쉽게 배우는 AI. All rights reserved.
