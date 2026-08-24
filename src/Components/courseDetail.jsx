import { useParams, Link } from "react-router-dom";

const courses = {
  seerah: {
    title: "Seerah Course",
    subtitle:
      "Discover the life, character and legacy of Prophet Muhammad ﷺ",
    category: "Seerah",
    duration: "8 Weeks",
    level: "Beginner to Intermediate",
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "The Seerah Course is a journey through the remarkable life of Prophet Muhammad ﷺ. Through this course, students will explore his character, leadership, patience, mercy, struggles and relationship with Allah. The aim is not simply to learn historical events, but to understand how the life of the Prophet ﷺ can transform our own lives.",

    whatYouLearn: [
      "The early life and upbringing of Prophet Muhammad ﷺ",
      "The beginning of revelation and the Makkan period",
      "The Hijrah and establishment of Madinah",
      "Major events and lessons from the Madinan period",
      "The character, mercy and leadership of the Prophet ﷺ",
      "His relationship with his family, companions and community",
      "Lessons from his patience, forgiveness and resilience",
      "Practical ways to implement the Sunnah in daily life",
    ],

    modules: [
      "Introduction to Seerah",
      "Life Before Prophethood",
      "Beginning of Revelation",
      "The Makkan Period",
      "Migration to Madinah",
      "The Madinan Period",
      "Character and Leadership",
      "Lessons from the Final Years",
    ],

    outcome:
      "By the end of this course, students will have a deeper understanding of the life of Prophet Muhammad ﷺ and will be able to reflect upon his example in their personal, spiritual and social lives.",
  },

  "islamic-history": {
    title: "Islamic History",
    subtitle:
      "Explore the civilizations, scholars and events that shaped the Muslim world",
    category: "History",
    duration: "6 Weeks",
    level: "All Levels",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "Islamic History takes students on a journey through important periods of Muslim history. From the early Muslim community to the development of great civilizations, scholarship and intellectual traditions, this course helps students understand the historical journey of the Ummah.",

    whatYouLearn: [
      "The early Muslim community",
      "The Rashidun period",
      "Major Islamic dynasties",
      "The development of Islamic civilization",
      "Muslim contributions to knowledge and education",
      "Important Muslim scholars and thinkers",
      "Major historical challenges faced by the Ummah",
      "Lessons that Islamic history teaches us today",
    ],

    modules: [
      "Introduction to Islamic History",
      "The Rashidun Era",
      "Umayyad Period",
      "Abbasid Period",
      "Islamic Civilization",
      "Muslim Scholars",
      "Major Historical Events",
      "Lessons from History",
    ],

    outcome:
      "Students will develop a broader understanding of Islamic civilization and learn how history can provide valuable lessons for the present and future.",
  },

  tafseer: {
    title: "Tafseer Course",
    subtitle:
      "Understand the Quran through reflection, context and authentic explanation",
    category: "Quran",
    duration: "12 Weeks",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "The Tafseer Course is designed for students who want to move beyond recitation and develop a deeper relationship with the meanings of the Quran. Students will study selected verses with attention to context, vocabulary, themes and practical lessons.",

    whatYouLearn: [
      "Introduction to Tafseer",
      "Understanding the context of Quranic revelation",
      "Important Quranic vocabulary",
      "Themes and messages of selected Surahs",
      "Lessons from Quranic stories",
      "Understanding commands and guidance",
      "Reflection upon verses",
      "Applying Quranic guidance to everyday life",
    ],

    modules: [
      "Introduction to Tafseer",
      "Understanding the Quran",
      "Asbab al-Nuzul",
      "Quranic Themes",
      "Selected Surahs",
      "Quranic Stories",
      "Practical Reflection",
      "Living by the Quran",
    ],

    outcome:
      "Students will develop the ability to reflect upon Quranic verses with greater understanding and connect Quranic guidance with everyday life.",
  },

  "arabic-understanding": {
    title: "Arabic Understanding Course",
    subtitle:
      "Build the foundation needed to understand the language of the Quran",
    category: "Arabic",
    duration: "10 Weeks",
    level: "Beginner",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "This course introduces students to the foundations of Arabic in a simple and practical way. Students will gradually learn vocabulary, sentence structures and basic grammar so they can begin understanding Arabic texts and Quranic expressions.",

    whatYouLearn: [
      "Arabic alphabet and word formation",
      "Basic Arabic vocabulary",
      "Nouns, verbs and particles",
      "Masculine and feminine forms",
      "Definite and indefinite nouns",
      "Pronouns",
      "Basic sentence structures",
      "Practical Quranic examples",
    ],

    modules: [
      "Arabic Foundations",
      "Vocabulary Building",
      "Nouns and Pronouns",
      "Verbs",
      "Sentence Structures",
      "Grammar Basics",
      "Quranic Examples",
      "Practical Understanding",
    ],

    outcome:
      "Students will develop a strong foundation in Arabic and become more confident when encountering Arabic words and structures in the Quran.",
  },

  tajweed: {
    title: "Tajweed Course",
    subtitle:
      "Improve your Quran recitation with confidence and precision",
    category: "Quran",
    duration: "8 Weeks",
    level: "All Levels",
    image:
      "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "The Tajweed Course helps students improve their Quran recitation by learning the rules of pronunciation and correct articulation. The course combines explanation with practical recitation exercises.",

    whatYouLearn: [
      "Makharij al-Huruf",
      "Characteristics of Arabic letters",
      "Noon Sakinah and Tanween",
      "Meem Sakinah",
      "Madd rules",
      "Qalqalah",
      "Rules of stopping and starting",
      "Practical Quran recitation",
    ],

    modules: [
      "Introduction to Tajweed",
      "Makharij",
      "Letter Characteristics",
      "Noon Sakinah",
      "Meem Sakinah",
      "Madd",
      "Qalqalah",
      "Practical Recitation",
    ],

    outcome:
      "Students will improve their pronunciation and recitation while developing greater confidence when reading the Quran.",
  },

  "quranic-arabic": {
    title: "Quranic Arabic Course",
    subtitle:
      "Unlock the meanings of the words you recite every day",
    category: "Arabic",
    duration: "12 Weeks",
    level: "Intermediate",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "Quranic Arabic focuses specifically on the vocabulary and structures that appear frequently in the Quran. The course helps students move toward understanding the Quran directly through its Arabic language.",

    whatYouLearn: [
      "High-frequency Quranic vocabulary",
      "Common Quranic expressions",
      "Root words",
      "Basic morphology",
      "Common grammatical structures",
      "Verb patterns",
      "Quranic sentence analysis",
      "Understanding selected verses",
    ],

    modules: [
      "Quranic Vocabulary",
      "Root Words",
      "Verb Patterns",
      "Grammar",
      "Common Expressions",
      "Sentence Analysis",
      "Selected Verses",
      "Practical Quranic Understanding",
    ],

    outcome:
      "Students will begin recognizing frequently occurring Quranic vocabulary and grammatical patterns, making their Quran recitation more meaningful.",
  },

  "psychology-islam": {
    title: "Psychology & Islam",
    subtitle:
      "Explore the human mind, emotions and wellbeing through an Islamic perspective",
    category: "Islam & Life",
    duration: "6 Weeks",
    level: "All Levels",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "This course explores human emotions, behavior, inner struggles and wellbeing through an Islamic framework. Students will reflect upon concepts such as the heart, soul, patience, gratitude, hope and reliance upon Allah.",

    whatYouLearn: [
      "Understanding the human self",
      "The heart and spiritual wellbeing",
      "Emotions in Islam",
      "Patience and emotional resilience",
      "Gratitude and contentment",
      "Fear and hope",
      "Self-discipline",
      "Spiritual wellbeing",
    ],

    modules: [
      "Understanding the Self",
      "Heart and Soul",
      "Emotions",
      "Patience",
      "Gratitude",
      "Fear and Hope",
      "Self-Control",
      "Spiritual Wellbeing",
    ],

    outcome:
      "Students will gain a deeper understanding of emotional and spiritual wellbeing through Islamic teachings and reflection.",
  },

  "science-islam": {
    title: "Science & Islam",
    subtitle:
      "Explore the relationship between creation, knowledge and Quranic reflection",
    category: "Islam & Science",
    duration: "6 Weeks",
    level: "All Levels",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "Science & Islam explores how Muslims can engage with the natural world through curiosity, observation and reflection. The course encourages thoughtful exploration of creation while maintaining a careful distinction between scientific findings and Quranic interpretation.",

    whatYouLearn: [
      "Islamic encouragement of seeking knowledge",
      "Reflection upon creation",
      "The natural world in the Quran",
      "Cosmos and creation",
      "Human creation",
      "Nature and signs of Allah",
      "Scientific thinking and curiosity",
      "Responsible reflection",
    ],

    modules: [
      "Knowledge in Islam",
      "Creation and Reflection",
      "The Cosmos",
      "Human Creation",
      "Nature",
      "Signs of Allah",
      "Science and Knowledge",
      "Reflection",
    ],

    outcome:
      "Students will learn to approach the natural world with curiosity, humility and reflection while developing a balanced understanding of science and Islamic teachings.",
  },

  "signs-in-quran": {
    title: "Signs in the Quran",
    subtitle:
      "Reflect upon the signs of Allah within revelation and creation",
    category: "Quran",
    duration: "6 Weeks",
    level: "All Levels",
    image:
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "The Quran repeatedly invites humanity to observe, think and reflect. This course explores selected Quranic passages about creation, nature, human beings and the signs of Allah, encouraging deeper reflection upon revelation.",

    whatYouLearn: [
      "The Quranic concept of signs",
      "Signs within creation",
      "Reflection and contemplation",
      "The human being",
      "The heavens and earth",
      "Nature and life",
      "Quranic invitations to think",
      "Developing a reflective relationship with the Quran",
    ],

    modules: [
      "The Concept of Signs",
      "Creation",
      "Human Being",
      "Heavens and Earth",
      "Nature",
      "Reflection",
      "Quranic Contemplation",
      "Practical Reflection",
    ],

    outcome:
      "Students will develop a more reflective approach to the Quran and become more attentive to the signs of Allah around them.",
  },

  tawakkul: {
    title: "Tawakkul Course",
    subtitle:
      "Strengthen your trust in Allah and transform the way you face life",
    category: "Spiritual Growth",
    duration: "4 Weeks",
    level: "All Levels",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",

    introduction:
      "Tawakkul is more than simply saying that we trust Allah. It is a state of the heart that combines sincere reliance upon Allah with taking the means available to us. This course explores how Tawakkul can transform fear, uncertainty, disappointment and everyday decisions.",

    whatYouLearn: [
      "What Tawakkul truly means",
      "Trusting Allah during uncertainty",
      "Taking the means while relying upon Allah",
      "Patience during difficult situations",
      "Dealing with fear and uncertainty",
      "Quranic examples of Tawakkul",
      "The relationship between effort and reliance",
      "Building Tawakkul in everyday life",
    ],

    modules: [
      "Understanding Tawakkul",
      "Trust in Allah",
      "Taking the Means",
      "Patience",
      "Fear and Uncertainty",
      "Quranic Examples",
      "Reliance and Effort",
      "Living with Tawakkul",
    ],

    outcome:
      "Students will develop a deeper understanding of Tawakkul and learn practical ways to strengthen their reliance upon Allah in everyday life.",
  },
};

export default function CourseDetail() {
  const { courseId } = useParams();

  const course = courses[courseId];

  if (!course) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080604] px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Course Not Found</h1>

          <p className="mt-4 text-white/60">
            The course you are looking for does not exist.
          </p>

          <Link
            to="/service"
            className="mt-8 inline-block rounded-full bg-amber-400 px-6 py-3 font-semibold text-black"
          >
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080604] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0">
          <img
            src={course.image}
            alt={course.title}
            className="h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#080604]/50 via-[#080604]/80 to-[#080604]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8 lg:pb-32">

          <Link
            to="/service"
            className="inline-flex items-center text-sm text-white/60 transition hover:text-amber-400"
          >
            ← Back to Courses
          </Link>

          <div className="mt-24 max-w-3xl">

            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
              {course.category}
            </span>

            <h1 className="mt-7 text-5xl font-bold tracking-tight sm:text-7xl">
              {course.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              {course.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                {course.duration}
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                {course.level}
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                Online
              </span>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid gap-16 lg:grid-cols-[1fr_380px]">

          {/* LEFT SIDE */}

          <div>

            {/* ABOUT */}

            <section>

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                About the Course
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                A journey towards deeper understanding
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
                {course.introduction}
              </p>

            </section>


            {/* WHAT YOU LEARN */}

            <section className="mt-20">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                What You Will Learn
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                What this course offers
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {course.whatYouLearn.map((item, index) => (

                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-amber-400/20 hover:bg-white/[0.06]"
                  >

                    <div className="flex gap-4">

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-sm font-bold text-amber-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-sm leading-6 text-white/70">
                        {item}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </section>


            {/* COURSE MODULES */}

            <section className="mt-20">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Course Modules
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                Your learning journey
              </h2>

              <div className="mt-8 space-y-3">

                {course.modules.map((module, index) => (

                  <div
                    key={index}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-amber-400/20 hover:bg-white/[0.05]"
                  >

                    <div className="flex items-center gap-4">

                      <span className="text-xs font-bold text-amber-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm text-white/70">
                        {module}
                      </span>

                    </div>

                    <span className="text-white/20">
                      →
                    </span>

                  </div>

                ))}

              </div>

            </section>


            {/* COURSE OUTCOME */}

            <section className="mt-20 rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-8 sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                Course Outcome
              </p>

              <h2 className="mt-4 text-2xl font-bold">
                What you will take with you
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                {course.outcome}
              </p>

            </section>

          </div>


          {/* =================================================
              RIGHT ENROLL CARD
          ================================================== */}

          <aside>

            <div className="sticky top-8 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">

              <div className="overflow-hidden rounded-2xl">

                <img
                  src={course.image}
                  alt={course.title}
                  className="aspect-video w-full object-cover"
                />

              </div>

              <div className="mt-6">

                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  {course.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {course.title}
                </h3>

              </div>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Start your learning journey and deepen your understanding
                through this carefully structured course.
              </p>


              {/* ENROLL BUTTON */}

              <Link
                to="/signup"
                className="
                  mt-6 block w-full rounded-xl
                  bg-amber-400
                  px-5 py-4
                  text-center
                  text-sm font-bold
                  text-black
                  transition
                  hover:scale-[1.02]
                  hover:bg-amber-300
                "
              >
                Enroll Now
              </Link>


              {/* COURSE INFO */}

              <div className="mt-6 border-t border-white/10 pt-5">

                <div className="flex justify-between py-3 text-sm">

                  <span className="text-white/40">
                    Duration
                  </span>

                  <span className="text-white/80">
                    {course.duration}
                  </span>

                </div>

                <div className="flex justify-between py-3 text-sm">

                  <span className="text-white/40">
                    Level
                  </span>

                  <span className="text-white/80">
                    {course.level}
                  </span>

                </div>

                <div className="flex justify-between py-3 text-sm">

                  <span className="text-white/40">
                    Format
                  </span>

                  <span className="text-white/80">
                    Online
                  </span>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Keep Learning
          </p>

          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
            Knowledge is a journey,
            <span className="text-amber-400">
              {" "}not a destination.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-white/50">
            Continue exploring courses designed to deepen your knowledge,
            strengthen your understanding and bring you closer to meaningful
            learning.
          </p>

          <Link
            to="/service"
            className="
              mt-8 inline-block
              rounded-full
              border border-white/10
              bg-white/5
              px-8 py-4
              text-sm font-semibold
              transition
              hover:bg-white/10
            "
          >
            Explore More Courses
          </Link>

        </div>

      </section>

    </div>
  );
}