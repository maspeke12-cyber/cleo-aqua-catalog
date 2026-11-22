// Mengubah angka menjadi "Rp 1.000.000". Jika kosong, hasilnya null.
export function formatRupiah(value) {
  if (value === null || value === undefined || value === '') return null
    const n = Number(value)
      if (Number.isNaN(n)) return null
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
                currency: 'IDR',
                    maximumFractionDigits: 0,
                      }).format(n)
                      }