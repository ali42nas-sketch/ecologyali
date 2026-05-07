/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  Trophy,
  Info,
  Home,
  BarChart3,
  LayoutDashboard,
  GraduationCap
} from 'lucide-react';
import { QUIZ_DATA, Chapter, Question, QuestionType } from './data.ts';

export default function App() {
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswer, setUserAnswer] = useState<string | boolean | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const selectedChapter = useMemo(() => 
    QUIZ_DATA.find(c => c.id === selectedChapterId), 
  [selectedChapterId]);

  const currentQuestion = useMemo(() => 
    selectedChapter?.questions[currentQuestionIndex], 
  [selectedChapter, currentQuestionIndex]);

  const handleChapterSelect = (id: number) => {
    setSelectedChapterId(id);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setUserAnswer(null);
    setIsAnswered(false);
  };

  const handleAnswer = (answer: string | boolean) => {
    if (isAnswered) return;
    
    setUserAnswer(answer);
    setIsAnswered(true);
    
    if (answer === currentQuestion?.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (!selectedChapter) return;
    
    if (currentQuestionIndex < selectedChapter.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setUserAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setUserAnswer(null);
    setIsAnswered(false);
  };

  const goHome = () => {
    setSelectedChapterId(null);
    resetQuiz();
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 overflow-hidden" dir="rtl">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-slate-900 text-white flex flex-col border-l border-slate-800 shrink-0 hidden md:flex">
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-blue-400 mb-1">
            <GraduationCap className="w-6 h-6" />
            <h1 className="text-xl font-bold tracking-tight text-white">مراجعة علم البيئة</h1>
          </div>
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">نظام مراجعة الأحياء المتقدم</p>
        </div>
        
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="px-6 py-2 text-[10px] text-slate-500 uppercase font-bold tracking-widest">المحتوى التعليمي</div>
          <button 
            onClick={goHome}
            className={`w-full flex items-center px-6 py-3 transition-all ${
              !selectedChapterId ? "bg-blue-600/10 text-blue-400 border-r-4 border-blue-500" : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`}
          >
            <LayoutDashboard className="w-4 h-4 ml-3" />
            <span className="text-sm font-medium">لوحة التحكم</span>
          </button>
          
          <div className="px-6 py-4 text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-2 border-t border-slate-800">الفصول الدراسية</div>
          {QUIZ_DATA.map(chapter => (
            <button
              key={chapter.id}
              onClick={() => handleChapterSelect(chapter.id)}
              className={`w-full flex items-center px-6 py-3 transition-all text-right ${
                selectedChapterId === chapter.id ? "bg-blue-600/10 text-blue-400 border-r-4 border-blue-500" : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <span className="text-sm font-medium leading-tight">{chapter.title}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 bg-slate-950 border-t border-slate-800 mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-lg font-bold text-white shadow-lg shadow-blue-500/20">ع</div>
            <div>
              <p className="text-sm font-bold">علي الزبيدي</p>
              <p className="text-[10px] text-slate-500">محرر المحتوى - 2026</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header Bar */}
        <header className="h-20 border-b border-slate-200 flex items-center justify-between px-6 md:px-8 bg-white shrink-0">
          <div className="flex items-center gap-4">
             {selectedChapterId && (
               <button 
                 onClick={goHome}
                 className="md:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-500"
               >
                 <Home className="w-5 h-5" />
               </button>
             )}
             <div>
              <h2 className="text-lg font-bold text-slate-900 leading-tight">
                {!selectedChapterId ? "لوحة التحكم: نظرة عامة" : `مراجعة: ${selectedChapter?.title}`}
              </h2>
              <p className="text-xs text-slate-500">
                {!selectedChapterId ? "تطبيق تعليمي تفاعلي يحتوي على أسئلة شاملة" : "تحليل الأسئلة والأجوبة النموذجية المستخرجة"}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {!selectedChapterId ? (
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-lg text-xs font-bold text-slate-600 border border-slate-200">
                <BarChart3 className="w-4 h-4" />
                <span>إجمالي الفصول: {QUIZ_DATA.length}</span>
              </div>
            ) : !showResult && (
              <div className="flex items-center gap-3">
                <div className="hidden sm:block text-xs font-bold text-slate-400">التقدم</div>
                <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                  <motion.div 
                    className="h-full bg-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestionIndex + 1) / (selectedChapter?.questions.length || 1)) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-black text-slate-900 w-8 text-center">
                  {currentQuestionIndex + 1}/{selectedChapter?.questions.length}
                </span>
              </div>
            )}
          </div>
        </header>

        {/* Content View */}
        <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 md:p-8">
          <AnimatePresence mode="wait">
            {!selectedChapterId ? (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-6xl mx-auto"
              >
                {/* Stats Row */}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
                  <StatItem label="إجمالي الفصول" value={`${QUIZ_DATA.length}`} sub="محتوى دراسي متكامل" color="blue" />
                  <StatItem label="إجمالي الأسئلة" value={`${QUIZ_DATA.reduce((acc, c) => acc + c.questions.length, 0)}`} sub="تغطية شاملة للمقرر" color="emerald" />
                  <StatItem label="درجة الصعوبة" value="متنوعة" sub="متوسطة إلى متقدمة" color="amber" />
                  <StatItem label="صيغ الاختبار" value="X2" sub="اختيار متعدد + صح وخطأ" color="purple" />
                </section>

                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    المحتوى المتوفر
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {QUIZ_DATA.map((chapter) => (
                    <motion.button
                      key={chapter.id}
                      whileHover={{ y: -4 }}
                      onClick={() => handleChapterSelect(chapter.id)}
                      className="group bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all text-right flex flex-col h-full"
                    >
                      <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                        <BookOpen className="w-6 h-6 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
                        {chapter.title}
                      </h4>
                      <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">
                        مراجعة شاملة لجميع المفاهيم الأساسية والأسئلة الواردة في الاختبارات لهذا الفصل.
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                         <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md uppercase tracking-wider">{chapter.questions.length} سؤالاً</span>
                         <div className="flex items-center text-blue-500 text-sm font-black opacity-0 group-hover:opacity-100 transition-all">
                            <span>ابدأ المراجعة</span>
                            <ChevronLeft className="w-4 h-4 mr-1" />
                         </div>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : showResult ? (
              <motion.div 
                key="result-view"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto"
              >
                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200">
                  <div className="bg-slate-900 p-12 text-center text-white relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <Trophy className="w-20 h-20 text-blue-400 mx-auto mb-6" />
                    <h2 className="text-3xl font-black mb-2">انتهت المراجعة!</h2>
                    <p className="text-slate-400 text-sm">{selectedChapter.title}</p>
                  </div>
                  <div className="p-10">
                    <div className="flex justify-center gap-10 mb-10">
                      <div className="text-center">
                        <div className="text-5xl font-black text-blue-600 mb-2">
                          {Math.round((score / selectedChapter.questions.length) * 100)}%
                        </div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">النسبة المئوية</p>
                      </div>
                      <div className="w-px h-16 bg-slate-100 mt-2"></div>
                      <div className="text-center">
                        <div className="text-5xl font-black text-slate-900 mb-2">{score}/{selectedChapter.questions.length}</div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">إجمالي النقاط</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <button 
                        onClick={resetQuiz}
                        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-200"
                      >
                        <RotateCcw className="w-5 h-5" />
                        <span>إعادة هذا الفصل</span>
                      </button>
                      <button 
                        onClick={goHome}
                        className="w-full py-4 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                      >
                        <Home className="w-5 h-5" />
                        <span>العودة للرئيسية</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="quiz-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-4xl mx-auto"
              >
                {/* Question Container */}
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
                  <div className="p-6 md:p-10 border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-md uppercase tracking-widest">
                        {currentQuestion?.type === QuestionType.MULTIPLE_CHOICE ? "سؤال اختيار من متعدد" : "منطقة صح وخطأ"}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">السؤال رقم {currentQuestion?.id}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-relaxed">
                      {currentQuestion?.text}
                    </h2>
                  </div>
                  
                  <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion?.type === QuestionType.TRUE_FALSE ? (
                      [true, false].map((val) => (
                        <QuizOption
                          key={val.toString()}
                          label={val ? "صح ✓" : "خطأ ✗"}
                          isSelected={userAnswer === val}
                          isCorrect={currentQuestion.correctAnswer === val}
                          isAnswered={isAnswered}
                          onClick={() => handleAnswer(val)}
                        />
                      ))
                    ) : (
                      currentQuestion?.options?.map((opt, i) => (
                        <QuizOption
                          key={i}
                          label={opt}
                          isSelected={userAnswer === opt}
                          isCorrect={currentQuestion.correctAnswer === opt}
                          isAnswered={isAnswered}
                          onClick={() => handleAnswer(opt)}
                        />
                      ))
                    )}
                  </div>

                  <AnimatePresence>
                    {isAnswered && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="px-8 md:px-10 pb-8 md:pb-10"
                      >
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className={`p-6 rounded-2xl border-2 flex items-start gap-4 ${
                            userAnswer === currentQuestion?.correctAnswer 
                            ? "bg-emerald-50 border-emerald-100 text-emerald-800 shadow-sm" 
                            : "bg-red-50 border-red-100 text-red-800 shadow-sm"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                            userAnswer === currentQuestion?.correctAnswer ? "bg-emerald-100" : "bg-red-100"
                          }`}>
                            {userAnswer === currentQuestion?.correctAnswer ? (
                              <CheckCircle2 className="w-6 h-6" />
                            ) : (
                              <XCircle className="w-6 h-6" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-black text-lg mb-1 leading-none">
                              {userAnswer === currentQuestion?.correctAnswer ? "إجابة صحيحة وممتازة" : "للأسف، الإجابة غير صحيحة"}
                            </p>
                            {currentQuestion?.explanation && (
                              <div className="mt-2 flex items-start gap-2 opacity-80 text-sm leading-relaxed font-medium">
                                 <Info className="w-4 h-4 shrink-0 mt-0.5" />
                                 <p>{currentQuestion.explanation}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>

                        <div className="mt-8 flex justify-end">
                          <button 
                            onClick={handleNext}
                            className="bg-blue-600 text-white px-10 py-4 rounded-xl font-black hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-200 active:scale-[0.98]"
                          >
                            <span>{currentQuestionIndex === selectedChapter!.questions.length - 1 ? 'عرض النتيجة' : 'السؤال التالي'}</span>
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function StatItem({ label, value, sub, color }: { label: string, value: string, sub: string, color: 'blue' | 'emerald' | 'amber' | 'purple' }) {
  const themes = {
    blue: "bg-blue-50 border-blue-100 text-blue-600",
    emerald: "bg-emerald-50 border-emerald-100 text-emerald-600",
    amber: "bg-amber-50 border-amber-100 text-amber-600",
    purple: "bg-purple-50 border-purple-100 text-purple-600"
  };

  return (
    <div className={`p-6 rounded-2xl border ${themes[color]} flex flex-col shadow-sm`}>
      <p className="text-[10px] uppercase font-black mb-2 opacity-70 tracking-widest">{label}</p>
      <p className="text-3xl font-black mb-1">{value}</p>
      <p className="text-[10px] font-bold opacity-60 leading-tight">{sub}</p>
    </div>
  );
}

function QuizOption({ label, isSelected, isCorrect, isAnswered, onClick }: {
  label: string;
  isSelected: boolean;
  isCorrect: boolean;
  isAnswered: boolean;
  onClick: () => void;
  key?: string | number;
}) {
  let baseStyles = "p-5 rounded-xl border-2 text-right transition-all font-bold flex items-center justify-between group relative overflow-hidden";
  let stateStyles = "bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50 active:scale-[0.98]";

  if (isAnswered) {
    if (isCorrect) {
      stateStyles = "bg-emerald-50 border-emerald-500 text-emerald-800 ring-4 ring-emerald-500/10 z-10";
    } else if (isSelected) {
      stateStyles = "bg-red-50 border-red-500 text-red-800 ring-4 ring-red-500/10 z-10";
    } else {
      stateStyles = "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
    }
  }

  return (
    <motion.button
      disabled={isAnswered}
      onClick={onClick}
      initial={false}
      animate={
        isAnswered && isSelected
          ? isCorrect
            ? { scale: [1, 1.05, 1], transition: { duration: 0.3 } }
            : { x: [0, -10, 10, -10, 10, 0], transition: { duration: 0.4 } }
          : {}
      }
      className={`${baseStyles} ${stateStyles}`}
    >
      <span className="text-lg leading-tight relative z-20">{label}</span>
      
      {isAnswered && (isCorrect || isSelected) && (
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 relative z-20 ${isCorrect ? 'bg-emerald-500 border border-emerald-400' : 'bg-red-500 border border-red-400'}`}
        >
          {isCorrect ? <CheckCircle2 className="w-4 h-4 text-white" /> : <XCircle className="w-4 h-4 text-white" />}
        </motion.div>
      )}

      {/* Subtle selection ring before answer */}
      {!isAnswered && isSelected && (
        <motion.div 
          layoutId="selection-ring"
          className="absolute inset-0 border-2 border-blue-500 ring-1 ring-blue-500/20 rounded-xl"
        />
      )}
    </motion.button>
  );
}
