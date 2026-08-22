import Image from "next/image";
import logo from "@/public/logocm.png";
import logos from "@/public/axxe2.png"

export function LogoMark({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src= {logo}
      alt="AXENTRA LABS"
      width={180}
      height={20}
      className={className}
    />
  );
}
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <Image
      src= {logos}
      alt="AXENTRA LABS"
      width={180}
      height={20}
      priority
      className={className}
    />
  );
}