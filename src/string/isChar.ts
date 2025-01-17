function isChar(value: unknown): boolean {
  return typeof value === "string" && value.length === 1;
}