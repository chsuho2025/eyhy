window.eyVisuals = {
  "01": {
    src: "assets/figures/visual-01.png",
    alt: "사내용 AI가 정보 문의와 실행 요청을 구분해 처리하는 흐름도"
  },
  "02": {
    src: "assets/figures/visual-02.png",
    alt: "규정 검색부터 업무 분기와 사람 평가까지 이어지는 상담 AI 운영 흐름도"
  },
  "04": {
    src: "assets/figures/visual-04.png",
    alt: "TTS 발음 후보를 조사해 자동화 후보와 사람 검토 대상으로 나누는 흐름도"
  },
  "05": {
    src: "assets/figures/visual-05.png",
    alt: "공개 음악 신호를 정규화하고 검토해 TOP 25로 발행하는 흐름도"
  },
  "06": {
    src: "assets/figures/visual-06.png",
    alt: "사용 조건을 조합한 47개 페르소나로 AI 결과를 평가하는 흐름도"
  },
  "07": {
    src: "assets/figures/visual-07.png",
    alt: "대본 구조화부터 생성, 검토, 렌더와 최종 영상까지 이어지는 흐름도"
  }
};

window.eyArticles = [
  {
    slug: "internal-work-ai-qa",
    tags: ["추천 1", "사내 AI", "대화형 QA", "실행 가능성"],
    title: "\"사내 카페에서 커피 주문해줘\" — 사내용 AI는 어디까지 실행할 수 있을까요?",
    excerpt: "사내 정보를 찾아주는 대화형 AI의 초기 QA에 참여해 직원 상황별 질문과 후속 대화를 테스트했습니다. 답변의 근거뿐 아니라 실제로 실행할 수 없는 요청을 가능한 것처럼 이어가는 문제를 확인했습니다.",
    date: "2026. 07. 20",
    period: "2025.09 ~ 2025.10",
    summary: {
      project: "사내 규정과 업무 정보를 자연어로 찾게 하는 대화형 AI의 초기 QA",
      problem: "문서에 맞는 답변인지뿐 아니라 주문·신청처럼 시스템이 처리할 수 없는 요청을 가능한 것처럼 약속하는 문제가 있었습니다.",
      response: "직무·장소·시간·질문 목적을 조합한 직원 페르소나와 후속 질문을 만들고, 정보 안내와 실제 업무 실행을 분리해 확인했습니다.",
      sections: [
        {
          heading: "직원 상황을 테스트 질문으로 변환",
          paragraphs: [
            "직무명만 바꾸지 않고 업무 장소, 근무 시간과 필요한 정보의 종류를 결합해 질문을 구성했습니다. 첫 질문 뒤에 시간과 장소 조건이 추가됐을 때 이전 맥락이 유지되는지도 확인했습니다.",
            "답변이 자연스러워도 사용자가 제시한 조건을 빠뜨리거나 표시된 사내 자료와 다르면 업무에 사용하기 어렵다고 판단했습니다."
          ],
          bullets: ["야간 외부 촬영 뒤 교통비", "외부 캠페인 비용 처리", "신규 입사자의 복지·휴가 질문"]
        },
        {
          heading: "정보 안내와 실제 실행의 구분",
          paragraphs: [
            "사내 카페 주문을 요청했을 때 당시 AI는 주문·결제 시스템과 연결되지 않았는데도 옵션을 묻고 처리를 약속했습니다. 문장의 친절함보다 현재 시스템이 실제로 할 수 있는 일을 확인해야 했습니다.",
            "당시에는 문제를 발견해 공유했고, 이후 연동·인증·권한·필수 정보·상태 확인의 다섯 조건으로 다시 정리했습니다."
          ],
          examples: [{ title: "기대 응답 방향", lines: [["한계", "현재 이 대화에서는 주문과 결제를 직접 처리할 수 없습니다."], ["대안", "실제 주문 경로와 이용 방법은 안내할 수 있습니다."]] }]
        }
      ]
    },
    characterCount: "4,113",
    readTime: "6분",
    highlights: ["정보의 정확성과 행동 권한을 별도로 확인해야 했습니다.", "대화를 오래 이어가는 것이 항상 도움은 아니었습니다"],
    annotations: [["실행 가능성", "AI가 말한 행동을 현재 시스템과 권한으로 실제 완료하고 결과까지 확인할 수 있는지를 뜻합니다."]],
    caseNumber: "01",
    thumbnail: "assets/thumbnails/ey-01-internal-ai.jpg",
    thumbnailAlt: "연한 파란색 돋보기 모양의 3D 아이콘",
    markdown: "content/posts/01-internal-work-ai-qa.md"
  },
  {
    slug: "academy-policy-ai",
    tags: ["추천 2", "RAG", "Citation", "Human-in-the-loop"],
    title: "\"우리 아이 보강이 확정됐나요?\" — 운영규정 기반 학원 상담 AI 개발기",
    excerpt: "부모님이 운영하는 수학학원의 반복 상담을 줄이기 위해 RAG 상담 AI MVP를 만들었습니다. 규정은 버전과 시행일이 있는 근거로 안내하고 개인정보와 개인별 예외는 담당자에게 넘기도록 설계했습니다.",
    date: "2026. 07. 20",
    period: "2026.06 ~ 진행 중",
    summary: {
      project: "운영규정 검색, Citation, 담당자 이관과 평가 흐름을 포함한 학원 상담 AI MVP",
      problem: "일반 규정 질문과 개인정보 요청, 개인별 확정 요청, 등록 자료에 없는 질문이 하나의 상담 창구에 섞여 들어왔습니다.",
      response: "현행·공개 가능 규정만 검색하고 일반 안내, 담당자 검토, 제공 제한, 근거 부족의 네 경로로 분기했습니다.",
      sections: [
        {
          heading: "규정과 책임을 함께 설계",
          paragraphs: [
            "문서 제목과 내용만 저장하지 않고 버전, 시행일과 공개 대상을 함께 관리했습니다. 답변에는 사용한 문서의 Citation을 표시하고 근거가 없으면 일반적인 관행을 만들어 답하지 않았습니다.",
            "AI는 현행 규정 검색과 일반 안내를 맡고 담당자는 학생 정보 확인, 예외 적용과 최종 결정을 맡도록 역할을 나눴습니다."
          ]
        },
        {
          heading: "고정 사례로 업무 경로를 검증",
          paragraphs: [
            "초기에는 ‘성적’ 같은 단어만으로 위험을 판단해 일반 정책 질문까지 거절했습니다. 특정 인물 지목과 실제 정보 제공 요구를 함께 보도록 조건을 수정했습니다.",
            "다섯 개 고정 질문으로 네 가지 업무 경로를 확인했으며, 이는 서비스 정확도가 아니라 의도한 분기가 동작한다는 회귀 테스트 결과입니다."
          ],
          bullets: ["policy_answer", "needs_review", "blocked", "insufficient_evidence"]
        }
      ]
    },
    characterCount: "3,795",
    readTime: "5분",
    highlights: ["언제 답하지 않고 사람에게 넘길 것인가", "사람이 마지막에 확인한다는 문장만 추가한 것이 아닙니다"],
    annotations: [["RAG", "등록된 문서를 검색한 뒤 그 근거를 바탕으로 답변을 만드는 방식입니다."], ["Citation", "답변에 사용한 문서·섹션·버전과 시행일을 다시 확인할 수 있게 표시한 정보입니다."]],
    caseNumber: "02",
    thumbnail: "assets/thumbnails/ey-02-academy-ai.jpg",
    thumbnailAlt: "흰색과 파란색 대화 말풍선 모양의 3D 아이콘",
    markdown: "content/posts/02-academy-policy-ai.md"
  },
  {
    slug: "berriz-gemini-api",
    tags: ["Gemini API", "데이터 최소화", "Responsible AI", "우수상"],
    title: "팬 활동 데이터에서 지금 대화에 필요한 정보만 남기는 법",
    excerpt: "사내 AI 해커톤에서 팬의 최근 공개 활동을 Gemini API로 정리해 아티스트의 답글 작성을 돕는 프로토타입을 팀으로 제작했습니다. 입력 범위와 과잉 추론을 제한하고 최종 결정은 사용자에게 남겼습니다.",
    date: "2026. 07. 20",
    period: "2025.11 ~ 2025.12",
    summary: {
      project: "팬 활동을 정리해 아티스트의 답글 작성을 돕는 Gemini API 기반 팀 프로토타입",
      problem: "모든 과거 활동을 입력하면 무관한 기록과 저정보 반응이 지속적인 관심사처럼 확대될 수 있었습니다.",
      response: "중복·저정보 활동을 정제하고 위험 활동을 분리한 뒤 제공된 기록 안에서만 구조화해, 아티스트가 최종 답글을 결정하도록 했습니다.",
      sections: [
        {
          heading: "API 호출 전에 입력부터 정제",
          paragraphs: ["중복 내용, 의미가 적은 반복 반응, 현재 답글과 관련 없는 오래된 활동과 위험 가능 활동을 분리했습니다. 이는 토큰 절감보다 모델이 사용할 수 있는 근거 범위를 제한하기 위한 설계였습니다."]
        },
        {
          heading: "관계를 대신하지 않는 AI",
          paragraphs: ["Gemini 결과를 최근 관심사, 구체적인 질문, 안전 여부와 답글 참고 문장으로 나눴습니다. 기록에 없는 감정·관계·시점을 만들지 않도록 제한하고 결과는 자동 전송하지 않았습니다."],
          examples: [{ title: "근거 제한", lines: [["입력", "요즘 이 노래를 자주 듣고 있어요."], ["위험", "힘든 시기를 이 노래로 위로받고 있습니다."], ["기대", "최근 해당 곡을 자주 듣는다고 언급했습니다."]] }]
        }
      ]
    },
    characterCount: "3,045",
    readTime: "4분",
    highlights: ["이번 대화에 필요한 데이터", "최종 결과는 팬에게 자동 전송하지 않았습니다"],
    annotations: [["구조화 출력", "후속 처리와 검수가 가능하도록 자유문 대신 정해진 필드로 결과를 받는 방식입니다."]],
    caseNumber: "03",
    thumbnail: "assets/thumbnails/ey-03-berriz.jpg",
    thumbnailAlt: "분홍색과 보라색 하트 모양의 3D 아이콘",
    markdown: "content/posts/03-berriz-gemini-api.md"
  },
  {
    slug: "music-tts-pronunciation",
    tags: ["데이터 전처리", "발음사전", "TTS", "품질 검수"],
    title: "멜론 AI가 음악 고유명사를 정확히 읽기 위한 TTS 발음사전",
    excerpt: "영어·숫자가 포함된 약 3만 5천 개의 후보를 정리하고 초기 약 3,500건을 공개 자료로 조사했습니다. 발음과 함께 근거·예외·처리 시간을 기록해 자동화 후보와 사람 검토 대상을 구분했습니다.",
    date: "2026. 07. 20",
    period: "2026.03 ~ 2026.06",
    summary: {
      project: "멜론 AI와 사내 TTS에 사용할 음악 도메인 발음사전 데이터 조사·적용 검수",
      problem: "여러 언어와 숫자·기호가 섞인 고유명사는 화면 표기만으로 통용 발음을 일관되게 결정하기 어려웠습니다.",
      response: "약 3,500건의 발음과 근거·예외·처리 시간을 기록하고 반복 표기와 고유한 조어를 구분해 문장 단위로 적용 결과를 확인했습니다.",
      sections: [
        { heading: "수동 조사를 재사용 가능한 데이터로", paragraphs: ["검색어, 확인 자료, 국적·활동 정보, 국내 통용 표기, 선택 이유와 처리 시간을 함께 남겼습니다. 발음만 저장하지 않고 다른 사람이 판단을 다시 확인할 수 있게 했습니다."] },
        { heading: "자동화와 사람 검토의 경계", paragraphs: ["반복되는 클래식 표기는 규칙 기반 후보 생성이 가능했지만 숫자와 철자를 의도적으로 조합한 이름은 공개 자료와 사람 검토가 필요했습니다. 등록 뒤에는 단어가 아닌 실제 추천 문장으로 발음과 호흡을 확인했습니다."] }
      ]
    },
    characterCount: "3,326",
    readTime: "5분",
    highlights: ["출처와 판단 이유를 함께 남겨야", "자동화할 수 있는 일과 사람이 확인해야 할 일"],
    annotations: [["발음사전", "텍스트 표기와 TTS가 읽어야 할 발음을 연결해 음악 고유명사의 오독을 줄이는 데이터입니다."]],
    caseNumber: "04",
    thumbnail: "assets/thumbnails/ey-04-tts-data.jpg",
    thumbnailAlt: "크림색 페이지와 청록색 표지의 펼친 책 3D 아이콘",
    markdown: "content/posts/04-music-tts-pronunciation.md"
  },
  {
    slug: "chart-republic",
    tags: ["공개 데이터", "Analytics", "데이터 검증", "진행 중"],
    title: "공개 차트 여섯 개로 K-pop 트렌드 차트를 만든 과정",
    excerpt: "10·20대 이용자와 음악 관심 확대라는 고민을 개인적인 데이터 가설로 바꿨습니다. Apple Music·Spotify·YouTube 공개 순위를 조합해 날짜별 Snapshot과 관리자 검토가 포함된 Chart Republic을 만들었습니다.",
    date: "2026. 07. 20",
    period: "2026.03 ~ 진행 중",
    summary: {
      project: "여섯 개 공개 음악 순위를 조합한 K-pop 트렌드 데이터 서비스",
      problem: "실제 연령별 청취 데이터 없이 10·20대의 선호를 직접 측정하거나 대표한다고 주장할 수 없었습니다.",
      response: "바이럴·지역·숏폼 순위를 대체 신호로 명시하고 후보 50곡, TOP 25, 날짜별 Snapshot, 검증 스크립트와 관리자 검토 흐름을 구현했습니다.",
      sections: [
        { heading: "주장보다 데이터 범위를 먼저 설정", paragraphs: ["공개 순위는 10·20대 인기의 공식 지표가 아니므로 ‘가장 인기 있는 음악’ 대신 스트리밍·바이럴·숏폼 신호를 조합한 트렌드 차트로 표현했습니다."] },
        { heading: "수집부터 발행까지의 운영", paragraphs: ["곡 ID와 제목·아티스트를 정규화하고 출처별 점수를 계산한 뒤 Snapshot으로 변화를 보존했습니다. 동명이곡과 잘못된 이미지는 관리자 화면과 검증 스크립트로 다시 확인했습니다."] }
      ]
    },
    characterCount: "3,074",
    readTime: "5분",
    highlights: ["원하는 결론보다 현재 데이터가 말할 수 있는 범위", "자동 수집 뒤에 관리자 검토를 남겼습니다"],
    annotations: [["대체 신호", "직접 측정하려는 데이터가 없을 때 관련 가능성이 있는 공개 지표를 제한적으로 사용하는 방식입니다."], ["Snapshot", "특정 날짜의 차트와 계산 결과를 보존해 변화를 다시 확인할 수 있게 한 기록입니다."]],
    caseNumber: "05",
    thumbnail: "assets/thumbnails/ey-05-chart-republic.jpg",
    thumbnailAlt: "상승 곡선이 결합된 파스텔 막대 차트 3D 아이콘",
    markdown: "content/posts/05-chart-republic.md"
  },
  {
    slug: "melon-playlist-qa",
    tags: ["47개 페르소나", "AI 서비스 QA", "맥락 유지", "TTS"],
    title: "47개 페르소나로 대화형 AI 플레이리스트를 검수하기",
    excerpt: "서로 다른 생활 리듬과 서비스 경험을 반영한 47개 페르소나를 구성했습니다. 사용자가 처음 말한 조건이 추천 결과, 후속 대화와 TTS까지 유지되는지를 실제 이용 흐름으로 검수했습니다.",
    date: "2026. 07. 20",
    period: "2026.03 ~ 2026.06",
    summary: {
      project: "자연어로 플레이리스트를 만드는 대화형 AI의 사용자 시나리오·추천·TTS QA",
      problem: "평균적인 주간 직장인 중심의 질문만으로는 야간근무·육아·재택근무와 모호한 사용자 표현을 충분히 확인하기 어려웠습니다.",
      response: "생활시간·활동·취향·숙련도와 후속 대화 방식을 조합한 47개 페르소나를 만들고 명시 조건의 반영 여부로 Pass/Fail을 기록했습니다.",
      sections: [
        { heading: "평균 사용자가 아닌 조건의 조합", paragraphs: ["이름과 나이만 바꾸지 않고 음악을 듣는 시간, 활동 목적, 제외 조건과 서비스 숙련도가 실제 질문과 기대 결과를 바꾸도록 설계했습니다."] },
        { heading: "취향 대신 명시 조건으로 평가", paragraphs: ["추천곡이 개인적으로 마음에 드는지보다 사용자가 말한 시간·활동·분위기·제외 조건을 기준으로 봤습니다. 후속 대화에서는 유지할 조건, 새 조건과 제거한 조건을 구분했습니다."], examples: [{ title: "복합 조건", lines: [["첫 요청", "새벽 배송하면서 졸리지 않게 들을 플리"], ["후속 요청", "너무 시끄러운 곡은 제외"], ["확인", "집중 유지와 높은 자극 제외가 함께 남는가"]] }] }
      ]
    },
    characterCount: "3,035",
    readTime: "4분",
    highlights: ["취향보다 사용자가 말한 조건", "새 조건과 이전 조건을 함께 확인했습니다"],
    annotations: [["페르소나", "서로 다른 시간·활동·숙련도에서 실제로 나올 질문과 기대 결과를 설계하기 위한 사용자 유형입니다."]],
    caseNumber: "06",
    thumbnail: "assets/thumbnails/ey-06-playlist-qa.jpg",
    thumbnailAlt: "연두색 음표와 음반 모양의 3D 아이콘",
    markdown: "content/posts/06-melon-playlist-qa.md"
  },
  {
    slug: "prombank",
    tags: ["생성형 AI", "프롬프트", "8개월 운영", "422개"],
    title: "422개의 프롬프트 템플릿을 운영한 공유 플랫폼 프롬뱅크",
    excerpt: "생성형 AI에 대한 관심을 개인적인 사용에서 멈추지 않고 프롬프트 공유 플랫폼을 제작해 8개월간 운영했습니다. 422개의 템플릿을 축적하며 재사용 가능한 AI 활용 자료의 조건을 고민했습니다.",
    date: "2026. 07. 20",
    period: "8개월 운영",
    summary: {
      project: "목적별 생성형 AI 프롬프트를 공유하는 개인 서비스 프롬뱅크",
      problem: "한 번 잘 작동한 프롬프트도 사용 상황과 바꿔 넣을 정보를 알 수 없으면 다른 사람이 재사용하기 어려웠습니다.",
      response: "공유 플랫폼을 직접 제작·운영하며 422개의 프롬프트 템플릿을 축적했습니다. 사용자 수나 업무 효과를 결과로 확대하지 않고 제작·운영 사실과 축적 규모를 구분했습니다.",
      sections: [
        { heading: "개인적인 관심을 서비스로", paragraphs: ["흩어진 프롬프트를 목적에 맞게 찾고 필요한 부분을 바꿔 다시 실행할 수 있는 공간을 직접 만들었습니다. 한 번 만든 뒤 끝내지 않고 8개월 동안 콘텐츠를 운영했습니다."] },
        { heading: "성과와 효과를 구분", paragraphs: ["8개월 운영과 422개 템플릿은 실행의 지속성과 축적 규모를 보여줍니다. 사용자 수, 재방문율과 업무 효과는 측정하지 않았으므로 성과로 제시하지 않습니다."] }
      ]
    },
    characterCount: "2,438",
    readTime: "4분",
    highlights: ["목적에 맞게 찾고 필요한 부분을 바꿔 다시 실행", "8개월 동안 422개의 프롬프트 템플릿"],
    annotations: [["프롬프트 템플릿", "사용 목적과 바꿔 넣을 입력, 고정 조건과 기대 출력 형식을 구분한 재사용 단위입니다."]],
    caseNumber: "07",
    thumbnail: "assets/thumbnails/ey-07-prombank.jpg",
    thumbnailAlt: "보라색과 파란색의 겹친 카드와 분홍색 반짝이 3D 아이콘",
    markdown: "content/posts/07-prombank.md"
  },
  {
    slug: "onboarding-improvement",
    tags: ["Working Style", "Desktop Research", "피드백", "협업"],
    title: "좋은 피드백은 상대의 의도를 이해하는 것에서 시작됐습니다",
    excerpt: "입사 온보딩을 평가하면서 불편 사항만 나열하지 않고 담당자가 프로그램을 구성한 의도와 실제 경험의 차이를 조사했습니다. 구체적인 설문은 추가 인터뷰와 개선 논의로 이어졌습니다.",
    date: "2026. 07. 20",
    period: "카카오엔터테인먼트 인턴 입사 초기",
    summary: {
      project: "사내 자료 조사와 참여 경험 비교를 바탕으로 한 온보딩 개선 제안",
      problem: "참여자의 불편만 나열하면 담당자의 목적과 제약을 놓쳐 실행 가능한 피드백이 되기 어려웠습니다.",
      response: "사내 블로그에서 설계 의도를 조사하고 의도·실제 경험·차이·근거·제안 순서로 설문을 작성해 추가 인터뷰로 발전시켰습니다.",
      sections: [
        { heading: "의견보다 먼저 의도를 조사", paragraphs: ["담당자가 신규 입사자에게 제공하려 한 경험과 제가 실제로 겪은 과정을 비교했습니다. 같은 목표를 보고 있어야 개인적인 선호와 반복 가능한 문제를 구분할 수 있다고 보았습니다."] },
        { heading: "존중과 솔직한 의견", paragraphs: ["상대의 노력을 이해하는 것과 문제를 말하는 것은 반대가 아니었습니다. 관찰한 차이를 근거와 함께 전달했고, 상세한 설문은 성장문화팀과의 추가 인터뷰와 개선 논의로 이어졌습니다."] }
      ]
    },
    characterCount: "2,174",
    readTime: "4분",
    highlights: ["의견을 쓰기 전에 담당자의 의도를 조사했습니다", "존중과 솔직한 의견은 반대가 아니었습니다"],
    annotations: [["Desktop Research", "관련 자료와 배경을 먼저 조사해 문제와 제안의 맥락을 만드는 리서치 방식입니다."]],
    caseNumber: "08",
    thumbnail: "assets/thumbnails/ey-08-onboarding.jpg",
    thumbnailAlt: "파란색 문을 통과하는 노란색 화살표 3D 아이콘",
    markdown: "content/posts/08-onboarding-improvement.md"
  },
  {
    slug: "antiframe",
    tags: ["LLM API", "생성형 AI", "Workflow", "진행 중"],
    title: "대본에서 최종 영상까지 — AI 영상 제작 플랫폼 Antiframe 개발기",
    excerpt: "웹툰 숏애니 제작에서 발견한 생성 도구 간 단절을 개인 프로젝트로 확장했습니다. Gemini·OpenAI·Kling API와 외부 렌더 워커를 연결해 검토와 실패 복구가 가능한 제작 흐름을 만들었습니다.",
    date: "2026. 07. 20",
    period: "2026.05 ~ 진행 중",
    summary: {
      project: "대본부터 장면·음성·이미지·영상 생성과 외부 렌더를 연결한 AI 영상 제작 플랫폼",
      problem: "도구마다 같은 정보를 다시 입력하고 장면별 산출물과 실패 상태를 사람이 직접 관리해야 했습니다.",
      response: "사용자 제작 순서를 먼저 정하고 구조화된 중간 결과, 사람 검토, 비동기 렌더 큐와 실패 재시도를 하나의 제품 흐름으로 구현했습니다.",
      sections: [
        { heading: "기능보다 제작 순서를 먼저 정의", paragraphs: ["대본 입력부터 장면 구성, 생성, 검토, 움직임·BGM·자막 선택과 최종 영상까지 사용자가 이해하는 순서로 제품 스펙을 만들었습니다."] },
        { heading: "통제·복구 가능한 Workflow", paragraphs: ["Gemini, OpenAI TTS·Image, Pexels와 Kling을 단계별로 연결하고 결과를 프로젝트·장면 단위로 저장했습니다. Supabase의 렌더 큐와 Mac mini·After Effects 워커로 최종 MP4까지 연결하고 실패 기록과 재시도를 남겼습니다."] }
      ]
    },
    characterCount: "4,251",
    readTime: "6분",
    highlights: ["자동 생성보다 검토와 복구가 가능한 상태", "통제·복구 가능한 End-to-end Workflow"],
    annotations: [["비동기 렌더", "웹 요청과 무거운 영상 편집을 분리해 외부 워커가 작업을 가져가고 상태를 다시 기록하는 방식입니다."], ["mock", "실제 유료 API 호출 없이 화면과 상태 전환을 검증하기 위한 테스트 결과입니다."]],
    caseNumber: "09",
    thumbnail: "assets/thumbnails/ey-09-antiframe.jpg",
    thumbnailAlt: "재생 버튼이 결합된 파란색 클랩보드 3D 아이콘",
    markdown: "content/posts/09-antiframe.md"
  }
];
