import imagePath from "../images/hero.jpg";
import AddSave from "./AddSave";

export default function Hero() {
  return (
    <div className="flex justify-center my-8 h-96 lg:mr-10 lg:ml-10">
      <div className=" sm:w-custom-width-2 md:w-custom-width-1 lg:w-custom-width-4 relative ">
        <img
          className="rounded-2xl w-72 md:w-full sm:w-full lg:w-full lg:h-60 object-cover object-center"
          src="https://c4.wallpaperflare.com/wallpaper/429/742/368/breaking-bad-rv-wallpaper-preview.jpg"
        />
        <div className="w-24  h-24 -mt-12 absolute left-24  sm:left-44 md:bottom-20 md:left-48 md:w-32 md:h-32 lg:-bottom-6 lg:left-10 lg:w-48 lg:h-48 lg:">
          <img
            src={imagePath}
            className="w-full h-full rounded-full lg:rounded-lg lg:border lg:border-l-slate-600 object-cover"
          />
        </div>

        <div className="w-full text-center my-14 font-thin lg:my-32">
          <h2 className="font-bold text-3xl">Arnel Francia</h2>
          <p className="font-semibold">Codebility Trainee</p>
          <p>Nelffff@gmail.com</p>
          <p>+639065412970</p>
        </div>
      </div>
    </div>
  );
}
