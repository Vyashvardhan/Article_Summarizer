import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-5">
        <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>

        <button type="button" onClick={() => {window.open('https://github.com/Vyashvardhan/Article_Summarizer.git')}} className="black_btn">
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"/><span className="orange_gradient">OpenAI gpt-3.5</span>
      </h1>

      <h2 className="desc"> Simplify your readings with Summize, an open source article summarizer that tranforms lengthy articlesinto clear and concise summaries</h2>
    </header>
  )
}

export default Hero