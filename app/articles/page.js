import React from 'react'

const articles = [
  { title: 'Polio', date: 'October 19, 2022', text: 'Eradicating polio and making the world completely free of this incurable disease has been one of the most ambitious global health goals set in history.', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=500&q=80' },
  { title: 'Tuberculosis', date: 'September 26, 2022', text: 'Tuberculosis is one of the world’s leading infectious disease killers with Pakistan ranking fifth among TB high-burden countries', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=500&q=80' },
  { title: 'Lung Cancer', date: 'August 23, 2022', text: 'Being aware of the risks and taking steps to reduce them, plus detection in the early stages, can improve a person’s chances for successful treatment of lung cancer', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=500&q=80' },
  { title: 'Everything You Need to Know About Diabetes', date: 'July 26, 2022', text: 'Everything you need to know about diabetes- the ‘silent killer’ disease', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=500&q=80' },
  { title: 'Obesity in Pakistan', date: 'June 28, 2022', text: 'A dramatic increase in obesity has been seen in Pakistan in recent years, with 45-55% of the population being either overweight or suffering from obesity', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80' },
]

const page = () => (
  <main className="min-h-screen bg-white px-4 py-[10px] font-sans text-[#091437]">
    <section className="mx-auto w-full max-w-[700px] space-y-[13px] mt-10 " aria-label="Health articles">
      {articles.map((article) => (
        <article key={article.title} className="flex h-[199px] gap-5 my-10">
          <img src={article.image} alt="" className="h-[199px] w-[250px] shrink-0 border-r border-red-500 object-cover" />
          <div className="min-w-0 flex-1">
            <h2 className="border-b border-gray-200 pb-[9px] text-2xl font-normal leading-[22px]">{article.title}</h2>
            <div className="mt-[5px] flex items-center gap-1 text-lg text-gray-400">
              <span aria-hidden="true">◷</span><time>{article.date}</time><span className="ml-1 text-red-500">♡</span><span className="text-gray-500">1</span>
            </div>
            <p className="mt-[7px] text-lg leading-[25px] text-[#25334f]">{article.text}</p>
          </div>
        </article>
      ))}
    </section>
  </main>
)

export default page