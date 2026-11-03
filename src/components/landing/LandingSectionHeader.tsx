import {
  landingSectionLead,
  landingSectionTitle,
} from "@/components/landing/landingStyles";

type LandingSectionHeaderProps = {
  title: string;
  lead?: string;
  className?: string;
};

export function LandingSectionHeader({
  title,
  lead,
  className = "",
}: LandingSectionHeaderProps) {
  return (
    <header className={`mx-auto max-w-7xl text-center ${className}`}>
      <h2 className={landingSectionTitle}>{title}</h2>
      {lead ? <p className={landingSectionLead}>{lead}</p> : null}
    </header>
  );
}
