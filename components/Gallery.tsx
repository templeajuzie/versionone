export default function GallerySnippet() {
  return (
    <div className="hidden md:block">
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <h1 className="mx-auto text-center text-3xl font-semibold">Our Latest Creations</h1>
      <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-500">
        A visual collection of our most recent works - each piece crafted with intention, emotion, and style.
      </p>

      <div className="mx-auto mt-10 flex h-[400px] w-full max-w-5xl items-center gap-6">
        <div className="group relative h-[400px] w-56 flex-grow transition-all duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?q=80&w=800&h=400&auto=format&fit=crop"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h1 className="text-3xl">Prompt engineers</h1>
            <p className="text-sm">
              Bridging the gap between human intent and machine understanding through expert prompt design.
            </p>
          </div>
        </div>
        <div className="group relative h-[400px] w-56 flex-grow transition-all duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-right"
            src="https://images.unsplash.com/photo-1714976326351-0ecf0244f0fc?q=80&w=800&h=400&auto=format&fit=crop"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h1 className="text-3xl">Data scientists</h1>
            <p className="text-sm">
              Bridging the gap between human intent and machine understanding through expert prompt design.
            </p>
          </div>
        </div>
        <div className="group relative h-[400px] w-56 flex-grow transition-all duration-500 hover:w-full">
          <img
            className="h-full w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1736220690062-79e12ca75262?q=80&w=800&h=400&auto=format&fit=crop"
            alt="image"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-black/50 p-10 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            <h1 className="text-3xl">Software engineers</h1>
            <p className="text-sm">
              Bridging the gap between human intent and machine understanding through expert prompt design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
