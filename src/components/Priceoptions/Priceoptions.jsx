import Priceoption from "../Priceoption/Priceoption";

const Priceoptions = () => {

  const Priceoptions1 = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": "$29.99/month",
      "features": [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
        "Basic fitness classes",
        "Discounts on gym merchandise",
        "Limited guest passes per month"
      ]
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "price": "$49.99/month",
      "features": [
        "Access to all equipment and facilities",
        "Locker with key or digital access",
        "Unlimited fitness classes including yoga",
        "Personal training session per month",
        "Discounts on nutrition supplements",
        "Access to swimming pool"
      ]
    },
    {
      "id": 3,
      "name": "VIP Membership",
      "price": "$99.99/month",
      "features": [
        "Priority access to all equipment and facilities",
        "Reserved parking spot",
        "Unlimited access to all fitness classes ones",
        "Weekly personal training sessions",
        "Access to sauna and spa facilities",
        "Complimentary towel service",
        "Discounts on gym events and workshops"
      ]
    }
  ]



  return (
    <div className="m-12">
      <h3 className='text-5xl'>best pricess in the town</h3>
      <div className="grid md:grid-cols-3 gap-6">
      {
        Priceoptions1.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
      }
      </div>
    </div>
  );
};

export default Priceoptions;