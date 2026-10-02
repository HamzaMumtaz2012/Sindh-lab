import React from 'react'
import PageBanner from '../../Components/PageBanner'

const articles = [
  { title: 'Polio', date: 'October 19, 2022', text: 'Eradicating polio and making the world completely free of this incurable disease has been one of the most ambitious global health goals set in history.', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=500&q=80' },
  { title: 'Tuberculosis', date: 'September 26, 2022', text: 'Tuberculosis is one of the world’s leading infectious disease killers with Pakistan ranking fifth among TB high-burden countries', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80' },
  { title: 'Lung Cancer', date: 'August 23, 2022', text: 'Being aware of the risks and taking steps to reduce them, plus detection in the early stages, can improve a person’s chances for successful treatment of lung cancer', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=500&q=80' },
  { title: 'Everything You Need to Know Articles Diabetes', date: 'July 26, 2022', text: 'Everything you need to know Articles diabetes- the ‘silent killer’ disease', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80' },
  { title: 'Obesity in Pakistan', date: 'June 28, 2022', text: 'A dramatic increase in obesity has been seen in Pakistan in recent years, with 45-55% of the population being either overweight or suffering from obesity', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80' },
]

const page = () => (
    <>
    <PageBanner title="Articles" />
  <main className="bg-white px-5 py-8 font-sans text-[#091437] sm:px-8 sm:py-12">
    <section className="mx-auto w-full max-w-4xl space-y-8" aria-label="Health articles">
      {articles.map((article) => (
        <article key={article.title} className="flex flex-col gap-4 border-b border-gray-200 pb-8 sm:flex-row sm:gap-5">
          <img src={article.image} alt="" className="h-52 w-full shrink-0 border-b-2 border-red-500 object-cover sm:h-44 sm:w-56 sm:border-b-0 sm:border-r-2" />
          <div className="min-w-0 flex-1">
            <h2 className="border-b border-gray-200 pb-2 text-xl font-normal leading-tight sm:text-2xl">{article.title}</h2>
            <div className="mt-2 flex flex-wrap items-center gap-1 text-sm text-gray-400 sm:text-base">
              <span aria-hidden="true">◷</span><time>{article.date}</time><span className="ml-1 text-red-500">♡</span><span className="text-gray-500">1</span>
            </div>
            <p className="mt-2 text-base leading-6 text-[#25334f] sm:text-lg">{article.text}</p>
          </div>
        </article>
      ))}
    </section>
  </main>
  </>
)

export const metadata = {
  title: 'Articles - Sindlab Diagnostics',
  description: 'Articles page',
};

export default page