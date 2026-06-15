import type { HelpPageContent } from "../shared/types";

export const helpPageContent: HelpPageContent = {
  title: "ヘルプセンター",
  subtitle: "お問い合わせに最適な連絡チャネルを見つける",
  intro: [
    "Chiiköでは、体験が明確でシンプル、摩擦のないものであることを望んでいます。そのため、お問い合わせの種類に応じて連絡チャネルを整理し、メッセージが最初から適切なチームに届くようにしています。",
    "どのアドレスに書けばよいかわからない場合も大丈夫です — メッセージを確認し、社内で適切に振り分けます。",
  ],
  sectionTitle: "どのようにお手伝いできますか？",
  sectionIntro: "以下に、ニーズに応じた最適な連絡先をご案内します：",
  channels: [
    {
      title: "一般的なお問い合わせ",
      description:
        "サービス、プロセス、スケジュール、空き状況に関する質問や、Chiiköがプロジェクトに適しているか検討している場合は、こちらが最適な出発点です。",
      emailLabel: "連絡先メール：",
      email: "hello@chiiko.design",
    },
    {
      title: "支払いと請求",
      description:
        "支払い、請求書、請求に関する質問、その他の管理・財務に関する事項は、このチャネルからお問い合わせください。",
      emailLabel: "連絡先メール：",
      email: "finance@chiiko.design",
    },
    {
      title: "契約と法的事項",
      description:
        "契約、合意、利用規約、または法的なトピックに関するお問い合わせは、このチャネルでより正確にサポートできます。",
      emailLabel: "連絡先メール：",
      email: "councel@chiiko.design",
    },
    {
      title: "テクニカルサポートとウェブサイトの問題",
      description:
        "技術的な問題、ウェブサイトのエラー、パフォーマンスの問題、またはプロジェクトローンチ後のサポートが必要な場合は、このチャネルが適切です。",
      emailLabel: "連絡先メール：",
      email: "support@chiiko.design",
    },
  ],
  responseTitle: "返信時間",
  responseText:
    "チームは月曜から金曜の営業時間内にメッセージを確認します。できるだけ早く返信し、明確で有用な解決策を提供するよう努めています。",
  closing:
    "Chiiköを信頼いただきありがとうございます。プロジェクトのあらゆる段階でサポートいたします。",
};
