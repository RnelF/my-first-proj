export default function AddSave() {
  return (
    <div className="flex justify-center mt-16 lg:mt-48 lg:justify-start lg:ml-20">
      <div className="w-12 h-12 mr-3 lg:w-20 lg:h-20">
        <img
          className="rounded-full border border-black overflow-hidden w-full h-full"
          src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-envelope-icon-png-image_695356.jpg"
        />
        <p className="text-center text-sm font-semibold">Add</p>
      </div>
      <div className="w-12 h-12 lg:w-20 lg:h-20">
        <img
          className="rounded-full border border-black overflow-hidden w-full h-full object-scale-down"
          src="https://w7.pngwing.com/pngs/942/419/png-transparent-bookmark-favorite-love-save-like-essential-icon-thumbnail.png"
        />
        <p className="text-center text-sm font-semibold">Save</p>
      </div>
    </div>
  );
}
