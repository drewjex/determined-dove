// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MessageListener = (channel: string, message: any) => Promise<unknown>;
type StdinListener = (data: Uint8Array) => void;

interface Zilch {
  write(...args: unknown[]): void;
  onStdin(listener: StdinListener): { dispose(): void };
  signal(signal: "BotReady"): void;
  onMessage(handler: MessageListener): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chalk: any;
}
declare const zilch: Zilch;
declare function prompt(message?: string): Promise<string>;
