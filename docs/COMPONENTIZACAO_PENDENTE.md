# 📋 **DOCUMENTAÇÃO: COMPONENTIZAÇÃO PENDENTE**

## **🎯 OBJETIVO**
Finalizar a componentização de todos os projetos restantes para manter consistência e reutilização de código.

---

## **📁 PROJETOS QUE PRECISAM SER COMPONENTIZADOS**

### **1. Arqueologia Digital** (`src/app/arqueologia-digital/page.tsx`)
**Status:** ❌ Não componentizado

**Padrões Identificados:**
- ✅ Hero Section (já existe `HeroSection`)
- ✅ Content Section (já existe `ContentSection`) 
- ✅ Dark Section (já existe `DarkSection`)
- ❌ **PartnerCard** - Card de parceiros com hover effects
- ❌ **PartnersGrid** - Grid responsivo de parceiros

**Componentes Necessários:**
```typescript
// src/components/ui/partner-card.tsx
interface PartnerCardProps {
  name: string;
  url: string;
  logo?: string;
}

// src/components/ui/partners-grid.tsx
interface PartnersGridProps {
  partners: PartnerCardProps[];
}
```

---

### **2. Série IF** (`src/app/serie-if/page.tsx`)
**Status:** ❌ Não componentizado

**Padrões Identificados:**
- ✅ Hero Section (já existe `HeroSection`)
- ✅ Content Section (já existe `ContentSection`)
- ✅ Dark Section (já existe `DarkSection`)
- ✅ Feature Card (já existe `FeatureCard`)
- ❌ **GrantHighlight** - Seção destacada com fundo gradiente
- ❌ **CollaboratorsSection** - Seção de colaboradores

**Componentes Necessários:**
```typescript
// src/components/ui/grant-highlight.tsx
interface GrantHighlightProps {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
}

// src/components/ui/collaborators-section.tsx
interface CollaboratorsSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  children: React.ReactNode; // CollaboratorsList
}
```

---

### **3. Virtualia** (`src/app/virtualia/page.tsx`)
**Status:** ❌ Não componentizado

**Padrões Identificados:**
- ✅ Hero Section (já existe `HeroSection`)
- ✅ Dark Section (já existe `DarkSection`)
- ❌ **PublicationCard** - Card de publicação (Journal/Magazine)
- ❌ **PillarsGrid** - Grid de pilares com ícones
- ❌ **SupportersSection** - Seção de apoiadores com badges

**Componentes Necessários:**
```typescript
// src/components/ui/publication-card.tsx
interface PublicationCardProps {
  title: string;
  description: string[];
  ctaText: string;
  ctaUrl: string;
  variant: "left" | "right"; // Para alinhamento
}

// src/components/ui/pillars-grid.tsx
interface PillarItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PillarsGridProps {
  pillars: PillarItem[];
}

// src/components/ui/supporters-section.tsx
interface Supporter {
  name: string;
  url?: string;
  type: "social" | "institutional";
}

interface SupportersSectionProps {
  ogSupporters: Supporter[];
  institutionalSupporters: Supporter[];
}
```

---

### **4. Projetos Restantes**
**Status:** ❓ Não analisados

**Projetos para verificar:**
- `src/app/internacionalizacao/`
- `src/app/the-philosophers-dao/`
- `src/app/metaverso/`
- `src/app/literatura/`

---

## **🔧 COMPONENTES ADICIONAIS NECESSÁRIOS**

### **1. BadgeLink** (para apoiadores)
```typescript
// src/components/ui/badge-link.tsx
interface BadgeLinkProps {
  text: string;
  url?: string;
  variant?: "social" | "institutional";
}
```

### **2. ExternalButton** (para links externos)
```typescript
// src/components/ui/external-button.tsx
interface ExternalButtonProps {
  text: string;
  url: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}
```

---

## **📋 CHECKLIST PARA AMANHÃ**

### **Fase 1: Criar Componentes Base**
- [ ] `PartnerCard` + `PartnersGrid`
- [ ] `GrantHighlight`
- [ ] `PublicationCard`
- [ ] `PillarsGrid`
- [ ] `SupportersSection`
- [ ] `BadgeLink`
- [ ] `ExternalButton`

### **Fase 2: Refatorar Projetos**
- [ ] Arqueologia Digital
- [ ] Série IF
- [ ] Virtualia
- [ ] Verificar outros projetos

### **Fase 3: Atualizar Index**
- [ ] Adicionar novos componentes ao `src/components/ui/index.ts`

### **Fase 4: Testes**
- [ ] Verificar responsividade
- [ ] Testar internacionalização
- [ ] Validar acessibilidade

---

## **🎨 PADRÕES DE DESIGN A MANTER**

### **Cores:**
- **Primária:** `bg-neutral-900 hover:bg-neutral-800`
- **Secundária:** `border-neutral-300 hover:bg-neutral-100`
- **Texto:** `text-neutral-600`, `text-neutral-700`

### **Espaçamentos:**
- **Seções:** `py-20 md:py-28`
- **Grids:** `gap-8` ou `gap-10`
- **Cards:** `p-6` ou `p-8`

### **Tipografia:**
- **Títulos:** `text-3xl md:text-4xl font-bold`
- **Descrições:** `text-lg leading-relaxed`
- **Peso:** `font-light` (padrão do site)

---

## **📝 NOTAS IMPORTANTES**

1. **Manter consistência** com os componentes já criados
2. **Usar TypeScript** com interfaces bem definidas
3. **Seguir padrão mobile-first** do Tailwind
4. **Manter internacionalização** com `t()` function
5. **Preservar design simples** e clean atual
6. **Testar em ambos idiomas** (PT/EN)

---

## **🔍 ANÁLISE DETALHADA DOS PADRÕES**

### **Arqueologia Digital - Padrões Identificados:**

```tsx
// Hero Section (já componentizado)
<section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
  <div className="container relative z-10 mx-auto px-6 text-center">
    <div className="mx-auto max-w-4xl">
      <div className="flex justify-center mb-8">
        <Archive className="h-16 w-16 text-neutral-800" />
      </div>
      <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
        {t("arqueologia_digital.hero.title")}
      </h1>
      <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
        {t("arqueologia_digital.hero.description")}
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
          <Link href="#projeto">
            {t("arqueologia_digital.hero.cta_main")} <Group className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="#parceiros">
            {t("arqueologia_digital.hero.cta_secondary")} <Building className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>

// Partner Card (NOVO COMPONENTE NECESSÁRIO)
<Link
  key={partner.name}
  href={partner.url}
  target="_blank"
  className="group block p-6 bg-white rounded-lg border border-neutral-200 hover:shadow-lg hover:border-neutral-300 transition-all duration-300"
>
  <p className="text-xl font-semibold text-neutral-800 group-hover:text-blue-600 transition-colors">
    {partner.name}
  </p>
</Link>
```

### **Série IF - Padrões Identificados:**

```tsx
// Grant Highlight (NOVO COMPONENTE NECESSÁRIO)
<div className="bg-gradient-to-r from-neutral-50 to-neutral-100 border-l-4 border-neutral-300 rounded-r-lg p-8 my-24">
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-6">
      <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
        🏆 Reconhecimento Internacional
      </h3>
      <p className="text-lg text-neutral-700 leading-relaxed">
        A Série Investigação Filosófica recebeu o prestigioso apoio da Fundação John Templeton...
      </p>
    </div>
    <div className="text-center">
      <Button
        size="lg"
        variant="outline"
        className="border-neutral-400 text-neutral-700 hover:bg-neutral-200 hover:border-neutral-500 px-8 py-4 text-base transition-all duration-300 font-medium shadow-sm"
        asChild
      >
        <Link href="https://www.templeton.org/grant/..." target="_blank" rel="noopener noreferrer">
          Ver Grant Templeton →
        </Link>
      </Button>
    </div>
  </div>
</div>
```

### **Virtualia - Padrões Identificados:**

```tsx
// Publication Card (NOVO COMPONENTE NECESSÁRIO)
<div className="bg-white p-8 rounded-lg shadow-sm flex flex-col h-full">
  <div className="flex-grow">
    <h2 className="text-2xl font-bold text-neutral-900 mb-4 md:text-right">
      {t("virtualia.journal.title")}
    </h2>
    <div className="text-neutral-700 leading-relaxed space-y-4 md:text-right">
      <p>{t("virtualia.journal.description_1")}</p>
      <p>{t("virtualia.journal.description_2")}</p>
      <p>{t("virtualia.journal.description_3")}</p>
    </div>
  </div>
  <div className="mt-6 text-right">
    <Button asChild className="bg-neutral-900 hover:bg-neutral-800 text-white">
      <Link href="https://www.virtualiajournal.com/" target="_blank">
        {t("virtualia.journal.cta")} <ExternalLink className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  </div>
</div>

// Pillars Grid (NOVO COMPONENTE NECESSÁRIO)
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
  <div className="flex flex-col items-center">
    <Feather className="h-10 w-10 text-neutral-400 mb-4" />
    <h3 className="font-semibold text-lg mb-2">{t("virtualia.pillars.research.title")}</h3>
    <p className="text-neutral-400 font-light leading-relaxed">
      {t("virtualia.pillars.research.description")}
    </p>
  </div>
  {/* ... mais pilares */}
</div>
```

---

## **🚀 PRÓXIMOS PASSOS**

1. **Criar componentes base** seguindo os padrões identificados
2. **Refatorar cada projeto** para usar os novos componentes
3. **Manter consistência** com o design atual
4. **Testar funcionalidade** e responsividade
5. **Atualizar documentação** após conclusão

---

**✅ Documentação salva em `docs/COMPONENTIZACAO_PENDENTE.md`**

**🚀 Pronto para finalizar amanhã!** Todos os padrões estão identificados e documentados.
