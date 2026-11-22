import { Gift, MessageCircle } from 'lucide-react'

export default function App() {
  return (
      <main className="mx-auto max-w-md p-4">
            <section className="rounded-2xl bg-aqua-deep p-6 text-white">
                    <p className="text-sm font-medium text-aqua-light">
                              CLEO ELEKTRONIK Palu
                                      </p>
                                              <h1 className="mt-2 text-3xl font-extrabold">
                                                        Smart Living, Better Life
                                                                </h1>
                                                                        <p className="mt-2 text-base text-aqua-light">
                                                                                  Temukan produk AQUA Elektronik untuk kebutuhan rumah tangga Anda.
                                                                                          </p>
                                                                                                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-sm font-bold text-navy">
                                                                                                            <Gift size={16} /> Badge cashback (uji warna)
                                                                                                                    </span>
                                                                                                                          </section>

                                                                                                                                <button className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-aqua px-4 font-semibold text-white transition hover:bg-aqua-deep">
                                                                                                                                        <MessageCircle size={20} /> Tombol uji
                                                                                                                                              </button>
                                                                                                                                                  </main>
                                                                                                                                                    )
                                                                                                                                                    }