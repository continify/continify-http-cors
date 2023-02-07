import { Continify } from 'continify'

export interface ContinifyHTTPCORSOptions {}

export type ContinifyHTTPCORSPlugin = (
  ins: Continify,
  options: ContinifyHTTPCORSOptions
) => Promise<void>

declare const plugin: ContinifyHTTPCORSPlugin
export = plugin

declare module 'avvio' {
  interface Use<I, C = context<I>> {
    (fn: ContinifyHTTPCORSPlugin, options?: ContinifyHTTPCORSOptions): C
  }
}
