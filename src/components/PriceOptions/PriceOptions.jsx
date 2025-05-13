import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 fitness assessment",
                "Access during staffed hours",
                "Free Wi-Fi",
                "No contract required"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 49.99,
            "features": [
                "Everything in Basic",
                "Unlimited group classes",
                "1 personal training session/month",
                "Access to sauna",
                "Nutritional guidance",
                "Member discount on products (10%)",
                "Free towel service"
            ]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 69.99,
            "features": [
                "Everything in Standard",
                "Weekly personal training sessions",
                "Priority customer support",
                "24/7 gym access",
                "Massage chair access",
                "Guest passes (4/month)",
                "Advanced fitness tracking app integration"
            ]
        },
        {
            "id": 4,
            "name": "Student",
            "price": 24.99,
            "features": [
                "Access to gym equipment",
                "Group classes (off-peak only)",
                "Discounted smoothies",
                "Study-friendly lounge access",
                "Free Wi-Fi",
                "Special exam season fitness challenges"
            ]
        },
        {
            "id": 5,
            "name": "Family Plan",
            "price": 99.99,
            "features": [
                "Includes 2 adults and 2 children",
                "All Premium features for adults",
                "Kids fitness programs",
                "Free family health consultations",
                "Weekend family yoga classes",
                "Parent-child activity zones",
                "1 free sports clinic session/month"
            ]
        }
    ]

    return (
        <div className="m-10">
            <h1 className="text-5xl">Best price in the town</h1>
            <div className="grid md:grid-cols-3 gap-5 mt-5">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;