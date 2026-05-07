/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum QuestionType {
  MULTIPLE_CHOICE = 'mc',
  TRUE_FALSE = 'tf'
}

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: string[];
  correctAnswer: string | boolean;
  explanation?: string;
}

export interface Chapter {
  id: number;
  title: string;
  questions: Question[];
}

export const QUIZ_DATA: Chapter[] = [
  {
    id: 1,
    title: "الفصل الأول: مبادئ علم البيئة",
    questions: [
      { id: 1, type: QuestionType.TRUE_FALSE, text: "المكان الذي يعيش فيه المخلوق الحي يسمى الجماعة الحيوية.", correctAnswer: false, explanation: "التصحيح: يسمى الموطن البيئي." },
      { id: 2, type: QuestionType.TRUE_FALSE, text: "وجود مخلوقات حية تتزاوج فيما بينها في مكان واحد في وقت محدد يسمى الإطار البيئي.", correctAnswer: false, explanation: "التصحيح: يسمى الجماعة الحيوية." },
      { id: 3, type: QuestionType.TRUE_FALSE, text: "مجموعة المجتمعات الحيوية التي تتفاعل مع البيئة الطبيعية تمثل المجتمع الحيوي.", correctAnswer: false, explanation: "التصحيح: يمثل النظام البيئي." },
      { id: 4, type: QuestionType.TRUE_FALSE, text: "النيتروجين عنصر أساسي في تكوين البروتينات.", correctAnswer: true },
      { id: 5, type: QuestionType.TRUE_FALSE, text: "عملية تحويل النيتروجين بواسطة البكتيريا من غاز إلى شكل يسهل استعماله هي تثبيت النيتروجين.", correctAnswer: true },
      { id: 6, type: QuestionType.TRUE_FALSE, text: "المخلوقات الكانسة هي مخلوقات تتغذى على أجزاء من المواد الميتة في النظام البيئي.", correctAnswer: true },
      { id: 7, type: QuestionType.MULTIPLE_CHOICE, text: "أي من مستويات التنظيم الآتية يضم جميع المستويات الأخرى؟", options: ["المجتمع الحيوي", "الفرد", "النظام البيئي", "الجماعة الحيوية"], correctAnswer: "النظام البيئي" },
      { id: 8, type: QuestionType.MULTIPLE_CHOICE, text: "ما الذي يشكل عاملاً لا حيوياً لشجرة في غابة؟", options: ["يرقة فراشة", "رياح", "بناء عصفور لعشه", "نمو فطر"], correctAnswer: "رياح" },
      { id: 9, type: QuestionType.MULTIPLE_CHOICE, text: "تجمع النحلة حبوب اللقاح وتساعد على تكاثر النبات، ما نوع العلاقة؟", options: ["افتراس", "تقايض", "تطفل", "تعايش"], correctAnswer: "تقايض" },
      { id: 10, type: QuestionType.MULTIPLE_CHOICE, text: "جميع الكائنات التالية تعتبر مستهلكات عدا:", options: ["النحل", "النمل", "النباتات الخضراء", "الأسماك"], correctAnswer: "النباتات الخضراء" },
      { id: 11, type: QuestionType.MULTIPLE_CHOICE, text: "الأفعى حيوان:", options: ["آكل لحوم", "آكل أعشاب", "قارت", "كانس"], correctAnswer: "آكل لحوم" },
      { id: 12, type: QuestionType.MULTIPLE_CHOICE, text: "تدخل الطاقة أول مرة في نظام بيئي لبركة من خلال:", options: ["نمو الطحالب", "ضوء الشمس", "تحلل سمكة", "جريان المياه"], correctAnswer: "ضوء الشمس" },
      { id: 13, type: QuestionType.MULTIPLE_CHOICE, text: "أي الكائنات الحية التالية ذاتي التغذية:", options: ["الضفدع", "الثعلب", "الجراد", "الأعشاب"], correctAnswer: "الأعشاب" },
      { id: 14, type: QuestionType.MULTIPLE_CHOICE, text: "أي المخلوقات الحية التالية من المخلوقات الكانسة:", options: ["الفأر", "تباع الشمس", "القط", "الروبيان"], correctAnswer: "الروبيان" },
      { id: 15, type: QuestionType.MULTIPLE_CHOICE, text: "العملية التي تحول فيها البكتيريا والبرق النيتروجين إلى مركبات مفيدة:", options: ["إنتاج الأمونيا", "تدوير النترات", "إزالة النترات", "تثبيت النيتروجين"], correctAnswer: "تثبيت النيتروجين" },
      { id: 16, type: QuestionType.MULTIPLE_CHOICE, text: "يوجد أعلى تركيز من النيتروجين في:", options: ["الحيوانات", "البكتيريا", "الغلاف الجوي", "النباتات"], correctAnswer: "الغلاف الجوي" },
      { id: 17, type: QuestionType.MULTIPLE_CHOICE, text: "يدخل الكربون والأكسجين ضمن عمليتين حيويتين هما:", options: ["تكوين الفحم والبناء الضوئي", "احتراق الوقود", "البناء الضوئي والتنفس", "الموت والتحلل"], correctAnswer: "البناء الضوئي والتنفس" },
      { id: 18, type: QuestionType.MULTIPLE_CHOICE, text: "أي جزء من الشبكة الغذائية يحتوي أكبر كتلة حيوية؟", options: ["الثعالب", "الفأر", "الأرانب", "النباتات الخضراء"], correctAnswer: "النباتات الخضراء" },
      { id: 19, type: QuestionType.MULTIPLE_CHOICE, text: "يفترس نبات الفينوس الحشرات للحصول على عنصر:", options: ["النيتروجين", "الهيدروجين", "الأكسجين", "ثاني أكسيد الكربون"], correctAnswer: "النيتروجين" },
      { id: 20, type: QuestionType.MULTIPLE_CHOICE, text: "أكثر مستويات التنظيم تعقيداً:", options: ["المجتمع الحيوي", "الجماعات الحيوية", "النظام البيئي", "المناطق الحيوية"], correctAnswer: "المناطق الحيوية" }
    ]
  },
  {
    id: 2,
    title: "الفصل الثاني: المجتمعات والمناطق الحيوية والأنظمة البيئية",
    questions: [
      { id: 1, type: QuestionType.MULTIPLE_CHOICE, text: "يقلل نقص الحديد من حجم جماعات العوالق، أي العوامل تنطبق على الحديد؟", options: ["التوزيع", "المحدد", "التحمل", "الحيوي"], correctAnswer: "المحدد" },
      { id: 2, type: QuestionType.MULTIPLE_CHOICE, text: "في أي مكان يحتمل وجود أنواع رائدة؟", options: ["مجتمع الذروة", "حقل تعرض لكارثة", "بركان حديث التكون", "شعاب مرجانية"], correctAnswer: "بركان حديث التكون" },
      { id: 3, type: QuestionType.MULTIPLE_CHOICE, text: "ما اسم المناطق الجغرافية الواسعة التي تحوي مجتمعات ذروة متشابهة؟", options: ["تجمعات", "تعاقب", "مجتمعات حيوية", "مناطق حيوية"], correctAnswer: "مناطق حيوية" },
      { id: 4, type: QuestionType.MULTIPLE_CHOICE, text: "ما اسم المنطقة الحيوية الأكثر تواجداً في المملكة؟", options: ["الصحراء", "الغابة الشمالية", "الغابة المعتدلة", "السفانا"], correctAnswer: "الصحراء" },
      { id: 5, type: QuestionType.MULTIPLE_CHOICE, text: "أي المناطق الحيوية البرية تحوي أكبر تنوع حيوي؟", options: ["التندرا", "الحشائش", "الصحراء", "الغابة الاستوائية المطيرة"], correctAnswer: "الغابة الاستوائية المطيرة" },
      { id: 6, type: QuestionType.MULTIPLE_CHOICE, text: "أين توجد النسبة الأكبر من الماء؟", options: ["المياه الجوفية", "المحيطات", "الأنهار", "الجبال الجليدية"], correctAnswer: "المحيطات" },
      { id: 7, type: QuestionType.MULTIPLE_CHOICE, text: "أي مناطق البحيرة التي قد تحوي تنوعاً كبيراً من العوالق؟", options: ["الشاطئية", "العميقة", "المضيئة", "المظلمة"], correctAnswer: "المضيئة" },
      { id: 8, type: QuestionType.MULTIPLE_CHOICE, text: "منطقة تتميز بقليل من هطول الأمطار خلال السنة:", options: ["التندرا", "الغابة المعتدلة", "الغابة الاستوائية", "الصحراء"], correctAnswer: "الصحراء" },
      { id: 9, type: QuestionType.MULTIPLE_CHOICE, text: "أي التكيفات تساعد النبات على العيش في التندرا؟", options: ["أوراق متساقطة", "أوراق تخزن الماء", "جذور سطحية", "سيقان تحت أرضية"], correctAnswer: "جذور سطحية", explanation: "جذور تنمو لعمق سنتيمترات قليلة." },
      { id: 10, type: QuestionType.MULTIPLE_CHOICE, text: "أي المخلوقات الآتية يعد من المحللات؟", options: ["بكتيريا كيميائية", "محار", "فطر على أشجار ميتة", "نبات صانع غذاء"], correctAnswer: "فطر على أشجار ميتة" },
      { id: 11, type: QuestionType.TRUE_FALSE, text: "المنطقة من الغابة التي تشهد تغيراً طفيفاً في الأنواع هي مجتمع الذروة.", correctAnswer: true },
      { id: 12, type: QuestionType.TRUE_FALSE, text: "كمية الأكسجين في حوض الأسماك هي منطقة التحمل.", correctAnswer: false, explanation: "التصحيح: عامل محدد." },
      { id: 13, type: QuestionType.TRUE_FALSE, text: "التعاقب الثانوي يصف التغيرات على سفح جبل تعرض لانزلاق طيني.", correctAnswer: false, explanation: "التصحيح: تعاقب أولي (إذا كان صخراً جُرداً من التربة)." },
      { id: 14, type: QuestionType.TRUE_FALSE, text: "التندرا منطقة يتميز فيها التبخر بتجاوز معدل الهطول.", correctAnswer: false, explanation: "التصحيح: الصحراء هي التي يتميز فيها التبخر بتجاوز الهطول." },
      { id: 15, type: QuestionType.TRUE_FALSE, text: "المناخ هو حالة الغلاف الجوي.", correctAnswer: false, explanation: "التصحيح: المناخ هو متوسط الطقس، أما حالة الغلاف الجوي اللحظية فهي الطقس." },
      { id: 16, type: QuestionType.TRUE_FALSE, text: "الطقس معدل الظروف البيئية في منطقة ما.", correctAnswer: false, explanation: "التصحيح: هذا تعريف المناخ." },
      { id: 17, type: QuestionType.TRUE_FALSE, text: "المنطقة الضوئية تعيش فيها المخلوقات ذاتية التغذية الضوئية كلها.", correctAnswer: true },
      { id: 18, type: QuestionType.TRUE_FALSE, text: "منطقة الشاطئ تترتب فيها المجتمعات بناءً على مدة غمرها بالماء.", correctAnswer: true },
      { id: 19, type: QuestionType.TRUE_FALSE, text: "المصب هو منطقة التقاء الماء العذب والمالح.", correctAnswer: true },
      { id: 20, type: QuestionType.TRUE_FALSE, text: "تتحكم العوامل المحددة ومدى التحمل في تحديد مكان المناطق الحيوية.", correctAnswer: true }
    ]
  },
  {
    id: 3,
    title: "الفصل الثالث: علم بيئة الجماعات الحيوية",
    questions: [
      { id: 1, type: QuestionType.MULTIPLE_CHOICE, text: "من خصائص الجماعات الحيوية:", options: ["كثافة الجماعة", "مكان توزيعها", "معدل نموها", "جميع ما سبق"], correctAnswer: "جميع ما سبق" },
      { id: 2, type: QuestionType.MULTIPLE_CHOICE, text: "عدد المخلوقات الحية لكل وحدة مساحة:", options: ["توزيع الجماعة", "معدل النمو", "معدل التغير", "كثافة الجماعة"], correctAnswer: "كثافة الجماعة" },
      { id: 3, type: QuestionType.MULTIPLE_CHOICE, text: "نمط انتشار الجماعة في منطقة محددة:", options: ["معدل النمو", "معدل التغير", "كثافة الجماعة", "توزيع الجماعة"], correctAnswer: "توزيع الجماعة" },
      { id: 4, type: QuestionType.MULTIPLE_CHOICE, text: "من أنواع التوزيع المكاني:", options: ["المنتظم", "التشكيلي", "العشوائي", "جميع ما سبق"], correctAnswer: "جميع ما سبق" },
      { id: 5, type: QuestionType.MULTIPLE_CHOICE, text: "من الأمثلة على التوزيع العشوائي:", options: ["الإبل", "الخيول", "العنب", "الطيور البحرية"], correctAnswer: "العنب" },
      { id: 6, type: QuestionType.MULTIPLE_CHOICE, text: "عدد المواليد في فترة زمنية محددة:", options: ["معدل الوفيات", "هجرة داخلية", "هجرة خارجية", "معدل المواليد"], correctAnswer: "معدل المواليد" },
      { id: 7, type: QuestionType.MULTIPLE_CHOICE, text: "عدد وفيات الجماعة في فترة زمنية محددة:", options: ["معدل المواليد", "هجرة داخلية", "هجرة خارجية", "معدل الوفيات"], correctAnswer: "معدل الوفيات" },
      { id: 8, type: QuestionType.MULTIPLE_CHOICE, text: "عدد الأفراد الذين يغادرون الجماعة:", options: ["معدل المواليد", "معدل الوفيات", "قدرة استيعابية", "هجرة خارجية"], correctAnswer: "هجرة خارجية" },
      { id: 9, type: QuestionType.MULTIPLE_CHOICE, text: "خط معين تتوقف عنده مستويات النمو النسبي:", options: ["معدل المواليد", "معدل الوفيات", "هجرة خارجية", "القدرة الاستيعابية"], correctAnswer: "القدرة الاستيعابية" },
      { id: 10, type: QuestionType.MULTIPLE_CHOICE, text: "من العوامل المحددة للقدرة الاستيعابية:", options: ["الطاقة والماء", "الأكسجين", "المواد المغذية", "جميع ما سبق"], correctAnswer: "جميع ما سبق" }
    ]
  },
  {
    id: 4,
    title: "الفصل الرابع: التنوع الحيوي والمحافظة عليه",
    questions: [
      { id: 1, type: QuestionType.MULTIPLE_CHOICE, text: "ما الذي يمثل القيمة الاقتصادية غير المباشرة للتنوع الحيوي؟", options: ["الطعام", "الحماية من الفيضان", "الملابس", "الأدوية"], correctAnswer: "الحماية من الفيضان" },
      { id: 2, type: QuestionType.MULTIPLE_CHOICE, text: "مصطلح يصف تجمعاً من غابة، بحيرة، مصب، مروج:", options: ["تنوع النظام البيئي", "الانقراض", "تنوع وراثي", "تنوع الأنواع"], correctAnswer: "تنوع النظام البيئي" },
      { id: 3, type: QuestionType.MULTIPLE_CHOICE, text: "أي مجموعة لها العدد الأكبر من الانقراض الكلي؟", options: ["الطيور", "اللافقاريات", "النباتات الزهرية", "الثدييات"], correctAnswer: "اللافقاريات" },
      { id: 4, type: QuestionType.MULTIPLE_CHOICE, text: "ما المجموعة التي لها أكبر نسبة انقراض؟", options: ["الطيور", "الثدييات", "السمك", "الزواحف"], correctAnswer: "الثدييات" },
      { id: 5, type: QuestionType.MULTIPLE_CHOICE, text: "أي مما يلي لا يعد طريقة يفقد بها النوع موطنه؟", options: ["الانقراض التدريجي", "التدمير", "الاختلال", "التلوث"], correctAnswer: "الانقراض التدريجي" },
      { id: 6, type: QuestionType.MULTIPLE_CHOICE, text: "كم مرة يزيد الانقراض التدريجي الحالي على الطبيعي؟", options: ["1", "1000", "10", "10000 مرة"], correctAnswer: "1000" },
      { id: 7, type: QuestionType.MULTIPLE_CHOICE, text: "مصطلح يعبر عن إعادة استصلاح منطقة ملوثة:", options: ["الزيادة الحيوية", "موارد متجددة", "ممر حيوي", "استخدام مستدام"], correctAnswer: "الزيادة الحيوية" },
      { id: 8, type: QuestionType.MULTIPLE_CHOICE, text: "فائدة ممر الموطن البيئي:", options: ["زيادة أثر الحد", "نقل الأمراض", "نقل الطفيليات", "الانتقال بأمان"], correctAnswer: "الانتقال بأمان" },
      { id: 9, type: QuestionType.MULTIPLE_CHOICE, text: "كارثة يسببها الإنسان وتحتاج أطول زمن للاستصلاح:", options: ["استغلال المياه الجوفية", "تلوث صناعي", "قنبلة نووية", "بقعة نفطية"], correctAnswer: "قنبلة نووية" },
      { id: 10, type: QuestionType.MULTIPLE_CHOICE, text: "كارثة طبيعية تحتاج أقل زمن للاستصلاح:", options: ["صاعقة", "نيازك", "تسونامي", "براكين"], correctAnswer: "صاعقة" },
      { id: 11, type: QuestionType.MULTIPLE_CHOICE, text: "العامل الرئيس لنقص النباتات في المناطق القطبية:", options: ["رعي جائر", "هطول قليل", "لا توجد تربة", "أشعة شمس غير كافية"], correctAnswer: "لا توجد تربة" },
      { id: 12, type: QuestionType.MULTIPLE_CHOICE, text: "ما العامل الذي يعتمد على الكثافة؟", options: ["المناخ", "الطقس", "الضغط الجوي", "التنافس على الغذاء"], correctAnswer: "التنافس على الغذاء" },
      { id: 13, type: QuestionType.MULTIPLE_CHOICE, text: "ما الذي يتوقع وجوده في النطاق العميق من البحيرة؟", options: ["طحالب", "عوالق", "بقايا مخلوقات ميتة", "نباتات عائمة"], correctAnswer: "بقايا مخلوقات ميتة" },
      { id: 14, type: QuestionType.TRUE_FALSE, text: "يحدث التنوع الحيوي للأنواع عندما يموت آخر فرد في النوع.", correctAnswer: false, explanation: "التصحيح: هذا تعريف الانقراض." },
      { id: 15, type: QuestionType.TRUE_FALSE, text: "يشير التنوع الوراثي إلى تنوع الأنظمة البيئية.", correctAnswer: false, explanation: "التصحيح: يشير إلى تنوع المحتوى الجيني داخل النوع." },
      { id: 16, type: QuestionType.TRUE_FALSE, text: "تنوع النظام البيئي هو عدد الأنواع المختلفة والوفرة النسبية.", correctAnswer: true },
      { id: 17, type: QuestionType.TRUE_FALSE, text: "الموارد التي تستبدل أسرع من استهلاكها تسمى موارد متجددة.", correctAnswer: true },
      { id: 18, type: QuestionType.TRUE_FALSE, text: "نسمي النوع الذي يوجد في موقع جغرافي واحد المستوطنة.", correctAnswer: true },
      { id: 19, type: QuestionType.TRUE_FALSE, text: "استخدام المخلوقات لإزالة السمية يسمى المعالجة الحيوية.", correctAnswer: true },
      { id: 20, type: QuestionType.TRUE_FALSE, text: "الموارد الموجودة بكميات محدودة تسمى غير متجددة.", correctAnswer: true }
    ]
  },
  {
    id: 5,
    title: "الفصل الخامس: سلوك الحيوان",
    questions: [
      { id: 1, type: QuestionType.MULTIPLE_CHOICE, text: "سلوك يحدث بتتابع أحداث محددة استجابة لمثير:", options: ["فطري", "نمط أداء ثابت", "مكتسب", "إدراكي"], correctAnswer: "نمط أداء ثابت" },
      { id: 2, type: QuestionType.MULTIPLE_CHOICE, text: "سلوك يعتمد على الوراثة ولا يرتبط بتجربة سابقة:", options: ["تعود", "تعلم كلاسيكي", "نمط أداء ثابت", "تعلم إجرائي"], correctAnswer: "نمط أداء ثابت" },
      { id: 3, type: QuestionType.MULTIPLE_CHOICE, text: "مثال على السلوك المطبوع:", options: ["عودة السلمون لموطنه", "أسد يتعلم الصيد", "جرذ يضغط مقبض", "عصفور يتعود على الأجسام"], correctAnswer: "عودة السلمون لموطنه" },
      { id: 4, type: QuestionType.MULTIPLE_CHOICE, text: "سلوك يحل فيه الحيوان المشكلات:", options: ["نمط أداء ثابت", "إدراكي", "مطبوع", "تعلم شرطي"], correctAnswer: "إدراكي" },
      { id: 5, type: QuestionType.MULTIPLE_CHOICE, text: "سلوك يمثل الحركة الفصلية:", options: ["هجرة", "تعلم كلاسيكي", "إدراكي", "مطبوع"], correctAnswer: "هجرة" },
      { id: 6, type: QuestionType.MULTIPLE_CHOICE, text: "في أي الفترات يتكون السلوك المطبوع؟", options: ["الحضانة", "الإدراك", "الفترة الحساسة", "التعلم"], correctAnswer: "الفترة الحساسة" },
      { id: 7, type: QuestionType.MULTIPLE_CHOICE, text: "حالة يحصل فيها فرد على سيادة الموارد دون اصطدام:", options: ["جمع طعام", "هجرة", "مغازلة", "سيادة"], correctAnswer: "سيادة" },
      { id: 8, type: QuestionType.MULTIPLE_CHOICE, text: "سلوك يهتم بإيجاد الغذاء وجمعه:", options: ["حضانة", "مغازلة", "جمع الغذاء", "هجرة"], correctAnswer: "جمع الغذاء" },
      { id: 9, type: QuestionType.MULTIPLE_CHOICE, text: "سلوك يرتبط بنجاح التكاثر:", options: ["إيثار", "مغازلة", "جمع غذاء", "هجرة"], correctAnswer: "مغازلة" },
      { id: 10, type: QuestionType.MULTIPLE_CHOICE, text: "سلوك مرتبط بالفرمونات:", options: ["صراع", "هجرة", "حضانة", "تواصل"], correctAnswer: "تواصل" },
      { id: 11, type: QuestionType.MULTIPLE_CHOICE, text: "مثال على النمط اليومي:", options: ["هجرة", "دورة النوم والاستيقاظ", "بيات شتوي", "تكاثر"], correctAnswer: "دورة النوم والاستيقاظ" },
      { id: 12, type: QuestionType.MULTIPLE_CHOICE, text: "ضمان حصول الأبناء على فرصة عيش كبيرة:", options: ["صراع", "هجرة", "حضانة", "تحديد منطقة نفوذ"], correctAnswer: "حضانة" },
      { id: 13, type: QuestionType.MULTIPLE_CHOICE, text: "سلوك مكتسب لا يحدث إلا في حالات حرجة:", options: ["تعلم كلاسيكي", "نمط أداء ثابت", "تعود", "مطبوع"], correctAnswer: "مطبوع" },
      { id: 14, type: QuestionType.MULTIPLE_CHOICE, text: "مثال على التعلم الإجرائي الشرطي:", options: ["لعاب الكلب", "حصان اعتاد الضجة", "صغير ارتبط بأول حيوان يراه", "جرذ يسحب مقبض للطعام"], correctAnswer: "جرذ يسحب مقبض للطعام" },
      { id: 15, type: QuestionType.MULTIPLE_CHOICE, text: "مثال على سلوك الحضانة:", options: ["تحذير من مفترس", "ذكر طاووس يعرض ريشه", "أنثى شمبانزي تعتني بصغيرها", "سنجاب يطرد آخر"], correctAnswer: "أنثى شمبانزي تعتني بصغيرها" },
      { id: 16, type: QuestionType.TRUE_FALSE, text: "التعلم الإجرائي الشرطي هو الربط بين نوعين مختلفين من المثيرات.", correctAnswer: false, explanation: "التصحيح: هذا التعلم الكلاسيكي الشرطي." },
      { id: 17, type: QuestionType.TRUE_FALSE, text: "السلوك المكتسب نوع من التعلم يحدث ضمن فترة محددة فقط.", correctAnswer: false, explanation: "التصحيح: السلوك المطبوع هو الذي يحدث في فترة محددة." },
      { id: 18, type: QuestionType.TRUE_FALSE, text: "السلوك الإدراكي هو تناقص الاستجابة بعد التعرض المتكرر لمثير ليس له تأثير.", correctAnswer: false, explanation: "التصحيح: هذا تعريف التعود." },
      { id: 19, type: QuestionType.TRUE_FALSE, text: "السلوك الفطري يتضمن ربط الاستجابة بالنتيجة الإيجابية أو السلبية.", correctAnswer: false, explanation: "التصحيح: هذا التعلم الإجرائي الشرطي." },
      { id: 20, type: QuestionType.TRUE_FALSE, text: "اللغة نوع اتصال سمعي تستعمل فيه أعضاء صوتية لإنتاج أصوات ذات معنى.", correctAnswer: true },
      { id: 21, type: QuestionType.TRUE_FALSE, text: "الفرمونات مادة كيميائية تفرز للتواصل.", correctAnswer: true },
      { id: 22, type: QuestionType.TRUE_FALSE, text: "سلوك تحديد منطقة النفوذ هو اختيار منطقة والسيطرة عليها والدفاع عنها.", correctAnswer: true },
      { id: 23, type: QuestionType.TRUE_FALSE, text: "سلوك الصراع هو الذي يؤدي إلى علاقات قتال بين فردين من النوع نفسه.", correctAnswer: true }
    ]
  }
];
