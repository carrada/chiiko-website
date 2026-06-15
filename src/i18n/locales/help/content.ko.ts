import type { HelpPageContent } from "../shared/types";

export const helpPageContent: HelpPageContent = {
  title: "고객센터",
  subtitle: "문의에 가장 적합한 연락 채널을 찾아보세요",
  intro: [
    "Chiikö에서는 경험이 명확하고, 단순하고, friction 없이 진행되길 원합니다. 그래서 문의 유형에 따라 연락 채널을 정리하여 메시지가 처음부터 적절한 팀에 도달하게 합니다.",
    "어디에 쓸지 확실하지 않다면 괜찮습니다 — 메시지를 검토하고 내부적으로 전달합니다.",
  ],
  sectionTitle: "어떻게 도와드릴까요?",
  sectionIntro: "아래에서 필요에 맞는 연락 옵션을 확인하세요:",
  channels: [
    {
      title: "일반 문의",
      description:
        "서비스, 프로세스, 일정, 가용성에 대한 질문이 있거나 Chiikö가 프로젝트에 적합한지 탐색 중이라면, 여기가 가장 좋은 시작점입니다.",
      emailLabel: "연락 이메일:",
      email: "hello@chiiko.design",
    },
    {
      title: "결제 및 청구",
      description:
        "결제, 청구서, 청구 관련 질문 또는 기타 관리 및 재무 사항은 이 채널로 문의해 주세요.",
      emailLabel: "연락 이메일:",
      email: "finance@chiiko.design",
    },
    {
      title: "계약 및 법적 사항",
      description:
        "계약, 합의, 이용약관 또는 법적 주제에 관한 문의는 이 채널을 통해 더 정확하게 지원할 수 있습니다.",
      emailLabel: "연락 이메일:",
      email: "councel@chiiko.design",
    },
    {
      title: "기술 지원 및 웹사이트 문제",
      description:
        "기술적 문제, 웹사이트 오류, 성능 문제 또는 프로젝트 출시 후 지원이 필요하면 이 채널이 적절합니다.",
      emailLabel: "연락 이메일:",
      email: "support@chiiko.design",
    },
  ],
  responseTitle: "응답 시간",
  responseText:
    "팀은 월요일부터 금요일 영업 시간 내에 메시지를 확인합니다. 최대한 빠르게 응답하고 명확하고 유용한 해결책을 제공하기 위해 노력합니다.",
  closing:
    "Chiikö를 신뢰해 주셔서 감사합니다. 프로젝트의 모든 단계에서 지원하겠습니다.",
};
