# 👩🏻‍🔧 myMBTI

➡️ 학부 졸업 프로젝트로 진행한 서술형 MBTI 검사기

---
### 📌 1. 프로젝트 개요

- **프로젝트명**: myMBTI
- **기간**: 2022.09 – 2023.06 (총 9개월)
- **역할(Role)**:
    - **나**: 백엔드 & 프론트엔드 개발 (Django API, AJAX 기반 UI, 배포 환경 구축)
    - **팀원**: 머신러닝 모델 개발 (T5 기반 임베딩, XGBoost/Naive Bayes 앙상블)
- **목표**:
    - 단순 선택지가 아닌 **자유 서술형 답변** 10문항으로 MBTI 4지표(E-I, S-N, T-F, J-P)를 예측
    - 직관적인 UI/UX을 통해 **질문 → 답변 → 결과** 확인
    - **기계학습(Transformers + XGBoost, Naive Bayes)**을 활용한 MBTI 분류

---

### 🛠️ 2. 주요 기술 스택

| 구분 | 기술 및 라이브러리 |
| --- | --- |
| **프론트엔드** | HTML5,  CSS3, JavaScript, jQuery, SweetAlert, Clipboard.js |
| **백엔드** | Python 3.10, Django 5.1 + Django REST Framework, Gunicorn, WhiteNoise |
| **머신러닝** | Transformers(T5Tokenizer/T5Model), PyTorch, XGBoost, Scikit-Learn(MultinomialNB) |
| **데이터베이스** | SQLite |
| **빌드/배포** | NPM, Gulp, GitHub Actions |

---

### 📂 3. 프로젝트 구조

```bash
myMBTI/
├── classifiers/               # 학습된 ML 모델(.sav)
├── naive/                     # Naive Bayes 학습 스크립트
├── src_xgboost/               # XGBoost 학습 스크립트
│ 
├── mbti/                      # Django 프로젝트 설정            (=config)
│   ├── settings.py
│   └── urls.py
│ 
├── mbtiapp/                   # Django 앱
│   ├── models.py              # Question, Answer, MBTI 모델     (=models)
│   ├── views.py               # 페이지 뷰 + API 뷰　　　　　　　　(=view)
│   ├── demo.py                # ML 추론 로직　　　　　　　　　　　(=services)
│   ├── templates/             # index, question, result 템플릿  (=frontend)
│   └── static/                # CSS, JS, 이미지
│ 
├── db.sqlite3                 # 개발용 DB
├── requirements.txt           # Python 의존성
└── package.json               # 프론트엔드 의존성
```

---

### ⚙️ 4. 주요 기능

1. **Workflow Overview**
    - **서술형 질문** 10문항
    - AJAX 기반으로 “**질문 → 답변 → 다음 질문**” 흐름 제공
2. **메인페이지 (/)**
    - 사용자가 웹사이트 방문 시 메인 페이지 **“Check your MBTI”** 노출
    - **“Take the Test →”** 버튼 클릭으로 질문 페이지로 이동
3. **질문/답변 페이지 (/question)**
    - **서술형 질문/답변**
        - 첫 번째 질문 화면에서 텍스트 입력
        - “다음” 버튼 클릭 시 AJAX로 답변 저장 후 다음 질문 로드
        - 총 10문항을 순차적으로 응답
4. **다음 질문 로드 및 답변 저장 API (/nextform)**
    - 질문 페이지에서 즉시 **답변저장 및 다음 항목 로드**
        - 페이지 이탈을 고려하여 답변을 캐시
    - 예측 진행 중 **상태 표시**
        - 질문별 상단의 진척도 인디케이터 표시
        - 마지막 문항 제출 후 로딩 인디케이터로 예측 진행 상황 안내
5. **결과 페이지 (/result)**
    - MBTI 4지표(E-I, S-N, T-F, J-P)와 최종 4글자 조합(`ESTP` 등) 표시
        - 각 지표별 **FitScore(확신도%)** 막대그래프로 시각화
        - 유형별 설명 텍스트 및 일러스트 표시
6. **관리자(CRUD) 인터랙션**
    - Django Admin에서 **질문, 답변, MBTI 설명 항목을 생성·수정·삭제** 가능
    - **실시간 반영된 질문 리스트**로 서비스 업데이트

---

### 🎨 5. 주요 화면 (스크린샷)

**1. 메인 페이지**

![main_page.png](https://pk-secret-cloud.notion.site/image/attachment%3A9963126d-0318-441b-8020-7a973b670cef%3Amain_page.png?table=block&id=1ff8e364-66ca-80f5-906a-f316d524ef21&spaceId=19d12c4a-ff9c-4717-bac7-2e3b2df37adc&width=1810&userId=&cache=v2)

**2. 질문 입력 페이지**

![question_page.png](https://pk-secret-cloud.notion.site/image/attachment%3Ac31c4756-5561-44a9-908c-27b32c848c0f%3Aquestion_page.png?table=block&id=1ff8e364-66ca-8052-924b-fd96d1396cf2&spaceId=19d12c4a-ff9c-4717-bac7-2e3b2df37adc&width=400&userId=&cache=v2)

서술형 답변 입력 Interface

**3. 결과 페이지**

![result_page.png](https://pk-secret-cloud.notion.site/image/attachment%3Af4b7d62f-24ba-40ce-bf98-2352294bf0e6%3Aresult_page.png?table=block&id=1ff8e364-66ca-806a-bbab-ce290b40c2e1&spaceId=19d12c4a-ff9c-4717-bac7-2e3b2df37adc&width=400&userId=&cache=v2)

최종 MBTI 유형 및 지표별 FitScore 시각화

---

### 🔍 6. 상세 아키텍처

1. **프론트엔드**
    - jQuery AJAX → `/nextform/` API 호출
    - 결과 페이지에서 Django 템플릿에 모델 예측 값 렌더링
2. **백엔드**
    - **View** (`view.py`)
        - **`/`**: index
        - **`/question/`**: 질문에 대한 **답변 작성**
        - **`/nextform/`**: **답변 저장** + **다음 질문 JSON 응답**
        - **`/result/`**: **ML 예측 +** **결과 페이지 렌더링**
    - **Service** (`demo.py`)
        - 애플리케이션 구동 시 **초기 1회** 모델 로드
        - **답변 리스트 받아 4지표 예측**
3. **머신러닝**
    - **Embedding**: T5Tokenizer → PyTorch T5Model (fine-tuned)
    - **분류기**: XGBoost & MultinomialNB 병렬 앙상블
    - **결과 후처리**: 4지표별 확률값 계산 → 최종 MBTI 4글자 조합

---

### 🚀 7. 설치 및 실행 가이드

- **로컬 실행**
    
    ```bash
    git clone https://github.com/kyeong-ha/Graduation-Project.git
    
    cd mbtiapp
    
    pip install -r requirements.txt
    
    npm install
    
    python manage.py migrate && python manage.py runserver
    ```
    

---

### 💡 8. 개선할 점

- **REST API 분리**: Django REST framework로 API 엔드포인트를 제공하고, 프론트엔드를 React/Vue 등으로 교체
- **FitScore 시각화**: CSS/JS 만으로 막대차트 구현 → 외부 라이브러리 불필요
- **비동기 처리**: Celery + Redis를 이용해 ML 추론 비동기화
- **데이터베이스 교체**: 개발용 SQLite → PostgreSQL 등 운영 DB로 전환

---

> **GitHub**: [https://github.com/kyeong-ha/Graduation-Project](https://github.com/kyeong-ha/certmanager)
