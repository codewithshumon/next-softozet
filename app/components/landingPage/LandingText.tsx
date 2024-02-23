import styles from './LandingSections.module.css';

interface LandingTextProps {
  title: string;
  titleFocus: string;
  firstLine?: string;
  secondLine?: string;
  thirdLine?: string;
  fouthLine?: string;
  boldTextStart?: string;
  boldTextMiddle?: string;
  boldTextEnd?: string;
}

const LandingText: React.FC<LandingTextProps> = ({
  title,
  titleFocus,
  firstLine,
  secondLine,
  thirdLine,
  fouthLine,
  boldTextStart,
}) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="w-full h-full flex flex-col gap-2">
        <div className={`${styles.textLine}`}>
          <h1
            className={`${styles.textAnimation} ${styles.animateText} text-[50px] font-bold text-white `}
          >
            {title}
          </h1>
        </div>
        <div className={`${styles.textLine}`}>
          <h2
            className={`${styles.textAnimation} ${styles.animateText} text-[50px] font-bold text-white`}
          >
            {titleFocus}
          </h2>
        </div>
      </div>
      <div className="text-para text-[25px] text-gray-100 flex flex-col gap-2">
        <div className={`${styles.textLine}`}>
          <p className={` ${styles.textAnimation} ${styles.animateText}`}>
            {boldTextStart && (
              <span className="font-bold">{boldTextStart}</span>
            )}{' '}
            {firstLine}
          </p>
        </div>
        <div className={`${styles.textLine}`}>
          <p className={`${styles.textAnimation} ${styles.animateText}`}>
            {secondLine}
          </p>
        </div>
        <div className={`${styles.textLine} ${styles.animateText}`}>
          <p className={`${styles.textAnimation} ${styles.animateText}`}>
            {thirdLine}
          </p>
        </div>
        <div className={`${styles.textLine} ${styles.animateText}`}>
          <p className={`${styles.textAnimation} ${styles.animateText}`}>
            {fouthLine}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingText;
