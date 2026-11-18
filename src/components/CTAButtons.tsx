import { ArrowIcon, PhoneIcon } from "@/components/Icons";
import { FORM_SECTION_ID, PHONE_HREF, PHONE_NUMBER } from "@/lib/constants";

type Variant = "primary" | "forest" | "outline" | "outline-light" | "white";

type ButtonProps = {
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

const cls = (variant: Variant, className: string) => `btn btn-${variant} ${className}`.trim();

export function QualifyButton({ variant = "primary", className = "", arrow = true }: ButtonProps) {
  return (
    <a href={`#${FORM_SECTION_ID}`} className={cls(variant, className)}>
      <span>Find out if you Qualify</span>
      {arrow ? <ArrowIcon className="btn-arrow" /> : null}
    </a>
  );
}

export function CallButton({ variant = "outline", className = "" }: ButtonProps) {
  return (
    <a href={PHONE_HREF} className={cls(variant, className)}>
      <PhoneIcon className="btn-icon" />
      <span>Call {PHONE_NUMBER}</span>
    </a>
  );
}
