export default function Placeholder({ title, note }) {
      return (
          <section className="rounded-2xl border border-aqua-light bg-aqua-light/40 p-6">
                <h1 className="text-2xl font-extrabold text-navy">{title}</h1>
                      <p className="mt-2 text-base text-slate-soft">
                              {note || 'Halaman ini sedang dalam pengembangan.'}
                                    </p>
                                        </section>
                                          )
                                          }