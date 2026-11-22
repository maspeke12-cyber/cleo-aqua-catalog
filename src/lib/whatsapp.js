import { SITE } from '../config/site'

// Membuat link WhatsApp dengan pesan otomatis.
// encodeURIComponent mencegah error karakter (spasi, huruf khusus, emoji).
export function waLink(message = '') {
  const base = `https://wa.me/${SITE.whatsapp}`
    return message ? `${base}?text=${encodeURIComponent(message)}` : base
    }

    const opening = `Halo, saya melihat katalog AQUA Elektronik di website ${SITE.storeName}.`

    export const WA_MESSAGES = {
      chat: `${opening} Saya ingin bertanya.`,
        product: (name) => `${opening} Saya ingin bertanya mengenai produk ${name}.`,
          buy: (name) => `${opening} Saya ingin membeli produk ${name}.`,
            cashback: `${opening} Saya ingin bertanya mengenai cashback.`,
              credit: `${opening} Saya ingin konsultasi pembelian secara kredit.`,
              }