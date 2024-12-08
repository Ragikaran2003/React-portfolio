import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

export const Hero = () => {
  const config = {
    subtitle: 'Im a Full-stack Developer and Designer',
    social: {
      twitter: "",
      facebook: "",
      linkedin: "",
      github: "",
      instagram: "",
    }
  }
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-6xl font-Sriracha'>Hii ,<br/> I am <span className='text-black'>Mr.</span> Ragi
                <p className='text-2xl py-2'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            </div>
        </div>
        <img src={HeroImg} className='md:w-1/3' alt="" />
    </section>
  )
}
