import { notFound } from "next/navigation";
import { ContactBlock } from "@/templates/08-yogacentric-studio/blocks/contact";
import { TrainerDetailBlock } from "@/templates/08-yogacentric-studio/blocks/trainer-detail";
import { getTrainerProfile, trainerProfiles } from "@/templates/08-yogacentric-studio/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(trainerProfiles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const profile = getTrainerProfile(slug);
  if (!profile) return { title: "Trainer | YogaCentric" };
  return {
    title: `${profile.name} | YogaCentric`,
    description: profile.bio,
  };
}

export default async function TrainerProfilePage({ params }: Props) {
  const { slug } = await params;
  const profile = getTrainerProfile(slug);
  if (!profile) notFound();

  return (
    <>
      <TrainerDetailBlock profile={profile} />
      <ContactBlock />
    </>
  );
}
