# iPad 제품 페이지 클론 프로젝트

> Apple iPad 공식 페이지를 참고하여 **HTML, CSS, JavaScript**만으로 구현한 클론코딩 프로젝트입니다.  
> 강의 수강을 통해 레이아웃, 반응형, DOM 조작, IntersectionObserver, 동적 렌더링 등을 학습했습니다.

---
# 배포
> https://apple-ipad-w65510tcs-huibeoms-projects.vercel.app/
---

## 개요
- Apple iPad 10.2 제품 페이지를 학습 목적으로 클론 제작
- HTML/CSS로 **레이아웃**과 **시각적 요소** 구현
- JavaScript로 **애니메이션·동적 콘텐츠** 및 **이벤트 처리** 구현
- **상업적 목적 없음**

---

## 주요 기능 (Features)
- **헤더 메뉴·검색창**
    - 검색창 열기/닫기 애니메이션
    - 장바구니 토글 기능
- **스크롤 애니메이션**
    - IntersectionObserver로 `.info` 요소 순차 등장
- **비디오 컨트롤**
    - Play/Pause 버튼으로 영상 제어
- **iPad 비교 섹션**
    - `data/ipads.js`로부터 iPad 목록·색상·가격 동적 렌더링
- **푸터 내비게이션**
    - `data/navigations.js` 기반으로 Footer 메뉴 동적 생성
- **연도 자동 업데이트**
    - 현재 연도(`.this-year`) 자동 표시

---

## 사용 기술 (Tech Stack)
- **HTML5** – 시맨틱 마크업 및 SEO 메타태그 적용
- **CSS3** – Flex/Grid, 커스텀 속성(CSS Variables), 미디어쿼리, 트랜지션
- **Vanilla JavaScript (ES6)** – DOM API, 이벤트 바인딩, 템플릿 리터럴
- **IntersectionObserver API** – 스크롤 시 애니메이션 처리

---

## 학습 포인트 (What I Learned)
- **HTML**: SEO/OG 메타태그 및 구조적 마크업 작성
- **CSS**: Apple 스타일 UI를 구현하며 CSS 변수·미디어쿼리 활용
- **JS**: 이벤트 전파 제어(`event.stopPropagation`), DOM 조작, 템플릿 리터럴을 통한 렌더링
- **IntersectionObserver**로 스크롤 기반 애니메이션 구현
- 데이터 분리(`ipads.js`, `navigations.js`)로 **유지보수성** 향상

---

## 회고 (Retrospective)

### 잘한 점
- **실제 대기업 사이트의 구조를 모방**하면서 HTML·CSS·JS의 기초를 경험할 수 있었다.
- **IntersectionObserver**, **event.stopPropagation** 같은 실무성 높은 기능을 경험했다.
- HTML/CSS 단계에서 레이아웃을 먼저 잡고 JS로 인터랙션을 얹는 **Bottom-up 접근**을 경험했다.

### 어려웠던 점 / 아쉬웠던 점
- 원본 페이지가 워낙 방대해서 **모두 이해하기는 어려웠다**
- CSS 절대 위치값(`transform`)이 많아 **반응형 대응**이 까다로웠다.
- 강의 수강하며 생각보다 그냥 듣기만하고 코드만 따라서 작성하다보니 많은 양을 배우지 못해 아쉬웠다.

### 배운 점
- **디자인 시스템/컴포넌트 단위 CSS**의 필요성을 절감했다.
- **데이터 기반 렌더링**(템플릿 리터럴)을 통해 코드 중복을 줄이는 법을 익혔다.
- **접근성**(시맨틱 태그, alt, role, aria 속성)의 중요성을 다시 확인했다.

### 앞으로 개선 계획
- 복습하며 코드를 강의없이 혼자 분석하고 이해해보기


