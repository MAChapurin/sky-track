import { CUSTOM_EVENTS } from "@/shared/config";
import { emitter } from "@/shared/utils";
import { useEffect, useState } from "react";

export const useBurgerTrigger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      emitter.emit(CUSTOM_EVENTS.OPEN_MENU);
    } else {
      emitter.emit(CUSTOM_EVENTS.CLOSE_MENU);
    }
  }, [isOpen]);

  useEffect(() => {
    const unSubscribeClose = emitter.subscribe(
      CUSTOM_EVENTS.CLOSE_MENU,
      onClose
    );

    return () => {
      unSubscribeClose();
    };
  }, []);
  return {
    isOpen,
    onToggle,
  };
};
