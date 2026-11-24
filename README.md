ORBIT — Controle Espacial
Simulador de painel de controle com temática espacial voltado para gerenciamento e teste de volume de áudio. Projeto acadêmico desenvolvido exclusivamente com tecnologias web nativas (HTML5 e JavaScript Vanilla), sem uso de frameworks, bibliotecas externas ou folhas de estilo CSS.

🚀 Como Executar
Clone ou baixe este repositório.
Certifique-se de que index.html e orbit.js estejam na mesma pasta.
Dê dois cliques em index.html para abrir diretamente em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
Não é necessário servidor local, Node.js ou instalação de pacotes.

🎮 Mecânicas e Regras
Aumentar Volume (+ AUMENTAR): incrementa o volume em passos de 5% até o teto de 100%. Ao atingir o limite máximo, o botão é bloqueado para evitar saturação.
Diminuir Volume (− DIMINUIR): reduz o volume em passos de 5% até o piso de 0%. No limite mínimo, o botão é bloqueado e o sistema sinaliza volume zero.
Mudo e Restauração (MUDO): o primeiro acionamento zera o canal de áudio e salva o valor anterior em memória. O segundo acionamento restaura o volume exato previamente configurado.
Reinicialização (RESETAR): restaura o painel para as configurações seguras de fábrica (50% de volume, canal sonoro ativo e sistema online).
Recursos adicionais:

Iniciar Sistema (INICIAR SISTEMA): ativa os subsistemas da nave e atualiza a telemetria.
Teste de Áudio (TESTAR ÁUDIO): sintetiza um tom contínuo de 440 Hz (nota Lá) por 3 segundos via Web Audio API, com intensidade proporcional ao volume selecionado.
🛠️ Tecnologias Utilizadas
HTML5: estrutura semântica dos controles, barra de progresso nativa e ilustração vetorial da nave via SVG embutido.
JavaScript (ES6+): controle de estado em memória, tratamento de eventos do DOM e síntese sonora nativa via AudioContext.
Zero Dependências: sem CSS externo, sem npm e sem bibliotecas de terceiros.
📁 Estrutura de Arquivos
ORBIT/
├── index.html   # Interface, elementos de controle e SVG
├── orbit.js     # Lógica de negócio, regras de volume e áudio
└── README.md    # Documentação e guia de uso
👨‍💻 Autor
Demetrius De Moura Silva Oliveira — Projeto Acadêmico UNICAP.
