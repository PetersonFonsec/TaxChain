export interface DashboardResponse {
    maiorLucro: number;
    totalTrades: string;
    lucroPrejuizoTotal: number;
    maiorPrejuizo: number;
    moedaMaiorLucro: string;
    moedaMaiorPrejuizo: string;
    moedasMovimentadas: string[];
    taxasTotais: { [name: string]: number }[];
    volumeMovimentado: { [name: string]: number }[];
} 