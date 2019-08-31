import { Injectable } from "@angular/core";
import { grpc, BrowserHeaders } from "grpc-web-client";
import { lnrpc } from "../proto/lightning";


@Injectable({
  providedIn: 'root'
})
export class LncliService {

  constructor() { }
}
