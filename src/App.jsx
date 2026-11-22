import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
      <Routes>
            <Route element={<Layout />}>
                    <Route path="/" element={<Placeholder title="Beranda" />} />
                            <Route path="/katalog" element={<Placeholder title="Katalog Produk" />} />
                                    <Route path="/promo" element={<Placeholder title="Cashback & Promo" />} />
                                            <Route path="/claim" element={<Placeholder title="Ajukan Cashback Anda" />} />
                                                    <Route path="/status" element={<Placeholder title="Cek Status Cashback" />} />
                                                            <Route path="/kredit" element={<Placeholder title="Pembiayaan / Kredit" />} />
                                                                    <Route path="/kontak" element={<Placeholder title="Hubungi Kami" />} />
                                                                            <Route
                                                                                      path="*"
                                                                                                element={<Placeholder title="Halaman tidak ditemukan" note="Periksa kembali alamat halaman." />}
                                                                                                        />
                                                                                                              </Route>
                                                                                                                  </Routes>
                                                                                                                    )
                                                                                                                    }