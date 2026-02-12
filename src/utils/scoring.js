export function calculatePersona(answers) {
  const scores = {
    dev: 0,
    design: 0,
    community: 0,
    policy: 0,
    education: 0,
    human_rights: 0,
  };

  answers.forEach((answer) => {
    if (answer.scores) {
      Object.entries(answer.scores).forEach(([bucket, points]) => {
        scores[bucket] += points;
      });
    }
  });

  const priority = ["dev", "design", "human_rights", "policy", "education", "community"];
  const maxScore = Math.max(...Object.values(scores));

  if (maxScore < 5) return "beginner";

  const winner = priority.find((bucket) => scores[bucket] === maxScore);

  const bucketToSlug = {
    dev: "developer",
    design: "designer",
    community: "community-organiser",
    policy: "policy-advocate",
    education: "educator",
    human_rights: "human-rights-worker",
  };

  return bucketToSlug[winner];
}
