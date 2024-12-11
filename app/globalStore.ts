import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TopicProgress = {
  prerequisitesCompleted: number[];
  problemsCompleted: number[];
};

type TopicsProgress = Record<string, TopicProgress>;

type GlobalStore = {
  topicsProgress: TopicsProgress;
  getTopicProgress: (slug: string) => TopicProgress;
  setPrerequisiteCompleted: (slug: string, prerequisiteId: number) => void;
  removePrerequisiteId: (slug: string, prerequisiteId: number) => void;
  setProblemCompleted: (slug: string, problemId: number) => void;
  removeProblemId: (slug: string, problemId: number) => void;
};

export const useGlobalStore = create<GlobalStore>()(
  persist(
    (set, get) => ({
      topicsProgress: {},
      getTopicProgress: (slug) => {
        const { topicsProgress } = get();

        if (!topicsProgress[slug]) {
          topicsProgress[slug] = {
            prerequisitesCompleted: [],
            problemsCompleted: [],
          };
        }

        return topicsProgress[slug];
      },
      setPrerequisiteCompleted: (slug, prerequisitesCompleted) => {
        const { topicsProgress } = get();

        if (!topicsProgress[slug]) {
          topicsProgress[slug] = {
            prerequisitesCompleted: [],
            problemsCompleted: [],
          };
        }

        topicsProgress[slug].prerequisitesCompleted.push(
          prerequisitesCompleted,
        );

        set({ topicsProgress });
      },
      setProblemCompleted: (slug, problemsCompleted) => {
        const { topicsProgress } = get();

        if (!topicsProgress[slug]) {
          topicsProgress[slug] = {
            prerequisitesCompleted: [],
            problemsCompleted: [],
          };
        }

        topicsProgress[slug].problemsCompleted.push(problemsCompleted);

        set({ topicsProgress });
      },
      removePrerequisiteId: (slug, prerequisiteId) => {
        const { topicsProgress } = get();

        if (!topicsProgress[slug]) return;

        const topicProgressWithoutPrerequisiteId = topicsProgress[
          slug
        ].prerequisitesCompleted.filter((id) => id !== prerequisiteId);

        topicsProgress[slug].prerequisitesCompleted =
          topicProgressWithoutPrerequisiteId;

        set({ topicsProgress });
      },
      removeProblemId: (slug, problemId) => {
        const { topicsProgress } = get();

        if (!topicsProgress[slug]) return;

        const topicProgressWithoutProblemId = topicsProgress[
          slug
        ].problemsCompleted.filter((id) => id !== problemId);

        topicsProgress[slug].problemsCompleted = topicProgressWithoutProblemId;

        set({ topicsProgress });
      },
    }),
    {
      name: 'topics-progress-storage',
    },
  ),
);
