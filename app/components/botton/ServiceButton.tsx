/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

import { HiOutlineArrowRight } from "react-icons/hi";

import useMouse from "@/app/hooks/useMouse";

interface ServiceButtonProps {
  textColor: string;
  buttonArrowColor: string;
  borderColor: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({
  textColor,
  buttonArrowColor,
  borderColor,
}) => {
  const { x, y } = useMouse();
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    updateButtonStyle();
  }, [x, y]);

  const updateButtonStyle = () => {
    const btn = btnRef.current;

    if (btn) {
      const rect = btn.getBoundingClientRect();
      const mouseX = x - rect.left;
      const mouseY = y - rect.top;
      btn.style.setProperty("--x", mouseX + "px");
      btn.style.setProperty("--y", mouseY + "px");
    }
  };
  return (
    <button
      ref={btnRef}
      className={`relative circle-button-bg flex flex-row items-center gap-2 border-[1px] rounded-full px-3 py-2 overflow-hidden border-[${borderColor}] text-${textColor}`}
    >
      <span className={`font-bold text-${textColor}`}>DISCOVER</span>
      <HiOutlineArrowRight color={buttonArrowColor} size={20} />
    </button>
  );
};

export default ServiceButton;
