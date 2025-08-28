"use client";

import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TeamMember {
  name: string;
  affiliation: string;
  role: string;
}

export function TeamList() {
  const { t } = useLanguage();
  
  const team: TeamMember[] = [
    {
      name: t("internacionalizacao.team.members.rafael_martins.name"),
      affiliation: t("internacionalizacao.team.members.rafael_martins.affiliation"),
      role: t("internacionalizacao.team.members.rafael_martins.role")
    },
    {
      name: t("internacionalizacao.team.members.david_tamez.name"),
      affiliation: t("internacionalizacao.team.members.david_tamez.affiliation"),
      role: t("internacionalizacao.team.members.david_tamez.role")
    },
    {
      name: t("internacionalizacao.team.members.sean_white.name"),
      affiliation: t("internacionalizacao.team.members.sean_white.affiliation"),
      role: t("internacionalizacao.team.members.sean_white.role")
    }
  ];

  function MemberDisplay({ member }: { member: TeamMember }) {
    return (
      <div className="bg-white p-8 rounded-lg border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-neutral-600" />
          </div>
          <h3 className="text-xl font-semibold text-neutral-800 mb-3">{member.name}</h3>
          <p className="text-neutral-600 text-sm mb-2 font-medium">{member.role}</p>
          <p className="text-neutral-600 leading-relaxed">{member.affiliation}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {team.map((member) => (
        <MemberDisplay key={member.name} member={member} />
      ))}
    </div>
  );
}
