import Image from 'next/image'
import ScrollAnimate from '../components/ScrollAnimate';

const Card = ({id, title, description,  image, Icon}) => {
  return (
    <ScrollAnimate direction='down' key={id} className="group max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-500 hover:-translate-y-2 hover:border-secondary hover:shadow-xl">
        <div className="relative rounded-2xl">
            <Image
                className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
                height={250}
                width={480}
                src={image}
                alt={title}
            />
            <div className="absolute -bottom-5 right-8 z-10 rounded-full bg-white p-2 shadow-lg transition-all duration-500 group-hover:-translate-y-2">
            <Icon className="inline-block size-14 rounded-full bg-secondary p-2 text-white transition-transform duration-500 group-hover:scale-110" />
            </div>
        </div>
        <div className="mt-8">
            <h4 className="font-Jakarta text-lg font-bold text-primary transition-colors duration-300 group-hover:text-secondary lg:text-xl">
            {title}
            </h4>
            <p className="mt-3 text-justify font-manropee text-sm font-semibold text-zinc-600 lg:text-md">
                {description}
            </p>
        </div>
    </ScrollAnimate>
  )
}

export default Card