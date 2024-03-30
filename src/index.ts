export interface Country {
    flags:      Flags;
    name:       Name;
    tld:        string[];
    currencies: { [key: string]: Currency };
    capital:    string[];
    region:     Region;
    subregion:  string;
    languages:  { [key: string]: string };
    borders:    string[];
    population: number;
}

export interface Currency {
    name:   string;
    symbol: string;
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: NativeName };
}

export interface NativeName {
    official: string;
    common:   string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export interface CountryProps {
    name: string;
    flag: string;
    population: number;
    region: string;
    capital: string[];
    alt: string
}

export interface SearchProps {
    onSearch: (searchTerm: string) => void; // Function to handle search
    onRegionFilter: (region: string) => void; // Function to handle region filter
  }