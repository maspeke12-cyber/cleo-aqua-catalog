// DATA CONTOH SEMENTARA.
// Nanti seluruh isi file ini diganti data dari Google Sheets.
// price dan cashback sengaja null: tidak ada angka karangan.

export const SAMPLE_BANNER = {
  headline: 'Smart Living, Better Life',
    subheadline:
        'Temukan produk AQUA Elektronik untuk kebutuhan rumah tangga Anda.',
          cashbackText: null,
          }

          export const SAMPLE_CATEGORIES = [
            'Kulkas',
              'Mesin Cuci',
                'TV',
                  'AC',
                    'Freezer',
                      'Small Appliances',
                      ]

                      const make = (n, name, category, featured = false) => ({
                        id: `contoh-${n}`,
                          slug: `contoh-${n}`,
                            model: 'Model belum diisi',
                              name: `${name} (Contoh)`,
                                category,
                                  image: null,
                                    price: null,
                                      promoPrice: null,
                                        cashback: null,
                                          featured,
                                            isNew: false,
                                              order: n,
                                              })

                                              export const SAMPLE_PRODUCTS = [
                                                make(1, 'Kulkas', 'Kulkas', true),
                                                  make(2, 'Mesin Cuci', 'Mesin Cuci', true),
                                                    make(3, 'TV', 'TV', true),
                                                      make(4, 'AC', 'AC', true),
                                                        make(5, 'Freezer', 'Freezer'),
                                                          make(6, 'Kulkas 2 Pintu', 'Kulkas'),
                                                            make(7, 'Mesin Cuci Front Load', 'Mesin Cuci'),
                                                              make(8, 'Peralatan Rumah Tangga', 'Small Appliances'),
                                                              ]

                                                              // Logo diisi nanti, contoh: '/logos/home-credit.png'
                                                              export const FINANCING_PARTNERS = [
                                                                { name: 'Home Credit', logo: null },
                                                                  { name: 'Kredivo', logo: null },
                                                                    { name: 'Kredit Plus', logo: null },
                                                                    ]