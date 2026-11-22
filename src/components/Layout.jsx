import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Header from './Header'
import BottomNav from './BottomNav'
import { SITE } from '../config/site'
import { waLink, WA_MESSAGES } from '../lib/whatsapp'

export default function Layout() {
  const { pathname } = useLocation()

    // Pindah halaman: kembali ke atas
      useEffect(() => {
          window.scrollTo(0, 0)
            }, [pathname])

              return (
                  <div className="flex min-h-screen flex-col bg-white">
                        <Header />

                              <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-28 pt-6 md:pb-12">
                                      <Outlet />
                                            </main>

                                                  <footer className="border-t border-aqua-light bg-aqua-light/50 px-4 pb-24 pt-6 text-sm text-slate-soft md:pb-6">
                                                          <div className="mx-auto max-w-6xl">
                                                                    <p className="font-bold text-navy">{SITE.storeName}</p>
                                                                              <p className="mt-1">{SITE.address}</p>
                                                                                      </div>
                                                                                            </footer>

                                                                                                  {/* Tombol WhatsApp mengambang */}
                                                                                                        <a
                                                                                                                href={waLink(WA_MESSAGES.chat)}
                                                                                                                        target="_blank"
                                                                                                                                rel="noopener noreferrer"
                                                                                                                                        aria-label="Chat WhatsApp"
                                                                                                                                                className="fixed bottom-20 right-4 z-30 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:bottom-6"
                                                                                                                                                      >
                                                                                                                                                              <MessageCircle size={26} />
                                                                                                                                                                    </a>

                                                                                                                                                                          <BottomNav />
                                                                                                                                                                              </div>
                                                                                                                                                                                )
                                                                                                                                                                                }