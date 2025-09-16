const FeatureBoxes = () => {
  const features = [
    {
      title: "STUDENT",
      subtitle: "EVENTS",
      bg: "https://picsum.photos/600/400?random=1",
      overlay: "bg-pink-600/80",
    },
    {
      title: "CLASSROOM",
      subtitle: "STORIES",
      bg: "https://picsum.photos/600/400?random=2",
      overlay: "bg-orange-500/80",
    },
    {
      title: "TEACHERS",
      subtitle: "PROFILE",
      bg: "https://picsum.photos/600/400?random=3",
      overlay: "bg-cyan-600/80",
    },
  ];

  return (
    <section className="relative z-20 -mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="relative h-48 md:h-56 rounded-lg overflow-hidden shadow-lg group"
            >
              {/* Background */}
              <img
                src={item.bg}
                alt={item.subtitle}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 ${item.overlay} flex flex-col justify-center items-center text-white text-center transition duration-300 group-hover:opacity-90`}
              >
                <h3 className="text-lg md:text-xl font-extrabold">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBoxes;
