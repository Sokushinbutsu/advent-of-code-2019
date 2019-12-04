import { readFileSync } from "fs";
import { parse } from "csv/lib/sync";

export function getCsv(day: string) {
  const input = (() => {
    try {
      return readFileSync(`src/data/${day}.csv`, `utf8`).replace(/\r/g, "");
    } catch (error) {
      console.error(error);
    }
  })();

  const output = parse(input, {});

  return output;
}
