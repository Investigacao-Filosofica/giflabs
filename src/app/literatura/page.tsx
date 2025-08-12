"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Palette, User, ExternalLink, FileText, Image } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";

const chapters = [
  {
    id: 'chapter_one',
    title: 'Capítulo Um, Uma Quartafeira',
    content: `
    No firmamento sem nuvens a lua visível corta o céu da manhã fria, dona do espaço suavemente deslizando em direção ao poente, quase plena, quase cheia, crescente, surgindo tarde adentrando a madrugada, saudando o dia, empenhada em ciclos mais antigos que qualquer pensamento humano, influenciando mares e humores, tudo que é líquido é instigado pela lua, tudo que é tempo é persuadido por seu movimento. Gravitando este longínquo pedaço de rocha cuja crosta por atmosfera protegida sustenta a vida, a lua não gosta de contar, mas tem inveja da terra, mais precisamente, inveja esta atmosfera que tantas peculiaridades a vizinha confere, e quando lá do alto a lua observa o mundo terráqueo, faz o possível para ser sentida, o possível para ser vista. 
Entre os seres que neste momento a lua observam, está o jovem humano Abelardo, sentado na poltrona desconfortável do ônibus em movimento, com os braços cruzados distraidamente olhando para o céu, trocando olhares com a lua enquanto o velho ônibus da linha quatrocentos e quatro corta acelerado as ruas da zona norte do Rio de Janeiro. A visão da lua é interrompida pelos prédios obstruindo a imagem do firmamento, o barulho do trânsito, o engarrafamento ordinário de cada dia, massa lenta rumando ao labor. Trajeto arrastado e truncado, o pescoço pesado, por vezes Abelardo dormita, acordando com o solavanco de uma freada brusca entre a orquestra disfônica de buzinas e xingamentos quando um motoqueiro após bater com a perna no retrovisor de um carro perde o equilíbrio quase caindo na frente do ônibus freando bruscamente a poucos centímetros do impacto, o motoqueiro mostra o dedo para o motorista furioso rebatendo com longas buzinadas e impropérios, tudo dentro da mais perfeita normalidade. 
O ônibus está cheio, todos os lugares ocupados, acima da capacidade os passageiros
em pé espremidos procurando espaço, procurando abrir um corredor em direção a saída. Abelardo deixa a janela, olha para dentro, aliviado por sempre conseguir um lugar sentado, vantagem de morar próximo ao ponto final, é um dos primeiros a entrar, garantindo um lugar na janela do lado direito perto da porta de saída.
Parada solicitada, chegada a hora do desembarque, Abelardo levanta, com outros que no mesmo ponto descem, no começo do aterro do Flamengo. Abelardo se mistura a massa de homens e mulheres, em ternos bem passados, em uniformes de redes de fast food, em trajes militares de serviço público, variadas idades cores tamanhos jeitos aspirações em tudo diferentes, em quase tudo, em comum a expressão desanimada do acordar contrariado que só aqueles que todos os dias pegam ônibus sentem. Nessa massa em movimento Abelardo espera o sinal, para atravessar o aterro até o canteiro de onde as passarelas passam por cima das vias rápidas onde o trânsito segue ininterrupto, repara no caminhão da prefeitura com os farois piscando enquanto um homem faz sinal para desviar os veículos durante o tempo em que dispõe cones fechando uma parte da rua, o caminhão tem uma grua operada por um trabalhador com um lata de tinta e um grosso pincel, um homem de longos bigodes e grossas sobrancelhas vestido com colete e boné verde e amarelo, pintando de verde e amarelo cada poste ao longo da longa avenida, nesse momento ele longamente suspira, alongando o desejo com a lembrança de um dia à toa, os passantes na passarela destes detalhes não sabem, sem prestar atenção seguindo em marcha. Hoje é quinze de março de mil novecentos e noventa e quatro, na semana que vem, no feriado de primeiro de abril, será comemorado o aniversário de trinta anos da Revolução Militar. Assim como Edilson Souza, auxiliar de serviços externos e paisagístico da prefeitura do Rio de Janeiro, tantos outros trabalhadores empenhados estão na ornamentação da cidade, avenidas e ruas, prédios públicos e privados, o sentimento patriotico toma conta da nação. 
Parece não haver forma de escapar das rédeas decorativas do verde e amarelo. Ainda que as comemorações da revolução não sejam unanimidade entre pares da nação, outro detalhe contribui para o nacionalismo, esse sentimento, bem mais forte e vigoroso que a política, é ano de Copa do Mundo. Parece não haver forma de escapar das bandeirinhas e faixas, e mesmo os modernos prédios da orla do Flamengo exibem a indumentária com as cores da pátria. Em um destes edifícios modernos recém construídos, ocupando cinco andares, está localizada a Conta Conta Contabilidade. No vigésimo primeiro andar está o setor de Conferências Contábeis. Cléston Coimbra, gerente geral do setor de Conferências Contábeis da Conta Conta Contabilidade, tem orgulho de manter um ambiente, abre aspas, Descontraído e produtivo, fecha aspas, uma das medidas, pelo gerente geral tomadas, a qual se diz que, quiçá a melhor medida já tomada, foi a reforma da antiga cafeteria do andar em um ambiente aconchegante e descontraído com cafeteiras novas e variados quitutes açucarados. Neste momento, quase às nove da manhã, Cléston ainda dorme, não gosta de chegar cedo, ainda assim o nome do gerente é evocado, por Jefferson, que neste momento deixa escorrer pelos lábios o café quente tomado em grande gole na tentativa de engolir um pedaço de sonho entalado na garganta, tosse, o pedaço cheio de creme volta para boca, dessa vez é mastigado antes de ser engolido. Abelardo de longe presencia esta cena enquanto outros companheiros de escritório riem e Jefferson vermelho do engasgo volta ao assunto, agora feliz em ter plateia para ouvilo. 
Abelardo gostaria de um café caso tanta gente na cafeteria não houvesse, situação
essa que em breve será instalada, enquanto isso, segue para a baía vinte e um, cubículo melancólico e asséptico, onde na confortável cadeira senta, onde o corpo encontra a posição costumeira, de onde vê a tela, agora aberta nas mesmas abas com as mesmas planilhas onde executa a função de analista técnico contábil. Função esta que sempre, como agora, faz rir Abelardo, nomenclatura que nada quer dizer, da mesma forma, o trabalho sem sentido, a maior parte do tempo Abelardo executa a tarefa, considerada de máxima importância, de reconferir as planilhas que já foram conferidas. Um rosto aparece na meia parede direita quando Tamaru com um copo de isopor fumegando aroma achocolatado chega ao olfato antes das palavras do cubículo vizinho, Está preparado para hoje. A pergunta vem com tom desafiador, entretanto, por conhecer Tamaru, provavelmente é alguma piada, nunca inventando, mas sempre exagerando uma situação real, respondendo a pergunta com o mesmo tom Abelardo diz, E deveria estar preparado para que. Tamaru sopra a fumaça e depois de um gole na bebida quente diz, Hoje é aniversário do Carlinhos da repartição de indexamento, parece que Cléston vai até liberar o andar inteiro mais cedo para começar o happy hour. Abelardo havia esquecido, colocado a informação em alguma gaveta onde não pretendia procurar, pensa no que dizer, sabe que qualquer resposta negativa, ou mesmo que pareça negativa, fará Tamaru passar o dia em insistente tentativa de convencimento, o melhor a ser feito é demonstrar interesse, e caso não indo, o que é o mais provável, partir discretamente pós expediente, diz, Pois é, tô sabendo, e parece que Antunes prometeu uma rodada de chopp pra todo mundo. O comentário faz Tamaru sorrir, acaba de obter nova informação, com um largo sorriso diz, Já volto. Enquanto para a cafeteria ruma.
	Resto de manhã arrastada, conferências devidamente conferidas, estômago roncando, ainda nem são onze horas, mas tantos minutos parecem passados que dentro da manhã cabem dois dias, alongados no tédio, no trabalho automático sem qualquer interesse, na maior parte do tempo Abelardo sequer sabe sobre o que se tratam as planilhas, todos os números fórmulas siglas, que conhece mas desconhece qualquer sentido, e assim segue, e por esse desinteresse faz o trabalho prescrito com tamanho precisão que aos agrados dos superiores conquistou uma boa posição.
	Outra vez está lembrando a mesma cena que com rotina lembra, cinco anos atrás, um amigo dizendo, Cara, pega essa vaga de estágio, você tá sem grana, e daí não tem a ver com o que você quer fazer, fica numa posição financeira mais tranquila que vai ser mais fácil seguir outra carreira. O processo seletivo, dinâmica de grupo e entrevista, o contrato de estagiário vinte horas por semana por um ano, passou rápido, contrato renovado por outro ano, tão rápido quanto, e precisa decidir ser contratado ou deixar a empresa, o salário é bom e tem perspectiva de melhorar, tem plano de saúde, as horas de trabalho são tediosas entretanto tranquilas, os amigos do mesmo andar, e assim os anos até o agora, onde sentado frente a tela com trabalho pronto às onze horas sozinho sai para almoçar. 
    `
  },
  {
    id: 'chapter_twelve',
    title: 'Capítulo Doze, O sofá',
    content: `
    A iluminação amarela indireta realça a cor marrom do couro, as taxas e os braços languidamente arredondados, um antigo chesterfield repousa com uma elegância quase predatória, sua presença reluzindo sob a luz oblíqua de segredos insuportáveis ao toque. O tempo coagula em denso silêncio. As tachas de bronze, dispostas com precisão cirúrgica, faíscam como pequenos olhos metálicos, fitando, incitando, hipnotizando. Um grito silencioso pulsando através das camadas almofadadas abafando promessas de uma estranha imobilidade luxuosa de algo que é mais do que um objeto. Um piscar de olhos, sensações desaparecem, o vento retoma a realidade da noite chuvosa, despejando umidade nos olhos observando os outros componentes da vitrine, uma antiga mesa de boticário, uma gaiola de ferro fundido sustentada por um extravagante suporte, um abajur discreto sobre um criado mudo de mogno maciço, peças bem posicionadas, em sua discrepância compondo de forma harmônica o mostruário de um antiquário. Outra vez os olhos voltam para o sofá, um metro e oitenta, extensão nada impressionante, que entretanto parece ocupar todo o espaço da vitrine, um monarca calado irradiando algo entre o conforto e o abismo. Duas largas almofadas retangulares sobre o assento, as pregas cuidadosas no couro legítimo de algum animal antigo, as curvas robustas dos braços prolongados em um arquétipo suntuoso, tudo convidando a um repouso absoluto.
O olhar desliza de um ponto a outro numa espécie de transe fragmentado, à espera de que o sofá diga algo, rompendo o silêncio com uma revelação qualquer, um murmúrio velho de outras eras. Enredado em pensamentos cada vez mais profundos sente o estranho impulso de se aproximar, de se submeter a presença que embora imóvel o desafia a entrar, a deitar, a desaparecer no mistério acolchoado feito de aconchego e tímida sensualidade. Abelardo é envolto pela aura do algo e do momento, absorvendo os fatos como quem gira uma xícara entre os dedos, esperando o café esfriar, em busca do momento onde os lábios não são queimados, quando, apenas, sentem o comichão do calor no que ainda antes da dor é prazer, e queima, os olhos, que agora olham, olham para o sofá, pensando no quão confortável é, e pensam e suspiram em concordância a musculatura cansada, como deve ser maravilhoso depois de um dia chuvoso deitar na maciez em passeio pelas etéreas nuvens de couro. As especulações excedem o pensamento, são pequenos redemoinhos hipnóticos, está magnetizado pela presença do sofá do outro lado dos centímetros de vidro que os separam.
Perdido em devaneios não percebe que um homem se aproxima. O homem que em breve irá falar, Boa noite, e, tirar Abelardo de seu transe, é velho, e mesmo a aparência idosa esconde a real idade de sua velhice. Os cabelos são completamente alvos, finos parecem deslizar pelas rugas da testa morena. Veste calças de brim em tom ocre pastel e camisa branca de botões. Ao contrário do homem encarando o sofá na vitrine, está completamente seco. Com o cuidado e a lentidão da idade se aproxima, a mão esquerda a cada passo apoia o corpo contra a bengala, feita de madeira escura com entalhes de animais ao longo de toda a superfície. No seu lento caminhar o ancião se aproxima, está a distância de uma conversa e, acaba de parar, diz, Boa noite, acrescenta, Parece que gostou do sofá.
	A voz amistosa por um momento desliza pelo éter, Abelardo roda o pescoço em direção ao som. O primeiro estranhamento é o quão seco o homem está, ao redor a chuva continua sua incansável queda, da mesma forma, a temperatura e o vento, porém, o ancião parece emergir do nada vestindo roupas leves e secas. O segundo estranhamento é algo cuja compreensão não alcança, uma daquelas sensações mistas de intuição e observação, sensação onde a mente procura o significado e não encontra, não sabendo exatamente o que é. O ancião permanece parado, imóvel esperando a resposta do interlocutor, Boa noite, responde Abelardo polidamente, Sim, é um belo sofá. O velho parece gostar da resposta e sorri largamente enquanto as palavras saem carregadas com sotaque, Mais do que belo, uma obra prima, feito em primeiro lugar para deleitar os olhos, com a mesma artesania que para deleitar o corpo, com uma mistura única uma peça única. Enquanto escuta, Abelardo retoma posição de frente para a vitrine, olhando para o sofá, imaginando a sensação das costas no suave contorno acolchoado, percebendo com estranhamento o quanto pelo objeto se sente atraído. Um raio cruza o céu, quatro segundos depois o estrondo. Desanimado lembra o caminho ainda a ser percorrido e decide partir, nesta altura, está decidido a chegar ao ponto mais próximo e tomar o ônibus para finalizar o restante do trajeto. O ancião percebe a intenção do movimento e diz com o mesmo tom agradável de um avô, Por que não entra um pouco, alguns minutos para esperar a chuva passar enquanto olha mais perto o sofá, apontando a bengala continua, Está encharcado, certamente uma bebida quente e um lugar seco são a melhor ideia para esperar, a chuva não irá parar tão cedo, mas em breve diminuirá consideravelmente. Abelardo avalia a situação, o primeiro pensamento que vem é, O corpo está cansado, a poucos metros daqui há um ponto de ônibus, o melhor é esperar um pouco, o tempo para melhorar o tempo, o trânsito estará melhor fluindo, rápido será o trajeto. Outro pensamento imediatamente se concatena ao primeiro, Talvez experimentar o sofá. 
	O ancião sorri, como se no silêncio acabe de receber uma resposta, com sorriso amigável e movimentos lentos balançando a cabeça, colocandosse a caminho para o interior da loja. Abelardo pouco espera, acompanhando o lento ritmo caminha com o relance do olhar fixo no sofá.
Neste momento, Abelardo está a exatos dois passos de entrar no antiquário. Ainda não tem noção de como os próximos momentos decisivamente irão afetar seu futuro, da mesma maneira, não tem sequer vaga pista do que está prestes a encontrar, mesmo que, tenha na mente uma imagem específica do que pretende encontrar. Em outros momentos, em outros lugares, entrou ou viu imagens de lojas de móveis e antiguidades, das múltiplas experiências construiu uma loja imaginária traçada de pontos comuns. Agora, ainda que inconscientemente, tem essa imagem como expectativa de como será o interior que em breve adentrará. Todavia, irá ficar estupefato, tirado de órbita por peças que pertencem a diferentes quebracabeças, apenas, por alguma estranha coincidência, ocupando o mesmo espaçotempo.
	O passo derradeiro que deixa a rua colocando o primeiro pé dentro da loja vem acompanhado de estranha e inusitada sensação, a mesma sensação mista de intuição e observação de pouco antes, desta vez mais forte, contudo, logo esquecida pelo deslumbre do momento que o cerca.  A primeira coisa que vê é o grande relógio à direita, peça maciça feita do tronco de uma única árvore, os números e ponteiros feitos com entalhes em formas geométricas. Ao lado, o esqueleto de um animal, busca nos arquivos mentais algo que corresponda a esta formação óssea, nada encontra. No teto, pássaros empalhados pendurados. Alguns reconhece, outros, os maiores, parecem tirados de algum momento do período jurássico. As informações chegam em pacotes de difícil assimilação, num estalo chega a certeza, está sonhando, Nada disso pode ser real, pensa, Estou dormindo, a chuva, o caminho, o homem e o cachorro dividindo fast food, é tudo sonho, da mesma forma, esse momento, esse lugar, a qualquer instante irei acordar, sentado no banco desconfortável do ônibus a caminho de casa, com a cabeça encostada na janela e a boca aberta. Antes que o pensamento continue é puxado por uma espécie de razão, Não estás a sonhar. Isto sabe, por mais onírica que seja a sensação e o ambiente, não é um sonho. Todavia, lembra de ter sonhos onde não sabe que está sonhando, só sabendo depois, quando a vigília recebe as informações noturnas. Sonhando ou não, é inegável a força da experiência, fazendo com que esta questão suma em detrimento das percepções que o cercam. 
Na medida em que a passos cuidadosos pela loja anda, objetos tão díspares quanto inusitados aparecem empilhados por todos os lados. Um grande cacto de espinhos vermelhos está ao lado da menor mesa de bilhar que já viu. Duas cadeiras estão fixadas na parede a pouco menos de um metro do chão, posicionadas ao lado da mesa violeta onde uma vitrola de aparência vitoriana paira reluzente. Com aspecto mais velho que a maior parte dos objetos, uma estante de madeira marrom, do chão ao teto, abarrotada de livros, alguns deles com as capas visivelmente danificadas. Do lado de fora, a loja parece pequena e estreita, por outro lado, dentro, a sensação é de um lugar imensurável, repleto de artefatos e luminosidade confusa. 
O velho surge por trás do grande urso pardo empalhado com uma enguia na boca, não está com a bengala, e, segura uma larga bandeja de prata onde duas xícaras e duas toalhas dividem espaço com o bule que derrama no ambiente odores cítricos e aveludados. A impressão inicial de fragilidade passada pelo ancião já não existe, dentro da loja se locomove com estranha agilidade. Acaba de passar por Abelardo, fazendo sinal para ser seguido. Percorrem o corredor de móveis até a vitrine onde está montada uma aconchegante sala de estar. O anfitrião coloca a bandeja sobre a mesa de centro e serve às duas xícaras, sorri para o convidado enquanto entrega a peça de porcelana de onde algo de ótimo cheiro fumega, diz, Permita que me apresente, sou Ramon Ruiz, a fala é acompanhado por uma mesura, com as mãos vazias tirando um chapéu imaginário.


    `
  }
];

function Chapter({ title, content, onBack }: { title: string, content: string, onBack: () => void }) {
    const { t } = useLanguage();
    
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <main className="container mx-auto px-6 py-12 md:py-20">
          <Button onClick={onBack} variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("literatura.chapters.back_button")}
          </Button>
          <article className="prose lg:prose-xl max-w-none mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">{title}</h1>
            <div className="text-justify whitespace-pre-line leading-relaxed">
              {content}
            </div>
          </article>
        </main>
      </div>
    );
  }

export default function LiteraturaPage() {
  const { t } = useLanguage();
  const [selectedChapter, setSelectedChapter] = React.useState<string | null>(null);

  const handleSelectChapter = (chapterId: string) => {
    setSelectedChapter(chapterId);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedChapter(null);
  };

  const chapterToShow = chapters.find(c => c.id === selectedChapter);

  if (chapterToShow) {
    return <Chapter title={chapterToShow.title} content={chapterToShow.content} onBack={handleBack} />;
  }


  return (
    <div className="bg-neutral-50 min-h-screen font-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
          <div className="container relative z-10 mx-auto px-6 text-center">
            <div className="mx-auto max-w-4xl">
              <div className="flex justify-center mb-8">
                <BookOpen className="h-16 w-16 text-neutral-800" />
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-neutral-900 md:text-6xl">
                {t("literatura.hero.title")}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-neutral-600 md:text-xl">
                {t("literatura.hero.subtitle")}
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('capitulos')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="bg-neutral-900 hover:bg-neutral-800 text-white px-10 py-6 text-lg transition-all duration-300 border-0 font-medium"
                >
                  {t("literatura.hero.cta_chapters")} <FileText className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-900 px-10 py-6 text-lg transition-all duration-300 font-medium"
                >
                  <Link href="https://www.spatial.io/s/Matzatea-6883c8a6d3dc62a2d89e63e9?share=4470873216324075548" target="_blank">
                    {t("literatura.hero.cta_gallery")} <ExternalLink className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* O Projeto Section */}
        <section id="projeto" className="py-20 md:py-28 scroll-mt-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  {t("literatura.matzatea_intro.title")}
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  {t("literatura.project.description")}
                </p>
                <p>
                  {t("literatura.project.context")}
                </p>
                <p>
                  {t("literatura.project.collaboration")}
                </p>
                <p>
                  {t("literatura.project.actions")}
                </p>
                <p>
                  {t("literatura.project.objectives")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Autor e Artista Section */}
        <section id="criadores" className="bg-neutral-900 py-20 md:py-28 scroll-mt-32">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {t("literatura.collaborators.title")}
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
                  {t("literatura.collaborators.description")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                {/* Sobre o Autor */}
                <div className="bg-neutral-800 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mr-4">
                      <User className="w-8 h-8 text-neutral-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Emanuel Souza</h3>
                      <p className="text-neutral-400">{t("literatura.author.roles")}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                    <p>
                      {t("literatura.author.description")}
                    </p>
                    <p>
                      {t("literatura.author.technique")}
                    </p>
                    <p>
                      {t("literatura.author.participations")}
                    </p>
                    <p>
                      {t("literatura.author.final")}
                    </p>
                  </div>
                </div>

                {/* Sobre a Artista */}
                <div className="bg-neutral-800 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mr-4">
                      <Palette className="w-8 h-8 text-neutral-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Fer Caggiano</h3>
                      <p className="text-neutral-400">{t("literatura.artist.roles")}</p>
                    </div>
                  </div>
                  <div className="space-y-4 text-neutral-300 leading-relaxed text-base">
                    <p>
                      {t("literatura.artist.description")}
                    </p>
                    <p>
                      {t("literatura.artist.project")}
                    </p>
                    <p>
                      {t("literatura.artist.activities")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Relevância Cultural Section */}
        <section id="relevancia" className="py-20 md:py-28 scroll-mt-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                  {t("literatura.cultural_relevance.title")}
                </h2>
              </div>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  {t("literatura.cultural_relevance.intro")}
                </p>
                <p>
                  {t("literatura.cultural_relevance.boundaries")}
                </p>
                <p>
                  {t("literatura.cultural_relevance.expansion")}
                </p>
                <p>
                  {t("literatura.cultural_relevance.initiative")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financiamento Section */}
        <section id="financiamento" className="bg-gradient-to-br from-amber-50 to-orange-50 py-20 md:py-28 scroll-mt-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                {t("literatura.funding.title")}
              </h2>
              <p className="text-xl text-neutral-600 mb-8 font-light">
                {t("literatura.funding.subtitle")}
              </p>
              <div className="space-y-6 text-neutral-700 leading-relaxed text-lg text-left">
                <p>
                  {t("literatura.funding.description")}
                </p>
                <p className="text-lg font-medium text-neutral-800">
                  {t("literatura.funding.final")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capítulos Section */}
        <section id="capitulos" className="py-20 md:py-28 scroll-mt-32">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                        {t("literatura.chapters.title")}
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                        {t("literatura.chapters.description")}
                    </p>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {chapters.map((chapter) => (
                            <Button
                                key={chapter.id}
                                size="lg"
                                onClick={() => handleSelectChapter(chapter.id)}
                                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium transition-all duration-300 border-0 h-auto py-12 px-8 flex flex-col items-center justify-center"
                            >
                                <FileText className="mb-4 h-8 w-8" />
                                <span className="text-lg">{chapter.title}</span>
                            </Button>
                        ))}
                    </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
