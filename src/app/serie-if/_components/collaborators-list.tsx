"use client";

import { GraduationCap } from "lucide-react";

const collaborators = [
  { name: "Alison Vander Mandeli", institution: "Colégio Adventista De Londrina", lattes: "http://lattes.cnpq.br/7133301620559425" },
  { name: "André Bueno", institution: "UERJ", lattes: "http://lattes.cnpq.br/4958851883736557" },
  { name: "Antônio Menezes", institution: "USP", lattes: null },
  { name: "Bruno Santos", institution: "UNICENTRO", lattes: "http://lattes.cnpq.br/9833504300220067" },
  { name: "Cinara Nahra", institution: "UFRN", lattes: "http://lattes.cnpq.br/3185309694904313", isGifMember: false },
  { name: "Deivide Garcia da S. Oliveira", institution: "UFRB", lattes: "http://lattes.cnpq.br/2864816521883190" },
  { name: "Desidério Murcho", institution: "UNIFAP", lattes: "https://lattes.cnpq.br/5914996726555247" },
  { name: "Diego Rodstein Rodrigues", institution: "UNIFESP", lattes: "http://lattes.cnpq.br/5988406685473834" },
  { name: "Daniel Schiochett", institution: "UFMA", lattes: "http://lattes.cnpq.br/0125704359952932" },
  { name: "Éderson Safra Melo", institution: "UFMA", lattes: "http://lattes.cnpq.br/5985869803612554" },
  { name: "Evelyn Fernandes Erickson", institution: "UFSC", lattes: "http://lattes.cnpq.br/5064826781158043" },
  { name: "Felipe Carvalho Novaes", institution: "PUC-RIO", lattes: "https://lattes.cnpq.br/7911590715109618" },
  { name: "Flávio Vieira Curvello", institution: "UFBA", lattes: "http://lattes.cnpq.br/3683549895365835" },
  { name: "Gabriel Geller Xavier", institution: "UFOP", lattes: "http://lattes.cnpq.br/5478881180234414" },
  { name: "Guilherme Araújo Cardoso", institution: "UFOP", lattes: "http://lattes.cnpq.br/2860294319281337" },
  { name: "Jaaziel de Carvalho Costa", institution: "UFPI", lattes: "http://lattes.cnpq.br/3961382241613212" },
  { name: "Juliano do Carmo", institution: "UFPEL", lattes: "http://lattes.cnpq.br/7477981517627461" },
  { name: "Kherian Gracher", institution: "UFPI", lattes: "http://lattes.cnpq.br/4845305099984136" },
  { name: "Luiz Helvécio Marques Segundo", institution: "Dtech/Ufsj", lattes: "http://lattes.cnpq.br/1531118741977108" },
  { name: "Mariana Kuhn de Oliveira", institution: "CEBRAP", lattes: "http://lattes.cnpq.br/7318954416059983" },
  { name: "Mario Nogueira de Oliveira", institution: "UFOP", lattes: null },
  { name: "Matheus Oliva da Costa", institution: "USP", lattes: "http://lattes.cnpq.br/4212444128876658" },
  { name: "Maurício de Assis Reis", institution: "UEMG", lattes: null },
  { name: "Natalia Mendes Teixeira", institution: "UFRJ", lattes: "http://lattes.cnpq.br/0886039548983065" },
  { name: "Ramiro Peres", institution: "BACEN", lattes: "http://lattes.cnpq.br/6769195915163037" },
  { name: "Ricardo Nachmanowicz", institution: "UFMG", lattes: "http://lattes.cnpq.br/0117568108401468" },
  { name: "Rodrigo Jungmann", institution: "UFPE", lattes: "http://lattes.cnpq.br/0694096516897435" },
  { name: "Rodrigo Pinto de Brito", institution: "Doutor", lattes: "http://lattes.cnpq.br/1844128902889523" },
  { name: "Rodrigo Freitas Costa Canal", institution: "UNIFAP", lattes: "http://lattes.cnpq.br/6580667225140145" },
  { name: "Rosi Leny Morokawa", institution: "UFRJ", lattes: "http://lattes.cnpq.br/4358050599561422" },
  { name: "Sérgio Ricardo Neves de Miranda", institution: "UFOP", lattes: "http://lattes.cnpq.br/6556228184169719" },
  { name: "Silvio Kavetski", institution: "UFSC", lattes: "http://lattes.cnpq.br/5149254145855626" },
];

export function CollaboratorsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 max-w-7xl mx-auto">
      {collaborators.map((collaborator) => (
        <div key={collaborator.name} className="bg-transparent group">
          <div className="flex items-start space-x-4">
            <div>
              <p className="font-semibold text-neutral-800">{collaborator.name}</p>
              <p className="text-neutral-600 text-sm">{collaborator.institution}</p>
            </div>
            {collaborator.lattes && (
              <a
                href={collaborator.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-800 transition-colors ml-auto shrink-0"
                aria-label={`Currículo Lattes de ${collaborator.name}`}
              >
                <GraduationCap size={20} />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 