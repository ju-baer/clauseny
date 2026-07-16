import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import {
  ArrowRight,
  CalendarClock,
  ShieldCheck,
  Globe2,
  ServerCog,
  FileWarning,
  Check,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#product" className="skip-link">Skip to demo</a>
      <Nav />
      <main id="main">
        <Hero />
        <ContractMockup />
      <BlindSpots />
      <Pillars />
      <HowItWorks />
      <Benchmark />
      <Security />
      <Pricing />
      <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <nav className="max-w-[1240px] mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5 group">
          <Logo />
          <span className="font-display font-bold text-[19px] tracking-tight">Clauseny</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-ink-muted">
          <a href="#product" className="hover:text-foreground transition">Product</a>
          <a href="#security" className="hover:text-foreground transition">Security</a>
          <a href="#pricing" className="hover:text-foreground transition">Pricing</a>
          <a href="#benchmark" className="hover:text-foreground transition">Benchmark</a>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <a href="#demo" className="hidden sm:inline text-sm text-ink-muted hover:text-foreground">Sign in</a>
          <a
            href="https://calendar.app.google/pZmcMNmFH1xEMozTA"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-vermillion text-accent-foreground px-4 py-2.5 text-sm font-medium hover:brightness-110 transition shadow-[0_1px_0_0_oklch(0.55_0.18_35)]"
          >
            <CalendarClock className="w-4 h-4" />
            Book a demo
          </a>
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div
      aria-hidden="true"
      className="w-8 h-8 rounded-md bg-ink text-paper grid place-items-center font-display font-bold text-[15px]"
    >
      C
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 paper-grain pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-[0.35]">
        <div className="absolute inset-0 bg-gradient-to-l from-vermillion/25 via-vermillion/5 to-transparent blur-3xl" />
      </div>
      <div className="relative max-w-[1240px] mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-[820px]">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-vermillion" />
            Sovereign contract intelligence
          </span>
          <h1 className="mt-6 font-display font-bold text-[52px] md:text-[76px] leading-[0.98] tracking-[-0.03em]">
            Contracts read in their native tongue.
            <br />
            <span className="text-vermillion">Loopholes caught before you sign.</span>
          </h1>
          <p className="mt-8 max-w-[560px] text-[17px] leading-[1.55] text-ink-muted">
            Clauseny ingests complex enterprise agreements — in Bangla, English, or a
            dozen other languages — and marks every hidden clause, shifted liability, and
            statutory blind spot on the exact line of the original PDF. In under two
            minutes. On your own hardware.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#product"
              className="group inline-flex items-center gap-2 rounded-full bg-vermillion text-accent-foreground px-6 py-3.5 text-[15px] font-medium hover:brightness-110 transition"
            >
              Try the live demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="https://calendar.app.google/pZmcMNmFH1xEMozTA"
              target="_blank"
              rel="noreferrer"
              className="text-[14px] text-ink-muted hover:text-foreground underline underline-offset-4 decoration-vermillion"
            >
              Or book a private walkthrough
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRODUCT MOCKUP (interactive) ---------- */

type Tone = "high" | "med" | "low";
type Flag = {
  id: string;
  tone: Tone;
  section: string;
  title: string;
  sub: string;
  page: number;
  totalPages: number;
  chapter: string;
  paraBefore: string;
  highlight: React.ReactNode;
  paraAfter: string;
  verifyTitle: string;
  verifyBody: string;
  severity: string;
  confidence: string;
  language: string;
  cite: string;
  isNew?: boolean;
};

const FLAGS_EN: Flag[] = [
  {
    id: "s3-4",
    tone: "high",
    section: "§ 3.4",
    title: "§ 3.4  Indemnity shift",
    sub: "Liability moved to buyer",
    page: 12,
    totalPages: 42,
    chapter: "3. Indemnification and Liability",
    paraBefore:
      "The Supplier agrees to defend and hold harmless the Buyer against any claim arising from ordinary course of business, subject to the caps set forth in Annex B.",
    highlight: (
      <>
        <span className="font-medium">3.4</span>  Notwithstanding the foregoing, the{" "}
        <span className="underline decoration-flag-high decoration-2 underline-offset-2">
          Buyer
        </span>{" "}
        shall bear all third-party liabilities in connection with cross-border shipment
        irrespective of fault, including regulatory penalties imposed under সরকারি
        প্রবিধান ২০২৩.
      </>
    ),
    paraAfter:
      "Any dispute shall be referred to arbitration in accordance with §11 below.",
    verifyTitle: "Liability silently shifted to buyer.",
    verifyBody:
      "Original draft placed cross-border regulatory liability on the supplier. v4 rewrites §3.4 to move it to the buyer — cited to a 2023 Bangla statute the base LLM missed.",
    severity: "HIGH",
    confidence: "97%",
    language: "Bangla → EN",
    cite: "সরকারি প্রবিধান §14(b)",
    isNew: true,
  },
  {
    id: "s7-1",
    tone: "high",
    section: "§ 7.1",
    title: "§ 7.1  Auto-renewal",
    sub: "60-day silent renewal",
    page: 21,
    totalPages: 42,
    chapter: "7. Term and Termination",
    paraBefore:
      "The initial Term of this Agreement shall be twenty-four (24) months commencing on the Effective Date.",
    highlight: (
      <>
        <span className="font-medium">7.1</span>  This Agreement shall{" "}
        <span className="underline decoration-flag-high decoration-2 underline-offset-2">
          automatically renew
        </span>{" "}
        for successive twelve (12) month terms unless either Party delivers written notice
        of non-renewal no less than sixty (60) days prior to expiry.
      </>
    ),
    paraAfter:
      "Termination for convenience prior to the end of any Renewal Term shall trigger the early-exit fee in §7.4.",
    verifyTitle: "Silent auto-renewal with 60-day window.",
    verifyBody:
      "Prior draft required affirmative renewal by both parties. v4 flips the default — silence now equals another 12-month lock-in.",
    severity: "HIGH",
    confidence: "99%",
    language: "English",
    cite: "§ 7.1 vs. v3 §7.1",
  },
  {
    id: "s9",
    tone: "med",
    section: "§ 9",
    title: "§ 9  Force majeure",
    sub: "Pandemic clause missing",
    page: 25,
    totalPages: 42,
    chapter: "9. Force Majeure",
    paraBefore:
      "Neither Party shall be liable for any failure or delay in performance caused by acts of God, war, terrorism, or civil disturbance.",
    highlight: (
      <>
        <span className="font-medium">9.2</span>  For the avoidance of doubt, the
        following events shall{" "}
        <span className="underline decoration-flag-med decoration-2 underline-offset-2">
          not constitute
        </span>{" "}
        Force Majeure: labour disputes, supplier insolvency, and, notably, pandemics or
        public-health emergencies of any scale.
      </>
    ),
    paraAfter:
      "The affected Party shall provide written notice within seven (7) days of the event.",
    verifyTitle: "Pandemic explicitly excluded from force majeure.",
    verifyBody:
      "Standard market language keeps public-health emergencies inside the safe harbor. This draft carves them out — buyer bears all COVID-style disruption risk.",
    severity: "MEDIUM",
    confidence: "94%",
    language: "English",
    cite: "§ 9.2 vs. market standard",
  },
  {
    id: "s11-2",
    tone: "med",
    section: "§ 11.2",
    title: "§ 11.2  Governing law",
    sub: "Foreign jurisdiction",
    page: 30,
    totalPages: 42,
    chapter: "11. Governing Law and Dispute Resolution",
    paraBefore:
      "The Parties acknowledge that performance of this Agreement occurs primarily within the People's Republic of Bangladesh.",
    highlight: (
      <>
        <span className="font-medium">11.2</span>  This Agreement shall be governed by
        and construed in accordance with the laws of{" "}
        <span className="underline decoration-flag-med decoration-2 underline-offset-2">
          Singapore
        </span>
        , without regard to its conflict-of-laws principles.
      </>
    ),
    paraAfter:
      "The Parties irrevocably submit to the exclusive jurisdiction of the courts of §11.3.",
    verifyTitle: "Governing law moved offshore.",
    verifyBody:
      "Prior version applied Bangladeshi law. Foreign governing law adds forum-shopping risk and materially raises enforcement cost for the local party.",
    severity: "MEDIUM",
    confidence: "98%",
    language: "English",
    cite: "§ 11.2 vs. v3 §11.2",
  },
  {
    id: "s14",
    tone: "low",
    section: "§ 14",
    title: "§ 14  Payment terms",
    sub: "Net 90, was Net 45",
    page: 34,
    totalPages: 42,
    chapter: "14. Invoicing and Payment",
    paraBefore:
      "Supplier shall submit invoices monthly in arrears for all Services performed during the preceding calendar month.",
    highlight: (
      <>
        <span className="font-medium">14.3</span>  All undisputed invoices shall be paid
        within{" "}
        <span className="underline decoration-flag-low decoration-2 underline-offset-2">
          ninety (90) days
        </span>{" "}
        of receipt, notwithstanding any prior course of dealing between the Parties.
      </>
    ),
    paraAfter:
      "Late-payment interest shall accrue at a rate equal to the Bank Rate plus 1.5% per annum.",
    verifyTitle: "Payment term doubled to Net 90.",
    verifyBody:
      "Prior draft was Net 45. This meaningfully compresses supplier working capital — flag for CFO review before signature.",
    severity: "LOW",
    confidence: "100%",
    language: "English",
    cite: "§ 14.3 vs. v3 §14.3",
  },
  {
    id: "s18",
    tone: "low",
    section: "§ 18",
    title: "§ 18  Arbitration seat",
    sub: "Moved to Singapore",
    page: 38,
    totalPages: 42,
    chapter: "18. Arbitration",
    paraBefore:
      "Any dispute, controversy or claim arising out of or in connection with this Agreement shall be resolved by binding arbitration.",
    highlight: (
      <>
        <span className="font-medium">18.1</span>  The seat of arbitration shall be{" "}
        <span className="underline decoration-flag-low decoration-2 underline-offset-2">
          Singapore
        </span>
        , and the proceedings shall be administered by SIAC in accordance with its Rules
        then in force.
      </>
    ),
    paraAfter:
      "The language of the arbitration shall be English. The tribunal shall consist of three arbitrators.",
    verifyTitle: "Arbitral seat migrated offshore.",
    verifyBody:
      "Previously seated in Dhaka under BIAC. SIAC filing fees and travel materially raise the cost of even minor disputes.",
    severity: "LOW",
    confidence: "100%",
    language: "English",
    cite: "§ 18.1 vs. v3 §18.1",
  },
  {
    id: "ann-b",
    tone: "low",
    section: "Ann. B",
    title: "Ann. B  Penalty schedule",
    sub: "Cap removed",
    page: 41,
    totalPages: 42,
    chapter: "Annex B. Liquidated Damages Schedule",
    paraBefore:
      "For each day of delay beyond the Delivery Date, Supplier shall pay liquidated damages equal to 0.5% of the affected Order value.",
    highlight: (
      <>
        <span className="font-medium">B.4</span>  For the avoidance of doubt, the
        aggregate cap on liquidated damages set forth in the prior version of this Annex
        is hereby{" "}
        <span className="underline decoration-flag-low decoration-2 underline-offset-2">
          deleted in its entirety
        </span>
        .
      </>
    ),
    paraAfter:
      "The remedies in this Annex are cumulative and in addition to any other remedy at law or in equity.",
    verifyTitle: "Liquidated-damages cap removed.",
    verifyBody:
      "Prior draft capped LDs at 10% of contract value. Cap is now gone — supplier's downside exposure is theoretically unbounded.",
    severity: "LOW",
    confidence: "96%",
    language: "English",
    cite: "Annex B.4 vs. v3 B.4",
  },
];

const FLAGS_BN: Flag[] = [
  {
    id: "bn-4-2",
    tone: "high",
    section: "§ ৪.২",
    title: "§ ৪.২  দায় স্থানান্তর",
    sub: "নিয়ন্ত্রক দায় ইজারাদারের উপর",
    page: 9,
    totalPages: 36,
    chapter: "৪. ক্ষতিপূরণ ও দায়বদ্ধতা",
    paraBefore:
      "পক্ষদ্বয় সম্মত যে বন্দর কর্তৃপক্ষ তার স্বাভাবিক কার্যক্রম সংক্রান্ত সকল তৃতীয় পক্ষীয় দাবি হইতে ইজারাদারকে রক্ষা করিবে।",
    highlight: (
      <>
        <span className="font-medium">৪.২</span>  উপরোক্ত কিছু থাকা সত্ত্বেও,{" "}
        <span className="underline decoration-flag-high decoration-2 underline-offset-2">
          ইজারাদার
        </span>{" "}
        বন্দর নিরাপত্তা প্রবিধান ২০২৩ এর অধীন আরোপিত সকল প্রশাসনিক জরিমানার জন্য
        দায়ী থাকিবে, দোষ নির্বিশেষে।
      </>
    ),
    paraAfter:
      "যে কোন বিরোধ §১২ অনুসারে সালিশে প্রেরণ করা হইবে।",
    verifyTitle: "নিয়ন্ত্রক দায় নীরবে ইজারাদারের উপর সরানো হইয়াছে।",
    verifyBody:
      "পূর্ববর্তী খসড়ায় বন্দর কর্তৃপক্ষ নিরাপত্তা লঙ্ঘনের সকল প্রশাসনিক জরিমানা বহন করিত। v3 এই দায় ইজারাদারের উপর স্থানান্তর করিয়াছে — বন্দর নিরাপত্তা প্রবিধান ২০২৩ এর উদ্ধৃতিসহ, যাহা ফ্রন্টিয়ার মডেল ধরিতে ব্যর্থ হইয়াছে।",
    severity: "উচ্চ",
    confidence: "৯৬%",
    language: "বাংলা",
    cite: "বন্দর নিরাপত্তা প্রবিধান §৯(গ)",
    isNew: true,
  },
  {
    id: "bn-8-1",
    tone: "high",
    section: "§ ৮.১",
    title: "§ ৮.১  স্বয়ংক্রিয় নবায়ন",
    sub: "৯০ দিনের নীরব নবায়ন",
    page: 18,
    totalPages: 36,
    chapter: "৮. মেয়াদ ও সমাপ্তি",
    paraBefore:
      "এই চুক্তির প্রাথমিক মেয়াদ কার্যকর তারিখ হইতে ষাট (৬০) মাস।",
    highlight: (
      <>
        <span className="font-medium">৮.১</span>  এই চুক্তি{" "}
        <span className="underline decoration-flag-high decoration-2 underline-offset-2">
          স্বয়ংক্রিয়ভাবে নবায়ন
        </span>{" "}
        হইবে ধারাবাহিক ছত্রিশ (৩৬) মাসের মেয়াদে, যদি না কোন পক্ষ মেয়াদ শেষের নব্বই (৯০)
        দিন পূর্বে লিখিত নোটিশ প্রদান করে।
      </>
    ),
    paraAfter:
      "কোন নবায়িত মেয়াদের সময় সমাপ্তির জন্য §৮.৪ এর অগ্রিম-প্রস্থান ফি প্রযোজ্য হইবে।",
    verifyTitle: "নীরবতা ৩৬ মাসের লক-ইন হইয়া দাঁড়ায়।",
    verifyBody:
      "পূর্ববর্তী খসড়ায় উভয় পক্ষের নিশ্চিতকরণ প্রয়োজন ছিল। v3 ডিফল্ট উল্টাইয়া দিয়াছে — এখন কিছু না বলা মানে আরও তিন বছরের বাধ্যবাধকতা।",
    severity: "উচ্চ",
    confidence: "৯৯%",
    language: "বাংলা",
    cite: "§ ৮.১ vs. v2 §৮.১",
  },
  {
    id: "bn-11",
    tone: "med",
    section: "§ ১১",
    title: "§ ১১  ভাড়া বৃদ্ধি",
    sub: "সিপিআই সীমা অপসারিত",
    page: 24,
    totalPages: 36,
    chapter: "১১. ভাড়া ও পুনর্মূল্যায়ন",
    paraBefore:
      "বার্ষিক ভাড়া প্রতি বৎসর পুনর্মূল্যায়িত হইবে এবং ইজারা মেয়াদের মধ্যে যে কোন সময় সংশোধিত হইতে পারিবে।",
    highlight: (
      <>
        <span className="font-medium">১১.৩</span>  ভাড়া বৃদ্ধির{" "}
        <span className="underline decoration-flag-med decoration-2 underline-offset-2">
          কোন ঊর্ধ্বসীমা প্রযোজ্য হইবে না
        </span>
        , এবং পূর্ববর্তী সংস্করণে উল্লিখিত সিপিআই-সংযুক্ত সূচক অত্র বাতিল করা হইল।
      </>
    ),
    paraAfter:
      "সংশোধিত ভাড়া বন্দর কর্তৃপক্ষের বিজ্ঞপ্তির ত্রিশ (৩০) দিনের মধ্যে কার্যকর হইবে।",
    verifyTitle: "সিপিআই-সংযুক্ত ভাড়া সীমা অপসারিত।",
    verifyBody:
      "পূর্ববর্তী খসড়ায় ভাড়া বৃদ্ধি সিপিআই + ২% এ সীমিত ছিল। এই সংস্করণে সিপিআই সূত্র সম্পূর্ণ অপসারিত — বন্দর কর্তৃপক্ষ একতরফাভাবে ভাড়া নির্ধারণ করিতে পারিবে।",
    severity: "মাঝারি",
    confidence: "৯৪%",
    language: "বাংলা",
    cite: "§ ১১.৩ vs. v2 §১১.৩",
  },
  {
    id: "bn-15",
    tone: "med",
    section: "§ ১৫",
    title: "§ ১৫  প্রযোজ্য আইন",
    sub: "সালিশ কেন্দ্র ঢাকা → সিঙ্গাপুর",
    page: 29,
    totalPages: 36,
    chapter: "১৫. বিরোধ নিষ্পত্তি",
    paraBefore:
      "পক্ষদ্বয় স্বীকার করে যে এই চুক্তির কার্যক্রম প্রধানত বাংলাদেশের ভূখণ্ডে সম্পন্ন হয়।",
    highlight: (
      <>
        <span className="font-medium">১৫.২</span>  সালিশের আসন{" "}
        <span className="underline decoration-flag-med decoration-2 underline-offset-2">
          সিঙ্গাপুর
        </span>{" "}
        হইবে এবং কার্যক্রম SIAC বিধিমালা অনুসারে পরিচালিত হইবে।
      </>
    ),
    paraAfter:
      "সালিশের ভাষা ইংরেজি হইবে। ট্রাইব্যুনাল তিন জন সালিশকারী দ্বারা গঠিত হইবে।",
    verifyTitle: "সালিশ কেন্দ্র বিদেশে স্থানান্তরিত।",
    verifyBody:
      "পূর্বে BIAC এর অধীন ঢাকায় ছিল। SIAC ফাইলিং ফি ও ভ্রমণ ব্যয় ছোট বিরোধের ব্যয়ও উল্লেখযোগ্যভাবে বাড়াইয়া দেয়।",
    severity: "মাঝারি",
    confidence: "৯৮%",
    language: "বাংলা",
    cite: "§ ১৫.২ vs. v2 §১৫.২",
  },
  {
    id: "bn-19",
    tone: "low",
    section: "§ ১৯",
    title: "§ ১৯  পরিশোধের শর্ত",
    sub: "৪৫ দিন → ৭৫ দিন",
    page: 33,
    totalPages: 36,
    chapter: "১৯. চালান ও পরিশোধ",
    paraBefore:
      "ইজারাদার মাসিক ভিত্তিতে বন্দর সেবার জন্য চালান দাখিল করিবে।",
    highlight: (
      <>
        <span className="font-medium">১৯.২</span>  সকল অবিবাদিত চালান প্রাপ্তির{" "}
        <span className="underline decoration-flag-low decoration-2 underline-offset-2">
          পঁচাত্তর (৭৫) দিনের
        </span>{" "}
        মধ্যে পরিশোধ করা হইবে।
      </>
    ),
    paraAfter:
      "বিলম্বিত পরিশোধের জন্য বাংলাদেশ ব্যাংক হার + ১.৫% বার্ষিক সুদ প্রযোজ্য হইবে।",
    verifyTitle: "পরিশোধের মেয়াদ ৪৫ হইতে ৭৫ দিন হইয়াছে।",
    verifyBody:
      "পূর্ববর্তী খসড়ায় পরিশোধ ছিল Net 45। ইজারাদারের কার্যকরী মূলধনের উপর প্রভাব — CFO পর্যালোচনার জন্য চিহ্নিত।",
    severity: "নিম্ন",
    confidence: "১০০%",
    language: "বাংলা",
    cite: "§ ১৯.২ vs. v2 §১৯.২",
  },
  {
    id: "bn-22",
    tone: "high",
    section: "§ ২২",
    title: "§ ২২  তথ্য স্থানীয়করণ",
    sub: "সার্ভার সিঙ্গাপুরে সরানো হইয়াছে",
    page: 27,
    totalPages: 36,
    chapter: "২২. তথ্য সুরক্ষা ও গোপনীয়তা",
    paraBefore:
      "পক্ষদ্বয় স্বীকার করে যে বন্দর কার্যক্রম হইতে উৎপন্ন সকল অপারেশনাল উপাত্ত বাংলাদেশের ভূখণ্ডের মধ্যেই সংরক্ষিত থাকিবে।",
    highlight: (
      <>
        <span className="font-medium">২২.৪</span>  উপরোক্ত সত্ত্বেও, ইজারাদার তাহার
        নিজস্ব বিবেচনায় বন্দর সংক্রান্ত সকল টেলিমেট্রি, লজিস্টিক ও যাত্রী উপাত্ত{" "}
        <span className="underline decoration-flag-high decoration-2 underline-offset-2">
          সিঙ্গাপুরস্থ ক্লাউড অবকাঠামোতে
        </span>{" "}
        স্থানান্তর ও প্রক্রিয়াকরণ করিতে পারিবে, যাহা তথ্য সুরক্ষা আইন ২০২৩ ধারা ১৫ এর অধীন
        সংবেদনশীল অবকাঠামো উপাত্তের সীমান্ত-অতিক্রমণ নিষেধাজ্ঞা এড়াইয়া যায়।
      </>
    ),
    paraAfter:
      "কর্তৃপক্ষের সম্মতি অত্র চুক্তি স্বাক্ষরের মাধ্যমে দেওয়া বলিয়া গণ্য হইবে।",
    verifyTitle: "সার্বভৌম তথ্য স্থানীয়করণ শর্ত পাশ কাটানো হইয়াছে।",
    verifyBody:
      "তথ্য সুরক্ষা আইন ২০২৩ ধারা ১৫ অনুযায়ী বন্দর টেলিমেট্রি ‘সংবেদনশীল অবকাঠামো উপাত্ত’ — দেশ ত্যাগ নিষিদ্ধ। v3 ধারা ২২.৪ চুক্তির ভিতরেই সেই সম্মতি নিহিত করিয়া রাখিয়াছে, যাহা স্বাক্ষরকারীর অজান্তে ফৌজদারি দায় সৃষ্টি করিতে পারে। ফ্রন্টিয়ার LLM এই আইনী অসংগতি ধরিতে ব্যর্থ।",
    severity: "উচ্চ",
    confidence: "৯৮%",
    language: "বাংলা",
    cite: "তথ্য সুরক্ষা আইন ২০২৩ §১৫(২)",
    isNew: true,
  },
  {
    id: "bn-25",
    tone: "med",
    section: "§ ২৫",
    title: "§ ২৫  উপ-ইজারা অধিকার",
    sub: "নীরব অনুমোদন যুক্ত হইয়াছে",
    page: 31,
    totalPages: 36,
    chapter: "২৫. হস্তান্তর ও উপ-ইজারা",
    paraBefore:
      "ইজারাদার কর্তৃপক্ষের পূর্ব লিখিত সম্মতি ব্যতিরেকে অত্র চুক্তির কোন অংশ তৃতীয় পক্ষের নিকট হস্তান্তর করিতে পারিবে না।",
    highlight: (
      <>
        <span className="font-medium">২৫.৩</span>  তবে শর্ত থাকে যে, কর্তৃপক্ষ{" "}
        <span className="underline decoration-flag-med decoration-2 underline-offset-2">
          পয়তাল্লিশ (৪৫) কর্মদিবসের মধ্যে
        </span>{" "}
        উপ-ইজারা প্রস্তাবের বিষয়ে কোন লিখিত আপত্তি না জানাইলে উক্ত সম্মতি প্রদান করা হইয়াছে
        বলিয়া গণ্য হইবে।
      </>
    ),
    paraAfter:
      "উপ-ইজারাদারের কার্যকলাপের জন্য মূল ইজারাদার যৌথভাবে দায়ী থাকিবে।",
    verifyTitle: "নীরবতা-সম্মতি ধারা যুক্ত হইয়াছে।",
    verifyBody:
      "পূর্ববর্তী খসড়ায় হস্তান্তর সম্পূর্ণ কর্তৃপক্ষের সক্রিয় সম্মতি নির্ভর ছিল। v3 নীরবতাকে সম্মতি হিসাবে গণ্য করে — কর্তৃপক্ষের ৪৫ দিনের নিষ্ক্রিয়তা কার্যত অজানা তৃতীয় পক্ষের নিকট বন্দর সুবিধা হস্তান্তরের অনুমোদন হইয়া দাঁড়ায়।",
    severity: "মাঝারি",
    confidence: "৯৫%",
    language: "বাংলা",
    cite: "§ ২৫.৩ vs. v2 §২৫.৩",
  },
  {
    id: "bn-31",
    tone: "low",
    section: "§ ৩১",
    title: "§ ৩১  ভাষার প্রাধান্য",
    sub: "বিরোধে ইংরেজি সংস্করণ প্রাধান্য পাইবে",
    page: 35,
    totalPages: 36,
    chapter: "৩১. ভাষা ও ব্যাখ্যা",
    paraBefore:
      "এই চুক্তি বাংলা ও ইংরেজি উভয় ভাষায় সম্পাদিত ও স্বাক্ষরিত হইয়াছে।",
    highlight: (
      <>
        <span className="font-medium">৩১.২</span>  উভয় সংস্করণের মধ্যে কোন অসঙ্গতি
        দেখা দিলে,{" "}
        <span className="underline decoration-flag-low decoration-2 underline-offset-2">
          ইংরেজি সংস্করণ
        </span>{" "}
        চূড়ান্ত ও বাধ্যতামূলক বলিয়া গণ্য হইবে।
      </>
    ),
    paraAfter:
      "উভয় পক্ষ স্বীকার করে যে তাহারা উভয় সংস্করণ পাঠ ও বুঝিয়া স্বাক্ষর করিয়াছেন।",
    verifyTitle: "প্রাধান্য বাংলা হইতে ইংরেজিতে সরানো হইয়াছে।",
    verifyBody:
      "v2 বাংলা সংস্করণকে প্রাধান্য দিত, যাহা বাংলাদেশ কোর্টে গ্রহণযোগ্য। v3 প্রাধান্য ইংরেজিতে স্থানান্তর করিয়াছে — বাংলার সূক্ষ্ম আইনী পার্থক্যগুলি (যেমন ‘সম্মতি’ বনাম ‘consent’) কার্যত অগ্রাহ্য হইবে।",
    severity: "নিম্ন",
    confidence: "১০০%",
    language: "বাংলা",
    cite: "§ ৩১.২ vs. v2 §৩১.২",
  },
];

type DocKey = "en" | "bn";
const DOCS: Record<DocKey, { label: string; locale: string; meta: string; flags: Flag[] }> = {
  en: {
    label: "English draft",
    locale: "en-US",
    meta: "Meghna Holdings — Supply Agreement — 42 pp",
    flags: FLAGS_EN,
  },
  bn: {
    label: "বাংলা খসড়া",
    locale: "bn-BD",
    meta: "চট্টগ্রাম বন্দর — টার্মিনাল ইজারা — ৩৬ পৃষ্ঠা",
    flags: FLAGS_BN,
  },
};

type TabKey = "review" | "clauses" | "risks";

function ContractMockup() {
  const [docId, setDocId] = useState<DocKey>("en");
  const doc = DOCS[docId];
  const flags = doc.flags;
  const [tab, setTab] = useState<TabKey>("review");
  const [activeIds, setActiveIds] = useState<Record<DocKey, string>>({
    en: FLAGS_EN[0].id,
    bn: FLAGS_BN[0].id,
  });
  const activeId = activeIds[docId];
  const setActiveId = (id: string) =>
    setActiveIds((prev) => ({ ...prev, [docId]: id }));
  const [approvedByDoc, setApprovedByDoc] = useState<Record<DocKey, Set<string>>>({
    en: new Set(),
    bn: new Set(),
  });
  const approved = approvedByDoc[docId];
  const active = useMemo(
    () => flags.find((f) => f.id === activeId) ?? flags[0],
    [activeId, flags],
  );

  const toggleApprove = () => {
    setApprovedByDoc((prev) => {
      const next = new Set(prev[docId]);
      if (next.has(active.id)) next.delete(active.id);
      else next.add(active.id);
      return { ...prev, [docId]: next };
    });
  };

  const tabLabels: Record<TabKey, string> = {
    review: "Review",
    clauses: "Clauses",
    risks: "Risks",
  };
  const isApproved = approved.has(active.id);
  const announcement =
    tab === "risks"
      ? `Risks view. ${doc.label}. ${flags.length} risk clauses. ${approved.size} approved.`
      : `${tabLabels[tab]} view. ${doc.label}. Selected clause ${active.title}, severity ${active.severity}, on page ${active.page} of ${active.totalPages}. ${
          isApproved ? "Approved." : "Not yet approved."
        }`;

  return (
    <section id="product" className="relative pb-24 md:pb-32">
      <div className="max-w-[1240px] mx-auto px-6">
        <div
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        >
          {announcement}
        </div>
        <DocSwitcher docId={docId} setDocId={setDocId} />
        <div className="rounded-2xl bg-card border border-border shadow-[0_30px_80px_-30px_oklch(0.2_0.02_60/0.25)] overflow-hidden">
          {/* window chrome */}
          <div className="flex items-center gap-4 px-5 py-3 border-b border-border bg-paper-warm/60 flex-wrap">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-rule" />
              <span className="w-2.5 h-2.5 rounded-full bg-rule" />
              <span className="w-2.5 h-2.5 rounded-full bg-rule" />
            </div>
            <Tabs tab={tab} setTab={setTab} />
            <div className="ml-auto text-[12px] font-mono text-ink-muted hidden sm:block">
              {doc.meta} · {doc.locale}
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-ink-muted" aria-label="Live session">
              <span className="w-1.5 h-1.5 rounded-full bg-flag-low animate-pulse" />
              LIVE
            </span>
          </div>

          {tab === "review" && (
            <ReviewTab
              flags={flags}
              active={active}
              activeId={activeId}
              setActiveId={setActiveId}
              approved={approved}
              toggleApprove={toggleApprove}
            />
          )}
          {tab === "clauses" && (
            <ClausesTab
              flags={flags}
              activeId={activeId}
              setActiveId={setActiveId}
              onOpen={() => setTab("review")}
            />
          )}
          {tab === "risks" && <RisksTab flags={flags} />}
        </div>

        <p className="mt-6 text-center text-[13px] font-mono text-ink-muted">
          Switch documents above. Click any clause — or use ← → and Enter — to jump to the exact line.
        </p>
      </div>
    </section>
  );
}

function DocSwitcher({
  docId,
  setDocId,
}: {
  docId: DocKey;
  setDocId: (id: DocKey) => void;
}) {
  const order: DocKey[] = ["en", "bn"];
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const delta = e.key === "ArrowRight" ? 1 : -1;
      const next = order[(i + delta + order.length) % order.length];
      setDocId(next);
    }
  };
  return (
    <div
      role="tablist"
      aria-label="Choose sample document"
      className="mb-4 inline-flex items-center gap-1 rounded-full border border-border bg-paper-warm/60 p-1 text-[13px]"
    >
      {order.map((id, i) => {
        const active = docId === id;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => setDocId(id)}
            onKeyDown={(e) => onKey(e, i)}
            className={`px-3.5 py-1.5 rounded-full font-medium transition ${
              active
                ? "bg-ink text-paper shadow-sm"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {DOCS[id].label}
          </button>
        );
      })}
      <span className="pl-2 pr-3 text-[11px] font-mono text-ink-muted hidden sm:inline">
        {docId === "en" ? "en-US" : "bn-BD"} · same engine
      </span>
    </div>
  );
}

function Tabs({
  tab,
  setTab,
}: {
  tab: TabKey;
  setTab: (t: TabKey) => void;
}) {
  const order: TabKey[] = ["review", "clauses", "risks"];
  const labels: Record<TabKey, string> = {
    review: "Review",
    clauses: "Clauses",
    risks: "Risks",
  };
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const delta = e.key === "ArrowRight" ? 1 : -1;
      const nextIdx = (i + delta + order.length) % order.length;
      setTab(order[nextIdx]);
      refs.current[nextIdx]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setTab(order[0]);
      refs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = order.length - 1;
      setTab(order[last]);
      refs.current[last]?.focus();
    }
  };
  return (
    <div role="tablist" aria-label="Demo view" className="flex gap-1 text-[13px]">
      {order.map((key, i) => {
        const active = tab === key;
        return (
          <button
            key={key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            role="tab"
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => setTab(key)}
            onKeyDown={(e) => onKey(e, i)}
            className={`px-2.5 py-1 rounded-md font-medium transition ${
              active
                ? "bg-white shadow-sm text-ink"
                : "text-ink-muted hover:text-ink hover:bg-white/50"
            }`}
          >
            {labels[key]}
          </button>
        );
      })}
    </div>
  );
}

function ReviewTab({
  flags,
  active,
  activeId,
  setActiveId,
  approved,
  toggleApprove,
}: {
  flags: Flag[];
  active: Flag;
  activeId: string;
  setActiveId: (id: string) => void;
  approved: Set<string>;
  toggleApprove: () => void;
}) {
  const isApproved = approved.has(active.id);
  const toneBar =
    active.tone === "high"
      ? "bg-flag-high/20 border-flag-high"
      : active.tone === "med"
        ? "bg-flag-med/25 border-flag-med"
        : "bg-flag-low/20 border-flag-low";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr_320px]">
      {/* left rail — flagged changes */}
      <aside className="border-b lg:border-b-0 lg:border-r border-border p-5 bg-paper-warm/30">
        <div className="flex items-center justify-between mb-4">
          <span className="eyebrow !text-ink-muted">Flagged clauses</span>
          <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-vermillion text-accent-foreground">
            {flags.length}
          </span>
        </div>
        <ul className="space-y-1.5">
          {flags.map((f) => (
            <FlagRow
              key={f.id}
              tone={f.tone}
              title={f.title}
              sub={f.sub}
              active={activeId === f.id}
              approved={approved.has(f.id)}
              isNew={f.isNew}
              onClick={() => setActiveId(f.id)}
            />
          ))}
        </ul>
      </aside>

      {/* center — the PDF page */}
      <div className="p-6 md:p-10 bg-[oklch(0.99_0.005_85)] relative">
        <div
          key={active.id}
          className="mx-auto max-w-[520px] bg-white border border-border rounded-md p-8 shadow-sm relative animate-in fade-in duration-200"
        >
          <div className="text-[10px] font-mono text-ink-muted flex justify-between mb-6">
            <span>SUPPLY AGREEMENT · 2025</span>
            <span>
              p. {active.page} / {active.totalPages}
            </span>
          </div>
          <h4 className="font-display font-bold text-[15px] mb-3">{active.chapter}</h4>
          <div className="space-y-2 text-[11.5px] leading-[1.65] text-ink">
            <p>{active.paraBefore}</p>
            <p className="relative">
              <span
                className={`border-l-2 pl-2 pr-1 py-0.5 block rounded-sm ${toneBar}`}
              >
                {active.highlight}
              </span>
              <span className="absolute -right-2 top-0 translate-x-full hidden xl:block">
                <MarginFlag tone={active.tone} />
              </span>
            </p>
            <p className="opacity-70">{active.paraAfter}</p>
          </div>
        </div>

        <div className="absolute left-2 top-6 hidden md:flex flex-col gap-1 text-[9px] font-mono text-ink-muted">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className={i === 3 ? "text-vermillion font-medium" : ""}
            >
              {String(active.page - 3 + i).padStart(2, "0")}
            </span>
          ))}
        </div>
      </div>

      {/* right — verification panel */}
      <aside className="border-t lg:border-t-0 lg:border-l border-border p-5">
        <span className="eyebrow !text-ink-muted">Verify in the PDF</span>
        <h5 className="mt-3 font-display font-bold text-[17px] leading-tight">
          {active.verifyTitle}
        </h5>
        <p className="mt-2 text-[13px] text-ink-muted leading-relaxed">
          {active.verifyBody}
        </p>
        <div className="mt-5 rounded-lg border border-border divide-y divide-border text-[13px]">
          <Row
            k="Severity"
            v={<span className={severityClass(active.tone)}>{active.severity}</span>}
          />
          <Row k="Confidence" v={active.confidence} />
          <Row k="Location" v={`p. ${active.page} / ${active.totalPages}`} />
          <Row k="Language" v={active.language} />
          <Row k="Cite" v={active.cite} />
        </div>
        <button
          onClick={toggleApprove}
          className={`mt-5 w-full rounded-md py-2.5 text-[13px] font-medium transition ${
            isApproved
              ? "bg-flag-low text-white hover:brightness-110"
              : "bg-ink text-paper hover:brightness-110"
          }`}
        >
          {isApproved ? "✓ Redline approved" : "Approve redline"}
        </button>
        <div className="mt-2 text-[11px] font-mono text-ink-muted text-center">
          {approved.size} of {flags.length} approved
        </div>
      </aside>
    </div>
  );
}

function severityClass(t: Tone) {
  return t === "high"
    ? "text-flag-high font-medium"
    : t === "med"
      ? "text-flag-med font-medium"
      : "text-flag-low font-medium";
}

function ClausesTab({
  flags,
  activeId,
  setActiveId,
  onOpen,
}: {
  flags: Flag[];
  activeId: string;
  setActiveId: (id: string) => void;
  onOpen: () => void;
}) {
  return (
    <div className="p-6 md:p-8">
      <div className="flex items-baseline justify-between mb-5">
        <span className="eyebrow !text-ink-muted">All parsed clauses</span>
        <span className="text-[11px] font-mono text-ink-muted">
          {flags.length} risk clauses surfaced
        </span>
      </div>
      <div className="rounded-lg border border-border overflow-hidden">
        <div className="grid grid-cols-[80px_1fr_100px_80px_100px] text-[11px] font-mono uppercase tracking-widest text-ink-muted bg-paper-warm/50 px-4 py-2.5 border-b border-border">
          <div>Section</div>
          <div>Summary</div>
          <div>Language</div>
          <div>Page</div>
          <div className="text-right">Severity</div>
        </div>
        {flags.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              setActiveId(f.id);
              onOpen();
            }}
            className={`w-full grid grid-cols-[80px_1fr_100px_80px_100px] items-center px-4 py-3 text-left text-[13px] border-b border-border last:border-0 transition hover:bg-vermillion/5 ${
              activeId === f.id ? "bg-vermillion/10" : ""
            }`}
          >
            <div className="font-mono text-ink">{f.section}</div>
            <div className="text-ink flex items-center gap-2 min-w-0">
              <span className={`flag-dot ${dotClass(f.tone)} shrink-0`} />
              <span className="truncate">
                <span className="font-medium">{f.sub}</span>{" "}
                <span className="text-ink-muted hidden md:inline">— {f.verifyTitle}</span>
              </span>
            </div>
            <div className="text-ink-muted text-[12px]">{f.language}</div>
            <div className="text-ink-muted font-mono text-[12px]">p. {f.page}</div>
            <div className={`text-right text-[12px] ${severityClass(f.tone)}`}>
              {f.severity}
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={onOpen}
        className="mt-5 inline-flex items-center gap-2 text-[13px] text-vermillion hover:underline"
      >
        Open in review <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function RisksTab({ flags }: { flags: Flag[] }) {
  const counts = {
    high: flags.filter((f) => f.tone === "high").length,
    med: flags.filter((f) => f.tone === "med").length,
    low: flags.filter((f) => f.tone === "low").length,
  };
  const score = Math.min(
    99,
    Math.round(counts.high * 22 + counts.med * 10 + counts.low * 4),
  );
  return (
    <div className="p-6 md:p-8 grid md:grid-cols-[1fr_1fr] gap-6">
      <div className="rounded-xl border border-border p-6 bg-paper-warm/30">
        <span className="eyebrow !text-ink-muted">Aggregate risk score</span>
        <div className="mt-4 flex items-baseline gap-3">
          <div className="font-display font-bold text-[64px] leading-none text-vermillion">
            {score}
          </div>
          <div className="text-ink-muted text-sm">/ 100</div>
        </div>
        <p className="mt-3 text-[13px] text-ink-muted leading-relaxed">
          Weighted by clause severity, deviation from your firm's playbook, and market
          precedent. Score above 60 typically triggers partner review.
        </p>
        <div className="mt-6 space-y-2.5">
          <RiskBar label="Indemnity & liability" value={90} tone="high" />
          <RiskBar label="Term & renewal" value={75} tone="high" />
          <RiskBar label="Governing law & venue" value={55} tone="med" />
          <RiskBar label="Force majeure" value={48} tone="med" />
          <RiskBar label="Commercial terms" value={30} tone="low" />
        </div>
      </div>

      <div className="rounded-xl border border-border p-6">
        <span className="eyebrow !text-ink-muted">Distribution</span>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <SevTile n={counts.high} label="High" tone="high" />
          <SevTile n={counts.med} label="Medium" tone="med" />
          <SevTile n={counts.low} label="Low" tone="low" />
        </div>
        <div className="mt-6">
          <div className="text-[13px] font-medium text-ink">Executive summary</div>
          <ul className="mt-3 space-y-2 text-[13px] text-ink-muted leading-relaxed">
            <li className="flex gap-2">
              <span className="flag-dot bg-flag-high mt-1.5" />
              Cross-border indemnity has been silently shifted onto the buyer, cited to a
              2023 Bangla statute the base LLM did not surface.
            </li>
            <li className="flex gap-2">
              <span className="flag-dot bg-flag-high mt-1.5" />
              Auto-renewal default flipped: silence now equals another 12-month term.
            </li>
            <li className="flex gap-2">
              <span className="flag-dot bg-flag-med mt-1.5" />
              Governing law and arbitral seat both migrated offshore to Singapore.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function RiskBar({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: Tone;
}) {
  const fill =
    tone === "high" ? "bg-flag-high" : tone === "med" ? "bg-flag-med" : "bg-flag-low";
  return (
    <div>
      <div className="flex justify-between text-[12px] mb-1">
        <span className="text-ink">{label}</span>
        <span className="font-mono text-ink-muted">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-paper overflow-hidden">
        <div className={`h-full ${fill}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function SevTile({ n, label, tone }: { n: number; label: string; tone: Tone }) {
  const color =
    tone === "high"
      ? "text-flag-high"
      : tone === "med"
        ? "text-flag-med"
        : "text-flag-low";
  return (
    <div className="rounded-lg border border-border p-4 text-center bg-paper-warm/30">
      <div className={`font-display font-bold text-[32px] leading-none ${color}`}>
        {n}
      </div>
      <div className="mt-2 text-[11px] font-mono uppercase tracking-widest text-ink-muted">
        {label}
      </div>
    </div>
  );
}

function FlagRow({
  active,
  tone,
  title,
  sub,
  approved,
  isNew,
  onClick,
}: {
  active?: boolean;
  tone: Tone;
  title: string;
  sub: string;
  approved?: boolean;
  isNew?: boolean;
  onClick?: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        aria-current={active ? "true" : undefined}
        aria-label={`${title} — ${sub}${approved ? " (approved)" : ""}`}
        className={`w-full text-left rounded-md px-2.5 py-2 flex gap-2.5 items-start transition ${
          active
            ? "bg-vermillion/10 border border-vermillion/30"
            : "hover:bg-paper-warm border border-transparent"
        }`}
      >
        <span aria-hidden="true" className={`flag-dot ${dotClass(tone)} mt-1.5 shrink-0`} />
        <div className="min-w-0 flex-1">
          <div className="text-[12.5px] font-medium truncate flex items-center gap-1.5">
            {title}
            {approved && <Check className="w-3 h-3 text-flag-low shrink-0" />}
          </div>
          <div className="text-[11px] text-ink-muted truncate">{sub}</div>
        </div>
        {isNew && !approved && (
          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-vermillion text-accent-foreground self-center">
            NEW
          </span>
        )}
      </button>
    </li>
  );
}

function dotClass(tone: Tone) {
  return tone === "high" ? "bg-flag-high" : tone === "med" ? "bg-flag-med" : "bg-flag-low";
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <span className="text-ink-muted">{k}</span>
      <span>{v}</span>
    </div>
  );
}

function MarginFlag({ tone }: { tone: Tone }) {
  const bg =
    tone === "high" ? "bg-flag-high" : tone === "med" ? "bg-flag-med" : "bg-flag-low";
  const label = tone === "high" ? "High" : tone === "med" ? "Med" : "Low";
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest ${bg} text-accent-foreground px-1.5 py-0.5 rounded-sm`}
    >
      <FileWarning className="w-3 h-3" /> {label}
    </span>
  );
}

/* ---------- BLIND SPOTS ---------- */
function BlindSpots() {
  return (
    <section className="border-y border-border bg-paper-warm/40">
      <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-28 grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div>
          <span className="eyebrow">The blind spot</span>
          <h2 className="mt-4 font-display font-bold text-[36px] md:text-[46px] leading-[1.05]">
            Global LLMs are fluent tourists.
            <br />
            <span className="text-ink-muted">They don't read the fine print.</span>
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-[16px] leading-[1.65] text-ink-muted">
            The frontier models treat every non-English contract as a translation
            problem. Statutory phrasing gets flattened. Local case law disappears.
            Regional compliance risks are silently hallucinated away — and the risk
            summary looks clean.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <StatCard label="Regional clauses missed by frontier LLMs" value="1 in 3" note="Clauseny internal benchmark, 200 Bangla agreements" />
            <StatCard label="Median review time, senior associate" value="4.2 hrs" note="Reduced to under 2 min with Clauseny" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl bg-card border border-border p-5">
      <div className="font-display font-bold text-[34px] tracking-tight text-vermillion leading-none">{value}</div>
      <div className="mt-3 text-[13.5px] text-foreground font-medium">{label}</div>
      <div className="mt-1 text-[11.5px] text-ink-muted">{note}</div>
    </div>
  );
}

/* ---------- PILLARS ---------- */
function Pillars() {
  const items = [
    {
      icon: Globe2,
      eyebrow: "Native multilingual",
      title: "Reads Bangla the way it was written.",
      body:
        "Our engine parses regional legal syntax and statutory phrasing directly — no translation pivot, no lost nuance. First-mover moat starts with Bangla; Hindi, Bahasa, and Arabic on deck.",
    },
    {
      icon: FileWarning,
      eyebrow: "No black box",
      title: "Every flag pinned to the exact line.",
      body:
        "Color-coded highlights and margin annotations render directly onto the client's original PDF. Lawyers verify with their own eyes — no summary paragraphs, no trust-me answers.",
    },
    {
      icon: ServerCog,
      eyebrow: "On-premise by default",
      title: "Nothing ever leaves your building.",
      body:
        "Ships as a hardened Docker deployment onto your own hardware or private VPC. No third-party API calls, no vendor telemetry. Air-gapped installs supported.",
    },
  ];
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-24 md:py-32">
      <div className="max-w-[720px]">
        <span className="eyebrow">What makes it defensible</span>
        <h2 className="mt-4 font-display font-bold text-[38px] md:text-[52px] leading-[1.02]">
          Three moats the frontier
          <br /> can't cross on Day 1.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {items.map((it) => (
          <div key={it.eyebrow} className="bg-background p-8 md:p-9 flex flex-col">
            <it.icon className="w-6 h-6 text-vermillion" strokeWidth={1.6} />
            <div className="mt-6 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-muted">{it.eyebrow}</div>
            <h3 className="mt-3 font-display font-bold text-[22px] leading-[1.15]">{it.title}</h3>
            <p className="mt-3 text-[14px] leading-[1.6] text-ink-muted">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Drop the PDF", d: "English, Bangla, or mixed. Scanned, native, or a photographed page from opposing counsel." },
    { n: "02", t: "Native parse", d: "The engine tokenizes in the source script, resolves statutory references, and rebuilds the clause graph." },
    { n: "03", t: "Risk overlay", d: "Every shift in liability, obligation, or price is scored and pinned to the exact line on the original page." },
    { n: "04", t: "Redline & export", d: "Accept, reject, or comment. Export a clean redline or a signed audit trail for your MSA archive." },
  ];
  return (
    <section className="border-y border-border bg-paper-warm/40">
      <div className="max-w-[1240px] mx-auto px-6 py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-display font-bold text-[38px] md:text-[46px] leading-[1.05] max-w-[600px]">
              From messy PDF to signed redline in under two minutes.
            </h2>
          </div>
          <div className="font-mono text-[12px] text-ink-muted max-w-[240px]">
            Median run, 42-page bilingual supply agreement — 94 seconds end to end.
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="font-mono text-[12px] text-vermillion">{s.n}</div>
              <div className="rule-hair my-3" />
              <h4 className="font-display font-bold text-[19px]">{s.t}</h4>
              <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BENCHMARK ---------- */
function Benchmark() {
  return (
    <section id="benchmark" className="max-w-[1240px] mx-auto px-6 py-24 md:py-32">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">The stress test</span>
          <h2 className="mt-4 font-display font-bold text-[40px] md:text-[54px] leading-[1.02]">
            The same contract.
            <br />
            <span className="text-vermillion">Three very different answers.</span>
          </h2>
          <p className="mt-6 text-[16px] text-ink-muted leading-[1.65] max-w-[440px]">
            We ran a 47-page bilingual corporate agreement through ChatGPT, Claude, and
            Clauseny. Same prompt, same file. Only one caught the buried indemnity flip
            cited to a 2023 regional statute.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <BenchRow name="GPT-5" score="4 / 12" note="Missed §3.4 shift. Hallucinated §11 seat." bar={33} tone="med" />
          <BenchRow name="Claude Opus" score="6 / 12" note="Caught §7 renewal. Missed all Bangla statutory cites." bar={50} tone="med" />
          <BenchRow name="Clauseny" score="12 / 12" highlight note="All 12 high-risk clauses flagged with exact citations." bar={100} tone="high" />
        </div>
      </div>
    </section>
  );
}

function BenchRow({ name, score, note, bar, tone, highlight }: { name: string; score: string; note: string; bar: number; tone: "high" | "med"; highlight?: boolean }) {
  const fill = tone === "high" ? "bg-vermillion" : "bg-flag-med";
  return (
    <div className={`px-6 py-5 border-b border-border last:border-0 ${highlight ? "bg-vermillion/5" : ""}`}>
      <div className="flex items-baseline justify-between gap-4">
        <div className="font-display font-bold text-[18px]">{name}</div>
        <div className={`font-mono text-[13px] ${highlight ? "text-vermillion" : "text-ink-muted"}`}>{score}</div>
      </div>
      <div className="mt-3 h-1.5 rounded-full bg-paper-warm overflow-hidden">
        <div className={`h-full ${fill}`} style={{ width: `${bar}%` }} />
      </div>
      <div className="mt-2 text-[12.5px] text-ink-muted">{note}</div>
    </div>
  );
}

/* ---------- SECURITY ---------- */
function Security() {
  const rows = [
    "Runs entirely inside your VPC or on bare metal",
    "Zero outbound calls — air-gap installations supported",
    "SOC 2 controls, encrypted-at-rest model weights",
    "Per-clause access control and full audit trail",
    "No training on client documents. Ever.",
  ];
  return (
    <section id="security" className="border-y border-border bg-ink text-paper">
      <div className="max-w-[1240px] mx-auto px-6 py-24 md:py-32 grid md:grid-cols-[1.2fr_1fr] gap-14 items-start">
        <div>
          <span className="eyebrow !text-vermillion-soft">Security posture</span>
          <h2 className="mt-4 font-display font-bold text-[40px] md:text-[54px] leading-[1.02] text-paper">
            Your data never
            <br /> leaves the building.
          </h2>
          <p className="mt-6 text-[16px] text-paper/70 leading-[1.65] max-w-[500px]">
            Law firms and corporate legal teams are pathologically protective of client
            documents — and they should be. Clauseny is designed so the vendor is never in
            the loop.
          </p>
        </div>
        <ul className="space-y-3">
          {rows.map((r) => (
            <li key={r} className="flex items-start gap-3 border-b border-white/10 pb-3">
              <ShieldCheck className="w-5 h-5 text-vermillion-soft mt-0.5 shrink-0" strokeWidth={1.6} />
              <span className="text-[15px] text-paper/90">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  const tiers = [
    {
      name: "Firm",
      price: "Custom",
      tag: "For boutique legal teams",
      features: ["Up to 25 seats", "Managed private cloud", "Bangla + English", "Standard SLA"],
    },
    {
      name: "Enterprise",
      price: "On request",
      tag: "For corporate legal & GCs",
      features: ["Unlimited seats", "On-prem Docker deployment", "All supported languages", "24/7 SLA + dedicated CE"],
      featured: true,
    },
    {
      name: "Sovereign",
      price: "Contact",
      tag: "For regulators & sovereigns",
      features: ["Air-gapped install", "Custom statutory corpus", "White-label UI", "Source escrow"],
    },
  ];
  return (
    <section id="pricing" className="max-w-[1240px] mx-auto px-6 py-24 md:py-32">
      <div className="max-w-[720px]">
        <span className="eyebrow">Pricing</span>
        <h2 className="mt-4 font-display font-bold text-[38px] md:text-[52px] leading-[1.02]">
          Priced against the associate hours it replaces.
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-5">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border p-7 flex flex-col ${
              t.featured
                ? "bg-ink text-paper border-ink shadow-[0_20px_50px_-20px_oklch(0.2_0.02_60/0.5)]"
                : "bg-card border-border"
            }`}
          >
            <div className="flex items-baseline justify-between">
              <div className="font-display font-bold text-[22px]">{t.name}</div>
              {t.featured && (
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-vermillion text-accent-foreground">
                  Most teams
                </span>
              )}
            </div>
            <div className={`mt-1 text-[13px] ${t.featured ? "text-paper/60" : "text-ink-muted"}`}>{t.tag}</div>
            <div className="mt-6 font-display font-bold text-[36px] leading-none">{t.price}</div>
            <ul className={`mt-6 space-y-2.5 text-[14px] ${t.featured ? "text-paper/85" : "text-foreground"}`}>
              {t.features.map((f) => (
                <li key={f} className="flex gap-2 items-start">
                  <Check className="w-4 h-4 mt-0.5 text-vermillion shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 text-[14px] font-medium transition ${
                t.featured
                  ? "bg-vermillion text-accent-foreground hover:brightness-110"
                  : "bg-ink text-paper hover:brightness-110"
              }`}
            >
              Book a scoping call <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="demo" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-vermillion/20 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-[1240px] mx-auto px-6 py-24 md:py-32 relative">
        <div className="max-w-[720px]">
          <span className="eyebrow">Get on the pilot list</span>
          <h2 className="mt-4 font-display font-bold text-[46px] md:text-[64px] leading-[1.0]">
            Bring us the messiest contract on your desk.
          </h2>
          <p className="mt-6 text-[17px] text-ink-muted max-w-[560px] leading-[1.6]">
            We'll run it through Clauseny, ChatGPT, and Claude — and send you the
            side-by-side within 48 hours. No NDA required for the demo file.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href="https://calendar.app.google/pZmcMNmFH1xEMozTA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-[15px] font-medium hover:brightness-110"
            >
              <CalendarClock className="w-4 h-4" />
              Book a 30-minute walkthrough
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#benchmark"
              className="text-[15px] text-ink-muted hover:text-foreground underline underline-offset-4 decoration-vermillion"
            >
              See the benchmark first
            </a>
          </div>
          <p className="mt-4 text-[12px] font-mono text-ink-muted">
            Pick a slot — the calendar opens in a new tab. Founders answer directly, no BDR gauntlet.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1240px] mx-auto px-6 py-12 flex flex-wrap gap-6 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="font-display font-bold text-[17px]">Clauseny</span>
          <span className="text-[13px] text-ink-muted ml-3">Sovereign contract intelligence.</span>
        </div>
        <div className="text-[12.5px] text-ink-muted font-mono">
          © {new Date().getFullYear()} Clauseny Labs · Dhaka · San Francisco
        </div>
      </div>
    </footer>
  );
}
