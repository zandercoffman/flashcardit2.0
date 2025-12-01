"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export type CardData = {
  id: number;
  content: string; // no matter what kind of card it represents, we hide this on flip
  type: "normal" | "bomb" | "point" | "extra";
};

type Props = {
  cards: CardData[];
  onCardClick?: (card: CardData) => void;
};

export function BombaCard({ cards, onCardClick }: Props) {
  const [disabledCards, setDisabledCards] = useState<number[]>([]);

  const handleClick = (card: CardData) => {
    if (disabledCards.includes(card.id)) return;

    setDisabledCards([...disabledCards, card.id]);
    onCardClick?.(card);
  };

  return (
    <div className="grid grid-cols-4 gap-3 w-full max-w-md mx-auto">
      {cards.map((card) => {
        const isDisabled = disabledCards.includes(card.id);

        return (
          <Button
            key={card.id}
            onClick={() => handleClick(card)}
            disabled={isDisabled}
            className={`h-20 rounded-xl text-lg font-semibold flex items-center justify-center
              transition-all duration-200
              ${isDisabled ? "opacity-40 cursor-not-allowed" : ""}
            `}
          >
            {/* Do NOT show card.content anymore */}
            {isDisabled ? "" : "?"}
          </Button>
        );
      })}
    </div>
  );
}
