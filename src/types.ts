import { Operation, OperationResult } from "urql";

export type UrqlEvent = OutgoingOperation | IncomingResponse | IncomingError;

export interface OutgoingOperation {
  type: "operation";
  data: Operation;
  timestamp: number;
}

export interface IncomingResponse {
  type: "response";
  data: OperationResult;
  timestamp: number;
}

export interface IncomingError {
  type: "error";
  data: OperationResult;
  timestamp: number;
}

export type ContentScriptMessage = UrqlEvent;

interface InitMessage {
  type: "init";
  tabId: number;
}

interface ExecuteRequestMessage {
  type: "request";
  query: string;
  vars?: any;
}

export type DevtoolsMessage = InitMessage | ExecuteRequestMessage;
