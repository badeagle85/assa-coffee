# ASSA Coffee 웹사이트

프리미엄 커피 컨설팅 및 솔루션 기업 ASSA Coffee의 현대적이고 반응형 웹사이트입니다.

## 프로젝트 개요

ASSA Coffee는 커피 비즈니스를 위한 종합 솔루션을 제공하는 전문 커피 컨설팅 기업입니다.
이 웹사이트는 우리의 전문성, 서비스, 그리고 커피 품질에 대한 열정을 디지털 플랫폼을 통해 선보입니다.

## 기술 스택

- 프레임워크: Next.js 13 (App Router)
- 개발 언어: TypeScript
- 스타일링: Tailwind CSS
- 검색엔진 최적화: Next.js 내장 SEO 최적화
- 타이포그래피: Noto Sans KR

## 주요 기능

### 1. 현대적 디자인

- 모바일 우선 반응형 디자인
- 깔끔하고 전문적인 디자인
- 최적화된 사용자 경험
- 부드러운 애니메이션과 전환 효과

### 2. 검색엔진 최적화 (SEO)

- 메타 태그 최적화
- 구조화된 데이터 구현
- 성능 최적화
- 모바일 친화적 디자인

### 3. 핵심 섹션

- 회사 소개 및 비전
- 서비스 및 솔루션
- 파트너사 소개
- 위치 정보
- 문의하기 양식

### 4. 다국어 지원

- 한국어 (기본)
- 영어 (보조)

## 시작하기

1. 저장소 복제

```bash
git clone [repository-url]
cd assa-coffee
```

2. 의존성 설치

```bash
npm install
```

3. 개발 서버 실행

```bash
npm run dev
```

4. 브라우저에서 확인

```
http://localhost:3000
```

## 프로젝트 구조

```
assa-coffee/
├── src/
│ ├── app/ # Next.js 13 App Router
│ │ ├── layout.tsx # 모든 페이지에 공통적으로 적용되는 전체 레이아웃(HTML, body 태그 구조, 메타데이터 (SEO), 전역 스타일)
│ │ ├── page.tsx # 메인 페이지
│ │ ├── menu/ # 메뉴 페이지
│ │ ├── partners/ # 파트너 페이지
│ │ ├── locations/ # 위치 정보
│ │ └── contact/ # 문의하기
│ ├── components/ # 컴포넌트
│ │ ├── common/ # 공통 컴포넌트
│ │ ├── layout/ # 레이아웃 컴포넌트,  재사용 가능한 레이아웃 관련 컴포넌트들을 모아둔 디렉토리 (사이드바, 헤더, 푸터)
│ │ └── sections/ # 섹션 컴포넌트
│ └── lib/
│   ├── types/ # 타입 정의
│   └── utils/ # 유틸리티
└── public/ # 정적 파일
```

## 개발 중점 사항

- 성능: 최적화된 로딩 및 렌더링
- 검색엔진 최적화: 향상된 검색 엔진 노출
- 접근성: WCAG 표준 준수
- 사용자 경험: 직관적인 네비게이션과 상호작용

## SEO 전략

- 검색 엔진 노출을 위한 메타 태그 구현
- 검색 엔진에 최적화된 콘텐츠 구조
- 검색 순위 향상을 위한 모바일 친화적 디자인
- 최적화를 통한 빠른 로딩 속도

## 반응형 디자인

- 모바일 우선 접근
- 태블릿과 데스크톱 최적화
- 모든 기기에서 일관된 경험
- 터치 친화적 인터페이스

## 기여하기

버그 제보나 기능 개선 제안은 이슈를 통해 제출해 주세요.
