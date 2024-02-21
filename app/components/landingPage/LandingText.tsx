interface LandingTextProps {
  title: string;
  firstLineStart?: string;
  firstLineEnd?: string;
  secondLineStart?: string;
  secondLineEnd?: string;
  boldTextStart?: string;
  boldTextMiddle?: string;
  boldTextEnd?: string;
}

const LandingText: React.FC<LandingTextProps> = ({
  title,
  firstLineStart,
  firstLineEnd,
  secondLineStart,
  secondLineEnd,
  boldTextEnd,
  boldTextStart,
  boldTextMiddle,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        {boldTextStart && <span>{boldTextStart}</span>}
        {firstLineStart}
        {boldTextMiddle && <span>{boldTextMiddle}</span>}
        {firstLineEnd}
        {boldTextEnd && <span>{boldTextEnd}</span>}
      </p>
      <p>
        {boldTextStart && <span>{boldTextStart}</span>}
        {secondLineStart}
        {boldTextMiddle && <span>{boldTextMiddle}</span>}
        {secondLineEnd}
        {boldTextEnd && <span>{boldTextEnd}</span>}
      </p>
    </div>
  );
};

export default LandingText;
