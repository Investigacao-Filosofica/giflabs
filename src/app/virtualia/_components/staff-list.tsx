"use client"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface StaffMember {
  role: string
  name: string
  affiliation: string
  lattes?: string | null
}

export function StaffList() {
  const { t } = useLanguage();
  
  // Criar arrays baseados nas traduções
  const staff: StaffMember[] = [
    { 
      role: t("virtualia.team.roles.magazine_editor"), 
      name: t("virtualia.team.staff.rodrigo_cid.name"), 
      affiliation: t("virtualia.team.staff.rodrigo_cid.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.academic_editor"), 
      name: t("virtualia.team.staff.rafael_martins.name"), 
      affiliation: t("virtualia.team.staff.rafael_martins.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.general_secretary"), 
      name: t("virtualia.team.staff.roseline_crippa.name"), 
      affiliation: t("virtualia.team.staff.roseline_crippa.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.librarian"), 
      name: t("virtualia.team.staff.nanci_nobrega.name"), 
      affiliation: t("virtualia.team.staff.nanci_nobrega.affiliation") 
    },
    {
      role: t("virtualia.team.roles.designer"),
      name: t("virtualia.team.staff.luan_martins.name"),
      affiliation: t("virtualia.team.staff.luan_martins.affiliation"),
      lattes: "https://lattes.cnpq.br/6955551251166364",
    },
    { 
      role: t("virtualia.team.roles.former_designer"), 
      name: t("virtualia.team.staff.rafaela_nobrega.name"), 
      affiliation: t("virtualia.team.staff.rafaela_nobrega.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.technologic_reviewer"), 
      name: t("virtualia.team.staff.thiago_cotting.name"), 
      affiliation: t("virtualia.team.staff.thiago_cotting.affiliation") 
    },
  ]

  const editorialBoard: StaffMember[] = [
    { 
      role: t("virtualia.team.roles.editorial_board"), 
      name: t("virtualia.team.staff.rodrigo_cid.name"), 
      affiliation: t("virtualia.team.staff.rodrigo_cid.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.editorial_board"), 
      name: t("virtualia.team.staff.rafael_martins.name"), 
      affiliation: t("virtualia.team.staff.rafael_martins.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.editorial_board"), 
      name: t("virtualia.team.editorial_board_members.daniel_schiochett.name"), 
      affiliation: t("virtualia.team.editorial_board_members.daniel_schiochett.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.editorial_board"), 
      name: t("virtualia.team.editorial_board_members.juliano_carmo.name"), 
      affiliation: t("virtualia.team.editorial_board_members.juliano_carmo.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.editorial_board"), 
      name: t("virtualia.team.editorial_board_members.david_tamez.name"), 
      affiliation: t("virtualia.team.editorial_board_members.david_tamez.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.editorial_board"), 
      name: t("virtualia.team.editorial_board_members.daniel_farinha.name"), 
      affiliation: t("virtualia.team.editorial_board_members.daniel_farinha.affiliation") 
    },
  ]

  const permanentWriters: StaffMember[] = [
    { 
      role: t("virtualia.team.roles.literature"), 
      name: t("virtualia.team.writers.emanuel_souza.name"), 
      affiliation: t("virtualia.team.writers.emanuel_souza.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.art_culture"), 
      name: t("virtualia.team.writers.van_ameneyro.name"), 
      affiliation: t("virtualia.team.writers.van_ameneyro.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.urban_street_art"), 
      name: t("virtualia.team.writers.katia_melo.name"), 
      affiliation: t("virtualia.team.writers.katia_melo.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.technology"), 
      name: t("virtualia.team.writers.oliver_reinis.name"), 
      affiliation: t("virtualia.team.writers.oliver_reinis.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.education"), 
      name: t("virtualia.team.writers.manuella_silva.name"), 
      affiliation: t("virtualia.team.writers.manuella_silva.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.music"), 
      name: t("virtualia.team.writers.vessy_mink.name"), 
      affiliation: t("virtualia.team.writers.vessy_mink.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.long_wei_nft"), 
      name: t("virtualia.team.writers.valerie_geerken.name"), 
      affiliation: t("virtualia.team.writers.valerie_geerken.affiliation") 
    },
    { 
      role: t("virtualia.team.roles.culture_social_economy"), 
      name: t("virtualia.team.writers.edvam_filho.name"), 
      affiliation: t("virtualia.team.writers.edvam_filho.affiliation") 
    },
  ]

  function MemberDisplay({ member }: { member: StaffMember }) {
    return (
      <div className="bg-transparent group">
        <div className="flex items-start space-x-4">
          <div>
            <p className="font-semibold text-neutral-800">{member.name}</p>
            <p className="text-neutral-600 text-sm capitalize">{member.role.toLowerCase()}</p>
            <p className="text-neutral-600 text-sm">{member.affiliation}</p>
          </div>
          {member.lattes && (
            <a
              href={member.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-800 transition-colors ml-auto shrink-0"
              aria-label={`Currículo Lattes de ${member.name}`}
            >
              <GraduationCap size={20} />
            </a>
          )}
        </div>
      </div>
    )
  }

  function Section({ title, members }: { title: string; members: StaffMember[] }) {
    return (
      <div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-8 text-center">{title}</h3>
        <div className="flex flex-wrap justify-left gap-9 max-w-7xl mx-auto">
          {members.map(member => (
            <div key={member.name} className="w-full sm:w-64 lg:w-60">
              <MemberDisplay member={member} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  return (
    <div className="space-y-20">
      <Section title={t("virtualia.team.main_team")} members={staff} />
      <Section title={t("virtualia.team.editorial_board")} members={editorialBoard} />
      <Section title={t("virtualia.team.permanent_writers")} members={permanentWriters} />
    </div>
  )
} 