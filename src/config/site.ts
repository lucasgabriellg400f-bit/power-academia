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
    "Treino de musculação, pesos livres e ambiente focado na sua rotina em São Félix do Xingu.",
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
      subtitle: "Equipamentos para treino de força",
      image: "/images/estrutura/musculacao.jpg",
      description:
        "Área ampla de musculação com máquinas direcionadas e bancos reguláveis para todos os grupos musculares.",
      highlights: [
        "Halteres e bancos reguláveis",
        "Piso emborrachado de alta absorção",
        "Disposição pensada para o fluxo de treino",
      ],
    },
    {
      id: "peso-livre",
      name: "PESO LIVRE",
      subtitle: "Barras, racks e anilhas",
      image: "/images/estrutura/peso-livre.jpg",
      description:
        "Espaço para agachamentos, levantamentos e movimentos livres com total segurança e espaço de manobra.",
      highlights: [
        "Racks de agachamento e supino",
        "Barras olímpicas e anilhas variadas",
        "Área aberta para execução correta",
      ],
    },
    {
      id: "maquinas",
      name: "MÁQUINAS",
      subtitle: "Linha articulada e convergente",
      image: "/images/estrutura/maquinas.jpg",
      description:
        "Equipamentos guiados com ergonomia anatômica para movimentos biomecanicamente estáveis.",
      highlights: [
        "Aparelhos guiados e articulados",
        "Ajustes rápidos de carga e altura",
        "Polias duplas e cabos reforçados",
      ],
    },
    {
      id: "cardio",
      name: "CARDIO",
      subtitle: "Condicionamento e esteiras",
      image: "/images/estrutura/cardio.jpg",
      description:
        "Setor aeróbico para aquecimento, resistência cardiovascular e suporte para corredores.",
      highlights: [
        "Esteiras e bicicletas ergométricas",
        "Ambiente arejado e climatizado",
        "Ideal para aquecimento ou treinos aeróbicos",
      ],
    },
    {
      id: "espaco-treino",
      name: "ESPAÇO DE TREINO",
      subtitle: "Circulação ampla e organização",
      image: "/images/estrutura/espaco.jpg",
      description:
        "Salão planejado com corredores livres para circulação sem aglomeração entre os aparelhos.",
      highlights: [
        "Disposição inteligente de equipamentos",
        "Área para mobilidade e alongamento",
        "Ambiente limpo e bem iluminado",
      ],
    },
  ],
  experienciaDiferenciais: [
    {
      number: "01",
      title: "ESTRUTURA ORGANIZADA",
      subtitle: "Espaço amplo e setorizado",
      description:
        "Ambiente climatizado, máquinas selecionadas e organização planejada para seu treino render sem filas.",
    },
    {
      number: "02",
      title: "SUPORTE EM SALA",
      subtitle: "Profissionais disponíveis",
      description:
        "Instrutores no salão para orientar postura, execução correta dos exercícios e tirar dúvidas.",
    },
    {
      number: "03",
      title: "HORÁRIO CONTÍNUO",
      subtitle: "05:30 às 22:00 direto",
      description:
        "Portas abertas o dia todo de segunda a sexta para você treinar no melhor momento do seu dia.",
    },
    {
      number: "04",
      title: "COMUNIDADE ATIVA",
      subtitle: "Ambiente sério e motivador",
      description:
        "Espaço onde pessoas com diferentes objetivos treinam com foco, respeito mútuo e consistência.",
    },
  ],
};
