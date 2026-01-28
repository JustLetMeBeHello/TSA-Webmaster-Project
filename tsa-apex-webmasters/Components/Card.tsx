interface CardProps {
  title: string;
  category: string;
  description: string;
  location: string;
}

export default function ResourceCard({ title, category, description, location }: CardProps) {
    return (   
        <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300" >
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <h3 className="text-md font-semibold mb-4 text-gray-600">{category}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-900 font-medium">Location: {location}</p>
        </div>
          );
}
