# 🎯 PLANO DE IMPLEMENTAÇÃO - REORGANIZAÇÃO DA EQUIPE GIFLABS

> **Plano para reorganizar a estrutura de equipe entre página inicial e Digital Education App**

---

## **OBJETIVO FINAL**
- **Página Inicial**: 4 cards centrais (Rodrigo, Rafael, Roseline, Mateus)
- **Digital Education App**: 4 cards organizados em linha
- **Alexandre**: Aparece apenas no Digital Education App

---

## **FASE 1: CORRIGIR PÁGINA INICIAL**

### **1.1 Remover Alexandre**
- Localizar e deletar o card do Alexandre Eduardo
- Manter apenas os 4 membros centrais

### **1.2 Ajustar Grid**
- Mudar layout de 5 cards para 4 cards
- Ajustar responsividade para 2x2 grid

### **1.3 Verificar Funcionamento**
- Testar se a página carrega corretamente
- Verificar se os 4 cards estão visíveis

---

## **FASE 2: ADICIONAR EQUIPE NO DIGITAL EDUCATION APP**

### **2.1 Preparar Imports**
- Adicionar ícones necessários (FileSignature, Briefcase, Palette)
- Verificar se todos os ícones estão disponíveis

### **2.2 Criar Seção "Equipe Central"**
- Inserir antes da seção CTA
- 4 cards: Rodrigo, Rafael, Roseline, Mateus
- Layout responsivo 4x1

### **2.3 Criar Seção "Equipe de Desenvolvimento"**
- 2 cards: Mateus, Alexandre
- Layout responsivo 1x2 ou 2x1
- Estilo diferenciado (fundo escuro)

### **2.4 Organizar Layout**
- Duas seções separadas e bem definidas
- Espaçamento consistente entre seções
- Responsividade mobile-first

---

## **FASE 3: VALIDAÇÃO E TESTES**

### **3.1 Testar Página Inicial**
- Verificar se carrega sem erros
- Confirmar 4 cards visíveis
- Testar responsividade

### **3.2 Testar Digital Education App**
- Verificar se carrega sem erros
- Confirmar 6 cards visíveis (4 + 2)
- Testar responsividade
- Verificar navegação entre seções

### **3.3 Verificar Consistência**
- Estilo visual consistente
- Informações corretas em cada card
- Links funcionando

---

## **ORDEM DE EXECUÇÃO**

1. **Primeiro**: Corrigir página inicial (remover Alexandre)
2. **Segundo**: Adicionar seção de equipe no Digital Education App
3. **Terceiro**: Testar ambas as páginas
4. **Quarto**: Verificar responsividade

---

## **ARQUIVOS A MODIFICAR**

- `src/app/page.tsx` - Página inicial
- `src/app/digital-education-app/page.tsx` - Projeto Digital Education App

---

## **ESTRUTURA FINAL ESPERADA**

### **Página Inicial**
```
Equipe GIFLABS (4 cards)
├── Rodrigo (Líder)
├── Rafael (Editor Acadêmico)
├── Roseline (Secretária)
└── Mateus (Desenvolvedor)
```

### **Digital Education App**
```
Equipe Central (4 cards)
├── Rodrigo (Líder)
├── Rafael (Editor Acadêmico)
├── Roseline (Secretária)
└── Mateus (Desenvolvedor)

Equipe de Desenvolvimento (2 cards)
├── Mateus (Desenvolvedor Principal)
└── Alexandre (Colaborador)
```

---

## **RESULTADO ESPERADO**

- **Página Inicial**: 4 cards centrais funcionando
- **Digital Education App**: 6 cards organizados em duas seções
- **Alexandre**: Visível apenas no Digital Education App
- **Mateus**: Visível em ambos os lugares
- **Responsividade**: Funcionando em todos os dispositivos

---

## **NOTAS IMPORTANTES**

- **Mateus** aparece em ambos os lugares (equipe central + desenvolvimento)
- **Alexandre** aparece apenas no Digital Education App
- **Virtualia** e **Série IF** mantêm suas estruturas atuais
- Foco apenas nas 3 páginas principais conforme solicitado

---

## **STATUS**

- [ ] Fase 1: Página inicial corrigida
- [ ] Fase 2: Digital Education App atualizado
- [ ] Fase 3: Testes realizados
- [ ] Responsividade verificada
- [ ] Funcionamento validado

---

**Data de Criação**: $(date)
**Responsável**: Equipe GIFLABS
**Prioridade**: Média
**Tempo Estimado**: 30-45 minutos




