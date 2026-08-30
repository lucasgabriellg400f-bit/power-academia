export interface SiteConfig {
  academyName: string;
  tagline: string;
  heroHeadline: {
    line1: string;
    line2: string;
    highlight: string;
    line3: string;
  };
  description: string;
  city: string;
  state: string;
  stateFull: string;
  country: string;
  sinceYear: string;
  business: {
    name: string;
    whatsappDisplay: string;
    whatsappNumber: string;
    whatsappUrl: string;
    instagramHandle: string;
    instagramUrl: string;
    address: string;
    city: string;
    state: string;
    cep: string;
    mapsUrl: string;
  };
  address: {
    street: string;
    neighborhood: string;
    full: string;
    cityState: string;
    cep: string;
    mapsUrl: string;
  };
  openingHours: {
    weekdays: string;
    weekdaysHours: string;
    saturday: string;
    saturdayHours: string;
    badgeText: string;
    noLunchBreakNotice: string;
  };
  socialLinks: {
    instagram: string;
    instagramHandle: string;
    whatsapp: string;
    whatsappFormatted: string;
    phone: string;
    email: string;
  };
  whatsappMessages: {
    general: string;
    trial: string;
    doubts: string;
    plans: string;
    powerEssencial: string;
    powerRun: string;
    finalCta: string;
  };
  stats: {
    yearsHistory: string;
    scheduleHighlight: string;
    focusStatement: string;
  };
  navigation: Array<{
    label: string;
    href: string;
  }>;
  structureCategories: Array<{
    id: string;
    name: string;
    subtitle: string;
    image: string;
    description: string;
    highlights: string[];
  }>;
  structureAmenities: string[];
  experienciaDiferenciais: Array<{
    number: string;
    title: string;
    subtitle: string;
    description: string;
  }>;
  articles: Array<{
    id: string;
    category: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    image: string;
    content: string;
  }>;
}

const WHATSAPP_NUMBER = "5594991972980";
const WHATSAPP_FORMATTED = "(94) 99197-2980";
const INSTAGRAM_HANDLE = "@poweracademiasfx";
const INSTAGRAM_URL = "https://www.instagram.com/poweracademiasfx/";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Osterno+Maia%2C+1106%2C+S%C3%A3o+F%C3%A9lix+do+Xingu+-+PA%2C+68380-000";

export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const siteConfig: SiteConfig = {
  academyName: "POWER ACADEMIA",
  tagline: "Onde os resultados acontecem.",
  heroHeadline: {
    line1: "ONDE OS",
    line2: "RESULTADOS",
    highlight: "RESULTADOS",
    line3: "ACONTECEM.",
  },
  description:
    "Estrutura completa, constância e a melhor atmosfera de treino de São Félix do Xingu.",
  city: "São Félix do Xingu",
  state: "PA",
  stateFull: "Pará",
  country: "Brasil",
  sinceYear: "2022",
  business: {
    name: "POWER ACADEMIA",
    whatsappDisplay: WHATSAPP_FORMATTED,
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
    instagramHandle: INSTAGRAM_HANDLE,
    instagramUrl: INSTAGRAM_URL,
    address: "Av. Osterno Maia, 1106",
    city: "São Félix do Xingu",
    state: "PA",
    cep: "68380-000",
    mapsUrl: MAPS_URL,
  },
  address: {
    street: "Av. Osterno Maia, 1106",
    neighborhood: "São Félix do Xingu — PA",
    full: "Av. Osterno Maia, 1106, São Félix do Xingu - PA",
    cityState: "São Félix do Xingu — PA",
    cep: "68380-000",
    mapsUrl: MAPS_URL,
  },
  openingHours: {
    weekdays: "Segunda a Sexta",
    weekdaysHours: "05:30 às 22:00",
    saturday: "Sábado",
    saturdayHours: "06:00 às 14:00",
    badgeText: "Sem fechar no almoço",
    noLunchBreakNotice: "Atendimento ininterrupto durante o dia",
  },
  socialLinks: {
    instagram: INSTAGRAM_URL,
    instagramHandle: INSTAGRAM_HANDLE,
    whatsapp: createWhatsAppUrl(
      "Olá! Vim pelo site da Power Academia e gostaria de tirar uma dúvida."
    ),
    whatsappFormatted: WHATSAPP_FORMATTED,
    phone: WHATSAPP_FORMATTED,
    email: "contato@poweracademia.com.br",
  },
  whatsappMessages: {
    general:
      "Olá! Vim pelo site da Power Academia e gostaria de tirar uma dúvida.",
    trial:
      "Olá! Vim pelo site da Power Academia e gostaria de agendar uma aula experimental.",
    doubts:
      "Olá! Vim pelo site da Power Academia e gostaria de tirar uma dúvida.",
    plans:
      "Olá! Vim pelo site da Power Academia e gostaria de saber mais sobre os planos.",
    powerEssencial:
      "Olá! Vim pelo site da Power Academia e gostaria de saber mais sobre o Plano Power Essencial.",
    powerRun:
      "Olá! Vim pelo site da Power Academia e gostaria de saber mais sobre a Power Run.",
    finalCta:
      "Olá! Vim pelo site da Power Academia e gostaria de saber como começar a treinar.",
  },
  stats: {
    yearsHistory: "DESDE 2022",
    scheduleHighlight: "05:30 — 22:00",
    focusStatement: "TREINO SÉRIO",
  },
  navigation: [
    { label: "A Academia", href: "#sobre" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "Diferenciais", href: "#experiencia" },
    { label: "Comunidade", href: "#comunidade" },
    { label: "Power Run", href: "#power-run" },
    { label: "Conteúdo", href: "#conteudos" },
    { label: "Planos", href: "#planos" },
    { label: "Horários", href: "#horarios" },
    { label: "Localização", href: "#localizacao" },
  ],
  structureAmenities: [
    "Musculação Completa",
    "Área de Pesos Livres",
    "Cardio & Esteiras",
    "Espaço de Alongamento",
    "Ambiente Climatizado",
    "Armários & Vestiários",
    "Bebedouro & Cafeteria",
    "Orientação Técnica em Sala",
    "Wi-Fi para Alunos",
  ],
  structureCategories: [
    {
      id: "musculacao",
      name: "MUSCULAÇÃO",
      subtitle: "Estrutura completa para força e hipertrofia",
      image: "/images/estrutura/musculacao.jpg",
      description:
        "Área estruturada para treino de força, com variedade de máquinas e organização planejada para seu treino render.",
      highlights: [
        "Halteres e bancos reguláveis",
        "Piso de alta absorção e resistência",
        "Disposição pensada para o fluxo de treino",
      ],
    },
    {
      id: "peso-livre",
      name: "PESO LIVRE",
      subtitle: "Barras, racks e anilhas para treino fundamental",
      image: "/images/estrutura/peso-livre.jpg",
      description:
        "Espaço dedicado aos movimentos livres e levantamentos básicos com total estabilidade.",
      highlights: [
        "Racks de agachamento e supino",
        "Barras e anilhas para todos os níveis",
        "Espaço amplo para execução com segurança",
      ],
    },
    {
      id: "maquinas",
      name: "MÁQUINAS",
      subtitle: "Linha selecionada para isolamento e precisão",
      image: "/images/estrutura/maquinas.jpg",
      description:
        "Equipamentos articulados e convergentes que proporcionam trajetória anatômica e estabilidade no movimento.",
      highlights: [
        "Linha de máquinas guiadas",
        "Ajustes ergonômicos rápidos",
        "Polias e cabos de movimento fluido",
      ],
    },
    {
      id: "cardio",
      name: "CARDIO",
      subtitle: "Condicionamento e resistência física",
      image: "/images/estrutura/cardio.jpg",
      description:
        "Equipamentos para aquecimento, condicionamento aeróbico e preparação física para corrida.",
      highlights: [
        "Esteiras e ergômetros modernos",
        "Controle de ritmo e intensidade",
        "Ambiente climatizado e arejado",
      ],
    },
    {
      id: "espaco-treino",
      name: "ESPAÇO DE TREINO",
      subtitle: "Circulação ampla e foco no rendimento",
      image: "/images/estrutura/espaco.jpg",
      description:
        "Ambiente planejado para movimentação livre, sem aglomeração entre os aparelhos.",
      highlights: [
        "Disposição inteligente de equipamentos",
        "Área de alongamento e mobilidade",
        "Atmosfera de foco total na evolução",
      ],
    },
  ],
  experienciaDiferenciais: [
    {
      number: "01",
      title: "ESTRUTURA COMPLETA",
      subtitle: "Equipamentos focados em rendimento",
      description:
        "Ambiente climatizado, máquinas selecionadas e setorização inteligente para você treinar com foco e segurança.",
    },
    {
      number: "02",
      title: "ACOMPANHAMENTO",
      subtitle: "Profissionais presentes em sala",
      description:
        "Equipe técnica disponível para orientar execução, postura e direcionar sua evolução com segurança.",
    },
    {
      number: "03",
      title: "HORÁRIO CONTÍNUO",
      subtitle: "05:30 às 22:00 sem fechar no almoço",
      description:
        "Flexibilidade total de segunda a sexta para você encaixar o treino na sua rotina sem desculpas.",
    },
    {
      number: "04",
      title: "COMUNIDADE & CONSTÂNCIA",
      subtitle: "Pessoas que treinam juntas em SFX",
      description:
        "Uma cultura de respeito, disciplina e energia coletiva que incentiva você a voltar no dia seguinte.",
    },
  ],
  articles: [
    {
      id: "beneficios-musculacao",
      category: "SAÚDE & FORÇA",
      title: "4 Benefícios da Musculação para sua Saúde e Longevidade",
      excerpt:
        "Fortalecimento muscular, melhora da postura, controle metabólico e disposição diária.",
      date: "Conteúdo Power",
      readTime: "2 min",
      image: "/images/plantao/p1.jpg",
      content:
        "A musculação vai muito além da estética: ela fortalece articulações, acelera o metabolismo, melhora a densidade óssea e proporciona mais disposição para o seu dia a dia. Na POWER, estruturamos os treinos para que cada fase da sua evolução seja segura e consistente.",
    },
    {
      id: "constancia-vs-intensidade",
      category: "HÁBITO & DISCIPLINA",
      title: "Por Que Constância Vale Mais que Intensidade?",
      excerpt:
        "Treinar com regularidade todos os dias supera qualquer treino isolado excessivo.",
      date: "Conteúdo Power",
      readTime: "2 min",
      image: "/images/plantao/p2.jpg",
      content:
        "Resultados duradouros são construídos com repetição e hábito. Mais vale manter 3 a 5 treinos bem executados por semana do que treinar pesado um único dia e parar. Com nosso horário ininterrupto das 05:30 às 22:00, você escolhe o melhor momento para não falhar.",
    },
    {
      id: "habitos-rotina",
      category: "PERFORMANCE DIÁRIA",
      title: "Hábitos Simples que Fazem Toda a Diferença no seu Treino",
      excerpt:
        "Hidratação, aquecimento adequado, controle de carga e respeito ao descanso.",
      date: "Conteúdo Power",
      readTime: "2 min",
      image: "/images/plantao/p3.jpg",
      content:
        "Pequenos ajustes na rotina potencializam seus resultados na musculação. Beber água durante o treino, realizar um aquecimento específico e focar na cadência correta dos movimentos protegem o corpo e garantem evolução contínua em São Félix do Xingu.",
    },
  ],
};
