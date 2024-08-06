import imagePath from "../images/hero.jpg";

export default function Hero() {
  return (
    <div className="mx-auto my-8 w-96 sm:w-custom-width-2 md:w-custom-width-1 md:mx-20 sm:mx-12 justify-center">
      <img
        className="rounded-2xl w-72 object-bottom mx-12 md:w-full sm:w-full"
        src="https://c4.wallpaperflare.com/wallpaper/429/742/368/breaking-bad-rv-wallpaper-preview.jpg"
      />
      <div className="w-24 md:w-32 md:h-32 h-24 mx-auto -mt-12 md:mx-60 sm:mx-56">
        <img
          src={imagePath}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="w-full  grid justify-center text-center my-3 font-thin md:mx-12 sm:mx-10">
        <h2 className="font-bold text-3xl">Arnel Francia</h2>
        <p className="font-semibold">Codebility Trainee</p>
        <p>Nelffff@gmail.com</p>
        <p>+639065412970</p>
      </div>
    </div>
  );
}
