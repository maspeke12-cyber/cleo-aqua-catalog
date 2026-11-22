// Harga efektif: harga promo jika ada, kalau tidak harga normal.
export function effectivePrice(p) {
  const v = p.promoPrice ?? p.price
    return v === null || v === undefined || v === '' ? null : Number(v)
    }

    export function filterProducts(products, f) {
      const q = f.query.trim().toLowerCase()
        const min = f.minPrice === '' ? null : Number(f.minPrice)
          const max = f.maxPrice === '' ? null : Number(f.maxPrice)

            return products.filter((p) => {
                if (q) {
                      const hay = `${p.name} ${p.model} ${p.category}`.toLowerCase()
                            if (!hay.includes(q)) return false
                                }
                                    if (f.category && p.category !== f.category) return false
                                        if (f.onlyPromo && !p.promoPrice) return false
                                            if (f.onlyCashback && !p.cashback) return false
                                                if (f.onlyFeatured && !p.featured) return false

                                                    // Filter harga: produk tanpa harga tidak ikut jika filter harga dipakai
                                                        if (min !== null || max !== null) {
                                                              const price = effectivePrice(p)
                                                                    if (price === null) return false
                                                                          if (min !== null && price < min) return false
                                                                                if (max !== null && price > max) return false
                                                                                    }
                                                                                        return true
                                                                                          })
                                                                                          }

                                                                                          export function sortProducts(products, sort) {
                                                                                            const list = [...products]
                                                                                              const priceOf = (p) => effectivePrice(p)

                                                                                                if (sort === 'termurah' || sort === 'termahal') {
                                                                                                    const dir = sort === 'termurah' ? 1 : -1
                                                                                                        return list.sort((a, b) => {
                                                                                                              const pa = priceOf(a)
                                                                                                                    const pb = priceOf(b)
                                                                                                                          // Produk tanpa harga selalu di bawah
                                                                                                                                if (pa === null && pb === null) return 0
                                                                                                                                      if (pa === null) return 1
                                                                                                                                            if (pb === null) return -1
                                                                                                                                                  return (pa - pb) * dir
                                                                                                                                                      })
                                                                                                                                                        }
                                                                                                                                                          if (sort === 'terbaru') {
                                                                                                                                                              return list.sort((a, b) => b.order - a.order)
                                                                                                                                                                }
                                                                                                                                                                  return list.sort((a, b) => a.order - b.order) // default: urutan admin
                                                                                                                                                                  }

                                                                                                                                                                  export const SORT_OPTIONS = [
                                                                                                                                                                    { value: 'default', label: 'Urutan standar' },
                                                                                                                                                                      { value: 'terbaru', label: 'Terbaru' },
                                                                                                                                                                        { value: 'termurah', label: 'Harga termurah' },
                                                                                                                                                                          { value: 'termahal', label: 'Harga termahal' },
                                                                                                                                                                          ]