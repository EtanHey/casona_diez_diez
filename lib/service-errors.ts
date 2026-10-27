export function reportServiceError(service: string, error: unknown): string {
  const message = error instanceof Error ? error.message : "";
  const code = /ENOTFOUND|DNS|no such host|no record found/i.test(message)
    ? "DNS_UNAVAILABLE"
    : /credential|API key|denied|unauthori[sz]ed|authentication/i.test(message)
      ? "AUTH_UNAVAILABLE"
      : /timeout|timed out/i.test(message)
        ? "TIMEOUT"
        : "SERVICE_UNAVAILABLE";
  console.error("Casona optional service unavailable", { service, code });
  return code;
}
