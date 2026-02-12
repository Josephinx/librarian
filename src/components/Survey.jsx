import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router';
import { QUESTIONS } from '../data/questions';
import { calculatePersona } from '../utils/scoring';
import AnalysingScreen from './AnalysingScreen';
import ThemeToggle from './ThemeToggle';

const LETTERS = ['A', 'B', 'C', 'D'];

export default function Survey() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [animPhase, setAnimPhase] = useState('idle');
  const [showAnalysing, setShowAnalysing] = useState(false);

  const question = QUESTIONS[currentIndex];
  const total = QUESTIONS.length;
  const progress = ((currentIndex + 1) / total) * 100;

  const finishSurvey = useCallback((finalAnswers) => {
    setShowAnalysing(true);
    const persona = calculatePersona(finalAnswers);
    setTimeout(() => navigate(`/persona/${persona}`), 800);
  }, [navigate]);

  const handleSelect = useCallback((option, index) => {
    if (animPhase !== 'idle' || selectedId !== null) return;

    setSelectedId(option.id);

    // Gate: Q1 beginner route
    if (option.action === 'route_beginner') {
      setTimeout(() => {
        setShowAnalysing(true);
        setTimeout(() => navigate('/persona/beginner'), 800);
      }, 400);
      return;
    }

    const newAnswers = [...answers, option];

    setTimeout(() => {
      // Last question
      if (currentIndex >= total - 1) {
        finishSurvey(newAnswers);
        return;
      }

      // Animate transition
      setAnimPhase('exiting');

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setAnswers(newAnswers);
        setSelectedId(null);
        setAnimPhase('entering');

        setTimeout(() => {
          setAnimPhase('idle');
        }, 400);
      }, 200);
    }, 400);
  }, [animPhase, selectedId, answers, currentIndex, total, navigate, finishSurvey]);

  // Keyboard support
  useEffect(() => {
    const handler = (e) => {
      if (animPhase !== 'idle' || selectedId !== null) return;

      const key = e.key.toUpperCase();
      const keyMap = { '1': 0, '2': 1, '3': 2, '4': 3, 'A': 0, 'B': 1, 'C': 2, 'D': 3 };
      const idx = keyMap[key];

      if (idx !== undefined && question.options[idx]) {
        handleSelect(question.options[idx], idx);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [question, handleSelect, animPhase, selectedId]);

  if (showAnalysing) return <AnalysingScreen />;

  const animClass =
    animPhase === 'exiting'
      ? 'question-exit'
      : animPhase === 'entering'
        ? 'question-enter'
        : '';

  return (
    <div
      className="fixed inset-0 flex flex-col"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Progress bar */}
      <div className="w-full">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      {/* Theme toggle - top right */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className={`w-full max-w-[640px] ${animClass}`}>
          <p className="tracked-label mb-8">
            QUESTION {currentIndex + 1} OF {total}
          </p>
          <h2
            className="text-[22px] sm:text-[24px] lg:text-[28px] font-bold mb-10 leading-snug"
            style={{ color: 'var(--color-fg)' }}
          >
            {question.question}
          </h2>
          <div className="flex flex-col gap-3">
            {question.options.map((opt, i) => (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt, i)}
                className={`ghost-btn cursor-pointer ${selectedId === opt.id ? 'selected' : ''}`}
              >
                <span
                  className="text-sm font-semibold w-6 shrink-0 font-mono"
                  style={{ color: 'var(--color-fg-muted)' }}
                >
                  {LETTERS[i]}
                </span>
                <span className="ml-3">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
