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
]

export default articles
