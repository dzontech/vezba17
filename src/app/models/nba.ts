export interface Team {
    id: number;
    name: string;
    logo: string;
    played: number;
    wins: number;
    losses: number;
    winPercent: number;
    gamesBehind: any;
    streak: number;
    lastfive: string;
}

export interface Teams {
    teams: Team[];
}
