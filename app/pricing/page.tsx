"use client";

import { useEffect, useMemo, useState } from "react";
import { IoClose, IoSparklesOutline } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import PaymentUi from "../components/cus_stripe_checkout";
import StartButton from "../components/StartButton";
import initializeCurrency from "@/services/currency.service";

interface Plan {
  id?: string;
  planId?: string;
  planName: string;
  planDescription?: string;
  price: number;
  currency: string;
  billingCycle: string;
  totalNoOfResponses: number;
  totalNoOfUsers: number;
  totalNoOfSurveys?: number;
  totalNoOfQuestions?: number;
  status?: string;
  config?: Record<string, any>;
}

const PLAN_ORDER: Record<string, number> = {
  Starter: 1,
  Essentials: 2,
  Pro: 3,
  Elite: 4,
};

const POPULAR_PLAN = "Essentials";

const formatNumber = (value: any): string => {
  if (value === -1 || value === "-1") {
    return "Unlimited";
  }
  if (value === null || value === undefined || value === "") {
    return "0";
  }
  return Number(value).toLocaleString();
};

const getCurrencySymbol = (currency: string): string => {
  const normalizedCurrency = String(currency || "").toUpperCase();
  switch (normalizedCurrency) {
    case "INR":
      return "₹";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "USD":
    default:
      return "$";
  }
};

const formatBillingCycle = (cycle: string): string => {
  if (!cycle) return "";
  const normalized = String(cycle).toLowerCase();
  switch (normalized) {
    case "monthly":
      return "month";
    case "yearly":
    case "annual":
      return "year";
    case "quarterly":
      return "quarter";
    default:
      return normalized;
  }
};

const getPlanDescription = (planName: string): string => {
  const descriptions: Record<string, string> = {
    Starter: "Getting started with Saja",
    Essentials: "For individuals and small projects",
    Pro: "For growing teams and advanced research",
    Elite: "For teams with advanced requirements",
  };
  return descriptions[planName] || "Choose the plan that fits your research needs";
};

const getPlanFeatures = (plan: Plan): string[] => {
  const config = plan?.config || {};
  const features: string[] = [];

  if (config.surveyScope?.buildWithAI) features.push("AI Survey Creation");
  if (config.surveyScope?.downloadQuestionnaireDoc) features.push("Upload Questionnaire");
  if (config.surveyScope?.createSurvey) features.push("Custom Survey Builder");

  if (config.dataCollection?.qr) features.push("QR Code Collection");
  if (config.dataCollection?.email) features.push("Email Collection");
  if (config.dataCollection?.weblink) features.push("Live Survey Web Link");
  if (config.dataCollection?.cusEmail) features.push("Custom Email Templates");
  if (config.dataCollection?.bulkEmail) features.push("Bulk Email Collection");
  if (config.dataCollection?.prWeblink) features.push("Personalized Links");
  if (config.dataCollection?.otr) features.push("One-Time Response Control");

  if (config.logicTypes?.skipLogic) features.push("Skip Logic");
  if (config.logicTypes?.delayBranching) features.push("Delay Branching");
  if (config.logicTypes?.questionDisplay) features.push("Question Display Logic");
  if (config.logicTypes?.optionDisplay) features.push("Option Display Logic");
  if (config.logicTypes?.carryForward) features.push("Carry Forward Logic");
  if (config.logicTypes?.priorityLogic) features.push("Priority Logic");

  if (config.piping?.ques) features.push("Question Piping");
  if (config.piping?.eData) features.push("Embedded Data Piping");
  if (config.piping?.loop) features.push("Looping");

  if (config.designThemes?.logo) features.push("Custom Logo");
  if (config.designThemes?.theme) features.push("Survey Themes");
  if (config.designThemes?.cusTheme) features.push("Custom Themes");
  if (config.designThemes?.fontTheme) features.push("Custom Fonts");
  if (config.designThemes?.colors) features.push("Custom Colors");

  if (config.surveyControlSettings?.addsection) features.push("Survey Sections");
  if (config.surveyControlSettings?.brandom) features.push("Block Randomization");
  if (config.surveyControlSettings?.arandom) features.push("Answer Randomization");
  if (config.surveyControlSettings?.language) features.push("Multi-Language Support");
  if (config.surveyControlSettings?.save_cont_opt) features.push("Save & Continue");

  if (config.analyticsInsights?.rtrc) features.push("Real-Time Response Collection");
  if (config.analyticsInsights?.rtd) features.push("Real-Time Dashboard");
  if (config.analyticsInsights?.sem_analysis) features.push("AI Sentiment Analysis");
  if (config.analyticsInsights?.basic_filter) features.push("Basic Filters");
  if (config.analyticsInsights?.adv_filter) features.push("Advanced Filters");
  if (config.analyticsInsights?.xlsx) features.push("Excel Export");
  if (config.analyticsInsights?.csvReport) features.push("CSV Export");
  if (config.analyticsInsights?.spss) features.push("SPSS Export");
  if (config.analyticsInsights?.cus_graph) features.push("Custom Graph Themes");
  if (config.analyticsInsights?.mult_grpah_opt) features.push("Multiple Graph Options");

  if (config.collaborationSharing?.collaboration) features.push("Survey Collaboration");
  if (config.collaborationSharing?.multiUserAcess) features.push("Multi-User Access");
  if (config.collaborationSharing?.role_based_permission) features.push("Role-Based Permissions");
  if (config.collaborationSharing?.audit_logs) features.push("Audit Logs");

  if (config.security?.GDPR) features.push("GDPR Support");

  return [...new Set(features)];
};

const CheckIcon = () => (
  <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#E9F7FC] text-[#0095DA]">
    <MdCheck size={13} />
  </span>
);

interface PlanCardProps {
  plan: Plan;
  selectedPlan: Plan | null;
  onSelectPlan: (plan: Plan) => void;
  currencyDetails: any;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, selectedPlan, onSelectPlan, currencyDetails }) => {
  const [showRemaining, setShowRemaining] = useState(false);
  const isPopular = plan?.planName === POPULAR_PLAN;
  const isSelected = selectedPlan?.planName === plan?.planName;
  const features = getPlanFeatures(plan);
  const visibleFeatures = features.slice(0, 8);
  const remainingFeatures = Math.max(features.length - visibleFeatures.length, 0);
  const currencySymbol = currencyDetails?.currencySymbol || getCurrencySymbol(plan?.currency);
  const billingCycle = formatBillingCycle(plan?.billingCycle);

  const handlePlanSelect = () => {
    onSelectPlan(plan);
  };

  return (
    <div
      className={`
        relative flex h-full min-h-120 flex-col rounded-2xl border bg-white p-6
        transition-all duration-300
        ${isPopular || isSelected
          ? `border-[#0095DA] shadow-[0_8px_30px_rgba(0,149,218,0.12)]`
          : `border-gray-200 hover:-translate-y-1 hover:border-[#B8DDEB] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]`
        }
        ${isSelected ? "ring-2 ring-[#0095DA] ring-offset-2" : ""}
      `}
    >
      {isPopular && !isSelected && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#7C3AED] px-4 py-1 text-xs font-semibold text-white shadow-lg">
          Popular
        </div>
      )}

      <div className="mb-3">
        <h3 className="text-xl font-bold text-[#1A2A3A]">{plan?.planName}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {plan?.planDescription || getPlanDescription(plan?.planName)}
        </p>
      </div>

      <div className="mb-4">
         <div className="flex items-baseline gap-1">
                    <span className="text-[32px] font-bold tracking-tight text-[#1A2A3A]">
                        {currencySymbol}
                        {Number(plan?.price * currencyDetails?.exchangeRate || plan?.price || 0).toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">
                        {billingCycle ? `per month` : ""}
                    </span>
                </div>
                <div>
                    <p className="text-sm text-sky-500">Billed annually for {currencySymbol}{12 * (plan?.price * currencyDetails?.exchangeRate as any|| plan?.price).toFixed(2)}</p>
                </div>
      </div>

      <div className="mb-4 space-y-2 border-t border-gray-100 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Responses per year</span>
          <span className="font-medium text-[#1A2A3A]">
            {formatNumber(plan?.totalNoOfResponses)}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Users</span>
          <span className="font-medium text-[#1A2A3A]">
            {plan?.totalNoOfUsers === -1
              ? "Unlimited"
              : `${plan?.totalNoOfUsers || 0} ${Number(plan?.totalNoOfUsers) === 1 ? "user" : "users"}`}
          </span>
        </div>
      </div>

      <div className="mb-5 flex justify-center">
        <button
          type="button"
          onClick={handlePlanSelect}
          className={`whitespace-nowrap`}
        >
          <StartButton buttonText={"Select Plan"}></StartButton>
        </button>
      </div>

      <div className="border-t border-gray-100 pt-4 mt-auto">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-gray-400">
          Key features
        </p>
        <ul className={`flex flex-col gap-2.5 ${showRemaining ? "max-h-56 overflow-y-scroll" : ""}`}>
          {!showRemaining &&
            visibleFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-gray-600">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
          {showRemaining &&
            features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-gray-600">
                <CheckIcon />
                <span>{feature}</span>
              </li>
            ))}
        </ul>
        {remainingFeatures > 0 && (
          <button
            className="mt-3 text-xs font-medium text-[#0095DA] hover:text-[#007FBC] transition-colors"
            onClick={() => setShowRemaining((prev) => !prev)}
          >
            {!showRemaining ? `+ ${remainingFeatures} more features` : `− Hide features`}
          </button>
        )}
      </div>
    </div>
  );
};

interface PlanCardsProps {
  plans: Plan[];
  selectedPlan: Plan | null;
  onSelectPlan: (plan: Plan) => void;
  currencyDetails: any;
}

const PlanCards: React.FC<PlanCardsProps> = ({ plans, selectedPlan, onSelectPlan, currencyDetails }) => {
  const sortedPlans = useMemo(() => {
    return [...plans].sort(
      (a, b) => (PLAN_ORDER[a?.planName] || 99) - (PLAN_ORDER[b?.planName] || 99)
    );
  }, [plans]);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {sortedPlans.map((plan) => (
        <div key={plan?.id || plan?.planId || plan?.planName} className="flex-1 min-w-[200px] max-w-[280px]">
          <PlanCard
            plan={plan}
            selectedPlan={selectedPlan}
            onSelectPlan={onSelectPlan}
            currencyDetails={currencyDetails}
          />
        </div>
      ))}
    </div>
  );
};

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [currencyDetails, setCurrencyDetails] = useState(null)

  const getAllPlans = async () => {
    try {
      setLoading(true);
      setError("");
      const cnvCurrency = await initializeCurrency();
      setCurrencyDetails(cnvCurrency)
      const res = await fetch("https://api.saja.biz/saja/api/survey-plans/get-all", {
        method: "GET",
        headers: {
          "Content-Type": "Application/json"
        }
      }).then(r => r.json());

      const fetchedPlans = res?.data?.filter((p: Plan) => p.status !== "Deleted") || [];
      setPlans(Array.isArray(fetchedPlans) ? fetchedPlans : []);
    } catch (error: any) {
      console.error("Error fetching plans:", error);
      setPlans([]);
      setError("Unable to load pricing plans. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPlans();
  }, []);

  const handlePlanSelect = (plan: Plan) => {
    window.open("https://insights.saja.biz/signup", "_blank")
    // setSelectedPlan(plan);
    // setShowPayment(true);
  };

  const handleClosePayment = () => {
    setShowPayment(false);
  };

  return (
    <div className="h-full bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-4xl font-bold tracking-tight text-[#1A2A3A] sm:text-5xl">
              Choose Your Plan
            </h1>
            <IoSparklesOutline size={30} className="text-[#F9BE00]" />
          </div>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Select the plan that best fits your research needs. Upgrade anytime as your requirements grow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {loading && (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#0095DA]" />
              <p className="mt-4 text-sm text-gray-500">Loading plans...</p>
            </div>
          </div>
        )}

        {!loading && error && (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="max-w-md rounded-xl border border-red-200 bg-red-50 p-6 text-center">
              <p className="text-sm text-red-600">{error}</p>
              <button
                type="button"
                onClick={getAllPlans}
                className="mt-4 rounded-lg bg-[#0095DA] px-5 py-2 text-sm font-semibold text-white hover:bg-[#007FBC]"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {!loading && !error && plans.length === 0 && (
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-gray-500">No plans are available at the moment.</p>
            </div>
          </div>
        )}

        {!loading && !error && plans.length > 0 && (
          <>
            <PlanCards
              plans={plans}
              selectedPlan={selectedPlan}
              onSelectPlan={handlePlanSelect}
              currencyDetails={currencyDetails}
            />

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-400">
                All plans include secure survey infrastructure. Need help choosing?
                <a href="/#contact" className="text-[#0095DA] hover:underline ml-1">
                  Contact our team
                </a>
              </p>
            </div>
          </>
        )}
      </div>

      {/* Payment Modal */}
      {/* {showPayment && selectedPlan && (
        <div className="fixed inset-0 h-screen w-screen z-50">
          <PaymentUi
            isOpen={showPayment}
            onClose={handleClosePayment}
            selectedPlan={selectedPlan}
            userEmail="" // You can pass user email from auth context if available
          />
        </div>
      )} */}
    </div>
  );
}