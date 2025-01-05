interface ServiceProcessCardProps {
  title: string;
  text: string;
}
const ServiceProcessCard: React.FC<ServiceProcessCardProps> = ({
  title,
  text,
}) => {
  return (
    <div className="w-full h-full sevice-border">
      <div className="relative w-full h-full p-3">
        <div className="w-full px-5 py-3    rounded-tl-[50px]">
          <h4>{title}</h4>
        </div>
        <div className="w-full px-5 py-3  rounded-br-[50px]">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcessCard;
