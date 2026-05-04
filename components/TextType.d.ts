declare module "@/components/TextType" {
  interface TextTypeProps {
    text: string | string[];
    as?: string;
    typingSpeed?: number;
    initialDelay?: number;
    pauseDuration?: number;
    deletingSpeed?: number;
    loop?: boolean;
    className?: string;
    showCursor?: boolean;
    hideCursorWhileTyping?: boolean;
    cursorCharacter?: string;
    cursorClassName?: string;
    cursorBlinkDuration?: number;
    textColors?: string[];
    startOnVisible?: boolean;
    reverseMode?: boolean;
    onSentenceComplete?: (text: string, index: number) => void;
    variableSpeed?: { min: number; max: number };
    [key: string]: unknown;
  }
  const TextType: React.ComponentType<TextTypeProps>;
  export default TextType;
}
