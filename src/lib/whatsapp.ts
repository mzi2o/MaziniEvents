export function generateWhatsAppLink(
  number: string | undefined | null,
  text: string
): string {
  const defaultNumber = "212600000000";
  const targetNumber = number ? number.replace(/\D/g, '') : defaultNumber;
  return `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
}
