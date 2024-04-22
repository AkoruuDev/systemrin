const cards_content = [
    {
        card_id: 1,
        content: [
            {
                type: 'title',
                content: 'Progressão de nível',
                color: '#dba435',
                size: 53,
                side: 'center',
                link: '',
            },{
                type: "paragraph",
                content: "XP Nível (XN) é aquilo que você acumula para passar de nível, pode ser obtido em treinos, missões, tarefas, estudos e etc.",
                color: '#dbdbdb',
                size: 25,
                side: 'left',
                link: '',
            },{
                type: "paragraph",
                content: "Quando você passa de nível, todos os seus pontos XN são transformado em XP Caixa (XC). Zerando o XN mais uma vez.",
                color: '#dbdbdb',
                size: 25,
                side: 'left',
                link: '',
            },{
                type: "paragraph",
                content: "Do nível 00 ao nível 01, é necessário obter 100 XN. Caso você tenha por exemplo 90 de XN e ganhe mais 15, os 5 extra são os adicionados ao XN do próximo nível, onde é necessário 200 XN pra passar.",
                color: '#dbdbdb',
                size: 25,
                side: 'left',
                link: '',
            },{
                type: "paragraph",
                content: "XC é aquele que é usado para comprar coisas em sua ficha. Como atributos, pontos de vida, slots power e tudo mais. Basicamente, toda sua evolução depende do XC.",
                color: '#dbdbdb',
                size: 25,
                side: 'left',
                link: '',
            },{
                type: "paragraph",
                content: "É possível acumular XC, mas ele só pode ser gasto única e exclusivamente quando sobe de nível. O XC só pode ser obtido subindo de nível, por isso quando subir vai obter mais, porém aquele gasto não vai retornar.",
                color: '#dbdbdb',
                size: 25,
                side: 'left',
                link: '',
            },{
                type: "subtitle",
                content: "Barras de XP"
            },{
                type: "table",
                content: [
                    {
                        type: "title",
                        content: [
                            "Level",
                            "XP"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 00",
                            "000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 01",
                            "100"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 02",
                            "200"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 03",
                            "300"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 04",
                            "400"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 05",
                            "500"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 06",
                            "600"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 07",
                            "700"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 08",
                            "800"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 09",
                            "900"
                        ]
                    },
                ]
            },{
                type: "quote",
                content: "(Total: 4.500)"
            },{
                type: "table",
                content: [
                    {
                        type: "title",
                        content: [
                            "Level",
                            "XP"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 10",
                            "5.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 11",
                            "9.500"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 12",
                            "15.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 13",
                            "20.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 14",
                            "25.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 15",
                            "30.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 16",
                            "35.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 17",
                            "40.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 18",
                            "45.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 19",
                            "50.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 20",
                            "60.000"
                        ]
                    },
                ]
            },{
                type: "quote",
                content: "(Total: 339.000)"
            },{
                type: "quote",
                content: "Obs: Nível 20 é o máximo normal, mas após ele você estará nos chamados níveis fantasmas e assim sua evolução continua de forma diferenciada."
            },{
                type: "table",
                content: [
                    {
                        type: "title",
                        content: [
                            "Level",
                            "XP"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 21 - 49",
                            "77.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 50 - 99",
                            "85.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 100 - 199",
                            "100.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 200 - 249",
                            "260.000"
                        ]
                    },{
                        type: "content",
                        content: [
                            "level 250",
                            "700.000"
                        ]
                    },
                ]
            },{
                type: "subtitle",
                content: "Habilities"
            },{
                type: "paragraph",
                content: "Por nivel, você recebe benefícios e em alguns niveis especificos é possível desbloquear habilidades naturais de um Pohuvulduh"
            },{
                type: "list",
                content: "A partir do nível 25, é possivel mudar a composição de seu corpo, alterando pra qualquer aparência humanoide comum, mas sem poder extrapolar os limites de aparência fisica de um civil, mas pode alternar externa e internamente o corpo pra fêmea, macho, um híbrido de ambos ou nenhum dos dois. O processo todo leva de 1 semana a 1 Mês."
            },{
                type: "list",
                content: "A partir do nível 30, tem seus limites de atributos, Vida, Sanidade, estamina, Movimento e iniciativa dobrados automaticamente."
            },{
                type: "list",
                content: "A partir do Nível 50, é possivel despertar o estágio Alfa na Ordem dos seus poderes, além de poder se tornar um Deus e se morrer antes disso, vira uma entidade espiritual ou paranormal de médio nível."
            },{
                type: "list",
                content: "No nível 100, é possível despertar o estágio Ômega na Ordem dos seus poderes, Além de superar o estágio de Deus e se morrer antes disso, vira uma entidade espiritual ou paranormal de alto nível."
            },{
                type: "list",
                content: "No nível 150, é possível despertar o estágio Delta na Ordem dos seus poderes além de poder se tornar digno de uma Jóia Deva"
            },{
                type: "list",
                content: "No nível 200, é possível despertar o estágio Deva na Ordem dos seus poderes, além de poder manifestar entidades espirituais ou paranormais a partir do seu corpo e continuar vivo, mas essas entidades são de baixo nível e cabe a elas evoluirem."
            },{
                type: "list",
                content: "A partir do nível 250, é possivel abrir portais pra outros planos, mas sempre sujeito as leis daquele plano. Também pode manipular com menos dificuldade, as Forças Inter Planos."
            },
        ]
    },{
        card_id: 2,
        content: [
            {
                type: "title",
                content: "Imersão Sobrenatural"
            },{
                type: "paragraph",
                content: "A cada nível, seu personagem sobe em 0,5% na chamada imersão sobrenatural (IS). Que pode ser lida como a facilidade com que o plano Pohivulduh (Sobrenatural) domina seus próprios poderes, e quanto mais poder você possui, mais fácil se torna controlar seu poder."
            },{
                type: "paragraph",
                content: "A IS não é exatamente um nerf sobre seus poderes, mas sim o hábito que você tem de usar eles como parte natural de seu corpo. Ativar um poder, mudar de forma, controlar seu elemento e tudo mais se torna tão natural e instantâneo que um mero reflexo que arrepia seus cabelos poderia fazer você ativar sua forma mais poderosa sem esforço e quanto mais imerso, mais você tem que se esforçar justamente para não deixar seu poder escapar e assim, fingir ser um humano comum. Claro, isso falando de imersão total, inicialmente você ainda tem que aprender a usar seus poderes e descobrir como elas são, algo estranhamente novo mas que você sente uma certa aptidão com aquilo. Pra facilitar, pode seguir a tabela de imersão pra ter uma base, mas não tome ela como lei. É o grupo que decide isso."
            },{
                type: "table",
                content: [
                    {
                        type: 'content',
                        content: [
                            "0-5%",
                            "Você não consegue despertar nenhum poder."
                        ]
                    },{
                        type: 'content',
                        content: [
                            "5,5% - 10%",
                            "É Possível despertar o poder de Raça"
                        ]
                    },{
                        type: 'content',
                        content: [
                            "10,5% - 14%",
                            "É Possível despertar o poder Elemental"
                        ]
                    },{
                        type: 'content',
                        content: [
                            "14,5% - 17,5%",
                            "É Possível despertar a Magia"
                        ]
                    },{
                        type: 'content',
                        content: [
                            "18% - 19%",
                            "É Possível despertar o Poder Único"
                        ]
                    },{
                        type: 'content',
                        content: [
                            "19,5% - 20%",
                            "É Possível despertar uma forma Alfa"
                        ]
                    },
                ]
            },
        ]
    },{
        card_id: 3,
        content: [
            {
                type: 'title',
                content: "Arquétipos"
            },{
                type: 'subtitle',
                content: "O que são"
            },{
                type: 'paragraph',
                content: "Arquétipos são características que personagens adquirem ao longo de sua aventura e que influenciam em seu jeito de pensar e agir, alterando a interpretação e as ações desse personagem. No geral, arquétipos são pré disposições treinadas ou naturais de cada corpo que facilitam algumas ações do dia a dia e dificultam outras."
            },{
                type: 'subtitle',
                content: "Pra que serve"
            },{
                type: 'paragraph',
                content: "Esses arquétipos servem pra categorizar a função de cada um em um grupo de aventureiros e também pra acumular habilidades, além de guiar o player em uma linha específica de desenvolvimento do personagem pra ajudar o personagem a evoluir aquilo no qual ele ja é bom."
            },{
                type: 'subtitle',
                content: "Como usar"
            },{
                type: 'paragraph',
                content: "Nos níveis 0, 10, 20 e a cada 10 níveis, cada um recebe um ponto de arquétipo e com isso é possível escolher o próximo nível de arquétipo pra si, seja do arquétipo que você já possui ou de algum outro de deseja começar ou continuar. Se preferir, pode simplesmente não gastar e acumular, mas isso não traz benefício sistêmico nenhum."
            },{
                type: 'subtitle',
                content: "Sobre todos os arquetipos"
            },{
                type: 'quote',
                content: "Todos dão acesso a:"
            },{
                type: 'paragraph',
                content: "Skill, poder e desvantagem podendo ou não ter algumas passivas. Também beneficiam com um ponto de atributo por nível enquanto o arquétipo estiver sendo usado"
            },{
                type: 'paragraph',
                content: "Quando se pega um novo nível de arquétipo, tudo do arquétipo anterior é perdido exceto o ponto de atributo (Skill, poder e desvantagens) "
            },{
                type: 'paragraph',
                content: "O Mestrado de cada arquétipo apaga qualquer desvantagem anterior de arquétipo. Além de restaurar todos os poderes e Skills e poderes desse arquétipo até o momento."
            },{
                type: 'paragraph',
                content: "Ao atingir o Mestrado de qualquer arquétipo, o atributo referente a ele ganha o limite de 50."
            },{
                type: 'title',
                content: "Lista de Arquétipos"
            },{
                type: 'subtitle',
                content: "Escudo"
            },{
                type: 'quote',
                content: "Passiva:"
            },{
                type: 'paragraph',
                content: "Poderes de arquétipo gastam slot power pra funcionarem."
            },{
                type: 'quote',
                content: "Descrição:"
            },{
                type: 'paragraph',
                content: 'O famoso "tank" de uma party é geralmente desse arquétipo. Seu corpo abençoado pela genética da resistência física e boa constituição permite que ele possua mais vitalidade que os outros arquetipos, podendo aguentar golpes com mais resistência e também por mais tempo que a maioria. A aparência não é obrigatóriamente grande, mas geralmente é fácil identificar uma pessoa desse arquétipo por ser quem anda na frente em uma trilha, por sempre proteger seu grupo, e por possuir um grande escudo em uma das mãos. Além de um porte físico geralmente bem grande e robusto que se destaca em tamanho entre os demais com um forte senso protetor.'
            },{
                type: 'list',
                content: "NV 01 - Barreira"
            },{
                type: 'paragraph',
                content: "+1d4+1 de Capacidade Corporal e +1d4-1 de Capacidade Mental"
            },{
                type: 'quote',
                content: "Skill: "
            },{
                type: 'paragraph',
                content: "(Ativa) Enrigecer +1: Ganha o modificador da habilidade em armadura pra defesa passiva durante uma cena/combate, pode ser usado como reação."
            },{
                type: 'quote',
                content: "Gasto:"
            },{
                type: 'paragraph',
                content: "1E (Estamina)"
            },{
                type: 'quote',
                content: "Poder:"
            },{
                type: 'paragraph',
                content: "Perpétuo: Pra cada nível do personagem, ele recebe o dobro de vida que receberia normalmente, exceto é claro, os pontos extras adquiridos de outras formas além da evolução natural de nível"
            },{
                type: 'quote',
                content: "Desvantagem:"
            },{
                type: 'paragraph',
                content: "O XP caixa é reduzido pela metade, o que não impede a velocidade de evolução do Escudo, mas inibe a quantidade de XP Caixa que pode gastar com sua ficha."
            },{
                type: 'quote',
                content: "(Desvantagens só são válidos referente aos 10 níveis que o arquétipo é vigente)"
            },{
                type: 'list',
                content: "NV 02 - Torre"
            },{
                type: 'paragraph',
                content: "+1d4+1 de Capacidade Corporal e +1d4-1 de Capacidade Mental"
            },{
                type: 'quote',
                content: "Skil:"
            },{
                type: 'paragraph',
                content: "(Ativa) Provocar +1: Consegue provocar um inimigo específico pra atacar a si e não os aliados uma vez por turno e o modificador da habilidade equivale a quantidade de inimigos que pode atrair para si ao mesmo tempo, podendo escolher atrair menos, além de definir alvos específicos (Não funciona em aliados)"
            },{
                type: 'quote',
                content: "Gasto:"
            },{
                type: 'paragraph',
                content: "1E (Estamina)"
            },{
                type: 'quote',
                content: "Poder:"
            },{
                type: 'paragraph',
                content: 'Esponja: Com o toque, o Escudo pode absorver metade do dano causado ao aliado (Esse poder comba com o poder "Dor da Matilha" que um LiaCan Alfa tem para absorver todo o dano)'
            },{
                type: 'quote',
                content: "Desvantagem:"
            },{
                type: 'paragraph',
                content: "O Movimento é reduzido pela metade durante combates"
            },{
                type: "list",
                content: "NV 03 - Muro"
            },{
                type: "quote",
                content: "+1d4+1 de Capacidade Corporal e +1d4-1 de Capacidade Mental"
            },{
                type: "quote",
                content: "Skill:"
            },{
                type: "paragraph",
                content: "(Passiva) Revigorar +1: Quando o escudo sai do estado morrendo, faz um teste de Pele DT 20 e ao passar recupera salva guardas equivalentes à quantidade no modificador da Skill sem ultrapassar o seu máximo. "
            },{
                type: "quote",
                content: "Gasto:"
            },{
                type: "paragraph",
                content: "1E/salva guarda"
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: "Imortal: O indivíduo possui um salva guarda Extra de PV."
            },{
                type: "quote",
                content: "Desvantagem:"
            },{
                type: "paragraph",
                content: "A Iniciativa Reduz pela metade."
            },{
                type: "list",
                content: "NV 04 - Muralha"
            },{
                type: "paragraph",
                content: "+1d4+1 de Capacidade Corporal e +1d4-1 de Capacidade Mental"
            },{
                type: "quote",
                content: "Skill:"
            },{
                type: "paragraph",
                content: "(Passiva) Vingar +1: Quando o oponente golpeia o Escudo, também toma dano equivalente a metade do dano que causou no Escudo Muralha, somado o modificador da Skill no dano refletido (No dano crítico também dobra o modificador). "
            },{
                type: "quote",
                content: "Gasto:"
            },{
                type: "paragraph",
                content: "1E (Estamina)"
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: "Instante: Pode, como ação de movimento do turno, se teleportar pra frente de um ataque, drenando a reação de defesa de quem for protegido (Esse poder pode evoluir pra gastar ações livres e sem gastar reações de quem está sendo protegido). É uma Skill que pode ser usada uma vez por turno mesmo fora da sua vez devido à natureza de seu propósito."
            },{
                type: "quote",
                content: "Desvantagem:"
            },{
                type: "paragraph",
                content: "Depois da cena/combate que o Escudo Muralha ativa o poder ou a Skill do quarto nível de arquétipo em algum momento, o indivíduo fica fisicamente exausto na próxima cena/combate e o efeito passa quando essa cena/combate acaba. Essa condição deixa ele com metade de Mus, Pel e Olh, mas mantém o restante."
            },{
                type: "list",
                content: "NV 05 - Fortaleza"
            },{
                type: "paragraph",
                content: "+1d4+1 de Capacidade Corporal e +1d4-1 de Capacidade Mental"
            },{
                type: "quote",
                content: "Skill:"
            },{
                type: "paragraph",
                content: "(Ativa) Salvar +1: Caso aliados estejam morrendo, o Escudo Fortaleza pode fazer o teste de Salva Vidas (Mente DT 30) para recuperar 1 de PV do aliado caído (Só quem possui essa Skill pode fazer o teste)."
            },{
                type: "quote",
                content: "Gasto:"
            },{
                type: "paragraph",
                content: "1E (Estamina)"
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: "Permanente: Permite o arquétipo escudo tenha 20 pontos de vida por nivel e cada ponto extras adquiridos de outras formas além da evolução de nível vale 4 pontos. O segundo estágio desse poder permite que o Escudo Fortaleza possa dobrar seu limite do atributo pele e com um novo despertar desse poder, evoluir pra 30 PV por nível a custo de 5 de sua sanidade máxima."
            },{
                type: "list",
                content: "Mestrado:"
            },{
                type: "paragraph",
                content: "Protector: (Passiva) Além de poder ensinar todas as habilidades de seu Mestrado, todas elas podem evoluir até +8 no modificador. (Ativa) Pode reduzir a zero absolutamente qualquer dano de um único ataque, uma vez por combate/cena como ação livre (Não é válido pra ataques surpresas), mas pode escolher quem será o protegido desse ataque, mesmo que seja a si mesmo."
            },{
                type: "subtitle",
                content: "Lança"
            },{
                type: "quote",
                content: "Passiva: "
            },{
                type: "paragraph",
                content: "Poderes de arquétipo gastam slot power pra funcionarem."
            },{
                type: "quote",
                content: "Descrição:"
            },{
                type: "paragraph",
                content: "Tidos como os maiores heróis e geralmente quem recebe a glória das conquistas de um grupo, o Lança é aquele que possui um alto poder massivo de ataque, podendo gerar mais dano no inimigo que a maioria do grupo. Seu corpo é, por si só, uma máquina de bater. Visualmente, ele é geralmente aquele que tem os músculos mais bem definidos e construídos, hematomas e cicatrizes por todo o corpo, e está sempre ao lado do arquétipo escudo. Onde um protege e o outro bate, formando uma dupla letal quando o assunto é matar. São brutamontes que adoram batalhas, mas também são bons estrategistas. Apesar de não serem em sua maioria os mais inteligentes, a experiência trás a sabedoria da batalha."
            },{
                type: "list",
                content: "NV 01 - Faca"
            },{
                type: "paragraph",
                content: "+1d4+2 de Capacidade Corporal e +1d4-2 de Capacidade Mental"
            },{
                type: "quote",
                content: "Skill:"
            },{
                type: "paragraph",
                content: "(Ativa) Dobrar +1: Ao anunciar a skill sendo ativada antes de rolar o dado, é possivel tirar um acerto crítico em rolagens também com um 19 natural (o modificador serve pra diminuir a margem, pra fazer até um 15 natural ser crítico quando for +5)."
            },{
                type: "quote",
                content: "Gasto:"
            },{
                type: "paragraph",
                content: "1E (Estamina)"
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: "Amortizador: Dar o dobro de dano em qualquer ataque bem crítico, ou seja, o dano multiplica por 4 (8 de dano pra um lança é 32)."
            },{
                type: "quote",
                content: "Desvantagem:"
            },{
                type: "paragraph",
                content: "Sanidade natural pela metade, mas pontos comprados não são afetados por essa desvantagem. Isso se dá devido ao seu contato constante com a batalha que mexe com sua mente"
            },{
                type: "list",
                content: "NV 02 - Espada"
            },{
                type: "paragraph",
                content: "+1d4+2 de Capacidade Corporal e +1d4-2 de Capacidade Mental "
            },{
                type: "quote",
                content: "Skill:"
            },{
                type: "paragraph",
                content: "(Ativa) Demolir +1: Com uma ação principal, o indivíduo pode fazer uma manobra causar dano corporal."
            },{
                type: "quote",
                content: "Gasto:"
            },{
                type: "paragraph",
                content: "1E (Estamina)"
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: "Brutal: Quando gerado um dano crítico por alguém do grupo que tenha afinidade com o lanca, ele pode usar um golpe em conjunto pra que, unidos possam dar um dano adicional e nesse dano, a rolagem de dados feita por quem deu o crítico não é dobrada e sim triplicada."
            },{
                type: "quote",
                content: "Desvantagem:"
            },{
                type: "paragraph",
                content: "Não pode usar seu Poder Único até pegar um novo nível de arquétipo. Isso ocorre devido a massa concentrada de poder que fica incontrolável por um momento."
            },{
                type: "list",
                content: "NV 03 - Foice"
            },{
                type: "paragraph",
                content: "+1d4+2 de Capacidade Corporal e +1d4-2 de Capacidade Mental"
            },{
                type: "quote",
                content: "Skill:"
            },{
                type: "paragraph",
                content: "(Ativa) Surpreender +1: Todos os seus ataques são Ataques surpresa (Esquivar, bloquear e contra atacar dos oponentes atacados são rolados com desvantagem)."
            },{
                type: "quote",
                content: "Gasto:"
            },{
                type: "paragraph",
                content: "1E (Estamina) por ação extra"
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: "One More: Pode se ter mais uma ação principal além da natural que já possui."
            },{
                type: "quote",
                content: "Desvantagem:"
            },{
                type: "paragraph",
                content: "Não pode usar magia até pegar um novo nível de arquétipo"
            },{
                type: "list",
                content: "NV 04 - Machado"
            },{
                type: "paragraph",
                content: "+1d4+2 de Capacidade Corporal e +1d4-2 de Capacidade Mental"
            },{
                type: "quote",
                content: "Skill:"
            },{
                type: "paragraph",
                content: "(Ativa) Barbarisar +1: Quando se dá dano crítico, pode se gerar automaticamente o dano máximo possível daquele ataque. Essa habilidade pode ser usada, por combate/cena, o número de vezes equivalentes ao modificador da habilidade. "
            },{
                type: "quote",
                content: "Gasto:"
            },{
                type: "paragraph",
                content: "2E (Estamina)"
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: "Sombra: O movimento do Lança Machado é o dobro do normal quando está em combate."
            },{
                type: "quote",
                content: "Desvantagem:"
            },{
                type: "paragraph",
                content: "Sanidade natural pela Metade e dessa vez os pontos comprados também são afetados por essa desvantagem, custando o dobro pra serem comprados."
            },{
                type: "list",
                content: "NV 05 - Two Blade"
            },{
                type: "paragraph",
                content: "+1d4+2 de Capacidade Corporal e +1d4-2 de Capacidade Mental mental "
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: '(Ativo) Cirurgião: Ao dar um golpe que gere dano massivo no oponente (Mais da metade da vida máxima dele em dano de uma só vez), o "Decepar" permite arrancar um membro do oponente a escolha do atacante, contanto que não seja um membro vital como a cabeça (Essa excessão pode ser revogada pelo mestre caso o oponente venha inevitavlmente a óbito com esse dano).'
            },{
                type: "quote",
                content: "Poder:"
            },{
                type: "paragraph",
                content: "(Passivo): Pleno: Nenhuma Skill gasta Estamina a partir daqui, e nesse ponto a Estamina pode ser convertida em SP comum. O segundo estágio desse poder permite que o Lança Two Blade possa dobrar seu limite do atributo Músculo (De 20 pra 40)."
            },{
                type: "list",
                content: "Mestrado:"
            },{
                type: "quote",
                content: "Punch:"
            },{
                type: "quote",
                content: "(Passiva)"
            },{
                type: "paragraph",
                content: "Além de poder ensinar todas as habilidades de seu Mestrado, Todas elas podem evoluir até +8 no modificador. "
            },{
                type: "quote",
                content: "(Ativa)"
            },{
                type: "paragraph",
                content: '• No estágio 1, pode-se usar "Punho Suave". Nessa técnica o mestrando pode dar golpes que selam temporáriamente (1d4 turnos) um poder específico de quem for golpeado fisicamente (apenas golpes desarmados e corpo a corpo, sem poderes)'
            },{
                type: "paragraph",
                content: '• No estágio 2 Pode-se usar "Punho Furioso". Nessa técnica o mestrando pode quebrar ossos, causando o estado "Quebrado" ao oponente, que não poderá usar o membro danificado até o fim do combate ou por mais tempo, caso a narrativa/mestre defina isso.'
            },{
                type: 'subtitle',
                content: 'Grimório'
            },{
                type: 'quote',
                content: 'Passiva:'
            },{
                type: 'paragraph',
                content: 'Poderes de arquétipo gastam SP pra funcionarem'
            },{
                type: 'quote',
                content: 'Descrição:'
            },{
                type: 'paragraph',
                content: 'Sábios, conselheiros e eruditos são as qualidades mais atribuídas aos de arquétipo Grimório, mas isso se deve a sua sede incansável por conhecimento e busca por entender e conhecer sobre tudo. Toda a energia do seu dia a dia é voltada para o estudo e por isso seus corpos, na maioria das vezes, não são grande coisa. Mas isso não faz deles pessoas indefesas, já que sua maior arma sempre foi a mente. Ainda assim, existem aqueles que mesmo se destacando por seu físico definido e as até avantajado, são Grimórios por natureza.'
            },{
                type: 'list',
                content: 'NV 01 - Estudante'
            },{
                type: 'paragraph',
                content: '+1d4-2 de Capacidade Corporal e +1d4+2 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Perceber +1: Pode investigar a situação com o olhar (ação livre) e com sucesso, fazer descobertas de coisas ocultas ou alheias à percepção natural.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Analista: (Ativa) Permite observar objetos e entender sua composição com o olhar (processo precisa de 6 turnos/1 minuto pra terminar). (Passiva) XP Caixa recebido é dobrado naturalmente.'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Vida pela metade.'
            },{
                type: 'list',
                content: 'NV 02 - Conselheiro '
            },{
                type: 'paragraph',
                content: '+1d4-2 de Capacidade Corporal e +1d4+2 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Acalmar +1: Pode tirar pessoas do estado "Enlouquecendo" e curar sanidade com diplomacia, inpirações e etc.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Centrado: O indivíduo possui um salva guarda Extra de Sanidade.'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Não pode possuir ou usar Skills de Escudo a não ser que pegue o mestrado completo de uma vez.'
            },{
                type: 'list',
                content: 'NV 03 - Conhecedor'
            },{
                type: 'paragraph',
                content: '+1d4-2 de Capacidade Corporal e +1d4+2 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Invadir +1: Com seu próprio intelecto, o individuo pode gerar um dano de sanidade baseado no atributo Mente pro ataque e a resistência mental se torna o dano, mas a forma que é executado depende do personagem.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Elementar: Toda Acão é reduzida em uma categoria (Ações completas se tornam principais, principais se tornam de movimento e ações de movimento se tornam livres, exceto movimentação de deslocamento corporal).'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Não pode possuir ou usar Skills de arco, a não ser que pegue o mestrado completo de uma vez.'
            },{
                type: 'list',
                content: 'NV 04 - Sábio'
            },{
                type: 'paragraph',
                content: '+1d4-2 de Capacidade Corporal e +1d4+2 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Avaliar +1: Pode fazer testes para analizar comportamentos de indivíduos e sua linguagem não verbal.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Poliglota: Qualquer língua moderna que seja analisada por uma hora pode ser apendida por um Grimório Sábio que pode usar ela em um nível funcional da língua, em uma semana se torna mediano, um mês fluente e em 2 meses se torna nativo.'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Tem uma tendência viciante e quase mortal por conhecimento, principalmente conhecimento obscuro (Caso o personagem já tenha Desenvolvido isso anteriormente de forma natural, não recebe essa desvantagem).'
            },{
                type: 'list',
                content: 'NV 05 - Sensei'
            },{
                type: 'paragraph',
                content: '+1d4-2 de Capacidade Corporal e +1d4+2 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Critar +1: Ao observar, sabe onde o golpe vai acertar um crítico automático (Caso o golpe já seja um crítico natural, o dano base é adicionado mais uma vez).'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Rede: Pode gerar e quebrar redes de comunicação neural entre seres vivos (Redes geradas duram 1 dia).'
            },{
                type: 'list',
                content: 'Mestrado:'
            },{
                type: 'paragraph',
                content: 'Erudito: (Passiva) Além de poder ensinar todas as habilidades de seu Mestrado, Todas elas podem evoluir até +8 no modificador. (Ativa) Sua mente é tão poderosa, que pode apenas com análise, ler a mente ativa de quem quiser (mente vs mente) e não possui mais o limite de tempo do poder "Rede".'
            },{
                type: 'subtitle',
                content: 'Arco'
            },{
                type: 'quote',
                content: 'Passiva:'
            },{
                type: 'paragraph',
                content: 'Poderes de arquétipo gastam Slot Power para funcionarem'
            },{
                type: 'paragraph',
                content: 'As passivas de percepção de arco não gastam estamina ou SP'
            },{
                type: 'quote',
                content: 'Descrição:'
            },{
                type: 'paragraph',
                content: 'Esguios, silenciosos e furtivos, os de arquétipo arco estão acostumados com a escuridão. Atacam de longe e passam mais tempo mirando do que atirando, mas raramente erram um tiro quando o lançam. São habilidosose cheios de truques, malandros por natureza, então raramente são notados a não ser que queiram. No grupo, ele dá suporte aos que atacam de perto, enquanto os Escudos estão ocupados. Visualmente são como camaleões e difícil de se identificar, mas podem ser identificados pelo seu jeito confiante de andar e o mesmo olhar matador de alguns do arquétipo Trono, ou pelo seu porte esguio da maioria dos de arquétipo Grimório, além de estar sempre com alguma arma de longa distância, seja à vista ou não.'
            },{
                type: 'list',
                content: 'NV 01 - M30 '
            },{
                type: 'paragraph',
                content: '+1d4 de Capacidade Corporal e +1d4 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Esconder +3: Tendo sucesso no teste, o indivíduo fica furtivo e não será visto pelo próximo turno inteiro do combate e em cenas fica a cena toda furtivo a não ser que saia de sua posição furtiva. (Condição: Testes de Percepção com a rolagem superior a da furtividade superam a ocultação em relação a quem fez o teste).'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Kage Bunshin: Podem ser criados clones ilusórios na quantidade equivalente ao seu modificador da habilidade "Esconder" que duram por uma cena/combate ou até o invocador dos clones desfazer eles, mas cada um só aguenta um golpe físico e se desfaz com isso tbm.'
            },{
                type: 'paragraph',
                content: '(Passiva) Pode fazer testes de percepção em um raio de 15 metros. '
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Limite de defesa passiva é metade.'
            },{
                type: 'list',
                content: 'NV 02 - M80'
            },{
                type: 'paragraph',
                content: '+1d4 de Capacidade Corporal e +1d4 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Manobrar +3: Pode fazer manobras que geralmente apenas um atleta treinado em acrobacias conseguiria.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Atento: Nenhum ataque é surpresa, mesmo que seja contra uma rolagem crítica de furtividade, e também inibe a skill "Surpreender". (Passiva) Pode fazer testes de percepção em um raio de 25 metros.'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Pontos de defesa passiva custam o dobro de XPC.'
            },{
                type: 'list',
                content: 'NV 03 - M100'
            },{
                type: 'paragraph',
                content: '+1d4 de Capacidade Corporal e +1d4 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: 'Acertar +3: Como ação ou reação, é possível aplicar o modificador da Skill ao dado escolhido, ou então adicionar um dado extra na rolagem, mas antes de rolar deve anunciar se o modificador ou o dado serão somados ao acerto ou ao dano à escolha do jogador, e será válido contanto que ele escolha antes da jogada onde pretende aplicar o benefício (Acerto ou dano) e caso não escolha, a Skill não é aplicada.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Insano:'
            },{
                type: 'paragraph',
                content: '(Ativa) Tem esquivas infinitas pela cena/combate.'
            },{
                type: 'paragraph',
                content: '(Passiva) Pode fazer testes de percepção em um raio de 50 metros, mas leva 3 turnos/meio minuto pra isso.'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Não pode usar armaduras.'
            },{
                type: 'list',
                content: 'NV 04 - M300'
            },{
                type: 'paragraph',
                content: '+1d4 de Capacidade Corporal e +1d4 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: 'Previnir +3: Mesmo com os sentidos inibidos, o indivíduo pode fazer testes de percepção durante uma cena/combate.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Enérgico: (Ativa) Tem Contra-ataques e Bloqueios infinitos durante 1 combate/cena. (Passiva) Pode fazer testes de percepção em um raio de 150 metros, mas leva 6 turnos/1 minuto pra isso.'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Não pode usar poderes de qualquer entidade até pegar um novo nível de arquétipo.'
            },{
                type: 'list',
                content: 'NV 05 - M500'
            },{
                type: 'paragraph',
                content: '+1d4 de Capacidade Corporal e +1d4 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Tatear +3: Pode se mover furtivo a mesma quantidade de movimento que se tem, sem a penalidade de meio movimento ao estar furtivo.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina) '
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: '(Ativa) Sombra: Teleporte dentro do ambiente (só funciona em ambientes abertos num raio de 50 metros). (Passiva) Sensoriamento num raio de um quilômetro. '
            },{
                type: 'paragraph',
                content: 'Mestrado:'
            },{
                type: 'paragraph',
                content: 'Morte Silenciosa: (Passiva) Além de poder ensinar todas as habilidades de seu Mestrado, todas elas podem evoluir até +8 no modificador. (Ativa) Ao contabilizar todos os dados de dano gerados no último turno, o próximo ataque converte a mesma quantidade de dados em d6 (com evolução de calibre) e se o ataque acertar, pode gerar essa quantidade em dano equivalente. Contudo, o mestrando não pode ter levado nenhum dano durante todo o último turno, e deve manter o oponente alvo em seu campo de vista o tempo todo sem poder mudar de alvo te liberar o ataque.'
            },{
                type: 'paragraph',
                content: 'Trono'
            },{
                type: 'paragraph',
                content: 'Passiva: '
            },{
                type: 'paragraph',
                content: 'Poderes de arquétipo gastam Slot Power pra funcionarem.'
            },{
                type: 'paragraph',
                content: 'Descrição:'
            },{
                type: 'paragraph',
                content: 'Se arcos são malandros, Os Tronos dão aula. Onde quer que vão, chamam atenção independente de desejarem isso ou não. Seja por fama, por ser temido, incrivelmente lindo ou apenas por ser carismático, os Tronos são geralmente a voz do povo. Líderes natos e poderosos aliados na hora de convencer outras pessoas. Eles usam de conhecimento sobre a mente e as vezes sua própria fama pra convencer e às vezes enganar e assim, conseguirem o que querem. Sua aparência alcança os mais variados estilos e é dificil de identificar ele com certeza no grupo, mas aquele que mais chamar atenção, seja por sua beleza, por sua fama ou por suas características horrendas geralmente é o Trono e é ele quem vai desenvolver as relações interpessoais do grupo na maioria das vezes.'
            },{
                type: 'list',
                content: 'NV 01 - Carismático'
            },{
                type: 'paragraph',
                content: '+1d4-1 de Capacidade Corporal e +1d4+1 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Convencer +1: Com um teste (Aura vs Mente ou Aura) pode se convencer a atos pequenos e médios a seu favor.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Infinito (passivo): Todo Slot Power que recebe é dobrado, além disso, pra comprar +1 custa metade do XP.'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Recebe metade da estamina normal por nível (Arredondando pra cima)'
            },{
                type: 'list',
                content: 'NV 02 - Imponente'
            },{
                type: 'paragraph',
                content: '+1d4-1 de Capacidade Corporal e +1d4+1 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Amedrontar +1: Com um teste (Aura vs Aura) pode amedrontar e/ou convencer pelo medo/respeito o alvo do teste.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Facinante: Permite, com uma ação livre, deixar alguém perplexo por um turno, fazendo dele, vulnerável a ataques e outras interações externas sem se lembrar depois do que aconteceu (Pode causar alucinações pequenas com esse poder).'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Recebe metade da estamina normal por nível (Arredondando pra baixo).'
            },{
                type: 'list',
                content: 'NV 03 - Reconhecido'
            },{
                type: 'paragraph',
                content: '+1d4-1 de Capacidade Corporal e +1d4+1 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Passiva) Portar +1: Tem maiores chances de sobreviver a empunhaduras indignas (Resistir reduz dano pela metade, seja físico ou mental).'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Manifesto: Pode transformar sua presença em uma aura palpável com formatos físicos pra produzir construtos a partir do próprio corpo (parecido com o que os Paládios Playfull fazem com suas sombras, portanto usa 1E/turno pra ser usada como se fosse um poder de raça).'
            },{
                type: 'quote',
                content: 'Desvantagem:'
            },{
                type: 'paragraph',
                content: 'Recebe metade da estamina em todos os casos, mesmo compras ou presentes.'
            },{
                type: 'list',
                content: 'NV 04 - Famoso'
            },{
                type: 'paragraph',
                content: '+1d4-1 de Capacidade Corporal e +1d4+1 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Passiva) Impenetrar +3: Resiste a ataques mentais ou à sanidade.'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Penitente: Produz um ataque que causa dano mental em quem o olhar nos olhos (ataque como ação livre). Desvantagem: Precisa do dobro de E para usar qualquer Skill.'
            },{
                type: 'list',
                content: 'NV 05 - Ídolo'
            },{
                type: 'paragraph',
                content: '+1d4-1 de Capacidade Corporal e +1d4+1 de Capacidade Mental'
            },{
                type: 'quote',
                content: 'Skill:'
            },{
                type: 'paragraph',
                content: '(Ativa) Famoso +1: Permite que uma vez por cena/combate, faça um teste de Aura em área ou não e se passar, garante que um ou todos os presentes o reconheçam por um feito positivo e sejam mais passivos a novos testes de Aura com um debuff de 5 contra o usuário da Skill por tempo indeterminado ou até que algum feito quebre diretamente essa admiração (Se for crítico, o debuff é de 10 e de for falha, é o ídolo que recebe esse debuff de 5 ou de 10 no caso de ser falha crítica).'
            },{
                type: 'quote',
                content: 'Gasto:'
            },{
                type: 'paragraph',
                content: '1E (Estamina)'
            },{
                type: 'quote',
                content: 'Poder:'
            },{
                type: 'paragraph',
                content: 'Exalar: Pode Exalar sua aura por uma cidade inteira e manifestar testes de Aura podendo convencer multidões ou intimidar nações.'
            },{
                type: 'paragraph',
                content: 'Mestrado:'
            },{
                type: 'paragraph',
                content: 'Digno: (Passiva) Além de poder ensinar todas as habilidades de seu Mestrado, todas elas podem evoluir até +8 no modificador. (Ativa) Pode portar absolutamente qualquer arma (Exceto longinus) como um portador digno.'
            },
        ]
    }
]

export {
    cards_content
}