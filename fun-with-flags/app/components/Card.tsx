type CardProps = {
    id: number;
    country: string;
    capital: string;
    region: string;
    population: number; 
}

const Card = ({id, country, capital, region, population }: CardProps) => {
    return (
        <div id={id.toString()} 
        className="h-full overflow-hidden bg-white rounded-lg shadow-lg"
            >
            <div className="aspect-video w-full">
                <img src="https://placehold.co/600x400" className="w-full h-full object-cover" />
            </div>
            <div className="p-6 text-sm text-gray-600">
                <h2 className="text-xl font-semibold mb-4">{country}</h2>
                <div className="spcece-y-2">
                    <div className="flex items-end gap-1">
                        <span className="font-semibold">Capital:</span>
                        <span>{capital}</span>
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="font-semibold">region:</span>
                        <span>{region}</span>
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="font-semibold">population:</span>
                        <span>{population}</span>
                    </div>
                </div>
            </div>
        </div >
    );  
}

export default Card;