import {
  landingSectionLead,
  landingSectionTitle,
} from "@/components/landing/landingStyles";
import { LandingAccentText } from "@/components/landing/LandingAccentText";

type LandingSectionHeaderProps = {
  title?: string;
  titleBefore?: string;
  titleAccent?: string;
  titleAfter?: string;
  lead?: string;
  className?: string;
};

export function LandingSectionHeader({
  title,
  titleBefore = "",
  titleAccent,
  titleAfter = "",
  lead,
  className = "",
}: LandingSectionHeaderProps) {
  const heading =
    titleAccent != null && titleAccent !== "" ? (
      <>
        {titleBefore}
        <LandingAccentText>{titleAccent}</LandingAccentText>
        {titleAfter}
      </>
    ) : (
      title
    );

  return (
    <header className={`mx-auto max-w-7xl text-center ${className}`}>
      <h2 className={landingSectionTitle}>{heading}</h2>
      {lead ? <p className={landingSectionLead}>{lead}</p> : null}
    </header>
  );
}
