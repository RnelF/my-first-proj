import imagePath from "../images/hero.jpg";
export default function Hero() {
  return (
    <div className="mx-auto my-8 w-96 m-0">
      <img
        className="rounded-2xl w-72 object-bottom mx-12"
        src="https://c4.wallpaperflare.com/wallpaper/429/742/368/breaking-bad-rv-wallpaper-preview.jpg"
      />
      <div className="w-24 h-24">
        <img
          src={imagePath}
          className="w-full h-full rounded-full object-cover -my-16 mx-36"
        />
      </div>
      <div className="grid justify-center text-center my-3 font-thin">
        <h2 className="font-bold text-3xl">Arnel Francia</h2>
        <p className="font-semibold ">Codebility Trainee</p>
        <p>Nelffff@gmail.com</p>
        <p>+639065412970</p>
      </div>
    </div>
  );
}
