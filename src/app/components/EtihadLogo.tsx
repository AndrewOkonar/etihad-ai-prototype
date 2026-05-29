import etihadLogo from "../../assets/etihad-logo.png";

interface EtihadLogoProps {
  size: number;
}

export default function EtihadLogo({ size }: EtihadLogoProps) {
  return (
    <img
      src={etihadLogo}
      alt="Etihad logo"
      className="block shrink-0 object-contain"
      style={{ width: size, height: size }}
    />
  );
}
