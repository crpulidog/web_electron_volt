import { FeatureItem } from "./FeatureItem";
import type { Feature } from './FeatureItem';

const features: Feature[] = [
    {
        title: "Access your files, anywhere",
        description: "Experience lightning-fast performance with our optimized code and efficient algorithms.",
        iconUrl: "/images/icon-access-anywhere.svg"
    },
    {
        title: "User-Friendly Interface",
        description: "Navigate through our intuitive interface designed for ease of use and accessibility.",
        iconUrl: "/images/icon-collaboration.svg"
    },
    {
        title: "Cross-Platform Compatibility",
        description: "Enjoy seamless compatibility across various platforms and devices.",
        iconUrl: "/images/icon-any-file.svg"
    }
];

export const Features = () => {
  return (
    <div className="flex flex-col gap-20 mt-16 p-6">
        {features.map(({title, description, iconUrl}: Feature, index: number) => (
            <FeatureItem 
                key={index} title={title} description={description} iconUrl={iconUrl}
            />
        ))}
    </div>
  )
}
