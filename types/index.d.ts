import { Continify } from 'continify'

export interface ContinifyHTTPCORS {}

export type ContinifyHTTPCORSPlugin = (
  ins: Continify,
  options: ContinifyHTTPCORS
) => Promise<void>

declare const plugin: ContinifyHTTPCORSPlugin
export = plugin

declare module 'avvio' {
  interface Use<I, C = context<I>> {
    (fn: ContinifyHTTPCORSPlugin, options?: ContinifyHTTPCORSPlugin): C
  }
}
