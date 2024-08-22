// index.d.ts

export interface Location {
    country: string;
    town: string;
}

declare function getUserLocation(): Promise<Location>;

export default getUserLocation;
