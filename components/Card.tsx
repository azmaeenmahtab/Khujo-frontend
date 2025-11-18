type Props = {
    title: string;
    description: string;
}
const Card = ({ title, description }: Props) => {
  return (
    <div className="bg-[#096455] shadow-lg rounded-2xl px-8 py-10 ">    
        <h3 className="text-xl font-semibold mb-4   text-white">{title}</h3>   

        <p className="text-white  ">{description}</p>

    </div>
    );
}

export default Card;