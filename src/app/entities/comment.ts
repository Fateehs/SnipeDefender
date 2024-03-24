import { User } from "./user";

export class Comment {
    text: string;
    reputation: number;
    createdAt: Date;
    userId: number;
    playerId: number;
    user: User;
}