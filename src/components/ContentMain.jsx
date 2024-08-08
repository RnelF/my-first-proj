export default function ContentMain() {
  return (
    <div className="-my-5 mx-16 flex flex-col lg:mt-20">
      <div className="flex mb-10">
        <div>
          <h1 className="text-7xl font-extrabold font-sans text-wrap lg:text-9xl">
            Breaking Code
            <span className="font-thin text-base md:text-3xl lg:text-6xl">
              ™
            </span>
          </h1>
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-3">Personal Background</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor
          tincidunt dictum. Etiam eget turpis elementum, varius sapien sed,
          rutrum lorem. Nullam volutpat volutpat risus, sed ultricies sapien
          fermentum et. Ut finibus et tortor vitae elementum. Donec nec luctus
          turpis. Morbi egestas auctor pharetra. Nulla in est enim.
        </p>
      </div>
      <div>
        <h2 className="font-bold mb-3 mt-5">Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor
          tincidunt dictum. Etiam eget turpis elementum, varius sapien sed,
          rutrum lorem. Nullam volutpat volutpat risus, sed ultricies sapien
          fermentum et. Ut finibus et tortor vitae elementum. Donec nec luctus
          turpis. Morbi egestas auctor pharetra. Nulla in est enim.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 pointZero:grid-cols-1 em:grid-cols-1 smallest:grid-cols-2 smaller:grid-cols-4 lg:grid-cols-4 lg:h-1/4 mt-8 mx-5 w-{345px}">
        <div className="w-full h-auto overflow-hidden">
          <img
            className="w-full h-full object-cove rounded-lg"
            src="https://cdn.openart.ai/stable_diffusion/2c962b1ac3d5376a36835cb21e963666257a441e_2000x2000.webp"
            alt="Image 1"
          />
        </div>
        <div className="w-full h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://i.pinimg.com/originals/83/93/cb/8393cbdba3b5edfccd115226d3380d05.jpg"
            alt="Image 2"
          />
        </div>
        <div className="w-full h-auto overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-18009-091613-gus-624-1379428737.jpg"
            alt="Image 3"
          />
        </div>
        <div className="w-full h-auto overflow-hidden">
          <img
            className="w-full h-fullobject-cover rounded-lg"
            src="https://image.cdn2.seaart.ai/2023-11-05/21805306619108357/9de4d63bfa49bfaf065fb9d7ca4f968e7d0aa809_high.webp"
            alt="Image 4"
          />
        </div>
      </div>
    </div>
  );
}
