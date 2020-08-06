import {Company} from "./company"
import { Commitment } from './profile/candidateprofile';

export class Listing  {
constructor(public id: number, public role: string, public company: string, public level: string, public commitment: string, public email: string)
{}
}