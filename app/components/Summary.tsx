import ScoreBadge from "./ScoreBadge";
import ScoreGauge from "./ScoreGauge";

interface IProps {
  feedback: Feedback;
}
interface CategoryIProps {
  title: string;
  score: number;
}

const Category = (props: CategoryIProps) => {
  const textColor =
    props.score > 70
      ? "text-green-600"
      : props.score > 49
        ? "text-yellow-600"
        : "text-red-600";

  return (
    <div className="resume-summary">
      <div className="category">
        <div className="flex flex-row gap-2 items-center justify-center">
          <p className="text-2xl">{props.title}</p>
          <ScoreBadge score={props.score} />
        </div>
        <p className="text-2xl">
          <span className={textColor}>{props.score}</span>/100{" "}
        </p>
      </div>
    </div>
  );
};

const Summary = (props: IProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full">
      <div className="flex flex-row items-center p-4 gap-8">
        <ScoreGauge score={props.feedback.overallScore} />

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold">Your Resume Score</h2>
          <p className="text-sm text-gray-500 ">
            This score is calculated based on the variables listed below.
          </p>
        </div>
      </div>

      <Category
        title="Tone & Style"
        score={props.feedback.toneAndStyle.score}
      />
      <Category title="Content" score={props.feedback.content.score} />
      <Category title="Structure" score={props.feedback.structure.score} />
      <Category title="Skills" score={props.feedback.skills.score} />
    </div>
  );
};

export default Summary;
