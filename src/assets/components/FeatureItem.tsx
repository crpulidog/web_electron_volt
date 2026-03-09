export interface Feature {
    title: string;
    description: string;
    iconUrl: string;
}

export const FeatureItem = ({title, description, iconUrl}: Feature) => {
  return (
    <div className="flex flex-col text-center items-center">
        <img src={iconUrl} alt={title} />
        <div>
            <h3 className='font-bold mb-1 mt-6'>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}
