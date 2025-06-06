import { Card } from "@/components/ui/card";
import DeliveryIcon from "@/assets/delivery-icon.svg";

interface CardMenuProps {
  imgSrc: string;
  title: string;
  price: string;
  description: string;
}

export const CardMenu = ({
  imgSrc,
  title,
  price,
  description,
}: CardMenuProps) => {
  return (
    <Card className="flex flex-col justify-between rounded-t-lg overflow-hidden bg-[#EDEFEE]">
      <div>
        <img src={imgSrc} alt={title} className="w-full h-60 object-cover" />
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <h1 className="text-xl font-bold text-[#EE9972]">$ {price}</h1>
          </div>
          <p className="text-[#495E57]">{description}</p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold">Order Delivery</h1>
          <img src={DeliveryIcon} alt="delivery icon" />
        </div>
      </div>
    </Card>
  );
};
