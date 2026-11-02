import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <Content />;
}

function Content() {
  const t = useTranslations("Home");
  return (
    <main style={{ fontFamily: "system-ui", padding: 32 }}>
      <h1>{t("title")}</h1>
      <p>{t("subtitle")}</p>
    </main>
  );
}
