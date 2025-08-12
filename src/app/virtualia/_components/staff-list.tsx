"use client"
import { GraduationCap } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

interface StaffMember {
  role: string
  name: string
  affiliation: string
  lattes?: string | null
}

const staff: StaffMember[] = [
  { role: "MAGAZINE EDITOR", name: "Prof. Rodrigo Reis Lastra Cid, PhD", affiliation: "UNIFAP" },
  { role: "ACADEMIC EDITOR", name: "Prof. Rafael Martins, PhD", affiliation: "UNIMAX & UNIFAJ" },
  { role: "MAGAZINE & JOURNAL GENERAL SECRETARY", name: "Roseline Crippa", affiliation: "UNAR" },
  { role: "LIBRARIAN", name: "Nanci Nóbrega, PhD", affiliation: "UFF" },
  {
    role: "DESIGNER",
    name: "Luan Lopes Martins",
    affiliation: "UFOP",
    lattes: "https://lattes.cnpq.br/6955551251166364",
  },
  { role: "Former Designer", name: "Rafaela Nóbrega, MA", affiliation: "ESDI/UERJ" },
  { role: "TECHNOLOGIC REVIEWER", name: "Thiago Cotting", affiliation: "Autoscriber" },
]

const editorialBoard: StaffMember[] = [
  { role: "Editorial Board", name: "Prof. Rodrigo Reis Lastra Cid, PhD", affiliation: "UNIFAP" },
  { role: "Editorial Board", name: "Prof. Rafael Martins, PhD", affiliation: "UNIMAX & UNIFAJ" },
  { role: "Editorial Board", name: "Prof. Daniel Schiochett, PhD", affiliation: "UFMA" },
  { role: "Editorial Board", name: "Prof. Juliano do Carmo, PhD", affiliation: "UFPel" },
  { role: "Editorial Board", name: "Prof. Dr. David Tamez, PhD", affiliation: "University of Kansas" },
  { role: "Editorial Board", name: "Daniel Filipe G. Farinha, PhD", affiliation: "Un. of Saint Joseph - Macau" },
]

const permanentWriters: StaffMember[] = [
  { role: "Literature", name: "Emanuel Souza, MSC", affiliation: "UFF" },
  { role: "Art & Culture", name: "Van Ameneyro, BA", affiliation: "Universidad de Guadalajara" },
  { role: "Urban & Street Art", name: "Katia Suzue Melo, BEd", affiliation: "UNG" },
  { role: "Technology", name: "Oliver Reinis, BA", affiliation: "FDSBC" },
  { role: "Education", name: "Manuella de Godoy e Silva, BA", affiliation: "UFPE" },
  { role: "Music", name: "Vessy Mink", affiliation: "Web3 Singer/Musician" },
  { role: "Long Wei & NFT Projects", name: "Valerie Geerken, B.S.", affiliation: "" },
  { role: "Culture & Social Economy", name: "Edvam Filho", affiliation: "UNICAP" },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-7xl mx-auto">
        {members.map(member => (
          <MemberDisplay key={member.name} member={member} />
        ))}
      </div>
    </div>
  )
}

export function StaffList() {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-20">
      <Section title={t("virtualia.team.main_team")} members={staff} />
      <Section title={t("virtualia.team.editorial_board")} members={editorialBoard} />
      <Section title={t("virtualia.team.permanent_writers")} members={permanentWriters} />
    </div>
  )
} 