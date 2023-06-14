# Graduation-Project

## 코드 다운로드 방법
### N드라이브 압축파일
http://naver.me/FFi1alCU

## 실행 방법 (프로그램_사용설명서.pdf 참조)
### 1. VScode

1.1. ‘F1’ 누른 뒤, Python: 인터프리터 선택 클릭

1.2. WINDOW의 경우: ./django_venv/Script/python.exe을 인터프리터 경로로 지정
    MAC의 경우: ./django_venv_mac/bin/python 을 인터프리터 경로로 지정

1.3. Ctrl+J 누른 뒤, 터미널창에 가상서버가 제대로 켜져 있는지 확인

1.4. 다음 명령어를 차례대로 실행
    cd mbti
    python manage.py runserver

1.5. 크롬 또는 기타 웹에서 http://127.0.0.1:8000 입력

### 2. 명령 프롬프트
2.1. WINDOW 환경: Graduation_Project 폴더에서 아래 명령어를 차례대로 입력 
    cd django_venv
    cd Scripts
    python.exe ../../mbti/manage.py runserver

2.2. MAC 환경: Graduation_Project 폴더에서 아래 명령어를 차례대로 입력
    cd django_venv_mac/bin
    ./python. ../../mbti/manage.py runserver

2.3. 크롬 또는 기타 웹에서 http://127.0.0.1:8000 입력