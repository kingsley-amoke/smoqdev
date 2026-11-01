import { notFound } from "next/navigation";
import { apps } from "@/app/data/app";
import ImgifyPolicy from "@/app/policies/imgify";
import ExpenseTrackerPrivacyPolicy from "@/app/policies/expense-tracker";
import PaycheckCalculatorPrivacyPolicy from "@/app/policies/expense-tracker";
import NewluckPrivacy from "@/app/policies/newluck";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app } = await params;
  const appData = apps[app as keyof typeof apps];

  if (!appData) return {};

  return {
    title: `${appData.name} Privacy Policy | Official`,
    description: `Read the official privacy policy for ${appData.name}. Learn how your data is handled securely and transparently.`,

    openGraph: {
      title: `${appData.name} Privacy Policy`,
      description: `Official privacy policy for ${appData.name}`,
      url: `https://policies.yourbrand.com/${app}/privacy`,
      siteName: "Your Brand Policies",
      type: "website",
    },

    alternates: {
      canonical: `https://policies.yourbrand.com/${app}/privacy`,
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app: appKey } = await params;

  const app = apps[appKey as keyof typeof apps];

  if (!app) return notFound();

  const lastUpdated = new Date().toDateString();

  if (appKey == "imgify") {
    return <ImgifyPolicy appName={app.name} lastUpdated={lastUpdated} />;
  }

  if (appKey == "paycheck") {
    return (
      <PaycheckCalculatorPrivacyPolicy
        appName={app.name}
        lastUpdated={lastUpdated}
      />
    );
  }

  if (appKey == "expense") {
    return (
      <ExpenseTrackerPrivacyPolicy
        appName={app.name}
        lastUpdated={lastUpdated}
      />
    );
  }
  if (appKey == "newluck") {
    return <NewluckPrivacy appName={app.name} lastUpdated={lastUpdated} />;
  }

  return notFound();
}
