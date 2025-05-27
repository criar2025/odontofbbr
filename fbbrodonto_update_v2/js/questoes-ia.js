// Funções para gerar questões de IA
function gerarQuestaoIA(especialidade) {
    // Definições de questões por especialidade
    const questoesPorEspecialidade = {
        'cirurgia': [
            {
                pergunta: "Qual das seguintes estruturas anatômicas NÃO está relacionada ao nervo alveolar inferior?",
                opcoes: [
                    "Forame mentual",
                    "Língula da mandíbula",
                    "Canal incisivo",
                    "Forame palatino maior"
                ],
                correta: 3,
                explicacao: "O forame palatino maior está relacionado ao nervo palatino maior, que é um ramo do nervo maxilar (V2), e não ao nervo alveolar inferior, que é um ramo do nervo mandibular (V3)."
            },
            {
                pergunta: "Em relação às técnicas de exodontia, qual afirmação está CORRETA?",
                opcoes: [
                    "A luxação deve ser realizada antes da sindesmotomia",
                    "O fórceps 150 é indicado para molares superiores",
                    "A via alveolar é contraindicada para dentes inclusos",
                    "O movimento de rotação é contraindicado em dentes unirradiculares"
                ],
                correta: 2,
                explicacao: "A via alveolar é contraindicada para dentes inclusos, sendo necessária uma abordagem cirúrgica com retalho mucoperiosteal e osteotomia."
            }
        ],
        'dentistica': [
            {
                pergunta: "Qual material restaurador apresenta a maior contração de polimerização?",
                opcoes: [
                    "Amálgama",
                    "Resina composta",
                    "Cimento de ionômero de vidro",
                    "Cerâmica odontológica"
                ],
                correta: 1,
                explicacao: "As resinas compostas apresentam contração de polimerização significativa, que pode variar de 2% a 5% do volume, sendo maior que os demais materiais citados."
            },
            {
                pergunta: "Qual técnica é mais indicada para restaurações de classe IV em dentes anteriores com grande perda de estrutura?",
                opcoes: [
                    "Técnica direta com resina composta",
                    "Faceta direta de resina composta",
                    "Faceta indireta de cerâmica",
                    "Restauração de amálgama"
                ],
                correta: 2,
                explicacao: "Facetas indiretas de cerâmica são mais indicadas para restaurações de classe IV com grande perda de estrutura, pois oferecem maior resistência, estabilidade de cor e longevidade."
            }
        ],
        'endodontia': [
            {
                pergunta: "Qual instrumento endodôntico é mais indicado para a remoção de material obturador durante o retratamento endodôntico?",
                opcoes: [
                    "Lima tipo K",
                    "Lima tipo Hedströem",
                    "Lima rotatória ProTaper",
                    "Instrumento ultrassônico"
                ],
                correta: 1,
                explicacao: "A lima tipo Hedströem possui design específico com lâminas inclinadas que facilitam a remoção de material obturador durante o retratamento endodôntico."
            },
            {
                pergunta: "Qual solução irrigadora apresenta maior capacidade de dissolução de tecido pulpar?",
                opcoes: [
                    "Soro fisiológico",
                    "Clorexidina 2%",
                    "Hipoclorito de sódio 5,25%",
                    "EDTA 17%"
                ],
                correta: 2,
                explicacao: "O hipoclorito de sódio 5,25% possui a maior capacidade de dissolução de tecido pulpar entre as opções, sendo amplamente utilizado como irrigante principal em endodontia."
            }
        ],
        'periodontia': [
            {
                pergunta: "Qual é o principal fator etiológico da doença periodontal?",
                opcoes: [
                    "Trauma oclusal",
                    "Biofilme dental",
                    "Predisposição genética",
                    "Tabagismo"
                ],
                correta: 1,
                explicacao: "O biofilme dental (placa bacteriana) é considerado o principal fator etiológico da doença periodontal, embora fatores como tabagismo e predisposição genética sejam importantes modificadores."
            },
            {
                pergunta: "Qual técnica cirúrgica é mais indicada para aumento de coroa clínica em região estética anterior?",
                opcoes: [
                    "Gengivectomia",
                    "Retalho posicionado apicalmente com osteotomia",
                    "Enxerto gengival livre",
                    "Regeneração tecidual guiada"
                ],
                correta: 1,
                explicacao: "O retalho posicionado apicalmente com osteotomia é a técnica mais indicada para aumento de coroa clínica em região estética anterior, pois permite o reposicionamento da margem gengival e a remodelação óssea necessária, preservando a estética."
            }
        ],
        'ortodontia': [
            {
                pergunta: "Qual é a idade ideal para início do tratamento ortopédico funcional em pacientes com má oclusão de Classe II por retrusão mandibular?",
                opcoes: [
                    "3 a 5 anos",
                    "6 a 9 anos",
                    "10 a 12 anos",
                    "Após os 14 anos"
                ],
                correta: 1,
                explicacao: "A idade ideal para início do tratamento ortopédico funcional em pacientes com má oclusão de Classe II por retrusão mandibular é entre 6 e 9 anos, período que coincide com o surto de crescimento pré-puberal."
            },
            {
                pergunta: "Qual movimento dentário apresenta maior risco de reabsorção radicular?",
                opcoes: [
                    "Intrusão",
                    "Extrusão",
                    "Rotação",
                    "Inclinação vestibular"
                ],
                correta: 0,
                explicacao: "A intrusão é o movimento dentário que apresenta maior risco de reabsorção radicular, devido à concentração de forças no ápice radicular e à compressão do ligamento periodontal."
            }
        ],
        'radiologia': [
            {
                pergunta: "Qual técnica radiográfica é mais indicada para avaliação de lesões periapicais em molares superiores?",
                opcoes: [
                    "Periapical pela técnica da bissetriz",
                    "Periapical pela técnica do paralelismo",
                    "Interproximal (bite-wing)",
                    "Oclusal"
                ],
                correta: 1,
                explicacao: "A técnica periapical do paralelismo é a mais indicada para avaliação de lesões periapicais em molares superiores, pois proporciona menor distorção e melhor visualização das estruturas periapicais."
            },
            {
                pergunta: "Qual exame de imagem é mais indicado para avaliação de articulação temporomandibular?",
                opcoes: [
                    "Radiografia panorâmica",
                    "Radiografia cefalométrica lateral",
                    "Tomografia computadorizada de feixe cônico",
                    "Ressonância magnética"
                ],
                correta: 3,
                explicacao: "A ressonância magnética é o exame de escolha para avaliação da ATM, pois permite visualizar tanto os componentes ósseos quanto os tecidos moles, especialmente o disco articular."
            }
        ],
        'implantodontia': [
            {
                pergunta: "Qual é a distância mínima recomendada entre dois implantes adjacentes?",
                opcoes: [
                    "1 mm",
                    "2 mm",
                    "3 mm",
                    "5 mm"
                ],
                correta: 2,
                explicacao: "A distância mínima recomendada entre dois implantes adjacentes é de 3 mm, para preservar o osso interproximal e permitir adequada formação de papila gengival."
            },
            {
                pergunta: "Qual técnica é mais indicada para aumento de volume ósseo horizontal em região anterior de maxila?",
                opcoes: [
                    "Regeneração óssea guiada",
                    "Distração osteogênica",
                    "Enxerto em bloco",
                    "Elevação de seio maxilar"
                ],
                correta: 2,
                explicacao: "O enxerto em bloco é a técnica mais indicada para aumento de volume ósseo horizontal em região anterior de maxila, pois proporciona ganho previsível de espessura óssea."
            }
        ],
        'protese': [
            {
                pergunta: "Qual material é mais indicado para moldagem de preparos subgengivais em prótese fixa?",
                opcoes: [
                    "Alginato",
                    "Silicone de condensação",
                    "Silicone de adição",
                    "Poliéter"
                ],
                correta: 3,
                explicacao: "O poliéter é o material mais indicado para moldagem de preparos subgengivais em prótese fixa, devido à sua excelente estabilidade dimensional, hidrofilia e capacidade de reprodução de detalhes."
            },
            {
                pergunta: "Qual é o espaço biológico ideal entre a margem da restauração e a crista óssea alveolar?",
                opcoes: [
                    "0,5 mm",
                    "1,0 mm",
                    "2,0 mm",
                    "3,0 mm"
                ],
                correta: 2,
                explicacao: "O espaço biológico ideal entre a margem da restauração e a crista óssea alveolar é de aproximadamente 2,0 mm, sendo composto por epitélio juncional (0,97 mm) e inserção conjuntiva (1,07 mm)."
            }
        ],
        'odontopediatria': [
            {
                pergunta: "Qual é a técnica de manejo comportamental mais indicada para crianças não colaboradoras entre 2 e 4 anos de idade?",
                opcoes: [
                    "Dizer-mostrar-fazer",
                    "Controle de voz",
                    "Contenção física",
                    "Sedação consciente"
                ],
                correta: 2,
                explicacao: "A contenção física pode ser necessária para crianças não colaboradoras entre 2 e 4 anos, quando outras técnicas não são eficazes e o tratamento é urgente, sempre com consentimento dos responsáveis."
            },
            {
                pergunta: "Qual material é mais indicado para selamento de fóssulas e fissuras em molares permanentes recém-erupcionados?",
                opcoes: [
                    "Cimento de ionômero de vidro",
                    "Selante resinoso",
                    "Resina flow",
                    "Cimento de fosfato de zinco"
                ],
                correta: 0,
                explicacao: "O cimento de ionômero de vidro é mais indicado para selamento de molares permanentes recém-erupcionados, pois tolera melhor a umidade durante a aplicação e libera flúor, sendo ideal para dentes em erupção com controle de umidade difícil."
            }
        ]
    };

    // Verificar se a especialidade existe no objeto
    if (!questoesPorEspecialidade[especialidade]) {
        // Usar cirurgia como padrão se a especialidade não for encontrada
        especialidade = 'cirurgia';
    }

    // Retornar as questões da especialidade
    return questoesPorEspecialidade[especialidade];
}

// Função para exibir questões no modal
function exibirQuestoesIA(especialidade, container) {
    const questoes = gerarQuestaoIA(especialidade);
    let html = '';
    
    questoes.forEach((questao, index) => {
        html += `
            <div class="ia-question" id="questao-${especialidade}-${index}">
                <p class="ia-question-text">${index + 1}. ${questao.pergunta}</p>
                <ul class="ia-options">
        `;
        
        questao.opcoes.forEach((opcao, opcaoIndex) => {
            html += `
                <li class="ia-option" data-correct="${opcaoIndex === questao.correta ? 'true' : 'false'}">
                    ${String.fromCharCode(65 + opcaoIndex)}) ${opcao}
                </li>
            `;
        });
        
        html += `
                </ul>
                <div class="ia-explanation">
                    <strong>Explicação:</strong> ${questao.explicacao}
                </div>
            </div>
        `;
    });
    
    html += `
        <button class="ia-generate-btn" data-especialidade="${especialidade}">
            Gerar novas questões
        </button>
    `;
    
    container.innerHTML = html;
    
    // Adicionar eventos aos elementos recém-criados
    const options = container.querySelectorAll('.ia-option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const questionContainer = this.closest('.ia-question');
            const options = questionContainer.querySelectorAll('.ia-option');
            const explanation = questionContainer.querySelector('.ia-explanation');
            
            options.forEach(opt => {
                opt.classList.remove('selected');
                if (opt.getAttribute('data-correct') === 'true') {
                    opt.classList.add('correct');
                } else if (opt === this && opt.getAttribute('data-correct') !== 'true') {
                    opt.classList.add('incorrect');
                }
            });
            
            this.classList.add('selected');
            explanation.style.display = 'block';
        });
    });
    
    const generateBtn = container.querySelector('.ia-generate-btn');
    generateBtn.addEventListener('click', function() {
        const especialidade = this.getAttribute('data-especialidade');
        const questionsContainer = container;
        
        // Mostrar mensagem de carregamento
        const loadingMsg = document.createElement('p');
        loadingMsg.textContent = 'Gerando novas questões...';
        loadingMsg.classList.add('loading-msg');
        questionsContainer.appendChild(loadingMsg);
        
        // Simular tempo de carregamento e gerar novas questões
        setTimeout(() => {
            questionsContainer.removeChild(loadingMsg);
            exibirQuestoesIA(especialidade, questionsContainer);
        }, 1500);
    });
}
