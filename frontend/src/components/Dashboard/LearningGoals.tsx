import Card from "../ui/Card";
import Progress from "../ui/Progress";

const goals = [
  {
    name: "React",
    progress: 90,
  },
  {
    name: "TypeScript",
    progress: 70,
  },
  {
    name: "PostgreSQL",
    progress: 45,
  },
];

export default function LearningGoals() {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">
        Learning Goals
      </h2>

      <div className="space-y-5">
        {goals.map((goal) => (
          <div key={goal.name}>
            <div className="mb-2 flex justify-between">
              <span>{goal.name}</span>

              <span>{goal.progress}%</span>
            </div>

            <Progress value={goal.progress} />
          </div>
        ))}
      </div>
    </Card>
  );
}