const articles = [
  {
    id: 'dio-001',
    groupId: 'ollama',
    lang: 'pt',
    title: 'Ollama: rodando IA localmente de forma simples',
    date: 'Jan 2026',
    excerpt:
      'Uma introdução prática à Ollama e à ideia de rodar modelos de IA localmente, sem depender de APIs ou serviços em nuvem.',
    content: `
Comecei a explorar esse mundo de IA e, em uma dessas conversas, um professor me apresentou a Ollama. Fiquei bem interessado na ideia de rodar uma IA localmente na minha própria máquina e poder usar modelos específicos, sem depender de API ou serviços na nuvem.

Até então, tudo o que eu tinha visto sobre IA sempre passava por alguma plataforma online, chave de API ou limite de uso. A Ollama chamou atenção justamente por ir na contramão disso.

## O que é a Ollama?

A Ollama é uma ferramenta que facilita o uso de modelos de linguagem (LLMs) rodando localmente, direto no seu computador. Com poucos comandos, você consegue baixar um modelo, executar e já começar a interagir com ele pelo terminal.

Ela suporta vários modelos conhecidos, como Llama, Mistral, Gemma, entre outros. O foco não é esconder como tudo funciona, mas sim tornar o processo simples o suficiente pra quem está aprendendo.

## Por que rodar IA localmente?

Pra quem está começando, rodar IA localmente pode ser bem interessante por alguns motivos:

- Você não precisa criar conta nem configurar API
- Os prompts e respostas ficam na sua máquina (mais privacidade)
- Dá pra entender melhor como funciona o uso de modelos fora da “caixa-preta” da nuvem
- É ótimo para testes, estudos e experimentos

Claro, existe um ponto de atenção: os modelos podem ser pesados e o desempenho depende do seu hardware. Mesmo assim, para aprendizado, a experiência já vale bastante.

## Mini passo a passo básico

### 1) Instalação
Depois de instalar a Ollama no seu sistema operacional, ela já fica disponível no terminal.

### 2) Rodando seu primeiro modelo
Com tudo instalado, você pode rodar um modelo com um único comando:

\`\`\`
ollama run gemma3
\`\`\`

Na primeira vez, o modelo será baixado automaticamente. Depois disso, a Ollama já abre um prompt interativo para você conversar com a IA.

Você pode testar com perguntas simples, por exemplo:

- “Me explica o que é uma função em Python”
- “Crie um exemplo simples de if/else”
- “Explique esse erro de código”

### 3) Alguns comandos úteis

\`\`\`
ollama list      # lista os modelos baixados
ollama ps        # mostra o que está rodando
ollama stop NOME # para um modelo em execução
ollama rm NOME   # remove um modelo do sistema
\`\`\`

Eles ajudam a manter controle dos modelos e também a liberar espaço quando necessário.

Para quem está começando a explorar IA, a Ollama acaba sendo uma ferramenta bem interessante. Ela permite aprender, testar e errar sem depender de serviços externos, além de dar mais controle sobre os modelos que você está usando.

Para mim, foi uma forma bem mais concreta de entender como essas IAs funcionam fora do ambiente de nuvem.
`,
    image: 'https://hermes.dio.me/articles/cover/680c4cbe-e148-43dd-918f-4fa2a4d9e7b3.jpg',
    href: '#',
    published: true,
  },
  {
    id: 'dio-002',
    groupId: 'ollama',
    lang: 'en',
    title: 'Ollama: running AI locally the simple way',
    date: 'Jan 2026',
    excerpt:
      'A practical introduction to Ollama and the idea of running AI models locally, without relying on APIs or cloud services.',
    content: `
I’ve recently started exploring the world of AI, and during one of these learning moments, a professor introduced me to Ollama. I was immediately curious about the idea of running an AI locally on my own machine and using specific models without depending on APIs or cloud services.

Up until then, almost everything I had seen about AI involved some online platform, an API key, or usage limits. Ollama stood out precisely because it goes in the opposite direction.

## What is Ollama?

Ollama is a tool that makes it easy to run large language models (LLMs) locally, directly on your computer. With just a few commands, you can download a model, run it, and start interacting with it through the terminal.

It supports several well-known models such as Llama, Mistral, Gemma, and others. The goal isn’t to hide how things work, but to make the process simple enough for people who are just getting started.

## Why run AI locally?

For beginners, running AI locally can be very interesting for a few reasons:

- No need to create accounts or configure APIs
- Prompts and responses stay on your machine (more privacy)
- Better understanding of how models work outside the “cloud black box”
- Great for tests, studies, and experiments

Of course, there’s a trade-off: models can be heavy, and performance depends on your hardware. Even so, for learning purposes, the experience is totally worth it.

## Basic quick start

### 1) Installation
After installing Ollama on your operating system, it becomes available directly in the terminal.

### 2) Running your first model
Once everything is set up, you can run a model with a single command:

\`\`\`
ollama run gemma3
\`\`\`

The first time you run it, the model will be downloaded automatically. After that, Ollama opens an interactive prompt so you can chat with the AI.

You can try simple questions like:

- “Explain what a function is in Python”
- “Create a simple if/else example”
- “Explain this code error”

### 3) Useful commands

\`\`\`
ollama list      # list downloaded models
ollama ps        # show running models
ollama stop NAME # stop a running model
ollama rm NAME   # remove a model from the system
\`\`\`

These commands help you keep track of your models and free up disk space when needed.

For anyone starting to explore AI, Ollama turns out to be a very interesting tool. It allows you to learn, test, and make mistakes without relying on external services, while giving you more control over the models you use.

For me, it was a much more concrete way to understand how AI works outside the cloud environment.
`,
    image: 'https://hermes.dio.me/articles/cover/680c4cbe-e148-43dd-918f-4fa2a4d9e7b3.jpg',
    href: '#',
    published: true,
  },
  {
    id: 'dio-003',
    groupId: 'python-indent',
    lang: 'pt',
    title: 'Por que o Python usa indentação em vez de chaves?',
    date: 'Fev 2026',
    excerpt:
      'Entenda a decisão de design por trás da indentação obrigatória no Python e por que isso melhora a legibilidade.',
    content: `
Quando comecei a aprender Python, uma das primeiras coisas que me chamou atenção foi o fato de a linguagem não usar chaves \`{}\` para definir blocos de código, como acontece em linguagens como C#, Java ou JavaScript.

Em vez disso, o Python utiliza **indentação obrigatória**.

Pesquisando sobre isso, li que não é um detalhe técnico por acaso. É uma decisão de design bem consciente.

Em linguagens como C# ou Java, os blocos são definidos por chaves, e a indentação serve apenas para organização visual:

\`\`\`
if (x > 10) {
  Console.WriteLine("Maior que 10");
}
\`\`\`

No Python, a indentação faz parte da sintaxe:

\`\`\`
if x > 10:
  print("Maior que 10")
\`\`\`

Os dois pontos (\`:\`) no Python servem como um aviso de que um bloco de código vem logo em seguida. Eles não substituem a indentação, mas trabalham junto com ela para deixar a estrutura do código clara e explícita.

Se a indentação estiver errada, o código simplesmente não executa.

Essa escolha vem da filosofia do criador do Python, Guido van Rossum. Ele acreditava que código deveria ser fácil de ler antes de qualquer outra coisa. Essa ideia ficou famosa na frase **“Readability counts”**, presente no **Zen of Python**.

Ao tornar a indentação obrigatória, o Python força todo mundo a escrever código visualmente organizado. Não existe código “funcionando mas ilegível”. Se está confuso de ler, provavelmente está errado.

No começo isso pode incomodar, principalmente para quem vem de outras linguagens. Mas com o tempo, a indentação deixa de ser um obstáculo e vira uma ajuda. A estrutura do código fica clara, a lógica aparece melhor e ler código de outras pessoas se torna muito mais simples.

No fim, a indentação no Python não é uma limitação. É uma escolha que reforça exatamente aquilo que a linguagem mais valoriza: **clareza e legibilidade**.

E você, já conhecia o motivo por trás da indentação obrigatória do Python? Quando começou a aprender, isso te ajudou ou mais atrapalhou?
`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTc0_t29HEGwdr4Z47jTOecKN5y4ZNaMd8g&s',
    href: '#',
    published: true,
  },
  {
    id: 'dio-004',
    groupId: 'python-indent',
    lang: 'en',
    title: 'Why does Python use indentation instead of braces?',
    date: 'Feb 2026',
    excerpt:
      'Understand the design choice behind mandatory indentation in Python and why it improves readability.',
    content: `
When I started learning Python, one of the first things that caught my attention was that the language doesn’t use braces \`{}\` to define code blocks, like C#, Java, or JavaScript do.

Instead, Python uses **mandatory indentation**.

After digging into it, I learned this isn’t a random technical detail. It’s a very deliberate design decision.

In languages like C# or Java, blocks are defined by braces, and indentation is just visual organization:

\`\`\`
if (x > 10) {
  Console.WriteLine("Greater than 10");
}
\`\`\`

In Python, indentation is part of the syntax:

\`\`\`
if x > 10:
  print("Greater than 10")
\`\`\`

The colon (\`:\`) is a signal that a block comes next. It doesn’t replace indentation, but works with it to make the structure clear and explicit.

If the indentation is wrong, the code simply won’t run.

This choice comes from the philosophy of Python’s creator, Guido van Rossum. He believed code should be easy to read before anything else. That idea became famous in the line **“Readability counts”**, found in the **Zen of Python**.

By enforcing indentation, Python pushes everyone to write visually organized code. There’s no such thing as code that “works but is unreadable.” If it’s confusing to read, it’s probably wrong.

At first this can be annoying, especially for people coming from other languages. But over time, indentation stops being a hurdle and becomes a help. The structure becomes clearer, the logic shows up better, and reading other people’s code gets much simpler.

In the end, indentation in Python isn’t a limitation. It’s a choice that reinforces exactly what the language values most: **clarity and readability**.

So, did you already know the reason behind Python’s mandatory indentation? When you started learning, did it help you or get in your way?
`,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTc0_t29HEGwdr4Z47jTOecKN5y4ZNaMd8g&s',
    href: '#',
    published: true,
  },
]

export default articles
